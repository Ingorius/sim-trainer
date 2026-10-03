/* Modul 2 – Psyche & Soma. Quelle: SIM-Repetitorium Modul 2 (2026) und Kursunterlagen 2026.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m2-'+String(n).padStart(3,'0'),modul:2,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const R='Repetitorium M2, ';

/* ---- Kap. 1: Krankheitsmodelle ---- */
add('Krankheitsmodelle','A+','Wie lautet die Aussage zu «Burnout» (ICD-10 Z73) im Rentenkontext?',
 ['Z-Kodierungen vermitteln für sich allein keinen Anspruch auf Rentenleistungen (BGer 9C_537/2011); bei der Prüfung der Indikatoren ist ihnen aber Rechnung zu tragen (BGer 8C_300/2017)',
  'Burnout ist eine F-Diagnose und begründet stets eine Rente',
  'Z-Kodierungen sind bei der Begutachtung irrelevant',
  'Burnout ist in der ICD-10 eine eigenständige affektive Störung'],
 'Merksatz: «Krise ist nicht Krankheit.» Sozialversicherungsrechtlich zählt nur eine lege artis diagnostizierte Gesundheitsstörung mit Krankheitswert – und selbst diese begründet noch keine Arbeitsunfähigkeit.',R+'Kap. 1.4 (S. 7–8)','psych');

add('Krankheitsmodelle','K','Krankheitsmodelle – bewerten Sie jede Aussage:',
 [['In der Behandlungsphase (Behandlungskosten, Taggelder) gilt das medizinische Krankheitsmodell.',true],
  ['Steht ein Rentenanspruch zur Diskussion, gilt das engere Konzept mit Ausklammerung der direkten Folgen sozialer Faktoren.',true],
  ['Mit BGE 141 V 281, 143 V 409 und 143 V 418 hat sich das juristische Modell dem medizinischen angenähert.',true],
  ['Für die Begutachtung gelten transdiagnostische Forschungsansätze (z. B. RDoC) anstelle der anerkannten Klassifikationssysteme.',false]],
 'Für die Begutachtung gelten weiterhin die anerkannten Klassifikationssysteme (ICD-10/ICD-11, DSM-5-TR); ICF und OPD-3 sind Ergänzungen. Gutachter sollen sich an eine anerkannte Klassifikation halten (BGE 130 V 396 E. 6.3).',R+'Kap. 1.3–1.4 (S. 7)','psych');

add('Krankheitsmodelle','A+','Was unterscheidet die positive von der negativen Lesart des bio-psycho-sozialen Modells (Hoff)?',
 ['Positiv: ernsthafter Austausch der drei Perspektiven ohne Verdrängungsanspruch; negativ: blosse Addition ohne Austausch mit dem Motiv, eine Perspektive durch die andere zu verdrängen',
  'Positiv: nur biologische Faktoren; negativ: nur soziale Faktoren',
  'Positiv: Reifikation; negativ: Konstruktivismus',
  'Es gibt keinen Unterschied'],
 'Zwei erkenntnistheoretische Fallstricke: «Reifikation» (psychische Krankheiten als vermeintliche «Gegenstände») und «Konstruktivismus» (Krankheit existiert erst durch Wahrnehmen, Benennen, Reagieren). Diagnosen sind Ordnungsinstrumente, keine Naturgegenstände – aber nicht beliebig.',R+'Kap. 1.2 (S. 7)','psych');

/* ---- Kap. 2: Schmerz (Ausschnitt) ---- */
add('Schmerz','K','Schmerz nach IASP – bewerten Sie jede Aussage:',
 [['Schmerz ist ein unangenehmes Sinnes- und Gefühlserlebnis, verknüpft mit aktueller oder potenzieller Gewebsschädigung oder in Begriffen einer solchen beschrieben.',true],
  ['Eine objektivierbare Läsion muss vorliegen, damit Schmerz besteht.',false],
  ['Eine Gewebsschädigung ist für Schmerz weder notwendig noch hinreichend.',true],
  ['Chronischer Schmerz ist bloss ein verlängerter Akutschmerz.',false]],
 'Chronischer Schmerz ist ein eigenständiges Krankheitsbild; die Warnfunktion ist nicht mehr gegeben; Aktivitätsverschiebung von Insula/ACC/Thalamus (akut) zu medialem präfrontalem Cortex, Amygdala und Hippocampus. Das Fehlen einer Läsion bedeutet nicht Malingering; ein psychiatrisches Leiden schliesst eine organische Erkrankung nicht aus.',R+'Kap. 2.1 (S. 9)');

add('Schmerz','A+','Wie wird chronischer primärer Schmerz nach ICD-11 beschrieben?',
 ['Schmerz in einer oder mehreren Regionen, persistierend oder wiederkehrend länger als 3 Monate, mit funktioneller Behinderung oder emotionalem Stress',
  'Schmerz, der kürzer als 3 Monate besteht',
  'Schmerz mit klar nachweisbarer organischer Ursache',
  'Schmerz ausschliesslich während depressiver Phasen'],
 'Die ICD-11 klassifiziert chronischen Schmerz erstmals eigenständig (Treede 2019); in der Schweiz noch nicht verbindlich gültig. ICD-10-Orientierung: F45.40/F45.41 (somatoforme Schmerzstörung), F45.0/F45.1 (Somatisierungsstörung), F3 (Schmerzen nur in depressiven Phasen), F62.80 (Persönlichkeitsveränderung bei chronischem Schmerz).',R+'Kap. 2.2–2.3 (S. 9)');

add('Schmerz','K','Schmerz als soziales Phänomen – bewerten Sie jede Aussage:',
 [['Frühere von Menschen verursachte Traumata sind statistisch mit späteren chronischen Schmerzstörungen assoziiert; Trauma/PTBS ist ein stark erhöhter Risikofaktor (ca. 3-fach).',true],
  ['Soziale Unterstützung verbessert Outcomes; Überfürsorglichkeit führt zu mehr Behinderung.',true],
  ['Eine neutrale (gutachterliche) Haltung kann das Schmerzverhalten verstärken.',true],
  ['«Echte Simulanten» machen nach den Kursangaben die Mehrheit der Schmerzpatienten aus.',false]],
 '«Echte Simulanten» werden auf ca. 3 % geschätzt; für die Begutachtungssituation nennt der Kurs 15 ± 15 % (Young 2015) bis über 40 % (Plohmann 2017).',R+'Kap. 2.4 (S. 10)');

/* ---- (Fortsetzung Kap. 2 – siehe unten) ---- */

add('Schmerz','K','Chronischer Schmerz nach ICD-11 – bewerten Sie jede Aussage:',
 [['Beim chronischen primären Schmerz (z. B. Fibromyalgie, chronischer Low-Back-Pain, CRPS) ist der Schmerz selbst die Krankheit.',true],
  ['Beim chronischen sekundären Schmerz ist eine Krankheit die zugrunde liegende Ursache und der Schmerz ist Symptom der Erkrankung.',true],
  ['Die ICD-11 kennt die somatische Belastungsstörung (6C20), deren Schweregrad sich u. a. an der Präokkupation, der Inanspruchnahme des Gesundheitssystems und der Einschränkung der Alltagsfunktionen bemisst.',true],
  ['Die ICD-11 stuft den Schweregrad der somatischen Belastungsstörung ausschliesslich nach der Schmerzintensität (VAS) ein.',false]],
 'Die neuen Klassifikationen ermöglichen eine Schweregradabstufung nach Symptomausprägung und Funktionsauswirkung – ein direkter Anschluss an die Indikatorenprüfung.',R+'Kap. 2.3 (S. 9–10)');

add('Schmerz','A+','Welche Aussage zu Verzerrungen (Bias) bei der Schmerzbeurteilung trifft zu?',
 ['Die Einschätzung ist eine Wahrscheinlichkeitsschätzung auf Basis intuitiver Heuristiken und damit verzerrungsanfällig; Gegenmassnahmen sind u. a. systematisches Vorgehen anhand von Standardindikatoren und das aktive Suchen von Gegenargumenten',
  'Der klinische Eindruck ist frei von Heuristiken und daher die verlässlichste Grundlage',
  'Vorinformationen wie «früheres Malingering» führen zur Überschätzung der Schmerzen',
  'Der Ankereffekt spielt bei Gutachtern keine Rolle'],
 'Typisch: Unterschätzung bei fehlender sichtbarer Verletzung oder erkennbarem Kompensationswunsch; Vorinformationen führen zur Unterschätzung; Ankereffekt (48 % blieben bei ihrer initialen Schmerzschätzung). Gegenmassnahmen nach Schleifer: Vigilanz gegenüber der eigenen Rolle, zwei Gegenargumente suchen, systematisches Vorgehen, Super-/Intervision.',R+'Kap. 2.5 (S. 10)');

