/* Modul 6 – Lernziele: Grundwissen gemäss SIM-Lernzielkatalogen (Medizin, Medizin und Recht, Neuropsychologie; Version 01.10.2025).
   Die Kataloge nennen Themen/Lernziele, keine Inhalte: Fragen beruhen auf dem dort genannten Stoff und allgemeinem Grundwissen – bitte gegen Skript/Repetitorium gegenprüfen. */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m6-'+String(n).padStart(3,'0'),modul:6,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const LZR='SIM-Lernziele Medizin und Recht 2025, ';
const LZM='SIM-Lernziele Medizin 2025, ';
const LZN='SIM-Lernziele Neuropsychologie 2025, ';

add('Grundbegriffe ATSG','K','Grundbegriffe des ATSG – bewerten Sie jede Aussage.',
 [['Arbeitsunfähigkeit (Art. 6 ATSG) ist die durch Gesundheitsbeeinträchtigung bedingte volle oder teilweise Unfähigkeit, im bisherigen Beruf oder Aufgabenbereich zumutbare Arbeit zu leisten.',true],
  ['Erwerbsunfähigkeit (Art. 7 ATSG) bezieht sich auf den Verlust der Erwerbsmöglichkeiten auf dem ausgeglichenen Arbeitsmarkt nach zumutbarer Behandlung und Eingliederung.',true],
  ['Invalidität (Art. 8 ATSG) ist jede, auch nur vorübergehende, Arbeitsunfähigkeit.',false],
  ['Die Arbeitsunfähigkeit wird abschliessend vom Rechtsanwender festgelegt; der Gutachter schätzt sie aus medizinischer Sicht ein.',true]],
 'Invalidität = voraussichtlich bleibende oder längere Zeit dauernde ganze oder teilweise Erwerbsunfähigkeit. Arbeitsunfähigkeit ist letztlich ein Rechtsbegriff (BGE 140 V 193).',LZR+'IV.1');

add('Kausalität','K','Natürliche und adäquate Kausalität – bewerten Sie jede Aussage.',
 [['Die natürliche Kausalität ist eine Tatfrage; der Gutachter beantwortet sie medizinisch.',true],
  ['Natürlich kausal ist ein Ereignis, wenn es nicht weggedacht werden kann, ohne dass der Erfolg entfiele (condicio sine qua non).',true],
  ['Die Adäquanz ist eine Rechtsfrage und wird vom Rechtsanwender beurteilt.',true],
  ['Die Adäquanzbeurteilung geht der Prüfung der natürlichen Kausalität voraus.',false]],
 'Die Adäquanz greift der natürlichen Kausalität nachgeordnet: erst wenn ein natürlicher Zusammenhang bejaht ist, prüft der Jurist, ob das Ereignis nach der allgemeinen Lebenserfahrung geeignet war, einen Erfolg wie den eingetretenen herbeizuführen.',LZR+'IV.5/6');

add('Beweismass & Beweislast','K','Beweismasse und Beweislast – bewerten Sie jede Aussage.',
 [['Im Sozialversicherungsrecht gilt in der Regel das Beweismass der überwiegenden Wahrscheinlichkeit.',true],
  ['Im Sozialversicherungsverfahren gelten der Untersuchungsgrundsatz und die Offizialmaxime.',true],
  ['Im Privatrecht trägt nach Art. 8 ZGB grundsätzlich diejenige Partei die Beweislast, die aus der behaupteten Tatsache Rechte ableitet.',true],
  ['Im Sozialversicherungsrecht gilt die Parteimaxime: Der Versicherte muss den Sachverhalt allein beibringen.',false]],
 'Die Verwaltung klärt den Sachverhalt von Amtes wegen ab (Untersuchungsgrundsatz); die versicherte Person hat eine Mitwirkungspflicht. Die Beweislosigkeit wirkt sich zulasten der Partei aus, die aus dem unbewiesenen Sachverhalt Rechte ableiten will.',LZR+'V.3/4');

add('Tatfrage / Rechtsfrage','K','Tat- und Rechtsfragen im Gutachten – bewerten Sie jede Aussage.',
 [['Ob eine medizinisch begründete Einschränkung vorliegt, ist eine medizinische (Tat-)Frage.',true],
  ['Ob eine gesundheitliche Störung im Rechtssinn zur Invalidität führt, ist eine Rechtsfrage.',true],
  ['Ein Gutachter soll Rechtsfragen (z. B. Adäquanz) selbstständig verbindlich beantworten.',false],
  ['Gestellte Fragen sind genau darauf zu prüfen, ob sie medizinisch beantwortbar sind.',true]],
 'Gutachter liefern die medizinische Entscheidgrundlage; Rechtsfragen beantwortet der Rechtsanwender. Nicht medizinisch beantwortbare Fragen sind als solche zu kommentieren.',LZR+'V.7, VI.3/4');

add('IV-Rente','K','IV-Rente und Wartezeit – bewerten Sie jede Aussage.',
 [['Ein Rentenanspruch setzt voraus, dass die versicherte Person während eines Jahres durchschnittlich mindestens zu 40 % arbeitsunfähig war (Wartejahr).',true],
  ['Der Invaliditätsgrad wird über den Einkommensvergleich (Validen- vs. Invalideneinkommen) bestimmt.',true],
  ['Seit 1.1.2022 besteht bei Invaliditätsgrad ab 70 % Anspruch auf eine ganze Rente.',true],
  ['Ein Invaliditätsgrad von 30 % begründet eine Viertelsrente.',false]],
 'Der Rentenanspruch beginnt ab einem IV-Grad von 40 % (seit 2022 stufenloses System: ab 50 % Rentenhöhe entsprechend dem IV-Grad, ab 70 % ganze Rente).',LZR+'IV.3');

add('Integritätsentschädigung','K','Integritätsentschädigung (UVG) – bewerten Sie jede Aussage.',
 [['Sie setzt eine dauernde und erhebliche Schädigung der körperlichen, geistigen oder psychischen Integrität voraus.',true],
  ['Sie wird als einmalige Kapitalleistung ausgerichtet.',true],
  ['Sie ist nach der Schwere des Integritätsschadens abgestuft; Grundlage ist Anhang 3 der UVV bzw. die Suva-Tabellen.',true],
  ['Sie hängt vom Einkommen und von der Erwerbseinbusse der versicherten Person ab.',false]],
 'Die Integritätsentschädigung ist für alle Versicherten mit dem gleichen Gesundheitsschaden gleich hoch und unabhängig von der Erwerbsfähigkeit. Bei nicht aufgeführten Diagnosen und Mehrfachbeeinträchtigungen werden die Tabellenwerte sinngemäss angewendet.',LZR+'IV.7');

