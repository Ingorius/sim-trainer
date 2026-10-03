/* Modul 3 – Fachspezifische Begutachtung. Quelle: SIM-Repetitorium Modul 3 (2026) und Kursunterlagen M3 2026.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m3-'+String(n).padStart(3,'0'),modul:3,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};
const R='Repetitorium M3, ';

/* ---- Kap. 1: Methodik ---- */
add('Methodik: vom Befund zur Aussage','A-','Welche Aussage zu Befund, Diagnose und Funktion ist FALSCH?',
 ['Eine vorhandene Diagnose bedeutet automatisch Arbeitsunfähigkeit in der bisherigen Tätigkeit',
  'Ein objektiv erhobener Wert kann für die konkrete Fragestellung trotzdem nicht valide sein',
  'Für die Arbeitsfähigkeit ist die dimensionale Funktionsbeschreibung häufig entscheidender als der Diagnosename',
  'Ein unspektakulärer Bildbefund schliesst eine relevante Funktionsstörung nicht automatisch aus'],
 '«Diagnose vorhanden = arbeitsunfähig» ist ein unzulässiger Kurzschluss, ebenso «kein spektakulärer Bildbefund = keine relevante Funktionsstörung». Merksatz: Befund → Diagnose → Funktion → Anforderungen → Arbeitsfähigkeit.',R+'Kap. 1 (S. 7, 9–10)');

add('Methodik: vom Befund zur Aussage','K','Quellentrennung und Konsistenz – bewerten Sie jede Aussage:',
 [['Vor der Gesamtbeurteilung werden Aktenangaben, Selbstauskunft, Fremdanamnese, beobachtetes Verhalten, Untersuchungsbefunde und Zusatzbefunde getrennt dokumentiert.',true],
  ['Ein einzelner «auffälliger» Test beweist Simulation oder Aggravation.',false],
  ['Ein einzelner unauffälliger Moment genügt, um eine dauerhafte Einschränkung auszuschliessen.',false],
  ['Konsistenz ist eine Gesamtbeurteilung über Zeit, Quellen und Lebensbereiche.',true]],
 'Übereinstimmung stärkt eine Hypothese; Widersprüche verlangen Erklärung, nicht vorschnelle Etikettierung. Beispiel: Wer «nur 10 Minuten sitzen» kann, aber 3 Stunden ruhig im Gespräch sitzt, zeigt eine relevante Diskrepanz – zu prüfen mit Kontext, Pausen, Ablenkung, Tagesform, anderen Lebensbereichen.',R+'Kap. 1 (S. 9–10)');

add('Methodik: vom Befund zur Aussage','A+','Wo endet der medizinische Ermessensspielraum bei der Arbeitsfähigkeitsschätzung?',
 ['Dort, wo Akten unvollständig verarbeitet, Untersuchungen nicht nachvollziehbar dokumentiert, Kriterien nicht geprüft oder Widersprüche nicht aufgelöst werden',
  'Er endet nie, solange die Gutachterin fachlich qualifiziert ist',
  'Er endet bei jeder Abweichung vom Vorgutachten',
  'Er endet, sobald eine Prozentangabe genannt wird'],
 'Ein vertretbarer Ermessensspielraum betrifft vor allem die Quantifizierung funktioneller Auswirkungen. Je genauer funktionelle Anknüpfungstatsachen, Tätigkeitsprofil und Präsenz/Rendement beschrieben sind, desto belastbarer ist die Schätzung.',R+'Kap. 1 (S. 10)');

add('Methodik: vom Befund zur Aussage','A-','Welche Aussage zu psychopathologischer Befundung und Diagnose ist FALSCH?',
 ['AMDP-Befunde führen automatisch zur Diagnose',
  'AMDP beschreibt psychopathologische Befunde, ordnet sie aber nicht diagnostisch ein',
  'ICD oder DSM ordnen diagnostisch ein, ersetzen aber nicht die Prüfung von Schweregrad und funktionellen Folgen',
  'Zum systematischen Vorgehen gehört, Evidenz für und gegen einen Befund zu erheben'],
 'Systematik: passende Befundklassifikation wählen – Evidenz für/gegen erheben – Befund nach Schwelle, Sensitivität, Spezifität bewerten – diagnostische Klassifikation wählen – prüfen, ob Kriterien tatsächlich erfüllt sind.',R+'Kap. 1 (S. 9)','psych');

/* ---- Kap. 2: Lumbale Beschwerden ---- */
add('Lumbale Beschwerden','A+','Welche Funktion haben «Flags» bei tiefen Rückenschmerzen?',
 ['Red = Hinweis auf spezifische/gefährliche Ursache; Yellow = Chronifizierungsrisiko durch psychische Faktoren; Blue = arbeitsbezogene Wahrnehmungen; Black = äussere/systemische Hindernisse',
  'Red = psychische Belastung; Yellow = Malignom; Blue = Versicherung; Black = Arbeitsplatz',
  'Alle Flags sind Hinweise auf Simulation',
  'Flags ersetzen die klinische Untersuchung'],
 'Red-Flag-Beispiele: Malignom, Spondylodiszitis, Cauda-equina-Syndrom, relevante Fraktur oder Diskushernie. Yellow: ungünstige Schmerzüberzeugungen, Vermeidungsverhalten. Blue: Überzeugung, Arbeit sei schädlich. Black: arbeitsrechtliche, versicherungsbezogene oder soziale Rahmenbedingungen.',R+'Kap. 2 (S. 12)','rheuma');

add('Lumbale Beschwerden','K','Klinische Untersuchung des Rückens – bewerten Sie jede Aussage:',
 [['Geringe Haltungsabweichungen oder kleine Beinlängendifferenzen sind häufig nicht entscheidend.',true],
  ['Schober-Mass und manuelle Palpation sind nur begrenzt valide.',true],
  ['Ein grosser Finger-Boden-Abstand beweist eine Wurzelkompression.',false],
  ['Neurologische Ausfälle müssen anatomisch plausibel, reproduzierbar und mit anderen Befunden korreliert sein.',true]],
 'Ein grosser Finger-Boden-Abstand kann die Wahrscheinlichkeit einer Wurzelkompression erhöhen, beweist sie aber nicht. Eine schmerzhafte passive Extension kann im passenden Kontext auf Instabilität hinweisen.',R+'Kap. 2 (S. 12)','rheuma');