add('Schmerz','A-','Welche Aussage zur alleinigen Begründung «Die Angaben zur Schmerzintensität stimmen nicht mit dem klinischen Eindruck überein» ist FALSCH?',
 ['Sie ist als alleinige Begründung für die Konsistenzprüfung ausreichend',
  'Der klinische Eindruck ist selbst das Produkt automatischer Heuristiken',
  'Verlangt ist eine systematische, indikatorengestützte Konsistenzprüfung',
  'Das Bauchgefühl ersetzt keine systematische Prüfung'],
 'Als alleinige Begründung ist sie wertlos (Prüfungsfalle).',R+'Kap. 2.5 (S. 11)');

add('Schmerz','K','Differenzialdiagnose bei chronischem Schmerz – bewerten Sie jede Aussage:',
 [['Malingering ist durch externe Anreize, Absicht und fehlende Therapiebereitschaft gekennzeichnet.',true],
  ['Die artifizielle Störung ist durch Krankheitsrolle und Absicht gekennzeichnet.',true],
  ['Somatoforme Störungen sind psychische Störungen mit Therapiebereitschaft.',true],
  ['«Pain catastrophizing» und Exaggeration sind stets Zeichen von Simulation.',false]],
 'Exaggeration und «pain catastrophizing» sind abzugrenzen und können Teil des Krankheitsgeschehens sein. Psychische Komorbiditäten bei chronischem Schmerz sind häufig (40–80 %).',R+'Kap. 2.5 (S. 11)');

/* ---- Kap. 3: Somatoforme Störungen ---- */
add('Somatoforme Störungen','A+','Was unterscheidet F45.4 (anhaltende somatoforme Schmerzstörung) von F45.41 (chronische Schmerzstörung mit somatischen und psychischen Faktoren)?',
 ['F45.4: psychische Faktoren (emotionale Konflikte/psychosoziale Belastungen) spielen die Hauptrolle für Beginn und Verlauf; F45.41: somatischer Ausgangspunkt, psychische Faktoren nur für Schweregrad, Exazerbation oder Aufrechterhaltung',
  'F45.4: somatischer Ausgangspunkt; F45.41: psychische Faktoren als Hauptursache',
  'Beide Diagnosen unterscheiden sich nur in der Dauer (3 vs. 6 Monate)',
  'F45.41 setzt eine Schizophrenie voraus'],
 'Beide verlangen mindestens 6 Monate. Wer die falsche Ziffer wählt, produziert einen klassifikatorischen Widerspruch, den der Rechtsanwender erkennt (BGE 141 V 281 E. 2.1.1).',R+'Kap. 3.2–3.3 (S. 12)');

add('Somatoforme Störungen','K','Somatische Belastungsstörung (DSM-5) – bewerten Sie jede Aussage:',
 [['Kriterium A: somatische Symptome, die belastend sind oder zu Störungen des Alltagslebens führen.',true],
  ['Kriterium B beschreibt kognitive, emotionale und verhaltensbezogene Reaktionen auf die körperlichen Symptome.',true],
  ['DSM-5 und ICD-11 verlangen weiterhin das Kriterium «organisch nicht erklärbar».',false],
  ['Kriterium C: Die Symptombelastung ist persistierend, meist länger als 6 Monate.',true]],
 'DSM-5 und ICD-11 verzichten auf das Kriterium «organisch nicht erklärbar» und stellen auf die psychobehaviorale B-Symptomatik und die Funktionsauswirkung ab.',R+'Kap. 3.4 (S. 12)');

add('Somatoforme Störungen','K','Hinweise auf Symptomausweitung/Selbstlimitierung (Bachmann) – welche Aussagen sind richtig?',
 [['Wechselnde oder ausserordentlich starke Schmerzen (VAS 7–10/10) und «jede Therapie ist gescheitert» gelten als typische Hinweise.',true],
  ['Ein nicht plausibles Ausmass der demonstrierten Behinderung im Vergleich zu Alltagsaktivität und Belastbarkeit ist ein Hinweis.',true],
  ['Jede Inkonstanz in den Angaben beweist Symptomausweitung.',false],
  ['Eine deutlich erniedrigt angegebene eigene Leistungsfähigkeit gehört zur Selbstlimitierung.',true]],
 'Beachte: Ein gewisses Mass an Inkonstanz gehört zum Leben.',R+'Kap. 3.5 (S. 13)');

add('Mini-ICF-APP','A+','Wozu dient das Mini-ICF-APP?',
 ['Zur Fremdbeurteilung von Aktivitäts- und Partizipationsstörungen bei psychischen Erkrankungen und zur quantifizierten Beurteilung des aktuellen Fähigkeitsniveaus',
  'Zur Diagnosestellung psychischer Störungen nach ICD-10',
  'Zur Beschwerdevalidierung und Simulationserkennung',
  'Zur Selbstbeurteilung der Lebensqualität durch die untersuchte Person'],
 'Es umfasst 13 Fähigkeitsdimensionen (Linden et al. 2009), u. a. Anpassung an Regeln und Routinen, Planung/Strukturierung, Flexibilität, fachliche Kompetenzen, Entscheidungs-/Urteilsfähigkeit, Durchhaltefähigkeit, Selbstbehauptung, Kontaktfähigkeit, Gruppenfähigkeit, familiäre/intime Beziehungen, Spontanaktivitäten, Selbstpflege, Verkehrsfähigkeit.',R+'Kap. 3.6 (S. 13)','psych');

add('Mini-ICF-APP','A-','Welche der folgenden Dimensionen gehört NICHT zu den 13 Fähigkeitsdimensionen des Mini-ICF-APP?',
 ['Intelligenzquotient',
  'Durchhaltefähigkeit',
  'Verkehrsfähigkeit',
  'Gruppenfähigkeit'],
 'Der Intelligenzquotient ist keine Dimension. Dreischritt der psychosomatischen Begutachtung: Diagnose → Indikatoren (Persönlichkeit, Konsistenz, Leidensdruck) → Mini-ICF (konkrete Fähigkeitsbeschreibung).',R+'Kap. 3.6 (S. 13)','psych');

/* ---- Kap. 4: Indikatorenrechtsprechung ---- */
add('Indikatorenrechtsprechung','A+','Was änderte BGE 141 V 281 (2015) im Kern?',
 ['Die Überwindbarkeitsvermutung wurde aufgegeben; das tatsächlich erreichbare Leistungsvermögen ist in einer ergebnisoffenen Gesamtbetrachtung anhand von Indikatoren in einem strukturierten Beweisverfahren zu beurteilen',
  'Die Förster-Kriterien wurden um weitere Kriterien ergänzt, die Vermutung blieb bestehen',
  'Somatoforme Schmerzstörungen begründen neu automatisch eine Rente',
  'Psychische Störungen werden nicht mehr als Gesundheitsschaden anerkannt'],
 'Alt: Förster-Praxis (BGE 130 V 352) – Vermutung, die Krankheit begründe keine Unzumutbarkeit der Erwerbstätigkeit; Widerlegung nur ausnahmsweise anhand der Foerster-Kriterien. Neu: strukturiertes Beweisverfahren mit Indikatoren (Auswirkungen auf Arbeits-/Alltagsfunktionen, funktioneller Schweregrad, Ressourcen).',R+'Kap. 4.2–4.3 (S. 15)');

add('Indikatorenrechtsprechung','A+','Welche Reihenfolge entspricht dem normativen Prüfraster des strukturierten Beweisverfahrens?',
 ['Ausschlussgründe (Aggravation u. ä.) – Diagnose mit Mindestschweregrad – funktioneller Schweregrad (Gesundheitsschädigung, Persönlichkeit, sozialer Kontext) – Konsistenzprüfung',
  'Konsistenz – Diagnose – Persönlichkeit – Ausschlussgründe',
  'Diagnose – Rente – Konsistenz – Ressourcen',
  'Sozialer Kontext – Ausschlussgründe – Therapieerfolg – Diagnose'],
 'Liegt ein Ausschlussgrund vor (BGE 131 V 49), entfällt eine versicherte Gesundheitsschädigung insoweit von vornherein. Die Diagnose muss einen diagnoseinhärenten Mindestschweregrad belegen. Konsistenz: gleichmässige Einschränkung in allen vergleichbaren Lebensbereichen und behandlungs-/eingliederungsanamnestisch ausgewiesener Leidensdruck.',R+'Kap. 4.4 (S. 15–16)');

