/* Modul 5 (Kurs 22./23.10.2026) – Somatik, Neurologie, Neuropsychologie, Psychiatrie, aktuelle Rechtsprechung.
   Quellen: SIM-Kursunterlagen Modul 5 (2026): Klipstein (Einführung Somatik, Videofälle), Winkler (Casuistik Neurologie), Aybek (Funktionelle neurologische Störungen),
   Di Stefano (Neuropsychologische Fallvignetten), Urso (Längsschnittbeurteilung), Herzog-Zwitter (Aktuelle Rechtsprechung), Ebner (Videobeispiele Psychiatrie).
   Intern als «modul:7» geführt, weil 5 und 6 bereits die Zusatzmodule A/B sind. Alle Fragen selbst formuliert; Grundlage ist der Folientext (Bild-/Videoinhalte nicht auswertbar).
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m7-'+String(n).padStart(3,'0'),modul:7,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const KL='Referat Klipstein (M5 2026), ';
const WI='Referat Winkler (M5 2026), ';
const AY='Referat Aybek (M5 2026), ';
const DS='Referat Di Stefano (M5 2026), ';
const UR='Referat Urso (M5 2026), ';
const HZ='Referat Herzog-Zwitter (M5 2026), ';
const EB='Referat Ebner (M5 2026), ';

/* ================= Klipstein: Einführung Somatik ================= */
const T1='Somatik: Diagnostik & Bildgebung';
add(T1,'A+','Wonach richtet sich laut Klipstein die Wahl der bildgebenden Methode?',
 ['Nach der konkreten Fragestellung',
  'Nach der höchsten verfügbaren Auflösung',
  'Nach der Erwartung der versicherten Person',
  'Immer nach dem MRI als Standardmethode'],
 'Es gibt keine «beste» Methode an sich: Die Fragestellung ergibt die richtige Methode, und ohne Fragestellung soll keine Abklärung erfolgen.',KL+'Bildgebung / Fazit «klinische» Fälle','rheuma');
add(T1,'K','Bildgebung bei Rückenschmerzen – bewerten Sie jede Aussage:',
 [['Bei fehlenden radikulären Zeichen und negativen Red Flags ist ein MRI oft nicht die beste Methode.',true],
  ['Eine Abklärung sollte nicht ohne klare Fragestellung veranlasst werden.',true],
  ['Das MRI dient vor allem dazu, die klinische Verdachtsdiagnose zu bestätigen.',false],
  ['Röntgen im Stehen und MRI in Rückenlage liefern identische Informationen über die Belastungssituation.',false]],
 'Das MRI soll die Klinik nicht «bestätigen» (häufiger Fehler); Rx im Stehen und MRI in Rückenlage zeigen unterschiedliche Bedingungen. Entscheidend sind Wahrscheinlichkeit und klinische Medizin, nicht die Bildgebung allein.',KL+'Adäquate Bildgebung','rheuma');
add(T1,'A+','Ein 45-jähriger Informatiker hat seit Jahren lumbosakro-gluteale Schmerzen links mit Odyssee von Abklärungen. Die Schmerzen sind atypisch, aber lokalisierbar und sprechen gut auf NSAR an; die SPECT-CT zeigt den Befund. Welche Diagnose wurde im Referat gestellt?',
 ['Osteoid-Osteom',
  'Acetabulumfraktur',
  'Piriformissyndrom',
  'Somatoforme Schmerzstörung'],
 'Gutes NSAR-Ansprechen und lokalisierbare Schmerzen bei langer Abklärungsodyssee sprechen für ein Osteoid-Osteom; die Skelettszintigraphie/SPECT-CT mit Overlay führt zur Diagnose, Therapie ist Enukleation (oder NSAR).',KL+'Fall 3 «Somatisch oder psychisch?»','rheuma');
add(T1,'A-','Welche Aussage zum Fazit der «klinischen» Fälle ist FALSCH?',
 ['«Spezifisch» bedeutet automatisch «relevant» für die Arbeitsfähigkeit, weshalb psychosoziale Faktoren ausgeschlossen werden können.',
  'Bei rein somatischen Problemen ist eine kritische Auseinandersetzung mit der Vorgeschichte angezeigt; man soll neugierig bleiben.',
  'Gegebenenfalls ist eine Neubeurteilung bzw. Abklärung nötig.',
  'Eine bildgebende Abklärung braucht eine Fragestellung; diese bestimmt die Methode.'],
 'Cave: «spezifisch» heisst nicht automatisch «relevant» in Bezug auf die Arbeitsfähigkeit und schliesst psychosoziale Belastungsfaktoren nicht aus.',KL+'Fazit «klinische» Fälle','rheuma');
add(T1,'A+','Wie ist laut Klipstein die Indikatorenmethode bei «rein» somatischen Fällen eingeordnet?',
 ['Sie ist vom Bundesgericht für rein somatische Fälle nicht vorgesehen',
  'Sie ist bei allen somatischen Diagnosen zwingend anzuwenden',
  'Sie ersetzt bei somatischen Fällen die ICF-Beurteilung',
  'Sie gilt nur für Unfallversicherungsfälle'],
 'Bewertung der Arbeitsfähigkeit somatisch: saubere Diagnostik, Plausibilität Beschwerden–Befunde–Alltag, Schweregrad, Konsistenz, Stabilität und ICF; die Indikatorenmethode ist für rein somatische Fälle nicht vorgesehen. Vgl. BGE 151 V 66 (Adipositas): nicht alle Indikatoren auf alle Erkrankungen übertragen.',KL+'Bewertung der Arbeitsfähigkeit','rheuma');

/* ================= Klipstein: Fälle chronische Schmerzen ================= */
const T2='Somatik: Chronischer Schmerz & Arbeitsfähigkeit';
add(T2,'K','Bewertung der Arbeitsfähigkeit bei Schmerzfällen – bewerten Sie jede Aussage:',
 [['Zu prüfen ist die Plausibilität von Beschwerden, Befunden und Einschränkungen im Alltag.',true],
  ['Die Konsistenz in verschiedenen Lebensbereichen und die Konsistenz der Befunde sind zu beachten.',true],
  ['Ob ein Zustand stabil oder nicht stabil ist, spielt für die Beurteilung keine Rolle.',false],
  ['Die ICF betrachtet Auswirkungen auf Funktionsfähigkeit und Partizipation in Abhängigkeit von den Anforderungen.',true]],
 'Stabilität gehört ausdrücklich zur Beurteilung («stabil – nicht stabil»). ICF: Körperfunktionen/-strukturen, Aktivitäten, Partizipation, dazu Umwelt- und personbezogene Faktoren.',KL+'Bewertung der Arbeitsfähigkeit','rheuma');
add(T2,'A+','Fall 4 (45-jähriger Informatiker, Wirbelsäulenschmerzsyndrom vom Fibromyalgietyp, bidisziplinär rheumatologisch-psychiatrisch): Welche psychiatrischen Diagnosen wurden gestellt?',
 ['Chronische Schmerzstörung mit somatischen und psychischen Faktoren (F45.41) und anankastische Persönlichkeitsstörung (F60.5)',
  'Schwere depressive Episode (F32.2) und Agoraphobie (F40.0)',
  'Posttraumatische Belastungsstörung (F43.1) und emotional instabile Persönlichkeitsstörung (F60.3)',
  'Dysthymie (F34.1) und Anpassungsstörung (F43.2)'],
 'Die Arbeitsfähigkeit von 50 % wurde anhand der Indikatoren bidisziplinär bestätigt; die Tätigkeit war bereits optimal adaptiert.',KL+'Fallbeispiel 4','rheuma');
add(T2,'A+','Fall 5 (22-jährige Frau, chronische lumbosakrale Schmerzen, rheumatologisches Konsilium und EFL): Was ergab die rheumatologische Beurteilung für die angestammte administrative Tätigkeit?',
 ['Objektiv nicht eingeschränkt; allenfalls Begleitung bei Stellenbewerbung bzw. Arbeitseinstieg aus nicht rheumatologischen Gründen prüfen',
  'Zu 50 % arbeitsunfähig wegen axialer Spondyloarthritis',
  'Vollständig arbeitsunfähig wegen postoperativer Vernarbungen',
  'Nur leichte Tätigkeiten ohne Heben zumutbar'],
 'In der EFL zeigte sich eine gut mittelschwere Tätigkeit mit selteneren Einschränkungen (vorgeneigte Position, Überkopf); es lag höchstens eine mögliche SpA vor, nicht radikulär.',KL+'Fallbeispiel 5','rheuma');