add('Status quo ante / sine','K','Vorzustand und Kausalitätswegfall – bewerten Sie jede Aussage.',
 [['Status quo ante ist der Gesundheitszustand unmittelbar vor dem Unfall.',true],
  ['Status quo sine ist der Zustand, wie er sich ohne den Unfall mit überwiegender Wahrscheinlichkeit entwickelt hätte.',true],
  ['Beim Wegfall der Unfallkausalität muss immer der Status quo ante wiederhergestellt sein.',false],
  ['Unfallkausalität und deren Wegfall werden z. B. bei Schulterverletzungen anhand von Anamnese und MRI gegen krankhafte Vorzustände abgegrenzt.',true]],
 'Die Leistungspflicht des Unfallversicherers endet, wenn der Unfall nicht mehr mit überwiegender Wahrscheinlichkeit an den Beschwerden beteiligt ist (Status quo ante oder sine).',LZM+'Modul 3 Orthopädie obere Extremitäten');

add('Arzthaftung','K','Verschuldenshaftung im Arzthaftungsrecht (Art. 41 OR) – bewerten Sie jede Aussage.',
 [['Ein Schaden ist Voraussetzung.',true],
  ['Widerrechtlichkeit liegt z. B. bei einer Sorgfaltspflichtverletzung (Verstoss gegen die lex artis) vor.',true],
  ['Ein natürlicher und adäquater Kausalzusammenhang ist erforderlich.',true],
  ['Der Arzt schuldet im Auftragsverhältnis grundsätzlich einen Heilungserfolg.',false]],
 'Zusätzlich ist ein Verschulden erforderlich. Der Arzt schuldet im Auftragsverhältnis (Art. 398 OR) sorgfältige Behandlung, keinen Heilungserfolg.',LZR+'III.4');

add('Adäquanz psychischer Unfallfolgen','K','Psychische Unfallfolgen im UVG – bewerten Sie jede Aussage.',
 [['Natürliche Kausalität ist eine medizinische, adäquate Kausalität eine rechtliche Frage.',true],
  ['Bei psychischen Unfallfolgen wird die Adäquanz nach besonderen Kriterien unter Einbezug der Unfallschwere geprüft.',true],
  ['Als Endzustand gilt der Zeitpunkt, in dem von der Fortsetzung der Behandlung keine namhafte Besserung mehr erwartet werden kann.',true],
  ['Mit Erreichen des Endzustandes endet jede Leistungspflicht, auch für Rentenleistungen.',false]],
 'Nach dem Endzustand entfallen Heilbehandlung und Taggeld; es können Anspruch auf Invalidenrente und Integritätsentschädigung (Restfolgen) entstehen.',LZN+'Modul 4; '+LZM+'Modul 4');

add('Suizid als Unfall','K','Suizid und Unfallversicherung (UVV Art. 48) – bewerten Sie jede Aussage.',
 [['Bei vorsätzlicher Herbeiführung des Gesundheitsschadens besteht grundsätzlich kein Anspruch auf Geldleistungen.',true],
  ['Ausnahme: Die Person war zum Zeitpunkt der Tat nachweislich völlig unfähig, vernunftgemäss zu handeln.',true],
  ['Urteilsfähigkeit umfasst die Vernunftfähigkeit (Einsicht) und die Fähigkeit, nach dieser Einsicht frei zu handeln.',true],
  ['Eine bestehende Depression schliesst die Urteilsfähigkeit stets aus.',false]],
 'Entscheidend ist die konkrete Urteilsunfähigkeit im Zeitpunkt der Handlung; eine psychische Erkrankung allein genügt nicht.',LZM+'Modul 3 Suizid als Unfall');

add('Indikatorenrechtsprechung','K','Indikatorenrechtsprechung (BGE 141 V 281) – bewerten Sie jede Aussage.',
 [['Sie gilt nach neuerer Rechtsprechung für alle psychischen Erkrankungen.',true],
  ['Sie gilt auch für Abhängigkeitserkrankungen, die seit der Praxisänderung (Juli 2019) wie andere psychische Störungen behandelt werden.',true],
  ['Das strukturierte Beweisverfahren verlangt eine ergebnisoffene Gesamtbeurteilung anhand von Indikatoren (z. B. Konsistenz).',true],
  ['Sie gilt ausschliesslich für somatoforme Schmerzstörungen.',false]],
 'BGE 141 V 281 hat die frühere «Überwindbarkeitsvermutung» bei somatoformen Schmerzstörungen aufgegeben und durch das strukturierte Beweisverfahren ersetzt. Substanzkonsum führt nicht immer zur Beeinträchtigung der Arbeitsfähigkeit, Abstinenz nicht immer zur Verbesserung.',LZM+'Modul 1 / Modul 4');

add('Verdeutlichung / Aggravation / Simulation','K','Beschwerdenvalidität – bewerten Sie jede Aussage.',
 [['Aggravation = bewusste Übertreibung einer tatsächlich vorhandenen Störung.',true],
  ['Simulation = bewusstes Vortäuschen einer nicht vorhandenen Störung.',true],
  ['Verdeutlichung = meist nicht bewusst gesteuerte, appellative Überbetonung von Beschwerden.',true],
  ['Aggravation bedeutet das unbewusste Vortäuschen von Symptomen.',false]],
 'Eine Aggravation ist bewusst intendiert (Zweck: Vorteile); die Unterscheidung stützt sich auf Konsistenzanalysen und validierte Instrumente.',LZN+'Modul 3');

add('Beschwerden- und Performanzvalidierung','K','Validierung in der neuropsychologischen Begutachtung – bewerten Sie jede Aussage.',
 [['Beschwerdenvalidierung prüft die Glaubhaftigkeit der berichteten Symptome (z. B. mit Fragebögen).',true],
  ['Performanzvalidierung prüft die Anstrengungsbereitschaft/Validität der Testleistungen (z. B. mit eigenen Validierungstests).',true],
  ['Ein einzelner auffälliger Validierungstest beweist bereits sicher eine Simulation.',false],
  ['Die Validität von Befunden ist Voraussetzung für eine belastbare Aussage zur Arbeitsfähigkeit.',true]],
 'Die Beurteilung stützt sich auf mehrere unabhängige Indikatoren und Konsistenzanalysen; ein Befund allein genügt nicht. Gilt bei hirnorganischen, psychischen und schmerzassoziierten Störungen.',LZN+'Modul 3');

add('Neuropsychologische Begutachtung','K','Ablauf einer neuropsychologischen Begutachtung – bewerten Sie jede Aussage.',
 [['Aktenstudium und Anamnese gehören dazu, gegebenenfalls auch Fremdanamnese.',true],
  ['Ein Medikamentenspiegel wird bei Bedarf veranlasst.',true],
  ['Leistungstests, Verfahren zu Affekt und Verhalten sowie Beschwerdenvalidierung gehören dazu.',true],
  ['Auf Beschwerdenvalidierung kann verzichtet werden, wenn die Person kooperativ wirkt.',false]],
 'Die Beurteilung der Arbeitsfähigkeit (Präsenzzeit und Leistungsvermögen) soll zufallskritisch erfolgen, gestützt auf Testergebnisse, Verhaltensbeobachtung und Aktenlage.',LZN+'Modul 3');

