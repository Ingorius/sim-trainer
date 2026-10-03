/* Leitfäden & Broschüren – SIM-Leitfaden zur gutachterlichen Einschätzung der Arbeitsunfähigkeit (1. Aufl. 2026),
   SIM-Broschüre «Medizinische Begutachtung in der Schweiz» (5. Aufl. 2026), Leitlinien rheumatologische Begutachtung.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m5-'+String(n).padStart(3,'0'),modul:5,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const LF='SIM-Leitfaden AUF 2026, ';

/* ---- Leitfaden Teil A: Grundlagen, Akten ---- */
add('Leitfaden: Ausgangslage & Akten','K','Rechtliche Ausgangslage und Rolle der Gutachterin (Leitfaden) – bewerten Sie jede Aussage:',
 [['Gutachtende brauchen keine detaillierten juristischen Kenntnisse, aber ein Verständnis der grundlegenden rechtlichen Rahmenbedingungen (z. B. Art. 44 ATSG) und der Anforderungen von EKQMB und Rechtsprechung an Gutachten.',true],
  ['Die rechtliche Würdigung und die Entscheidung über Leistungsansprüche gehören nicht zum Aufgabenbereich der Gutachtenden, sondern sind Sache der rechtsanwendenden Stelle.',true],
  ['Gutachtende sind allein der medizinischen Wissenschaft verpflichtet und orientieren sich an den Leitlinien der Fachgesellschaften.',true],
  ['Die abschliessende Beurteilung, welche Arbeitsleistungen rechtlich noch zugemutet werden können, trifft die Gutachterin.',false]],
 'Die abschliessende Beurteilung der rechtlichen Zumutbarkeit bleibt der zuständigen Versicherung bzw. dem Gericht vorbehalten. Die Struktur und Standardfragen für IV-Gutachten sind in den Anhängen III–V des KSVI vorgegeben.',LF+'A.1.a');

add('Leitfaden: Ausgangslage & Akten','K','Zu klärende Punkte vor Annahme eines IV- bzw. UV-Gutachtens – bewerten Sie jede Aussage:',
 [['Bei IV: Erstanmeldung, Neuanmeldung oder Revision? Bei Revision: auf welche medizinische Beurteilung stützte sich die letzte Einschätzung und wann wurde die Rentenverfügung erlassen?',true],
  ['Bei IV: Seit wann besteht eine ununterbrochene Arbeitsunfähigkeit von mindestens 40 %?',true],
  ['Bei UV/MV: Handelt es sich um Unfall (Art. 4 ATSG), unfallähnliche Körperschädigung (Art. 6 Abs. 2 UVG) oder Berufskrankheit (Art. 9 Abs. 1 UVG), und welche unfallspezifischen Fragenkomplexe (natürliche Kausalität, medizinischer Endzustand, Integritätsschaden, Heilbehandlung) sind zu beantworten?',true],
  ['Die Frage, ob das Gutachten erstes unabhängiges Gutachten, Verlaufs- oder Obergutachten ist, ist für die Begutachtung unerheblich.',false]],
 'Zu klären ist auch, ob ein Gericht das Gutachten angeordnet und Kritik an Vorgutachten oder RAD-Beurteilung geübt hat; ob Status (erwerbstätig, teilerwerbstätig, Haushalt) und Anforderungsprofile bekannt sind; ob zusätzliche Fragen neben dem Standardkatalog verständlich und beantwortbar sind.',LF+'A.1.b–c');

add('Leitfaden: Ausgangslage & Akten','K','Unabhängigkeit und Unparteilichkeit (Leitfaden) – bewerten Sie jede Aussage:',
 [['Tatsächliche Befangenheit muss nicht nachgewiesen werden; es genügen Umstände, die den Anschein der Befangenheit erwecken.',true],
  ['Fehlende Unabhängigkeit besteht bei wirtschaftlicher Abhängigkeit vom Auftraggeber oder finanziellen Interessen am Ausgang der Begutachtung.',true],
  ['Befangenheit kann auch aus öffentlichen Äusserungen zu strittigen Fachfragen mit dem Eindruck einer vorgefassten Meinung folgen.',true],
  ['Die Kenntnis der zu begutachtenden Person aus früherer Behandlung oder Begutachtung ist bei einem Verlaufsgutachten stets ausgeschlossen.',false]],
 'Bei einem Verlaufsgutachten kann die Kenntnis gerade gewünscht sein. Anschein der Befangenheit durch Verhalten: unsachliche/abwertende Äusserungen, nicht offengelegte einseitige Kontakte mit einer Partei, Missachtung von Weisungen, Verwendung von ohne Wissen der Person beschafften Informationen, Abweichung vom Auftrag mit parteiischer Tendenz, Beantwortung auftragsfremder Fragen, Nichtinformation der Versicherung über Probleme (z. B. fehlerhafte Tonaufnahme).',LF+'A.1.d');

add('Leitfaden: Ausgangslage & Akten','K','Aktenstudium (Leitfaden) – bewerten Sie jede Aussage:',
 [['Versicherungsinterne medizinische Beurteilungen haben keinen Mitwirkungsanspruch der Versicherten; schon geringe Zweifel genügen, um ihnen den Beweiswert abzusprechen und einen Anspruch auf ein Gutachten nach Art. 44 ATSG zu begründen.',true],
  ['Gutachtende diskutieren versicherungsinterne Beurteilungen und Privatgutachten aus rein medizinischer Sicht kritisch.',true],
  ['Akten über Eingliederungsmassnahmen (Berufsabklärungen, Arbeitsversuche, Umschulungen) sind für die Beurteilung relevant, weil sie Erkenntnisse zur Leistungsfähigkeit liefern.',true],
  ['Bildgebende und apparative Abklärungen können allein die Grundlage der gutachterlichen Beurteilung bilden.',false]],
 'Bildgebung/Apparatives ist interpretationsbedürftig und in der Objektivität eingeschränkt (falsch-positive und -negative Befunde möglich); entscheidend ist eine medizinisch plausible Gesamtbetrachtung. Weitere Untersuchungen nur, wenn für die Beantwortung entscheidend. Medikamentenspiegel können zur Behandlungs- und Konsistenzbeurteilung helfen.',LF+'A.2.a–e');

add('Leitfaden: Ausgangslage & Akten','K','Neuropsychologie, Privatgutachten, Case Management, Observation (Leitfaden) – bewerten Sie jede Aussage:',
 [['Nicht valide neuropsychologische Resultate bedeuten nicht, dass juristisch Beweislosigkeit vorliegt und die Arbeitsfähigkeit nicht beurteilt werden kann; ein Nachweis mit überwiegender Wahrscheinlichkeit wird dennoch verlangt.',true],
  ['Beschwerdevalidierung wird in der Neuropsychologie nie isoliert, sondern nur im Rahmen einer umfassenden Untersuchung eingesetzt.',true],
  ['Ein Privatgutachten unterliegt der freien Beweiswürdigung des Gerichts und kann Zweifel an einem bestehenden Gutachten begründen; Gutachtende diskutieren es als Teil der Akten.',true],
  ['Observationsmaterial erlaubt ohne Weiteres eine Aussage zur Dauerbelastbarkeit; Mängel des Materials sind nicht zu erwähnen.',false]],
 'Observationsmaterial ist professionell und kritisch zu prüfen: abgeschnittene Sequenzen, fehlender Kontext, Identifikation, echte Belastung oder Momentaufnahme; methodische Schwächen und Widersprüche sind sachlich zu benennen, ohne voreilige Schlüsse. Case-Manager-Berichte sind wertvolle ergänzende Quellen (Belastbarkeit im Alltag, soziale/psychische Faktoren).',LF+'A.2.f–i');

/* ---- Leitfaden Teil A: Untersuchung, Anamnese, Befunde, Diagnosen ---- */
add('Leitfaden: Untersuchung & Befunde','K','Observation und soziale Medien (Leitfaden) – bewerten Sie jede Aussage:',
 [['Erkenntnisse aus sozialen Medien dienen primär der Konsistenz- und Plausibilitätsprüfung und werden wie Observationsmaterial als Fremdinformation gewürdigt.',true],
  ['Die versicherte Person erhält in der Exploration Gelegenheit zur Stellungnahme (z. B. Foto stammt aus der Zeit vor dem Gesundheitsschaden, Aktivität führte zu tagelanger Erschöpfung).',true],
  ['Allein die Tatsache, dass eine Versicherung observieren liess, beweist, dass die Beschwerden nicht authentisch sind.',false],
  ['Profile im Internet sind oft kuratierte, idealisierte Momentaufnahmen und spiegeln den Gesundheitsalltag nicht in jedem Fall wider.',true]],
 'Die Gutachterin beurteilt abschliessend, ob sich eine versicherungsmedizinisch relevante Inkonsistenz zeigt oder ob sich die Diskrepanzen durch krankheitsbedingte Schwankungen bzw. andere nicht-medizinische Gründe plausibel erklären lassen. Ist das Material nicht eindeutig interpretierbar, wird dies explizit festgehalten.',LF+'A.2.i');

add('Leitfaden: Untersuchung & Befunde','K','Fachdisziplinen und Untersuchung (Leitfaden) – bewerten Sie jede Aussage:',
 [['Nach Art. 44 Abs. 5 ATSG legt bei mono- und bidisziplinären Gutachten der Versicherungsträger die Fachdisziplinen fest; bei polydisziplinären Gutachten (mindestens drei Fachdisziplinen) legt die Gutachterstelle sie abschliessend fest.',true],
  ['Mono-/bidisziplinäre Gutachterinnen sollen sich äussern, wenn sie das erreichbare Leistungsvermögen ohne zusätzliche Fachdisziplinen nicht zuverlässig beurteilen können; Zusatzuntersuchungen (NPS, EFL) können nach Rücksprache nachträglich angeordnet werden.',true],
  ['Die Gutachterin vergewissert sich anhand eines amtlichen Ausweises, dass sie die richtige Person untersucht.',true],
  ['Ein umfassender Ganzkörperstatus ist in jedem Gutachten zwingend; ein Verzicht auf Teile der Standarduntersuchung ist nie zulässig.',false]],
 'Es gilt der Grundsatz der Verhältnismässigkeit: bei eng umschriebenen unfallmedizinischen Fragen genügt in der Regel eine problemorientierte Untersuchung; dient das Gutachten der Invaliditätsbemessung, wird zumindest ein Basisstatus erhoben. Ein bewusster Verzicht ist kurz festzuhalten und zu begründen.',LF+'A.3–4.a');

