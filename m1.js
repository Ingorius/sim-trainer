/* Modul 1 – Recht & Versicherungen. Quelle: SIM-Repetitorium Modul 1 (Stand 31.08.2026) und Kursunterlagen 2026.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m1-'+String(n).padStart(3,'0'),modul:1,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const R='Repetitorium M1, ';

/* ---- Kap. 1: Schnittstelle Medizin & Recht ---- */
add('Rolle des Gutachters','A+','Worin besteht der zentrale Unterschied zwischen behandelnder und begutachtender ärztlicher Tätigkeit?',
 ['Im Auftrag: neutrale Klärung eines rechtserheblichen medizinischen Sachverhalts statt Behandlung und Vertrauensbeziehung',
  'Die Gutachterin verwendet andere wissenschaftlich-medizinische Grundlagen als die Behandelnde',
  'Die Gutachterin vertritt die Interessen der versicherten Person',
  'Der Gutachter vertritt die Interessen des Auftraggebers (Versicherung)'],
 'Die medizinischen Grundlagen sind dieselben, der Auftrag ist ein anderer. Die begutachtende Person ist weder Anwältin der versicherten Person noch «Mann der Versicherung», sondern unabhängige Fachexpertin.',R+'Kap. 1.1–1.2 (S. 10)');

add('Rolle des Gutachters','K','Behandlung und Begutachtung – bewerten Sie jede Aussage:',
 [['Behandlungsdiagnosen dürfen pragmatisch und vorläufig sein; gutachtliche Diagnosen müssen kriteriengeleitet und nachvollziehbar hergeleitet werden.',true],
  ['Empathie darf in der Begutachtung die kritische Prüfung ersetzen, wenn die untersuchte Person leidet.',false],
  ['Subjektive Beschwerden werden ernst genommen, aber mit Befunden, Verlauf, Aktivitäten und Aktenlage auf Konsistenz und Plausibilität geprüft.',true],
  ['Die begutachtende Person muss jede denkbare medizinische oder rechtliche Frage beantworten.',false]],
 'Empathie bleibt geboten, darf aber Neutralität und kritische Prüfung nicht ersetzen. Beantwortet wird der Auftrag, nicht jede denkbare Frage.',R+'Kap. 1.2 (S. 10)');

add('Leistungssysteme','A+','Welche Aussage zur Invalidenversicherung (IV) trifft zu?',
 ['Sie ist final ausgerichtet: entscheidend sind die länger dauernden erwerblichen Folgen einer Gesundheitsschädigung, nicht ein Unfallereignis',
  'Sie ist kausal ausgerichtet und setzt ein Unfallereignis voraus',
  'Jede IV-Leistung setzt bereits einen Rentenanspruch voraus',
  'Leitidee ist «Rente vor Eingliederung»'],
 'Die IV ist final; Leitidee ist «Eingliederung vor Rente». Früherfassung, Frühintervention, Eingliederungsmassnahmen und Hilfsmittel setzen keinen Rentenanspruch voraus.',R+'Kap. 1.4 (S. 11)');

add('Leistungssysteme','A-','Welche Aussage zum Krankentaggeld (KTG) ist FALSCH?',
 ['Es besteht ein obligatorischer allgemeiner Versicherungsschutz für krankheitsbedingten Lohnausfall',
  'KTG kann dem VVG (Privatrecht, häufigster Fall) oder dem KVG (selten) unterstehen',
  'Bei VVG-Verträgen sind die AVB massgebend',
  'Im Zentrum steht zunächst die Arbeitsunfähigkeit in der angestammten Tätigkeit'],
 'Eine obligatorische allgemeine Versicherung des krankheitsbedingten Lohnausfalls besteht nicht. Bei längerer Dauer gewinnt die zumutbare Verweistätigkeit an Bedeutung.',R+'Kap. 1.4 (S. 11)');

add('Leistungssysteme','K','Kausal oder final ausgerichtet? Bewerten Sie jede Aussage:',
 [['Die Unfallversicherung (UV) ist kausal ausgerichtet und setzt natürlichen und adäquaten Zusammenhang zwischen Unfall und Gesundheitsschaden voraus.',true],
  ['Die Invalidenversicherung ist kausal ausgerichtet.',false],
  ['Im Haftpflichtrecht geht es um den Ausgleich eines konkret verursachten Schadens; die geschädigte Person wird in ihrer individuellen Konstitution betrachtet.',true],
  ['Sozialversicherungsrechtliche Begriffe gelten in der Privatversicherung automatisch.',false]],
 'Die IV ist final. Privatversicherungen richten sich wesentlich nach Vertrag und AVB; sozialversicherungsrechtliche Begriffe gelten nicht automatisch.',R+'Kap. 1.4 (S. 11)');

add('Unfallbegriff','A+','Wer entscheidet, ob die Merkmale des Unfallbegriffs nach Art. 4 ATSG erfüllt sind?',
 ['Die rechtsanwendende Stelle; medizinisch beurteilbar sind Mechanismus, Verletzungsmuster und Gesundheitsfolgen',
  'Die Gutachterin, weil der Unfallbegriff medizinisch definiert ist',
  'Die behandelnde Ärztin im Arztzeugnis',
  'Die versicherte Person durch ihre Schilderung'],
 'Unfall = plötzliche, nicht beabsichtigte, schädigende Einwirkung eines ungewöhnlichen äusseren Faktors auf den menschlichen Körper. Die Subsumtion ist Rechtsfrage.',R+'Kap. 1.5 (S. 11)');

add('Beweislast','K','Untersuchungsgrundsatz und Beweislast im Sozialversicherungsrecht – bewerten Sie:',
 [['Der Versicherungsträger klärt den rechtserheblichen Sachverhalt grundsätzlich von Amtes wegen ab.',true],
  ['Die versicherte Person hat Mitwirkungspflichten.',true],
  ['Bei Beweislosigkeit einer anspruchsbegründenden Tatsache trägt grundsätzlich der Versicherer die Folgen.',false],
  ['Für den Wegfall einer einmal anerkannten Unfallkausalität liegt die Beweislast beim Unfallversicherer.',true]],
 'Bei Beweislosigkeit trägt grundsätzlich die anspruchstellende Person die Folgen; beim Wegfall einer einmal anerkannten Unfallkausalität dagegen der Unfallversicherer.',R+'Kap. 1.3 (S. 11)');

/* ---- Kap. 2: Tatfragen vs. Rechtsfragen ---- */
add('Tatfrage vs. Rechtsfrage','A-','Welche der folgenden Fragen ist KEINE typische medizinische Tatfrage, sondern eine Rechtsfrage?',
 ['Wie hoch ist der Invaliditätsgrad?',
  'Welche Arbeitsfähigkeit besteht in der bisherigen und in einer angepassten Tätigkeit?',
  'Ist ein natürlicher Kausalzusammenhang überwiegend wahrscheinlich?',
  'Wie entwickelte sich der Zustand im Längsschnitt?'],
 'Invaliditätsgrad, Adäquanz, Leistungspflicht, rechtliche Zumutbarkeit und Zugang zum ausgeglichenen Arbeitsmarkt sind Rechtsfragen. Medizin liefert die Bausteine.',R+'Kap. 2.1 (S. 12)');

add('Tatfrage vs. Rechtsfrage','K','Ordnen Sie zu – welche Fragen sind medizinische Tatfragen (richtig) und welche Rechtsfragen (falsch)?',
 [['Welche Präsenzzeit und welches Rendement sind medizinisch zumutbar?',true],
  ['Ist der natürliche Kausalzusammenhang auch adäquat?',false],
  ['Ist aus medizinischer Sicht von weiterer Behandlung eine namhafte Verbesserung der Arbeitsfähigkeit zu erwarten?',true],
  ['Besteht Anspruch auf Rente, Umschulung oder Hilflosenentschädigung?',false]],
 'Die Gutachterin liefert medizinische Bausteine und begründet deren Tragfähigkeit; die rechtsanwendende Stelle baut daraus den Entscheid. Adäquanz und Anspruch sind Rechtsfragen.',R+'Kap. 2.1 (S. 12)');

add('Tatfrage vs. Rechtsfrage','A+','Ein Versicherer fragt: «Ist unser Entscheid, die Taggelder zu kürzen, gerechtfertigt?» Wie reagiert die Gutachterin sachgerecht?',
 ['Sie klärt rück, dass sie aktuelle und retrospektive Arbeitsfähigkeit in angestammter und angepasster Tätigkeit beurteilt; die Rechtmässigkeit entscheidet Versicherer oder Gericht',
  'Sie beantwortet die Frage mit Ja oder Nein, weil sie die Arbeitsfähigkeit am besten kennt',
  'Sie lehnt den Auftrag ohne Rückfrage ab',
  'Sie beurteilt nur die Diagnose und lässt die Arbeitsfähigkeit offen'],
 'Die Rechtmässigkeit einer Kürzung ist keine medizinische Frage. Sachgerecht ist eine Rückfrage zum Auftrag und die Beantwortung der medizinischen Fragen.',R+'Kap. 2.6 (S. 13)');

