/* Ergänzungsfragen für den Lernpfad «Gezielte Vorbereitung nach Modulen».
   Lücken gegenüber den Kapiteln der Repetitorien M1–M4 und der Broschüre «Medizinische Begutachtung in der Schweiz» (5. Aufl. 2026).
   Alle Fragen selbst formuliert (keine Originalprüfungsfragen). Feld «kap» = Kapitel im Lernpfad.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(modul,kap,thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'n'+modul+'-'+String(n).padStart(3,'0'),modul,kap,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const B='Broschüre Gutachten 5. Aufl. 2026, ';

/* ================= MODUL 1 ================= */
add(1,6,'IV-Leistungen','A+','Welcher Rentenanteil entspricht im stufenlosen Rentensystem (seit 1.1.2022) einem Invaliditätsgrad von 41 %?',
 ['27,5 % einer ganzen Rente','41 % einer ganzen Rente','25 % einer ganzen Rente','50 % einer ganzen Rente'],
 'Bei 40 % beginnt der Rentenanspruch mit 25 %; jedes weitere Prozent erhöht den Rentenanteil bei 40–49 % um 2,5 Prozentpunkte (41 % → 27,5 %, 49 % → 47,5 %). Ab 50 % entspricht der Rentenanteil dem IV-Grad, ab 70 % besteht Anspruch auf eine ganze Rente.',
 'Modul 1 (Rentensystem seit 1.1.2022); bitte Zahlen in der Folie / Broschüre verifizieren');
add(1,6,'IV-Leistungen','K','Stufenloses Rentensystem der IV (seit 1.1.2022) – bewerten Sie jede Aussage:',
 [['Der Anspruch auf eine Rente entsteht ab einem Invaliditätsgrad von 40 %.',true],
  ['Eine ganze Rente wird ab einem Invaliditätsgrad von 70 % ausgerichtet.',true],
  ['Bei einem Invaliditätsgrad von 50–69 % entspricht der Rentenanteil dem Invaliditätsgrad.',true],
  ['Bei einem Invaliditätsgrad von 49 % beträgt der Rentenanteil ebenfalls 49 %.',false]],
 'Zwischen 40 und 49 % wird der Rentenanteil abgestuft (25 % bis 47,5 %); erst ab 50 % entspricht er dem IV-Grad. Der Invaliditätsgrad ist ein Rechtsbegriff, die Gutachterin liefert dafür nur die medizinische Grundlage.',
 'Modul 1 (Rentensystem seit 1.1.2022); bitte in der Folie verifizieren');

add(1,7,'Weiterentwicklung der IV (2022)','K','Neuerungen mit der Weiterentwicklung der IV (in Kraft seit 1.1.2022) – bewerten Sie jede Aussage:',
 [['Bi- und polydisziplinäre Gutachten der IV werden nach dem Zufallsprinzip an Gutachterstellen vergeben.',true],
  ['Es wurde eine unabhängige Eidgenössische Kommission für Qualitätssicherung in der medizinischen Begutachtung eingesetzt.',true],
  ['Das Interview ist im Sozialversicherungsrecht grundsätzlich auf Tonband aufzunehmen, sofern die versicherte Person nicht vorgängig verzichtet.',true],
  ['Die inhaltlichen Vorgaben der ATSV gelten gleichermassen für Gutachten im Privatrecht und in der beruflichen Vorsorge.',false]],
 'Die ATSV-Vorgaben (z. B. Tonaufnahme) gelten nur für Gutachten im Sozialversicherungsrecht, nicht für Privatrecht und berufliche Vorsorge. Grundlage auf Gesetzesebene ist Art. 44 Abs. 7 ATSG, auf Verordnungsebene Art. 7m ATSV.',
 B+'Kap. 2.1, 2.5');
add(1,7,'Weiterentwicklung der IV (2022)','A+','Was umfasst die Tonaufnahme des Interviews nach Art. 7k ATSV?',
 ['Das gesamte Untersuchungsgespräch mit Anamnese und Beschwerdeschilderung, nicht aber den testpsychologischen Teil',
  'Die gesamte Untersuchung einschliesslich der Testpsychologie und der körperlichen Untersuchung',
  'Nur die Beschwerdeschilderung der versicherten Person ohne die Anamneseerhebung',
  'Nur die Schlussbesprechung, in der die Gutachterin die Ergebnisse mitteilt'],
 'Aufzunehmen ist das gesamte Interview (Anamneseerhebung und Beschwerdeschilderung). Der testpsychologische Teil psychiatrischer, neurologischer und neuropsychologischer Untersuchungen gehört nicht dazu.',
 B+'Kap. 2.5');
add(1,7,'Weiterentwicklung der IV (2022)','K','Tonaufnahme des Interviews (ATSV) – bewerten Sie jede Aussage:',
 [['Der Verzicht auf die Tonaufnahme wird schriftlich gegenüber dem Durchführungsorgan erklärt.',true],
  ['Die Vernichtung der Aufnahme kann bis 10 Tage nach dem Interview beantragt werden.',true],
  ['Beginn und Ende des Interviews werden mündlich mit Uhrzeit auf der Aufnahme bestätigt.',true],
  ['Nach rechtskräftigem Abschluss des Verfahrens muss der Versicherungsträger die Aufnahme zwingend und ohne Rückfrage vernichten.',false]],
 'Nach Abschluss des Verfahrens darf der Versicherungsträger die Aufnahme im Einverständnis mit der versicherten Person vernichten (Art. 7l ATSV). Die Verzichtserklärung richtet sich an das Durchführungsorgan, nicht an die Gutachterin.',
 B+'Kap. 2.5 (Art. 7k/7l ATSV)');