add('Leitfaden: Untersuchung & Befunde','K','Die medizinische Untersuchung (Leitfaden) – bewerten Sie jede Aussage:',
 [['Die Anamnese dient der Querschnittbeurteilung; aus Längs- und Querschnitt sind Rückschlüsse auf die weitere Entwicklung (Prognose) zu ziehen.',true],
  ['Die klinischen Befunde sind persönlich zu erheben; ärztliche Befunde sind nicht rein «objektiv», sondern beruhen auch auf Wahrnehmungen der begutachtenden Person.',true],
  ['Das Krankheitsverhalten (Illness Behaviour) wird durch gezielte Beobachtung von äusserem Eindruck und Verhalten während der gesamten Begutachtung erfasst.',true],
  ['Die Dauer des Untersuchungsgesprächs ist durch eine feste Mindestdauer vorgegeben.',false]],
 'Die Dauer liegt im pflichtgemässen Ermessen und richtet sich nach dem Abklärungsbedarf – ggf. verteilt auf mehrere Termine. Ein längeres Gespräch kann nötig sein bei langjähriger Krankengeschichte, komplexer oder widersprüchlicher Aktenlage, unklaren Diagnosen, unvollständigen Vorabklärungen oder mehreren Differenzialdiagnosen.',LF+'A.4.a–b');

add('Leitfaden: Untersuchung & Befunde','K','Plausibilität, Konsistenz und Validierung (Leitfaden) – bewerten Sie jede Aussage:',
 [['Plausibilitäts- und Konsistenzprüfung bilden den übergeordneten Rahmen; die Beschwerdevalidierung ist ein Teilaspekt, der zwischen authentischeren und weniger authentischen Beschwerdeschilderungen differenziert.',true],
  ['Testpsychologische Validierungsverfahren bleiben den Fachdisziplinen mit entsprechender diagnostischer Qualifikation vorbehalten; in somatischer und psychiatrischer Begutachtung erfolgt die Prüfung primär durch den kritischen Abgleich von Anamnese, Klinik und Befunden.',true],
  ['Auffällige Validierungsergebnisse zeigen ein ungültiges Testprofil oder Inkonsistenzen an, erlauben aber allein keine sicheren Rückschlüsse auf die Ursache (z. B. Verdeutlichung, Aggravation, Simulation, Schmerzen, Ermüdung, psychische Krankheit).',true],
  ['Im polydisziplinären Gutachten genügt es, sich auf die neuropsychologischen Validierungsresultate zu stützen.',false]],
 'In der interdisziplinären Konsensbeurteilung sind Authentizität und Validität über alle Fachbereiche hinweg zu diskutieren. Nicht valide Resultate bedeuten nicht automatisch Beweislosigkeit; ein «realer Kern» an Funktions- oder Gesundheitsstörungen ist ggf. mit der gebotenen Beweisstärke darzulegen. Auf veraltete Instrumente ist zu verzichten; sehr hohe Sensitivität geht oft zulasten der Spezifität.',LF+'A.4.c');

add('Leitfaden: Untersuchung & Befunde','K','Tonaufnahme und Dolmetschende (Leitfaden) – bewerten Sie jede Aussage:',
 [['Seit 1. Januar 2022 wird das Interview mit Ton aufgezeichnet (Art. 7k Abs. 5 ATSV); das Hochladen erfolgt über eine Webplattform (eahv-iv.ch) in den Formaten MP3, ACC oder DSS.',true],
  ['Auch neuropsychologische Abklärungen und die EFL fallen unter die Pflicht zur Tonaufnahme, soweit eine Anamnese oder Beschwerdeschilderung erfolgt; testpsychologische Untersuchungsteile dürfen nicht aufgezeichnet werden.',true],
  ['Bei ungenügenden Sprachkenntnissen ist zwingend eine professionelle dolmetschende Person beizuziehen; Angehörige und Laien sind ausgeschlossen.',true],
  ['Stellt sich erst während der Begutachtung eine unzureichende Verständigung heraus, ist ohne Dolmetscher weiterzumachen und die Kommunikationsbarriere nicht zu erwähnen.',false]],
 'Es liegt in der Verantwortung der Gutachterin, die Begutachtung abzubrechen und einen neuen Termin mit Dolmetscher:in zu veranlassen. Im Gutachten festzuhalten: Name der dolmetschenden Person, vermittelnde Organisation, Sprache und ggf. Dialekt; verbleibende Barrieren sind transparent zu dokumentieren und bei der Plausibilitätsprüfung kritisch zu würdigen.',LF+'A.4.d–e');

add('Leitfaden: Untersuchung & Befunde','K','Untersuchungsgrundsatz und Anamnese (Leitfaden) – bewerten Sie jede Aussage:',
 [['Der Untersuchungsgrundsatz (Art. 43 Abs. 1 ATSG) verpflichtet auch die Gutachtenden, den medizinischen Sachverhalt von Amtes wegen vollständig abzuklären.',true],
  ['Sind die medizinischen Akten unvollständig, informieren die Gutachtenden den Auftraggeber und holen die fehlenden Akten ein; ob dafür eine Einwilligung nötig ist, klärt der Auftraggeber.',true],
  ['Fremdanamnesen ausserhalb der behandelnden Ärzteschaft (z. B. Arbeitgeber, Partner) verlangen die vorgängige Information und das Einverständnis der versicherten Person; Drittpersonen sind darauf hinzuweisen, dass ihre Angaben ins Gutachten einfliessen.',true],
  ['Ein blosser Verweis auf die Tonaufnahme genügt zur Dokumentation der Anamnese.',false]],
 'Die Anamnese muss im schriftlichen Gutachten nachvollziehbar dokumentiert sein; es muss stets klar ersichtlich sein, ob Informationen aus der Aktenanamnese oder aus der persönlichen Befragung stammen. Sie soll möglichst mit den Worten der untersuchten Person wiedergegeben werden und umfasst persönliche, gesundheitliche, berufliche und soziale Vorgeschichte sowie Auswirkungen auf Aktivität und Partizipation.',LF+'A.5–6');

add('Leitfaden: Untersuchung & Befunde','K','Gütekriterien und Objektivität (Leitfaden) – bewerten Sie jede Aussage:',
 [['Die Gütekriterien sind Objektivität (Wer misst?), Reliabilität (Wie exakt?) und Validität (Was wird gemessen?), ergänzt durch die Normierung.',true],
  ['Der Begriff der Objektivität nach Art. 7 Abs. 2 ATSG ist weitgehend deckungsgleich mit dem medizinischen: objektivierbar sind reproduzierbare, von der untersuchenden Person und den Patientenangaben unabhängige Ergebnisse.',true],
  ['Bildgebende und apparative Befunde werden ebenfalls subjektiv betrachtet (Interobserver-Varianz); falsch-positive und falsch-negative Befunde sind möglich.',true],
  ['Subjektive Angaben der versicherten Person sind wegen der geforderten Objektivität zu ignorieren.',false]],
 'Subjektive Beschwerden gehören zu Anamnese und klinischer Untersuchung und sind auf Konsistenz und Plausibilität zu prüfen – ohne moralisches Urteil über die persönliche Glaubwürdigkeit. Die medizinischen Gütekriterien gehen mit Blick auf Validität und Normierung weiter als die vom Recht verlangte Objektivität.',LF+'A.7');

add('Leitfaden: Untersuchung & Befunde','K','Diagnosen (Leitfaden) – bewerten Sie jede Aussage:',
 [['Diagnosen sind lege artis auf ein anerkanntes Klassifikationssystem (z. B. ICD-10, ICD-11, DSM-5, ICHD-3) abzustützen und deren Kriterien im Gutachten darzulegen; Ausnahmen sind in Sonderfällen denkbar.',true],
  ['Auch fachrelevante Nebendiagnosen und als irrelevant eingestufte Diagnosen sind zu codieren, damit nachvollziehbar wird, nach welchen Kriterien die Einstufung erfolgte.',true],
  ['Nur weil eine Diagnose nach ICD-10 nicht existiert oder die Kriterien nicht erfüllt sind, darf eine Krankheit nicht vernachlässigt werden, wenn sie nach ICD-11 lege artis diagnostiziert werden kann.',true],
  ['Sozialversicherungsrechtlich relevant ist jede Diagnose unabhängig davon, ob ein Krankheitswert besteht.',false]],
 'Massgebend ist nur eine lege artis diagnostizierte Gesundheitsstörung mit Krankheitswert. Die Diagnosebegründung erfolgt in der versicherungsmedizinischen Beurteilung: Entsprechung der Symptome zu den Kriterien, Dauer/Verlauf, diskutierte und ausgeschlossene Differenzialdiagnosen. Wissensstand: breit anerkanntes Wissen in Forschung und Praxis (BGE 134 V 231).',LF+'A.8');

add('Leitfaden: Arbeitsfähigkeit','K','Erster und zweiter Arbeitsmarkt (Leitfaden) – bewerten Sie jede Aussage:',
 [['Der ausgeglichene erste Arbeitsmarkt (Art. 16 ATSG) ist ein normatives, theoretisches Konstrukt mit stabilem Gleichgewicht zwischen Angebot und Nachfrage; konjunkturelle Schwankungen werden ausgeblendet.',true],
  ['Die Verwertbarkeit der Restarbeitsfähigkeit wird anhand des ausgeglichenen ersten Arbeitsmarkts beurteilt.',true],
  ['Der zweite Arbeitsmarkt umfasst geschützte, subventionierte, oft befristete Arbeitsverhältnisse mit meist tieferer Entlöhnung.',true],
  ['Der erste Arbeitsmarkt spiegelt die konkrete aktuelle Arbeitsmarktlage in der Region der Person.',false]],
 'Gutachtende beurteilen die Arbeitsfähigkeit (in Prozent eines 100-%-Pensums) auf dem ersten Arbeitsmarkt oder halten fest, dass dort aus medizinischer Sicht keine Tätigkeit mehr möglich ist.',LF+'B.9.a');