add('Zumutbarkeit','A+','Welche Aussage zum Begriff «Zumutbarkeit» trifft zu?',
 ['Er hat zwei Ebenen: Medizinisch wird geklärt, welche Belastungen vertretbar sind; rechtlich, was im Leistungssystem verlangt werden darf',
  'Zumutbarkeit ist ausschliesslich eine Rechtsfrage',
  'Zumutbarkeit ist ausschliesslich eine medizinische Frage',
  'Zumutbarkeit hängt nur von Alter und Stellensituation ab'],
 'Medizinische Unzumutbarkeit kann z. B. bei unvertretbarer Selbst-/Fremdgefährdung, absehbarer relevanter Verschlechterung oder krankheitsbedingtem Verhalten bestehen, das Dritten nicht zugemutet werden kann.',R+'Kap. 2.2 (S. 12)');

add('Zumutbarkeit','A-','Welche Aussage zu Kontextfaktoren (Alter, Konjunktur, Sprache, Ausbildung, familiäre Belastung) ist FALSCH?',
 ['Sie sind immer medizinische Gründe für Arbeitsunfähigkeit',
  'Sie sind nicht ohne Weiteres medizinische Gründe für Arbeitsunfähigkeit',
  'Führen sie zu einer lege artis diagnostizierten Gesundheitsstörung, sind diese medizinischen Wirkungen zu berücksichtigen',
  'Beeinflussen sie die funktionellen Auswirkungen einer gesicherten Störung, sind sie relevant'],
 'Kontextfaktoren werden nicht selbst zur Diagnose gemacht; relevant sind sie, soweit sie eine gesicherte Gesundheitsstörung oder deren funktionelle Auswirkungen beeinflussen.',R+'Kap. 2.2, 5.6');

add('Arbeitsfähigkeit vs. Invalidität','A+','Eine Person ist in angepasster Tätigkeit zu 80 % arbeitsfähig. Welche Schlussfolgerung ist korrekt?',
 ['Der Invaliditätsgrad folgt nicht automatisch (20 %); er wird rechtlich-wirtschaftlich meist per Einkommensvergleich bestimmt',
  'Der Invaliditätsgrad beträgt automatisch 20 %',
  'Der Invaliditätsgrad beträgt automatisch 80 %',
  'Es besteht keine Invalidität, weil mehr als 50 % Arbeitsfähigkeit vorliegen'],
 'IG = (Valideneinkommen − Invalideneinkommen) / Valideneinkommen × 100. Die medizinische Arbeitsfähigkeit ist eine Grundlage, nicht der Invaliditätsgrad selbst.',R+'Kap. 2.3 (S. 12–13)');

add('Diagnose und Funktion','K','Diagnose und Arbeitsfähigkeit – bewerten Sie jede Aussage:',
 [['Eine Diagnose allein begründet weder Arbeitsunfähigkeit noch deren Ausmass.',true],
  ['Verdachtsdiagnosen können eine Minderung der Arbeitsfähigkeit tragen, wenn sie plausibel sind.',false],
  ['Die Argumentation muss zeigen, welche Funktionen beeinträchtigt und welche Anforderungen der Tätigkeit betroffen sind.',true],
  ['Hinweise auf fachfremde Diagnosen werden verschwiegen, da sie nicht zum Fachgebiet gehören.',false]],
 'Verdachtsdiagnosen begründen die erforderliche überwiegende Wahrscheinlichkeit nicht. Hinweise auf fachfremde Diagnosen werden benannt; das weitere Vorgehen wird mit dem Auftraggeber geklärt.',R+'Kap. 2.4 (S. 13)');

add('Schadenminderung','A+','Wie ist die aktuelle Arbeitsfähigkeit grundsätzlich zu beurteilen, wenn eine empfohlene Therapie noch nicht durchgeführt wurde?',
 ['Nach dem tatsächlich erreichbaren Leistungsvermögen; ein hypothetisch bei optimaler Schadenminderung erreichbarer Zustand wird ohne ausdrücklichen Auftrag nicht vorweggenommen',
  'So, als wäre die Therapie bereits erfolgreich abgeschlossen',
  'Es wird immer das bestmögliche hypothetische Leistungsvermögen angenommen',
  'Die Arbeitsfähigkeit wird in diesem Fall nicht beurteilt'],
 'Nach SIM-Leitfaden 2026 darf ein hypothetisch erreichbarer Zustand grundsätzlich erst angerechnet werden, wenn der Sozialversicherungsträger das Mahn- und Bedenkzeitverfahren nach Art. 21 Abs. 4 ATSG durchgeführt hat.',R+'Kap. 2.5 (S. 13)');

/* ---- Kap. 3: Beweis ---- */
add('Beweisgrad','A+','Welche Definition der «überwiegenden Wahrscheinlichkeit» ist zutreffend?',
 ['Für die Sachverhaltsvariante sprechen nach objektiven Gesichtspunkten so gewichtige Gründe, dass andere Möglichkeiten vernünftigerweise nicht massgeblich in Betracht fallen',
  'Mindestens 51 % statistische Wahrscheinlichkeit',
  'Naturwissenschaftliche Gewissheit',
  'Es sprechen gewisse Elemente für den Sachverhalt, auch wenn mit einer anderen Möglichkeit noch gerechnet wird'],
 'Keine starre Prozentrechnung. Die letzte Antwort beschreibt die Glaubhaftmachung, nicht die überwiegende Wahrscheinlichkeit.',R+'Kap. 3.1–3.2 (S. 14)');

add('Beweisgrad','K','Beweisgrade – bewerten Sie jede Aussage:',
 [['Für viele medizinische Tatsachen im Sozialversicherungsrecht gilt die überwiegende Wahrscheinlichkeit.',true],
  ['Eine blosse Möglichkeit («kann sein») erfüllt den Beweisgrad der überwiegenden Wahrscheinlichkeit.',false],
  ['«Ich habe keine Zweifel» genügt als unbegründete subjektive Aussage nicht.',true],
  ['Bei mehreren Sachverhaltsvarianten ist grundsätzlich die wahrscheinlichste Variante massgebend.',true]],
 'Naturwissenschaftliche Gewissheit wird nicht verlangt, eine blosse Möglichkeit reicht nicht. Erforderlich ist eine objektiv nachvollziehbare Würdigung der Pro- und Contra-Indizien.',R+'Kap. 3.1–3.2 (S. 14)');

add('Beweiswert','A+','Welche Aussage zum Beweiswert medizinischer Berichte trifft zu?',
 ['Entscheidend ist nicht das Etikett «Gutachten», sondern die Qualität von Erhebung, Argumentation und Begründung',
  'Ein Arztzeugnis ist ein bevorzugtes Beweismittel',
  'Privatgutachten sind wegen ihrer Herkunft immer unbrauchbar',
  'Gerichtsgutachten besitzen keinen höheren Beweiswert als ein Arztzeugnis'],
 'Gerichtsgutachten haben grundsätzlich hohen Beweiswert; Administrativgutachten können volle Beweiskraft haben, solange keine konkreten Indizien gegen ihre Zuverlässigkeit bestehen. Die Herkunft allein macht ein Gutachten weder richtig noch falsch.',R+'Kap. 3.4 (S. 14–15)');

add('Beweiswert','A-','Welches Kriterium gehört NICHT zu den klassischen Voraussetzungen eines überzeugenden Gutachtens?',
 ['Es stammt von einer Person mit möglichst hohem Titel',
  'Es ist für die streitigen Belange umfassend und beruht auf allseitigen Untersuchungen',
  'Es wurde in Kenntnis der relevanten Vorakten abgegeben und berücksichtigt die geklagten Beschwerden',
  'Es ist in der Beurteilung einleuchtend, widerspruchsfrei und die Schlussfolgerungen sind nachvollziehbar begründet'],
 'Massgebend sind Umfassendheit, allseitige Untersuchung, Berücksichtigung der Beschwerden, Aktenkenntnis, Einleuchten, Widerspruchsfreiheit und Begründung.',R+'Kap. 3.4 (S. 14–15)');

add('Beweiswert','A+','Wie ist mit abweichenden fundierten Beurteilungen anderer Fachpersonen umzugehen?',
 ['Sie sind sachlich darzustellen, und es ist zu begründen, warum ihnen gefolgt wird oder nicht; Schweigen dazu ist ein Indiz gegen die Zuverlässigkeit',
  'Sie dürfen ignoriert werden, weil nur die eigene Untersuchung zählt',
  'Man übernimmt grundsätzlich die Beurteilung der Behandelnden',
  'Man übernimmt grundsätzlich die Beurteilung des Versicherungsarztes'],
 'Dreischritt: Abweichung präzise benennen – gemeinsame und unterschiedliche Tatsachengrundlagen darstellen – eigene Schlussfolgerung mit Methodik, Fachwissen und Einzelfallbezug begründen.',R+'Kap. 3.5 (S. 15)');

add('Kausalität','A+','«Vorher beschwerdefrei, nach dem Sturz Beschwerden – also Unfallfolge.» Wie ist diese Argumentation zu bewerten?',
 ['Als post hoc ergo propter hoc unzureichend; es braucht Mechanismus, zeitnahen Befund, Morphologie, degenerative Zeichen, Verlauf und alternative Ursachen',
  'Sie genügt für den Nachweis der natürlichen Kausalität',
  'Sie genügt nur bei Personen unter 50 Jahren',
  'Sie ist zulässig, wenn die Aussage der ersten Stunde vorliegt'],
 'Erst die Gesamtschau erlaubt eine Wahrscheinlichkeitsaussage. Die «Aussage der ersten Stunde» kann Gewicht haben, ist aber kein Automatismus.',R+'Kap. 3.6 (S. 15)');