add('Indikatorenrechtsprechung','K','Ausweitung der Indikatorenrechtsprechung – bewerten Sie jede Aussage:',
 [['BGE 143 V 409 korrigierte die «Depressionspraxis»: auch leichte bis mittelgradige Depressionen werden indikatorengestützt geprüft.',true],
  ['BGE 143 V 418 weitete das Verfahren auf sämtliche psychischen Erkrankungen aus.',true],
  ['BGE 145 V 215 unterstellte auch Abhängigkeitserkrankungen dem strukturierten Beweisverfahren.',true],
  ['Die blosse Behandelbarkeit einer Störung schliesst eine Invalidität von vornherein aus.',false]],
 'Nach BGE 143 V 409 schliesst die blosse Behandelbarkeit eine Invalidität nicht von vornherein aus. «Diagnose ist Ausgangs-, nicht Endpunkt der Begutachtung» (BGE 143 V 418).',R+'Kap. 4.5 (S. 16)');

add('Indikatorenrechtsprechung','K','Beweisrechtliche Konsequenzen – bewerten Sie jede Aussage:',
 [['Beweismass ist die überwiegende Wahrscheinlichkeit.',true],
  ['Fehlt der Nachweis der funktionellen Auswirkungen anhand der Standardindikatoren, trägt die materiell beweisbelastete versicherte Person die Folgen der Beweislosigkeit.',true],
  ['Erfüllt ein Gutachten die Massstäbe von BGE 141 V 281 und die allgemeinen Beweisanforderungen, soll eine davon losgelöste juristische Parallelüberprüfung stattfinden.',false],
  ['Eine blosse Aufzählung der Indikatoren ohne fallbezogene Diskussion genügt.',false]],
 'Der Gutachter muss «den Bogen schlagen» von Befunden und Diagnose zu Ressourcen und Funktionseinbussen. Parallelprüfungen sollen nicht stattfinden (BGer 8C_260/2017 E. 4.2.5).',R+'Kap. 4.6 (S. 16)');

add('Indikatorenrechtsprechung','A+','Was hält BGE 148 V 49 zur leicht- bis mittelgradigen depressiven Störung ohne nennenswerte Komorbiditäten fest (Ergänzung 2026)?',
 ['Sie lässt sich im Allgemeinen nicht als schwere psychische Krankheit definieren; bei bedeutendem therapeutischem Potenzial ist auch die Dauerhaftigkeit in Frage gestellt',
  'Sie ist stets eine schwere psychische Krankheit',
  'Sie begründet immer eine ganze Rente',
  'Sie ist von der Indikatorenprüfung ausgenommen'],
 'Attestieren Fachpersonen dennoch eine namhafte Einschränkung ohne schlüssige Erklärung, darf der Rechtsanwender der Folgenabschätzung die Massgeblichkeit versagen. Verlangt wird, substanziiert darzulegen, «dass, inwiefern und inwieweit» die Befunde die Arbeitsfähigkeit einschränken.',R+'Kap. 4.6 Ergänzung 2026 (S. 16–17)','psych');

add('Indikatorenrechtsprechung','A+','Eine 52-jährige Versicherte mit somatoformer Schmerzstörung gibt volle Arbeitsunfähigkeit an, führt aber den Haushalt selbständig, betreut Enkel, reist mehrwöchig, brach die Psychotherapie nach vier Sitzungen ab, Analgetika sind im Serum nicht nachweisbar. Welche Feststellung ist angemessen?',
 ['Die geltend gemachte Einschränkung ist nicht gleichmässig über die Lebensbereiche ausgewiesen und der behandlungsanamnestische Leidensdruck fehlt; die funktionellen Auswirkungen sind nicht mit überwiegender Wahrscheinlichkeit nachgewiesen',
  'Sie ist eine Simulantin',
  'Die Versicherte ist vollständig arbeitsunfähig',
  'Die Konsistenzprüfung ist nicht möglich'],
 'Keine moralische Wertung, sondern nüchterne Feststellung anhand der Konsistenzprüfung (Indikator: gleichmässige Einschränkung in allen Lebensbereichen, Leidensdruck).',R+'Kap. 4.6 Fallbeispiel (S. 17)');

/* ---- Kap. 5: Verdeutlichung, Aggravation, Simulation ---- */
add('Verdeutlichung & Simulation','A+','Welche Zuordnung ist richtig?',
 ['Verdeutlichung = unwillkürlich akzentuierte Darstellung bei subjektivem Unverstandensein (kein Täuschungsvorwurf); Aggravation = absichtlich übertriebene Darstellung vorhandener Symptome bei äusserer Motivation',
  'Aggravation = unwillkürliche Verdeutlichung ohne Anreiz',
  'Simulation = unbewusste Symptomproduktion bei Krankheitsrolle',
  'Verdeutlichung = Vortäuschen nicht vorhandener Symptome wegen äusserer Anreize'],
 'Simulation = Vortäuschen nicht vorhandener Symptome wegen äusserer Anreize. Artifizielle Störung (F68.1) = Vortäuschen ohne äussere Anreize (Krankheitsrolle) – psychische Störung. Konversion/somatoforme Störung (F44/F45) = nicht willentlich, Motivation unbewusst.',R+'Kap. 5.1 (S. 18)');

add('Verdeutlichung & Simulation','K','Begriffskontinuum – bewerten Sie jede Aussage:',
 [['Entscheidend ist die Steuerbarkeit (bewusst/willentlich) in Kombination mit dem Anreizsystem.',true],
  ['Krankheit und Aggravation schliessen sich aus.',false],
  ['Dissimulation ist das absichtliche Herunterspielen oder Verbergen von Symptomen.',true],
  ['Anosognosie ist eine krankheitsbedingte (neurologisch bedingte) Unfähigkeit, Einschränkungen zu erkennen.',true]],
 'Es besteht ein Kontinuum; Kombinationen sind häufig.',R+'Kap. 5.1 (S. 18)');

add('Verdeutlichung & Simulation','A+','Was besagt der «inverse Zusammenhang» zwischen Schädigungsschwere und Beschwerdepräsentation?',
 ['Bei leichteren Schädigungen werden oft ausgeprägtere Beschwerden gezeigt als bei schweren («kleiner Schaden – grosse Ansprüche»)',
  'Je schwerer die Schädigung, desto häufiger die Übertreibung',
  'Beschwerden sind unabhängig von der Schädigungsschwere',
  'Schwere Hirnverletzungen zeigen die höchsten Übertreibungsraten'],
 'Beispiel: Gedächtnisprobleme sind bei leichteren Traumata ausgeprägter (Green, Iverson & Allen 1999). Mindest-Übertreibungsraten nach Mittenberg 2002: 41 % bei leichter Hirnverletzung, 38 % Fibromyalgie/CFS, 33 % chronische Schmerzen – aber nur 8 % bei mittelschwerer/schwerer Hirnverletzung.',R+'Kap. 5.2 (S. 18)');

add('Verdeutlichung & Simulation','K','Warum das «Gefühl» versagt – bewerten Sie jede Aussage:',
 [['Fachleute erkennen Simulationsversuche in der forensischen Begutachtung kaum besser als der Zufall.',true],
  ['Im Rosenhan-Experiment erkannte kein Fachmitarbeiter die Täuschung, wohl aber Mitpatienten.',true],
  ['Aus der Unmöglichkeit intuitiver Lügenerkennung folgt, dass Simulation nicht festgestellt werden kann.',false],
  ['Wer eine Inkonsistenz feststellt, hat damit bereits eine Simulation bewiesen.',false]],
 'Daraus folgt Methodenzwang: systematische, multimodale Konsistenzprüfung statt Gespür. Behandler sind besonders leicht täuschbar, weil sie vertrauen müssen, um zu helfen.',R+'Kap. 5.4 (S. 19)');

add('Verdeutlichung & Simulation','A+','Welche Sprachregelung ist im Gutachten für eine nicht-authentische Symptompräsentation korrekt?',
 ['«Die präsentierten Beschwerden/Symptome/Leistungen sind medizinisch nicht erklärbar» bzw. «nicht-authentische Beschwerde-, Symptom- oder Leistungspräsentation»',
  '«Der Explorand ist ein Simulant»',
  '«Der Explorand lügt»',
  '«Es besteht Verdacht auf Betrug»'],
 'Keine moralisierenden Etiketten, keine Verdachtsdiagnosen aufgrund unklarer Symptomatik, aber die Dinge beim Namen nennen. «Konsistent ≠ authentisch; inkonsistent ≠ nicht-authentisch.»',R+'Kap. 5.5 (S. 19–20)');