/* ---- Leitfaden Teil B: Arbeitsfähigkeit, Indikatoren, Konsens ---- */
add('Leitfaden: Arbeitsfähigkeit','K','Angestammte und leidensangepasste Tätigkeit (Leitfaden) – bewerten Sie jede Aussage:',
 [['Für die angestammte Tätigkeit braucht die Gutachterin eine möglichst exakte Arbeitsbeschreibung mit detailliertem Anforderungsprofil, die korrekte Berufsbezeichnung und Stellung im Betrieb und führt eine systematische Befragung zu den Arbeitsanforderungen durch.',true],
  ['Wurde vor der Gesundheitsstörung weit über das durchschnittliche Pensum gearbeitet, ist dies offenzulegen und klar anzugeben, auf welches Pensum sich die Beurteilung bezieht.',true],
  ['Die leidensangepasste Tätigkeit muss auf dem ausgeglichenen ersten Arbeitsmarkt realistisch und zumutbar sein und dem von der Gutachterin definierten individuellen Zumutbarkeitsprofil entsprechen.',true],
  ['Die Arbeitsfähigkeit in der leidensangepassten Tätigkeit wird nur beurteilt, wenn die angestammte Tätigkeit nicht mehr möglich ist, und nur für die Zukunft.',false]],
 'Medizinische Gutachten haben sich zur bisherigen und zur zukünftigen Arbeitsfähigkeit zu äussern, gestützt auf Längsschnitt (Akten) und eigenen Querschnitt (Untersuchung). Bei komplexen Tätigkeiten stützt sich die Gutachterin auf eine Arbeitsplatzabklärung vor Ort.',LF+'B.9.b');

add('Leitfaden: Arbeitsfähigkeit','K','Medizinische Unzumutbarkeit und Anpassungen (Leitfaden) – bewerten Sie jede Aussage:',
 [['Eine Tätigkeit gilt als medizinisch unzumutbar bei unvertretbarer Selbst- oder Fremdgefährdung, absehbarer relevanter Verschlechterung, erschöpfungsbedingtem Verlust jeglicher elementarer Lebensqualität/Partizipation ausserhalb der Arbeit oder bei nicht tragbarem krankheitsbedingtem Verhalten gegenüber Dritten.',true],
  ['Typische Anpassungen betreffen körperliche Anforderungen, Arbeitsumgebung, Arbeitsorganisation, soziale und kognitive Anforderungen sowie die Belastbarkeit.',true],
  ['Notwendige Anpassungen sind im Gutachten je nach individueller Situation im Einzelfall darzulegen und zu begründen.',true],
  ['Eine leidensangepasste Tätigkeit wird mit der Standardformel «leichte wechselbelastende Tätigkeit» abschliessend beschrieben.',false]],
 'Beispiele: leichte bis maximal mittelschwere wechselbelastende Tätigkeiten, ablenkungsarme Umgebung, keine Nachtschicht, regelmässige Pausen, klare Strukturen, kein Zeit-/Leistungsdruck, geringe Anforderungen an Teamfähigkeit, Daueraufmerksamkeit, Multitasking, Ausdauer.',LF+'B.9.b');

add('Leitfaden: Arbeitsfähigkeit','K','Qualitative und quantitative Einschränkungen (Leitfaden) – bewerten Sie jede Aussage:',
 [['Qualitative Einschränkungen betreffen z. B. Bewegung, Mobilität, Feinmotorik, Sensomotorik, Kognition und Psyche; die Gutachterin formuliert ein ausgewogenes Leistungsprofil mit negativem (nicht mehr zumutbar) und positivem (weiterhin möglich) Anteil.',true],
  ['Quantitativ sind Präsenzzeit, Rendement und erhöhter Pausenbedarf anzugeben, die Einschätzung erfolgt in Prozenten bezogen auf ein 100-%-Pensum.',true],
  ['Die quantitative Arbeitsfähigkeit ergibt sich aus Präsenzzeit mal zumutbarer Leistungsfähigkeit während der Präsenzzeit.',true],
  ['Ausschliesslich das negative Leistungsprofil (Verbote) ist für die berufliche Eingliederung verwertbar.',false]],
 'Ein ausgewogenes Profil nennt auch Fähigkeiten, Ressourcen und weiterhin mögliche Tätigkeiten und ist damit für die berufliche Eingliederung optimal verwertbar.',LF+'B.9.c–d');

add('Leitfaden: Arbeitsfähigkeit','K','Tatsächlich erreichbares Leistungsvermögen (Leitfaden, BGE 141 V 281 / 151 V 66) – bewerten Sie jede Aussage:',
 [['Zu beurteilen ist das tatsächlich erreichbare Leistungsvermögen in qualitativer und quantitativer Hinsicht aus rein medizinischer Sicht, unter Berücksichtigung sämtlicher Ressourcen und Belastungsfaktoren – keine hypothetische Annahme.',true],
  ['Zumutbare medizinische Massnahmen sind zu benennen, das Leistungsvermögen ist aber nicht so einzuschätzen, als wären sie bereits erfolgreich durchgeführt.',true],
  ['Der bei Ausschöpfung aller schadenmindernden Vorkehrungen erreichbare Zustand darf nur angerechnet werden, wenn der Träger das Mahn- und Bedenkzeitverfahren nach Art. 21 Abs. 4 ATSG durchgeführt hat; ein hypothetisches Leistungsvermögen wird nur bei ausdrücklichem Auftrag beurteilt.',true],
  ['Selbstverschulden oder Behandelbarkeit einer Gesundheitsstörung schliessen Sozialversicherungsleistungen nach der Rechtsprechung aus.',false]],
 'Selbstverschulden (z. B. Essverhalten, Substanzkonsum) und Behandelbarkeit schliessen Leistungen nach konstanter Rechtsprechung nicht aus (BGE 151 V 66, 151 V 194). Weder die Art der Diagnose (somatisch/psychisch) noch Selbstverschulden noch Behandelbarkeit ändern etwas an der Begutachtungsaufgabe.',LF+'B.9.d.i–ii');

add('Leitfaden: Arbeitsfähigkeit','K','Invaliditätsfremde Faktoren und Capacity/Performance (Leitfaden) – bewerten Sie jede Aussage:',
 [['Wirtschaftslage, Sprachkenntnisse, Bildungsstand, Ethnie, Religion, familiäre Verhältnisse, Motivation, Unzufriedenheit oder Alter sind gewöhnlich invaliditätsfremde Faktoren; allein aufgrund solcher Faktoren erbringen IV, UV und MV keine Leistungen.',true],
  ['Führen solche Faktoren direkt dazu, dass nicht gearbeitet wird, ohne dass eine lege artis diagnostizierte Gesundheitsstörung vorliegt, besteht keine Invalidität; es wäre falsch, von «Arbeitsunfähigkeit» zu sprechen.',true],
  ['Liegt eine Gesundheitsstörung vor, sind psychosoziale und soziokulturelle Faktoren anhand der Standardindikatoren zu berücksichtigen, wenn sie die funktionellen Auswirkungen beeinflussen.',true],
  ['Die Beurteilung allein der Capacity (klinisch objektiviertes Leistungsvermögen) ist für die abschliessende Beurteilung der Leistungsfähigkeit ausreichend.',false]],
 'Capacity = theoretisch mögliches Leistungsvermögen unter standardisierten Bedingungen; Performance = tatsächlich erbrachte Leistung im realen Umfeld. Die Capacity wird durch klinische Befunde objektiviert, die Performance im Alltag ist zwingend zu erheben. In bi-/polydisziplinären Gutachten dürfen Kontextfaktoren ohne unmittelbare körperliche Auswirkungen (z. B. Sprachkenntnisse, familiäre Konflikte) in der somatischen Beurteilung nicht als Arbeitsunfähigkeit angerechnet werden; ob sie eine eigenständige Störung bewirkt haben, beurteilt gewöhnlich die Psychiatrie.',LF+'B.9.d.iii');

add('Leitfaden: Indikatoren','K','Indikatoren nach Rechtsprechung (Leitfaden) – bewerten Sie jede Aussage:',
 [['Die Indikatorenrechtsprechung basiert auf dem psychiatrischen Grundsatzgutachten von Henningsen (2014) und wurde zuerst auf die somatoforme Schmerzstörung, später auf psychische Leiden generell angewendet.',true],
  ['Bei somatischen Gesundheitsstörungen ist eine adaptierte Anwendung möglich; der Standardfragenkatalog des BSV impliziert, dass sich Gutachtende auch dort zu den Indikatoren äussern.',true],
  ['Kategorie «funktioneller Schweregrad»: Komplex Gesundheitsschädigung, Komplex Persönlichkeit, Komplex sozialer Kontext; Kategorie «Konsistenz»: gleichmässige Einschränkung in allen Lebensbereichen und behandlungs-/eingliederungsanamnestisch ausgewiesener Leidensdruck.',true],
  ['Die Persönlichkeitsdiagnostik ist ausschliesslich Aufgabe der Radiologie.',false]],
 'Die Persönlichkeitsdiagnostik ist weitgehend der Psychiatrie vorbehalten. Gutachtende nehmen eine Gesamtbetrachtung vor, die Wechselwirkungen zwischen Hauptdiagnose und begleitenden krankheitswertigen Störungen berücksichtigt, und begründen substanziiert, warum die Befunde das funktionelle Leistungsvermögen schmälern. Die Anwendung erfolgt unter Berücksichtigung des ICF-Modells (Körperfunktionen/-strukturen, Aktivitäten = Capacity, Teilhabe = Performance, Umwelt-/personenbezogene Faktoren).',LF+'B.9.d.iv');

