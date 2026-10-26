/* ===== Gezielte Vorbereitung nach Modulen (Lernpfad) =====
   Kapitel je Kursmodul 1–5 (Modul 5 intern als modul 7), Merkblatt (erst nach dem Üben sichtbar), Sicherheitsabfrage,
   Überkonfidenz-Liste und Modul-Abschlusstest. Nutzt Zustand S, Fragenbank QB und Anzeige showQ() der Haupt-App. */

const LP_KURS = window.LERNPFAD || [];
const LP_ZUSATZ = [
  {key:'ZA', titel:'Zusatz A – Leitfaden, Broschüre, Leitlinien', kapitel:[
    {titel:'SIM-Leitfaden Arbeitsunfähigkeit (1. Aufl. 2026)', quelle:'Leitfaden 1. Aufl. 2026', test:q=>q.modul===5&&/^Leitfaden/.test(q.thema)},
    {titel:'SIM-Broschüre «Medizinische Begutachtung in der Schweiz» (5. Aufl. 2026)', quelle:'Broschüre 5. Aufl. 2026', test:q=>q.modul===5&&/^Broschüre/.test(q.thema)},
    {titel:'Leitlinien rheumatologische Begutachtung', quelle:'Leitlinien Rheumatologie', test:q=>q.modul===5&&/^Rheuma-Leitlinie/.test(q.thema)}]},
  {key:'ZB', titel:'Zusatz B – Lernziele', kapitel:[
    {titel:'Lernziele Medizin, Medizin & Recht, Neuropsychologie', quelle:'SIM-Lernziele', test:q=>q.modul===6}]}
];
const LP_TEST_N = 25;          // Fragen im Modul-Abschlusstest
const LP_TEST_K = 15;          // davon Kprim (Prüfung: überwiegend Kprim)
const LP_BATCH = 10;           // Fragen pro Durchgang im Kapitel
const DAY = 864e5;

function lpState(){
  if(!S.lp) S.lp={};
  const L=S.lp;
  L.conf=L.conf||{}; L.over=L.over||{}; L.read=L.read||{}; L.tests=L.tests||[];
  L.cal=L.cal||{lo:{n:0,r:0},mid:{n:0,r:0},hi:{n:0,r:0}};
  return L;
}

/* ---------- Zuordnung Fragen -> Kapitel ---------- */
let LPB=null;
function lpKap(q){
  if(q.kap) return q.kap;
  const mod=LP_KURS.find(m=>m.modul===q.modul); if(!mod) return null;
  if(q.modul<=3){
    if(q.id.indexOf('kx-')===0) return null;
    const m=(q.quelle||'').match(/Kap\.\s*(\d+)/); if(!m) return null;
    let n=+m[1]; if(q.modul===3&&n===17) n=16;
    return n<=mod.kapitel.length?n:null;
  }
  const i=mod.kapitel.findIndex(c=>(c.themen||[]).indexOf(q.thema)>=0);
  return i<0?null:i+1;
}
function lpBuild(){
  if(LPB) return LPB;
  const groups={};            // Schlüssel -> {key, members, base}
  QB.forEach(q=>{
    const k=q.src||q.id;
    const g=groups[k]||(groups[k]={key:k,members:[],base:null});
    g.members.push(q);
    if(!q.src) g.base=q;
  });
  Object.values(groups).forEach(g=>{ if(!g.base) g.base=g.members[0]; });
  // Thema -> häufigstes Kapitel (für gemischte Kprim-Fragen)
  const tk={};
  Object.values(groups).forEach(g=>{
    const b=g.base; if((b.modul>4&&b.modul!==7)||b.id.indexOf('kx-')===0) return;
    const k=lpKap(b); if(!k) return;
    const key=b.modul+'|'+b.thema; (tk[key]=tk[key]||{}); tk[key][k]=(tk[key][k]||0)+1;
  });
  const kurs=LP_KURS.map(m=>({
    key:String(m.modul), modul:m.modul, titel:m.titel, zusatz:false,
    kapitel:m.kapitel.map(c=>Object.assign({id:m.modul+'.'+c.nr,groups:[]},c)), extra:[]
  }));
  const zus=LP_ZUSATZ.map(m=>({key:m.key,titel:m.titel,zusatz:true,kapitel:m.kapitel.map((c,i)=>Object.assign({id:m.key+'.'+(i+1),nr:i+1,merk:[],groups:[]},c)),extra:[]}));
  Object.values(groups).forEach(g=>{
    const b=g.base;
    if(b.modul<=4||b.modul===7){
      const mod=kurs.find(m=>m.modul===b.modul); if(!mod) return;
      let k=lpKap(b);
      if(!k){ const o=tk[b.modul+'|'+b.thema]; if(o) k=+Object.entries(o).sort((a,c)=>c[1]-a[1])[0][0]; }
      const ch=k&&mod.kapitel[k-1];
      (ch?ch.groups:mod.extra).push(g);
    } else {
      let placed=false;
      zus.forEach(m=>m.kapitel.forEach(c=>{ if(!placed&&c.test(b)){ c.groups.push(g); placed=true; } }));
      if(!placed){ const m=zus.find(m=>m.key==(b.modul===5?'ZA':'ZB')); m.extra.push(g); }
    }
  });
  const chById={}; kurs.concat(zus).forEach(m=>m.kapitel.forEach(c=>{ chById[c.id]=c; c.mod=m; }));
  LPB={kurs,zus,chById};
  return LPB;
}
const lpAll=()=>{ const b=lpBuild(); return b.kurs.concat(b.zus); };