add(1,7,'Weiterentwicklung der IV (2022)','A+','Wer ist vom Erfordernis des SIM-Zertifikats nach Art. 7m Abs. 2 ATSV ausgenommen?',
 ['Chefärztinnen, Chefärzte sowie leitende Ärztinnen und Ärzte in Universitätskliniken',
  'Fachärztinnen und Fachärzte mit mehr als zehn Jahren Gutachtenerfahrung in der Sozialversicherung',
  'Gutachterinnen und Gutachter, die ausschliesslich monodisziplinäre Aufträge der IV übernehmen',
  'Fachärztinnen und Fachärzte mit eigener Praxis und gültiger kantonaler Berufsausübungsbewilligung'],
 'Das Zertifikat ist für Fachärzte der allgemeinen inneren Medizin, Psychiatrie, Neurologie, Rheumatologie, Orthopädie und orthopädischen Chirurgie/Traumatologie vorgeschrieben. Ausgenommen sind nur Chef- und leitende Ärzte an Universitätskliniken. Die Übergangsfrist von 5 Jahren läuft 2027 aus.',
 B+'Kap. 2.1–2.2');
add(1,7,'Ablehnung & Vergabe','K','Ablehnung der Gutachterin und Vergabe – bewerten Sie jede Aussage:',
 [['Die Partei kann die Gutachterin aus triftigen Gründen innert 10 Tagen ablehnen.',true],
  ['Als Ablehnungsgründe anerkennt das Bundesgericht grundsätzlich formelle (gesetzliche Ausstands-)Gründe.',true],
  ['Fachliche Spezialisierung oder Sachkunde sind in der Regel kein Ablehnungsgrund, sondern Thema der Beweiswürdigung.',true],
  ['Die freihändige Vergabe bi- und polydisziplinärer Gutachten ist in der IV weiterhin die Regel.',false]],
 'Bi- und polydisziplinäre Gutachten der IV werden nach dem Zufallsprinzip vergeben (Plattform SuisseMED@P); freihändig ist die Vergabe nur noch bei monodisziplinären Gutachten möglich. Eine frühere Befassung ist nicht automatisch ein Ausstandsgrund.',
 B+'Kap. 2.6 / Vergabe (Abschnitt bitte verifizieren)');
add(1,7,'Gutachtensauftrag','A+','Was gehört nach den Leitlinien zu den inhaltlichen Aspekten des Gutachtensauftrags?',
 ['Die Festlegung der begutachtenden Fachdisziplin(en) mit Kennzeichnung der federführenden Disziplin',
  'Die Vorgabe des vom Auftraggeber gewünschten Ergebnisses zur Arbeitsfähigkeit in Prozent',
  'Die Vorgabe, welche Diagnose die Gutachterin im Gutachten zu stellen hat',
  'Die verbindliche Festlegung des Invaliditätsgrades durch den Auftraggeber vorab'],
 'Im Auftrag sind die Disziplinen festzulegen und die federführende Disziplin zu kennzeichnen. Ergebnis, Diagnose und rechtliche Folgen dürfen nicht vorgegeben werden.',
 'Leitlinien allgemeiner Teil 2020, Auftrag (bitte Abschnitt verifizieren)');

/* ================= MODUL 2 ================= */
add(2,1,'Krankheitsmodelle','A+','Wie ist «Burnout» nach ICD-10 kodiert und welche Folge hat das für den Rentenanspruch?',
 ['Als Z-Kodierung (Z73); allein kein Rentenanspruch, aber bei den Indikatoren zu berücksichtigen',
  'Als F-Diagnose mit Krankheitswert; sie begründet bei Erschöpfung stets einen Rentenanspruch',
  'Als F-Diagnose; sie ist bei der Indikatorenprüfung nicht zu berücksichtigen',
  'Als Z-Kodierung; sie ist deshalb auch bei der Indikatorenprüfung völlig unbeachtlich'],
 'Z-Kodierungen vermitteln allein keinen Rentenanspruch (BGer 9C_537/2011), sind aber bei der Prüfung der Indikatoren zu berücksichtigen (BGer 8C_300/2017). «Krise ist nicht Krankheit.»',
 'Repetitorium M2, Kap. 1.4; Urteilsangaben bitte im Original verifizieren');
add(2,1,'Krankheitsmodelle','K','Krankheitsmodelle in der Psychiatrie – bewerten Sie jede Aussage:',
 [['Die positive Lesart des bio-psycho-sozialen Modells meint einen ernsthaften Austausch der drei Perspektiven.',true],
  ['Die negative Lesart meint die blosse Addition dreier Perspektiven ohne ernsthaften Austausch.',true],
  ['Mit «Reifikation» ist gemeint, psychische Krankheiten als vermeintliche «Gegenstände» zu behandeln.',true],
  ['Für die Begutachtung gelten transdiagnostische Forschungsansätze (z. B. RDoC) anstelle von ICD und DSM.',false]],
 'Für die Begutachtung gelten weiterhin die anerkannten Klassifikationssysteme (ICD-10/-11, DSM-5-TR); die ICF ergänzt auf der Funktions- und Teilhabeebene. Diagnosen sind Ordnungsinstrumente, keine Naturgegenstände – aber nicht beliebig.',
 'Repetitorium M2, Kap. 1.2–1.3');