add(T2,'A+','Fall 6 (30-jährige Logistikangestellte, Ganzkörperschmerzen, WSPS-Kriterien erfüllt, unauffällige Untersuchung): Was ergab die psychiatrische Abklärung?',
 ['Schwere depressive Episode ohne bisher leitliniengerechte Behandlung, aktuell 100 % arbeitsunfähig',
  'Keine psychische Störung, volle Arbeitsfähigkeit',
  'Somatoforme Schmerzstörung mit 30 % Einschränkung',
  'Simulation mit vollständiger Arbeitsfähigkeit'],
 'Rheumatologisch fanden sich keine relevanten Befunde (Handkraftminderung konsistent, aber ohne organisches Korrelat); ein Vorbehalt bestand gegenüber Nachtschichten.',KL+'Fallbeispiel 6','rheuma');
add(T2,'A+','Welche Haltung vertritt Klipstein im Fazit zu chronischen Schmerzen und Arbeitsfähigkeit?',
 ['Bio-psycho-soziales Modell als Grundlage; die Trennung «Soma» und «Psyche» entspricht nicht der medizinischen Denkweise',
  'Somatische und psychische Ursachen müssen strikt getrennt und nacheinander abgeklärt werden',
  'Chronischer Schmerz ist ein einheitliches Krankheitsbild mit standardisiertem Vorgehen',
  'Die Nachvollziehbarkeit ist bei Schmerzfällen nachrangig gegenüber der Diagnose'],
 'Chronischer Schmerz ist heterogen, daher auch das Vorgehen; Abgrenzung und Zuständigkeit sind teilweise zufällig. Entscheidend ist die Nachvollziehbarkeit.',KL+'Fazit Fälle chronische Schmerzen','rheuma');

/* ================= Klipstein: Videofälle ================= */
const T3='Videofälle Exploration (Klipstein)';
add(T3,'K','Wie komme ich in der Exploration an verwertbare Informationen? Bewerten Sie jede Aussage (Videofall Rheumatologie/Schulter):',
 [['Therapien und Medikamente sind gezielt zu erfragen.',true],
  ['Der Tagesablauf liefert Informationen zur Konsistenz.',true],
  ['Verschlimmernde und verbessernde Faktoren sind abzufragen.',true],
  ['Verbale Angaben allein genügen; das nonverbale Verhalten spielt keine Rolle.',false]],
 'Im Videofall wurde ausdrücklich gefragt, wie sich verbale und nonverbale Informationen unterscheiden und was die Schilderung über die somatische Untersuchung aussagt.',KL+'Videofälle (SUVA-Gutachten, bidisziplinär)','rheuma');
add(T3,'A+','Welche Muskelbefunde werden im Videofall zur Beurteilung der Schulterfunktion herangezogen?',
 ['Relief, Symmetrie und Innervation der Muskulatur',
  'Ausschliesslich die aktive Beweglichkeit',
  'Nur der subjektive Schmerzbericht',
  'Ausschliesslich die Röntgenbildgebung'],
 'Bei Verdacht auf Aggravation helfen objektivierbare Zeichen: Muskelrelief, Seitensymmetrie und Innervation.',KL+'Videofälle, letzte Sequenz','rheuma');

/* ================= Winkler: Neurologische Casuistik ================= */
const T4='Neurologie: Fatigue & Casuistik';
add(T4,'A-','Welche Aussage zur Differentialdiagnose der Fatigue ist FALSCH?',
 ['Fatigue ist ausschliesslich ein neurologisches Symptom; internistische und psychische Ursachen sind zu vernachlässigen.',
  'Medikamentenwirkungen (z. B. Betablocker, Lipidsenker, PPI) können Fatigue verursachen.',
  'Internistische Ursachen wie Hypothyreose, OSAS oder Anämie sind zu berücksichtigen.',
  'Depression und Stress bzw. Überforderung sind mögliche Ursachen.'],
 'Fatigue hat ein breites Spektrum: neurologisch (u. a. MS, Post-Polio, Myasthenie, Narkolepsie), psychisch (Depression, somatoforme Störung, Stress), internistisch (Hypothyreose, OSAS, Anämie, Malnutrition, Dehydratation), Medikamente/UAW und tumorassoziiert.',WI+'Fatigue','neuro');
add(T4,'K','Ursachen bzw. Differentialdiagnosen der Fatigue – bewerten Sie jede Aussage:',
 [['Ein obstruktives Schlafapnoe-Syndrom (OSAS) kann Fatigue verursachen.',true],
  ['Cancer Related Fatigue ist eine eigene Ursachengruppe.',true],
  ['Multiple Sklerose und Post-Polio-Syndrom gehören zu den neurologischen Ursachen.',true],
  ['Eine Depression kommt als Ursache von Fatigue nicht in Betracht.',false]],
 'Psychische Erkrankungen (Depression, somatoforme Störung) und Stress/Überforderung stehen neben neurologischen und internistischen Ursachen.',WI+'Fatigue','neuro');
add(T4,'A+','Welche Haltung empfiehlt Winkler (nach Stückli) der gutachtenden Person?',
 ['Arzt bleiben, empathisch und neutral',
  'Als Anwalt der versicherten Person auftreten',
  'Im Auftrag des Versicherers kritisch distanziert und möglichst knapp bleiben',
  'Die Rolle des Behandlers einnehmen, um Vertrauen zu gewinnen'],
 'Gebot der lückenlosen Darlegung der medizinischen Fakten; Gutachtende behandeln nicht und entscheiden nicht über Leistungen.',WI+'Empfehlungen für Gutachter (H. R. Stückli)','neuro');
add(T4,'K','Empfehlungen für Gutachter (Winkler/Stückli) – bewerten Sie jede Aussage:',
 [['Diagnosen sind mit den resultierenden Funktionseinschränkungen und ihren Auswirkungen auf Aktivität, Arbeitsfähigkeit und Partizipation darzulegen.',true],
  ['Unsicherheiten und Inkonsistenzen sind aufzuzeigen.',true],
  ['Pro- und Contra-Argumente sind aufzulisten und in nachvollziehbare Schlussfolgerungen zu überführen.',true],
  ['Unsicherheiten sollten weggelassen werden, damit das Gutachten schlüssig wirkt.',false]],
 'Medizinische Plausibilisierung mit logisch-argumentativer Auflistung aller Pro- und Contra-Argumente betrifft Diagnose, Differentialdiagnose, Funktionsstörungen und Kausalität.',WI+'Empfehlungen für Gutachter','neuro');
add(T4,'A+','Welche wahrgenommene Auffälligkeit wurde im BSV-Forschungsbericht 1/11 (n = 734) am häufigsten genannt?',
 ['Bestritt eigene Fehler und gab immer anderen die Schuld (45,8 %)',
  'War launisch, Stimmung schwankte unvorhersehbar (38,8 %)',
  'Konnte sich nicht konzentrieren (34,5 %)',
  'War aufmüpfig bei Anweisungen (34,2 %)'],
 'Es handelt sich um die Verteilung von 4108 Auffälligkeiten; die Zahlen sind als Beispiel für Verhaltensauffälligkeiten am Arbeitsplatz gedacht.',WI+'Beurteilung AF (BSV-Forschungsbericht 1/11)','neuro');

/* ================= Aybek: Funktionelle neurologische Störungen ================= */
const T5='Funktionelle neurologische Störungen';
add(T5,'A+','Worauf stützt sich die Diagnose einer funktionellen neurologischen Störung gemäss Aybek?',
 ['Auf positive klinische Zeichen, nicht nur auf den Ausschluss anderer Ursachen',
  'Ausschliesslich auf den Ausschluss organischer Ursachen',
  'Auf den Nachweis eines Sekundärgewinns',
  'Auf einen pathologischen Bildgebungsbefund'],
 'Positive Diagnose: Das Vorgehen ist nicht nur exklusiv und führt zu wenig Fehldiagnosen.',AY+'Positive klinische Zeichen / Zusammenfassung','neuro');