add('Verdeutlichung & Simulation','K','Inkonsistenz richtig einordnen – bewerten Sie jede Aussage:',
 [['Inkonsistenz ist zunächst eine wertfreie Feststellung.',true],
  ['Zu prüfen ist stets, ob ein krankhafter Prozess zugrunde liegt (z. B. Auffassungsstörung, fehlende Krankheitseinsicht, emotionales Unbeteiligtsein bei somatoformen Störungen).',true],
  ['Ausweichendes Antworten kann bei PTBS Vermeidungsverhalten sein.',true],
  ['Widersprüche zwischen Aktenlage und Querschnittsbefund brauchen nicht offengelegt zu werden.',false]],
 'Widersprüche (Aktenlage vs. Querschnitt, Beschwerden vs. Befund, Befund vs. Zusatzuntersuchungen) sind offenzulegen und so weit wie möglich zu klären. Bei massiv anderslautender Beurteilung gegenüber dem Behandler empfiehlt sich eine fremdanamnestische Auskunft.',R+'Kap. 5.5 (S. 19)');

add('Verdeutlichung & Simulation','A+','Eine Explorandin nennt wörtlich «Intrusionen und Flashbacks, Vermeidung, Nervosität, Reizbarkeit, Verflachung der Gefühle» – die erste Google-Trefferliste zu PTBS. Welcher Lernpunkt folgt daraus?',
 ['Beschwerden immer in eigenen Worten schildern und erklären lassen',
  'Die Diagnose PTBS ist damit gesichert',
  'Internetwissen ist bei Exploranden grundsätzlich auszuschliessen',
  'Es handelt sich automatisch um Simulation'],
 'Coaching (durch Anwälte, kommerzielle Anbieter, Ratgeberliteratur, Internet) ist möglich; der Explorand «weiss, was er will».',R+'Kap. 5.3, 5.5 Fallbeispiel (S. 19–20)');

/* ---- Kap. 6: Konsistenz & Plausibilität (Anfang) ---- */
add('Konsistenz & Plausibilität','A+','Was bezweckt die Konsistenzprüfung nach den rheumatologischen Leitlinien?',
 ['Die Klärung, ob die gestellte Diagnose schlüssig und widerspruchsfrei eine funktionelle Einschränkung der Leistungsfähigkeit begründet – auf Basis einer kritischen Zusammenschau von Anamnese, Befunden, Verhaltensbeobachtung und Aktenlage',
  'Den Nachweis von Simulation',
  'Die Bestimmung des Invaliditätsgrades',
  'Die Festlegung der rechtlichen Zumutbarkeit'],
 'Sie benötigt einen interdisziplinären Ansatz. Konsistenzprüfung = Übereinstimmung von Befunden, eigenen Angaben, Akten und Fremdanamnese; Plausibilität = Verhalten, Befunde und Anamnese passen zum Annahmemodell (Klöti).',R+'Kap. 6.1 (S. 21)','rheuma');

add('Konsistenz & Plausibilität','A+','Welche Methodik nennen die psychiatrischen Leitlinien (Ebner et al. 2016) für die Konsistenzprüfung?',
 ['Allgemeine Konsistenzbeurteilung – klinische Plausibilitätsprüfung – Psychometrie (Beschwerden-/Performanzvalidierung) – ggf. aussagenpsychologische Beurteilung – Fremdanamnese – Beurteilung von Observationsmaterial und Internet',
  'Nur Selbstbeurteilungsfragebögen',
  'Nur die Verhaltensbeobachtung',
  'Ausschliesslich eine bildgebende Diagnostik'],
 'Beurteilung im Längs- und Querschnitt. Klinische Hinweise auf nicht-authentische Präsentation: diffus, vage, vorbeiredend, fehlender Nachweis der Medikamenteneinnahme, Widersprüche innerhalb der Anamnese, zwischen Anamnese und Verhalten/Testsituation sowie zu Auskünften Dritter.',R+'Kap. 6.2 (S. 21)','psych');

add('Konsistenz & Plausibilität','K','Medikamentenmonitoring – bewerten Sie jede Aussage:',
 [['Anamnestisch zu klären sind Medikament, Dosierung, Dauerhaftigkeit vs. Bedarf und aktuelle Compliance.',true],
  ['Bluttests weisen die aktuelle Einnahme nach, Urintests die letzten 2–7 Tage, Haartests 90–180 Tage.',true],
  ['Manipulationsmöglichkeiten wie synthetischer «Clean Urin» sind auszuschliessen, ein Monitoring ist daher nicht aussagekräftig.',false],
  ['Das Medikamentenmonitoring ist Teil des «Handwerkszeugs» der Beschwerdenvalidierung.',true]],
 'Manipulationsmöglichkeiten sind zu bedenken (Warmhaltevorrichtungen, «Clean Urin»); schummelresistente Verfahren wie das Ruma-Marker-System sichern Identität und Qualität der Urinprobe.',R+'Kap. 6.3–6.4 (S. 21–22)');

/* ---- Kap. 6 (Fortsetzung) ---- */
add('Konsistenz & Plausibilität','K','Beschwerdevalidierungstests – bewerten Sie jede Aussage:',
 [['TOMM und SIMS sind relativ resistent gegenüber Coaching; «Test-Coaching» ist erfolgreicher als «Symptom-Coaching».',true],
  ['Beim Rey 15-Item-Test (hohe Spezifität, niedrige Sensitivität) schliesst ein unauffälliges Resultat Aggravation aus.',false],
  ['Ein Ergebnis deutlich unter der Ratewahrscheinlichkeit bei Forced-Choice-Aufgaben spricht dafür, dass die richtigen Antworten gekannt und bewusst falsch beantwortet wurden.',true],
  ['Ein BVT-Resultat ist ein Indiz im Gesamtbild, nie der Beweis.',true]],
 'Cave «Bauchgefühl» und Abstützen auf «den einen» Test oder «die eine Inkonsistenz» (Jabat). Das zugrunde liegende Motivgefüge bleibt oft unklar. Beschwerdevalidierung: MMPI-2, SIRS; Leistungsvalidierung: TAP, TOMM, MENT, WMT, Rey.',R+'Kap. 6.5 (S. 22)');

add('Konsistenz & Plausibilität','A+','Welche Beobachtung gehört zur Prüfung der Konsistenz auf der Untersuchungsebene?',
 ['Der Vergleich des Verhaltens innerhalb und ausserhalb der formellen Prüfsituation (z. B. Lasègue formell vs. Sitzen mit gestreckten Beinen; Finger-Boden-Abstand vs. Schuhe anziehen)',
  'Die alleinige Befragung zur Schmerzintensität',
  'Der Vergleich mit der Intelligenz des Exploranden',
  'Die Auswertung der Berufsbezeichnung'],
 'Musterformulierung nach Klöti: «Die Versicherte verhält sich innerhalb und ausserhalb der Untersuchungssituation nicht gleich …» – wertfrei, mit Beschreibung der Diskrepanz. Positive Motivation, Compliance und Glaubwürdigkeit in Behandlung/Eingliederung deuten auf Ressourcen hin (BGer 9C_49/2017).',R+'Kap. 6.8 (S. 23)');

add('Konsistenz & Plausibilität','K','EKQMB-Qualitätsmassstab – bewerten Sie jede Aussage:',
 [['Der Indikator «Begründung der Konsistenz und Plausibilität» wird u. a. daran geprüft, ob eine gleichmässige Einschränkung in allen Lebenslagen besteht und ob entsprechend den Symptomen Therapien durchgeführt wurden.',true],
  ['Geprüft wird auch, ob Beschwerdevalidierungsverfahren, Observationsberichte und Inkonsistenzen diskutiert wurden.',true],
  ['Zu den sechs allgemeinen EKQMB-Qualitätsindikatoren gehören kurze Bearbeitungsfristen und ein respektvoller, fairer Ablauf.',true],
  ['Die EKQMB bewertet allein die Länge des Gutachtens.',false]],
 'Weitere allgemeine Indikatoren: angemessene Dauer des Untersuchungsgesprächs; nachvollziehbare Begründung von Diskrepanzen zu Vorberichten; Berücksichtigung von Ressourcen, Belastungen und Funktionseinschränkungen; nachvollziehbar begründete Konsistenz- und Plausibilitätsbeurteilung.',R+'Kap. 6.9 (S. 23)');

add('Konsistenz & Plausibilität','K','SIM-Leitfaden 2026 zu Authentizität, Konsistenz und Plausibilität – bewerten Sie jede Aussage:',
 [['Es geht nicht um ein moralisches Urteil über die persönliche Glaubwürdigkeit, sondern um die fachliche Einordnung, ob das Beschwerdebild in sich stimmig ist.',true],
  ['Fremdanamnesen ausserhalb der behandelnden Ärzteschaft (z. B. Arbeitgeber, Lebenspartner) brauchen die vorgängige Information und das Einverständnis der versicherten Person.',true],
  ['Bei ungenügenden Sprachkenntnissen darf ein Angehöriger dolmetschen, wenn er anwesend ist.',false],
  ['Weicht die abschliessende Beurteilung von den subjektiven Angaben ab, sind die Gründe nachvollziehbar darzulegen.',true]],
 'Bei ungenügenden Sprachkenntnissen ist zwingend eine professionelle, neutrale Dolmetschperson beizuziehen; Angehörige und Laien sind ausgeschlossen. Dokumentation von Name, Organisation und Sprache/Dialekt; verbleibende Kommunikationsbarrieren sind transparent zu dokumentieren.',R+'Kap. 6.9 Ergänzung 2026 (S. 23–24)');