add(2,1,'Krankheitsmodelle','A-','Welche Aussage zum medizinischen und juristischen Krankheitsmodell ist FALSCH?',
 ['In der Behandlungsphase gilt das engere juristische Konzept unter Ausklammerung der direkten Folgen sozialer Faktoren',
  'Steht ein Rentenanspruch zur Diskussion, gilt das engere Konzept mit Ausklammerung der direkten Folgen sozialer Faktoren',
  'Die Jurisprudenz denkt eher normativ («schwarz-weiss»), die Medizin eher in Varianten («bunt»)',
  'Das juristische Modell hat sich mit den Leitentscheiden zu den psychischen Störungen dem medizinischen angenähert'],
 'In der Behandlungsphase (Behandlungskosten, Taggelder) gilt das medizinische Krankheitsmodell. Das engere Konzept gilt erst, wenn ein Rentenanspruch zur Diskussion steht.',
 'Repetitorium M2, Kap. 1.4');

add(2,10,'Observation','A+','Welche gesetzliche Grundlage erlaubt den Sozialversicherungen seit dem 1. Oktober 2019 Observationen?',
 ['Art. 43a ATSG, bei begründetem Verdacht auf unrechtmässigen Leistungsbezug',
  'Art. 59 Abs. 5 IVG, auch ohne besonderen Verdacht auf unrechtmässigen Leistungsbezug',
  'Art. 44 ATSG, auf Anordnung der begutachtenden Person im Rahmen der Untersuchung',
  'Art. 146 StGB, aber nur im Rahmen eines bereits eröffneten Strafverfahrens'],
 'Mit Art. 43a ATSG besteht seit 1.10.2019 eine ausreichende Grundlage für alle Sozialversicherungen bei begründetem Verdacht. Art. 59 Abs. 5 IVG genügte nach dem EGMR-Urteil nicht. Die Anordnung ist Sache des Versicherungsträgers, nicht der Gutachterin.',
 'Repetitorium M2, Kap. 10.1');
add(2,10,'Observation','K','Observationsmaterial im Gutachten – bewerten Sie jede Aussage:',
 [['Die Gutachterin sichtet das Material selbst und gleicht es mit den geltend gemachten Einschränkungen ab.',true],
  ['Kurzzeitig gute Funktion unter Beobachtung widerlegt nicht jede geltend gemachte Einschränkung.',true],
  ['Bei Verdacht ordnet die Gutachterin selbst eine Observation an.',false],
  ['Observationsmaterial hat als Beweismittel grundsätzlich Vorrang vor den Untersuchungsbefunden.',false]],
 'Observationsmaterial ist ein Beweismittel wie andere auch und wird wertfrei in die Konsistenzprüfung integriert. Die Anordnung einer Observation ist Sache des Versicherungsträgers (begründeter Verdacht).',
 'Repetitorium M2, Kap. 10.2');
add(2,10,'Observation','A-','Welche Aussage zur Observation im Privatversicherungsrecht ist FALSCH?',
 ['Eine Observation durch den Privatversicherer ist nach der Rechtsprechung des Bundesgerichts stets widerrechtlich',
  'Sie ist nicht widerrechtlich, wenn das Interesse an der Verhinderung von Versicherungsbetrug das Persönlichkeitsinteresse überwiegt',
  'Die Parteien beschaffen im Zivilprozess die Beweise selbst und dürfen dabei nur nicht rechtswidrig vorgehen',
  'Bei der Abwägung zählen unter anderem Ort, Dauer, Inhalt und Geeignetheit der Mittel'],
 'Der Entscheid des EGMR lässt sich nicht auf privatrechtliche Streitigkeiten übertragen; massgebend ist die Interessenabwägung (Persönlichkeitsschutz gegen Betrugsverhinderung).',
 'Repetitorium M2, Kap. 10.1; Urteilsangaben bitte im Original verifizieren');

/* ================= MODUL 3 ================= */
add(3,3,'Funktionelle neurologische Symptome','K','Positive Zeichen funktioneller neurologischer Störungen – bewerten Sie jede Aussage:',
 [['Variabilität zwischen Untersuchungsmomenten kann ein positives Zeichen sein, muss aber methodisch eingeordnet werden.',true],
  ['Eine Diskrepanz zwischen formaler Prüfung und spontaner Handlung ist ein positives Zeichen.',true],
  ['Inkongruenz mit neuroanatomischen Mustern (z. B. exakt an der Mittellinie begrenzte Hemisensibilitätsstörung) spricht für eine funktionelle Störung.',true],
  ['Eine unauffällige Bildgebung genügt als Begründung für die Diagnose einer funktionellen Störung.',false]],
 'Die Diagnose ist positiv klinisch zu begründen; «Bildgebung normal» ist kein ausreichendes Argument. Schmerz, Angst, Ermüdung, Instruktionsverständnis und Übungseffekte können Variabilität ebenfalls erklären.',
 'Repetitorium M3, Kap. 3');