add('Leitfaden: Konsens & Beurteilungen','K','Abweichende Beurteilungen und Konsens (Leitfaden) – bewerten Sie jede Aussage:',
 [['Fehlt eine angemessene, nachvollziehbare Auseinandersetzung mit abweichenden Meinungen anderer Fachpersonen, ist dies ein konkretes Indiz gegen die Zuverlässigkeit des Gutachtens (9C_288/2020).',true],
  ['Gutachtende erwähnen abweichende Standpunkte, stellen deren Argumente sachlich und neutral dar und begründen nachvollziehbar, warum sie zu einer anderen Einschätzung kommen.',true],
  ['Bei bi-/polydisziplinären Gutachten orientieren sich die Gutachtenden an der «Leitlinie zur Konsensbeurteilung» (sechs Fachgesellschaften); bei Diskrepanzen findet eine Konsenskonferenz statt, bei fortbestehendem Dissens wird dieser im Detail begründet dokumentiert.',true],
  ['Ungereimtheiten in der AF-Einschätzung zwischen Teilgutachten und Konsens sind unproblematisch und führen nie zur Beweisuntauglichkeit.',false]],
 'Ungereimtheiten, die sich nicht ohne Weiteres ausräumen lassen, führen grundsätzlich zur Beweisuntauglichkeit. Im Konsens darf sich keine Disziplin darauf verlassen, dass ein interdisziplinäres Krankheitsbild allein von einer anderen Fachrichtung (z. B. Psychiatrie) beurteilt wird; jede Disziplin äussert sich zur interdisziplinären AF-Einschätzung. Massgebend ist der aktuelle Stand der Wissenschaft: Konzepte der ICD-11 und aktueller Leitlinien (z. B. komplexe PTBS, chronische primäre Schmerzsyndrome) sind inhaltlich zu berücksichtigen.',LF+'B.10–11');

add('Leitfaden: EKQMB-Kriterien','K','EKQMB-Kriterien A–D (Leitfaden) – bewerten Sie jede Aussage:',
 [['Kriterium A (formale Gestaltung): Gliederung nach KSVI mit den vorgegebenen Überschriften (keine Synonyme); bei monodisziplinären Gutachten nicht mehr als 100 Tage zwischen Untersuchung und Eingang bei der IV-Stelle (Verzögerungsgründe transparent darlegen).',true],
  ['Kriterium B (Verständlichkeit): knappe, prägnante Sprache, Fachausdrücke und Abkürzungen mindestens einmal erklärt, keine versicherungsrechtlichen Folgerungen (keine Aussagen zu Invalidität, Erwerbsunfähigkeit, Rente, Umschulung).',true],
  ['Kriterium C (Transparenz): Datum und Uhrzeit (von–bis) der Untersuchung, Herkunft und Kernaussage der verarbeiteten Informationen (ein Verweis «siehe Befundbericht» genügt nicht), benannte Untersuchungsverfahren, Schilderungen der Person in indirekter Rede, Messwerte mit Normbezug.',true],
  ['Kriterium D (Vollständigkeit) verlangt keine Verschlüsselung der Diagnosen nach einem anerkannten System.',false]],
 'D2: Alle gestellten Diagnosen werden nach einem anerkannten Diagnosesystem verschlüsselt (in der Regel ICD, bei psychischen Störungen in begründeten Fällen auch DSM). D1: umfassende Befragung und Befunderhebung (Verlauf, Umgang mit Beschwerden, Arbeitsbiografie, Tagesablauf, psychosoziale Rahmenbedingungen). Die EKQMB-Kriterien A–F (Prüffragenkatalog Peer-Review Fachgutachten) ergänzen die Rechtsprechung zum Beweiswert.',LF+'C.12.a–d');

add('Leitfaden: EKQMB-Kriterien','K','EKQMB-Kriterien D–F und übergeordnetes Kriterium (Leitfaden) – bewerten Sie jede Aussage:',
 [['D3/D4: Wesentliche Abweichungen von Vorberichten/Vorgutachten werden beschrieben und bewertet; alle Standardfragen und fallspezifischen Zusatzfragen werden lückenlos beantwortet.',true],
  ['E2: Fachliche Wertungen und Diagnosen erfolgen ausschliesslich im eigenen Fachgebiet; fachfremdes Bewerten gilt als Mangel und mindert den Beweiswert.',true],
  ['E3: Zusatzdiagnostik (z. B. Neuropsychologie, EFL) darf nicht unkommentiert übernommen werden; die Gutachterin setzt sich kritisch damit auseinander.',true],
  ['F (Wirtschaftlichkeit): Es ist stets möglichst umfangreiche Diagnostik einzusetzen; ein Überschreiten des Notwendigen ist unproblematisch.',false]],
 'F1/F2: nur geeignete und notwendige Diagnostik – aber auch keine unterlassenen zwingend erforderlichen Untersuchungen. Übergeordnetes Kriterium: lückenlose Argumentationskette von der Fragestellung über Informationssammlung und -bewertung bis zur Beurteilung der Arbeitsfähigkeit und Wahrung der Neutralität; offensichtlich herabsetzende oder parteiische Äusserungen machen das Gutachten rechtlich unverwertbar. E7: Darstellung bisheriger Behandlungen und weiterer therapeutischer Optionen inkl. Behandlungsdauer und Risiken.',LF+'C.12.d–g');

add('Leitfaden: EKQMB-Kriterien','K','Zusätzliche Anforderungen an bi-/polydisziplinäre Gutachten (Leitfaden) – bewerten Sie jede Aussage:',
 [['Die Konsensbeurteilung folgt KSVI Anhang V (u. a. «Abwicklung des Gutachtensauftrages», «Interdisziplinäre Gesamtbeurteilung», «Angaben zur Entstehung des Konsenses mit Unterschriften», Anhang mit Aktenauszug und Einzelgutachten).',true],
  ['Bei polydisziplinären Gutachten läuft die 100-Tage-Frist ab dem Datum der letzten Untersuchung einer Teildisziplin.',true],
  ['In der Konsensbeurteilung ist explizit zu begründen, ob sich die Teilarbeitsunfähigkeiten ganz, teilweise oder gar nicht addieren; gewollte Wiederholungen aus den Einzelgutachten gelten nicht als mangelhafte Längen.',true],
  ['Für die integrative Beurteilung genügt die blosse Übernahme und Aneinanderreihung von Passagen aus den Fachgutachten.',false]],
 'Verlangt ist ein eigener, neuer, griffiger Text, der die Krankheitsgeschichte über alle relevanten Gesundheitsstörungen zusammenfasst und Belastungen, Ressourcen und Persönlichkeit mit ihren Wechselwirkungen darstellt (D5). E6/E7: Inkonsistenzen zwischen den Fachgutachten diskutieren; fächerübergreifende Darstellung der Therapieoptionen.',LF+'C.12.h');

add('Leitfaden: Beweiswert','K','Beweiswertkriterien nach Bundesgericht (Leitfaden, BGE 125 V 351 u. a.) – bewerten Sie jede Aussage:',
 [['Umfassend für die streitigen Belange heisst: alle relevanten streitigen Punkte und alle gestellten Fragen sind beantwortet, bei komplexen Fällen sind alle betroffenen Fachgebiete einbezogen.',true],
  ['Allseitige Untersuchungen: eigene Untersuchungen und umfassende Befragung, Methoden entsprechend dem aktuellen wissenschaftlichen und fachlichen Standard.',true],
  ['Geklagte Beschwerden werden auch dann diskutiert, wenn sie nicht durch objektive Befunde bestätigt werden; mögliche psychosomatische oder andere Erklärungen werden erörtert.',true],
  ['In Kenntnis der Vorakten genügt es, wenn die Vorakten gelesen, im Gutachten aber nicht erwähnt werden.',false]],
 'Im Gutachten muss deutlich werden, welche Vorakten berücksichtigt wurden und wie sie die Schlussfolgerungen beeinflusst haben; fehlende Vorakten werden vermerkt und ggf. in Rücksprache mit dem Auftraggeber vervollständigt. Einleuchten: logisch nachvollziehbar, auf aktuellem Fachwissen beruhend, auch für Laien (Richter, Sachbearbeitende) verständlich, widerspruchsfrei. Begründete Schlussfolgerungen: kein blosses Behaupten, alternative Erklärungen werden berücksichtigt, Grad der Wahrscheinlichkeit und Unsicherheiten werden angegeben.',LF+'C.13.a–f');

/* ---- Broschüre «Medizinische Begutachtung in der Schweiz» (5. Aufl. 2026) ---- */
const BR='SIM-Broschüre Begutachtung 2026, ';
add('Broschüre: Geschichte & Ausbildung','K','Geschichte und Qualität der Begutachtung (Broschüre) – bewerten Sie jede Aussage:',
 [['Die erste MEDAS wurde 1978 in Basel gegründet; die regionalen ärztlichen Dienste (RAD) entstanden mit der 4. IV-Revision (2004, Art. 59 IVG) und dürfen seither Versicherte untersuchen.',true],
  ['Die Swiss Insurance Medicine (SIM) wurde 2003 als interprofessionelle Interessengemeinschaft unter der Schirmherrschaft der FMH gegründet.',true],
  ['Die Qualitätsstudie von Meine (1998) zeigte, dass nur etwa ein Drittel (35 %) der Gutachten im Unfallversicherungsbereich einwandfrei war.',true],
  ['Die Zufriedenheit der Auftraggebenden korreliert zuverlässig mit dem Nutzwert/Beweiswert eines Gutachtens.',false]],
 'Suva-Studie 2006 (Ludwig): Primärnutzende zu 89 % zufrieden, Sekundärnutzende (Anwälte, Richter, Versicherungsmediziner) nur zu 51 % – Qualitätssicherung gelingt nicht ohne versicherungsmedizinischen Sachverstand. Auerbach 2011 (MGS-Studie, 3165 Gutachten): 29 % sehr gut, 48 % gut bis genügend, 23 % ungenügend. Entwicklung brauchbarer Gutachten: 35 % → 51 % → 77 % → 86 %.',BR+'Kap. 2.1–2.3');