add('Lumbale Beschwerden','A+','Was unterscheidet ein radikuläres von einem pseudoradikulären Syndrom?',
 ['Radikulär: klinisch-anatomisch stimmige Funktionsstörung einer Nervenwurzel (Schmerz, Sensibilität, Motorik und/oder Reflexe); pseudoradikulär: Ausstrahlung ohne konsistentes Wurzelmuster mit objektivierbarem sensomotorischem Ausfall',
  'Radikulär: Ausstrahlung ohne Wurzelmuster; pseudoradikulär: objektiver Wurzelausfall',
  'Beide sind identisch',
  'Radikulär betrifft nur die Halswirbelsäule'],
 '«Radikulär plus» meint Warnbefunde (zusätzliche Myelopathie oder deutliche Wurzelausfälle) und verlangt zügige Diagnostik. Kraft nach M0–M5: Zielmuskel, Seitenvergleich, Reproduzierbarkeit, Schmerzhemmung, Verhalten in funktionellen Aufgaben.',R+'Kap. 2 (S. 12)','rheuma');

add('Lumbale Beschwerden','K','Elektrophysiologie und Bildgebung der Wirbelsäule – bewerten Sie jede Aussage:',
 [['Die Elektromyographie kann eine axonale Läsion nach einer Latenz von ungefähr zwei bis vier Wochen erfassen.',true],
  ['Paraspinale EMG-Befunde können insbesondere mit höherem Alter falsch positiv sein.',true],
  ['Die MRT ist bei den meisten neurologischen Fragestellungen die Bildgebung der Wahl; CT ist v. a. für knöcherne Fragen oder bei MRT-Kontraindikation relevant.',true],
  ['Degenerative Veränderungen, Vorwölbungen und Hernien kommen bei Beschwerdefreien nicht vor.',false]],
 'Anatomische Läsion, klinisches Syndrom und funktionelle Folge sind drei verschiedene Aussagen; erst ihre stimmige Korrelation trägt die gutachtliche Schlussfolgerung.',R+'Kap. 2 (S. 13)','neuro');

add('Lumbale Beschwerden','A-','Welche Aussage zu Waddell-Zeichen ist FALSCH?',
 ['Mehrere positive Zeichen belegen eine Simulation und beantworten die Frage der Glaubwürdigkeit',
  'Sie sind Hinweise auf eine nicht rein organisch erklärbare Symptomatik',
  'Mehrere positive Zeichen lenken die Aufmerksamkeit auf psychosoziale oder funktionelle Faktoren',
  'Sie fordern eine breitere bio-psycho-soziale und funktionelle Prüfung'],
 'Waddell-Zeichen sind kein Simulationsnachweis und beantworten nicht die moralische Frage, ob eine Person «glaubwürdig» ist.',R+'Kap. 2 (S. 13)','rheuma');

add('Lumbale Beschwerden','A+','MRT: kleine mediane L5/S1-Hernie ohne Neurokompression; Kraft und Reflexe normal, Wurzeldehnungszeichen negativ, Sensibilitätsangabe exakt an der Körpermittellinie. Welche Schlussfolgerung ist richtig?',
 ['Eine schwere radikuläre Ausfallsymptomatik ist nicht belegt; zu prüfen bleiben lumbospondylogene, funktionelle und psychische Anteile sowie die konkrete Belastbarkeit',
  'Die Hernie erklärt eine volle Arbeitsunfähigkeit',
  'Die Beschwerden sind zwingend simuliert',
  'Es besteht ein radikuläres Syndrom mit Wurzelkompression'],
 'Transfer: Nicht «MRT zeigt etwas», sondern «welche Hypothese ist nach Abwägung aller Befunde überwiegend getragen?». Aus dem Bild folgt keine Prozentzahl; erforderlich sind Belastungsprofil, Präsenz und Rendement.',R+'Kap. 2 (S. 13)','rheuma');

/* ---- Kap. 3: Funktionelle neurologische Symptome ---- */
add('Funktionelle neurologische Störungen','K','Funktionelle neurologische Symptome – bewerten Sie jede Aussage:',
 [['Eine funktionelle Störung ist positiv klinisch zu begründen; «Bildgebung normal» ist kein ausreichendes Argument.',true],
  ['Positive Zeichen sind z. B. Variabilität, Inkonsistenz derselben Funktion unter verschiedenen Bedingungen, Inkongruenz mit neuroanatomischen Mustern, Diskrepanz zwischen formaler Prüfung und spontaner Handlung.',true],
  ['«Funktionell» bedeutet «eingebildet» oder «willentlich erzeugt».',false],
  ['Eine positiv begründete funktionelle Diagnose beantwortet die Arbeitsfähigkeit automatisch.',false]],
 'Die Frage nach bewusster Täuschung ist von der positiven Diagnose einer funktionellen Störung zu trennen. Nötig bleiben Schweregrad, Alltagsauswirkung, Komorbidität, Ressourcen, Behandelbarkeit, Verlauf, Konsistenz.',R+'Kap. 3 (S. 15)','neuro');

add('Funktionelle neurologische Symptome','A+','Bei formaler Kraftprüfung zeigt sich ausgeprägtes Nachgeben, beim spontanen Aufstehen und Treppensteigen deutlich bessere Kraftentfaltung. Welche Schlussfolgerung ist zunächst angemessen?',
 ['Erklärungsbedürftige funktionelle Diskrepanz (positive Evidenz für Inkonsistenz), nicht «Simulation»',
  'Simulation',
  'Eine periphere Parese',
  'Eine zentrale Parese mit Pyramidenbahnzeichen'],
 'Variabilität kann für eine funktionelle Störung sprechen, muss aber eingeordnet werden: Schmerzen, Angst, Ermüdung, Instruktionsverständnis, Lern-/Übungseffekte oder wechselnde Aufmerksamkeit beeinflussen Leistung ebenfalls. Gute Dokumentation: Aufgabe, alternative Bedingung, Diskrepanz, Reproduzierbarkeit, geprüfte Gegenhypothesen.',R+'Kap. 3 (S. 15)','neuro');

add('Funktionelle neurologische Symptome','A+','Welcher Befund ist nicht ohne Weiteres mit peripheren Nerven, Dermatomen oder zentralen Bahnen vereinbar?',
 ['Eine exakt an der Mittellinie begrenzte Hemisensibilitätsstörung oder ein Quadrantenmuster',
  'Ein Sensibilitätsausfall im Dermatom L5 mit passender Kraftminderung',
  'Ein Ausfall des Achillessehnenreflexes bei S1-Syndrom',
  'Eine Fussheberschwäche mit passendem Sensibilitätsausfall'],
 'Positive Zeichen werden in Schwäche, Sensibilität und Gang gesucht.',R+'Kap. 3 (S. 15)','neuro');

/* ---- Kap. 4: Bildgebung ---- */
add('Bildgebung & Neuroradiologie','A-','Welche Aussage zur Bildgebung im Gutachten ist FALSCH?',
 ['Ein später fehlendes Akutzeichen (z. B. kein Knochenmarködem nach 6 Monaten) beweist, dass nie eine Verletzung bestand',
  'Frühere oder unfallnahe Bildgebung ist für die Kausalitätsbeurteilung besonders wertvoll',
  'Die Grösse einer Läsion korreliert nicht linear mit Schmerz oder Arbeitsfähigkeit',
  'Funktionsaufnahmen der Halswirbelsäule zeigen eine grosse Normalvariation und sind nicht automatisch beweisend'],
 'Benötigt werden unfallnahe Befunde, Mechanismus, Verlauf, Vorzustand und heutige Residuen. Häufige Denkfehler: «auffällig» = «symptomverursachend»; fehlende morphologische Erklärung als Beweis gegen Beschwerden; neues Verfahren = stärkerer Beweis.',R+'Kap. 4 (S. 17)');