add(T5,'A+','Was gilt für das Hoover-Zeichen bei einer Beinparese laut den gezeigten Daten (Ziv et al. 1998)?',
 ['Spezifität 99 %, Sensitivität 94 %',
  'Spezifität 60 %, Sensitivität 99 %',
  'Spezifität 80 %, Sensitivität 80 %',
  'Es hat keine diagnostische Aussagekraft'],
 'Das Hoover-Zeichen ist ein positives klinisches Zeichen (motorische Diskrepanz); weitere sind u. a. Absinken ohne Pronation, plötzlicher Kraftverlust und plötzliches Einknicken.',AY+'Positive klinische Zeichen','neuro');
add(T5,'K','Funktioneller Tremor: Welche Merkmale werden als positive Zeichen genannt? Bewerten Sie jede Aussage:',
 [['Variabilität des Tremors.',true],
  ['Ablenkbarkeit (Distractibility).',true],
  ['Mitschwingen (Entrainment) mit einer vorgegebenen Bewegung.',true],
  ['Der Tremor bleibt bei Ablenkung unverändert stabil.',false]],
 'Variabilität, Ablenkbarkeit und Entrainment sind die drei Zeichen bei funktionellem Tremor.',AY+'Positive klinische Zeichen, Tremor','neuro');
add(T5,'A+','Wie beschreibt Aybek das Erleben bei funktionellen Störungen im Unterschied zur Simulation?',
 ['Nicht willentlich: «I cannot will» – Veränderungen des Handlungsurheber-Erlebens (Sense of agency), Temporo-Parietale Junktion',
  'Willentlich: «I will not», mit klarem Sekundärgewinn als Ziel',
  'Rein kognitive Störung ohne neurobiologisches Korrelat',
  'Immer Folge eines Traumas, das erinnert werden kann'],
 'Neuroimaging-Studien zeigen Veränderungen u. a. in Temporo-Parietaler Junktion, Amygdala und motorischen Arealen. Willentliche Simulation (DSM-5: Simulation bzw. vorgetäuschte Störung) ist abzugrenzen.',AY+'Simulation / Sense of agency','neuro');
add(T5,'A-','Welche Aussage zu Biomarkern funktioneller neurologischer Störungen ist FALSCH?',
 ['Resting-State-Klassifikatoren ermöglichen bereits eine sichere Einzelfalldiagnose.',
  'Resting-State-Klassifikatoren erreichten in Studien eine Genauigkeit von rund 69 % bzw. 80 %.',
  'Biomarker sind ein Forschungsgebiet (Machine-Learning-Mustererkennung).',
  'Strukturelle Veränderungen wurden u. a. bei PNES untersucht.'],
 'Die gezeigten Klassifikatoren (23 FND/25 Kontrollen: 69 %; 61 FND/59 Kontrollen: 80 %) sind keine klinisch einsetzbare Diagnostik.',AY+'Biomarker','neuro');
add(T5,'A+','Wie wird Stress bzw. psychische Belastung im biopsychosozialen Modell der FND eingeordnet?',
 ['Als Auslöser bzw. Risikofaktor, nicht als alleinige Ursache; zusätzlich wirken unterhaltende Faktoren',
  'Als alleinige und hinreichende Ursache',
  'Als irrelevant, da das Geschehen rein neurobiologisch ist',
  'Als reiner Folgeschaden der Symptome'],
 'Bio-, psychische und soziale Ebene wirken zusammen; Epigenetik/Genetik gehören zur biologischen Ebene, Primär- und Sekundärgewinn werden im Modell unterschieden.',AY+'Theoretisches Modell','neuro');
add(T5,'A+','Welcher Therapieschritt steht am Anfang der Behandlung (Stone et al. 2016)?',
 ['Neurologe: Diagnosestellung mit verständlicher Erklärung («funktionell»)',
  'Psychotherapie ohne vorherige Erklärung',
  'Stationäre Rehabilitation',
  'Abwarten und Beobachten'],
 'Reihenfolge der Säulen: 1 Neurologe (Erklärung), 2 Physiotherapie, 3 Psychotherapie; multidisziplinär ambulant oder stationär.',AY+'Therapie','neuro');
add(T5,'K','Therapie und Prognose funktioneller neurologischer Störungen – bewerten Sie jede Aussage:',
 [['Die Erklärung der Diagnose ist bereits Teil der Therapie.',true],
  ['Für kognitive Verhaltenstherapie und psychodynamische Therapie wurden moderate Effektstärken berichtet.',true],
  ['In einer Übersicht (24 Studien, 2069 Patienten) waren ca. 40 % der Patienten unverändert oder verschlechtert.',true],
  ['Funktionelle Störungen heilen praktisch immer spontan, weshalb keine Therapie nötig ist.',false]],
 'Die Prognose ist nicht günstig; interdisziplinäre Versorgung (Hausarzt/Neurologe, Physio/Logo/Ergo, Psychologen/Psychiater) wird empfohlen.',AY+'Therapie / Prognose','neuro');

/* ================= Di Stefano: Neuropsychologie / Beschwerdenvalidierung ================= */
const T6='Neuropsychologie: Beschwerdenvalidierung';
add(T6,'A+','Wie viele Beschwerdenvalidierungstests (BVT) sollten mindestens eingesetzt werden?',
 ['Mehrere, mindestens 3',
  'Ein einziger, robuster Test genügt',
  'Genau zwei Tests',
  'Keiner, wenn die Anamnese plausibel ist'],
 'Nicht alle Tests sind im Einzelfall gleich geeignet (Sprache, Spezifität/Sensitivität). Eine adäquate Validierung umfasst immer mehrere Tests.',DS+'Beispiele für Beschwerdenvalidierungstests','neuropsy');
add(T6,'A+','Wie ist das Nichtbestehen von Beschwerdenvalidierungstests bei glaubwürdigen Probanden einzuordnen?',
 ['Ein nicht bestandener Test ist kein Beweis für unglaubwürdige Leistung; erst das Nichtbestehen von mindestens 2 unabhängigen Tests unterscheidet am besten',
  'Ein nicht bestandener Test beweist bereits eine Aggravation',
  'Mehr durchgeführte Tests erhöhen bei glaubwürdigen Probanden die Zahl nicht bestandener Tests deutlich',
  'Bei glaubwürdigen Probanden werden Tests nie nicht bestanden'],
 'Ca. 40 % glaubwürdiger Probanden bestehen 1 Test nicht; dass 2 Tests nicht bestanden werden, liegt bei ihnen unter 5 %. Die Zahl der nicht bestandenen Tests nimmt bei glaubwürdigen Probanden nicht zu, wenn mehrere Tests durchgeführt werden.',DS+'Interpretation multipler BVT (Easter Cottingham 2021)','neuropsy');
add(T6,'A+','Wie beurteilt Merten (2014) den Rey 15-Item-Test (FIT) als alleinigen Beschwerdenvalidierungstest?',
 ['Ungeeignet: durchschaubar, verfälschungsanfällig, unzureichende Sensitivität und Spezifität',
  'Als Goldstandard geeignet',
  'Nur bei Migrationshintergrund ungeeignet',
  'Geeignet, wenn der Test zweimal durchgeführt wird'],
 'Reliable Digit Span und Rey 15-Item haben niedrige Sensitivität; als Beispiele guter Tests werden u. a. Word Memory Test, TOMM und Dot Counting Test genannt.',DS+'Beispiel problematische Beurteilung','neuropsy');
add(T6,'K','Beschwerdenvalidierung im Gutachten – bewerten Sie jede Aussage:',
 [['Rohwerte, Cut-off-Werte und die Logik von BVT sollen nicht explizit im Gutachten stehen, sonst wird der Test demaskiert.',true],
  ['Von BVT sollen keine Video- oder Tonaufzeichnungen für Dritte erstellt werden.',true],
  ['Eine bestandene Beschwerdenvalidierung bestätigt nicht automatisch die Diagnose.',true],
  ['Ein nicht bestandener BVT beweist stets eine Aggravation.',false]],
 'Die Diagnose muss in jedem Fall materiell verifiziert werden – in allen Fachgebieten, auch bei Schmerzen und psychischen Störungen. Hinweis im Referat: Solche Informationen können heute leicht per KI im Internet gefunden werden.',DS+'Cave-Folien','neuropsy');
add(T6,'A+','Warum sind die Begriffe «Aggravation»/«malingering» laut Di Stefano problematisch?',
 ['Sie unterstellen ein Motiv, das in der Regel nicht objektivierbar ist; Boone spricht von «nicht-glaubhaften» bzw. «nicht-validen» Resultaten',
  'Sie sind in der Schweiz rechtlich nicht zulässig',
  'Sie bezeichnen nur Simulation bei Psychosen',
  'Sie beziehen sich ausschliesslich auf unbewusste Prozesse'],
 'Zwei Aspekte nicht-glaubhafter Resultate: unzutreffende Beschwerdenschilderung und unzutreffende Symptompräsentation (unzureichende Anstrengung/Kooperation verfälscht die Testergebnisse).',DS+'Aggravation/«malingering»','neuropsy');