/* ---------- Kennzahlen ---------- */
function lpPickVariant(g){ return g.members.slice().sort((a,b)=>prio(a)-prio(b))[0]; }
function lpGroupStat(g){
  // eine Gruppe gilt als gesehen/gefestigt, wenn eine ihrer Varianten es ist
  let seen=false, box=0, wrong=false;
  g.members.forEach(q=>{ const s=S.stats[q.id]; if(s){ seen=true; box=Math.max(box,s.box); if(s.wrong) wrong=true; } });
  return {seen,box,wrong};
}
function lpChapStat(ch){
  const n=ch.groups.length; let seen=0, sure=0, wrong=0, over=0;
  const L=lpState();
  ch.groups.forEach(g=>{
    const s=lpGroupStat(g); if(s.seen) seen++; if(s.box>=3) sure++; if(s.wrong) wrong++;
    if(g.members.some(q=>L.over[q.id])) over++;
  });
  return {n,seen,sure,wrong,over};
}
function lpModStat(m){
  const t={n:0,seen:0,sure:0,wrong:0,over:0};
  m.kapitel.concat([{groups:m.extra}]).forEach(c=>{ const s=lpChapStat(c); for(const k in t) t[k]+=s[k]; });
  return t;
}
const pct=(a,b)=>b?Math.round(a/b*100):0;
function lpOverList(){
  const L=lpState(), out=[];
  Object.keys(L.over).forEach(id=>{ const q=byId[id]; if(q) out.push({q,o:L.over[id],due:L.over[id].t+DAY}); });
  return out.sort((a,b)=>a.due-b.due);
}

/* ---------- Start / Übersicht ---------- */
function lpCard(){
  const nx=lpNextChapter(), ov=lpOverList().length;
  return `<div class="card"><h2>Gezielte Vorbereitung nach Modulen</h2>
    <div class="mut" style="margin-bottom:8px">Lernpfad je Kursmodul: Kapitel üben, Merkblatt, Sicherheitsabfrage, Modul-Abschlusstest.</div>
    <button class="btn" onclick="lpHome()">Lernpfad öffnen</button>
    <div class="grid" style="margin-top:10px">
      <button class="btn sec" onclick="lpGoNext()" ${nx?'':'disabled'}>Weiter im Lernpfad</button>
      <button class="btn sec" onclick="lpOver()" ${ov?'':'disabled'}>Überkonfident (${ov})</button>
    </div></div>`;
}
function lpNextChapter(){
  const b=lpBuild(); let best=null, bestScore=9;
  for(const m of b.kurs) for(const c of m.kapitel){
    if(!c.groups.length) continue;
    const s=lpChapStat(c), r=s.seen/s.n;
    if(r<0.8) return c;                       // erstes noch nicht ausreichend geübtes Kapitel
    const sc=s.sure/s.n; if(sc<bestScore){ bestScore=sc; best=c; }
  }
  return best;
}
function lpGoNext(){ const c=lpNextChapter(); if(c) lpChapter(c.id); }