add('Bildgebung & Neuroradiologie','K','Modalitäten und Kernfragen – bewerten Sie jede Aussage:',
 [['CT ist besonders stark für knöcherne Strukturen und akute Verfügbarkeit.',true],
  ['MRT zeigt Weichteile, Rückenmark, Nerven, Knochenmark und zeitabhängige Gewebeveränderungen differenzierter.',true],
  ['Suszeptibilitätsgewichtete Sequenzen können Mikroblutungen zeigen.',true],
  ['DTI, MRS, ASL und KI-gestützte Auswertung gelten als beweisend und ersetzen die klinische Korrelation.',false]],
 'Fortgeschrittene Verfahren sind vorsichtig und kontextbezogen zu interpretieren. Sensitivität und Spezifität gelten für eine definierte Frage und Population und lassen sich nicht ohne Weiteres auf die individuelle Kausalitäts- oder Arbeitsfähigkeitsfrage übertragen.',R+'Kap. 4 (S. 17)','neuro');

add('Bildgebung & Neuroradiologie','A+','Welche drei Fragen verbinden Bildgebung mit dem Gutachten (neuroradiologisch)?',
 ['Wo liegt die Läsion, ist ihr Muster mit einem Trauma vereinbar, und passt der Befund zu Symptomatik und zeitlichem Verlauf?',
  'Wie teuer ist die Untersuchung, wer bezahlt sie, wie lange dauert sie?',
  'Welche Rente ist angemessen, wie hoch ist der Invaliditätsgrad, wer haftet?',
  'Ist die Patientin glaubwürdig, ist sie motiviert, ist sie compliant?'],
 'Medizin vs. Recht: Die Radiologin beschreibt und interpretiert Morphologie, entscheidet aber weder Leistungsanspruch noch adäquate Kausalität.',R+'Kap. 4 (S. 17–18)','neuro');

/* ---- Kap. 5: Kausalität, Biomechanik ---- */
add('Kausalität & Biomechanik','A+','Welche Zuordnung der Aufgaben von Unfallanalyse, Biomechanik und Medizin ist richtig?',
 ['Unfallanalyse: technischer Ablauf; Biomechanik: Belastung auf den Körper und Erklärbarkeit der Verletzung; Medizin: Passt die konkrete Verletzung bei dieser Person zu Mechanismus, Verlauf und Befunden?',
  'Unfallanalyse: medizinische Diagnose; Biomechanik: rechtliche Zurechnung; Medizin: Fahrzeugschaden',
  'Biomechanik entscheidet abschliessend über die klinische Kausalität',
  'Die Unfallanalyse beurteilt die Arbeitsfähigkeit'],
 'Typische Grenzen: Unfallanalyse – keine medizinische Diagnose; Biomechanik – keine abschliessende klinische Kausalitätsdiagnose; Medizin – keine abschliessende rechtliche Zurechnung. Delta-v ist wichtig, aber nicht allein entscheidend; Fahrzeugschaden und Reparaturkosten sind keine direkten Verletzungsmesser.',R+'Kap. 5 (S. 19)');

add('Kausalität & Biomechanik','A+','Welche Prüfkette gilt für die medizinische Kausalitätsbeurteilung?',
 ['Ereignis → geeigneter Mechanismus → zeitnahes Beschwerde-/Befundbild → passende Morphologie → konsistenter Verlauf → heutige Folgen; daneben Vorzustand und Alternativursachen',
  'Diagnose → Rente → Adäquanz → Ereignis',
  'Befund → Prozentzahl → Mechanismus',
  'Mechanismus → Rente → Verlauf'],
 'Bei der seltenen Annahme einer traumatischen Diskushernie ist die Kette besonders dicht zu fordern: ausreichend schweres Trauma, unmittelbare Symptome und Arbeitsunfähigkeit, unfallnahe passende MRT-Morphologie, Abgleich mit Vorzustand. «Nach Unfall entdeckt» ≠ «durch Unfall entstanden».',R+'Kap. 5 (S. 19)');

add('Kausalität & Biomechanik','K','Listenverletzungen, Status quo ante/sine – bewerten Sie jede Aussage:',
 [['Eine häufige Degeneration allein genügt nicht als individuelle Erklärung.',true],
  ['Der Status quo sine bezeichnet den Zustand, der sich ohne Unfall im natürlichen Verlauf des Vorzustands eingestellt hätte.',true],
  ['«Eine Distorsion heilt nach sechs Monaten» beweist im Einzelfall den Status quo ante oder sine.',false],
  ['Aus einzelnen Folienformeln dürfen starre Prozentzahlen zur Gewichtung abgeleitet werden.',false]],
 'Beide Zeitpunkte sind anhand von Befunden und Verlauf zu begründen, nicht mit pauschalen Heilfristen. Für den Entlastungsbeweis (vorwiegend Abnützung/Erkrankung) ist die konkrete individuelle Gewichtung zu liefern.',R+'Kap. 5 (S. 19–20)','ortho');

add('Kausalität & Biomechanik','A+','Welche Befunde helfen bei einer vorderen Kreuzbandläsion bei der Differenzierung frisch versus alt/Reruptur?',
 ['Knochenprellungsmuster, Signalveränderungen, Begleitverletzungen, Bohrkanäle nach Voroperation, Brückensymptome und zeitnahe Diagnostik',
  'Allein das Alter der Patientin',
  'Allein die Höhe der Reparaturkosten',
  'Allein die Meniskusmorphologie'],
 'Meniskusmorphologie allein entscheidet die Kausalität nicht. Bei Achillessehnenruptur/Bandverletzungen: Ereignis, präexistente Tendinopathie, Rupturmorphologie, frühe Klinik, Verlauf. Das spätere Fehlen akuter MRT-Zeichen schliesst eine frühere Verletzung nicht aus.',R+'Kap. 5 (S. 20)','ortho');

add('Kausalität & Biomechanik','A+','Bei Epicondylopathie: Was ist zu unterscheiden?',
 ['Eine Berufskrankheitsfrage von einer Unfallkausalitätsfrage',
  'Eine Frage der Adäquanz von einer Frage der Invalidität',
  'Eine Frage der Diagnose von einer Frage der Rente',
  'Eine Frage der Haftpflicht von einer Frage der Krankenkasse'],
 'Bei Rotatorenmanschettenläsionen: chronische Sehnenschäden, Muskelatrophie, Retraktion, frühere Beschwerden, Mechanismus und zeitnahe Kraft-/Bewegungseinbusse zusammenführen. Beim Handgelenk muss die konkrete Struktur mit Mechanismus und Bildgebung korrelieren.',R+'Kap. 5 (S. 20)','ortho');