add(T6,'A-','Welches Element gehört NICHT zu den Kriterien A–D für Malingering nach Sherman, Slick & Iverson (2020)?',
 ['Nachweis einer strukturellen Hirnläsion in der Bildgebung',
  'Vorhandensein eines externen Anreizes',
  'Unzulässige Darstellung bei der Testung, die auf Täuschung oder Übertreibung hindeutet',
  'Ausgeprägte Diskrepanzen, die nicht vollständig durch eine andere Erkrankung erklärbar sind'],
 'Kriterien: A externer Anreiz, B unzulässige Darstellung bei der Testung, C ausgeprägte Diskrepanzen, D Verhalten nicht vollständig durch andere entwicklungsbedingte, medizinische oder psychiatrische Erkrankung erklärbar.',DS+'Sherman, Slick & Iverson 2020','neuropsy');
add(T6,'K','Falsch-positive Beurteilung (Merten 2016) – bewerten Sie jede Aussage:',
 [['Ein erhöhtes Risiko besteht u. a. bei Intelligenzminderung und demenziellen Syndromen.',true],
  ['Ein erhöhtes Risiko besteht bei mittelschweren/schweren dysexekutiven oder aphasischen Störungen.',true],
  ['Ein erhöhtes Risiko besteht auch bei ausgeprägter Lesestörung bzw. Analphabetismus.',true],
  ['Bei HWS-Distorsionstrauma ist eine falsch-positive Beurteilung besonders zu erwarten.',false]],
 'Falsch-positive Beurteilungen sind nicht zu erwarten bei leichter kognitiver Störung, depressiven Störungen (solange die Mitwirkung gewährleistet ist), somatoformer/dissoziativer Störung, Anpassungsstörung, HWS-Distorsionstrauma, Burnout, Mobbing, CFS.',DS+'Erhöhtes Risiko für falsch-positive Beurteilung','neuropsy');
add(T6,'A+','Wie beurteilt Di Stefano im Fall 1 (Herr T., Polytoxikomanie, schweres SHT mit Subarachnoidalblutung, Green’s WMT nicht bestanden) die Beschwerdenvalidierung?',
 ['Authentische Störung; «Fail» bedeutet hier nicht, dass eine aggravierte Störung vorliegt',
  'Aggravierte Störung gemäss Slick-Kriterien',
  'Nicht beurteilbar; neuropsychologische Aussagen sind unmöglich',
  'Simulation mit dem Ziel einer Rente'],
 'Bei erhöhtem Risiko einer falsch-positiven Beurteilung (hier schwere Hirnschädigung, Anosognosie, mnestische Störung) ist genau hinzuschauen. Beurteilung: amnestisches Syndrom und exekutive Störung, AF 0 %, Vorzustand richtunggebend verschlimmert.',DS+'Fall 1 (Herr T.)','neuropsy');
add(T6,'A+','Welche Schlussfolgerung zog Di Stefano im Fall 2 (Frau B., Green’s WMT nicht bestanden, hohes Funktionsniveau im Alltag)?',
 ['Keine neuropsychologische Diagnose möglich, Arbeitsfähigkeit nicht beurteilbar; Kausalzusammenhang möglich, aber nicht überwiegend wahrscheinlich',
  'Leichte neuropsychologische Störung mit 50 % Arbeitsunfähigkeit',
  'Vollständig authentische Störung wie in den Vorbefunden',
  'Überwiegend wahrscheinliche Kausalität des SHT von 2016'],
 'Inkonsistenz zwischen massiven subjektiven Beschwerden und hohem Funktionsniveau (Auto, Wandern, Joggen, Yoga, Kochgruppe), «Crescendo»-Symptomatik neuropsychologisch nicht erklärbar; Abweichungen von NP-Vorbefunden müssen gut begründet werden.',DS+'Fall 2 (Frau B.)','neuropsy');
add(T6,'A+','Was folgt in der Regel aus einer nicht bestandenen Beschwerdenvalidierung?',
 ['Es sind keine Aussagen zum neuropsychologischen Funktionsniveau möglich; die Plausibilität der Testergebnisse ist gutachterlich zu beurteilen',
  'Das «wahre» Ausmass kann durch Abzug eines Aggravationsanteils geschätzt werden',
  'Die Testergebnisse gelten als valide, wenn die Anamnese stimmig ist',
  'Die Arbeitsunfähigkeit beträgt automatisch 0 %'],
 'Plausibilitätsprüfung: Übereinstimmung mit neurologischen/psychiatrischen/radiologischen Befunden, Anamnese, Vorbefunden, Klinik, Funktionsniveau und Alltagsaktivitäten.',DS+'Fazit aus neuropsychologischer Sicht','neuropsy');
add(T6,'A+','Wie viele der gemessenen Variablen sind auch bei gesunden Personen typischerweise pathologisch auffällig?',
 ['Ca. 10 % aller Werte',
  'Praktisch keine',
  'Ca. 50 % aller Werte',
  'Nur Werte aus Gedächtnistests'],
 'Im Beispiel: 46 Messwerte, davon 4 unterdurchschnittlich, 39 durchschnittlich, 3 überdurchschnittlich – das ergibt keine 4 «neuropsychologischen Diagnosen»; das Profil ist von dem einer gesunden Person nicht unterscheidbar.',DS+'Beispiel problematische Beurteilung','neuropsy');
add(T6,'A+','Wie häufig sind nicht-glaubhafte Resultate im versicherungsmedizinischen Kontext gemäss der Schweizer Studie (Plohmann/Hurter 2017)?',
 ['Rund 27,5 % bis 34,2 % mit möglicher oder sicherer «malingered neurocognitive disorder»',
  'Unter 5 %',
  'Rund 70 %',
  'Genau 40 % in allen Diagnosegruppen'],
 'International: Prävalenz von Aggravation ca. 30 % in Arbeitsunfähigkeitsverfahren (39 % bei MTBI); Metastudie Larrabee: Basisrate 40 % bei MTBI.',DS+'Prävalenz','neuropsy');

/* ================= Urso: Längsschnittbeurteilung ================= */
const T7='Psychiatrie: Längsschnittbeurteilung';
add(T7,'A+','Warum reicht eine einzelne psychiatrische Untersuchung (Querschnitt) für die Beurteilung der Arbeitsfähigkeit oft nicht aus?',
 ['Timing, Setting und Kompensation/Dissimulation bilden Blindstellen; ein ruhiger 1:1-Raum entspricht nicht dem Arbeitsplatz',
  'Weil die Untersuchungsdauer gesetzlich mindestens 3 Stunden betragen muss',
  'Weil Querschnittsbefunde rechtlich nie verwertbar sind',
  'Weil Testverfahren die Verlaufsbeurteilung ersetzen'],
 'Beispiel: Gleicher Befund heute, aber Fall A (jahrelang stabil, rasche Besserung) und Fall B (mehrere Rezidive, gescheiterte Arbeitsversuche) haben unterschiedliche Prognose und Bedeutung.',UR+'Der Querschnitt hat typische Blindstellen','psych');
add(T7,'A+','Was unterscheidet laut Urso Spitzenleistung von nachhaltiger Leistungsfähigkeit?',
 ['Spitzenleistung ist punktuell gut, aber instabil; nachhaltige Leistung ist stabil und wiederholbar',
  'Beide bezeichnen dasselbe Leistungsniveau',
  'Spitzenleistung ist die durchschnittliche Tagesleistung',
  'Nachhaltige Leistungsfähigkeit lässt sich nur im Test erfassen'],
 'Zustandsbild (Symptome) und Funktionalität (was gelingt zuverlässig, wiederholt und nachhaltig?) sind zu trennen; Veränderung kann rasch sein, Erholung verzögert.',UR+'Spitzenleistung vs. nachhaltige Leistung','psych');