add('Leichte traumatische Hirnverletzung (MTBI)','K','Diagnosekriterien der leichten traumatischen Hirnverletzung (mTBI) – bewerten Sie jede Aussage.',
 [['Glasgow Coma Scale 13–15 (nach 30 Minuten).',true],
  ['Bewusstlosigkeit höchstens 30 Minuten.',true],
  ['Posttraumatische Amnesie unter 24 Stunden.',true],
  ['Eine posttraumatische Amnesie von mehreren Tagen ist mit der Diagnose mTBI vereinbar.',false]],
 'Zusätzlich eine Hirnfunktionsstörung (z. B. Verwirrtheit, Desorientierung) unmittelbar nach dem Trauma. Länger dauernde Bewusstlosigkeit/Amnesie sprechen für eine schwerere Verletzung.',LZM+'Modul 3 MTBI');

add('CRPS','K','Budapest-Kriterien des CRPS (Sudeck) – bewerten Sie jede Aussage.',
 [['Es muss anhaltender Schmerz vorliegen, der dem auslösenden Ereignis unverhältnismässig ist.',true],
  ['Symptome sind in mindestens drei von vier Kategorien (sensibel, vasomotorisch, sudomotorisch/Ödem, motorisch/trophisch) anamnestisch erforderlich.',true],
  ['Zeichen in mindestens zwei Kategorien müssen bei der Untersuchung nachweisbar sein.',true],
  ['Die Diagnose darf gestellt werden, auch wenn eine andere Diagnose die Symptome besser erklärt.',false]],
 'CRPS ist eine Ausschlussdiagnose: keine andere Diagnose erklärt die Befunde besser. Differenzialdiagnosen sind abzugrenzen; der Verlauf ist anhand von Akten, Angaben und eigenem Befund zu rekonstruieren.',LZM+'Modul 4 Sudeck/CRPS');

add('PTBS','K','Posttraumatische Belastungsstörung – bewerten Sie jede Aussage.',
 [['Voraussetzung ist ein belastendes Ereignis aussergewöhnlicher Bedrohung oder katastrophalen Ausmasses.',true],
  ['Typisch sind Intrusionen (Wiedererleben), Vermeidungsverhalten und Übererregung.',true],
  ['Die Arbeitsfähigkeit bei PTBS ist nach den Funktionsbeeinträchtigungen und nicht nach der Diagnose allein zu beurteilen.',true],
  ['Die PTBS ist keine Diagnose, die im Sozialversicherungsrecht begutachtet werden kann.',false]],
 'Die PTBS wird im Gutachten wie andere psychische Störungen nach den Indikatoren beurteilt; Verhaltensbeobachtungen in der Begutachtung (z. B. Vermeidung, Hypervigilanz) können Hinweise geben.',LZM+'Modul 3 PTBS');

add('Mini-ICF-APP','K','Mini-ICF-APP – bewerten Sie jede Aussage.',
 [['Es ist ein Fremdbeurteilungsinstrument zur Erfassung von Fähigkeitsbeeinträchtigungen bei psychischen Erkrankungen.',true],
  ['Es umfasst 13 Dimensionen der Aktivitäten und Partizipation.',true],
  ['Das Rating ist ein Baustein, aber nicht Ersatz der Gesamtbeurteilung der Arbeitsfähigkeit.',true],
  ['Das Rating ersetzt die Diagnosestellung und die Konsistenzprüfung vollständig.',false]],
 'Das Instrument erfordert die Anwendung der allgemeinen Ratinganweisungen. Einige Dimensionen lassen sich am besten von neuropsychologischer Seite beurteilen; die Schwächen des Instruments sind zu kennen.',LZM+'Modul 4; '+LZN+'Modul 4');

add('Fallführer & polydisziplinäre Gutachten','K','Polydisziplinäre Gutachten – bewerten Sie jede Aussage.',
 [['Der Fallführer koordiniert die Begutachtung und die interdisziplinäre Konsensbildung.',true],
  ['Ein Vorteil ist die interdisziplinäre Gesamtbeurteilung; ein Nachteil sind Aufwand und Dauer.',true],
  ['Der Fallführer entscheidet allein über die Beurteilung der anderen Fachrichtungen.',false],
  ['Eine lückenlose und prozentuale chronologische Beurteilung der Arbeitsunfähigkeit ist in der IV wichtig.',true]],
 'Jeder Teilgutachter beurteilt sein Fachgebiet; die Gesamtbeurteilung erfolgt im Konsens.',LZM+'Modul 4; '+LZN+'Modul 4');

add('Reha-Potenzial & Konsistenz','K','Rehabilitationspotenzial und Konsistenz – bewerten Sie jede Aussage.',
 [['Prädiktoren wie lange Arbeitsunfähigkeit, ausgeprägte Angst-Vermeidungsüberzeugungen und Katastrophisieren wirken sich ungünstig auf das Reha-Potenzial aus.',true],
  ['Konsistenz und Plausibilität werden im Längs- und Querschnitt beurteilt.',true],
  ['Eine funktionsorientierte Anamnese fragt nach den konkreten Aktivitäten in verschiedenen Lebensbereichen.',true],
  ['Ein positives Reha-Potenzial ist bei Chronifizierung ausgeschlossen.',false]],
 'Die Beurteilung des Reha-Potenzials ist eine Prognose; Symptomausweitung ist von bewusster Aggravation zu unterscheiden.',LZM+'Modul 2');

add('Bildgebung Wirbelsäule','K','Bildgebung der Wirbelsäule in der Begutachtung – bewerten Sie jede Aussage.',
 [['Degenerative Veränderungen sind auch bei beschwerdefreien Personen häufig.',true],
  ['Bildgebende Befunde müssen im Kontext der klinischen Symptomatik beurteilt werden.',true],
  ['Eine traumatische Diskushernie ist selten; sie wird mit Begleitverletzungen und zeitnahem Symptombeginn begründet.',true],
  ['Ein MRT-Befund einer Diskushernie beweist die Unfallkausalität der Beschwerden.',false]],
 'Die Wertigkeit der Bildgebung ist begrenzt (Stenose, Facettengelenksveränderungen, Bandscheiben-assoziierte Veränderungen); die meisten Diskushernien sind degenerativ bedingt.',LZM+'Modul 2/3 Wirbelsäule');

add('Biomechanische Gutachten','K','Biomechanische Beurteilungen bei Verkehrsunfällen – bewerten Sie jede Aussage.',
 [['Verkehrsunfälle können mit technischen Mitteln rekonstruiert und die Fahrzeugbelastungen ermittelt werden.',true],
  ['Biomechanische Gutachten können bei HWS-Problemen eine objektive Betrachtung der Belastung liefern.',true],
  ['Ein biomechanisches Gutachten ersetzt die medizinische Beurteilung des Gesundheitsschadens.',false],
  ['Die Bewertung der medizinischen Kausalität bleibt Aufgabe des medizinischen Gutachters.',true]],
 'Biomechanik liefert Eingangsgrössen (z. B. Geschwindigkeitsänderung), entscheidet aber nicht allein über die Kausalität.',LZM+'Modul 3 Biomechanik');