/* ---- Kap. 6: Psychiatrische Befunde, PTBS ---- */
add('Psychiatrische Befunde & PTBS','K','Depression und Fragebögen – bewerten Sie jede Aussage:',
 [['Eine depressive Stimmung allein genügt für die Diagnose nicht; erforderlich sind Symptomzahl, Dauer, Intensität, klinische Bedeutsamkeit und funktionelle Beeinträchtigung.',true],
  ['Ein hoher Fragebogenwert ist eine automatische Diagnose.',false],
  ['Schlafstörung durch Schmerz ist nicht ungeprüft als unabhängiges Depressionssymptom zu zählen.',true],
  ['Fragebogenresultate können durch Antwortstil, Komorbidität und situative Belastung beeinflusst sein.',true]],
 'Ein hoher Fragebogenwert ist ein Datenpunkt und muss mit Interview und Verhalten abgeglichen werden. Evidenzkanäle des psychopathologischen Befunds: Selbstauskunft, Fremdauskunft, beobachtetes Verhalten, standardisierte Instrumente.',R+'Kap. 6 (S. 22)','psych');

add('Psychiatrische Befunde & PTBS','A+','Welche vier Symptomgruppen werden bei einer PTBS geprüft, nachdem das qualifizierende Trauma geprüft wurde?',
 ['Intrusionen/Wiedererleben, Vermeidung, negative Veränderungen von Kognition und Stimmung, Übererregung und Reaktivität',
  'Antriebsstörung, Wahn, Halluzination, Desorientierung',
  'Depression, Sucht, Persönlichkeitsstörung, Psychose',
  'Schlafstörung, Gewichtsverlust, Fieber, Schwäche'],
 'Psychophysiologische Messungen können einzelne Reaktionen abbilden, ersetzen aber nicht die diagnostische Gesamtschau. Die Häufigkeit traumabezogener Symptome nimmt im Verlauf typischerweise ab; verzögerter Beginn kommt vor, ist aber nicht der Regelfall.',R+'Kap. 6 (S. 22–23)','psych');

add('Psychiatrische Befunde & PTBS','A+','Was kennzeichnet die komplexe PTBS nach ICD-11?',
 ['Erfüllte PTBS-Merkmale plus anhaltende Probleme der Affektregulation, negatives Selbstkonzept mit Scham/Schuld/Versagensgefühl und deutliche Beziehungsschwierigkeiten',
  'Eine PTBS mit längerer Dauer als 6 Monate',
  'Eine PTBS ohne Intrusionen',
  'Eine PTBS bei Kindern'],
 'Menschlich verursachte Traumata können mit höherer Belastung verbunden sein.',R+'Kap. 6 (S. 22)','psych');

add('Psychiatrische Befunde & PTBS','A-','Welche Aussage zur PTBS und Arbeitsfähigkeit ist FALSCH?',
 ['Bei bestätigter PTBS folgt die Arbeitsfähigkeit unmittelbar aus dem Diagnoselabel',
  'Die Arbeitsfähigkeit folgt aus Schweregrad, Funktion und tätigkeitsbezogener Exposition',
  'Eine triggerexponierte Tätigkeit kann trotz gleicher Diagnose stärker eingeschränkt sein als reizarmes Homeoffice',
  'Konzentration, Affektregulation, Stresstoleranz und Umgang mit Triggern sind relevante Funktionsdomänen'],
 'Fallbeispiel: Albträume, Vermeidung und Übererregung, aber stabile Leistung im reizarmen Homeoffice → Diagnose kann erfüllt sein, ohne dass vollständige Arbeitsunfähigkeit folgt. Schlafmangel kann die zeitliche Ausdauer, Konzentration das Rendement betreffen.',R+'Kap. 6 (S. 23)','psych');

/* ---- Kap. 7: Fatigue ---- */
add('Fatigue','K','Fatigue und CFS – bewerten Sie jede Aussage:',
 [['Nach den dargestellten Fukuda-Kriterien besteht eine ungeklärte Fatigue über mindestens sechs Monate, die sich durch Ruhe nicht wesentlich aufhebt, plus mehrere Begleitsymptome.',true],
  ['Motorische Fatigue zeigt sich als belastungsabhängiger Leistungsabfall, der nicht willentlich überwunden wird und sich durch Ruhe bessert.',true],
  ['Fragebogengrenzwerte (z. B. FSMC, MFIS) dürfen ohne Kenntnis von Normen und Validität in Arbeitsfähigkeitsprozente übersetzt werden.',false],
  ['Die CFS-Kriterien sind ein Ersatz für Differentialdiagnose und Funktionsprüfung.',false]],
 'Begleitsymptome u. a.: nicht erholsamer Schlaf, unverhältnismässige Verschlechterung nach Belastung, Konzentrations-/Kurzzeitgedächtnisprobleme, Hals-/Lymphknoten-/Muskel-/Gelenk-/Kopfschmerzen. Differenzialdiagnosen: neurologisch, internistisch, Medikamente/Substanzen, Depression/Stress/Schlafstörung, krebsassoziiert, postinfektiös.',R+'Kap. 7 (S. 24–25)','neuro');

add('Fatigue','A+','Wodurch wird Fatigue gutachtlich aussagekräftig beschrieben (statt «müde»)?',
 ['Durch Belastungsdosis, Leistungsabfall, Erholungszeit, Reproduzierbarkeit und Folgen für konkrete Anforderungen',
  'Durch die Anzahl der Schlafstunden',
  'Durch einen Fragebogen-Summenwert',
  'Durch die Diagnose «CFS»'],
 'Bei Fatigue sind Präsenz und Rendement unterschiedlich betroffen: Rendement, Pausenbedarf, Belastungsverteilung und Nachwirkungen gehören dazu. Ein Unterschiedsmuster Fatigue/Depression ist kein alleiniger Diagnosetest; beide können koexistieren.',R+'Kap. 7 (S. 24–25)','neuro');

add('Fatigue','A+','Wie unterscheidet sich das typische Muster von Fatigue und Depression in den Kursunterlagen?',
 ['Fatigue: oft Wunsch zu handeln bei begrenzter Leistung durch Körper/Kognition, Verschlechterung durch Belastung/Hitze/Stress, Besserung durch Ruhe; Depression: morgendliche Antriebsminderung, Passivität, Interessenverlust, affektive Symptome',
  'Fatigue: Interessenverlust und Passivität; Depression: Besserung durch Ruhe',
  'Beide sind nie gleichzeitig vorhanden',
  'Es gibt keine unterscheidenden Muster'],
 'Affekt, Antrieb, Schlaf, Belastungsreaktion, körperliche Erkrankung und Verlauf müssen gemeinsam bewertet werden.',R+'Kap. 7 (S. 24)','psych');