add(3,3,'Funktionelle neurologische Symptome','A+','Was bedeutet die Diagnose einer funktionellen neurologischen Störung für die Frage nach bewusster Täuschung?',
 ['Die Frage nach bewusster Täuschung ist von der positiven Diagnose einer funktionellen Störung zu trennen',
  '«Funktionell» bedeutet, dass die Symptome eingebildet sind und keinen Krankheitswert haben',
  '«Funktionell» bedeutet, dass die Symptome willentlich erzeugt werden, um einen Vorteil zu erlangen',
  'Die Diagnose schliesst jede Aggravation und jede Inkonsistenz im weiteren Verlauf aus'],
 '«Funktionell» heisst weder «eingebildet» noch «willentlich erzeugt». Beispiel: Nachgeben bei formaler Kraftprüfung, aber bessere Kraft beim spontanen Aufstehen = erklärungsbedürftige funktionelle Diskrepanz, nicht automatisch «Simulation».',
 'Repetitorium M3, Kap. 3');

add(3,4,'Bildgebung & Neuroradiologie','A-','Welche Aussage zur Bildgebung im Gutachten ist FALSCH?',
 ['Die Grösse einer Läsion korreliert linear mit Schmerz und Arbeitsfähigkeit',
  'Unfallnahe Bildgebung ist für die Kausalitätsbeurteilung besonders wertvoll',
  'Das CT ist besonders stark für knöcherne Strukturen, die MRT zeigt Weichteile und Knochenmark differenzierter',
  'Sensitivität und Spezifität gelten für eine definierte Frage und Population und sind nicht ohne Weiteres auf den Einzelfall übertragbar'],
 'Degenerative Veränderungen finden sich häufig ohne passende Beschwerden; die Läsionsgrösse korreliert nicht linear mit Schmerz oder Arbeitsfähigkeit. Bildgebung beantwortet Morphologie, nicht Funktion.',
 'Repetitorium M3, Kap. 4');
add(3,4,'Bildgebung & Neuroradiologie','K','Sechs Monate nach einer Sprunggelenksdistorsion zeigt die MRT kein Knochenmarködem – bewerten Sie jede Aussage:',
 [['Daraus folgt nicht sicher, dass initial keine strukturelle Verletzung bestand.',true],
  ['Für die Kausalitätsfrage werden unfallnahe Befunde, Mechanismus, Verlauf, Vorzustand und heutige Residuen benötigt.',true],
  ['Die fehlende morphologische Erklärung beweist, dass die Beschwerden nicht bestehen.',false],
  ['Der spätere Normalbefund beweist, dass nie eine Verletzung vorlag.',false]],
 'Ein später fehlendes Akutzeichen ist kein Beweis, dass nie eine Verletzung bestand; umgekehrt wird fehlende Morphologie nicht als Beweis gegen Beschwerden verwendet.',
 'Repetitorium M3, Kap. 4');

add(3,7,'Fatigue','A+','Welche Mindestdauer der unerklärten Fatigue nennen die Fukuda-Kriterien des chronischen Fatigue-Syndroms in den Kursunterlagen?',
 ['Mindestens sechs Monate','Mindestens drei Monate','Mindestens zwölf Monate','Mindestens vier Wochen'],
 'Zusätzlich müssen Begleitsymptome vorliegen (nicht erholsamer Schlaf, Verschlechterung nach Belastung, Konzentrations-/Gedächtnisprobleme, Schmerzen). Die Kriterien sind ein diagnostisches Gerüst und ersetzen weder Differenzialdiagnose noch Funktionsprüfung.',
 'Repetitorium M3, Kap. 7');
add(3,8,'Neuropsychologie','K','Neuropsychologische Testwerte – bewerten Sie jede Aussage:',
 [['Je mehr Tests durchgeführt werden, desto wahrscheinlicher tritt auch bei Gesunden mindestens ein niedriger Wert auf.',true],
  ['Die kritische Differenz zwischen zwei Messzeitpunkten hängt insbesondere von der Reliabilität ab.',true],
  ['Die Validitätsprüfung erklärt, warum ein Leistungsprofil nicht interpretierbar ist.',false],
  ['Die Arbeitsfähigkeit ergibt sich aus dem Mittelwert über alle Testwerte.',false]],
 'Die Validitätsprüfung beantwortet zunächst nur, ob das Profil interpretierbar ist – nicht, warum nicht. Die Übersetzung in Arbeitsfähigkeit verlangt ein Anforderungsprofil, keinen Mittelwert.',
 'Repetitorium M3, Kap. 8');
add(3,9,'Weichteilrheumatologie & Fibromyalgie','A+','Welche Elemente nutzen die Kursfolien zur Diagnose der Fibromyalgie?',
 ['Widespread Pain Index und Symptom Severity Scale, Symptomdauer von mindestens drei Monaten, Prüfung anderer Erklärungen',
  'Mindestens 11 von 18 Tenderpoints als alleiniges und ausreichendes Kriterium ohne weitere Abklärung',
  'Bildgebender Nachweis einer entzündlichen Veränderung in mindestens drei Körperregionen',
  'Erhöhtes CRP und positive Rheumafaktoren als obligate Laborkriterien für die Diagnose'],
 'Die Kriterien helfen bei der Diagnose, bestimmen aber keine Arbeitsfähigkeit. Triggerpunkte myofaszialer Syndrome sind nicht mit den Tenderpoints der Fibromyalgie gleichzusetzen.',
 'Repetitorium M3, Kap. 9');