add('Arztbericht vs. Gutachten','K','Arztbericht und Gutachten – bewerten Sie jede Aussage.',
 [['Das Gutachten dient der unabhängigen Beurteilung für einen Auftraggeber; der Behandler unterstützt die Patientin/den Patienten.',true],
  ['Die konkrete Fragestellung bestimmt Struktur, Abklärungstiefe und zu beantwortenden Sachverhalt.',true],
  ['Der Gutachter darf die Rolle des behandelnden Arztes übernehmen und eine therapeutische Beziehung aufbauen.',false],
  ['Im Gutachten müssen Beurteilung und Schlussfolgerungen nachvollziehbar begründet sein.',true]],
 'Die Aufgabenabgrenzung zwischen behandelnder und begutachtender Tätigkeit ist zentral für die Unabhängigkeit.',LZR+'I.4; '+LZM+'Modul 1');

add('Datenschutz & Verfahren','K','Datenschutz und Mitwirkung bei Gutachten – bewerten Sie jede Aussage.',
 [['Die versicherte Person hat im Sozialversicherungsverfahren Akteneinsichtsrecht.',true],
  ['Die versicherte Person unterliegt einer Mitwirkungspflicht.',true],
  ['Gutachter unterliegen der Schweigepflicht.',true],
  ['Ein Gutachter darf Akten ohne Auftrag an Dritte weitergeben, wenn dies medizinisch sinnvoll ist.',false]],
 'Zusammenspiel von Mitwirkungspflicht, Akteneinsicht, Schweigepflicht und Transparenzgebot; die Rahmenbedingungen unterscheiden sich in Sozial-, Privat- und Haftpflichtverfahren. Art. 44 ATSG, Art. 7j–7n ATSV (Einigungsversuch, Tonaufnahme, Anforderungen an Sachverständige, Zustellung).',LZR+'V.8, VII');

add('Depression im Gutachten','K','Leichte bis mittelgradige depressive Störungen im IV-Gutachten – bewerten Sie jede Aussage.',
 [['Der funktionelle Schweregrad ist massgebend und muss anhand der Konsistenz und Plausibilität beurteilt werden.',true],
  ['Nach der Rechtsprechung (BGE 143 V 409) kann eine leichte bis mittelgradige depressive Störung nur bei ausgewiesener Therapieresistenz invalidisierend sein.',true],
  ['Die Diagnose allein begründet automatisch eine Arbeitsunfähigkeit.',false],
  ['Die Beurteilung stützt sich auf das strukturierte Beweisverfahren mit Indikatoren.',true]],
 'Konsistenz im Längs- und Querschnitt und kognitive Defizite (Depression, Fatigue) sind zu erfassen; übertriebene Beschwerdenpräsentation ist zu erkennen.',LZM+'Modul 4; '+LZN+'Modul 4');

add('Burn-out, Mobbing, Fatigue','K','Populärmediale Begriffe und Diagnosen – bewerten Sie jede Aussage.',
 [['Burn-out, Mobbing und Fatigue sind nicht per se gutachterlich relevante Diagnosen.',true],
  ['Gutachterlich relevant ist eine ICD-Diagnose mit funktionellen Auswirkungen.',true],
  ['Burn-out ist als eigenständige Krankheit mit Rentenanspruch anerkannt.',false],
  ['Psychiatrische Gutachten müssen bestimmten Anforderungen (z. B. gemäss Leitentscheid des Bundesgerichts) genügen.',true]],
 'Zu unterscheiden sind Belastungsreaktionen/arbeitsplatzbezogene Konflikte von Krankheitswert: nur Letzteres kann Arbeitsunfähigkeit begründen.',LZM+'Modul 4');

add('Weiche und harte Befunde','A+','Welche Aussage zu «weichen» und «harten» Untersuchungsresultaten ist richtig?',
 ['Auftraggeber fordern Objektivierbarkeit und Nachvollziehbarkeit, die in der Psychiatrie nur teilweise erreichbar sind.',
  'Harte Befunde gibt es ausschliesslich in der Rheumatologie.',
  'Weiche Befunde sind für die Begutachtung grundsätzlich irrelevant.',
  'In der Psychiatrie sind alle Objektivierungsgrade vollständig erfüllbar.'],
 'Objektivierungsgrade sind zu kennen; Ansätze zur Erhöhung der Nachvollziehbarkeit sind anzuwenden.',LZM+'Modul 3');

const M4='SIM Modul 4 2026 (Nachschlagewerk), ';

add('7 D der Diskrepanzanalyse (Widder)','K','Die 7 D der Konsistenzprüfung nach Widder – bewerten Sie jede Aussage.',
 [['Geprüft wird die Diskrepanz zwischen massiven Beschwerden bzw. Fragebogenangaben und dem Befund in der Untersuchung.',true],
  ['Geprüft wird die Diskrepanz zwischen Eigenangaben und Fremdanamnese bzw. Akten.',true],
  ['Geprüft wird die Diskrepanz zwischen angegebenen Medikamenten und dem Serumspiegel-Nachweis.',true],
  ['Geprüft wird die Diskrepanz zwischen dem Alter der versicherten Person und dem Dienstalter des Gutachters.',false]],
 'Die 7 D: (1) subjektive Intensität vs. Vagheit der Schilderung; (2) massive Beschwerden/Fragebögen vs. Untersuchungsbefund; (3) Eigenangaben vs. Fremdanamnese/Akten; (4) schwere Beeinträchtigung vs. intaktes psychosoziales Funktionsniveau; (5) Beschwerden vs. Intensität der Therapienutzung; (6) klinisches Bild vs. Selbstbeurteilungs-/psychometrische Tests inkl. Beschwerdenvalidierung; (7) angegebene Medikamente vs. Serumspiegel.',M4+'Kap. 1.4');

add('7 D der Diskrepanzanalyse (Widder)','A-','Welche Diskrepanz gehört NICHT zu den 7 D der Konsistenzprüfung nach Widder?',
 ['Diskrepanz zwischen dem Honorar des Gutachters und der Gutachtendauer',
  'Diskrepanz zwischen schwerer Beeinträchtigung und intaktem psychosozialem Funktionsniveau',
  'Diskrepanz zwischen Beschwerden und Intensität der Therapienutzung',
  'Diskrepanz zwischen klinischem Bild und psychometrischen Tests inkl. Beschwerdenvalidierung',
  'Diskrepanz zwischen subjektiver Intensität und Vagheit der Schilderung'],
 'Siehe die 7 D: Intensität/Vagheit; Beschwerden/Fragebögen vs. Befund; Eigenangaben vs. Fremdanamnese/Akten; Beeinträchtigung vs. psychosoziales Niveau; Beschwerden vs. Therapienutzung; klinisches Bild vs. Tests/Validierung; Medikamente vs. Serumspiegel.',M4+'Kap. 1.4');