function lpHome(){
  $('#ttl').textContent='Lernpfad'; $('#homeBtn').hidden=false;
  const b=lpBuild(), L=lpState();
  const card=m=>{
    const s=lpModStat(m), tests=L.tests.filter(t=>t.m===m.key);
    const last=tests.length?tests[tests.length-1]:null;
    return `<div class="card"><h2>${esc(m.titel)}</h2>
      <div class="mut">${m.kapitel.filter(c=>c.groups.length).length} Kapitel · ${s.n} Fragen · ${s.seen} geübt · ${s.sure} gefestigt${s.over?` · <b>${s.over} überkonfident</b>`:''}</div>
      <div class="bar" style="margin:8px 0"><i style="width:${pct(s.seen,s.n)}%"></i></div>
      ${last?`<div class="mut" style="margin-bottom:8px">Letzter Abschlusstest: <b>${last.pct} %</b> (${new Date(last.t).toLocaleDateString('de-CH')})</div>`:''}
      <div class="grid"><button class="btn" onclick="lpModul('${m.key}')">Kapitel</button>
      ${m.zusatz?'<span></span>':`<button class="btn sec" onclick="lpTest('${m.key}')" ${s.n?'':'disabled'}>Abschlusstest</button>`}</div></div>`;
  };
  app.innerHTML=
    `<div class="card"><div class="mut">Vorgehen: Kapitel wählen → Fragen beantworten (jeweils Sicherheit angeben) → danach Merkblatt → am Ende des Moduls Abschlusstest. Fehler und «sicher, aber falsch» kommen automatisch wieder.</div></div>`
    + b.kurs.map(card).join('')
    + `<div class="card"><h2>Überkonfidenz &amp; Kalibrierung</h2><button class="btn sec" onclick="lpOver()">Liste «sicher, aber falsch» öffnen (${lpOverList().length})</button></div>`
    + `<div class="card"><h2>Zusatzmaterial</h2><div class="mut" style="margin-bottom:8px">Leitfaden, Broschüre, Leitlinien und Lernziele – getrennt von den Kursmodulen.</div>
        <div class="grid">${b.zus.map(m=>`<button class="btn sec" onclick="lpModul('${m.key}')">${esc(m.titel.split(' – ')[0])}</button>`).join('')}</div></div>`;
}

function lpModul(key){
  const m=lpAll().find(x=>x.key===key); if(!m) return;
  $('#ttl').textContent=m.titel.split(' – ')[0]; $('#homeBtn').hidden=false;
  const L=lpState();
  const rows=m.kapitel.map(c=>{
    const s=lpChapStat(c);
    if(!s.n) return '';
    return `<div class="card" style="cursor:pointer" onclick="lpChapter('${c.id}')">
      <div class="row" style="justify-content:space-between;align-items:flex-start"><div><b>${m.zusatz?'':'Kap. '+c.nr+' · '}${esc(c.titel)}</b></div>
        ${L.read[c.id]?'<span class="chip">Merkblatt ✓</span>':''}</div>
      <div class="mut" style="margin:4px 0">${s.n} Fragen · ${s.seen} geübt · ${s.sure} gefestigt${s.wrong?` · ${s.wrong} falsch`:''}${s.over?` · <b>${s.over} überkonfident</b>`:''}</div>
      <div class="bar"><i style="width:${pct(s.seen,s.n)}%"></i></div></div>`;
  }).join('');
  const ex=m.extra.length?`<div class="mut" style="margin:6px 0 10px">${m.extra.length} gemischte Fragen ohne Kapitelzuordnung ${m.zusatz?'erscheinen im freien Üben.':'sind im Abschlusstest enthalten.'}</div>`:'';
  app.innerHTML=`<div class="card"><h2>${esc(m.titel)}</h2>
      ${m.zusatz?'':`<div class="grid"><button class="btn" onclick="lpTest('${m.key}')">Abschlusstest</button><button class="btn sec" onclick="lpPrint('${m.key}')">Merkblätter drucken</button></div>`}
      ${ex}</div>${rows}
    <button class="btn sec" onclick="lpHome()">‹ Zur Modulübersicht</button>`;
}