add(3,10,'Schwangerschaft','A+','Wie ist die Schwangerschaft für die Beurteilung der Arbeitsfähigkeit einzuordnen?',
 ['Als physiologischer Zustand; Arbeitsunfähigkeit ist an pathologische Befunde, funktionelle Folgen oder konkrete Risiken zu knüpfen',
  'Als Krankheit, die ab Feststellung der Schwangerschaft automatisch eine volle Arbeitsunfähigkeit begründet',
  'Als Zustand, bei dem die Arbeitsfähigkeit pauschal nach der Schwangerschaftswoche festgelegt wird',
  'Als Zustand, der nur bei Mehrlings- oder Risikoschwangerschaften arbeitsmedizinisch zu prüfen ist'],
 'Nicht «schwanger = arbeitsunfähig», sondern Befund + Risiko + Tätigkeit + Anpassbarkeit = funktionelle Beurteilung.',
 'Repetitorium M3, Kap. 10');
add(3,10,'Schwangerschaft','K','Arbeitsfähigkeit in der Schwangerschaft – bewerten Sie jede Aussage:',
 [['Die Schonungsempfehlung der Behandelnden darf nicht ungeprüft als rückwirkend bewiesene Arbeitsunfähigkeit übernommen werden.',true],
  ['Die bisherige und die angepasste Tätigkeit sind getrennt zu beurteilen.',true],
  ['Bei akuten Notfällen ist Homeoffice immer zumutbar.',false],
  ['Physiologische Beschwerden rechtfertigen automatisch eine vollständige Arbeitsunfähigkeit.',false]],
 'Bei akuten Notfällen kann auch Homeoffice unzumutbar sein; in anderen Situationen sind Teilzeit, Belastungsreduktion oder Arbeitsplatzanpassung tragfähige Lösungen.',
 'Repetitorium M3, Kap. 10');
add(3,10,'Schwangerschaft','A-','Welche Aussage zur Beurteilung in der Schwangerschaft ist FALSCH?',
 ['Eine Schwangerschaft gilt als Krankheit, weshalb Arbeitsunfähigkeit stets anzunehmen ist',
  'Zu erheben sind unter anderem Belastung, Exposition (Hitze, Infektionen, Gefahrstoffe), Pausenmöglichkeiten und Arbeitsweg',
  'Teilzeit, Belastungsreduktion oder Arbeitsplatzanpassung können eine tragfähige Lösung sein',
  'Entscheidend ist die individuelle Kombination aus Befund, Verlauf, Tätigkeit und Anpassungsmöglichkeit'],
 'Die Schwangerschaft ist ein physiologischer Zustand, keine Krankheit.',
 'Repetitorium M3, Kap. 10');

add(3,11,'Koronare Herzkrankheit','A+','Was beschreibt die CT-Koronarangiographie vor allem?',
 ['Die Anatomie der Koronararterien; hoher negativer Vorhersagewert bei niedriger bis mittlerer Vortestwahrscheinlichkeit',
  'Die Ischämie unter Belastung und die quantitative Beurteilung der Mikrozirkulation im Myokard',
  'Die Belastbarkeit in Watt, aus der sich die Arbeitsfähigkeit direkt in Prozent ableiten lässt',
  'Die Myokardperfusion als alleinige und ausreichende Grundlage für eine Arbeitsunfähigkeit'],
 'Anatomie lokalisiert; Funktion quantifiziert die Belastungsrelevanz. Funktionelle Verfahren (PET, SPECT, kardiale MRT, Stress-Echo) prüfen Ischämie oder Perfusion.',
 'Repetitorium M3, Kap. 11');
add(3,11,'Koronare Herzkrankheit','K','Koronare Herzkrankheit im Gutachten – bewerten Sie jede Aussage:',
 [['Eine anatomische Stenose bedeutet nicht automatisch eine relevante Ischämie unter Belastung.',true],
  ['Funktionelle Durchblutungsstörungen können ohne hochgradige fokale Stenose vorkommen.',true],
  ['Die Methodenwahl richtet sich unter anderem nach Prätestwahrscheinlichkeit, Patientenfaktoren und Fragestellung.',true],
  ['Aus dem Stenosegrad folgt direkt eine Arbeitsfähigkeitszahl.',false]],
 'Die Arbeitsfähigkeit folgt aus der tatsächlichen funktionellen Limitation und den Tätigkeitsanforderungen. Bei sicherheitskritischer Arbeit sind zusätzlich Rhythmus, Synkopenrisiko und individuelle Belastung zu prüfen.',
 'Repetitorium M3, Kap. 11');
add(3,11,'Koronare Herzkrankheit','A-','Welche Aussage zur kardialen Diagnostik ist FALSCH?',
 ['Die PET prüft ausschliesslich die Anatomie der Koronararterien',
  'Die PET kann quantitative Aussagen zu Durchblutung und Mikrozirkulation ermöglichen',
  'SPECT, kardiale MRT und Stress-Echokardiographie prüfen Ischämie oder Perfusion',
  'Die direkte invasive Diagnostik ist nicht in jeder Ausgangslage der erste Schritt'],
 'Anatomische (CT-Koronarangiographie) und funktionelle Verfahren beantworten verschiedene Fragen.',
 'Repetitorium M3, Kap. 11');

add(3,12,'Kinder- und Jugendpsychiatrie (IV)','A+','Wie ist ADHS bei Jugendlichen für Arbeits- oder Ausbildungsfähigkeit zu beurteilen?',
 ['Die Funktion hängt von Komorbidität, Entwicklungsstand, Therapieverlauf, Strukturierungsbedarf und Anforderungen der Ausbildung ab',
  'Die Diagnose führt automatisch zu einer quantitativen Arbeits- oder Ausbildungsunfähigkeit',
  'Aus der Diagnose lässt sich ein pauschaler Prozentwert der Arbeitsunfähigkeit ableiten',
  'Bei guter Leistung unter enger Strukturierung ist die Diagnose als nicht relevant zu verwerfen'],
 'Funktion vor Etikett: Das Gutachten beschreibt Unterstützungsniveau, übertragbare Ressourcen und Anforderungen einer konkreten Ausbildung.',
 'Repetitorium M3, Kap. 12');