add('Mini-ICF-APP Ratingregeln','K','Ratingregeln der Mini-ICF-APP – bewerten Sie jede Aussage.',
 [['Fähigkeiten werden immer nur in Bezug auf einen konkreten Kontext (Arbeitsplatz, Berufsfeld, allgemeiner Arbeitsmarkt) quantifiziert.',true],
  ['Bewertet wird die Capacity (was die Person tun könnte), nicht die Performance (was sie tatsächlich tut).',true],
  ['Als Referenz dient die soziale Rollenerwartung gesunder Personen vergleichbaren Geschlechts, Alters, Ausbildung und Lebenserfahrung.',true],
  ['Der Schweregrad wird auf einer Skala von 0–4 anhand der Selbsteinschätzung der Person allein bestimmt; Beobachtungen des Untersuchers zählen nicht.',false]],
 'Beobachtungen haben Vorrang vor blossen Aussagen; es werden alle Informationsquellen herangezogen. Schweregrad 0–4 nach Rollenerwartung, Negativfolgen (ab Grad 2) und Assistenznotwendigkeit (ab Grad 3); die Begründung erfolgt narrativ. Es gibt 13 Fähigkeiten.',M4+'Kap. 15');

add('Suizid als Unfall (WS A3)','K','Suizid im UVG – bewerten Sie jede Aussage.',
 [['Nach Art. 37 Abs. 1 UVG besteht bei absichtlich herbeigeführtem Schaden bzw. Tod kein Leistungsanspruch (Ausnahme: Bestattungskosten).',true],
  ['Art. 48 UVV kennt zwei Ausnahmen: gänzliche Unfähigkeit, vernunftgemäss zu handeln, oder Selbsttötung als eindeutige Folge eines versicherten Unfalls.',true],
  ['Urteilsfähigkeit ist der Regelfall und wird im Zweifel vermutet; Urteilsunfähigkeit ist mit überwiegender Wahrscheinlichkeit zu beweisen.',true],
  ['Eine «unverhältnismässige» Tat genügt für den Nachweis der gänzlichen Urteilsunfähigkeit; sie muss nicht «unsinnig» sein.',false]],
 'Die Tat muss «unsinnig» sein, das Motiv aus schwerer Psychopathologie (Wahn, Raptus, Stupor, Impulsdurchbruch usw.) stammen; «unverhältnismässig» genügt nicht. Urteilsfähigkeit (Art. 16 ZGB) umfasst Erkenntnis-, Wertungsfähigkeit, Willensbildung und -umsetzung. Natürliche Vermutung der Unfreiwilligkeit (Selbsterhaltungstrieb).',M4+'Kap. 11');

add('Unfallbegriff & Listendiagnosen','K','Unfallbegriff und Listendiagnosen – bewerten Sie jede Aussage.',
 [['Der Unfallbegriff (Art. 4 ATSG) verlangt kumulativ: plötzlich, nicht beabsichtigt, schädigend, ungewöhnlich, äusserer Faktor.',true],
  ['Bei Listendiagnosen (Art. 6 Abs. 2 UVG) besteht eine gesetzliche Vermutung der Leistungspflicht, auch ohne Unfallereignis.',true],
  ['Der Versicherer kann sich nur entlasten, wenn er mit überwiegender Wahrscheinlichkeit (> 50 %) eine vorwiegende Abnützung/Erkrankung nachweist.',true],
  ['Ein Meniskusriss ist keine Listendiagnose.',false]],
 'Listendiagnosen: Knochenbrüche, Verrenkungen, Meniskusrisse, Muskelrisse, Muskelzerrungen, Sehnenrisse, Bandläsionen, Trommelfellverletzungen. Beispiel Golferin: Unfallbegriff nicht erfüllt, daher Prüfung der Listendiagnose (horizontale intrameniskeale Degeneration spricht für Degeneration).',M4+'Kap. 7');

add('Müdigkeit, Schläfrigkeit, Hypersomnie','K','Begriffsabgrenzung (Khatami) – bewerten Sie jede Aussage.',
 [['Müdigkeit/Fatigue wird durch körperliche Aktivität verstärkt und durch Schlaf nicht gebessert.',true],
  ['Exzessive Tagesschläfrigkeit zeigt sich in einer Einschlafneigung auch in ungewöhnlichen Situationen und bessert sich oft durch Schlaf.',true],
  ['Hypersomnie bedeutet eine verlängerte Schlafdauer von mehr als 11 Stunden pro 24 Stunden (ICSD-3).',true],
  ['Müdigkeit und Schläfrigkeit sind synonym und diagnostisch nicht zu unterscheiden.',false]],
 'Schläfrigkeit: ESS, MSLT, MWT (Fahreignung). Fatigue: FSS, stufenweises Labor. Differenzialdiagnose: Depression/Apathie (Antriebsminderung).',M4+'Kap. 5');

add('EFL – Selbstlimitierung & BGer','K','EFL (Klipstein/Nevzati) – bewerten Sie jede Aussage.',
 [['Die EFL umfasst 16–29 standardisierte Tests nach einem kinesiophysischen Ansatz (ergonomisch sichere Limite).',true],
  ['Die Selbstlimitierung wird in drei Stufen eingeteilt, wobei Stufe 3 selbstlimitiert, wesentlich inkonsistent und/oder unterhalb der Minimalperformance bedeutet.',true],
  ['Das Bundesgericht hält die EFL für eine valide Beurteilung der Arbeitsfähigkeit für sinnvoll oder sogar notwendig (8C_547/2008).',true],
  ['Das Anforderungsprofil der Tätigkeit spielt für die Aussagekraft einer EFL keine Rolle.',false]],
 'Beispiel: Eine physische EFL sagt nichts über eine sitzende Aussendiensttätigkeit; das Anforderungsprofil entscheidet über die Wertigkeit. EFL und Neuropsychologie müssen fachärztlich in den klinischen Kontext gesetzt werden.',M4+'Kap. 6');

add('Abhängigkeit (BGE 145 V 215)','K','Abhängigkeitserkrankungen in der IV – bewerten Sie jede Aussage.',
 [['Seit BGE 145 V 215 (Leitlinie ab 11.7.2019) werden Abhängigkeitserkrankungen nach dem strukturierten Beweisverfahren geprüft wie alle psychischen Störungen.',true],
  ['Die Annahme, ein Abhängigkeitszustand sei durch Entzug ohne Weiteres reversibel, ist unzutreffend.',true],
  ['Für ein Konstrukt des «selbstverschuldeten» Zustandes besteht keine Rechtsgrundlage.',true],
  ['Abhängigkeit ist weiterhin nur als Sekundärdiagnose neben einer anderen psychischen Störung rentenrelevant.',false]],
 'Zuvor war Abhängigkeit allein kein IV-Rentengrund. Die Diagnose ist die Eintrittspforte, die Arbeitsunfähigkeit muss durch effektive Funktionseinbussen begründet werden. ICD: mindestens 3 von 6 Kriterien im letzten Jahr.',M4+'Kap. 16');