add('Broschüre: Geschichte & Ausbildung','K','Art. 7m ATSV und Ausbildung (Broschüre) – bewerten Sie jede Aussage:',
 [['Medizinische Sachverständige brauchen einen Weiterbildungstitel nach MedBG, Eintrag im Register, gültige Berufsausübungsbewilligung (oder Meldepflicht) und mindestens fünf Jahre klinische Erfahrung.',true],
  ['Fachärztinnen und Fachärzte der Inneren Medizin, Psychiatrie, Neurologie, Rheumatologie, Orthopädie sowie orthopädischen Chirurgie/Traumatologie müssen das SIM-Zertifikat haben; ausgenommen sind Chef- und leitende Ärzte in Universitätskliniken.',true],
  ['Neuropsychologische Sachverständige müssen die Anforderungen nach Art. 50b KVV erfüllen.',true],
  ['Die SIM-Ausbildung gliedert sich in 3 Module zu je einem Tag; die Zertifikatsprüfung wurde bereits 2003 mit einer Multiple-Choice-Prüfung eingeführt.',false]],
 'Die Ausbildung besteht aus 5 Modulen zu je zwei Tagen; bis 2013 war ein selbst erstelltes Gutachten einzureichen, seit 2014 gibt es die Multiple-Choice-Prüfung (gemeinsam mit dem IML Bern). Rezertifizierung alle fünf Jahre; Übergangsfrist für Art. 7m Abs. 2 ATSV läuft 2027 aus. Mit Einwilligung der versicherten Person kann von einzelnen Anforderungen abgesehen werden, wenn sachlich notwendig.',BR+'Kap. 2.1–2.2');

add('Broschüre: Geschichte & Ausbildung','K','7. IV-Revision (Weiterentwicklung der IV, 1.1.2022) – bewerten Sie jede Aussage:',
 [['Neu werden nach den polydisziplinären auch bidisziplinäre Gutachten nach dem Zufallsprinzip zugeteilt.',true],
  ['Bei der direkten Vergabe monodisziplinärer Gutachten muss die IV-Stelle Einigkeit mit der versicherten Person über die sachverständige Person zu erzielen versuchen.',true],
  ['Die Tonaufnahme des Interviews ist im Sozialversicherungsrecht durchzuführen, ausser die versicherte Person verzichtet vorgängig darauf; zudem wurde die Eidgenössische Kommission für Qualitätssicherung (EKQMB) eingesetzt.',true],
  ['Die inhaltlichen Vorgaben der ATSV gelten gleichermassen für Gutachten im Privatrecht und in der beruflichen Vorsorge.',false]],
 'Die ATSV-Vorgaben (z. B. Tonaufnahmen) gelten nur für das Sozialversicherungsrecht, nicht für Gutachten im Privatrecht und in der beruflichen Vorsorge. Art. 44 Abs. 7 ATSG bildet die Grundlage für einheitliche Vorgaben, Art. 7m ATSV regelt inhaltliche Voraussetzungen.',BR+'Kap. 2.1, 2.5');

add('Broschüre: Leitlinien & Tonaufnahme','K','Leitlinien zur Begutachtung (Broschüre) – bewerten Sie jede Aussage:',
 [['Medizinische Leitlinien sind für Ärzte rechtlich nicht verbindlich und haben weder haftungsbegründende noch haftungsbefreiende Wirkung; sie bilden rechtlich den aktuellen medizinischen Grundkonsens ab.',true],
  ['Es bestehen Leitlinien u. a. für Psychiatrie (2016), Rheumatologie (2016), Orthopädie (2017), Neurologie (2020), Neuropsychologie (2011/2016) sowie allgemeine Begutachtungsleitlinien Versicherungsmedizin (2020) und Konsensleitlinien (2020).',true],
  ['Die RELY-Studien (Kunz) zeigen, dass die Reliabilität der Begutachtung im Allgemeinen gering ist, aber eine hoch signifikante Assoziation zwischen standardisierterem Vorgehen und der Übereinstimmung der Begutachtenden besteht.',true],
  ['Leitlinien sind Richtlinien, die ohne Ausnahme befolgt werden müssen.',false]],
 'Im Gegensatz zu Richtlinien sind Leitlinien nicht verbindlich. BGE 141 V 281 (strukturiertes Beweisverfahren mit Indikatoren) ist in den aktuellen Leitlinien berücksichtigt; BGE 143 V 418 weitete auf alle psychischen Störungen, BGE 145 V 215 auf Suchterkrankungen aus.',BR+'Kap. 2.3–2.4');

add('Broschüre: Leitlinien & Tonaufnahme','K','Tonaufnahme (Art. 44 Abs. 6 ATSG, Art. 7k/7l ATSV) – bewerten Sie jede Aussage:',
 [['Das «Interview» umfasst das gesamte Untersuchungsgespräch (Anamneseerhebung und Beschwerdeschilderung), nicht aber den testpsychologischen Teil bei psychiatrischen, neurologischen und neuropsychologischen Untersuchungen.',true],
  ['Die versicherte Person kann vor der Begutachtung auf die Tonaufnahme verzichten oder bis 10 Tage nach dem Interview deren Vernichtung beantragen; der Verzicht wird schriftlich gegenüber dem Versicherungsträger erklärt, nicht gegenüber dem Sachverständigen.',true],
  ['Beginn und Ende des Interviews (und Unterbrechungen) sind von der versicherten Person und der Sachverständigen mündlich mit Uhrzeit zu bestätigen.',true],
  ['Die Tonaufnahme darf auch ausserhalb hängiger Verfahren jederzeit von beliebigen Dritten abgehört werden.',false]],
 'Abhören nur im Verwaltungs-, Einsprache-, Revisions-/Wiedererwägungs-, Rechtspflege- und Vorbescheidverfahren durch die versicherte Person, den Versicherungsträger und die Entscheidbehörden; zudem durch die EKQMB im Rahmen ihrer Aufgaben. Nach rechtskräftigem Abschluss darf die Aufnahme im Einverständnis der Person vernichtet werden. Dolmetscherübersetzungen sind mit aufzuzeichnen. Die Sachverständige hat sicherzustellen, dass die Aufnahme technisch korrekt erfolgt.',BR+'Kap. 2.5, 3.2');

add('Broschüre: Unabhängigkeit & formelle Vorgaben','K','Befangenheit nach Rechtsprechung (Broschüre) – bewerten Sie jede Aussage:',
 [['Für medizinische Sachverständige gelten grundsätzlich die gleichen Ausstands- und Ablehnungsgründe wie für Richter; es genügt der Anschein der Befangenheit, und das Misstrauen muss objektiv begründet erscheinen (subjektives Empfinden einer Partei genügt nicht, BGE 132 V 93).',true],
  ['Die frühere Befassung mit einer Person schliesst den späteren Beizug als Gutachterin nicht zum vornherein aus.',true],
  ['Der Hinweis, die versicherte Person habe Einschränkungen demonstrativ dargeboten, begründet für sich allein noch keinen Anschein der Befangenheit.',true],
  ['Abwertende Werturteile über den kulturellen Hintergrund oder Begriffe wie «äusserst rentenbegehrliche Versicherte» sind unproblematisch.',false]],
 'Auf Befangenheit schliessen lassen: nicht neutral/sachlich gehaltene Gutachten, einseitige Kontakte zu einer Partei oder deren Vertretern (8C_491/2020), persönliches Interesse, Verwandtschaft/Verschwägerung bis zum dritten Grad oder Ehe/Verlobung/Kindesannahme. Früheres Mitarbeiten des Erstgutachters in der zweitbegutachtenden Stelle allein genügt nicht.',BR+'Kap. 2.6');

add('Broschüre: Unabhängigkeit & formelle Vorgaben','K','Arbeitsfähigkeitsbeurteilung und formelle Vorgaben (Broschüre) – bewerten Sie jede Aussage:',
 [['Von der Diagnose darf nicht pauschal auf die Arbeitsfähigkeit geschlossen werden; zu beschreiben ist, aus welchen medizinischen Gründen die Befunde das funktionelle Leistungsvermögen qualitativ, quantitativ und zeitlich schmälern (BGE 145 V 361).',true],
  ['Zu Kontroll- und Plausibilisierungszwecken sind persönliche, familiäre und soziale Aktivitäten einzubeziehen; es ist eine Aussage zu gleichmässigen Einschränkungen des Aktivitätsniveaus in vergleichbaren Lebensbereichen zu machen.',true],
  ['Die formellen Vorgaben für IV-Gutachten sind im KSVI (seit 1.1.2022) enthalten: Gliederung des Gutachtens IV und Gliederung der Konsensbeurteilung bei bi-/polydisziplinären Gutachten.',true],
  ['Die KSVI-Gliederung ist ausserhalb der IV nicht empfehlenswert und sollte nie verwendet werden.',false]],
 'Es empfiehlt sich, die Gliederung auch bei Begutachtungen in anderen Rechtsbereichen zu verwenden (mit sachspezifischen Ergänzungen, z. B. Kausalität, Status quo ante bei UV). Die häufigsten Gutachtenaufträge betreffen die IV.',BR+'Kap. 3.1–3.2');

add('Broschüre: Unabhängigkeit & formelle Vorgaben','K','Formelles und Dolmetscher (Broschüre) – bewerten Sie jede Aussage:',
 [['Bei polydisziplinären Gutachten legt die Gutachterstelle die Fachdisziplinen fest (Art. 44 Abs. 5 ATSG); bei mono-/bidisziplinären der Versicherungsträger.',true],
  ['Nach Bekanntgabe des Sachverständigen an die versicherte Person ist eine Delegation an einen anderen Sachverständigen grundsätzlich unzulässig; ein Wechsel erfordert die vorgängige Namensbekanntgabe (rechtliches Gehör).',true],
  ['Das Gutachten und die Konsensbeurteilung sind von den jeweiligen Sachverständigen zu unterzeichnen.',true],
  ['Ob eine Begutachtung in der Muttersprache oder mit Dolmetscher nötig ist, entscheidet grundsätzlich der Versicherungsträger allein; Angehörige dürfen im Notfall übersetzen.',false]],
 'Die Entscheidung trifft grundsätzlich die sachverständige Person im Rahmen ihrer sorgfältigen Auftragserfüllung; Angehörige oder Bekannte dürfen nicht dolmetschen. Wird erst nach dem Aufgebot ein Dolmetscherbedarf erkannt, ist Rücksprache mit dem Versicherungsträger wegen Kostengutsprache zu nehmen. Für die Dauer der Exploration gibt es keine Vorgaben; massgeblich ist die inhaltliche Vollständigkeit und Schlüssigkeit.',BR+'Kap. 3.2');