/* ---------- Kapitel ---------- */
function lpMerkHtml(ch){
  if(!ch.merk||!ch.merk.length) return '<div class="mut">Für dieses Kapitel liegt kein Kurz-Merkblatt vor – Quelle siehe unten.</div>'
    +`<div class="mut" style="margin-top:6px">Quelle: ${esc(ch.quelle||'')}</div>`;
  return ch.merk.map(x=>`<div class="mk"><span class="chip ${x.t==='Prüfungsfalle'?'warn':''}">${esc(x.t)}</span> ${esc(x.x)}</div>`).join('')
    +`<div class="mut" style="margin-top:8px">Quelle: ${esc(ch.quelle||'')} (verdichtete Kursunterlagen). Urteils- und Artikelangaben bitte in den Original-Folien bzw. der Broschüre verifizieren.</div>`;
}
function lpChapter(id){
  const b=lpBuild(), ch=b.chById[id]; if(!ch) return;
  const m=ch.mod, L=lpState(), s=lpChapStat(ch);
  $('#ttl').textContent=m.titel.split(' – ')[0]+(m.zusatz?'':' · Kap. '+ch.nr); $('#homeBtn').hidden=false;
  const open=!!L.read[id] || s.seen>=Math.min(s.n,5);
  const list=m.kapitel.filter(c=>c.groups.length), idx=list.indexOf(ch);
  const prev=list[idx-1], next=list[idx+1];
  const rest=ch.groups.filter(g=>!lpGroupStat(g).seen).length;
  app.innerHTML=`<div class="card"><h2>${esc(ch.titel)}</h2>
      <div class="mut">${esc(ch.quelle||'')}</div>
      <div class="mut" style="margin:6px 0">${s.n} Fragen · ${s.seen} geübt · ${s.sure} gefestigt${s.wrong?` · ${s.wrong} falsch`:''}${s.over?` · <b>${s.over} überkonfident</b>`:''}</div>
      <div class="bar" style="margin-bottom:10px"><i style="width:${pct(s.seen,s.n)}%"></i></div>
      <button class="btn" onclick="lpStartChapter('${id}',${s.n>LP_BATCH+2?LP_BATCH:0})">${s.n>LP_BATCH+2?`Nächste ${Math.min(LP_BATCH,s.n)} Fragen (Schwächen zuerst)`:`Alle ${s.n} Fragen beantworten`}</button>
      <div class="grid" style="margin-top:10px">
        <button class="btn sec" onclick="lpStartChapter('${id}',0)">Alle ${s.n}</button>
        <button class="btn sec" onclick="lpStartChapter('${id}',-1)" ${(s.wrong||s.over)?'':'disabled'}>Nur Schwächen</button></div></div>
    <div class="card"><h2>Merkblatt</h2>
      ${open?lpMerkHtml(ch):'<div class="mut">Gesperrt, bis Sie mindestens 5 Fragen dieses Kapitels beantwortet haben (erst abrufen, dann nachlesen).</div>'}</div>
    <div class="grid">${prev?`<button class="btn sec" onclick="lpChapter('${prev.id}')">‹ Kap. ${prev.nr}</button>`:'<span></span>'}${next?`<button class="btn sec" onclick="lpChapter('${next.id}')">Kap. ${next.nr} ›</button>`:'<span></span>'}</div>
    <button class="btn sec" style="margin-top:10px" onclick="lpModul('${m.key}')">‹ Kapitelliste</button>`;
}
function lpStartChapter(id,n){
  const ch=lpBuild().chById[id]; if(!ch) return;
  const L=lpState();
  let gs=ch.groups.slice();
  if(n===-1) gs=gs.filter(g=>{ const s=lpGroupStat(g); return s.wrong||g.members.some(q=>L.over[q.id]); });
  let qs=gs.map(lpPickVariant).sort((a,b)=>prio(a)-prio(b));
  if(n>0) qs=qs.slice(0,n);
  lpRun(qs,{label:ch.titel,chapter:id});
}
function lpRun(list,opt){
  if(!list.length){ alert('Keine Fragen für diese Auswahl.'); return; }
  run=Object.assign({mode:'practice',qs:list,i:0,ans:{},done:{},sc:{},conf:{},lp:true},opt||{});
  if(run.mode==='exam') tick();
  showQ();
}