add('Burn-out, Mobbing, ME/CFS','K','Abgrenzungen – bewerten Sie jede Aussage.',
 [['Burn-out ist nach ICD-11 (QD85) ein arbeitsbezogenes Phänomen und keine Krankheitsdiagnose; nach ICD-10 steht Z73.',true],
  ['Mobbing ist keine Diagnose; dahinter liegende psychiatrische Störungen sind zu klären.',true],
  ['Bei ME/CFS ist die Post-Exertional Malaise (PEM) das diagnostische Leitsymptom; Aktivierung verschlechtert den Zustand.',true],
  ['Bei Depression verschlechtert Aktivierung typischerweise den Zustand wie bei ME/CFS.',false]],
 'Depression: Motivationslosigkeit, aktivierbar. ME/CFS: PEM, Pacing als Therapieprinzip.',M4+'Kap. 2, 12.4, 20.4');

add('Häufigste Fehler UVG-Gutachten','K','Typische Fehler in UVG-Gutachten (Wipfli/Saguer) – bewerten Sie jede Aussage.',
 [['Eine Beurteilung ohne Kenntnis der (Vor-)Akten und der Anamnese ist ein Verwertbarkeitsmangel (BGE 125 V 351, 134 V 231).',true],
  ['Juristische Ausführungen zu Unfallbegriff und Adäquanz sind unzulässig, da es Rechtsfragen sind (BGE 134 V 109).',true],
  ['Sachfremde Kriterien (z. B. Aussehen der Explorandin, Fall «Reizwäsche», U 339/06) begründen den Anschein der Befangenheit.',true],
  ['Grafische Hervorhebungen (fett/kursiv) im Gutachten begründen per se Befangenheit.',false]],
 'Grafische Gestaltungsmittel sind erlaubt (8C_448/2015). Kommentare schon in Aktenzusammenfassung/Anamnese sind zu vermeiden, weil unklar wird, was Befund und was Bewertung ist. Fehlende, aktenkundige Unterlagen (z. B. zweite OP) dürfen sich nicht zulasten der versicherten Person auswirken; Kritik an der Fallführung des Versicherers ist nicht Sache des Gutachters.',M4+'Kap. 1');

add('Qualität aus Kundensicht (Saguer)','K','Gutachtenqualität und typische Mängel – bewerten Sie jede Aussage.',
 [['Nach Gyr et al. 2011 hielt der Auftraggeber bei etwa jedem fünften Gutachten die Qualität fälschlich für zufriedenstellend (16 von 97).',true],
  ['Typische Mängel sind u. a. apodiktische Aussagen, inkonsistente Argumentation, fehlende Objektivierung und fehlender Mut zu «Ich weiss es nicht».',true],
  ['Bei der Leistungsfähigkeit sind Ressourcen und Defizite darzustellen.',true],
  ['Ressourcen sind in der zumutbaren Leistungsfähigkeit nicht zu erwähnen, da nur Defizite versicherungsrelevant sind.',false]],
 'Zur Leistungsfähigkeit gehören ein positives (ressourcenorientiertes) und ein negatives Fähigkeitsprofil, Alltagsaktivitäten und realitätsnahe Berufsbilder.',M4+'Kap. 1.4');

add('Kunstfehler vs. Komplikation','K','Arzthaftung (BGE 133 III 121, 120 Ib 411) – bewerten Sie jede Aussage.',
 [['Der Arzt schuldet eine getreue, sorgfältige Ausführung, nicht den Erfolg.',true],
  ['Die Sorgfalt wird nach objektivem Massstab beurteilt (nach medizinischen Gesichtspunkten gebotene Sorgfalt).',true],
  ['Eine Pflichtverletzung liegt erst vor, wenn das Vorgehen nach dem allgemeinen Fachwissensstand nicht mehr vertretbar ist.',true],
  ['Das Eintreten eines behandlungsimmanenten Risikos (z. B. Infektion, Thrombose) begründet bei gehöriger Aufklärung stets eine Haftung.',false]],
 'Komplikation (immanentes Risiko) ≠ Kunstfehler. Der medizinische Standard stützt sich auf evidenzbasierte Guidelines, Fachpublikationen und allgemein geübte Praxis anerkannter Experten. Das Spital haftet zudem für Organisationsmängel.',M4+'Kap. 3');

add('Konsens & MEDAS','K','Konsens im interdisziplinären Gutachten (Risi) – bewerten Sie jede Aussage.',
 [['Der fallverantwortliche Arzt legt die Disziplinen fest, vervollständigt die Akten, präzisiert die Fragestellung und koordiniert den Konsens.',true],
  ['Konsens, Dissens und Unsicherheit sind im Gutachten zu deklarieren.',true],
  ['Der Mehrwert der Konsensbeurteilung liegt in der fachübergreifenden Integration statt der blossen Nebeneinanderstellung der Fachbeurteilungen.',true],
  ['Die erste MEDAS wurde im Jahr 2015 in Bern gegründet.',false]],
 'Historie: IV-Defizit 1977, erste MEDAS St. Gallen 1978. Kritisiert werden Überabklärung, copy/paste-Berichte und zerstückelte Einzelgutachten.',M4+'Kap. 4.1');

add('Gemeinschaftliches Gutachter-Konsilium','K','Gemeinschaftliches Gutachter-Konsilium (Kindscher) – bewerten Sie jede Aussage.',
 [['Es gilt der Grundsatz der Mündlichkeit.',true],
  ['Gutachter, Rechtsanwalt des Geschädigten und Haftpflichtversicherer (ggf. mit Vertrauensärzten) nehmen gemeinsam teil.',true],
  ['Mögliche Ergebnisse sind Klärung, Teilklärung oder Erläuterung, warum Fragen offen bleiben.',true],
  ['Das Modell ist ausschliesslich für IV-Verfahren vorgesehen.',false]],
 'Es handelt sich um ein Haftpflichtmodell. Vorteile: zielgerichtet, detailliertere Begründungen, erhöhte Akzeptanz, einvernehmliche Fallerledigung, ggf. Kostenreduktion.',M4+'Kap. 4.2');

add('Kausalität: Richtung & Sport','K','Unfallbegriff in Beispielen (Bosshard) – bewerten Sie jede Aussage.',
 [['Eine harte Landung beim Volleyball ist ein inhärentes Verletzungsrisiko und kein Unfall.',true],
  ['Ausrutschen auf feuchtem Hallenboden ist als programmwidrige Beeinflussung ein Unfall.',true],
  ['Ein Stein im Reisgericht erfüllt das Kriterium «ungewöhnlich».',true],
  ['Ein Kirschenstein im Kirschenkuchen erfüllt das Kriterium «ungewöhnlich».',false]],
 'Ohne objektivierbaren strukturellen Zusatzschaden: Restitutio ad integrum; mit dokumentiertem Zusatzschaden: richtungsgebende Verschlimmerung. Fall Polymechaniker: auf vollständige Unterlagen beharren und Diskrepanzen zwischen Berichten klären.',M4+'Kap. 7');