add(T7,'K','Hilfreiche Fragen zur Beurteilung der Leistungsfähigkeit (Urso) – bewerten Sie jede Aussage:',
 [['Dauer: Wie lange pro Tag ist Leistung möglich?',true],
  ['Regelmässigkeit: Wie viele Tage/Wochen ist sie reproduzierbar?',true],
  ['Erholung: Welche Pausen oder Nachwirkungen entstehen?',true],
  ['Fluktuation ist irrelevant, solange die Spitzenleistung hoch ist.',false]],
 'Weitere Fragen: Fluktuation (wie stark und wie vorhersehbar schwankt die Leistung?), Wiederholbarkeit (serielle Belastung/Arbeitsversuche), Zuverlässigkeit unter definierten Anforderungen.',UR+'Hilfreiche Fragen','psych');
add(T7,'A+','Ein Versicherter geht ins Fitnessstudio, gibt aber an, nicht arbeiten zu können. Wie ist das gemäss Urso einzuordnen?',
 ['Nicht per se inkonsistent: Vergleichbar sind nur Aktivitäten mit vergleichbaren Anforderungen (selbstgewählt, flexibel, abbrechbar vs. fremdbestimmt, feste Präsenz)',
  'Immer ein Beweis für Aggravation',
  'Irrelevant, da Freizeitaktivitäten nie berücksichtigt werden dürfen',
  'Ein Beweis für volle Arbeitsfähigkeit'],
 'Eine Diskrepanz hat mehrere mögliche Erklärungen: Störung (Fluktuation, Trigger), Kompensation, Datenproblem (Aktenlücke), Kontext, Verzerrung/nicht-authentische Darstellung – diese ist nur eine Hypothese unter mehreren.',UR+'Konsistenzprüfung / Fitnessstudio-Beispiel','psych');
add(T7,'K','Therapieverlauf als Informationsquelle (Urso) – bewerten Sie jede Aussage:',
 [['Vor der Annahme einer Therapieresistenz sind Diagnose, Indikation, Methode, Dosis, Dauer und Durchführung zu prüfen.',true],
  ['Fehlende Behandlung kann u. a. durch Zugangsprobleme, Krankheitseinsicht, Nebenwirkungen oder soziale Faktoren erklärt sein.',true],
  ['Fehlender Behandlungserfolg belegt immer eine Therapieresistenz.',false],
  ['Keine Behandlung bedeutet, dass nur eine keine oder leichte Störung vorliegt.',false]],
 'Vorsicht gilt sowohl bei «Resistenz» als auch bei «Nichtbehandlung».',UR+'Therapieverlauf','psych');
add(T7,'A+','Im Fall mit initialer «Depression»: Welche Beobachtung im Längsschnitt veränderte die diagnostische Hypothese?',
 ['Ich-Störungen, halluzinationsnahe Phänomene und Leibempfindungsstörungen, Gedankenabreissen und Affektverarmung – Verdacht auf beginnende Erkrankung aus dem schizophrenen Formenkreis',
  'Reine Zunahme der Schlafstörungen',
  'Alleinige Verbesserung unter Antidepressiva',
  'Zunehmende Berufserfolge'],
 'Diagnostisch entscheidend ist nicht das einzelne Symptom, sondern das Muster über die Zeit. Eine weitere Begutachtung 2 Jahre später bestätigte den Verdacht.',UR+'Der Längsschnitt verändert die diagnostische Hypothese','psych');
add(T7,'A+','Welche Aussage zu den Standardindikatoren (BGE 141 V 281) und dem Längsschnitt trifft zu?',
 ['Ohne Längsschnitt sind die Standardindikatoren kaum belastbar zu beurteilen (z. B. ist die Behandlungs- und Eingliederungsanamnese per Definition longitudinal)',
  'Die Standardindikatoren sind rein querschnittliche Befunde',
  'Der Längsschnitt ersetzt die Standardindikatoren',
  'Die Indikatoren gelten nur bei Persönlichkeitsstörungen'],
 'Behandlung/Eingliederung (Erfolg, Resistenz, Adhärenz), Komorbidität (Entwicklung über Zeit), Persönlichkeit/Ressourcen (Biografie), sozialer Kontext und Aktivitätsniveau brauchen Verlaufsdaten.',UR+'Standardindikatoren ohne Längsschnitt','psych');
add(T7,'K','REAcT (Risiko für Einschränkungen der beruflichen Aktivität und Teilhabe) – bewerten Sie jede Aussage:',
 [['Es ist ein Fremdbeurteilungsverfahren (Structured Professional Judgment).',true],
  ['Es hat 35 Items: 12 zur Vorgeschichte, 12 zur Gegenwart, 11 zur Zukunft.',true],
  ['Es ersetzt die klinische Gesamtbeurteilung und die eigenständige Begründung der Arbeitsfähigkeit.',false],
  ['Die 24 Items zu Vorgeschichte und aktuellem Befund decken Themen der Längsschnitt- und Querschnittsbeurteilung ab.',true]],
 'REAcT unterstützt die strukturierte Erfassung und individuelle Gewichtung prognostischer Faktoren, ersetzt aber nicht die Gesamtbeurteilung.',UR+'REAcT','psych');
add(T7,'A+','Welche fünf Verben erhöhen laut Urso Transparenz und Nachvollziehbarkeit eines Gutachtens?',
 ['Dokumentiert, berichtet, beobachtet, abgeleitet, unsicher',
  'Vermutet, behauptet, bezweifelt, festgestellt, bewiesen',
  'Erhoben, bewertet, gerechnet, verworfen, bestätigt',
  'Gesehen, gehört, geglaubt, geschätzt, gesichert'],
 'Beispiele: «In den Akten ist seit … dokumentiert», «Der Explorand berichtet …», «In der Untersuchung zeigte sich …», «Daraus ist mit überwiegender Wahrscheinlichkeit abzuleiten …», «Retrospektiv lässt sich nicht ausreichend sicher klären …».',UR+'Fünf Verben','psych');
add(T7,'A+','Wie präzise darf eine retrospektive Arbeitsfähigkeitsbeurteilung bei schwachem Längsschnitt formuliert werden?',
 ['Nur so präzise, wie es die verfügbare medizinische Dokumentation und die nachvollziehbare Herleitung zulassen',
  'Immer mit exakter Prozentangabe pro Zeitraum',
  'Es ist nie eine retrospektive Beurteilung möglich',
  'Die Prozentangaben der Behandler sind unbesehen zu übernehmen'],
 'Bei schwachem Längsschnitt nicht raten. Offen bleiben können retrospektive AUF in nicht dokumentierten Perioden, Dauer/Schwere früherer Episoden, Kausalität von Ereignissen und präzise Prozentwerte bei breiter Unsicherheit.',UR+'Bei schwachem Längsschnitt: nicht raten','psych');

/* ================= Herzog-Zwitter: Aktuelle Rechtsprechung ================= */
const T8='Aktuelle Rechtsprechung (Herzog-Zwitter)';
add(T8,'A+','Wie werden Interviews bei Gutachten nach Art. 44 ATSG festgehalten, sofern die versicherte Person nichts anderes bestimmt?',
 ['In Form von Tonaufnahmen, die in die Akten aufgenommen werden',
  'Nur durch schriftliche Protokolle des Gutachters',
  'Durch Videoaufnahmen',
  'Gar nicht; der Gutachter fasst zusammen'],
 'Art. 44 Abs. 6 ATSG. Zudem: Namen der Sachverständigen werden bekannt gegeben, Ablehnung binnen 10 Tagen aus den Gründen von Art. 36 Abs. 1 ATSG, Zusatzfragen schriftlich; über die Fragen entscheidet der Versicherungsträger abschliessend.',HZ+'Art. 44 ATSG','psych');
add(T8,'A+','Wer legt bei Gutachten nach Art. 44 Abs. 1 ATSG die Fachdisziplinen abschliessend fest?',
 ['Bei mono- und bidisziplinären Gutachten der Versicherungsträger, bei polydisziplinären die Gutachterstelle',
  'Immer der Versicherungsträger',
  'Immer die versicherte Person',
  'Immer das Gericht'],
 'Art. 44 Abs. 5 ATSG.',HZ+'Art. 44 ATSG','psych');
add(T8,'A+','Wann darf ein Gericht einem Gutachten nach Art. 44 ATSG gemäss 8C_660/2022 vollen Beweiswert zuerkennen?',
 ['Wenn es den praxisgemässen Anforderungen entspricht und keine konkreten Indizien gegen seine Zuverlässigkeit sprechen',
  'Nur wenn die versicherte Person zustimmt',
  'Nur wenn es polydisziplinär erstellt wurde',
  'Nur wenn es von einem Gericht in Auftrag gegeben wurde'],
 'Ein Indiz gegen die Zuverlässigkeit kann das Fehlen einer angemessenen, nachvollziehbaren Auseinandersetzung mit abweichenden Meinungen anderer Fachpersonen sein (8C_724/2025).',HZ+'Beweiswert von Gutachten','psych');