add(3,12,'Kinder- und Jugendpsychiatrie (IV)','K','Kinder- und Jugendpsychiatrie im IV-Kontext – bewerten Sie jede Aussage:',
 [['Altersgebundene Kriterien eines Geburtsgebrechens müssen anhand zeitnaher Unterlagen belegt sein.',true],
  ['Eine spätere Diagnose darf nicht rückwirkend alle früheren Kriterien ersetzen.',true],
  ['Die rechtliche Folge einer fehlenden Mitwirkung entscheidet die Gutachterin.',false],
  ['Soziokulturelle Belastung ist für sich allein bereits ein Gesundheitsschaden.',false]],
 'Behandlung und rechtlicher Leistungsentscheid bleiben getrennte Aufgaben. Soziokulturelle Faktoren sind wichtig für Kontext und Integration, aber allein kein Gesundheitsschaden.',
 'Repetitorium M3, Kap. 12');
add(3,12,'Kinder- und Jugendpsychiatrie (IV)','A-','Welche Aussage zur medizinischen Rolle bei Kindern und Jugendlichen ist FALSCH?',
 ['Die Gutachterin entscheidet über den Leistungsanspruch der IV',
  'Behandlung und rechtlicher Leistungsentscheid bleiben getrennte Aufgaben',
  'Gesundheitlich bedingte Einschränkungen sind von rein soziokulturellen oder schulorganisatorischen Faktoren zu trennen',
  'Der Vorrang der Integration ist zu beachten'],
 'Die medizinische Aufgabe: Gesundheitsschaden, funktionelle Auswirkungen sowie Arbeits- oder Ausbildungsfähigkeit.',
 'Repetitorium M3, Kap. 12');

add(3,13,'Genetik im Gutachten','A+','Wie ist eine Variante unklarer Signifikanz (VUS) im Gutachten zu behandeln?',
 ['Sie ist grundsätzlich keine sichere Entscheidungsbasis',
  'Sie gilt als gesicherter Krankheitsnachweis',
  'Sie begründet bei unspezifischer Müdigkeit die Arbeitsunfähigkeit',
  'Sie ist einer pathogenen Variante gleichzusetzen'],
 'Genetische Kausalität braucht Genotyp + passenden Phänotyp + belastbare Klassifikation + plausiblen Erbgang + klinische Konsequenz.',
 'Repetitorium M3, Kap. 13');
add(3,13,'Genetik im Gutachten','K','Genetische Befunde – bewerten Sie jede Aussage:',
 [['Die klinische Ausprägung einer pathogenen Variante kann von Penetranz und Phänotyp abhängen.',true],
  ['Eine Risikovariante verändert eine Wahrscheinlichkeit, ist aber nicht gleichbedeutend mit einer manifesten Erkrankung.',true],
  ['Exom- oder Genomsequenzierung sind der Panel-Diagnostik grundsätzlich vorzuziehen.',false],
  ['Ein negatives Panel schliesst eine genetische Ursache sicher aus.',false]],
 'Breiter ist nicht automatisch besser; die Fragestellung steuert die Methode. Typische Fehler: «pathogen» ohne Phänotypprüfung, VUS als Nachweis, Risiko = Krankheit, negatives Panel = sicherer Ausschluss.',
 'Repetitorium M3, Kap. 13');
add(3,13,'Genetik im Gutachten','A-','Welche der folgenden Aussagen zur genetischen Beurteilung ist FALSCH?',
 ['Genetische Kausalität liegt vor, sobald eine pathogene Variante nachgewiesen ist',
  'Zu prüfen ist, ob der Phänotyp zur vermuteten genetischen Erkrankung passt',
  'Zu prüfen ist, ob der Erbgang plausibel ist',
  'Zu prüfen ist, ob die Untersuchung für die konkrete Frage zweckmässig und wirtschaftlich ist'],
 'Die Denkfolge der Unterlagen umfasst fünf Prüffragen: Phänotyp, Klassifikation, Erbgang, medizinische Konsequenz, Zweckmässigkeit.',
 'Repetitorium M3, Kap. 13');

add(3,14,'Observation (M3)','A+','Wie unterscheidet sich der Rechtsrahmen der Observation in der Sozialversicherung und in der Privatversicherung nach den Kursunterlagen?',
 ['Sozialversicherung: Art. 43a ATSG mit ATSV; Privatversicherung: keine identische Spezialgrundlage, Interessenabwägung',
  'In beiden Bereichen gilt dieselbe spezialgesetzliche Grundlage im ATSG einschliesslich der ATSV-Vorgaben',
  'Sozialversicherung: keine gesetzliche Grundlage, nur mit Zustimmung; Privatversicherung: Art. 43a ATSG',
  'Observationen sind in beiden Bereichen ausnahmslos unzulässig, weil sie Persönlichkeitsrechte verletzen'],
 'Zulässigkeit und Verwertbarkeit sind Rechtsfragen; die medizinische Auswertung bleibt davon getrennt.',
 'Repetitorium M3, Kap. 14');