add('Prüfpunkte SVA / Konsensfindung','K','Formale und inhaltliche Prüfpunkte eines IV-Gutachtens (Böhler/Meier) – bewerten Sie jede Aussage.',
 [['Die Tonaufnahme enthält Datum und Zeit von Anfang, Unterbruch und Ende und wird von beiden Seiten bestätigt.',true],
  ['Die Kaskade lautet: Befund/Diagnose → Funktionseinschränkung → Handicap → Arbeitsunfähigkeit (Mismatch mit dem Anforderungsprofil).',true],
  ['Neuropsychologische Untersuchungen sind relevant, soweit sie sich schlüssig in das Gesamtergebnis einfügen.',true],
  ['Die Arbeitsfähigkeit schätzt grundsätzlich der Neuropsychologe unabhängig vom psychiatrischen Facharzt ein (9C_752/2018).',false]],
 'Nach 9C_752/2018 schätzt der psychiatrische Facharzt die Arbeitsfähigkeit unter Einbezug der npsy Defizite ein. Neuropsychologie ist Zusatzuntersuchung bei begründeter Indikation (9C_255/2020). EFL/NPS müssen fachärztlich gewürdigt werden.',M4+'Kap. 8');

add('Indikatorenprüfung Bereiche','K','Prüfbereiche des indikatorengeleiteten Beweisverfahrens (BGE 141 V 281) – bewerten Sie jede Aussage.',
 [['Eine Prüfung betrifft die kriteriengeleitete Diagnose nach ICD/DSM.',true],
  ['Eine Prüfung betrifft die Konsistenz der Symptomatologie (Authentizität, Selbstlimitierung/Aggravation).',true],
  ['Eine Prüfung betrifft den geforderten Schweregrad (Befunde, Behandlungs-/Eingliederungserfolg, Komorbiditäten, Persönlichkeit, sozialer Kontext).',true],
  ['Psychosoziale Faktoren (z. B. Therapiecompliance) sind für das Verfahren ohne Bedeutung.',false]],
 'Ziel ist die Erhöhung der medizinischen Beweisdichte. Seit BGE 143 V 409/418 gilt das Verfahren für depressive und alle psychischen Störungen, seit BGE 145 V 215 auch für Abhängigkeit.',M4+'Kap. 8, 9.3');

add('Depression: Anamnese & AMDP','K','Begutachtung von Depressionen (Schleifer) – bewerten Sie jede Aussage.',
 [['Das AMDP ist ein System zur standardisierten Befunddokumentation, kein Test.',true],
  ['Ein fehlendes AMDP macht ein Gutachten nicht automatisch unverwertbar (8C_266/2012).',true],
  ['Subjektive Selbstangaben allein genügen nicht; sie sind mit Befund, Verhalten, Akten, Fremdangaben und Alltagsfunktion abzugleichen.',true],
  ['Der PHQ-2 (Whooley) hat bei zwei Ja-Antworten eine Sensitivität von etwa 57 % und Spezifität von 96 %.',false]],
 'Richtig: Sensitivität 96 %, Spezifität 57 %. Weltweit ca. 5.7 % der Erwachsenen betroffen (F:M ≈ 1.5:1). Vorgehen: Episode, Schweregrad, Dauer/Verlauf, Differenzialdiagnose inkl. bipolar, Komorbidität/Medikamente, Psychosoziales.',M4+'Kap. 9');

add('Chronische Kopfschmerzen','K','Chronische Kopfschmerzen in der Begutachtung (Sandor) – bewerten Sie jede Aussage.',
 [['Primäre Kopfschmerzen gelten als chronisch ab 15 Kopfschmerztagen pro Monat.',true],
  ['Medikamentenübergebrauch ist oft ein Chronifizierungsfaktor; bei chronischer Migräne ist zuerst die Entzugsfrage zu klären, bevor «austherapiert» attestiert wird.',true],
  ['Der Cluster-Kopfschmerz ist unilateral orbital, nächtlich betont, autonom begleitet und dauert 15–180 Minuten.',true],
  ['Die paroxysmale Hemikranie spricht typischerweise auf Indomethacin nicht an.',false]],
 'Paroxysmale Hemikranie ist Indomethacin-responsiv. Migräne: pulsierend, unilateral, Nausea, Photo-/Phonophobie, 4–72 h; Spannungstyp: dumpf-drückend, bilateral, mild bis mittel, 30 min–7 Tage. Posttraumatischer Kopfschmerz nach Distorsion ca. 20 %, persistierend ca. 5 %.',M4+'Kap. 10');

add('Kognition bei Depression','K','Kognition bei Depression (Rechsteiner) – bewerten Sie jede Aussage.',
 [['Ein beträchtlicher Teil der Betroffenen hat auch in Remission kognitive Beeinträchtigungen (ca. 44 %).',true],
  ['Am häufigsten persistiert die Verarbeitungsgeschwindigkeit.',true],
  ['Nicht valide Testresultate erlauben keine Aussage über Kognition, Ressourcen oder Arbeitsfähigkeit.',true],
  ['Fehlende depressive Symptomatik zum Untersuchungszeitpunkt schliesst eine kognitive Beeinträchtigung sicher aus.',false]],
 'Ca. 90 % berichten kognitive Einbussen während der Episode, 66 % nach 3 Jahren noch beeinträchtigt. Subjektive Kognitionsstörungen brauchen objektive Korrelate; Alltagsaktivitäten und Fremdberichte sind ein valides Gegengewicht.',M4+'Kap. 12.1–12.3');

add('Kognition bei Fatigue / SHT','K','Neuere Rechtsprechung und Fatigue – bewerten Sie jede Aussage.',
 [['Nach 8C_143/2024 können neuropsychologische Verschlechterungen auch ohne neue strukturelle MRI-Befunde bestehen.',true],
  ['Fatigue nach SHT ist ernsthaft zu prüfen und nicht vorschnell als psychosozial zu erklären.',true],
  ['Bei ME/CFS kann eine einmalige Testung die Alltagsfunktion unterschätzen, weil die Kognition belastungsabhängig fluktuiert.',true],
  ['Nach 8C_181/2025 genügen neuropsychologische Defizite allein; die Gesamtbeurteilung ist nachrangig.',false]],
 '8C_181/2025: npsy Defizite allein genügen nicht, massgebend ist die Gesamtbeurteilung; nicht valide Testresultate erlauben keine Aussage. Zudem: Depression kann Folge der Hirnverletzung sein.',M4+'Kap. 12.3–12.4');