/* ---- Kap. 7: Soziale und kulturelle Faktoren ---- */
add('Soziale & kulturelle Faktoren','A+','Wie ist kulturell geprägte Beschwerdeschilderung (generalisierende Lokalisation, expressive Vokabeln) gutachterlich einzuordnen?',
 ['Nicht vorschnell als Inkonsistenz oder Aggravation werten; Kultursensibilität ersetzt aber keine Konsistenzprüfung, sondern verfeinert deren Massstab (professionelle Dolmetschende, eigene Worte erfragen, Fremdanamnese)',
  'Als sicheres Zeichen von Aggravation',
  'Als irrelevant, da Kultur nicht zur Begutachtung gehört',
  'Als Beweis einer psychischen Störung'],
 'Die Schweiz ist kein einheitlicher Kulturraum (z. B. SUVA-Studie Rückenschmerz: D-CH körperliche Belastung/hohe Selbstwirksamkeit; F-CH psychische Belastung/«Erdulden und Erleiden»; I-CH Doppelbelastung Familie/Beruf). Krankheitskonzepte lassen sich mit dem Common-Sense-Model (Leventhal) ordnen: Identität, Ursachen, Dauer, Kontrolle, Folgen.',R+'Kap. 7.1 (S. 25)');

add('Soziale & kulturelle Faktoren','A+','Ordnen Sie zu: Welche Faktoren gehören zur «Gruppe 1 – Handicaps auf dem Arbeitsmarkt»?',
 ['Geringe Schulbildung, fehlende Berufsausbildung, fehlende Sprachkenntnisse, Lebensalter, fehlende Berufserfahrung',
  'Stress durch Mehrfachbelastung und Konflikte am Arbeitsplatz',
  'Schicksalsschläge und reale Zukunftsängste',
  'Private Schwierigkeiten und finanzielle Probleme'],
 'Gruppe 1 hat nichts mit einem Gesundheitsschaden zu tun; zuständig ist primär die Arbeitslosenversicherung. Gruppe 2 (Belastungsfaktoren) kann die Gesundheit direkt oder mittelbar beeinflussen (erhöhte Anfälligkeit, erschwerter Umgang mit Krankheit, direkte Auslösung von Symptomen).',R+'Kap. 7.2 (S. 25–26)');

add('Soziale & kulturelle Faktoren','K','Art. 7 Abs. 2 ATSG und soziale Faktoren – bewerten Sie jede Aussage:',
 [['Sinn von Art. 7 Abs. 2 Satz 1 ATSG ist der Ausschluss der direkten Folgen sozialer Faktoren.',true],
  ['In der Behandlungsphase (Behandlungskosten, Taggelder) gilt das medizinische Krankheitsmodell; die Einschränkung greift erst bei Rente/Invalidität.',true],
  ['«Soziale Faktoren» sind ein medizinischer Begriff ohne rechtliche Bedeutung.',false],
  ['Für verschiedene Risiken bestehen verschiedene «Töpfe» (z. B. IV/UV/KV für Krankheit und Unfall; Arbeitslosenversicherung, Sozialhilfe für andere Risiken).',true]],
 '«Soziale Faktoren» sind ein versicherungsrechtlicher Begriff mit leistungsausschliessendem bzw. leistungsbegrenzendem Charakter.',R+'Kap. 7.2 (S. 25–26)');

add('Soziale & kulturelle Faktoren','A+','Was bedeutet «Verselbständigung» eines Gesundheitsschadens, und mit welcher Prüffrage wird sie getestet?',
 ['Die psychische Störung besteht eigenständig fort; Prüffrage: Würde der Wegfall der Belastungsfaktoren zum Wegfall der Symptome führen? Wenn ja, handelt es sich um direkte Folgen der sozialen Faktoren – keine rentenbegründende Invalidität',
  'Die Störung hat sich vom Unfallereignis gelöst und ist deshalb irrelevant',
  'Die Störung ist durch Therapie vollständig geheilt',
  'Die Störung betrifft nur die Persönlichkeit'],
 'Leitsatz: Eine fachärztlich festgestellte psychische Störung von Krankheitswert muss umso ausgeprägter vorhanden sein, je stärker psychosoziale oder soziokulturelle Faktoren im Einzelfall in den Vordergrund treten (BGer 8C_481/2024 E. 5.2.1). Die Kausalitätsausscheidung ist eine wertende Zuordnung.',R+'Kap. 7.3 (S. 26)','psych');

add('Soziale & kulturelle Faktoren','A+','Fall «Bruno» (BGer 8C_724/2015): Welche Kernaussage hält das Bundesgericht fest?',
 ['Stehen überwiegend psychosoziale Belastungen im Vordergrund und hängt die psychische Verfassung entscheidend von der finanziellen Situation ab, verbietet sich die Annahme einer rentenbegründenden Invalidität – die Rente ist kein Therapieinstrument',
  'Eine ganze Rente ist bei jeder Depression zuzusprechen',
  'Finanzielle Sorgen begründen immer eine Invalidität',
  'BGE 141 V 281 schliesst eine solche Beurteilung aus'],
 'BGE 141 V 281 ändert daran nichts. Gegenbeispiel «Alisha»: Depression als chronifizierte, fixierte, eigenständige Erkrankung (Verselbständigung nachvollziehbar begründet) → Gutachten beweiswertig, Rente zugesprochen.',R+'Kap. 7.4 (S. 26)','psych');

add('Soziale & kulturelle Faktoren','K','Konsequenzen für das Gutachten (soziale Faktoren) – bewerten Sie jede Aussage:',
 [['Es ist immer (auch) zu untersuchen, ob erhebliche soziale Belastungsfaktoren vorliegen, und deren Relevanz für die Symptomatik zu erörtern.',true],
  ['Bei Unsicherheiten über das Zusammenwirken von Störung und sozialen Faktoren ist dies im Gutachten anzugeben und zu begründen (9C_311/2021).',true],
  ['Wird eine eigenständige Störung verneint, erübrigt sich jede weitere Begründung.',false],
  ['Liegt eine selbständige Störung vor, sind soziale Belastungen im Rahmen der Indikatorenprüfung im Gesamtkontext zu würdigen (Komplexe «Persönlichkeit» und «sozialer Kontext»).',true]],
 'Wird eine eigenständige Störung verneint, ist dies hinreichend zu begründen; eine Indikatorenprüfung wird gleichwohl empfohlen.',R+'Kap. 7.4–7.5 (S. 27)','psych');

add('Soziale & kulturelle Faktoren','A+','Ein Gutachten schreibt: «Dem Exploranden sind nur noch körperlich leichte Tätigkeiten zumutbar. Da er keine Ausbildung hat, sind ihm entsprechende Stellen verschlossen. Es besteht deshalb eine Arbeitsunfähigkeit von 100 %.» Was ist der Fehler?',
 ['Ein Arbeitsmarkt-Handicap (Gruppe 1: fehlende Ausbildung, Vermittelbarkeit) wird medizinisch angerechnet',
  'Die leichte Tätigkeit wurde zu wenig genau beschrieben',
  'Es fehlt die Angabe der Diagnose',
  'Der Fehler liegt in der Verwendung der Prozentangabe'],
 'Ausbildung, Sprache und Vermittelbarkeit gehören nicht in die medizinische Arbeitsfähigkeitsschätzung (ausgeglichener Arbeitsmarkt).',R+'Kap. 7.5 Prüfungsfalle (S. 27)');

/* ---- Kap. 8: Wirbelsäule ---- */
add('Wirbelsäule & chronischer Schmerz','K','Zumutbare Arbeitstätigkeit (SIM-Leitlinie 2013, Boos) – bewerten Sie jede Aussage:',
 [['Die zumutbare Arbeitsfähigkeit wird formell vom Rechtsanwender beurteilt.',true],
  ['Die ärztliche Beurteilung erfasst Defizite, Voraussetzungen für eine bestimmte Arbeitsleistung und das Risiko arbeitsbedingter Verschlechterung.',true],
  ['Die ärztliche Beurteilung umfasst auch eine Stellungnahme zu Erwerbsunfähigkeit und Rentenfragen.',false],
  ['Vier Dimensionen möglicher Einschränkung sind Sicherheit, Gesundheit, Arbeitsleistung und Lebensqualität.',true]],
 'Beispiele: Sicherheit (erhöhte Unfallgefahr, z. B. Lähmungen, Opiate), Gesundheit (drohende Verschlechterung/Rezidivrisiko), Arbeitsleistung (funktionelle Defizite), Lebensqualität (psychische Dekompensation, Erschöpfung, Angst, Depression).',R+'Kap. 8.1 (S. 28)','ortho');