/* ---- Kap. 4: Kausalität ---- */
add('Kausalität','A+','Welche Zuordnung zu natürlicher und adäquater Kausalität ist richtig?',
 ['Natürliche Kausalität = Tatfrage (medizinisch); adäquate Kausalität = Rechtsfrage',
  'Natürliche Kausalität = Rechtsfrage; adäquate Kausalität = Tatfrage',
  'Beide Ebenen sind medizinische Tatfragen',
  'Beide Ebenen beurteilt die Gutachterin gemeinsam in einem Schritt'],
 'Beide Ebenen sind strikt zu trennen. Äusserungen der Gutachterin zur Adäquanz können als Kompetenzüberschreitung und als Hinweis auf Voreingenommenheit gewertet werden.',R+'Kap. 4.1 (S. 16)');

add('Kausalität','K','Natürlicher Kausalzusammenhang – bewerten Sie jede Aussage:',
 [['Ursache sind alle Umstände, ohne die der Erfolg nicht, nicht in gleicher Weise oder nicht zur gleichen Zeit eingetreten wäre.',true],
  ['Das Ereignis muss alleinige und unmittelbare Ursache sein.',false],
  ['Teilursächlichkeit genügt.',true],
  ['Ob das Ereignis nach dem gewöhnlichen Lauf der Dinge geeignet ist, einen solchen Erfolg herbeizuführen, beurteilt die medizinische Gutachterin.',false]],
 'Letzteres beschreibt die Adäquanz und ist Rechtsfrage. Beim natürlichen Zusammenhang beurteilt die Gutachterin, ob das Ereignis eine notwendige Bedingung war.',R+'Kap. 4.1 (S. 16)');

add('Kausalität','A+','Was gilt für das Verhältnis von Teilkausalität und Beweisgrad?',
 ['Teilkausalität betrifft den Beitrag des Ereignisses, der Beweisgrad die Sicherheit, mit der dieser Beitrag feststeht – beides darf nicht vermischt werden',
  '«Unfall trägt zu 30 % bei» bedeutet, dass die Kausalität nur zu 30 % wahrscheinlich ist',
  '«Teilkausal» heisst weniger als 50 % wahrscheinlich',
  'Die überwiegende Wahrscheinlichkeit ist ein Verursachungsanteil von mindestens 51 %'],
 'Zuerst ist zu prüfen, ob ein kausaler Beitrag überwiegend wahrscheinlich ist; erst danach kann – falls sinnvoll und gefragt – das Ausmass der Mitwirkung beschrieben werden.',R+'Kap. 4.2 (S. 16)');

add('Kausalität','A-','Welche Aussage zur Würdigung der natürlichen Kausalität ist FALSCH?',
 ['Epidemiologische Daten sind ohne Weiteres auf den Einzelfall zu übertragen',
  'Zu würdigen sind u. a. Mechanismus, zeitlicher Zusammenhang, morphologisches Verletzungsmuster und Verlauf',
  'Vorzustand, natürlicher Krankheitsverlauf und konkurrierende Ursachen sind einzubeziehen',
  'Eine Formel ersetzt die Einzelfallwürdigung nicht'],
 'Epidemiologische Daten können wichtig sein, werden aber nicht ohne Weiteres auf den Einzelfall übertragen.',R+'Kap. 4.3 (S. 16)');

add('Vorzustand','A+','Was bedeutet «Status quo sine»?',
 ['Der Zustand, der sich aufgrund des unfallfremden Grundleidens auch ohne Unfall im betreffenden Zeitpunkt entwickelt hätte',
  'Der Zustand unmittelbar vor dem Unfall',
  'Der Zustand unmittelbar nach dem Unfall',
  'Der Zustand bei Eintritt der dauernden Invalidität'],
 'Status quo ante = Zustand vor dem Unfall (unfallbedingte Verschlimmerung abgeklungen). Status quo sine = Zustand, der auch ohne Unfall eingetreten wäre.',R+'Kap. 4.4 (S. 16)');

add('Vorzustand','K','Vorzustand, Rückfall, Spätfolgen – bewerten Sie jede Aussage:',
 [['Bei Rückfall und Spätfolgen muss der natürliche Kausalzusammenhang zum ursprünglichen Unfall erneut überwiegend wahrscheinlich sein.',true],
  ['Für die Abgrenzung der Verschlimmerung dürfen starre Erfahrungsfristen schematisch angewandt werden.',false],
  ['Ein Rückfall ist das Wiederaufflackern eines vermeintlich abgeheilten Leidens mit erneutem Behandlungsbedarf oder Arbeitsunfähigkeit.',true],
  ['Eine richtunggebende Verschlimmerung führt zu einer bleibenden strukturellen oder funktionellen Veränderung des Vorzustands.',true]],
 'Die Abgrenzung braucht konkrete medizinische Befunde und eine begründete Verlaufsprognose; starre Fristen dürfen nicht schematisch angewandt werden.',R+'Kap. 4.4–4.5 (S. 16–17)');

add('Beweislast','A+','Wer trägt die Beweislast dafür, dass jede kausale Bedeutung eines einmal anerkannten Unfalls weggefallen ist?',
 ['Der Unfallversicherer; erforderlich ist, dass der Eintritt des Status quo ante oder sine überwiegend wahrscheinlich begründet wird',
  'Die versicherte Person',
  'Die behandelnde Ärztin',
  'Niemand – bei Unklarheit gilt der Unfall als weggefallen'],
 'Es genügt nicht, nur eine alternative Ursache als möglich zu bezeichnen.',R+'Kap. 4.6 (S. 17)');

add('Endzustand UVG','A+','Was bedeutet «namhafte Besserung» beim Endzustand nach UVG?',
 ['Vor allem eine erhebliche Verbesserung der Arbeitsfähigkeit; geringe symptomatische Veränderungen reichen nicht',
  'Jede subjektive Beschwerdelinderung',
  'Eine vollständige Heilung',
  'Eine Verbesserung des Röntgenbefunds'],
 'Der Rentenanspruch entsteht grundsätzlich, wenn von der Fortsetzung der Behandlung keine namhafte Besserung mehr erwartet werden kann und IV-Eingliederungsmassnahmen abgeschlossen sind. Die Gutachterin beschreibt Option, Nutzen, Wahrscheinlichkeit, Risiken und Zeithorizont; den Fallabschluss stellt der Versicherer fest.',R+'Kap. 4.8 (S. 17)');

add('Organizität','K','Organizität und Grenzen der medizinischen Aussage – bewerten Sie:',
 [['Organisch objektiv nachweisbare Befunde sind reproduzierbar und weitgehend unabhängig von der untersuchten/untersuchenden Person apparativ fassbar.',true],
  ['Organisch nicht objektiv ausgewiesene Beschwerden sind per Definition nicht real.',false],
  ['Im Privat- und Haftpflichtrecht sind bildgebend nachweisbare Befunde nicht generell Voraussetzung langfristiger Leistungen.',true],
  ['Welche adäquanzrechtlichen Kriterien im UVG gelten, entscheidet die Gutachterin.',false]],
 'Nicht objektivierbare Beschwerden können real und medizinisch relevant sein. Das anwendbare Rechtsgebiet muss ausdrücklich geklärt werden; die adäquanzrechtlichen Kriterien bestimmt das Recht.',R+'Kap. 4.7 (S. 17)');

/* ---- Kap. 5: Arbeitsfähigkeit ---- */
add('Arbeitsfähigkeit','A+','Wie ist Arbeitsunfähigkeit nach Art. 6 ATSG definiert?',
 ['Durch Beeinträchtigung der Gesundheit bedingte volle oder teilweise Unfähigkeit, im bisherigen Beruf oder Aufgabenbereich zumutbare Arbeit zu leisten; bei langer Dauer wird auch eine zumutbare andere Tätigkeit berücksichtigt',
  'Verlust der Erwerbsmöglichkeiten auf dem ausgeglichenen Arbeitsmarkt nach zumutbarer Behandlung und Eingliederung',
  'Voraussichtlich bleibende oder längere Zeit dauernde Erwerbsunfähigkeit',
  'Beeinträchtigung der körperlichen Integrität, die voraussichtlich dauernd ist'],
 'Zweite Antwort = Erwerbsunfähigkeit (Art. 7 ATSG), dritte = Invalidität (Art. 8 ATSG), vierte = Integritätsschaden.',R+'Kap. 5.1, 6.1–6.2');

add('Arbeitsfähigkeit','A+','Eine Person ist an einem üblichen 8-Stunden-Tag 6 Stunden präsent und leistet in dieser Zeit 80 % der üblichen Leistung. Wie hoch ist die quantitative Arbeitsfähigkeit (bezogen auf ein 100-%-Pensum)?',
 ['60 %','75 %','80 %','86 %'],
 'Präsenzzeit 6/8 = 0,75 × Rendement 0,80 = 0,60 → 60 %. Präsenzzeit und Rendement werden multipliziert; Pausen dürfen nicht doppelt abgezogen werden.',R+'Kap. 5.4 (S. 18–19)');

add('Arbeitsfähigkeit','A+','Eine Person ist an einem üblichen 8-Stunden-Tag 5 Stunden präsent und leistet in dieser Zeit 90 %. Wie hoch ist die quantitative Arbeitsfähigkeit?',
 ['56 % (gerundet)','62,5 %','70 %','90 %'],
 '5/8 = 0,625 × 0,90 = 0,5625 → rund 56 %.',R+'Kap. 5.4, Selbsttest Kap. 5 (S. 19–20)');