add('Broschüre: Materielle Vorgaben','K','Aktenauszug und Einbezug sämtlicher Berichte (Broschüre) – bewerten Sie jede Aussage:',
 [['Der Aktenauszug ist chronologisch (Autor, Datum, Adressat, relevante Diagnosen und Befunde); eine blosse Auflistung ohne inhaltliche Zusammenfassung genügt nicht, Bewertungen gehören grundsätzlich in die zusammenfassende Beurteilung (ausnahmsweise gekennzeichnete «Anmerkung der Gutachterin»).',true],
  ['Summarische Berichte der Hausärzte müssen nicht eingehend diskutiert, aber im Aktenverzeichnis aufgeführt werden; diametral abweichende Berichte Behandelnder sind ausführlich und schlüssig zu diskutieren.',true],
  ['Steht die medizinische Einschätzung in offensichtlicher, erheblicher Diskrepanz zur bei einwandfreiem Arbeitsverhalten effektiv realisierten Leistung in einer beruflichen Abklärung, wird eine klärende medizinische Stellungnahme unabdingbar (BGer 8C_217/2023).',true],
  ['RAD-Stellungnahmen und Observationsberichte sind nicht zu würdigen, da sie keine medizinischen Berichte sind.',false]],
 'Zu würdigen sind sämtliche medizinischen Berichte (auch RAD-Stellungnahmen) und anderweitige relevante Berichte (z. B. Observationsberichte). Zusätzliche Informationen bei Dritten darf die Gutachterstelle im Sozialversicherungsrecht bei gültiger, unwiderrufener Vollmacht einholen; im Privatversicherungsrecht ist eine explizite Einwilligung der begutachteten Person nötig.',BR+'Kap. 3.3.1–3.3.2');

add('Broschüre: Materielle Vorgaben','K','Diagnosen, IV-Voraussetzungen und Leistungsvermögen (Broschüre) – bewerten Sie jede Aussage:',
 [['Verdachtsdiagnosen können per se nicht zur Begründung einer Minderung der Arbeitsfähigkeit herangezogen werden, da sie eine überwiegende Wahrscheinlichkeit nicht begründen; bei Hinweisen auf fachfremde Diagnosen ist das weitere Vorgehen mit dem Auftraggeber zu besprechen.',true],
  ['Für eine Invalidität im Rechtssinn müssen kumulativ erfüllt sein: langdauernder Gesundheitsschaden, volle oder teilweise Unfähigkeit zumutbarer Arbeit, Kausalität dazwischen (Art. 7, 8 ATSG; Art. 4 IVG).',true],
  ['Zeit- und Leistungskomponente (Präsenzzeit und Rendement) werden getrennt ausgewiesen und zu einer gesamthaften Beurteilung verdichtet; einzelne Einschränkungen dürfen nicht separat quantifiziert und addiert werden.',true],
  ['Für angestammte und angepasste Tätigkeit genügt ein negatives Anforderungsprofil.',false]],
 'Für angestammte und angepasste Tätigkeit ist jeweils ein positives und negatives Anforderungsprofil zu erstellen; es ist darauf zu achten, dass von der korrekten angestammten Tätigkeit ausgegangen wird. Die Zumutbarkeit der Arbeitsleistung ist eine Rechtsfrage; die medizinische Grundlage für das Erkennen invaliditätsfremder Faktoren ist darzulegen.',BR+'Kap. 3.3.3–3.3.5');

add('Broschüre: Materielle Vorgaben','K','RAD-Prüfung und Checkliste (Broschüre) – bewerten Sie jede Aussage:',
 [['Der RAD prüft u. a. die Einhaltung der Leitlinien, ob die Ausführungen zu den Standardindikatoren fallbezogen ausreichen, die Nachvollziehbarkeit anhand der Argumentationskette (Fragestellung – Informationsbeschaffung – -bewertung – Beantwortung) und Verstösse gegen das Neutralitätsgebot.',true],
  ['Juristische Ausführungen gelten als Kompetenzüberschreitung und können erhebliche Zweifel an der Schlüssigkeit begründen (BGer 8C_448/2015); Widersprüche im Gutachten sind ein Einfallstor für erfolgreiche Anfechtung.',true],
  ['Die retrospektive Beurteilung der Arbeitsfähigkeit gehört zwingend in das Gutachten, sofern beurteilbar; andernfalls ist explizit zu begründen, warum nicht.',true],
  ['Im Sozialversicherungsrecht ist ein Einverständnis der Patientinnen zur Einholung weiterer Berichte stets nötig, im Privatrecht nicht.',false]],
 'Es ist umgekehrt: Im Privatrecht ist das Einverständnis zur Einholung weiterer Berichte notwendig (nicht so im Sozialversicherungsrecht bei Vollmacht). Dos: KSVI-Raster einhalten, Exploration mit Tonaufnahme (nur im Sozialversicherungsrecht), Dolmetscher organisieren, Eingliederungsberichte berücksichtigen, chronologischer Aktenauszug, Stellungnahme zu Indikatoren, Konsistenz, Zeit- und Leistungskomponente, angestammte und angepasste Tätigkeit, Konsens, Unterschrift. Don\'ts: Befangenheit, Bekannte als Dolmetscher, juristische Bewertungen, Widersprüche, Beurteilung ausserhalb des Fachgebiets.',BR+'Kap. 3.3.6');

add('Broschüre: Kausalität & Haftpflicht','K','Kausalgutachten und Haftpflicht (Broschüre) – bewerten Sie jede Aussage:',
 [['Unfall- und Militärversicherung sind kausal ausgestaltet; die IV ist final. Für kausale Versicherungen werden natürlicher und adäquater Kausalzusammenhang kumulativ vorausgesetzt.',true],
  ['Medizinische Gutachtende äussern sich ausschliesslich zum natürlichen Kausalzusammenhang; Äusserungen zur Adäquanz werden vom Bundesgericht als möglicher Hinweis auf Voreingenommenheit gewertet.',true],
  ['Die Beweisgrad-Frage (überwiegende Wahrscheinlichkeit) ist von der Teilkausalität zu trennen; natürliche Kausalität ist auch bei blosser Teilursache zu bejahen, sofern dieser Zusammenhang mit überwiegender Wahrscheinlichkeit feststeht.',true],
  ['Im Haftpflichtrecht ist eine objektivierte durchschnittliche geschädigte Person zugrunde zu legen und Vorzustände sind irrelevant.',false]],
 'Haftpflicht: Massgebend ist die individuell-konkret geschädigte Person (Geschädigte sind so zu nehmen, wie sie sind); Vorzustände sind besonders zu beachten, weil sie bei der Ersatzbemessung berücksichtigt werden können (Art. 44 OR, kein Alles-oder-Nichts-Prinzip); nur gestellte Fragen sind zu beantworten (v. a. Gerichtsgutachten). Die Adäquanz ist eine richterliche Aufgabe; auch eine sehr schwache Adäquanz kann zu voller Haftung führen. Wegfall des Kausalzusammenhangs: Status quo ante/sine.',BR+'Kap. 4.1');

add('Broschüre: Kausalität & Haftpflicht','K','GGK, FMH-Verfahren und Privatversicherung (Broschüre) – bewerten Sie jede Aussage:',
 [['Beim Gemeinschaftlichen Gutachter-Konsilium werden die Ergebnisse mündlich im Beisein der Parteien vorgestellt, diskutiert und Ergänzungsfragen beantwortet; bei Bedarf kann schriftlich festgehalten werden.',true],
  ['Die FMH-Gutachterstelle klärt (1) Fehlerfrage, (2) Kausalzusammenhang zwischen Fehler und Gesundheitsschaden, (3) Ausmass des Schadens im Vergleich zum vermuteten Verlauf bei richtiger Behandlung.',true],
  ['Invaliditätsgutachten im Privatversicherungsrecht fallen nicht unter den ATSG; die bundesgerichtlichen Vorgaben gelten nur analog, wenn die AVB dem Wortlaut von Art. 8 ATSG entsprechen und ausdrücklich auf den sozialversicherungsrechtlichen Invaliditätsbegriff verweisen.',true],
  ['Bei einer Krankentaggeldversicherung nach KVG gilt der ATSG nicht; die Definition der Arbeitsunfähigkeit findet sich nirgends.',false]],
 'Bei Krankentaggeld nach KVG sind die Bestimmungen des ATSG zu berücksichtigen; Arbeitsunfähigkeit (Art. 6 ATSG) ist sowohl bei KVG als auch VVG zentral und wird von den meisten Privatversicherungen analog in die AVB übernommen. Zu äussern ist sich zur angestammten und angepassten Tätigkeit; relevant sind auch adäquate Behandlung (Schadenminderung) und Prognose. Invaliditätskapital oft nach Gliedertabellen der AVB. Forensisch-psychiatrischer Schwerpunkttitel seit 2014; mind. 20 supervidierte strafrechtliche und 10 andere Gutachten.',BR+'Kap. 4.1.3–4.3');

add('Broschüre: Psychische Erkrankungen','K','Psychische Erkrankungen im Sozialversicherungsrecht (Broschüre) – bewerten Sie jede Aussage:',
 [['Ein psychischer Gesundheitsschaden setzt eine psychiatrische, lege artis auf ein anerkanntes Klassifikationssystem abgestützte Diagnose voraus; eine fachärztlich einwandfrei festgestellte Krankheit ist aber nicht ohne Weiteres gleichbedeutend mit Invalidität.',true],
  ['Mit BGE 130 V 352 (2004) wurde die Überwindbarkeitspraxis eingeführt (Überwindbarkeit als Regel, Invalidität als Ausnahme); mit BGE 141 V 281 (2015) wurde sie aufgegeben und durch das strukturierte Beweisverfahren anhand von Indikatoren ersetzt.',true],
  ['Die Anerkennung eines rentenbegründenden Invaliditätsgrades ist nur zulässig, wenn die funktionellen Auswirkungen anhand der Standardindikatoren schlüssig und widerspruchsfrei mit überwiegender Wahrscheinlichkeit nachgewiesen sind; sonst trägt die versicherte Person die Folgen der Beweislosigkeit.',true],
  ['BGE 143 V 418 beschränkte das strukturierte Beweisverfahren wieder auf die somatoforme Schmerzstörung.',false]],
 'BGE 143 V 418 weitete das Verfahren auf alle psychischen Störungen aus, BGE 145 V 215 auf Suchterkrankungen. BGE 151 V 194: Behandelbarkeit schliesst Erwerbsunfähigkeit nicht von vornherein aus. Beweisrechtlich entscheidend ist der verhaltensbezogene Aspekt der Konsistenz. Standardindikatoren: funktioneller Schweregrad (Gesundheitsschädigung: Befunde, Behandlungs-/Eingliederungserfolg, Komorbiditäten; Persönlichkeit; sozialer Kontext) und Konsistenz (gleichmässige Einschränkung, Leidensdruck).',BR+'Kap. 5.1–5.2');