add('Wirbelsäule & chronischer Schmerz','A+','Was zeigen die Twin Studies (Battié) zur Diskusdegeneration, und welche Prüfungsfalle folgt aus den Prävalenzdaten asymptomatischer Befunde?',
 ['Die Diskusdegeneration ist primär genetisch bedingt (kein Beleg für primär mechanische Verursachung); da bis zu 76 % Beschwerdefreier Diskushernien haben, darf von der Morphologie nicht direkt auf Beschwerden geschlossen werden',
  'Diskusdegeneration ist primär Folge mechanischer, repetitiver Belastung',
  'Bildbefunde sind bei Beschwerdefreien nie nachweisbar',
  'Asymptomatische Befunde sind die Ausnahme'],
 'Asymptomatische Befunde sind die Regel: Diskushernien bei 24–76 % Beschwerdefreier; bei Normalpersonen 72 % Diskusdegeneration, 67 % Protrusionen, 33 % Anulusrisse (Weishaupt). Bildbefund ist nicht Schmerzursache und nicht Arbeitsunfähigkeit.',R+'Kap. 8.2, 8.4 (S. 28–29)','ortho');

add('Wirbelsäule & chronischer Schmerz','A+','Für welche beruflichen Belastungen besteht nach den zitierten systematischen Reviews nur moderate Evidenz einer Assoziation mit Rückenschmerzen?',
 ['Für bestimmte Formen schweren Hebens (> 25–35 kg), nicht-neutrale Körperpositionen und kombinierte mechanische Belastungen',
  'Für Sitzen und Stehen/Gehen',
  'Für Schieben/Ziehen und Tragen leichter Lasten',
  'Für Drehen und Beugen allgemein'],
 'Für die meisten klassischen beruflichen Belastungsfaktoren (Sitzen, Stehen/Gehen, Schieben/Ziehen, Drehen/Beugen, Tragen) ist eine Assoziation unwahrscheinlich oder unbelegt.',R+'Kap. 8.2 (S. 28)','ortho');

add('Wirbelsäule & chronischer Schmerz','K','Kausalitätsdenken und «Morphologie-Vermutung» – bewerten Sie jede Aussage:',
 [['Vor jeder Zumutbarkeitsbeurteilung steht die umfassende State-of-the-Art-Abklärung zum Ausschluss eines morphologischen Korrelats.',true],
  ['Ein psychiatrisches Leiden schützt nicht vor organischer Erkrankung.',true],
  ['Statistische Signifikanz bedeutet substanzielle Assoziation; Assoziation beweist Kausalität.',false],
  ['«Absence of evidence is not equal to evidence of absence.»',true]],
 'Zu den neun Bradford-Hill-Kriterien zählen: Stärke, Folgerichtigkeit (Konsistenz), Spezifität, Zeitlichkeit, Plausibilität, biologischer Gradient (Dosis-Wirkung), Stimmigkeit, Experiment, Analogie. Systemische Fehler sind viel häufiger als zufällige.',R+'Kap. 8.2–8.3 (S. 28–29)','ortho');

add('Wirbelsäule & chronischer Schmerz','A+','Ein 48-jähriger Magaziner, 9 Monate nach Dekompression L4/5, MRI postoperativer Normalbefund, deutliche Dekonditionierung, persistierende belastungsabhängige Lumbalgien. Welche Beurteilung entspricht den Kursleitplanken?',
 ['Keine morphologische Grundlage für dauerhafte Einschränkung; repetitives Heben bis 30 kg vorerst nicht zumutbar (Schmerzexazerbation), angepasste wechselbelastende Tätigkeit ganztags zumutbar; arbeitsorientierte Rehabilitation indiziert, Verlauf nach Reha reevaluieren',
  'Dauerhafte volle Arbeitsunfähigkeit wegen der Operation',
  'Volle Arbeitsfähigkeit in jeder Tätigkeit, keine Reha nötig',
  'Rente wegen Dekonditionierung'],
 'Bei Dekonditionierung lautet die Antwort Rehabilitation, nicht Dauerarbeitsunfähigkeit; die Mitwirkungspflicht ist festzuhalten. Postoperativer Normalbefund: normale Belastbarkeit; relevante morphologische Veränderungen: Einschränkung vor allem wegen Schmerzzunahme; stark pathologische Wirbelsäule: wegen Gefahr der Verschlechterung.',R+'Kap. 8.4–8.5 (S. 29–30)','ortho');

add('Wirbelsäule & chronischer Schmerz','K','Rehabilitation und Flag-System – bewerten Sie jede Aussage:',
 [['Yellow Flags sind psychische Faktoren wie Angst-Vermeidungs-Überzeugungen und Katastrophisieren.',true],
  ['Blue Flags betreffen arbeitsplatzbezogene Wahrnehmungen.',true],
  ['Black Flags betreffen versicherungsmedizinische bzw. systemische Faktoren.',true],
  ['Die EFL ist ein validierter, allgemein verbindlicher Beurteilungsmassstab.',false]],
 'Die EFL liefert nützliche Zusatzinformationen zum Belastbarkeitsprofil, ist aber kein validierter Beurteilungsmassstab. Psychosoziale Faktoren sind das Haupthemmnis erfolgreicher Rehabilitation; Schmerzedukation und KVT erzielen die besten Resultate.',R+'Kap. 8.5 (S. 29)','ortho');

/* ---- Kap. 9: Rehabilitationspotenzial, Waddell ---- */
add('Rehabilitationspotenzial','A+','Wann stellt sich gutachterlich die Frage der Rehabilitation statt eines Fallabschlusses?',
 ['Wenn der Endzustand noch nicht erreicht ist und mit Rehabilitation eine Verbesserung von Funktionen und/oder Beschwerden wahrscheinlich erreichbar wäre (z. B. bisher nur unzureichende ambulante Therapie)',
  'Immer, wenn eine Diagnose gestellt wurde',
  'Nur wenn die versicherte Person eine Rente beantragt',
  'Nie – die Rehabilitationsfrage ist rein rechtlich'],
 'Modul-1-Anker: Der UVG-Rentenanspruch entsteht erst, wenn von der Fortsetzung der Behandlung keine namhafte Besserung mehr erwartet werden kann. Arbeitsorientierte Reha: Belastbarkeit evaluieren, Arbeitsanforderungen klären, Abgleich Anforderungen ↔ Fähigkeiten, Zielerarbeitung, Training.',R+'Kap. 9.1 (S. 31)');

add('Rehabilitationspotenzial','K','Waddell-Zeichen – bewerten Sie jede Aussage:',
 [['Die fünf Kategorien sind Druckempfindlichkeit, Scheinmanöver, Ablenkung, fehlende Neuroanatomie und Überreaktion.',true],
  ['Positive Waddell-Zeichen beweisen eine Simulation.',false],
  ['Positive Waddell-Zeichen sind negative Prädiktoren für den Reha-Erfolg.',true],
  ['Die Zeichen begründen eine vertiefte, oft interdisziplinäre Abklärung – kein Verdikt.',true]],
 'Waddell-Zeichen belegen nicht-organische Einflussfaktoren (z. B. Fear-Avoidance, Angst, Depression), weder Simulation noch fehlende Erkrankung. Weitere negative Prädiktoren (Oesch 2002): Schmerzangabe 9–10 auf der NRS, Unfähigkeit zum 3-Minuten-Stufentest, positiver Pseudokraft-Test.',R+'Kap. 9.2 (S. 31)','ortho');

add('Rehabilitationspotenzial','A+','Welche vier Bereiche umfasst die systematische Evaluation von Symptomausweitung?',
 ['Schmerzbeschreibung, Schmerzverhalten, Leistungsverhalten, Konsistenz',
  'Diagnose, Prognose, Therapie, Kosten',
  'Befund, Bildgebung, Labor, Anamnese',
  'Arbeitsplatz, Familie, Hobby, Ausbildung'],
 'Schmerzbeschreibung: undifferenziert/globalisierend; Schmerzverhalten: nicht adäquat/demonstrativ; Leistungsverhalten: nicht adäquat/selbstlimitierend; Konsistenz: mehrere Inkonsistenzen.',R+'Kap. 9.2 (S. 31)');