add('Arbeitsfähigkeit','K','Quantitative und qualitative Arbeitsfähigkeit – bewerten Sie:',
 [['Quantitative Arbeitsfähigkeit = zumutbare Präsenzzeit × zumutbares Rendement.',true],
  ['«80 % Leistungsfähigkeit» ist eindeutig, ohne zu erläutern, ob Pensum, Rendement oder das Produkt gemeint ist.',false],
  ['Präsenzzeit, Rendement und qualitative Einschränkungen sind drei verschiedene Ebenen.',true],
  ['Der SIM-Leitfaden verlangt die Prozentangabe bezogen auf ein 100-%-Pensum.',true]],
 'Das Schema (Präsenzzeit × Rendement, bezogen auf ein 100-%-Pensum) ist laut Repetitorium ein zentraler Prüfungsanker.',R+'Kap. 5.4 + Ergänzung 2026 (S. 18–20)');

add('Arbeitsfähigkeit','A-','Welche Aussage zur angestammten und angepassten Tätigkeit ist FALSCH?',
 ['Die Gutachterin muss eine konkrete offene Stelle benennen',
  'Für die angestammte Tätigkeit braucht es ein realistisches Anforderungsprofil (Arbeitszeit, Belastungen, Verantwortung, Schichtsystem, Pausen etc.)',
  'Die Berufsbezeichnung allein genügt für eine präzise Beurteilung nicht',
  'Eine angepasste Tätigkeit muss dem individuellen Zumutbarkeitsprofil entsprechen und auf dem ausgeglichenen ersten Arbeitsmarkt realistisch sein'],
 'Die Gutachterin beschreibt das Profil und muss keine konkrete Stelle suchen. Die rechtliche Verwertbarkeit beurteilt der Rechtsanwender.',R+'Kap. 5.1, 5.5 (S. 18–19)');

add('Arbeitsfähigkeit','A+','Was unterscheidet «Capacity» von «Performance»?',
 ['Capacity = unter standardisierten Bedingungen theoretisch mögliches Leistungsvermögen; Performance = tatsächliche Umsetzung im realen Alltag und Arbeitsumfeld',
  'Capacity = tatsächliche Leistung im Alltag; Performance = Leistung im Test',
  'Capacity = quantitatives, Performance = qualitatives Leistungsprofil',
  'Capacity = Präsenzzeit, Performance = Rendement'],
 'Eine kurze klinische Untersuchung bildet Capacity nur ausschnittsweise ab; für die Gesamtbeurteilung sind Längsschnitt, Tagesablauf, Arbeitsversuche, berufliche Abklärungen und Kontextfaktoren einzubeziehen.',R+'Kap. 5.6 (S. 19)');

add('Arbeitsfähigkeit','A+','Welche Aussage zur Evaluation der funktionellen Leistungsfähigkeit (EFL) ist zutreffend?',
 ['Die Ergebnisse dürfen nicht unkommentiert übernommen werden; die ärztliche Fachperson integriert sie in das medizinische Gesamtbild',
  'Die EFL ersetzt die ärztliche Beurteilung der Arbeitsfähigkeit',
  'Die EFL ist bei fehlender Kooperation besonders aussagekräftig',
  'Die EFL ist bei jeder Gutachtensfrage zwingend'],
 'EFL umfasst Befragung, problemorientierte Untersuchung, standardisierte arbeitsbezogene Tests und Beobachtung von Einsatzbereitschaft und Konsistenz. Grenzen: ungenügende Verständigung, fehlende Kooperation, unklare Fragestellung, Sicherheitsrisiken.',R+'Kap. 5.7 (S. 19)');

/* ---- Kap. 6 (Anfang): Erwerbsunfähigkeit / Invalidität ---- */
add('Erwerbsunfähigkeit & Invalidität','A+','Wie ist Invalidität nach Art. 8 ATSG zu verstehen?',
 ['Voraussichtlich bleibende oder längere Zeit dauernde ganze oder teilweise Erwerbsunfähigkeit',
  'Synonym für Krankheit oder Diagnose',
  'Synonym für Arbeitsunfähigkeit',
  'Synonym für Integritätsschaden'],
 'Invalidität ist kein Synonym für Krankheit, Diagnose, Arbeitsunfähigkeit oder Integritätsschaden.',R+'Kap. 6.2 (S. 21)');

add('Erwerbsunfähigkeit & Invalidität','A+','Was gilt für die Erwerbsunfähigkeit nach Art. 7 ATSG?',
 ['Zu berücksichtigen sind ausschliesslich die Folgen der gesundheitlichen Beeinträchtigung; sie liegt nur vor, wenn sie objektiv nicht überwindbar ist',
  'Auch Folgen von Arbeitsmarktlage und fehlender Ausbildung zählen',
  'Die medizinische Fachperson bestimmt die wirtschaftliche Verwertbarkeit',
  'Sie wird vor jeder zumutbaren Behandlung und Eingliederung beurteilt'],
 'Erwerbsunfähigkeit = nach zumutbarer Behandlung und Eingliederung verbleibender Verlust der Erwerbsmöglichkeiten auf dem ausgeglichenen Arbeitsmarkt. Die wirtschaftliche Verwertbarkeit ist Sache der rechtsanwendenden Stelle.',R+'Kap. 6.1 (S. 21)');

/* ---- Kap. 6 (Fortsetzung) ---- */
add('Arbeitsmarkt','K','Ausgeglichener erster Arbeitsmarkt – bewerten Sie jede Aussage:',
 [['Er ist ein normatives, theoretisches Konstrukt, das ein dauerhaftes Gleichgewicht von Angebot und Nachfrage unterstellt.',true],
  ['Aktuell ausgeschriebene Stellen und die regionale Arbeitslosigkeit werden bei der Beurteilung des ausgeglichenen Arbeitsmarkts berücksichtigt.',false],
  ['Beurteilt wird die medizinisch mögliche Restarbeitsfähigkeit, nicht die individuelle Vermittlungschance.',true],
  ['Der zweite Arbeitsmarkt umfasst geschützte oder subventionierte Beschäftigung.',true]],
 'Konjunktur, regionale Arbeitslosigkeit und aktuell ausgeschriebene Stellen werden ausgeblendet. Merksatz: fiktiv, nicht lokal; ausgeglichen, nicht aktuell; vielfältig, aber nicht grenzenlos.',R+'Kap. 6.3 (S. 21)');

add('Arbeitsmarkt','A+','Ein Versicherter ist in schwerer Arbeit voll arbeitsunfähig, in leichter wechselbelastender Tätigkeit voll arbeitsfähig, findet aber regional keine Stelle. Wie lautet die medizinische Einschätzung?',
 ['Die Arbeitsfähigkeit in angepasster Tätigkeit beträgt medizinisch 100 %; die regionale Stellenlage ändert das nicht, die rechtliche Verwertbarkeit entscheiden IV-Stelle bzw. Gericht',
  'Die Arbeitsfähigkeit beträgt wegen der Stellenlosigkeit 0 %',
  'Die Arbeitsfähigkeit ist hälftig zu reduzieren (50 %)',
  'Die Gutachterin muss den regionalen Arbeitsmarkt abklären'],
 'Regionale Stellenlosigkeit ist nicht gleich medizinische Arbeitsunfähigkeit. Ist medizinisch nur ein geschützter Rahmen möglich, muss dies klar begründet werden.',R+'Kap. 6.7 (S. 22)');

add('Schadenminderung','K','Schadenminderung – bewerten Sie, ob die Aussage zur medizinischen Aufgabe gehört (richtig) oder nicht (falsch):',
 [['Mögliche Massnahmen benennen und Nutzen, Risiken, Erfolgsaussicht und Dauer beschreiben.',true],
  ['Entscheiden, ob eine Massnahme rechtlich verlangt werden darf.',false],
  ['Medizinische Kontraindikationen und Belastungen darlegen.',true],
  ['Festlegen, welche Sanktion bei Verweigerung folgt.',false]],
 'Ob eine Massnahme rechtlich verlangt werden darf und welche Sanktion folgt, entscheidet die rechtsanwendende Stelle. Die aktuelle Arbeitsfähigkeit wird nicht ohne Weiteres so eingeschätzt, als sei die Massnahme bereits erfolgreich durchgeführt.',R+'Kap. 6.4 (S. 21)');

add('IV-Leistungen','A+','Welche Aussage zur IV-Rente seit dem stufenlosen Rentensystem (2022) trifft zu?',
 ['Ab 40 % Invaliditätsgrad entsteht ein Teilrentenanspruch; ab 70 % grundsätzlich eine ganze Rente; dazwischen steigt der Rentenanteil stufenlos',
  'Ab 50 % besteht ein Anspruch auf eine Viertelsrente, ab 60 % auf eine halbe Rente',
  'Ab 40 % besteht ein Anspruch auf eine ganze Rente',
  'Ab 70 % besteht nur Anspruch auf eine halbe Rente'],
 'Voraussetzungen u. a.: Eingliederung nicht oder nicht ausreichend möglich, während eines Jahres durchschnittlich mindestens 40 % arbeitsunfähig, danach rentenbegründende Invalidität.',R+'Kap. 6.5 (S. 22)');