add('Broschüre: Psychische Erkrankungen','K','Neuere Rechtsprechung (Broschüre) – bewerten Sie jede Aussage:',
 [['BGE 151 V 194 (Adipositas, 2024): Die grundsätzliche Behandelbarkeit steht einem Rentenanspruch nicht mehr von vornherein entgegen; von Betroffenen darf aber verlangt werden, zumutbare Behandlungen (z. B. diätische Therapie, Bewegungsprogramm) durchzuführen.',true],
  ['BGE 148 V 49: Eine leicht- bis mittelgradige depressive Störung ohne nennenswerte psychiatrische Komorbiditäten lässt sich im Allgemeinen nicht als schwere psychische Krankheit definieren; bei bedeutendem therapeutischem Potenzial ist auch die Dauerhaftigkeit in Frage gestellt.',true],
  ['Attestiert die Fachperson trotzdem eine namhafte Einschränkung ohne schlüssige Erklärung, kann der Rechtsanwender der Folgenabschätzung die Massgeblichkeit versagen.',true],
  ['Es genügt, vom diagnostizierten depressiven Geschehen direkt auf eine Arbeitsunfähigkeit zu schliessen.',false]],
 'Gefordert ist, dass die Sachverständigen «den Bogen schlagen» zum vorausgehenden Gutachtensteil (Aktenauszug, Anamnese, Befunde, Diagnosen) und darlegen, dass, inwiefern und inwieweit die erhobenen Befunde die Arbeitsfähigkeit einschränken – unter Miteinbezug der sonstigen persönlichen, familiären und sozialen Aktivitäten zu Vergleichs-, Plausibilisierungs- und Kontrollzwecken.',BR+'Kap. 5.2');

add('Broschüre: Unfallversicherung','K','Unfallähnliche Körperschädigung / Listenverletzungen (Art. 6 Abs. 2 UVG) – bewerten Sie jede Aussage:',
 [['Seit 1.1.2017 wird bei den Listenverletzungen kein ungewöhnliches äusseres Ereignis mehr verlangt; die Listendiagnose ist nur zu prüfen, wenn sich kein Unfall im Rechtssinn ereignet hat (Kaskade, keine kumulative Anwendung).',true],
  ['Bei einer Listenverletzung kehrt sich die Beweislast um: Die Unfallversicherung muss nachweisen, dass die Verletzung vorwiegend (zu mehr als 50 %) auf Abnützung oder Erkrankung beruht; die blosse Möglichkeit einer degenerativen Ursache genügt nicht.',true],
  ['Die Leistungspflicht besteht nur, wenn die Listenverletzung der Hauptbefund ist; nur wenn sämtliche Indikatoren in ihrer Gesamtheit eine vorwiegend degenerative/krankhafte Ursache zeigen, kann abgelehnt werden – ein Indikator allein genügt nicht.',true],
  ['Bei einer Listenverletzung entfällt die Leistungspflicht erst, wenn der Unfall keine auch nur geringe Teilursache mehr bildet.',false]],
 'Dies gilt beim Unfall im Sinne von Art. 4 ATSG (Leistungspflicht entfällt erst, wenn der Unfall keine auch nur geringe Teilursache mehr ist). Bei der Listenverletzung ist der Versicherer bereits befreit, wenn sie zu mehr als 50 % auf Abnützung oder Erkrankung zurückzuführen ist (BGE 146 V 51; BGer 8C_22/2019). Bei einem Unfall ist die versicherte Person beweispflichtig, bei der Listenverletzung die Versicherung für ihre Nichtzuständigkeit.',BR+'Kap. 6.1');

add('Broschüre: Unfallversicherung','K','Berufskrankheit (Art. 9 UVG) und Integritätsschaden – bewerten Sie jede Aussage:',
 [['Erste Gruppe (Liste in Anhang 1 UVV): ursächlicher Zusammenhang von mehr als 50 % mit dem Stoff bzw. der Arbeit; die Gutachterin macht eine Indizienbilanz.',true],
  ['Zweite Gruppe: die Krankheit muss mindestens stark überwiegend, d. h. zu mindestens 75 % durch die Berufsarbeit verursacht sein; epidemiologisch mindestens viermal häufiger als in der Gesamtbevölkerung.',true],
  ['Die Integritätsentschädigung gleicht immateriell bleibende Gesundheitsschäden aus (ähnlich der Genugtuung); sie beträgt einen Prozentsatz des Höchstbetrags des versicherten Verdienstes (seit 1.1.2016: CHF 148\'200), der Integritätsschaden kann insgesamt maximal 100 % betragen.',true],
  ['Ein Integritätsschaden besteht nur, wenn gleichzeitig eine Erwerbseinbusse vorliegt.',false]],
 'In der UVV-Skala z. B.: Paraplegie 90 %, Tetraplegie 100 %, vollständige Blindheit 100 %, Verlust eines Beines oberhalb des Kniegelenks 50 %, posttraumatische Epilepsie 30 %, Beeinträchtigung psychischer Teilfunktionen wie Gedächtnis/Konzentration 20 %. Militärversicherung: Richtwerte in der Regel halb so hoch; erheblich bei täglichen Beschwerden und ≥ 2.5 %; Abstufungen von 2.5 %; Dauerhaftigkeit und Stabilität sind ärztlich zu beurteilen.',BR+'Kap. 6.2–6.3');

add('Broschüre: Unfallversicherung','K','Adäquanz, Psychopraxis und «Schleudertrauma» (Broschüre) – bewerten Sie jede Aussage:',
 [['Die Adäquanz ist eine juristische Frage; bei organisch nachweisbaren strukturellen Veränderungen und natürlicher Kausalität wird sie ohne Weiteres bejaht. Für Fälle ohne hinreichend nachweisbare organische Veränderungen (v. a. psychische Folgeschäden) gilt die Psychopraxis mit Einteilung in leichte, mittelschwere und schwere Unfälle (nur im Sozialversicherungsbereich, nicht im Haftpflichtbereich).',true],
  ['Bei leichten Unfällen wird die Adäquanz in aller Regel verneint, bei schweren in aller Regel bejaht; bei mittelschweren sind sieben Kriterien zu prüfen (u. a. dramatische Begleitumstände, besondere Verletzungsschwere, ungewöhnlich lange Behandlung, Dauerschmerzen, Fehlbehandlung, schwieriger Heilverlauf, Grad/Dauer der Arbeitsunfähigkeit).',true],
  ['Das Salanitri-Urteil (BGE 117 V 359) begründete die «Schleudertrauma-Praxis» (typisches Beschwerdebild → natürlicher Kausalzusammenhang in der Regel); BGE 134 V 109 (2008) verschärfte die Kriterien.',true],
  ['Die Einteilung in leichte, mittelschwere und schwere Unfälle gilt ebenso im Haftpflichtrecht.',false]],
 'Im Haftpflichtrecht gilt die Adäquanzformel ohne die sozialversicherungsrechtlichen Kriterien; auch eine sehr schwache Adäquanz kann zu voller Haftung führen. Nach BGE 119 V 325 muss die HWS-Distorsion durch zuverlässige ärztliche Angaben gesichert sein. Rund zwei Jahre nach 2008 wurde die Rechtsprechung zu somatoformen Schmerzstörungen sinngemäss auch auf Schleudertraumata angewendet.',BR+'Kap. 6.4');

add('Broschüre: Vergabe & Beweiswert','K','Vergabe und Beweiswerthierarchie (Broschüre) – bewerten Sie jede Aussage:',
 [['Der Versicherungsträger muss der Partei den Namen der Gutachterin bekannt geben; diese kann innert 10 Tagen aus triftigen Gründen ablehnen. Anerkannt sind grundsätzlich formelle Ausstandsgründe; materielle Gründe (fachliche Spezialisierung, Sachkunde) sind bei der Beweiswürdigung zu behandeln.',true],
  ['Bi- und polydisziplinäre IV-Gutachten werden nach dem Zufallsprinzip über die Plattform SuisseMED@P an Gutachterstellen mit BSV-Vereinbarung vergeben; freihändige Vergabe ist in der IV nur noch bei monodisziplinären Gutachten möglich.',true],
  ['Es gilt der Grundsatz der freien Beweiswürdigung, die Rechtsprechung hat aber eine Hierarchie entwickelt: Gerichtsgutachten zuoberst, gefolgt von Administrativgutachten; mit grösserer Zurückhaltung zu begegnen ist versicherungsinternen Beurteilungen, Parteigutachten und Einschätzungen behandelnder Ärzte.',true],
  ['Parteigutachten gelten auch nach der ZPO-Revision 2025 nur als blosse Parteibehauptung ohne jeden Beweiswert.',false]],
 'Seit 1.1.2025 (Art. 177 ZPO) gelten private Gutachten der Parteien ausdrücklich als Urkunden und damit als zulässiges Beweismittel. Ein Parteigutachten sollte ein umfangreiches Aktenverzeichnis enthalten, einzeln auf die Dokumente verweisen und auf Studien, Literatur und Leitlinien Bezug nehmen. Fremdgutachten (z. B. MEDAS in einem anderen Verfahren) sind im Zivilverfahren beweistauglich unter Wahrung des rechtlichen Gehörs (BGE 140 III 24). Privatversicherer: Vergabekriterien weniger bedeutsam, da ein Privatgutachten nur Parteibehauptung galt; Mitwirkungsrechte sind im ATSG (Art. 44) geregelt, im Privatrecht nicht festgelegt.',BR+'Kap. 7.1–7.2');

const RL='SIM-Leitlinien rheumatologische Begutachtung, ';