add('Rehabilitationspotenzial','K','Faktoren des Reha-Potenzials – bewerten Sie, ob sie reha-positiv (richtig) oder reha-negativ (falsch) sind:',
 [['Medizinisches Verbesserungspotenzial und Interesse/Einverständnis des Patienten für eine Reha.',true],
  ['Realistische Aktivitäts- und Berufsziele sind erarbeitbar; Leistungsbereitschaft ist vorhanden.',true],
  ['Überwiegend passive Therapieerwartung und wenig Eigenverantwortung.',false],
  ['Deutliche Hinweise auf erhebliche Symptomausweitung, insbesondere geringe Leistungsbereitschaft.',false]],
 'Beurteilung des Reha-Potenzials = Abwägen positiver und negativer Faktoren. Symptomausweitung und passive Erwartung senken die Erfolgswahrscheinlichkeit, heben aber die Mitwirkungspflicht nicht auf; oft ist der dokumentierte Reha-Versuch der beste Beleg.',R+'Kap. 9.3 (S. 31–32)');

add('Rehabilitationspotenzial','A+','Herr K., 32, mit erheblicher Symptomausweitung (Hinken nur im Test, Abbruch Hebetest bei 7,5 kg), Anwalt involviert, aber Eingliederungswille und Arbeitsvertrag mit leichter Arbeit vorhanden. Welche Lehre zieht der Kurs?',
 ['Trotz erheblicher Symptomausweitung kann ein strukturierter, dokumentierter Reha-Versuch indiziert sein; die Abwägung ist offen zu begründen',
  'Bei Symptomausweitung ist Reha grundsätzlich kontraindiziert',
  'Bei beteiligtem Anwalt wird keine Reha empfohlen',
  'Es ist sofort der Fall abzuschliessen'],
 'Eine erfolglose Reha (Fall Herr P.) widerlegt die Indikationsstellung nicht rückwirkend; Ungünstige Faktoren sind u. a. lange Dauer, fortgeschrittenes Alter, geringe sprachliche/berufliche Ressourcen, hoher Medikamentenkonsum, laufendes Gerichtsverfahren.',R+'Kap. 9.3 (S. 32)');

/* ---- Kap. 10: Observation ---- */
add('Observation','A+','Welche gesetzliche Grundlage erlaubt Sozialversicherungen seit dem 1. Oktober 2019 Observationen?',
 ['Art. 43a ATSG – bei begründetem Verdacht',
  'Art. 59 Abs. 5 IVG – ohne weitere Voraussetzungen',
  'Art. 146 StGB',
  'Art. 152 ZPO'],
 'Nach dem EGMR-Urteil hielt das Bundesgericht fest, dass Art. 59 Abs. 5 IVG keine ausreichende Grundlage war (BGer 9C_806/2016); im konkreten Fall blieben die Beweismittel verwertbar. Art. 146 StGB = Betrug (vorgetäuschte Arbeitsunfähigkeit möglich).',R+'Kap. 10.1 (S. 33)');

add('Observation','K','Observation im Privatversicherungsrecht (BGE 136 III 410) – bewerten Sie jede Aussage:',
 [['Das EGMR-Urteil lässt sich nicht auf privatrechtliche Streitigkeiten übertragen.',true],
  ['Eine Observation ist nicht widerrechtlich, wenn das Interesse an der Verhinderung eines Versicherungsbetrugs das Persönlichkeitsinteresse überwiegt.',true],
  ['Abwägungskriterien sind u. a. Ort (öffentlicher Raum), Dauer, Inhalt (von jedermann wahrnehmbare Vorgänge) und Geeignetheit/Erforderlichkeit der Mittel.',true],
  ['Im Zivilprozess darf jedes Beweismittel unabhängig von seiner Beschaffung verwendet werden.',false]],
 'Im Zivilprozess beschaffen die Parteien die Beweise selbst und dürfen dabei nur nicht rechtswidrig vorgehen (Art. 152 Abs. 2 ZPO).',R+'Kap. 10.1 (S. 33)');

add('Observation','A+','Wie ist Observationsmaterial im Gutachten methodisch zu verwerten?',
 ['Der Gutachter sichtet es selbst, gleicht konkret die Bewegungsmuster mit den geltend gemachten Einschränkungen ab und integriert es wertfrei in die Konsistenzprüfung; die Anordnung einer Observation bleibt Sache des Versicherungsträgers',
  'Er ordnet bei Verdacht selbst eine Observation an',
  'Er übernimmt die Zusammenfassung des Observationsberichts ungeprüft',
  'Er ignoriert es, weil es kein medizinischer Befund ist'],
 'Kurzzeitige gute Funktion unter Beobachtung widerlegt nicht jede Einschränkung (z. B. medikamentös bedingte kurzzeitige Besserung prüfen). Die Abgrenzung zu F68.0 (Entwicklung körperlicher Symptome aus psychischen Gründen) bleibt zu beachten – auch massive Diskrepanzen können Ausdruck einer Störung sein.',R+'Kap. 10.2 (S. 33–34)');

/* ---- Kap. 11: Leitlinien, Gutachterrolle ---- */
add('Leitlinien & Gutachterrolle','A+','Wie unterscheiden sich Richtlinie, Leitlinie und Empfehlung nach Verbindlichkeit?',
 ['Richtlinie: unbedingt zu befolgen; Leitlinie: prinzipiell zu befolgen, begründete Abweichung im Einzelfall möglich; Empfehlung: geringster Verbindlichkeitsgrad',
  'Richtlinie: unverbindlich; Leitlinie: verbindlich; Empfehlung: gesetzlich',
  'Alle drei sind gleich verbindlich',
  'Leitlinie: unbedingt zu befolgen; Richtlinie: nur Empfehlung'],
 'Etablierte Qualitätskriterien: formale Gestaltung, Verständlichkeit, Transparenz, Vollständigkeit, wissenschaftliche Grundlagen, Wirtschaftlichkeit – mit Nachvollziehbarkeit als übergeordnetem Kriterium.',R+'Kap. 11.1 (S. 35)');

add('Leitlinien & Gutachterrolle','K','Leitlinienlandschaft Schweiz – bewerten Sie jede Aussage:',
 [['Die Begutachtungsleitlinien Versicherungsmedizin (allgemeiner Teil) datieren vom 1. Juli 2020 und wurden von 6 Fachgesellschaften getragen.',true],
  ['Die Leitlinien zur Konsensbeurteilung bei bi-/polydisziplinären Begutachtungen verlangen in komplexen Fällen eine Konsensuskonferenz; unüberbrückbare Diskrepanzen sind transparent zu dokumentieren.',true],
  ['Fremdanamnese ist nach den Leitlinien ohne Einwilligung zulässig.',false],
  ['Zur SIM-Hilfsmittel gehört die Broschüre «Zumutbare Arbeitstätigkeit – Wegleitung zur Einschätzung der zumutbaren Arbeitstätigkeit».',true]],
 'Fremdanamnese nur mit Einwilligung. In einfachen Fällen genügt eine schriftliche Konsensfindung.',R+'Kap. 11.2 (S. 35)');

add('Leitlinien & Gutachterrolle','A+','Welche Reihenfolge entspricht der Beurteilungsmethodik der psychiatrischen Leitlinien (Ebner et al. 2016)?',
 ['Diagnosen/Persönlichkeit → Schweregrad → Konsistenz/Validität/Plausibilität → Prognose → Aktivität (Mini-ICF-APP) → soziale Teilhabe (Arbeitsfähigkeit)',
  'Arbeitsfähigkeit → Diagnose → Prognose → Schweregrad',
  'Konsistenz → Rente → Diagnose → Aktivität',
  'Prognose → Diagnose → Konsistenz → Schweregrad'],
 'Die zumutbare Arbeitsfähigkeit beurteilt der Rechtsanwender; die SGR empfiehlt einen Prognosehorizont von etwa zwei Jahren. Jedem Beweisthema von BGE 141 V 281 entspricht ein Leitlinienabschnitt.',R+'Kap. 11.3 (S. 35)','psych');

add('Leitlinien & Gutachterrolle','K','Kritikpunkte aus Anwaltssicht (Landolt) – bewerten Sie jede Aussage:',
 [['Knappe Leerformeln wie «kann leichte wechselbelastende Tätigkeiten ausführen» ohne Angabe objektiver Kriterien sind unzureichend.',true],
  ['Aktenzusammenfassungen sollen umfangmässig dominieren.',false],
  ['Beurteilung nach aktuellem medizinischem Fachwissen mit Quellenangabe wird verlangt; blosse «Berufserfahrung» genügt nicht.',true],
  ['Fehlende Sachkunde begründet Befangenheit.',false]],
 'Fehlende Sachkunde begründet keine Befangenheit, sondern ist bei der Beweiswürdigung zu berücksichtigen. Verlangt: vollständige Äusserung zu den medizinischen Tatfragen (BGE 132 V 393 E. 3.2), nachvollziehbare Begründung und Auseinandersetzung mit unterschiedlichen Meinungen.',R+'Kap. 11.4 (S. 36)');