add('IV-Leistungen','K','IV-Leistungssystem – bewerten Sie jede Aussage:',
 [['Eine Meldung zur Früherfassung ist noch kein Leistungsantrag.',true],
  ['Frühintervention ist eine IV-Leistung, auch wenn noch keine Rente geprüft oder zugesprochen ist.',true],
  ['«IV-Leistung» ist gleichbedeutend mit «IV-Rente».',false],
  ['Die Hilflosenentschädigung knüpft an den Bedarf regelmässiger Hilfe Dritter oder persönlicher Überwachung an und ist dasselbe wie die Invalidenrente.',false]],
 'Frühintervention, Eingliederungsmassnahmen, Rente und Hilflosenentschädigung gehören alle zum IV-Leistungssystem. Hilflosenentschädigung ≠ Invalidenrente ≠ Arbeitsunfähigkeit.',R+'Kap. 6.5 (S. 22)');

add('Berufliche Eingliederung','A-','Welche Aussage zur beruflichen Eingliederung ist FALSCH?',
 ['Eine lange pauschale Vollarbeitsunfähigkeit rechtfertigt eine unbegründete Herabsetzung der medizinischen Einschränkungen',
  'Arbeitsplatznahe Informationen (Arbeitsbeschreibung, Arbeitsplatzabklärung, Arbeitsversuch, EFL) sind wertvoll',
  'Ergonomische Hilfsmittel, Aufgabenumverteilung und stufenweiser Belastungsaufbau können eine Teilarbeitsfähigkeit nutzbar machen',
  'Lange pauschale Vollarbeitsunfähigkeit kann Deconditioning und Arbeitsplatzverlust fördern'],
 'Das Risiko von Deconditioning rechtfertigt keine unbegründete Herabsetzung der Einschränkungen. Ziel ist eine frühzeitige, funktionell begründete und sicher umsetzbare Teilhabe.',R+'Kap. 6.6 (S. 22)');

/* ---- Kap. 7: Gutachterrolle ---- */
add('Rolle des Gutachters','A-','Was gehört NICHT zu den Aufgaben der medizinischen Begutachtung?',
 ['Die verbindliche Auferlegung einer Schadenminderungspflicht und die Festlegung des Invaliditätsgrades',
  'Eigene Anamnese und Untersuchung durchführen',
  'Arbeitsfähigkeit in bisheriger und angepasster Tätigkeit quantifizieren',
  'Grenzen des Fachgebiets und der Erkenntnismöglichkeiten offenlegen'],
 'Nicht Aufgabe sind Entscheid über den Rechtsanspruch, das Beweismass als Rechtsfrage, die adäquate Kausalität, der Invaliditätsgrad und die verbindliche Auferlegung der Schadenminderungspflicht. «Gutachterlich neutral bedeutet nicht meinungslos.»',R+'Kap. 7.1 (S. 24)');

add('Unabhängigkeit','K','Unabhängigkeit und Ausstand – bewerten Sie jede Aussage:',
 [['Schon der objektiv begründete Anschein der Befangenheit kann problematisch sein.',true],
  ['Eine frühere neutrale Begutachtung derselben Person ist automatisch ein Ausstandsgrund.',false],
  ['Ein eigenes wirtschaftliches Interesse am Ausgang ist ein typischer Ausstandsgrund.',true],
  ['Entscheidend ist allein das subjektive Gefühl einer Partei.',false]],
 'Massgebend ist, ob aus Sicht einer vernünftigen aussenstehenden Person Zweifel an der Unvoreingenommenheit entstehen können. Frühere Befassung ist offenzulegen und auf Festlegung zu prüfen, begründet aber nicht automatisch Ausstand; eine frühere therapeutische Beziehung kann problematischer sein.',R+'Kap. 7.2, 7.9 (S. 24, 26)');

add('Unabhängigkeit','A+','Eine Neurologin hat dieselbe versicherte Person vor drei Jahren unabhängig begutachtet; eine Partei verlangt allein deshalb ihren Ausstand. Was gilt?',
 ['Die frühere Begutachtung ist offenzulegen und auf mögliche Festlegung zu prüfen; ohne weitere objektive Umstände besteht kein automatischer Ausstandsgrund',
  'Ausstand ist zwingend',
  'Die Neurologin darf die Offenlegung unterlassen',
  'Es genügt, wenn die versicherte Person zustimmt'],
 'Anders wäre die Lage bei öffentlicher abwertender Äusserung über die Person oder eigenem wirtschaftlichem Interesse am Ergebnis.',R+'Kap. 7.9 (S. 26)');

add('Sprache & Haltung','K','Sprache und Haltung im Gutachten – bewerten Sie jede Aussage:',
 [['Moralisierende Etiketten wie «Simulant» oder «hysterisch» sind zu vermeiden.',true],
  ['Beobachtungen und Schlussfolgerungen werden getrennt dargestellt.',true],
  ['Widersprüchliche Angaben beweisen eine bewusste Täuschung.',false],
  ['Erinnerungslücken, Missverständnisse, kulturelle Unterschiede, Angst, Schmerzverhalten, kognitive Störungen und bewusste Verzerrung sind unterschiedliche Erklärungen.',true]],
 'Merksatz: Beschreiben vor bewerten, erklären vor etikettieren, begründen vor behaupten.',R+'Kap. 7.4 (S. 25)');

add('Tonaufnahme & Dolmetscher','K','Tonaufnahme und Dolmetschende – bewerten Sie jede Aussage:',
 [['Im Sozialversicherungsverfahren wird das Interview grundsätzlich in Ton aufgezeichnet, sofern die versicherte Person nicht verzichtet.',true],
  ['Aufgezeichnet wird auch automatisch die körperliche Untersuchung.',false],
  ['Der Verzicht auf die Aufnahme wird gegenüber dem Versicherungsträger erklärt; die Gutachterin soll nicht informell darauf hinwirken.',true],
  ['Familienangehörige eignen sich in der Regel gut als Dolmetschende.',false]],
 'Familienangehörige sind wegen Loyalitätskonflikten, Filterung und fehlender Fachterminologie in der Regel ungeeignet; einzusetzen ist eine professionelle neutrale Dolmetschperson. Die Aufnahme ersetzt keine saubere schriftliche Dokumentation.',R+'Kap. 7.6–7.7 (S. 25)');

add('Datenschutz','A+','Welcher Grundsatz gilt für Erhebung und Weitergabe von Informationen im Gutachten?',
 ['Verhältnismässigkeit: Nur für die Fragestellung erforderliche Informationen werden erhoben und weitergegeben',
  'Alle verfügbaren Informationen werden aufgenommen, um vollständig zu sein',
  'Fremdanamnestische Angaben ohne Auftragsbezug gehören in den Bericht',
  'Zufallsbefunde werden grundsätzlich nicht erwähnt'],
 'Zu Beginn sind Rolle, Auftrag, Ablauf, fehlendes therapeutisches Verhältnis, Berichtsadressat und Grenzen der Vertraulichkeit zu erklären. Zufallsbefunde mit gesundheitlicher Dringlichkeit verlangen ein medizinisch verantwortliches Vorgehen.',R+'Kap. 7.5 (S. 25)');

add('Konsilium','A+','Was kennzeichnet das gemeinschaftliche Gutachter-Konsilium?',
 ['Medizinische Fragen werden mit den Parteien am runden Tisch erörtert; die Ergebnisse werden grundsätzlich mündlich vorgestellt, ein schriftliches Gutachten ist nicht zwingend',
  'Es ist ein Vergleich über medizinische Tatsachen',
  'Es braucht zwingend ein schriftliches Gutachten',
  'Die Parteien sind nicht anwesend'],
 'Der Konsens muss fachlich vertretbar bleiben; verlangt sind klare Rollen, transparente Kommunikation und Offenheit für fachliche Argumente.',R+'Kap. 7.8 (S. 26)');

/* ---- Kap. 8: Aufbau & Qualität ---- */
add('Gutachtenaufbau','A+','Welche Kette beschreibt den «roten Faden» eines überzeugenden Gutachtens?',
 ['Auftrag → Akten und Anamnese → Befunde → Diagnosen → Funktionen → Konsistenz → Arbeitsfähigkeit/Kausalität → Prognose → Antworten',
  'Auftrag → Diagnose → Prozentzahl → Antworten',
  'Akten → Kausalität → Diagnose → Befunde',
  'Befunde → Antworten → Auftrag → Prognose'],
 'Jeder Übergang muss begründet sein. Häufige Qualitätsmängel sind Sprünge: Diagnose → Prozentzahl, Bildbefund → Kausalität, Inkonsistenz → Simulation.',R+'Kap. 8.1 (S. 27)');

add('Gutachtenaufbau','A+','Der Auftrag lautet: «Ist die Person invalid?» Wie geht die Gutachterin sachgerecht vor?',
 ['Sie operationalisiert medizinisch (Funktionen, Leistungsprofil, Arbeitsfähigkeit) oder klärt beim Auftraggeber nach',
  'Sie beantwortet mit Ja oder Nein',
  'Sie berechnet den Invaliditätsgrad',
  'Sie gibt den Auftrag kommentarlos zurück'],
 'Rechtlich formulierte Fragen werden nicht eigenmächtig umgedeutet, sondern medizinisch operationalisiert oder beim Auftraggeber geklärt. Analog: «Ist der Unfall adäquat kausal?» → Ist ein natürlicher Kausalzusammenhang überwiegend wahrscheinlich?',R+'Kap. 8.2 (S. 27)');