/* ---------- Sicherheitsabfrage ---------- */
function lpConfUI(i,blocking){
  const c=run.conf[i], vals=[0,20,40,60,80,100];
  return `<div style="margin-top:12px"><div class="mut">Wie sicher sind Sie, dass Ihre Antwort stimmt?${blocking?' (vor der Auflösung)':' (optional)'}</div>
    <div class="tf">${vals.map(v=>`<button class="${c===v?'sel':''}" onclick="setConf(${v})">${v}&nbsp;%</button>`).join('')}</div></div>`;
}
function setConf(v){ run.conf[run.i]=v; showQ(); }
function lpAfterCheck(q,sc,conf){
  const L=lpState(); L.conf[q.id]=conf;
  const bin=conf>=70?'hi':conf>=40?'mid':'lo';
  L.cal[bin].n++; if(sc===1) L.cal[bin].r++;
  if(conf>=70&&sc===0){ L.over[q.id]={n:2,t:Date.now()}; }
  else if(sc===1&&L.over[q.id]){ L.over[q.id].n--; if(L.over[q.id].n<=0) delete L.over[q.id]; }
  save();
}
function lpFeedback(q,i){
  const c=run.conf&&run.conf[i]; if(c==null) return '';
  const sc=run.sc[i];
  let t;
  if(sc===1) t=c>=70?'sicher und richtig – gut kalibriert.':c<40?'richtig bei geringer Sicherheit: Wissen noch nicht gefestigt, bald wiederholen.':'richtig.';
  else if(sc===.5) t='teilweise richtig – die falsche Aussage gezielt nachlesen.';
  else t=c>=70?'<b>sicher, aber falsch (Überkonfidenz).</b> Die Frage kommt in 24 h wieder und muss zweimal richtig sein, bevor sie aus der Liste fällt.':'falsch bei geringer Sicherheit – Ihre Einschätzung war realistisch.';
  return `<div style="margin-top:8px">Ihre Sicherheit: <b>${c} %</b> – ${t}</div>`;
}