add(T8,'K','Beweiswert medizinischer Berichte – bewerten Sie jede Aussage:',
 [['Berichte versicherungsinterner Fachpersonen können beweisgeeignet sein, doch gelten strenge Anforderungen.',true],
  ['Bei auch nur geringen Zweifeln an versicherungsinternen Feststellungen sind ergänzende Abklärungen vorzunehmen.',true],
  ['Behandelnde Ärzte sagen in Zweifelsfällen wegen ihrer Vertrauensstellung mitunter eher zugunsten ihrer Patienten aus.',true],
  ['Berichte behandelnder Ärzte haben wegen der Vertrauensstellung stets höheren Beweiswert als Gutachten.',false]],
 'Entscheidend ist u. a., ob der Bericht umfassend ist, auf allseitigen Untersuchungen beruht, die Beschwerden berücksichtigt, in Kenntnis der Vorakten abgegeben wurde, einleuchtet und begründet ist.',HZ+'Beweiswert (8C_143/2024, 8C_660/2022)','psych');
add(T8,'A+','Was bedeutet der Beweisgrad der überwiegenden Wahrscheinlichkeit im Sozialversicherungsrecht?',
 ['Für die Richtigkeit sprechen objektiv so gewichtige Gründe, dass andere denkbare Möglichkeiten vernünftigerweise nicht massgeblich in Betracht fallen',
  'Die blosse Möglichkeit eines Sachverhalts genügt',
  'Der Sachverhalt muss mit absoluter Gewissheit feststehen',
  'Es genügt, dass der Sachverhalt ebenso wahrscheinlich ist wie das Gegenteil'],
 'Bei mehreren Möglichkeiten folgt das Gericht jener Sachverhaltsdarstellung, die es für die wahrscheinlichste hält (C-4892/2024 vom 01.07.2025).',HZ+'Beweisgrad','psych');
add(T8,'A+','Welcher Indikator gehört zur Kategorie «Konsistenz» nach BGE 141 V 281?',
 ['Behandlungs- und eingliederungsanamnestisch ausgewiesener Leidensdruck',
  'Komorbiditäten',
  'Persönlichkeitsentwicklung und -struktur',
  'Komplex sozialer Kontext'],
 'Konsistenz: gleichmässige Einschränkung des Aktivitätsniveaus in allen vergleichbaren Lebensbereichen und ausgewiesener Leidensdruck. Funktioneller Schweregrad: Komplexe Gesundheitsschädigung (Befunde, Behandlungs-/Eingliederungserfolg, Komorbiditäten), Persönlichkeit und sozialer Kontext.',HZ+'BGE 141 V 281 Standardindikatoren','psych');
add(T8,'A+','Auf welche Erkrankungen wurde das strukturierte Beweisverfahren durch BGE 143 V 418 ausgeweitet?',
 ['Grundsätzlich auf sämtliche psychischen Erkrankungen',
  'Nur auf somatoforme Schmerzstörungen',
  'Nur auf depressive Störungen',
  'Nur auf Abhängigkeitserkrankungen'],
 'Zeitachse: BGE 141 V 281 (2015) Indikatorenrechtsprechung, 143 V 409 (2017) depressive Störungen, 143 V 418 (2017) psychische Erkrankungen, 145 V 215 (2019) Abhängigkeitserkrankungen.',HZ+'Indikatorenrechtsprechung 2015–2019','psych');
add(T8,'A+','Ist die Arbeitsunfähigkeitsschätzung der Gutachterperson für die rechtsanwendende Stelle verbindlich (8C_377/2025)?',
 ['Ihr ist zu folgen, wenn sie den Beweisthemen von BGE 141 V 281 überzeugend nachkommt; andernfalls ist ein Abweichen aus triftigem Grund möglich',
  'Ja, sie ist stets verbindlich',
  'Nein, sie darf immer ignoriert werden',
  'Nur wenn sie von einem Psychiater stammt'],
 'Es liegt nicht allein in der Zuständigkeit der Gutachtenden, verbindlich zu entscheiden; das Absprechen der rechtlichen Massgeblichkeit lässt den Beweiswert des Gutachtens grundsätzlich unberührt.',HZ+'Indikatorenrechtsprechung 8C_377/2025','psych');
add(T8,'A+','Wann kommt das strukturierte Beweisverfahren im UVG zur Anwendung (8C_802/2023)?',
 ['Nur wenn zwischen Unfall und Beschwerden ein natürlicher und adäquater Kausalzusammenhang besteht',
  'Immer, unabhängig vom Kausalzusammenhang',
  'Nie, es gilt nur im IV-Recht',
  'Nur bei Berufskrankheiten'],
 'Im UVG bleibt die Prüfung des natürlichen und adäquaten Kausalzusammenhangs vorgelagert.',HZ+'Strukturiertes Beweisverfahren im UVG','psych');
add(T8,'K','Psychosoziale Faktoren und Indikatorenprüfung (8C_481/2024, 8C_502/2025) – bewerten Sie jede Aussage:',
 [['Ob ein verselbständigter Gesundheitsschaden vorliegt, ist im strukturierten Beweisverfahren zu prüfen.',true],
  ['Umstände und ihre Entwicklung werden als Ressourcen oder Belastungsfaktoren in den Komplexen «Persönlichkeit» und «sozialer Kontext» bewertet.',true],
  ['Soziale Belastungen mit funktionellen Folgen sind im Gesamtkontext der Indikatorenprüfung zu würdigen.',true],
  ['Soziale Belastungen sind vorab und losgelöst von der Indikatorenprüfung zu würdigen.',false]],
 'Psychische Störungen mit Krankheitswert und psychosoziale/soziokulturelle Aspekte überschneiden sich oft; sie sind aber nicht vorab auszuscheiden.',HZ+'Psychosoziale Faktoren','psych');
add(T8,'K','Verzicht auf das strukturierte Beweisverfahren – bewerten Sie jede Aussage:',
 [['Es ist entbehrlich, wenn beweiswertige fachärztliche Berichte eine Arbeitsunfähigkeit nachvollziehbar begründet verneinen.',true],
  ['Es kann bei prägnanten Befunden und übereinstimmenden fachärztlichen Einschätzungen entfallen.',true],
  ['Bei Hinweisen auf Inkonsistenzen, Aggravation oder Simulation ist eine vertiefende Prüfung des Schweregrads und der Konsistenz nötig.',true],
  ['Bei Hinweisen auf Aggravation ist es stets entbehrlich.',false]],
 'Aus Gründen der Verhältnismässigkeit kann abgesehen werden, wo es nicht nötig oder nicht geeignet ist (BGE 143 V 418 E. 7.1; 8C_252/2025, 8C_802/2023).',HZ+'Verzicht auf die Indikatorenrechtsprechung','psych');
add(T8,'A+','Welche Aussage zur Dauer der psychiatrischen Exploration trifft laut 9C_204/2026 zu?',
 ['Die Dauer unterliegt dem Ermessen der Experten und ist allein nicht entscheidend; massgebend ist, ob der Bericht inhaltlich vollständig und schlüssig ist',
  'Eine Exploration unter 90 Minuten hat nie Beweiswert',
  'Die Dauer muss mindestens 3 Stunden betragen',
  'Die Dauer ist das wichtigste Qualitätskriterium'],
 'Im Fall dauerte die Begutachtung 1 Stunde und 22 Minuten; die Konzentrationsstörung wurde als Nebenkriterium der depressiven Episode berücksichtigt.',HZ+'Psychiatrische Exploration','psych');
add(T8,'A+','Wie ist die Rolle psychologischer Tests in der psychiatrischen Begutachtung nach 8C_252/2025?',
 ['Ergänzend; klinische Untersuchung, Anamnese, Symptomerfassung und Verhaltensbeobachtung bleiben ausschlaggebend',
  'Zwingend für jedes psychiatrische Gutachten',
  'Entscheidend, da Tests objektiver sind als die Exploration',
  'Unzulässig im Sozialversicherungsverfahren'],
 'Allein aus dem Verzicht auf psychologische Tests ist nicht auf fehlenden Beweiswert des Teilgutachtens zu schliessen.',HZ+'Psychiatrische Expertise 8C_252/2025','psych');