/* ---- Kap. 8: Neuropsychologie ---- */
add('Neuropsychologie','K','Neuropsychologische Interpretation – bewerten Sie jede Aussage:',
 [['Normorientierte Interpretation = Vergleich mit einer geeigneten Referenzgruppe; kriteriumsorientierte = Vergleich mit einer sachlich definierten Anforderung; intraindividuelle = Vergleich mit dem erwartbaren oder früheren Niveau derselben Person.',true],
  ['Je mehr Tests durchgeführt werden, desto unwahrscheinlicher ist ein zufällig niedriger Wert bei Gesunden.',false],
  ['Ein einzelner niedriger Testwert beweist keine Hirnfunktionsstörung.',true],
  ['Eine Differenz zwischen zwei Messzeitpunkten ist nur bedeutsam, wenn sie die messfehlerbedingte Schwankung übersteigt (kritische Differenz).',true]],
 'Zu prüfen sind Anzahl/Abhängigkeit der Tests, Cut-off, Bildungs-/Sprach-/Altersangemessenheit, prämorbides Niveau, Muster über Funktionsbereiche, Übereinstimmung mit Alltag und Akten. Ein Screeningtest ersetzt kein differenziertes Leistungsprofil.',R+'Kap. 8 (S. 26)','neuropsy');

add('Neuropsychologie','A+','Was beantwortet die Validitätsprüfung zunächst?',
 ['Ob das Leistungsprofil interpretierbar ist – nicht automatisch, warum es nicht interpretierbar ist',
  'Warum das Leistungsprofil nicht interpretierbar ist',
  'Ob eine bewusste Täuschung vorliegt',
  'Wie hoch die Arbeitsfähigkeit ist'],
 'Auffällige Resultate müssen mit Testbedingungen, Verständnis, neurologischer Erkrankung, Schmerz, Müdigkeit, Motivation und weiteren Validitätsindikatoren abgeglichen werden.',R+'Kap. 8 (S. 27)','neuropsy');

add('Neuropsychologie','A+','Bei normgerechter Grundaufmerksamkeit sinkt die Leistung erst nach 90 Minuten deutlich ab. Was folgt für die Arbeitsfähigkeit?',
 ['Für eine kurze, klar strukturierte Tätigkeit kann das Rendement erhalten sein; für achtstündige Dauerüberwachung sind Pausen, Schichtlänge und Sicherheitsrisiken zentral',
  'Die Person ist generell arbeitsunfähig',
  'Die Person ist generell voll arbeitsfähig',
  'Die Arbeitsfähigkeit ergibt sich aus dem Mittelwert über alle Tests'],
 'Arbeitsfähigkeit wird nicht aus einem Mittelwert über Tests berechnet; sie verlangt ein Anforderungsprofil. Zu beschreiben: betroffene und erhaltene Funktionsbereiche, Kompensation, Fehlerart/-folgen, Belastungsdauer, Tempo/Genauigkeit/Überwachungsbedarf, ökologische Validität.',R+'Kap. 8 (S. 27)','neuropsy');

/* ---- Kap. 9: Weichteilrheumatologie, Fibromyalgie ---- */
add('Weichteilrheumatologie & Fibromyalgie','K','Fibromyalgie und Weichteilrheumatologie – bewerten Sie jede Aussage:',
 [['Triggerpunkte myofaszialer Syndrome sind nicht mit den klassischen Tenderpoints der Fibromyalgie gleichzusetzen.',true],
  ['Bildgebung kann die individuelle Schmerzintensität darstellen.',false],
  ['Die Fibromyalgie-Kriterien (WPI, SSS, Dauer ≥ 3 Monate, Prüfung anderer Erklärungen) bestimmen die Arbeitsfähigkeit.',false],
  ['Periphere und zentrale Sensibilisierung sind als Mechanismen zu unterscheiden und klinisch einzuordnen.',true]],
 'Kriterien helfen bei der Diagnose, bestimmen aber keine Arbeitsfähigkeit. Hypermobilität kann assoziiert sein, beweist aber keine Ursache. Kernfrage bei generalisierten Schmerzen: Welche reproduzierbaren Aktivitäten sind wie stark eingeschränkt, welche Ressourcen bestehen, wie konsistent ist das Muster?',R+'Kap. 9 (S. 28)','rheuma');

add('Weichteilrheumatologie & Fibromyalgie','A+','Welche Gruppen strukturierter Indikatoren sind bei syndromalen Beschwerden medizinisch zu bearbeiten?',
 ['Ausprägung der funktionellen Befunde, Behandlungs-/Eingliederungsverlauf, Komorbidität, Persönlichkeit/Ressourcen, sozialer Kontext, Konsistenz, Leidensdruck/Eigenaktivität, Plausibilität/Validität',
  'Nur Bildgebung, Labor und EMG',
  'Nur Alter, Geschlecht und Beruf',
  'Nur die Angaben der versicherten Person'],
 'Die Struktur ist keine Punkteliste mit automatischem Ergebnis, sondern zwingt zur begründeten Gesamtwürdigung; soziale Belastung wird nicht als Krankheit ausgegeben. Mini-ICF braucht einen Kontext/eine Referenzanforderung.',R+'Kap. 9 (S. 28)','psych');

add('Weichteilrheumatologie & Fibromyalgie','A-','Welche Aussage zu Alltag und beruflicher Einschränkung ist FALSCH?',
 ['Eine erhaltene Freizeitaktivität ist stets ein schematischer Beleg gegen jede berufliche Einschränkung',
  'Eine soziale Konfliktlage kann Symptome erklären oder verstärken, ist aber nicht automatisch eine medizinische Funktionsstörung',
  'Anforderungen und Dosierung von Freizeit und Beruf können verschieden sein',
  'Diskrepanzen zwischen Alltag und Untersuchung sind zu benennen, bevor die tatsächlich belegte Funktion quantifiziert wird'],
 'Freizeitaktivität darf nicht schematisch gegen jede berufliche Einschränkung verwendet werden.',R+'Kap. 9 (S. 29)');

/* ---- Kap. 10: Schwangerschaft ---- */
add('Schwangerschaft','A+','Wie ist die Arbeitsfähigkeit in der Schwangerschaft zu beurteilen?',
 ['Nicht «schwanger = arbeitsunfähig», sondern Befund + Risiko + Tätigkeit + Anpassbarkeit = funktionelle Beurteilung',
  'Schwangerschaft ist eine Krankheit und begründet automatisch volle Arbeitsunfähigkeit',
  'Physiologische Beschwerden rechtfertigen automatisch volle Arbeitsunfähigkeit',
  'Die Empfehlung der Behandelnden zur Schonung gilt rückwirkend als bewiesen'],
 'Schwangerschaft ist ein physiologischer Zustand. Zu erheben: körperliche Belastung, Expositionen, Pausen, Arbeitsweg, Homeoffice/angepasste Aufgaben, Warnzeichen. Bei akuten Notfällen kann auch Homeoffice nicht zumutbar sein; sonst können Teilzeit, Belastungsreduktion oder Arbeitsplatzanpassung tragfähig sein. Damalige Befunde, Anforderungen und Verlauf sind zu rekonstruieren.',R+'Kap. 10 (S. 30)');