/* ---------- Ergebnis-Zusatz (wird in finish() eingefügt) ---------- */
function lpResultExtra(first){
  const L=lpState();
  let h='';
  const rated=run.qs.map((q,i)=>[q,i]).filter(([q,i])=>run.conf&&run.conf[i]!=null);
  if(rated.length){
    const over=rated.filter(([q,i])=>run.conf[i]>=70&&(run.sc[i]||0)===0).length;
    const hi=rated.filter(([q,i])=>run.conf[i]>=70), hr=hi.filter(([q,i])=>run.sc[i]===1).length;
    h+=`<div class="card"><h2>Kalibrierung</h2><div class="mut">${hi.length?`Bei hoher Sicherheit (≥ 70 %) waren ${hr} von ${hi.length} Antworten voll richtig.`:'Keine Antwort mit hoher Sicherheit.'} ${over?`<b>${over}</b> «sicher, aber falsch» → Überkonfidenz-Liste, Wiedervorlage in 24 h.`:'Keine Überkonfidenz in diesem Durchgang.'}</div></div>`;
  }
  if(run.test){
    const ch={}; run.qs.forEach((q,i)=>{ const g=lpChOfQ(q); const k=g?g.id:'–'; (ch[k]=ch[k]||[0,0]); ch[k][0]+=run.sc[i]||0; ch[k][1]++; });
    if(first){
      const n=run.qs.length, pts=run.qs.reduce((a,q,i)=>a+(run.sc[i]||0),0);
      L.tests.push({t:Date.now(),m:String(run.test),pts,n,pct:Math.round(pts/n*100),ch}); L.tests=L.tests.slice(-40); save();
    }
    const b=lpBuild(), order=[]; b.kurs.concat(b.zus).forEach(m=>m.kapitel.forEach(c=>order.push(c.id)));
    h+=`<div class="card"><h2>Ergebnis nach Kapiteln</h2><table>${Object.keys(ch).sort((a,c)=>(order.indexOf(a)+1||999)-(order.indexOf(c)+1||999)).map(k=>{ const c=b.chById[k]; const v=ch[k];
      return `<tr><td>${c?(c.mod.zusatz?'':'Kap. '+c.nr+' · ')+esc(c.titel):'Gemischt'}</td><td style="text-align:right;white-space:nowrap"><b>${v[0]%1?v[0].toFixed(1):v[0]}/${v[1]}</b></td></tr>`;}).join('')}</table>
      <div class="mut" style="margin-top:6px">Schwache Kapitel zuerst im Lernpfad wiederholen; falsch beantwortete Fragen kommen über die Leitner-Boxen wieder.</div></div>`;
  }
  if(run.chapter){
    const ch=lpBuild().chById[run.chapter];
    if(first&&run.qs.some((q,i)=>answered(q,run.ans[i]))){ L.read[run.chapter]=1; save(); }
    if(ch) h+=`<div class="card"><h2>Merkblatt · ${esc(ch.titel)}</h2>${lpMerkHtml(ch)}</div>`;
  }
  return h;
}
function lpChOfQ(q){
  const b=lpBuild(), k=q.src||q.id;
  for(const m of b.kurs.concat(b.zus)) for(const c of m.kapitel) if(c.groups.some(g=>g.key===k)) return c;
  return null;
}