add('Neuropsychologie: Kernaussagen','K','10 Kernaussagen der neuropsychologischen Begutachtung (Oertli/Kägi) – bewerten Sie jede Aussage.',
 [['Eine kognitive Funktionsstörung ist nicht gleichbedeutend mit einer Hirnschädigung.',true],
  ['Der Schweregrad kognitiver Einschränkungen korreliert nicht automatisch mit dem Schweregrad der Hirnverletzung.',true],
  ['Ein unauffälliges kognitives Profil bedeutet nicht automatisch volle Arbeitsfähigkeit.',true],
  ['Nicht authentische kognitive Befunde sind trotzdem zu interpretieren und erlauben Aussagen zu Arbeitsfähigkeit und Unfallfolgen.',false]],
 'Nicht authentische Befunde dürfen nicht interpretiert werden (keine Aussage zu AF, Therapie, Unfallfolgen); das heisst nicht «Simulation bewiesen». Vorbefunde nicht sekundär übernehmen, Originalakten beschaffen, Diskrepanzen diskutieren. Eine 1½-h-Untersuchung bildet die zeitlich-mentale Belastbarkeit über den Arbeitstag nicht ab.',M4+'Kap. 13');

add('Epilepsie: Kognition','K','Epilepsie und Kognition (Jokeit) – bewerten Sie jede Aussage.',
 [['Kognitive Beeinträchtigungen können permanent, reversibel (anfalls-/medikamenteninduziert), transient (interiktale Aktivität) oder postiktal sein.',true],
  ['Antiseizure-Medikamente wie Topiramat, Zonisamid, Phenytoin und Phenobarbital bergen ein höheres Risiko für Gedächtnisstörungen als Levetiracetam und Lamotrigin.',true],
  ['Gute Exekutivfunktionen und Reservekapazität können kognitive Defizite kompensieren (Schwellenmodell).',true],
  ['Nach der ILAE-Terminologie wird «fokal» durch «partiell» ersetzt.',false]],
 'Umgekehrt: «fokal» statt «partiell», «pharmakoresponsiv/self-limiting» statt «benigne», «fokal zu bilateral tonisch-klonisch» statt «sekundär generalisiert». Komorbidität: Depression 11–60 %, Angst 19–45 %.',M4+'Kap. 14.1');

add('Epilepsie: Arbeitsfähigkeit','K','Epilepsie und Arbeitsunfähigkeit (Krämer) – bewerten Sie jede Aussage.',
 [['Qualitative Einschränkungen (Absturzgefahr, gefährliche Maschinen, Fahrzeugführung) sind häufiger als dauerhafte quantitative Einschränkungen.',true],
  ['Zwei komplex-fokale Anfälle pro Woche mit je etwa 2 h Erholung entsprechen rechnerisch ca. 10 % Arbeitsunfähigkeit.',true],
  ['Zehn Grand-mal-Anfälle pro Jahr mit je etwa 2 Tagen Ausfall entsprechen rechnerisch ca. 10 % Arbeitsunfähigkeit.',true],
  ['Der Arzt beurteilt bei Epilepsie auch den Invaliditätsgrad im Lohnvergleich.',false]],
 'Der Arzt beurteilt Art, Dauer, Prognose und Auswirkungen auf die Arbeitsfähigkeit; der Lohnvergleich (IV-Grad) ist Sache der IV. Epilepsiepatienten: Arbeitslosenquote ca. 10 % (vs. 4.3 %), ganze IV-Rente 31.4 % (vs. 5.8 %). Höhenarbeit: bis 1 m ohne Bedenken, > 2–3 m nur mit Sicherung oder bei langfristiger Anfallsfreiheit.',M4+'Kap. 14.2');

add('CRPS Zahlen & Verlauf','K','CRPS (Brunner) – bewerten Sie jede Aussage.',
 [['Die Budapest-Kriterien haben eine Sensitivität von 0.99 und eine Spezifität von 0.68.',true],
  ['Gutachterlich werden florides CRPS, CRPS in partieller Remission und CRPS in Remission unterschieden.',true],
  ['Nicht mehr erfüllte Budapest-Kriterien bedeuten nicht automatisch «Status nach CRPS» bzw. Heilung.',true],
  ['Der UVG-Endzustand bedeutet volle Gesundheit.',false]],
 'Endzustand = keine namhafte Besserung mehr durch Behandlung zu erwarten (nicht volle Gesundheit). Epidemiologie: 0.15 % aller Unfälle, 1–8.8 % nach distaler Radiusfraktur. Auslöser: Frakturen 65 %, Eingriffe 19 %, spontan 10 %. Ungünstige Prognose: persistierende sensible Veränderungen, «kalte» Haut, Fibrosierungen.',M4+'Kap. 18');

add('Persönlichkeitsstörungen: Geschichte','K','Historische Linie der Persönlichkeitsstörungen (Frei) – bewerten Sie jede Aussage.',
 [['Pinel beschrieb die «Manie sans délire».',true],
  ['Prichard prägte den Begriff «Moral insanity».',true],
  ['K. Schneider unterschied 1928 zehn Psychopathen-Typen.',true],
  ['Die PCL-R nach Hare wurde von Kraepelin entwickelt.',false]],
 'Weitere: Morel (Degenerationslehre), Lombroso («Il delinquente nato»), Cleckley («The Mask of Sanity»), Hare PCL-R (Beziehungsprofil, Affektivität, Lebensstil, Kriminalität). Die moderne Klassifikation (ICD/DSM) geht in eine dimensionale Betrachtung über; in der Versicherungsmedizin Diagnose nach ICD (F60–61) mit funktionellem Schweregrad.',M4+'Kap. 17');

add('Patientenanwalt (Tamm)','K','Wünsche an Gutachter (Tamm) – bewerten Sie jede Aussage.',
 [['Gutachter sollen die Fragestellung und das Dossier vollständig verstehen.',true],
  ['Gutachter sollen Klartext schreiben: für Laien verständlich, ohne Kaschieren von Unsicherheiten.',true],
  ['Gutachter sollen das Recht kennen, nicht Recht sprechen.',true],
  ['Parteinahme ist eine Berufspflicht des Gutachters, wie beim Anwalt.',false]],
 'Parteinahme ist Berufspflicht des Anwalts, nicht des Gutachters. Weitere Gebote: den medizinischen State of the Art kennen («Evidenz, nicht Eminenz») und die versicherte Person respektvoll behandeln. Fazit: verständliche Aussagen zum Einzelfall, Reflexion der eigenen Rolle, Verteidigung der Autonomie der Medizin.',M4+'Kap. 19.4–19.5');

add('Zuverlässigkeit von Gutachten','K','Evidenz zur Zuverlässigkeit (Tamm) – bewerten Sie jede Aussage.',
 [['Die Stakeholder-Umfrage (Schandelmaier 2015) nennt als grösste Schwäche die mangelnde Nachvollziehbarkeit der Schlussfolgerungen (Rechtsvertreter 60 %).',true],
  ['In den RELY-Studien divergierten Gutachter bei einzelnen Fällen um bis zu 100 % bei der Arbeitsfähigkeit.',true],
  ['Bias bezeichnet Fehler in gleicher Richtung; Noise die unerwünschte Streuung von Urteilen.',true],
  ['Intensives Training erhöht nach RELY sowohl Agreement als auch Reliabilität deutlich.',false]],
 'Intensives Training erhöhte das Agreement, nicht aber die Reliabilität. Vermischung medizinischer und rechtlicher Fragen: Rechtsvertreter 58 %.',M4+'Kap. 19.3');

/*END*/
})();