add('Gutachtenaufbau','K','Aktenanalyse und Anamnese – bewerten Sie jede Aussage:',
 [['Die Aktenzusammenfassung soll selektiv, chronologisch und fragestellungsbezogen sein – keine unkommentierte Abschrift.',true],
  ['Eine fehlende Akte darf durch Spekulation ersetzt werden.',false],
  ['Widersprüche in den Akten werden sichtbar gemacht und später gewürdigt.',true],
  ['Die Alltagsanamnese ist ein Detektivinstrument zur Überführung.',false]],
 'Relevante Lücken (Bildgebung, OP-Bericht, Arbeitsplatzbeschreibung) werden benannt. Die Alltagsanamnese dient dem Funktionsbild und der Prüfung, ob berichtete Einschränkungen in verschiedenen Lebensbereichen nachvollziehbar sind.',R+'Kap. 8.3–8.4 (S. 27)');

add('Diagnosen & Funktion','A+','Wie unterscheidet sich eine Diagnoseauflistung von einer Leistungsbeurteilung?',
 ['Eine Auflistung ohne funktionelle Übersetzung beantwortet die Versicherungsfrage nicht; nicht jede Diagnose ist leistungsrelevant',
  'Jede Diagnose ist leistungsrelevant',
  'Die Auflistung genügt, wenn sie nach ICD codiert ist',
  'Die Funktion ergibt sich automatisch aus der Diagnose'],
 'Zu jeder Diagnose: gesichert/wahrscheinlich/differentialdiagnostisch? Mit oder ohne Auswirkung auf die Arbeitsfähigkeit? Welche Funktionen betroffen? Welche Befunde dafür/dagegen? Ist der Verlauf plausibel?',R+'Kap. 8.6 (S. 28)');

add('Konsistenz & Plausibilität','K','Konsistenz und Plausibilität – bewerten Sie jede Aussage:',
 [['Konsistenz bedeutet nicht Beschwerdefreiheit.',true],
  ['Inkonsistenz bedeutet automatisch bewusste Täuschung.',false],
  ['Alternative Erklärungen wie Schmerzfluktuation, Ermüdung, Angst, kognitive Einschränkung, Missverständnis oder Medikamente sind einzubeziehen.',true],
  ['Auffällige Validitätszeichen liefern automatisch eine ätiologische Diagnose.',false]],
 'Validität ist Voraussetzung für Interpretation; auffällige Validitätszeichen begrenzen die Aussagekraft, ersetzen aber keine ätiologische Diagnose. Erst nach Prüfung alternativer Erklärungen ist eine zurückhaltende Schlussfolgerung möglich.',R+'Kap. 8.8 (S. 28)');

add('Prognose & Fragenbeantwortung','K','Prognose und Beantwortung der Fragen – bewerten Sie jede Aussage:',
 [['Eine Prognose braucht Zeitraum, Ausgangslage und Begründung.',true],
  ['«Therapie optimieren» genügt als Massnahmenempfehlung.',false],
  ['Jede Frage wird einzeln, eindeutig und mit Verweis auf die Begründung beantwortet; nicht beantwortbare Fragen werden mit Grund bezeichnet.',true],
  ['Widersprüche zwischen Text, Tabelle und Schlussantwort sind unproblematisch.',false]],
 'Bei Massnahmen sind Art, Ziel, Zumutbarkeit, Risiken, Erfolgsaussicht und Zeitrahmen anzugeben. Prozentangaben müssen zur beschriebenen Funktion passen.',R+'Kap. 8.9–8.10 (S. 28–29)');

add('Interdisziplinäre Begutachtung','A+','Zwei Teilgutachten ergeben je 30 % Arbeitsunfähigkeit aus unterschiedlichen Fachgebieten. Wie ist die Gesamtarbeitsunfähigkeit zu bestimmen?',
 ['Durch gemeinsame integrative Würdigung im Konsens, ohne mechanische Addition der Prozentwerte',
  'Durch Addition: 60 %',
  'Durch den höheren der beiden Werte',
  'Durch Mittelwert: 30 %'],
 'Mehrere Teilgutachten ergeben noch kein interdisziplinäres Gutachten. Die federführende Person muss nicht die «wichtigste» Disziplin vertreten und braucht nicht allein wegen der Koordinationsrolle eine versicherungsmedizinische Zusatzqualifikation.',R+'Kap. 8.11 (S. 29)');

add('Qualität des Gutachtens','A+','Was verlangt der SIM-Leitfaden 2026 bei divergierenden Einschätzungen?',
 ['Die abweichende Meinung ist ausdrücklich zu diskutieren; zudem ist der vollständige Begründungsweg von Befund und Diagnose bis zu Funktion, Leistungsprofil und Arbeitsfähigkeit darzulegen',
  'Die abweichende Meinung wird nicht erwähnt',
  'Es wird einfach der Mittelwert gebildet',
  'Es entscheidet die Gutachterin ohne Begründung'],
 'Die Qualitätsprüfung ist mit den EKQMB-Kriterien strukturiert. Sechs Prüffelder: formale Vollständigkeit/Fragestellung, Informationsgrundlage, Untersuchung/Diagnostik, medizinische Argumentation, funktionell begründete Leistungsbeurteilung, klare/konsistente/adressatengerechte Antworten.',R+'Kap. 8.12 (S. 29)');

add('Qualität des Gutachtens','A+','Ein orthopädisches Gutachten nennt eine Gonarthrose, übernimmt 50 % Arbeitsunfähigkeit aus einem Vorbericht und beantwortet alle Fragen damit. Was ist der zentrale Mangel?',
 ['Die Arbeitsfähigkeitsbeurteilung ist nicht nachvollziehbar: es fehlen Tätigkeitsanforderungen, Belastbarkeitsprüfung, Präsenz/Rendement und Würdigung abweichender Berichte',
  'Die Diagnose Gonarthrose ist zwingend falsch',
  'Vorberichte dürfen nie erwähnt werden',
  'Der Mangel liegt allein in der Länge des Gutachtens'],
 'Die Diagnose kann korrekt sein; erforderlich wären Funktionsbefunde, Belastungsprofil, Präsenz und Rendement sowie die Würdigung abweichender Berichte.',R+'Kap. 8.13 (S. 30)');

/* ---- Kap. 9: Versicherungszweige ---- */
add('Unfallversicherung','K','Unfallbegriff und Integritätsentschädigung – bewerten Sie jede Aussage:',
 [['Die Elemente des Unfallbegriffs sind kumulativ: Einwirkung auf den Körper, äusserer Faktor, Ungewöhnlichkeit, Plötzlichkeit, Unbeabsichtigtheit, Gesundheitsschädigung oder Tod.',true],
  ['Die blosse Diagnose einer Sehnenläsion oder Meniskusschädigung entscheidet den Anspruch bei Listenverletzungen.',false],
  ['Der Integritätsschaden wird medizinisch anhand von Befunden, Funktionsverlusten und Tabellenwerten eingeschätzt.',true],
  ['Erwerbseinbusse, Beruf, Alter und Lebensumstände bestimmen die Integritätsentschädigung.',false]],
 'Merksatz: Integritätsschaden ist nicht Erwerbsschaden. Listenverletzungen werden unfallähnlich behandelt, sofern sie nicht vorwiegend auf Abnützung oder Erkrankung zurückzuführen sind – es braucht die gewichtete Beurteilung von Trauma, Vorschäden, Morphologie, Verlauf und Alternativerklärungen.',R+'Kap. 9.3 (S. 31–32)');

add('Unfallversicherung','A+','Was gilt bei Rückfall und Spätfolge nach einem Unfall, je grösser der zeitliche Abstand?',
 ['Der natürliche Kausalzusammenhang muss erneut überwiegend wahrscheinlich begründet werden; mit grösserem Abstand steigen die Anforderungen an eine schlüssige Brücke im Verlauf',
  'Der Zusammenhang wird automatisch vermutet',
  'Die Anforderungen sinken mit dem zeitlichen Abstand',
  'Der Zusammenhang ist rechtlich irrelevant'],
 'Ein Rückfall ist das Wiederaufflammen einer vermeintlich geheilten Schädigung; eine Spätfolge entwickelt sich erst nach längerer Zeit.',R+'Kap. 9.3 (S. 31)');

add('Krankentaggeld','A+','Welche Aussage zur Arbeitsunfähigkeit im Krankentaggeld ist richtig?',
 ['Arbeitsunfähigkeit im angestammten Beruf bedeutet nicht automatisch Arbeitsunfähigkeit in jeder Tätigkeit; ein Berufswechsel ist nicht allein medizinisch anzuordnen',
  'Arbeitsunfähigkeit im angestammten Beruf bedeutet immer Arbeitsunfähigkeit in jeder Tätigkeit',
  'Vertragsdauer und Wartefrist sind medizinische Fragen',
  'Der zumutbare Berufswechsel ist medizinisch zwingend anzuordnen'],
 'Vertragsdauer, Wartefrist und Leistungsumfang sind Rechts- und Vertragsfragen. Medizinisch zentral: Anforderungen der bisherigen Arbeit, Präsenzzeit/Rendement, Prognose/Behandlung, Zeitpunkt möglicher Steigerung, Leistungsprofil für andere Tätigkeiten.',R+'Kap. 9.2 (S. 31)');