/* ---------- Überkonfidenz-Liste ---------- */
function lpOver(){
  $('#ttl').textContent='Überkonfidenz'; $('#homeBtn').hidden=false;
  const L=lpState(), list=lpOverList(), now=Date.now(), due=list.filter(x=>x.due<=now);
  const bins=[['lo','0–30 %'],['mid','40–60 %'],['hi','70–100 %']];
  const cal=bins.map(([k,l])=>{ const v=L.cal[k]; return `<tr><td>${l}</td><td>${v.n}</td><td>${v.n?pct(v.r,v.n)+' %':'–'}</td></tr>`; }).join('');
  const hi=L.cal.hi, warn=hi.n>=5&&hi.r/hi.n<0.7;
  app.innerHTML=`<div class="card"><h2>Kalibrierung</h2>
      <table><tr><th>Ihre Sicherheit</th><th>Antworten</th><th>Voll richtig</th></tr>${cal}</table>
      <div class="mut" style="margin-top:6px">${warn?'<b>Achtung:</b> Bei hoher Sicherheit liegt Ihre Trefferquote unter 70 % – Sicherheitsgefühl und Wissen weichen ab.':'Gut kalibriert heisst: hohe Sicherheit ↔ hohe Trefferquote, geringe Sicherheit ↔ niedrigere.'}</div></div>
    <div class="card"><h2>«Sicher, aber falsch» (${list.length})</h2>
      ${list.length?`<div class="grid"><button class="btn" onclick="lpOverRun(true)" ${due.length?'':'disabled'}>Fällige üben (${due.length})</button><button class="btn sec" onclick="lpOverRun(false)">Alle üben</button></div>`
      :'<div class="mut">Keine Einträge. Antworten mit ≥ 70 % Sicherheit, die falsch sind, landen hier.</div>'}
      ${list.map(x=>{ const c=lpChOfQ(x.q); return `<div style="padding:8px 0;border-bottom:1px solid var(--bd)"><div class="mut">${c?esc(c.mod.titel.split(' – ')[0])+' · ':''}${esc(x.q.thema)} · ${x.due<=now?'<b>fällig</b>':'ab '+new Date(x.due).toLocaleString('de-CH',{day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'})} · noch ${x.o.n}× richtig nötig</div>${esc(x.q.frage)}</div>`; }).join('')}</div>`;
}
function lpOverRun(onlyDue){
  const now=Date.now(); let l=lpOverList(); if(onlyDue) l=l.filter(x=>x.due<=now);
  lpRun(l.map(x=>x.q),{label:'Überkonfidenz'});
}

/* ---------- Modul-Abschlusstest ---------- */
function lpTest(key){
  const m=lpAll().find(x=>x.key===key); if(!m) return;
  const used=new Set(), out=[];
  const take=g=>{ const q=lpPickVariant(g); const ks=q.srcs||[q.src||q.id]; if(ks.some(k=>used.has(k))) return false; ks.forEach(k=>used.add(k)); out.push(q); return true; };
  const all=[]; m.kapitel.forEach(c=>c.groups.forEach(g=>all.push({g,c}))); m.extra.forEach(g=>all.push({g,c:null}));
  const isK=g=>g.base.typ==='K';
  // 1. Runde: aus jedem Kapitel die schwächste Frage (Breite)
  m.kapitel.forEach(c=>{ const gs=c.groups.slice().sort((a,b)=>prio(lpPickVariant(a))-prio(lpPickVariant(b))); const k=gs.find(isK); for(const g of (k?[k].concat(gs):gs)){ if(out.length<LP_TEST_N&&take(g)) break; } });
  // 2. Runde: auf 60 % Kprim / 40 % Einfachauswahl auffüllen
  const rest=shuffle(all.map(x=>x.g)).sort((a,b)=>prio(lpPickVariant(a))-prio(lpPickVariant(b)));
  const cnt=()=>({k:out.filter(q=>q.typ==='K').length,a:out.filter(q=>q.typ!=='K').length});
  for(const g of rest){ if(out.length>=LP_TEST_N) break; const c=cnt(); if(isK(g)&&c.k>=LP_TEST_K) continue; if(!isK(g)&&c.a>=LP_TEST_N-LP_TEST_K) continue; take(g); }
  for(const g of rest){ if(out.length>=LP_TEST_N) break; take(g); }   // falls ein Typ nicht reicht
  const qs=shuffle(out);
  if(!qs.length){ alert('Keine Fragen vorhanden.'); return; }
  lpRun(qs,{mode:'exam',histMode:'lptest',label:'Abschlusstest '+m.titel.split(' – ')[0],test:m.key,end:Date.now()+qs.length*2*60000});
}

/* ---------- Merkblätter drucken ---------- */
function lpPrint(key){
  const m=lpAll().find(x=>x.key===key); if(!m) return;
  $('#ttl').textContent='Merkblätter'; $('#homeBtn').hidden=false;
  app.innerHTML=`<div class="noprint row" style="margin-bottom:10px"><button class="btn" style="width:auto" onclick="window.print()">Drucken / als PDF speichern</button><button class="btn sec" style="width:auto" onclick="lpModul('${m.key}')">‹ Zurück</button></div>
    <h2>${esc(m.titel)} – Merkblätter</h2>
    ${m.kapitel.filter(c=>c.groups.length||c.merk.length).map(c=>`<h3 style="margin:14px 0 4px">Kap. ${c.nr} · ${esc(c.titel)}</h3>${lpMerkHtml(c)}`).join('')}`;
}