/* ---- Kap. 11: Koronare Herzkrankheit ---- */
add('Koronare Herzkrankheit','A+','Wie ist das Verhältnis von Stenose und Ischämie bei der koronaren Herzkrankheit?',
 ['Eine anatomische Verengung beweist nicht automatisch eine relevante belastungsabhängige Ischämie; Anatomie und Funktion sind getrennt zu beurteilen',
  'Jede Stenose verursacht Ischämie',
  'Ohne hochgradige Stenose ist eine funktionelle Durchblutungsstörung ausgeschlossen',
  'Die CT-Koronarangiographie quantifiziert die Ischämie direkt'],
 'Die CT-Koronarangiographie beschreibt vor allem Anatomie und hat bei niedriger bis mittlerer Prätestwahrscheinlichkeit einen hohen negativen Vorhersagewert. Funktionelle Verfahren (PET, SPECT, kardiale MRT, Stress-Echo) prüfen Ischämie/Perfusion; PET kann Durchblutung und Mikrozirkulation quantifizieren. Anatomie lokalisiert, Funktion quantifiziert Belastungsrelevanz.',R+'Kap. 11 (S. 31)','innere');

add('Koronare Herzkrankheit','A+','Moderate Stenose in der CT bei unauffälligem funktionellem Belastungstest und guter Leistungsfähigkeit. Welche Schlussfolgerung ist richtig?',
 ['Sie begründet nicht automatisch eine relevante Arbeitsunfähigkeit; bei sicherheitskritischer Arbeit sind zusätzlich Rhythmus, Synkopenrisiko und individuelle Belastung zu prüfen',
  'Sie begründet automatisch eine Teilinvalidität',
  'Sie begründet zwingend volle Arbeitsunfähigkeit',
  'Sie ist für die Arbeitsfähigkeit irrelevant, auch bei sicherheitskritischer Arbeit'],
 'Die Wahl der kardialen Bildgebung richtet sich nach Prätestwahrscheinlichkeit, Patientenfaktoren, Fragestellung, Verfügbarkeit und Expertise.',R+'Kap. 11 (S. 31)','innere');

/* ---- Kap. 12: Kinder- und Jugendpsychiatrie ---- */
add('Kinder- und Jugendpsychiatrie (IV)','K','Kinder- und Jugendpsychiatrie im IV-Kontext – bewerten Sie jede Aussage:',
 [['Altersbezogene Kriterien (z. B. bei Ziffer 404) müssen anhand zeitnaher Unterlagen belegt sein; eine spätere Diagnose ersetzt nicht rückwirkend alle früheren Kriterien.',true],
  ['ADHS führt automatisch zu einer quantitativen Arbeits- oder Ausbildungsunfähigkeit.',false],
  ['Soziokulturelle Belastung ist für Kontext und Integration wichtig, begründet allein aber keinen Gesundheitsschaden.',true],
  ['Die rechtliche Folge einer fehlenden Mitwirkung entscheidet die Gutachterin.',false]],
 'Beurteilt werden Gesundheitsschaden, funktionelle Auswirkungen und Arbeits-/Ausbildungsfähigkeit; Behandlung und rechtlicher Leistungsentscheid sind getrennte Aufgaben. Eine echte gesundheitliche Störung darf nicht wegen ungünstiger sozialer Bedingungen unsichtbar gemacht werden. Bei ADHS ist ein pauschales Prozent aus der Diagnose nicht vertretbar.',R+'Kap. 12 (S. 32)','psych');

/* ---- Kap. 13: Genetik ---- */
add('Genetik im Gutachten','A+','Was bedeutet VUS, und warum ist sie keine sichere Entscheidungsbasis?',
 ['Variante unklarer Signifikanz – ihre Krankheitsrelevanz ist nicht belastbar klassifiziert',
  'Eine sicher krankheitsverursachende Variante',
  'Eine Variante, die nur pharmakogenetisch relevant ist',
  'Eine Variante, die ein bekanntes Risiko verändert'],
 'Pathogene Variante: nach aktuellem Wissen krankheitsverursachend, Ausprägung abhängig von Penetranz/Phänotyp. Risikovariante: verändert eine Wahrscheinlichkeit, ist aber nicht gleichbedeutend mit manifester Erkrankung. Genetische Kausalität braucht Genotyp + passenden Phänotyp + belastbare Klassifikation + plausiblen Erbgang + klinische Konsequenz.',R+'Kap. 13 (S. 34)');

add('Genetik im Gutachten','A-','Welche Aussage zur Genetik im Gutachten ist FALSCH?',
 ['Ein negatives Panel schliesst jede genetische Ursache sicher aus',
  'Breiter ist nicht automatisch besser; die Fragestellung steuert die Methode',
  'Ein genetisches Risiko ist nicht mit aktueller Krankheit gleichzusetzen',
  '«Pathogen» ist ohne Phänotypprüfung keine vollständige Erklärung'],
 'Fünf Prüfungsfragen: Passt der Phänotyp? Wie ist die Variante klassifiziert? Ist der Erbgang plausibel? Welche medizinische Konsequenz folgt tatsächlich? Ist die Untersuchung für die Frage zweckmässig und wirtschaftlich? Fallbeispiel: VUS bei unspezifischer Müdigkeit trägt weder Diagnose noch Arbeitsunfähigkeit.',R+'Kap. 13 (S. 34)');

/* ---- Kap. 14: Observation ---- */
add('Observation (M3)','K','Observation und medizinische Auswertung – bewerten Sie jede Aussage:',
 [['Die medizinische Expertin entscheidet nicht abschliessend, ob eine Observation rechtmässig erhoben oder prozessual verwertbar ist.',true],
  ['Für Sozialversicherungen werden Art. 43a ATSG und Ausführungsbestimmungen der ATSV genannt.',true],
  ['Eine kurze Observation zeigt automatisch Symptome ausserhalb des Beobachtungsfensters und die Nachhaltigkeit über eine Arbeitswoche.',false],
  ['Der Wert einer Observation steigt durch klar beschriebene Tätigkeiten, Zeitbezug und Abgleich; er sinkt bei selektiven Ausschnitten und überdehnter Interpretation.',true]],
 'Observation zeigt Verhalten in einem begrenzten Zeitraum und Kontext; sie zeigt nicht automatisch Schmerzen, subjektive Anstrengung, Arbeitsqualität, Fehler, Erholungsbedarf, Diagnose oder Motivation. Beispiel: Einmaliges Tragen eines mittelschweren Einkaufs über 30 m widerspricht absoluter Tragunfähigkeit, beweist aber keine ganztägige volle Belastbarkeit.',R+'Kap. 14 (S. 36)');