add('Haftpflichtrecht','K','Haftpflichtrecht – bewerten Sie jede Aussage:',
 [['Natürliche und adäquate Kausalität, Schaden und Haftungsgrund werden getrennt geprüft.',true],
  ['Die natürliche Kausalität folgt auch hier dem Beweismass der überwiegenden Wahrscheinlichkeit.',true],
  ['Eine blosse Möglichkeit genügt für die natürliche Kausalität.',false],
  ['Die normative Schadenszurechnung beurteilt die medizinische Gutachterin.',false]],
 'Medizinisch interessieren Gesundheitszustand ohne Ereignis, tatsächlicher Verlauf mit Ereignis, unfallbedingter Anteil, Vorschaden, Prognose und zumutbare Behandlung. Adäquanz und normative Zurechnung bleiben rechtlich.',R+'Kap. 9.5 (S. 32)');

add('Observation','A+','Wie ist Observationsmaterial (Video) gutachterlich zu verwenden?',
 ['Als Puzzleteil, das mit Untersuchung, Anamnese und Arbeitsplatzanforderungen zu integrieren ist; kurze Sequenzen erlauben nicht ohne Weiteres Aussagen zu Dauerbelastbarkeit',
  'Als Beweis für volle Arbeitsfähigkeit',
  'Als Beweis für Simulation bei jeder Abweichung',
  'Es ist als unverwertbar zu ignorieren'],
 'Geprüft werden Identität/Zeitraum/Kontext, beobachtete Aktivität vs. tatsächliche Anforderungen, Repräsentativität und Dauer, Übereinstimmung mit berichteten Funktionen, Alternativerklärungen, Einfluss auf die bisherige Beurteilung. Unzulässig: «beobachtete Aktivität = volle Arbeitsfähigkeit» oder «Abweichung = Simulation».',R+'Kap. 9.6–9.7 (S. 32)');

/* ---- Kap. 10: Neurologie / Neuropsychologie (Fachfragen) ---- */
add('Neurologie & Neuropsychologie','A+','Wie wird ein migräneartiger Kopfschmerz nach einem Kopftrauma nach ICHD korrekt klassifiziert?',
 ['Als akuter oder persistierender (sekundärer) posttraumatischer Kopfschmerz mit Beschreibung des migräneartigen Phänotyps',
  'Als «posttraumatische Migräne», eine eigenständige ICHD-Diagnose',
  'Immer als primäre Migräne',
  'Immer als Spannungskopfschmerz'],
 '«Posttraumatische Migräne» ist keine eigenständige ICHD-Diagnose. Entscheidend sind zeitliche Kriterien, vorbestehende Kopfschmerzen, Verlauf, Begleitsymptome und Alternativerklärungen. Beim Medikamentenübergebrauch sind Medikamententage, Wirkstoffklassen, Dosis und Dauer zu erheben.',R+'Kap. 10.2 (S. 34)','neuro');

add('Neurologie & Neuropsychologie','K','Mildes Schädel-Hirn-Trauma – bewerten Sie jede Aussage:',
 [['Persistierende Beschwerden sind möglich, aber nicht automatisch Beweis einer fortbestehenden strukturellen Hirnschädigung.',true],
  ['Schlaf, Schmerz, psychische Faktoren, Medikamente, Dekonditionierung und Kontextfaktoren sind als Alternativerklärungen zu berücksichtigen.',true],
  ['Jede spätere unspezifische Beschwerde ist monokausal dem Ereignis zuzuschreiben.',false],
  ['Beschwerden dürfen bagatellisiert werden, wenn die Bildgebung unauffällig ist.',false]],
 'Die Beurteilung darf weder Beschwerden bagatellisieren noch jede spätere Unspezifität monokausal dem Ereignis zuschreiben. Zu rekonstruieren sind Akutkriterien, Bewusstseinsstörung, Amnesie, neurologische Befunde, Bildgebung und zeitnaher Verlauf.',R+'Kap. 10.3 (S. 34)','neuro');

add('Neurologie & Neuropsychologie','A+','Bei einer Person mit MS ist der neurologische Status nur leicht auffällig; nach zwei Stunden anspruchsvoller Bildschirmarbeit sinken Tempo und Fehlerkontrolle deutlich, nach Pause bessert sich die Leistung. Welche Schlussfolgerung ist richtig?',
 ['Eine pauschale Vollzeitfähigkeit allein aus dem Status wäre unzureichend; zu prüfen sind Präsenz, Rendement, Tagesverlauf, Sekundärursachen und ein angepasstes Belastungsprofil',
  'Aus dem leichten Status folgt zwingend volle Arbeitsfähigkeit',
  'Fatigue ist bei MS nie leistungsrelevant',
  'Es ist die Diagnose zu bezweifeln, weil Status und Beschwerden nicht übereinstimmen'],
 'Neurologischer Status und Bildgebung bilden Fatigue funktionell nicht vollständig ab. Zu prüfen sind primäre vs. sekundäre Ursachen (Schlaf, Depression, Schmerz, Medikamente), Tagesprofil, kognitive/motorische Ermüdbarkeit, Belastungsversuche. Spezialisierte arbeitsbezogene oder neuropsychologische Abklärung kann hilfreicher sein als ein unspezifischer Einzeltest.',R+'Kap. 10.4, 10.8 (S. 34–35)','neuro');

add('Neurologie & Neuropsychologie','A+','Welche drei Ebenen folgt die Interpretation einer neuropsychologischen Untersuchung?',
 ['Erstens: Ist das Ergebnis valide und interpretierbar? Zweitens: Welches Funktionsprofil? Drittens: Welche Ätiologie und funktionelle Bedeutung sind im Gesamtkontext plausibel?',
  'Erstens Ätiologie, zweitens Profil, drittens Validität',
  'Erstens Profil, zweitens Arbeitsfähigkeit, drittens Kausalität',
  'Erstens Testwert, zweitens Diagnose, drittens Rente'],
 'Merksatz: Validität vor Profil, Profil vor Ätiologie, Ätiologie vor Funktionsfolgen. Ein einzelner unterdurchschnittlicher Testwert beweist keine Störung; in grossen Testbatterien treten auch bei Gesunden einzelne niedrige Werte auf.',R+'Kap. 10.5–10.6 (S. 34–35)','neuropsy');

add('Neurologie & Neuropsychologie','K','Ungültige Testleistungen (Performance-/Symptomvalidität) – welche Schlüsse sind zulässig (richtig) bzw. unzulässig (falsch)?',
 [['Die betroffenen Testwerte sind nicht als verlässliche Leistungsgrenze interpretierbar.',true],
  ['Eine genaue Quantifizierung kognitiver Defizite kann unmöglich sein.',true],
  ['Ungültige Testleistungen beweisen automatisch bewusste Täuschung.',false],
  ['Ungültige Testleistungen bedeuten automatisch volle Arbeitsfähigkeit.',false]],
 'Sie bedeuten auch nicht automatisch «keine Erkrankung». Die Ursache der Invalidität der Leistung bleibt gesondert zu beurteilen. PVT prüfen, ob die Leistung als gültige Schätzung der Fähigkeiten interpretierbar ist; SVT die Güte berichteter Symptome – über mehrere Indikatoren und den klinischen Kontext.',R+'Kap. 10.6 (S. 35)','neuropsy');

add('Neurologie & Neuropsychologie','A+','Welche Aussage zu arbeitsbezogenen kognitiven Anforderungen ist zutreffend?',
 ['Büroarbeit ist nicht automatisch «leicht»; sie kann hohe kognitive Anforderungen (Informationsmenge, Ablenkung, Zeitdruck, Multitasking) stellen',
  'Büroarbeit ist immer eine leichte Tätigkeit',
  'Kognitive Einschränkungen spielen für Büroarbeit keine Rolle',
  'Die Quantifizierung der Arbeitsfähigkeit braucht keine konkreten Funktionen'],
 'Die Quantifizierung muss durch konkrete Funktionen, Kompensationsmöglichkeiten und Belastungsdauer begründet sein. Hilfen: strukturierte Abläufe, reduzierte Unterbrechungen, Checklisten, zusätzliche Kontrollschritte, Pausen.',R+'Kap. 10.7 (S. 35)','neuropsy');

/* ---- Kap. 11: Bewegungsapparat / Rheuma / Hand / EFL (Fachfragen) ---- */
add('Bewegungsapparat & Rheumatologie','A+','Warum beweist ein degenerativer Bildbefund keine Arbeitsunfähigkeit?',
 ['Degenerative Befunde sind häufig und nehmen mit dem Alter zu; entscheidend ist die Übereinstimmung von Klinik, Morphologie, Verlauf und funktioneller Belastbarkeit',
  'Degenerative Befunde sind immer irrelevant',
  'Bildbefunde dürfen nie beschrieben werden',
  'Weil Bildbefunde nur bei Unfällen erhoben werden'],
 'Argumentationskette: Strukturbefund + klinisches Korrelat + nachvollziehbarer Verlauf → funktionelle Einschränkung → arbeitsbezogene Konsequenz. Beispiel: ausgeprägte lumbale Degeneration bei freier Gehfähigkeit schliesst zwar schwere repetitive Hebearbeit aus, begründet aber keine Arbeitsunfähigkeit für leichte wechselbelastende Tätigkeit.',R+'Kap. 11.1, 11.7 (S. 36–37)','rheuma');