add(3,14,'Observation (M3)','K','Medizinische Auswertung einer Observation – bewerten Sie jede Aussage:',
 [['Observation ist eine Quelle unter mehreren.',true],
  ['Observation zeigt Verhalten in einem begrenzten Zeitraum und Kontext.',true],
  ['Die medizinische Expertin entscheidet abschliessend, ob die Observation rechtmässig erhoben und verwertbar ist.',false],
  ['Das einmalige Tragen eines mittelschweren Einkaufs über 30 Meter beweist die volle Belastbarkeit in ganztägiger repetitiver Arbeit.',false]],
 'Die Beobachtung widerspricht allenfalls einer absoluten Unfähigkeit zu jedem Tragen, beweist aber keine ganztägige Belastbarkeit.',
 'Repetitorium M3, Kap. 14');
add(3,14,'Observation (M3)','A-','Welche Aussage zur medizinischen Auswertung einer Observation ist FALSCH?',
 ['Eine kurze Observation belegt die Nachhaltigkeit der Leistung über eine ganze Arbeitswoche',
  'Observation zeigt Verhalten in einem begrenzten Zeitraum und Kontext',
  'Observation zeigt nicht automatisch Schmerzen oder subjektive Anstrengung',
  'Der Wert der Observation sinkt bei selektiven Ausschnitten und überdehnter Interpretation'],
 'Nicht automatisch zeigt eine Observation: Symptome ausserhalb des Beobachtungsfensters, Schmerz, Nachhaltigkeit über Arbeitstag oder -woche, Arbeitsqualität, Erholungsbedarf, Diagnose oder Motivation.',
 'Repetitorium M3, Kap. 14');

/* ================= MODUL 4 ================= */
add(4,3,'CRPS','K','Budapest-Kriterien (Kursmaterial) – bewerten Sie jede Aussage:',
 [['Es besteht ein anhaltender Schmerz, der nicht zum auslösenden Ereignis passt.',true],
  ['Berichtet wird mindestens ein Symptom in mindestens drei der vier Kategorien (sensibel, vasomotorisch, sudomotorisch/Ödem, motorisch/trophisch).',true],
  ['Bei der Untersuchung findet sich mindestens ein klinischer Befund in mindestens zwei der vier Kategorien.',true],
  ['Eine Temperaturdifferenz zwischen den Seiten ist zwingende Voraussetzung.',false]],
 'Ausserdem darf keine andere Diagnose die Symptome und Befunde besser erklären. Die Kriterien beruhen teilweise auf subjektiven Symptomen; verlangt ist eine zeitlich präzise Prüfung statt eines mechanischen Checklistenurteils.',
 'Repetitorium M4, CRPS Kap. 2');
add(4,3,'CRPS','A+','Warum widerlegt die aktuelle Nichterfüllung der Kriterien nicht zwingend ein früheres CRPS?',
 ['Weil das Bild zwischen floridem CRPS, partieller Remission und Remission wechselt; früher erfüllte Kriterien können später fehlen',
  'Weil die Kriterien nur im Frühstadium der Erkrankung geprüft werden dürfen und später nicht mehr gelten',
  'Weil ein CRPS per Definition nie in eine Remission übergeht und die Kriterien daher stets erfüllt bleiben',
  'Weil eine einmalig dokumentierte Temperaturdifferenz die Diagnose dauerhaft und endgültig begründet'],
 'Frühere ärztliche Dokumentation ist im zeitlichen Zusammenhang zu prüfen (was wurde beobachtet, berichtet, diagnostisch begründet?). Zeitliche Abfolge allein beweist die Kausalität nicht.',
 'Repetitorium M4, CRPS Kap. 3');
add(4,3,'CRPS','K','CRPS: Funktion, Prognose und Kausalität – bewerten Sie jede Aussage:',
 [['Prognose und medizinischer Endzustand sind eigenständige Fragen.',true],
  ['Zur Unfallkausalität gehören Ereignis, zeitlicher Verlauf, Vorzustand und alternative Ursachen.',true],
  ['Die Diagnose CRPS wird direkt in eine Arbeitsfähigkeitsquote übersetzt.',false],
  ['Die zeitliche Abfolge nach dem Ereignis beweist die natürliche Kausalität.',false]],
 'Die Funktion ist konkret zu beschreiben (Belastbarkeit, Beweglichkeit, Handgebrauch, Sensibilität, Ausdauer) und mit den realen Tätigkeitsanforderungen zu verknüpfen.',
 'Repetitorium M4, CRPS Kap. 3–4');

add(4,9,'Abhängigkeitserkrankungen','K','Abhängigkeitserkrankungen im Sozialversicherungsverfahren – bewerten Sie jede Aussage:',
 [['Konsumangaben allein reichen weder für eine Abhängigkeitsdiagnose noch für deren Ausschluss.',true],
  ['Akute Intoxikation, Entzug, schädlicher Gebrauch und Abhängigkeit sind zu trennen, soweit die Kriterien dies erlauben.',true],
  ['Bei schwankendem Verlauf wird die Funktion getrennt für die einzelnen Zeitabschnitte beurteilt.',true],
  ['Eine Abhängigkeit ist stets selbstverschuldet und deshalb funktionell irrelevant.',false]],
 'Ein sozialer Belastungsfaktor ist nicht automatisch eine Krankheit; eine Abhängigkeit ist aber auch nicht automatisch selbstverschuldet oder funktionell irrelevant.',
 'Repetitorium M4, Abhängigkeitserkrankungen');