add('Leitlinien & Gutachterrolle','K','Befangenheit – bewerten Sie jede Aussage:',
 [['Befangenheit besteht bei Umständen, die geeignet sind, Misstrauen in die Unparteilichkeit zu erwecken (eigene Interessen, besondere Sympathien/Antipathien, einseitige Kontakte, Gefälligkeitsgutachten).',true],
  ['Der regelmässige Beizug eines Gutachters durch den Versicherungsträger begründet für sich Befangenheit.',false],
  ['Anzahl der in Auftrag gegebenen Gutachten und Honorarvolumen begründen für sich keine Befangenheit.',true],
  ['Subjektive Empfindungen der Parteien genügen zur Ablehnung; objektive Gründe sind nicht nötig.',false]],
 'Verlangt sind objektive Gründe; ein Anstellungsverhältnis begründet für sich keine mangelnde Objektivität.',R+'Kap. 11.5–11.6 (S. 36–37)');

add('Leitlinien & Gutachterrolle','K','Revision per 1. Januar 2022 (ATSG/ATSV) – bewerten Sie jede Aussage:',
 [['Bei mono- und bidisziplinären Gutachten gibt es einen Einigungsversuch bei Ablehnung der vorgeschlagenen Sachverständigen (Art. 7j ATSV).',true],
  ['Das Untersuchungsgespräch wird in Ton aufgezeichnet (Art. 44 Abs. 6 ATSG, Art. 7k ATSV).',true],
  ['Es wurde die Eidgenössische Kommission für Qualitätssicherung eingeführt (Art. 7p ATSV).',true],
  ['Die Sistierung des Begutachtungsrechts einer Stelle rechtfertigt das Aufrollen rechtskräftig entschiedener Verfahren.',false]],
 'Eine Sistierung (z. B. PMEDA) rechtfertigt kein Zurückkommen auf rechtskräftig entschiedene Verfahren (BGer 9C_776/2023). Vorgaben nur in fachlicher Hinsicht (Art. 7m ATSV).',R+'Kap. 11.5 (S. 36)');

add('HWS-Beschleunigungstrauma','K','HWS-Beschleunigungstrauma und Kausalität – bewerten Sie jede Aussage:',
 [['Nach der 72-Stunden-Regel müssen Nacken-/HWS-Beschwerden innert maximal 72 Stunden auftreten, damit der natürliche Kausalzusammenhang bejaht werden kann.',true],
  ['Die Latenzzeit gilt für das gesamte typische Beschwerdebild.',false],
  ['Die Beweisregel «post hoc ergo propter hoc» ist ohne strukturelle Läsionen beweisrechtlich unzulässig.',true],
  ['Eine strukturelle Hirnschädigung ist beim HWS-Beschleunigungstrauma wissenschaftlich nachgewiesen.',false]],
 'Die Latenzzeit bezieht sich einzig auf die Nacken-/HWS-Beschwerden (U 215/05). Neuropsychologische Störungen können auftreten, sind aber nicht mit einer Hirnverletzung gleichzusetzen (chronischer Schmerz, Schlafstörung, Medikation, psychische Störungen). Bei Anhaltspunkten für Chronifizierung ist in der Regel nach rund sechs Monaten eine polydisziplinäre Begutachtung zu veranlassen (BGE 134 V 109).',R+'Kap. 11.7 (S. 37)','neuro');

add('Leitlinien & Gutachterrolle','K','Dos and Don\'ts laut SIM-Broschüre 2026 – bewerten Sie jede Aussage:',
 [['Der Aktenauszug erfolgt chronologisch zu Beginn, grundsätzlich ohne Bewertungen.',true],
  ['Präsenzzeit und Rendement sind getrennt auszuweisen und gesamthaft zu verdichten; Einschränkungen werden nicht separat quantifiziert und addiert.',true],
  ['Juristische Ausführungen im Gutachten gelten als Kompetenzüberschreitung und können erhebliche Zweifel an der Schlüssigkeit begründen.',true],
  ['Für die Untersuchungsdauer bestehen feste Mindestvorgaben.',false]],
 'Für die Untersuchungsdauer gibt es keine Vorgaben – massgeblich ist die inhaltliche Vollständigkeit und Schlüssigkeit. Der retrospektive Verlauf der Arbeitsfähigkeit ist zwingend zu beurteilen oder es ist zu begründen, warum nicht beurteilbar. Verdachtsdiagnosen tragen keine Arbeitsunfähigkeitsminderung.',R+'Kap. 11 Ergänzung 2026 (S. 38)');

/* ---- Kap. 12: Prüfungstraining ---- */
add('Prüfungstraining','K','Wahr oder falsch (Schnellrepetitorium Modul 2) – bewerten Sie jede Aussage:',
 [['Bei mittelschweren bis schweren Hirnverletzungen ist die Übertreibungsrate höher als bei leichten Schädel-Hirn-Traumata.',false],
  ['Der Rey-15-Item-Test hat eine hohe Spezifität, aber eine niedrige Sensitivität.',true],
  ['Eine Z-Kodierung (z. B. Z73 «Burnout») kann für sich allein einen Rentenanspruch begründen.',false],
  ['Nach BGE 143 V 418 sind rein diagnostische Unterscheidungen für die Einschätzung des Leistungsvermögens wenig aussagekräftig.',true]],
 'Die Übertreibungsrate ist bei leichten Verletzungen höher (41 % vs. 8 %).',R+'Kap. 12.3 (S. 39–40)');

add('Prüfungstraining','A+','Eine Explorandin schildert vorhandene Rückenschmerzen dramatisch überzeichnet, seit die IV-Stelle einen Vorbescheid erlassen hat; ein äusserer Anreiz ist offensichtlich, die Schmerzen sind teilweise medizinisch erklärbar. Welcher Begriff passt?',
 ['Aggravation (absichtlich übertriebene Darstellung vorhandener Symptome bei äusserer Motivation)',
  'Simulation (Vortäuschen nicht vorhandener Symptome)',
  'Verdeutlichung ohne äussere Motivation',
  'Artifizielle Störung'],
 'Die Schmerzen sind teilweise vorhanden (daher keine Simulation) und es besteht ein äusserer Anreiz (daher nicht blosse Verdeutlichung oder artifizielle Störung). Krankheit und Aggravation schliessen sich nicht aus.',R+'Kap. 12.4 Fall B; Kap. 5.1');

add('Prüfungstraining','A+','Im TOMM resultiert ein Wert deutlich unter der Ratewahrscheinlichkeit; klinisch bestehen zugleich Hinweise auf eine mittelgradige depressive Episode. Wie ist das Testergebnis zu formulieren/gewichten?',
 ['Als nicht-authentische Leistungspräsentation bzw. Hinweis auf ungültige Leistung, als Indiz im Gesamtbild gewürdigt; die depressive Episode bleibt gesondert zu beurteilen, ohne automatisch bewusste Täuschung oder volle Arbeitsfähigkeit abzuleiten',
  'Als Beweis einer bewussten Täuschung und damit Wegfall jeder Erkrankung',
  'Als Beweis der depressiven Episode',
  'Das Testergebnis ist wegen der Depression unbrauchbar und wird nicht erwähnt'],
 'BVT-Resultat = Indiz, nie der Beweis. Ungültige Testleistungen bedeuten nicht automatisch «keine Erkrankung» oder «volle Arbeitsfähigkeit».',R+'Kap. 12.4 Fall D; Kap. 6.5');

add('Prüfungstraining','A+','Im polydisziplinären Gutachten beurteilen drei Disziplinen die Arbeitsfähigkeit auf 80 %, der vierte Experte auf 0 %; eine Einigung gelingt nicht. Wie ist nach den Konsensleitlinien vorzugehen?',
 ['Es ist eine Konsensuskonferenz durchzuführen; unüberbrückbare Diskrepanzen sind transparent zu dokumentieren und zu begründen',
  'Es gilt automatisch der Mehrheitswert (80 %)',
  'Es wird der Durchschnitt gebildet',
  'Das Gutachten wird zurückgezogen'],
 'Leitlinien zur Konsensbeurteilung (Stand 4. Dezember 2020): fächerübergreifende Konsensfindung, Bedeutung des fallführenden Experten; in einfachen Fällen schriftlich, in komplexen Fällen Konsensuskonferenz.',R+'Kap. 12.4 Fall F; Kap. 11.2');

/*END*/
})();