add(T8,'A+','Wer beurteilt die Arbeitsfähigkeit unter Berücksichtigung neuropsychologischer Defizite (8C_535/2025)?',
 ['Der psychiatrische Facharzt; die neuropsychologische Abklärung ist lediglich eine Zusatzuntersuchung',
  'Die neuropsychologische Fachperson allein',
  'Das Gericht ohne Fachärzte',
  'Die Hausärztin'],
 'Der Verweis der Neuropsychologie auf das psychiatrische Gutachten ist daher kein Auftragsmangel.',HZ+'Neuropsychologisches Teilgutachten','psych');
add(T8,'A+','Wann ist ein Sachverständiger wegen Befangenheit abzulehnen (8C_188/2024)?',
 ['Wenn objektiv begründete Umstände den Anschein der Befangenheit und die Gefahr der Voreingenommenheit begründen; tatsächliche Befangenheit muss nicht nachgewiesen werden',
  'Nur bei nachgewiesener tatsächlicher Befangenheit',
  'Wenn die versicherte Person subjektiv Misstrauen empfindet',
  'Bei allgemein-strukturellen Einwendungen gegen die Gutachterstelle'],
 'Einzelfallunabhängige, allgemein-strukturelle Einwendungen sind keine Ausstandsgründe. Ein Gutachten ohne die erforderliche Unabhängigkeit ist als Beweismittel auszuschliessen.',HZ+'Befangenheit von Sachverständigen','psych');
add(T8,'A+','Was entschied das Bundesgericht im Leiturteil BGE 151 V 66 zur Adipositas?',
 ['Die grundsätzliche Behandelbarkeit steht einem Rentenanspruch nicht mehr von vornherein entgegen; zumutbare Behandlungen dürfen verlangt werden',
  'Adipositas begründet nie eine Invalidität',
  'Adipositas begründet immer eine Invalidität',
  'Auf Adipositas sind sämtliche Indikatoren aus BGE 141 V 281 anzuwenden'],
 'Es kommt für die IV nicht auf die Diagnose an, sondern auf die Auswirkung auf die Arbeitsfähigkeit; eine Übertragung aller Indikatoren auf alle Erkrankungen ist nicht gerechtfertigt.',HZ+'Adipositas BGE 151 V 66','innere');
add(T8,'K','Berichte von Psychotherapeuten und Psychologen in der IV (8C_439/2024, 8C_515/2024) – bewerten Sie jede Aussage:',
 [['Psychologen und Psychotherapeuten sind nicht kompetent, Arbeitsunfähigkeiten zu attestieren.',true],
  ['Eine fachärztliche Beurteilung kann grundsätzlich nur durch eine fachärztlich abweichende Beurteilung entkräftet werden.',true],
  ['Der Bericht einer Psychotherapeutin ist nicht von vornherein unbeachtlich; es gilt die freie Beweiswürdigung.',true],
  ['Berichte von Psychotherapeuten sind im Verfahren grundsätzlich unbeachtlich.',false]],
 'Die kantonalen Gerichte haben alle Beweismittel objektiv zu prüfen, unabhängig von der Herkunft.',HZ+'Berichte von Psychotherapeuten','psych');
add(T8,'A+','Was regelt Art. 28 Abs. 3 ATSG hinsichtlich Ärztinnen und Ärzten als Dritte?',
 ['Sie sind durch die Ermächtigung nicht nur zur Auskunft berechtigt, sondern auch verpflichtet',
  'Sie dürfen jede Auskunft verweigern',
  'Sie sind nur bei Zustimmung des Gerichts zur Auskunft verpflichtet',
  'Sie sind nur zur Auskunft an Gerichte berechtigt'],
 'Die Bestimmung ist die gesetzliche Grundlage für die Verpflichtung Dritter an der Beweiserhebung (9C_285/2026).',HZ+'Mitwirkung Dritter','psych');

/* ================= Ebner: Psychiatrie Videobeispiele ================= */
const T9='Psychiatrie: Videobeispiele & Leitlinien (Ebner)';
add(T9,'K','Aufklärungssequenz vor der Exploration (Leitlinien Ebner et al. 2016) – bewerten Sie jede Aussage:',
 [['Es wird mitgeteilt, dass im Auftrag des Auftraggebers begutachtet wird und keine Behandlung stattfindet.',true],
  ['Der Gutachter entscheidet nicht über Leistungen; der Leistungsentscheid liegt beim Auftraggeber.',true],
  ['Es wird Transparenz über die vorliegenden Akten (einschliesslich allfälliger Observationsmaterial) hergestellt.',true],
  ['Observationsmaterial bleibt dem Exploranden verborgen, damit er nicht beeinflusst wird.',false]],
 'Weitere Punkte: zentrale Fragen des Gutachtens, Schweigepflicht (auch gegenüber Dolmetscher), Auskunftspflicht und Möglichkeit, über etwas nicht sprechen zu wollen.',EB+'Leitlinien zur Aufklärungssequenz','psych');
add(T9,'A-','Welches Element gehört NICHT zur Methodik der Konsistenz- und Plausibilitätsprüfung nach Ebner et al. 2016?',
 ['Routinemässige Bildgebung des Gehirns',
  'Klinische Beurteilung von Plausibilität',
  'Aussagenpsychologische Beurteilung von Glaubhaftigkeit',
  'Fremdanamnese und Beurteilung von Observationsmaterial'],
 'Bausteine: 1 allgemeine Konsistenz, 2 klinische Plausibilität, 3 Psychometrie (kognitive Beschwerdenvalidierung/Performanzvalidierung, psychologische Beschwerdenvalidierung), 4 aussagenpsychologische Glaubhaftigkeit, 5 Fremdanamnese, 6 Observationen; im Längs- und Querschnitt.',EB+'Methodik Konsistenz und Plausibilität','psych');
add(T9,'A+','Was ist gemäss ICD-10 für alle Angststörungen als Eingangsvoraussetzung erforderlich?',
 ['Eine bestimmte Anzahl typischer vegetativer bzw. somatischer Begleitsymptome (z. B. Palpitationen, Schweissausbruch, Zittern, Schwindel)',
  'Ein auslösendes Trauma',
  'Eine Dauer von mindestens zwei Jahren',
  'Eine psychotische Symptomatik'],
 'Angststörungen: F40 phobische Störungen (u. a. Agoraphobie, soziale Phobie), F41 andere Angststörungen (Panikstörung, generalisierte Angststörung).',EB+'Angststörungen gem. ICD-10','psych');
add(T9,'A+','Wie ist die Simulierbarkeit einer Depression einzuordnen (Monaro et al. 2018) und was folgt daraus?',
 ['Depressionen sind potenziell leicht zu simulieren; man beurteilt objektivierbare Psychopathologie und Konsistenz im Längs- und Querschnitt sowie Funktionen',
  'Depressionen sind kaum zu simulieren, daher genügt die Selbstauskunft',
  'Nur psychometrische Tests sind aussagekräftig',
  'Depressionen werden nicht auf Plausibilität geprüft'],
 'Zusätzlich: psychologische Beschwerdenvalidierung; bei kognitiven Störungen zusätzlich Performanzvalidierung; bei psychotischer Depression gelten die Plausibilitätskriterien für Psychosen.',EB+'Plausibilität von Depression','psych');
add(T9,'K','Hinweise auf mangelnde Plausibilität einer berichteten Psychose (Resnick/Knoll) – bewerten Sie jede Aussage:',
 [['Es fehlen offensichtliche oder subtile Psychosezeichen (z. B. Zerfahrenheit, Parathymie, Negativsymptomatik).',true],
  ['Es werden unwahrscheinliche Symptome bejaht, z. B. dass Autos Mitglieder einer religiösen Bewegung sind.',true],
  ['Es werden ungewöhnliche Sinnestäuschungen geschildert, ohne Hinweise auf Wahnsymptomatik.',true],
  ['Die Person verneint bizarre Fangfragen und beantwortet alle Fragen kooperativ.',false]],
 'Auch Ausweichen auf Fragen oder Unkooperativität sind Hinweise.',EB+'Plausibilität von Psychosen','psych');