add('Bewegungsapparat & Rheumatologie','K','Rheumatologische Laborwerte – bewerten Sie jede Aussage:',
 [['CRP ist ein unspezifischer Entzündungsmarker und für sich kein «Krankheitsschaden».',true],
  ['Negative Rheumafaktor- und Anti-CCP-Werte schliessen eine rheumatoide Arthritis sicher aus.',false],
  ['Ein normaler Entzündungswert schliesst nicht jede entzündlich-rheumatische Erkrankung aus.',true],
  ['Eine routinemässige Laboruntersuchung ist in jeder gutachterlichen Konstellation zwingend.',false]],
 'Laborwerte unterstützen Diagnose und Prognose, ersetzen aber die klinische Beurteilung nicht. Umfang richtet sich nach Fragestellung, Klinik, Vorbefunden und differentialdiagnostischem Bedarf. Ein auffälliger Laborwert ist weder automatisch Diagnose noch Funktionsverlust.',R+'Kap. 11.2 (S. 36)','rheuma');

add('Bewegungsapparat & Rheumatologie','A+','Welche Aussage zur Diagnose CRPS trifft zu?',
 ['Sie wird anhand der Budapest-Kriterien gestellt: Symptome und Zeichen aus sensorischen, vasomotorischen, sudomotorisch/ödematösen und motorisch/trophischen Kategorien, ohne bessere Erklärung',
  'Sie darf allein aus starken Schmerzen gestellt werden',
  'Sie darf allein aus einer früheren Verdachtsdiagnose übernommen werden',
  'Bei gesichertem CRPS ergibt sich die Arbeitsfähigkeit automatisch'],
 'Verlauf, Behandlung und aktuelle Zeichen sind zu dokumentieren. Auch bei gesichertem CRPS bleibt die funktionelle Arbeitsbeurteilung ein eigener Schritt.',R+'Kap. 11.4 (S. 36)','rheuma');

add('Bewegungsapparat & Rheumatologie','K','Evaluation der funktionellen Leistungsfähigkeit (EFL) – bewerten Sie jede Aussage:',
 [['Sie kann besonders hilfreich sein, wenn klinischer Befund und behauptete Leistungsgrenze auseinanderliegen.',true],
  ['Sie kann die medizinische Kausalitätsbeurteilung ersetzen.',false],
  ['Testresultate sind nur im Rahmen von Kooperation, Konsistenz, Sicherheit und Repräsentativität interpretierbar.',true],
  ['Sie ersetzt die Gesamtwürdigung von Akten und Verlauf.',false]],
 'Die EFL ist ein Baustein und ersetzt weder medizinische Diagnose, Kausalitätsbeurteilung, Gesamtwürdigung noch den rechtlichen Entscheid. Sie soll mit Arbeitsplatzanforderungen verknüpft werden.',R+'Kap. 11.5 (S. 36); Lösungen Kap. 12','ortho');

add('Bewegungsapparat & Rheumatologie','A+','Wie wird aus dem Begriff «leichte Arbeit» ein brauchbares Belastungsprofil?',
 ['Durch konkrete Angaben: maximale/wiederholte Lasten, Häufigkeit und Dauer von Positionen, Wechselbedarf und Pausen, Bewegungsrichtungen/Reichweiten, Handkraft/Präzision, Umgebung und Sicherheit, ergonomische Anpassungen',
  'Durch Ersetzen von «leicht» durch «schonend»',
  'Durch Verweis auf den ICD-Code',
  'Durch die Empfehlung «Belastung vermeiden»'],
 'Ein gutes Belastungsprofil vermeidet unbestimmte Begriffe wie «leicht» oder «schonend».',R+'Kap. 11.6 (S. 37)','ortho');

add('Bewegungsapparat & Rheumatologie','K','Beschwerden der Hand – bewerten Sie jede Aussage:',
 [['Bei Handverletzungen sind Mechanismus, Erstbefund, Bildgebung, Operationsbefund, Heilverlauf und aktuelle Funktion zu verbinden.',true],
  ['Die Diagnose wird vollständig bezeichnet, einschliesslich Seite, Struktur, Lokalisation und Zustand nach Behandlung.',true],
  ['Für die Arbeit sind Werkzeuggebrauch, Lasten, Präzision, Taktfrequenz, Vibration, Temperatur und Handschutz unwichtig.',false],
  ['Relevante Funktionen sind u. a. Greifformen, Kraft, Feinmotorik, Sensibilität, Beweglichkeit, Schmerz bei Wiederholung und beidhändige Koordination.',true]],
 'Die genannten arbeitsbezogenen Faktoren sind gerade wichtig.',R+'Kap. 11.3 (S. 36)','ortho');

/* ---- Kap. 12: Prüfungstraining ---- */
add('Prüfungslogik','A+','Wie lautet der erste Schritt der «Fünf-Fragen-Methode» bei jeder Prüfungsfrage?',
 ['Welcher Kontext? (IV, UV, KTG, Haftpflicht oder Gutachtenverfahren)',
  'Wie hoch ist der Invaliditätsgrad?',
  'Gibt es ein Gutachten?',
  'Welche Therapie ist indiziert?'],
 'Die fünf Fragen: Kontext – Zuständigkeit (Medizin oder Recht) – Bezug (Diagnose, Funktion, Tätigkeit, Kausalität, Leistung) – Massstab (aktueller Zustand, überwiegende Wahrscheinlichkeit, ausgeglichener Arbeitsmarkt) – Falle.',R+'Kap. 12.1 (S. 38)');

add('Prüfungslogik','A+','Eine Person kann an 5 Tagen je 4 Stunden arbeiten und benötigt in dieser Zeit zusätzliche Pausen von insgesamt 25 %; sonst normale Qualität. Wie hoch ist die Arbeitsfähigkeit bezogen auf eine 8-Stunden-Vollzeitstelle?',
 ['rund 38 %','50 %','75 %','25 %'],
 'Präsenz 4/8 = 0,5 × Rendement 0,75 = 0,375 → rund 38 %.',R+'Kap. 12.4 Fall B und Lösung (S. 39, 42)');

add('Prüfungslogik','K','Wahr oder falsch (aus dem Schnellrepetitorium) – bewerten Sie jede Aussage:',
 [['Die natürliche Kausalität ist überwiegend wahrscheinlich, sobald sie medizinisch möglich ist.',false],
  ['Eine Teilursache kann für die natürliche Kausalität genügen.',true],
  ['Der Integritätsschaden entspricht dem prozentualen Erwerbsausfall.',false],
  ['Ein Gutachten gewinnt an Beweiswert, wenn es abweichende fachliche Meinungen nachvollziehbar diskutiert.',true]],
 'Möglichkeit genügt nicht; der Integritätsschaden ist eine andere Messgrösse als der Erwerbsausfall.',R+'Kap. 12.3 (S. 38–39); Lösungen Kap. 12');

add('Prüfungslogik','K','Wahr oder falsch (aus dem Schnellrepetitorium) – bewerten Sie jede Aussage:',
 [['Eine Diagnose ohne Funktionsbeschreibung kann für sich eine Prozentzahl der Arbeitsunfähigkeit begründen.',false],
  ['Eine geplante Therapieverbesserung darf ohne Weiteres als bereits vorhandene Arbeitsfähigkeit eingesetzt werden.',false],
  ['IV-Leistungen umfassen mehr als Renten.',true],
  ['Beim gemeinschaftlichen Gutachter-Konsilium werden Ergebnisse grundsätzlich mündlich mit den Beteiligten erörtert.',true]],
 'Zu beurteilen ist die aktuelle tatsächliche Leistungsfähigkeit; die Diagnose allein trägt keine Prozentzahl.',R+'Kap. 12.3 (S. 38–39); Lösungen Kap. 12');

add('Prüfungslogik','A+','Der Fragenkatalog verlangt: «Bestätigen Sie, dass die versicherte Person Anspruch auf eine ganze IV-Rente hat.» Was ist die sachgerechte Antwortstrategie?',
 ['Die Rechtsfrage zurückweisen bzw. operationalisieren und Diagnosen, Funktionen, Arbeitsfähigkeit, Verlauf und Prognose liefern',
  'Den Anspruch bestätigen, wenn die Arbeitsfähigkeit unter 50 % liegt',
  'Den Anspruch ablehnen',
  'Die Frage ohne Begründung unbeantwortet lassen'],
 'Nicht beantwortbare Fragen werden mit Grund bezeichnet (fachfremd, rechtliche Zuständigkeit); die medizinischen Bausteine werden geliefert.',R+'Kap. 12.4 Fall E und Lösung');

add('Prüfungslogik','A+','Orthopädie beurteilt 70 %, Psychiatrie 60 % Arbeitsfähigkeit; beide Einschränkungen wirken teilweise auf dieselben Pausen und dasselbe Arbeitstempo. Wie entsteht die Gesamtbeurteilung?',
 ['Überschneidungen und Wechselwirkungen werden gemeinsam diskutiert; es wird ein einheitliches Leistungsprofil mit begründeter Gesamtarbeitsfähigkeit gebildet, ohne 30 + 40 Prozent zu addieren',
  'Die Werte werden addiert: 30 % + 40 % = 70 % Arbeitsunfähigkeit',
  'Es gilt der günstigere der beiden Werte',
  'Es wird der Durchschnitt (65 %) gebildet'],
 'In bi- und polydisziplinären Gutachten zählt der integrierte Konsens, nicht die Aneinanderreihung von Teilgutachten.',R+'Kap. 12.4 Fall F und Lösung (S. 39, 42)');

/*END*/
})();