add('Rheuma-Leitlinie: Beurteilung','K','Beurteilung im rheumatologischen Gutachten – welche Aussagen sind richtig?',
 [['Die Beurteilung ist das Kernstück des Gutachtens; auf ausführliche Wiederholungen des Krankheitsverlaufs ist zu verzichten.',true],
  ['In der Beurteilung sollen Zeiträume (z. B. «seit 12 Jahren») statt Daten angegeben werden.',true],
  ['Es sind ausschliesslich die Defizite darzustellen; Ressourcen gehören nicht in die Beurteilung.',false],
  ['Der Gutachter muss sich mit Vorgutachten und Berichten aus dem eigenen Fachgebiet auseinandersetzen und Abweichungen begründen.',true]],
 'BGE 141 V 281: Arbeitsunfähigkeit leitet sich aus dem «Saldo aller wesentlichen Belastungen und Ressourcen» ab; darum sind Defizite UND erhaltene Restfunktionen darzustellen. Die Diagnose ist «Referenz für allfällige Funktionseinschränkungen». Bei schwieriger Beweislage ist der Wahrscheinlichkeitsgrad anzugeben.',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Fragenkatalog','K','Beantwortung des Fragenkatalogs – welche Aussagen sind richtig?',
 [['Fragen, die der Gutachter nicht schlüssig beantworten kann, sind entsprechend zu kommentieren.',true],
  ['Stellungnahmen sollen nur zu Fragen aus dem eigenen Fach- und Kompetenzbereich abgegeben werden.',true],
  ['Unklar gestellte Fragen sollen im Zweifel trotzdem mit einer Schätzung beantwortet werden.',false],
  ['Fragen, bei denen er sich weder auf Berufserfahrung noch auf publizierte Forschung (EBM) abstützen kann, können nicht beantwortet werden.',true]],
 'Der Gutachter soll sich nicht verleiten lassen, Fragen zu beantworten, die er nicht schlüssig beantworten kann.',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Arbeitsunfähigkeit','K','Beurteilung der Arbeitsunfähigkeit nach den Leitlinien – welche Aussagen sind richtig?',
 [['Sie soll sich auf die ICF stützen (Körperfunktionen/-strukturen, Aktivitäten, Teilhabe, Umwelt- und personenbezogene Faktoren).',true],
  ['Die Arbeitsunfähigkeit nimmt primär Bezug auf den angestammten Arbeitsplatz.',true],
  ['Es ist zuerst eine Reduktion der Arbeitszeit festzulegen und erst danach zu prüfen, ob ganztägige Präsenz mit Leistungseinschränkung möglich ist.',false],
  ['Kommt die angestammte Tätigkeit nicht mehr in Frage, soll ein zumutbares Belastbarkeitsprofil für eine Verweistätigkeit beschrieben werden.',true]],
 'Es ist immer zuerst zu prüfen, ob Einschränkungen der Belastung/Leistung bei ganztägiger Präsenz möglich sind; nur wenn ganztägige Präsenz nicht zumutbar ist, wird die Arbeitszeit eingeschränkt. Teilarbeitsunfähigkeiten durch zumutbare Teilaufgaben sollen festgehalten werden.',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Konsistenz & Diskrepanz','K','Konsistenz- und Diskrepanzanalyse – welche Aussagen sind richtig?',
 [['Die Konsistenzprüfung gehört zu den Indikatoren des Leiturteils BGE 141 V 281 und wurde 2024 in die EKQMB-Qualitätskriterien aufgenommen.',true],
  ['Funktionelle Einschränkungen müssen sich einheitlich in allen vergleichbaren Lebensbereichen (Beruf, privates Umfeld, Sport) wiederfinden.',true],
  ['Die Diskrepanzanalyse umfasst auch den Vergleich der Medikamenteneinnahme mit den Blutwerten.',true],
  ['Weicht der Medikamentenspiegel vom erwarteten ab, darf daraus sicher auf mangelnde Compliance geschlossen werden.',false]],
 'Die pharmakologische Analyse ist schwierig (Interaktionen, genetischer Stoffwechsel, Nieren-/Leberfunktion); eine Abweichung ist anzugeben, aber voreilige Schlüsse zur Compliance sind zu vermeiden. Geprüft werden u. a. subjektive Symptome vs. klinische Befunde, Angaben vs. Fremdanamnese/Akten, Berufsunfähigkeit vs. Alltag, Symptomausmass vs. Therapieinanspruchnahme.',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Massnahmen, Prognose, Eingliederung','K','Therapie, Prognose und berufliche Eingliederung – welche Aussagen sind richtig?',
 [['Empfohlen werden sollen nur Behandlungen, die in der Schweiz zugelassen sind und von der OKP übernommen werden.',true],
  ['Als Prognosezeitraum hat sich ein Zeitraum von etwa zwei Jahren bewährt.',true],
  ['Der Gutachter soll bei der Eingliederung konkrete Berufe und die konkret durchzuführende Massnahme vorschlagen.',false],
  ['Behandlungen, die nicht lege artis bzw. nicht leitliniengerecht erfolgten, soll der Gutachter kritisch hinterfragen – die Beurteilung der Behandler erfolgt aber mit kollegialem Respekt.',true]],
 'Beschrieben wird ein Anforderungsprofil an eine Verweisungstätigkeit aus Defiziten und Ressourcen; weder konkrete Massnahme noch konkrete Berufe. Bei Unfallfolgen: Ist der Endzustand erreicht bzw. kann die Behandlung noch namhaft bessern oder nur stabil halten?',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Glossar Beweisgrad','A+','Welche Zuordnung der Beweisgrade gemäss Glossar der Leitlinien ist richtig?',
 ['«Möglich» = Wahrscheinlichkeit unter 50 %.',
  '«Überwiegend wahrscheinlich» = genau 50 %.',
  '«Mit an Sicherheit grenzender Wahrscheinlichkeit» = ca. 75 %.',
  '«Möglich» reicht für die Anerkennung eines Sachverhalts in der Sozialversicherung aus.',
  '«Überwiegend wahrscheinlich» = knapp über 50 % ist stets ausreichend, Vermutungen genügen.'],
 'Beweisgrad: möglich <50 %; überwiegend wahrscheinlich = (deutlich) >50 %; an Sicherheit grenzend = nahezu 100 %. Sozialversicherung verlangt mindestens überwiegende Wahrscheinlichkeit; Vermutung oder blosse Möglichkeit genügen nicht.',RL+'Kap. 4 (Glossar)',null);

add('Rheuma-Leitlinie: EFL','K','Zur EFL (Evaluation der arbeitsbezogenen funktionellen Leistungsfähigkeit) – welche Aussagen sind richtig?',
 [['Sie ist eine bidisziplinäre Untersuchung durch Physiotherapeut und Arzt.',true],
  ['Sie umfasst insgesamt 29 standardisierte Tests, mindestens 15 müssen durchgeführt werden.',true],
  ['Beauftragte Institutionen müssen durch die FG BERE der SIM akkreditiert sein.',true],
  ['Die EFL schätzt nur die Leistungsfähigkeit; Einsatzbereitschaft und Konsistenz werden nicht beurteilt.',false]],
 'Im Rahmen der Tests erfolgt zusätzlich eine standardisierte Einschätzung von Einsatzbereitschaft und Konsistenz. Abrechnung: Sozialversicherung nach MTK-Tarif, Privatversicherung nach Offerte.',RL+'Kap. 4 (Glossar)',null);

add('Rheuma-Leitlinie: Ausschlussgründe','K','Ausschlussgründe (BGE 131 V 49 / 141 V 281) – welche gehören dazu?',
 [['Aggravation und sekundärer Krankheitsgewinn',true],
  ['Vage Schilderung der Beschwerden',true],
  ['Erhebliche Diskrepanz zwischen geschilderten Schmerzen und gezeigtem Verhalten',true],
  ['Eine ausgeprägte Komorbidität',false]],
 'Weitere: Diskrepanz zwischen Beschwerden und Therapieinanspruchnahme, demonstrativ vorgetragene Klagen, schwere Alltagseinschränkungen bei weitgehend intaktem Umfeld. Liegen wesentliche Ausschlussgründe vor, wird die Behinderung in der Regel nicht als Invalidität im Rechtssinn anerkannt. Aggravation = bewusst intendierte Verschlimmerung zum Erlangen (materieller) Vorteile.',RL+'Kap. 4 (Glossar)',null);

add('Rheuma-Leitlinie: Diagnosen','A-','Welche Aussage zur Diagnosestellung im rheumatologischen Gutachten ist FALSCH?',
 ['Der Status «Status nach …» ist als Diagnose bevorzugt zu verwenden.',
  'Diagnosen werden separat und nach Wertigkeit geordnet aufgeführt.',
  'Verdachtsdiagnosen sind als solche zu deklarieren.',
  'Differenzialdiagnosen gehören nicht in die Diagnoseliste.',
  'Diagnostische Unschärfen sind in einem kommentierenden Abschnitt darzulegen.'],
 '«Status nach» soll nicht als Diagnose verwendet werden. Bei den gutachterlich relevanten Hauptdiagnosen ist zum Schweregrad Stellung zu nehmen; es wird die im Sprachraum übliche bzw. die ICD-Klassifikation verwendet.',RL+'Kap. 3.5',null);

add('Rheuma-Leitlinie: Invaliditätsgrad','A+','Wie wird der Invaliditätsgrad gemäss Art. 16 ATSG (Glossar) berechnet?',
 ['IV-Grad = 1 – (Invalideneinkommen / Valideneinkommen)',
  'IV-Grad = 1 – (Valideneinkommen / Invalideneinkommen)',
  'IV-Grad = Valideneinkommen – Invalideneinkommen',
  'IV-Grad = Invalideneinkommen / Valideneinkommen',
  'IV-Grad = Arbeitsunfähigkeit in % des letzten Pensums'],
 'Valideneinkommen = zuletzt erwirtschaftetes bzw. ohne Invalidität erzielbares Einkommen; Invalideneinkommen = mit zumutbarer Tätigkeit bei ausgeglichenem Arbeitsmarkt erzielbares Einkommen. Arbeitsunfähigkeit ist letztlich ein Rechtsbegriff und wird abschliessend vom Rechtsanwender festgelegt (BGE 140 V 193).',RL+'Kap. 4 (Glossar)',null);

/*END*/
})();