/* ---- Kap. 15: Interdisziplinärer Konsens ---- */
add('Interdisziplinärer Konsens','A+','Welcher Ablauf entspricht dem Prüfungsschema für ein polydisziplinäres Gutachten?',
 ['Auftrag → Aktenauszug → fachspezifische Untersuchungen → gegenseitige Befundprüfung → gemeinsame Diagnosen → integriertes Funktionsprofil → Arbeitsfähigkeit → Massnahmen/Prognose',
  'Auftrag → Teilgutachten → Addition der Prozentwerte → Rente',
  'Aktenauszug → Konsens → Untersuchungen → Auftrag',
  'Fachspezifische Untersuchungen → Rente → Diagnose'],
 'Im Konsens zu klären: fachübergreifend anerkannte Diagnosen; ob mehrere Diagnosen dieselbe oder verschiedene Funktionen erklären; ob sich Einschränkungen addieren, überlappen oder verstärken; unvereinbare Befunde; fachübergreifende Ressourcen; Präsenz/Rendement im Tätigkeitsprofil.',R+'Kap. 15 (S. 38)');

add('Interdisziplinärer Konsens','A+','Warum dürfen fachspezifische Prozentwerte nicht mechanisch addiert werden?',
 ['Zwei Diagnosen können dieselbe Leistungskomponente betreffen; umgekehrt kann eine geringe Einzelbeeinträchtigung im Zusammenspiel funktionell bedeutsam werden',
  'Weil Prozentwerte immer gerundet werden müssen',
  'Weil jede Disziplin nur 100 % beurteilen darf',
  'Weil Addition rechtlich verboten ist'],
 'Im Kursfall (41-jähriger Schweisser) lauteten die Konsensdiagnosen: chronisches lumbospondylogenes Syndrom ohne radikuläres Reiz-/Ausfallsyndrom sowie somatische Belastungsstörung bzw. anhaltende somatoforme Schmerzstörung; nicht gesundheitliche Faktoren wurden von medizinischen Symptomen getrennt; Massnahmen: multimodale Rehabilitation und integrative psychiatrisch-psychotherapeutische Behandlung.',R+'Kap. 15 (S. 38)');

/* ---- Kap. 15–17: Konsens, Schnellrepetitorium, Falltraining ---- */
add('Präsenz, Rendement, Sprache','A+','80 % Präsenz bei 75 % Rendement innerhalb der Präsenz entsprechen funktionell wie viel Prozent einer Vollleistung?',
 ['60 %','55 %','75 %','78 %'],
 '0,80 × 0,75 = 0,60. Die Rechenhilfe ist nur sinnvoll, wenn beide Ausgangswerte medizinisch begründet sind; sie ist keine Formel für Invalidität.',R+'Kap. 15 (S. 39)');

add('Präsenz, Rendement, Sprache','A+','Welche Formulierung entspricht der guten, beobachtungsnahen und begrenzten Konsenssprache?',
 ['«inkonsistent mit dem behaupteten Ausmass» statt «unglaubwürdig»',
  '«unglaubwürdig» statt «inkonsistent mit dem behaupteten Ausmass»',
  '«existiert nicht» statt «nicht belegt»',
  '«eine kontextlose Prozentzahl» statt «Arbeitsfähigkeit in Tätigkeit X»'],
 'Weitere Formulierungen: «medizinisch nicht erklärbar» nur nach benannter Differentialprüfung; «rechtliche Würdigung vorbehalten» bei Kompetenzgrenzen. Ein Gutachten soll keine therapeutische Beziehung imitieren, aber medizinisch begründete Massnahmen und erwartbare funktionelle Effekte benennen.',R+'Kap. 15 (S. 39)');

add('Präsenz, Rendement, Sprache','K','Eine Arbeitsfähigkeitsbeurteilung soll nachvollziehbar nennen – bewerten Sie, was dazugehört (richtig) bzw. nicht (falsch):',
 [['Bisherige und angepasste Tätigkeit sowie zeitliche Präsenz und Leistungsfähigkeit während der Präsenz.',true],
  ['Zusätzliche Pausen oder verlangsamtes Tempo sowie qualitative Einschränkungen und Sicherheitsaspekte.',true],
  ['Nicht medizinische Hindernisse als getrennte Information.',true],
  ['Der Invaliditätsgrad in Prozent.',false]],
 'Beginn, Verlauf und Prognose sowie die zugrunde liegenden medizinischen Funktionen gehören ebenfalls dazu. Invalidität ist ein Rechtsbegriff.',R+'Kap. 15 (S. 39)');

add('Schnellrepetitorium M3','K','Kernkarten – bewerten Sie jede Aussage:',
 [['Objektivität = geringe Abhängigkeit von Untersucher, Durchführung und Auswertung; Reliabilität = Zuverlässigkeit einer Messung; Validität = misst das Verfahren das relevante Konstrukt?',true],
  ['Ein Screeningtest ersetzt ein differenziertes neuropsychologisches Leistungsprofil.',false],
  ['Symptomvalidität prüft die Interpretierbarkeit, nicht automatisch die Ursache.',true],
  ['Die Hochrechnung einer Observationssequenz zur Tages- oder Wochenleistung ist zulässig.',false]],
 'Prüfungsfallen: Diagnose = Funktion; Bildbefund = Schmerz/Kausalität; post hoc = propter hoc; medizinische und normative Kausalität vermischen; aus funktionellen Zeichen Simulation ableiten; Waddell-Zeichen als Lügendetektor; Fragebogenwert als Diagnose; Stenose = Ischämie; VUS = pathogen; Fachprozente addieren; Präsenz und Rendement vermischen.',R+'Kap. 16 (S. 41–43)');

add('Schnellrepetitorium M3','A-','Welche der folgenden Aussagen ist eine Prüfungsfalle, d. h. FALSCH?',
 ['Eine Stenose ist gleichbedeutend mit einer relevanten Ischämie',
  'Bildgebung beantwortet Morphologie; ob sie Symptome erklärt, ist klinisch-interdisziplinär zu klären',
  'Ein negatives genetisches Panel ist kein sicherer Ausschluss jeder genetischen Ursache',
  'Soziale Belastung ist nicht automatisch ein Gesundheitsschaden'],
 'Anatomie lokalisiert; Funktion quantifiziert Belastungsrelevanz.',R+'Kap. 16 (S. 43); Kap. 11');