add(T9,'A+','Welcher Goldstandard wird bei der Psychodiagnostik der PTBS genannt?',
 ['CAPS nach DSM-5',
  'Mini-ICF-APP',
  'TOMM',
  'AMDP'],
 'Bei Hinweisen auf nicht authentische Angaben zusätzlich psychologische Beschwerdenvalidierung; bei relevanten kognitiven Störungen Performanzvalidierung. Spannungsfeld: Objektivierung vs. «primum nihil nocere».',EB+'Problemfelder und Vorgehen PTSD','psych');
add(T9,'K','Klinische Validierung bei PTBS (Dressing/Foerster 2010) – Hinweise auf AUTHENTISCHE Angaben. Bewerten Sie jede Aussage:',
 [['Zögernder Symptombericht auf Fragen hin, Vermeidung von Symptomschilderung.',true],
  ['Häufigkeit und Inhalte der Albträume wechseln.',true],
  ['Vegetative Erregung und Anspannung sind direkt beobachtbar.',true],
  ['Der Symptomverlauf ist völlig stabil und unveränderlich.',false]],
 'Weitere Hinweise auf Authentizität: Erinnerungsinseln statt kompletter Amnesie, Selbstvorwürfe («survivor guilt»), frühere Konflikte werden erwogen, frühzeitige Therapiebemühungen, fluktuierende Symptomatik.',EB+'PTBS klinische Validierung','psych');
add(T9,'K','Klinische Validierung bei PTBS – Hinweise auf NICHT VALIDE Angaben. Bewerten Sie jede Aussage:',
 [['Der Symptombericht ist übertrieben ausführlich, spontan und früh.',true],
  ['Flashbacks sind wenig plastisch und ohne Zeichen vegetativer Erregung.',true],
  ['Die Behandlung beginnt erst bei juristischer Auseinandersetzung.',true],
  ['Es besteht eine ausgeprägte «survivor guilt» trotz Tod anderer.',false]],
 'Ausgeprägte «survivor guilt» spricht für Authentizität; Hinweise auf nicht valide Angaben sind zudem komplette Amnesie, stets gleiche Albträume, Beschuldigung anderer, konfliktfreies Leben vor dem Trauma.',EB+'PTBS klinische Validierung','psych');
add(T9,'A+','Welche Kriterien kennzeichnen die PTBS in ICD-11?',
 ['Reduktion auf Vermeidung, Wiedererleben und Wahrnehmung erhöhter Bedrohung',
  'Wiedererleben, Hyperarousal, negative Kognitionen und Dissoziation (wie DSM-5)',
  'Nur Wiedererleben',
  'Andauernde Persönlichkeitsänderung (F62.0) als Kernkriterium'],
 'Komplexe PTBS (kPTBS): zusätzlich Probleme der Affektregulation, Gefühle von Minderwertigkeit, Scham, Schuld; Funktionsbeeinträchtigung obligat; Abgrenzung zu Borderline-PS und dissoziativen Störungen.',EB+'Begutachtung PTSD / kPTBS ICD-11','psych');
add(T9,'A+','Was ändert sich in ICD-11 bei depressiven Störungen?',
 ['Funktionseinschränkung wird schon als Eingangsvoraussetzung genannt; ab mittelgradiger Episode wird mit/ohne psychotische Symptomatik unterschieden',
  'Die Schweregrade entfallen vollständig',
  'Depressive Störungen werden nicht mehr in Episoden gegliedert',
  'Psychotische Symptome sind nur bei schwerer Episode relevant'],
 'Bei der Beurteilung des Schweregrads werden neu Einbussen des sozialen/beruflichen Funktionsniveaus berücksichtigt.',EB+'Mood Disorders ICD-11','psych');
add(T9,'A+','Welche Aussage kennzeichnet die chronische Schmerzstörung mit somatischen und psychischen Faktoren (F45.41)?',
 ['Mindestens 6 Monate Schmerz mit körperlichem Ausgangspunkt; psychischen Faktoren kommt Bedeutung für Schweregrad, Exazerbation und Aufrechterhaltung zu, nicht für den Beginn',
  'Schmerz ist ausschliesslich psychisch verursacht',
  'Schmerz wird bewusst vorgetäuscht',
  'Schmerz tritt nur im Rahmen von Psychosen auf'],
 'Der Schmerz verursacht klinisch bedeutsames Leiden und Beeinträchtigungen und wird nicht absichtlich erzeugt. DSM-5-Somatische Belastungsstörung: persistierend länger als 6 Monate, Zusatzbestimmungen «überwiegend Schmerz», «andauernd», Schweregrad.',EB+'Schmerzstörung ICD-10 GM / DSM-5','psych');
add(T9,'A+','Welche Neuerung bringt die «Körperbelastungsstörung» (6C20) in ICD-11?',
 ['Drei Schweregrade; Verzicht auf das Kriterium «keine diagnostizierbare körperliche Krankheit»',
  'Zwingend nur zwei Schweregrade',
  'Die Diagnose setzt ein Fehlen jeder körperlichen Erkrankung voraus',
  'Neurasthenie ist ausdrücklich ausgeschlossen'],
 'Kriterien: Beschwerden, Verhalten, Einengung des Denkens, funktionelle Einschränkungen. Einbezug von Neurasthenie, nicht jedoch – wie in DSM-5 – Hypochondrie.',EB+'ICD-11 Körperbelastungsstörung','psych');
add(T9,'K','Schweregrad nach den Leitlinien Ebner et al. 2016 – bewerten Sie jede Aussage:',
 [['Aussagen zum Schweregrad sollen aus verschiedenen Quellen gemacht werden.',true],
  ['Ressourcen werden konsistenten Einschränkungen in der alltäglichen Lebensführung gegenübergestellt.',true],
  ['Komorbide Störungen und das Ausmass der Chronifizierung werden einbezogen.',true],
  ['Allein die subjektive Leistungsfähigkeit der versicherten Person bestimmt den Schweregrad.',false]],
 'Weitere Kriterien: Auswirkung auf alle Lebensbereiche, Coping und Inanspruchnahme des Gesundheitssystems, beobachtbarer Leidensdruck, nachvollziehbare Erfolglosigkeit bisheriger Therapien.',EB+'Schweregrad gemäss Leitlinien','psych');
add(T9,'A+','Welches Instrument wird zur Beurteilung von Fähigkeitsstörungen/Aktivität bei psychischen Störungen genannt?',
 ['Mini-ICF-APP (nach Linden & Baron)',
  'CAPS',
  'SRSI',
  'TOMM'],
 'Methodik der zumutbaren Arbeitsfähigkeit (Ebner 2016): Diagnosen/Komorbidität, Schweregrad, Konsistenz/Validität/Plausibilität, Prognose, Aktivität (Mini-ICF-APP), soziale Teilhabe (Arbeitsfähigkeit).',EB+'Funktionsniveau / Mini-ICF-APP','psych');
add(T9,'A+','Welches Verfahren gehört zur Performanzvalidierung (neuropsychologisch), nicht zur psychologischen Beschwerdenvalidierung?',
 ['TOMM (Test of Memory Malingering)',
  'MMPI-2-RF',
  'SRSI (Self-Report Symptom Inventory)',
  'CAPS'],
 'Psychologische Beschwerdenvalidierung: eingebettete Verfahren wie SRSI und MMPI-2-RF. Performanzvalidierung im Rahmen der neuropsychologischen Untersuchung: z. B. TOMM.',EB+'PTBS testpsychologische Validierung','psych');
add(T9,'A+','Wie fasst Ebner den Fall Frau C. zusammen, wenn durchgängige, deutliche Hinweise auf eingeschränkte Beschwerdenvalidität vorliegen?',
 ['Eine verwertbare «Subtraktion» aggravierter Anteile ist nicht möglich; eine krankheitswertige Störung mit Einfluss auf die Arbeitsfähigkeit lässt sich nicht mit überwiegender Wahrscheinlichkeit ausweisen',
  'Die aggravierten Anteile werden prozentual abgezogen, der Rest gilt als echt',
  'Es gilt die volle Arbeitsunfähigkeit, weil der Bericht der Explorandin nicht widerlegt ist',
  'Die Diagnose PTBS ist dennoch zu stellen'],
 'Beschriebene und beobachtbare Fluktuationen waren nicht plausibel (theatralische Symptompräsentation, Diskrepanzen, verminderte Anstrengungsbereitschaft, BVT); eine gewisse diagnostische Unsicherheit bleibt hinsichtlich einer affektiven Symptomatik.',EB+'Frau C: Zusammenfassende Beurteilung','psych');

})();