add(4,9,'Abhängigkeitserkrankungen','A+','Welche Trennung verlangt das Repetitorium bei Abhängigkeitserkrankungen?',
 ['Diagnosekriterien, funktionelle Auswirkungen und rechtliche Anspruchsprüfung dürfen nicht vermischt werden',
  'Diagnose und rechtliche Anspruchsprüfung sind zusammen durch die Gutachterin abschliessend zu entscheiden',
  'Funktionelle Auswirkungen sind aus der Menge und Häufigkeit des Konsums abzuleiten',
  'Die rechtliche Anspruchsprüfung ersetzt die Beurteilung der funktionellen Auswirkungen'],
 'Zu beurteilen sind konkrete Folgen wie Zuverlässigkeit, Ausdauer, Aufmerksamkeit, Impulskontrolle, soziale Interaktion und Sicherheitsverhalten.',
 'Repetitorium M4, Abhängigkeitserkrankungen');

add(4,10,'Persönlichkeitsstörungen','K','Persönlichkeitsstörungen und -akzentuierungen – bewerten Sie jede Aussage:',
 [['Persönlichkeitsmerkmale sind nicht gleich Persönlichkeitsstörung.',true],
  ['Zentral ist ein überdauerndes, kontextübergreifendes Muster mit relevanter Funktionsbeeinträchtigung.',true],
  ['Ein schwieriger Untersuchungskontakt belegt eine Persönlichkeitsstörung.',false],
  ['Eine Persönlichkeitsdiagnose legt automatisch Dauer und Ausmass der Arbeitsunfähigkeit fest.',false]],
 'Persönlichkeit überdauernd und biografisch erfassen, aber Arbeitsfähigkeit aus konkreter Funktion ableiten (z. B. mit dem Mini-ICF-APP).',
 'Repetitorium M4, Persönlichkeitsstörungen');
add(4,10,'Persönlichkeitsstörungen','A+','Warum genügt ein Testverfahren allein nicht für die Diagnose einer Persönlichkeitsstörung?',
 ['Kein Instrument ersetzt die sorgfältige biografische Anamnese; Interviews und Tests ergänzen sie nur',
  'Weil Testverfahren bei Persönlichkeitsstörungen in der Begutachtung grundsätzlich nicht zulässig sind',
  'Weil die Diagnose ausschliesslich anhand der Aktenlage ohne Untersuchung gestellt werden darf',
  'Weil die Diagnose nur durch eine Fremdanamnese der Angehörigen gesichert werden darf'],
 'Zu erheben sind Entwicklung, Beginn, Stabilität, Beziehungen, Selbstbild, Affektregulation und Impulskontrolle in mehreren Lebensbereichen.',
 'Repetitorium M4, Persönlichkeitsstörungen');
add(4,10,'Persönlichkeitsstörungen','A-','Welche Aussage zu Differenzialdiagnose und Verlauf ist FALSCH?',
 ['Gegenwärtige Merkmale dürfen ohne Begründung auf frühere Jahre zurückprojiziert werden',
  'Überlappungen mit affektiven Störungen, komplexer PTBS, Substanzgebrauch und organischen Faktoren sind zu beachten',
  'Bei retrospektiven Beurteilungen müssen Befunde für den jeweiligen Zeitraum nachvollziehbar sein',
  'Ressourcen, Adaptation und Veränderbarkeit sind ebenso zu beschreiben wie Schwierigkeiten'],
 'Retrospektive Aussagen brauchen zeitraumbezogene Befunde.',
 'Repetitorium M4, Persönlichkeitsstörungen');

add(4,11,'Suizid als Unfall','K','Urteilsfähigkeit bei Suizid(versuch) im UVG – bewerten Sie jede Aussage:',
 [['Urteilsfähigkeit ist der Regelfall; Urteilsunfähigkeit wird restriktiv geprüft.',true],
  ['Zu beurteilen sind kognitive und voluntative Fähigkeiten bezogen auf die konkrete Handlung und den konkreten Zeitpunkt.',true],
  ['Eine psychiatrische Diagnose führt automatisch zur Urteilsunfähigkeit.',false],
  ['Sorgfältige Planung beweist automatisch die Urteilsfähigkeit.',false]],
 'Das Gutachten liefert die medizinischen Tatsachen und eine fachliche Beurteilung; über den Leistungsanspruch entscheidet nicht die Gutachterin.',
 'Repetitorium M4, Suizid als Unfall');
add(4,11,'Suizid als Unfall','A+','Welche Quellen sind für die retrospektive Beurteilung der Urteilsfähigkeit besonders relevant?',
 ['Zeitnahe Unterlagen: Polizeibericht, Abschiedsnotizen, Nachrichten, Vorverhalten, Zeugenaussagen, medizinische Akten',
  'Allein die Erinnerung der Angehörigen, die erst Jahre nach dem Ereignis befragt werden',
  'Allein die aktuelle Diagnose aus der Behandlungsakte der verstorbenen Person',
  'Allein die Todesursache gemäss Obduktionsbericht ohne weitere Unterlagen'],
 'Zu rekonstruieren sind Handlungsablauf und Entscheidungsprozess (Planung, Alternativen, Zielgerichtetheit, Ambivalenz). Nicht aus einer Lebenskrise, aus Suizidalität oder aus einer Diagnose allein auf vollständige Urteilsunfähigkeit schliessen.',
 'Repetitorium M4, Suizid als Unfall');
})();