add('Falltraining M3','A+','Fall A: 46-jährige Lageristin, MRT mit breitbasiger Protrusion L4/5 ohne Wurzelkompression, symmetrische Kraft/Reflexe, exakt mediane Sensibilitätsgrenze, flüssige Bewegung im Wartebereich, deutliches Hinken in der Untersuchung, betreut Enkel. Welche Aussage ist vertretbar?',
 ['Eine radikuläre Ausfallsymptomatik ist nicht belegt; es liegen positive funktionelle Zeichen/Diskrepanzen vor, die neutral als erklärungsbedürftige Inkonsistenz festzuhalten sind; für die Arbeitsfähigkeit fehlen Tätigkeitsprofil, Belastungsprofil sowie Präsenz/Rendement',
  'Sie leidet an einem radikulären Syndrom L5 mit Wurzelkompression',
  'Sie ist eine Simulantin',
  'Die Protrusion erklärt eine volle Arbeitsunfähigkeit'],
 'Positive funktionelle Zeichen: Hinken nur in der Untersuchung (Diskrepanz formal vs. spontan), mediane Sensibilitätsgrenze (Inkongruenz mit Neuroanatomie). Die MRT ist klinisch zu korrelieren.',R+'Kap. 17 Fall A (S. 44)','rheuma');

add('Falltraining M3','A+','Fall B: 55-jähriger Monteur, Knieverdrehung, nach 3 Wochen MRT mit komplexem Innenmeniskusriss und deutlicher Arthrose, Vorakten mit episodischen Knieschmerzen, unmittelbar nach dem Ereignis Schwellung, belastete Röntgenaufnahmen fehlen. Welche Aussage ist medizinisch vertretbar?',
 ['Für Unfallfolge sprechen Mechanismus und sofortige Schwellung, für Vorzustand Arthrose und Vorbeschwerden; benötigt werden u. a. belastete Röntgenaufnahmen, Vorakten und Verlauf; eine pauschale Heilfrist ist ungeeignet',
  'Aus der Arthrose folgt zwingend, dass der Riss rein degenerativ ist',
  'Weil der Unfall zeitlich vor dem MRT lag, ist der Riss unfallbedingt',
  'Der Vorzustand ist irrelevant'],
 'Eine Aussage zum Beweismass muss Evidenz für und gegen Unfallfolge ausdrücklich nennen; Status quo ante/sine sind anhand von Befunden und Verlauf zu begründen.',R+'Kap. 17 Fall B (S. 44)','ortho');

add('Falltraining M3','A+','Fall C: Bankangestellte nach Überfall mit Intrusionen, Vermeidung, Übererregung, Schlafstörung; im Homeoffice 4 h täglich zuverlässig, in der Filiale Panikreaktionen; Depression nicht ausreichend belegt. Welche Funktion ist tätigkeitsabhängig eingeschränkt?',
 ['Die Stresstoleranz/Affektregulation bei Exposition gegenüber Triggern (Filialräume); im reizarmen Homeoffice ist die Funktion erhalten – Präsenz und Rendement sind getrennt zu beschreiben, eine angepasste Tätigkeit ohne Triggerexposition ist zu prüfen',
  'Die kognitive Grundleistung ist generell aufgehoben',
  'Die Person ist ohne Weiteres in jeder Tätigkeit voll arbeitsfähig',
  'Die Person ist wegen der PTBS-Diagnose in jeder Tätigkeit voll arbeitsunfähig'],
 'Diagnostische Schritte: qualifizierendes Trauma, vier Symptomgruppen mit Evidenz aus Interview, Verhalten und Fremdauskunft, Differenzialdiagnosen, Schweregrad, Funktion.',R+'Kap. 17 Fall C (S. 44)','psych');

add('Falltraining M3','A+','Fall D: Patient nach neurologischer Erkrankung, kurze Tests durchschnittlich, nach 75 Minuten reproduzierbarer Abfall von Tempo und Genauigkeit, am Folgetag verlängerte Erholung, zwei Symptomvaliditätsparameter unauffällig, möchte 6 Stunden täglich arbeiten. Was ist zutreffend?',
 ['Durchschnittswerte in kurzen Tests widersprechen einer belastungsabhängigen Fatigue nicht; die unauffälligen Validitätsparameter sprechen für die Interpretierbarkeit; Belastungsdosis, Leistungsabfall, Erholungszeit und Nachwirkungen sind zu dokumentieren, eine stufenweise Empfehlung ist möglich',
  'Die durchschnittlichen Werte beweisen volle Belastbarkeit',
  'Die unauffälligen Validitätsparameter beweisen, dass keine Fatigue besteht',
  'Die Fatigue ist nur subjektiv und kann nicht begutachtet werden'],
 'Fatigue macht die Zweiteilung Präsenz/Rendement besonders sichtbar.',R+'Kap. 17 Fall D (S. 44–45)','neuropsy');

add('Falltraining M3','A+','Fall E: 30-jährige Person mit unspezifischer Muskelschwäche, breites Panel zeigt eine VUS, Phänotyp passt nur teilweise, funktionelle Muskeluntersuchung unauffällig. Welche Schlussfolgerung ist zulässig?',
 ['Die VUS ist keine sichere Basis für Diagnose, Arbeitsunfähigkeit oder Leistungsanspruch; eine Kausalitätsaussage «genetisch bedingt» wäre überzogen',
  'Die VUS beweist eine genetische Muskelerkrankung',
  'Die VUS erklärt die Arbeitsunfähigkeit',
  'Die VUS schliesst jede andere Ursache aus'],
 'Fünf Fragen: Passt der Phänotyp? Wie ist die Variante klassifiziert? Ist der Erbgang plausibel? Welche medizinische Konsequenz folgt tatsächlich? Ist die Untersuchung zweckmässig und wirtschaftlich?',R+'Kap. 17 Fall E (S. 45)');

add('Falltraining M3','A+','Fall F: Versicherter gibt max. 2 kg Tragekapazität an; Observation: vormittags zweimal eine ca. 8 kg schwere Kiste über kurze Strecken mit längeren Pausen; begutachtet wird repetitive Lagerarbeit über 8 Stunden. Welche Aussage ist richtig?',
 ['Die Beobachtung relativiert die Behauptung absoluter Tragunfähigkeit, beweist aber keine achtstündige repetitive Belastbarkeit; offen bleiben Dauer, Wiederholbarkeit, Schmerzverlauf und Erholungsbedarf; die rechtliche Verwertbarkeit entscheiden Gericht bzw. Versicherungsträger',
  'Die Beobachtung beweist volle Arbeitsfähigkeit in repetitiver Lagerarbeit',
  'Die Beobachtung beweist Simulation',
  'Die Gutachterin entscheidet abschliessend über die Verwertbarkeit der Observation'],
 'Medizin vs. Recht: Zulässigkeit und Verwertbarkeit sind Rechtsfragen; Funktionsinterpretation ist medizinisch. Einzelbeobachtung weder ignorieren noch absolut setzen.',R+'Kap. 17 Fall F (S. 45)');

/*END*/
})();
