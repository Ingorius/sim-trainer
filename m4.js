/* Modul 4 – Gutachtenarten, Fehler, Kausalität, Haftpflicht. Quelle: SIM-Kursunterlagen Modul 4 (2026), Referate/Workshops.
   Helper: A+ -> erste Option ist die richtige; A- -> erste Option ist die FALSCHE Aussage; K -> 4 x [Aussage, wahr?] */
window.QBANK = window.QBANK || [];
(function(){
let n=0;
const add=(thema,typ,frage,opt,erkl,quelle,fach)=>{
  n++;
  let o=opt;
  if(typ==='A+') o=opt.map((t,i)=>[t,i===0]);
  if(typ==='A-') o=opt.map((t,i)=>[t,i!==0]);
  QBANK.push({id:'m4-'+String(n).padStart(3,'0'),modul:4,thema,typ,frage,opt:o,erkl,quelle,fach:fach||null});
};

/* ---- Böhler/Meier: Die häufigsten Fehler in Gutachten ---- */
const BM='Referat Böhler/Meier-Brändle (M4 2026), Folie ';
add('Häufigste Gutachtenfehler','A+','Welche Kaskade beschreibt die Arbeitsunfähigkeitsbestimmung im Referat Böhler/Meier?',
 ['Befund/Diagnose → Funktionseinschränkung → Handicap → Arbeitsunfähigkeit («Mismatch» zwischen Anforderungsprofil der bisherigen Tätigkeit und funktionellem Zumutbarkeitsprofil)',
  'Diagnose → Arbeitsunfähigkeit → Invalidität → Rente',
  'Befund → Rente → Funktion → Diagnose',
  'Funktionseinschränkung → Diagnose → Anspruch → Befund'],
 'Befunderhebung nach standardisiertem System (AMDP; Neutral-Null-Methode), Diagnosestellung nach anerkanntem Manual (ICD-10/-11 oder DSM-5). Adaptierte Arbeitsfähigkeit = Zumutbarkeitsprofil × Pensum (in Stunden oder % vom Vollzeitpensum) × Leistung in %.',BM+'6–7');

add('Häufigste Gutachtenfehler','A+','Welche Bezugsgrösse gilt für Arbeits(un)fähigkeitsschätzungen? (Bad Practice: Gutachter ging von 60-%-Erwerbstätigkeit aus und nahm volle Arbeitsfähigkeit an)',
 ['AF/AUF-Einschätzungen sind immer auf ein Vollzeitpensum zu beziehen',
  'Auf das bisherige effektive Teilzeitpensum',
  'Auf die Hälfte des Vollzeitpensums',
  'Auf das Pensum, das die versicherte Person wünscht'],
 'Bad Practice: Verständnisfehler bei der Bezugsgrösse. Dazu gehören auch vage Aussagen, Mutmassungen und mangelnde Begründung («medizinisch-theoretisch 50–(60 %)»).',BM+'22–23, 27');

add('Häufigste Gutachtenfehler','K','Rückfragen und Sachlichkeit (Bad Practice) – bewerten Sie jede Aussage:',
 [['Fachspezifische Einschätzungen – auch Korrekturen – dürfen immer nur durch die jeweilige fachärztliche Person erfolgen.',true],
  ['Emotionale oder vorwurfsvolle Beantwortung von Rückfragen («Hätten Sie das Gutachten aufmerksam gelesen …») ist unproblematisch.',false],
  ['Das Ablehnen eines Telefongesprächs mit dem Vorwurf der Einschüchterung durch die IV-Stelle ist sachgerecht.',false],
  ['Es ist Aufgabe des Gutachters, sich kritisch, aber sachlich mit abweichenden medizinischen Einschätzungen auseinanderzusetzen.',true]],
 'Rückfragen werden nur getätigt, wenn beim Auftraggeber Unklarheiten bestehen; Einflussnahmen sind obsolet. Ein Gutachter soll nicht zu emotionalen Aussagen hingerissen werden.',BM+'24, 30–32');

add('Häufigste Gutachtenfehler','A+','Wie ist die Beantwortung einer retrospektiven Frage zur Arbeitsunfähigkeit zu bewerten: «Eine retrospektive Beurteilung ist nicht unproblematisch, da ich die Person früher nicht selbst untersucht habe»?',
 ['Relativierende Aussagen helfen wenig und schwächen die Beurteilung; die retrograde AUF ist für den relevanten Zeitraum zu beurteilen und zu begründen',
  'Sie ist die korrekte Antwort, weil man nur den aktuellen Zustand beurteilen darf',
  'Sie ist ein Zeichen besonderer Sorgfalt und stärkt das Gutachten',
  'Retrospektive Beurteilungen sind unzulässig'],
 'Zu vage Aussagen («Leistungsbild seit ungefähr Anfang 2012») sind ebenfalls Fehler; Rückfragen sind vorgespurt und unabdingbar. Keine Beurteilung der retrograden AUF für den relevanten Zeitraum ist einer der Top-10-Fehler.',BM+'28–29, 33');

add('Häufigste Gutachtenfehler','K','Fehler im Umgang mit Tonaufnahmen – bewerten Sie jede Aussage:',
 [['Beginn, Unterbruch und Ende des Interviews werden mit Datum/Zeitangabe dokumentiert und von der Gutachterin bestätigt.',true],
  ['Die Tonqualität muss vor der Übermittlung durch die Gutachterin überprüft werden.',true],
  ['Bei technischen Problemen bei der Aufzeichnung ist der Auftraggeber zu kontaktieren.',true],
  ['Bei unvollständiger Aufnahme genügt es, dies im Gutachten kurz zu erwähnen; eine Wiederholung ist ausgeschlossen.',false]],
 'Im Beispiel verfügte die IV-Stelle eine Wiederholung; das Gericht lehnte eine Wiederholung beim gleichen Gutachter ab, da die Ergebnisoffenheit nicht gegeben sei (u. a. Bemerkung «Wir haben so viel Zeit nun auch nicht»).',BM+'4, 21');

add('Häufigste Gutachtenfehler','A+','Die Gutachterin schreibt: «Um bessere Karten in einer eventuell folgenden rechtlichen Beurteilung zu haben, empfehlen wir eine EFL.» Wie wertet das Bundesgericht (8C_531/2014)?',
 ['Der Gutachter erweckt den Anschein mangelnder Unparteilichkeit',
  'Es ist eine zulässige Zusatzuntersuchung',
  'Es ist ein Zeichen besonderer Sorgfalt',
  'Es ist eine Rechtsfrage und deshalb irrelevant'],
 'Befangenheit ist anzunehmen, wenn Umstände den Anschein der Befangenheit und die Gefahr der Voreingenommenheit zu begründen vermögen; die tatsächliche Befangenheit muss nicht nachgewiesen werden. Es gelten die gleichen Ausstands- und Ablehnungsgründe wie bei Richtern.',BM+'17–18');

add('Häufigste Gutachtenfehler','K','Unzulässige rechtliche Aussagen des Gutachters (Kompetenzüberschreitung) – welche Aussage ist unzulässig (richtig = unzulässig)?',
 [['«Dieser Gesundheitsschaden hat invalidisierenden Charakter.»',true],
  ['«Zusammenfassend besteht keine Invalidität.»',true],
  ['«Es besteht keine Verwertbarkeit der Arbeitsfähigkeit auf dem 1. Arbeitsmarkt.»',true],
  ['«In der angepassten Tätigkeit besteht eine Präsenzzeit von 6 Stunden bei 80 % Leistung, begründet durch …»',false]],
 'Erwerbsunfähigkeit und Invalidität sind juristische Begriffe. Die letzte Aussage ist eine zulässige medizinisch-funktionelle Aussage, sofern sie begründet ist.',BM+'16, 19');

add('Häufigste Gutachtenfehler','A+','Welche Aussage zur fachärztlichen Würdigung von EFL und NPS ist richtig?',
 ['EFL und NPS müssen zwingend vom Rheumatologen/Orthopäden bzw. Neurologen/Psychiater in einen klinischen Kontext gesetzt werden; das Leistungsprofil ist mit dem Anforderungsprofil zu «matchen»',
  'EFL und NPS ersetzen die fachärztliche Beurteilung',
  'EFL und NPS sind nur vom Auftraggeber zu würdigen',
  'Auffälligkeiten in der Symptomvalidierung sind ohne klinischen Kontext zu übernehmen'],
 'Nach der Rechtsprechung sind neuropsychologische Untersuchungen im Kontext der übrigen Abklärungen zu würdigen, beweisrechtlich nur relevant, soweit sie sich schlüssig ins Gesamtergebnis fügen; die Arbeitsfähigkeit schätzt der psychiatrische Facharzt unter Berücksichtigung allfälliger neuropsychologischer Defizite; NPS ist eine Zusatzuntersuchung bei begründeter Indikation (Ermessen der Experten).',BM+'10–11');

add('Häufigste Gutachtenfehler','A+','Welche Aussage zur Konsensfindung ist richtig (Bad Practice)?',
 ['Eine blosse Tabelle ohne interdisziplinären Diskurs reicht nicht; die Konsensbeurteilung muss Zeit, Art und Dauer angeben, Inkonsistenzen final bereinigen und die Arbeitsfähigkeit konsensuell aus den Teilgutachten beurteilen',
  'Es genügt, wenn die Psychiatrie die rheumatologischen Angaben übernimmt',
  'Eine Tabelle der Teilgutachten ist als Konsens ausreichend',
  'Die fachärztliche Würdigung von EFL/NPS ist im Konsens nicht mehr nötig'],
 'Spätestens im Konsens: fachärztliche Würdigung von EFL/NPS. Die Gliederung richtet sich nach dem KSVI (Anhänge III–V).',BM+'12, 25–26');

add('Häufigste Gutachtenfehler','K','Top-10-Fehler/Versäumnisse in Gutachten (Böhler/Meier) – welche gehören dazu?',
 [['Mangelnde Sorgfalt (Copy-Paste), die sich auf die Beweiskraft auswirken kann.',true],
  ['Diskrepanz zwischen Anamnese-/Befunderhebung und Diagnose/Schweregrad sowie fehlende kriteriengeleitete Herleitung von Diagnosen.',true],
  ['Fehlende Konsistenzprüfung und fehlende Wertung von Inkonsistenzen (im Konsens).',true],
  ['Zu ausführliche Würdigung abweichender Behandlerberichte.',false]],
 'Fehlende/unzureichende Würdigung von Zusatzuntersuchungen und abweichenden Einschätzungen ist der Fehler – nicht deren ausführliche Würdigung. Weitere: inadäquater Zeitraum zwischen Exploration und Gutachten, unzureichendes funktionales Denken, nicht nachvollziehbarer Konsens, keine Beurteilung der retrograden AUF, Mal-Management bei Tonaufnahmen, inadäquate Beantwortung von Rückfragen.',BM+'33');

add('Häufigste Gutachtenfehler','A+','Wie ist der Aktenauszug im bi-/polydisziplinären Gutachten gemäss KSVI zu gestalten?',
 ['Im Fachgutachten sollen nur zusätzliche Dokumente aufgeführt werden, die im fachübergreifenden Aktenauszug (Anhang zur Konsensbeurteilung) nicht enthalten sind; er beinhaltet auch Feststellungen aus Observationsmaterial',
  'Jedes Teilgutachten enthält den vollständigen Aktenauszug erneut',
  'Aktenauszüge sind in bidisziplinären Gutachten nicht vorgesehen',
  'Observationsmaterial gehört nicht in den Aktenauszug'],
 'KSVI-Anhänge: III = Auftrag medizinisches Gutachten, IV = Gliederung Gutachten, V = Gliederung Konsensbeurteilung bei bi-/polydisziplinären Gutachten.',BM+'4');

/* ---- Bosshard: Kausalität – die unterschätzte Herausforderung ---- */
const BO='Referat Bosshard «Kausalität» (M4 2026), Folie ';
add('Kausalität (UVG)','K','Haftungsvoraussetzung «Unfall» – bewerten Sie jede Aussage:',
 [['Der Unfallbegriff (ATSG Art. 4) verlangt fünf kumulative Kriterien: plötzlich, nicht beabsichtigt, schädigend, ungewöhnlich, äusserer Faktor.',true],
  ['Der natürliche Kausalzusammenhang muss mit dem Beweisgrad der überwiegenden Wahrscheinlichkeit erstellt sein.',true],
  ['Ein Ausrutscher auf feuchter Stelle des Hallenbodens beim Volleyball ist nach dem Beispiel des Referats als Unfall anerkannt («programmwidrige Beeinflussung des natürlichen Bewegungsablaufs»).',true],
  ['Eine harte Landung beim Volleyball mit Schlag in den Rücken begründet immer einen Unfall.',false]],
 'Nicht anerkannt: Verwirklichung des einer sportlichen Übung inhärenten Verletzungsrisikos; «nicht jede noch so geringfügige Abweichung vom optimalen Ablauf begründet einen Unfall im Rechtssinn».',BO+'6–8');

add('Kausalität (UVG)','K','Unfallbegriff – Beispiele des Referats: Welche Zuordnung stimmt (richtig = so anerkannt)?',
 [['Ein Stein im Reisgericht gilt als «ungewöhnlicher» Faktor.',true],
  ['Ein epileptischer Anfall gilt als äusserer Faktor.',true],
  ['Suizid bei Urteilsunfähigkeit gilt als «nicht beabsichtigt».',true],
  ['Ein Kirschenstein im Kirschenkuchen gilt als ungewöhnlicher Faktor.',false]],
 'Nach den Beispielen des Referats: Kirschenstein in Kirschenkuchen = nicht ungewöhnlich; Schrotkugel in Wildgericht = ungewöhnlich; grobe Verwechslung bei operativem Eingriff = ungewöhnlich; Zehenerfrierungen nach hochalpiner Tour = nicht ungewöhnlich; übrige Suizidfälle = beabsichtigt.',BO+'8');

add('Kausalität (UVG)','A+','Was gilt für die Beurteilung der Richtungsgebung/des Verursachungsausmasses?',
 ['Ist ein objektivierbarer, untersucherunabhängig apparativ fassbarer struktureller Zusatzschaden (sei er noch so klein) dokumentiert, liegt eine Verschlimmerung vor; ohne Vorzustand und ohne objektivierbare Unfallfolgen wird mit «Restitutio ad integrum» terminiert',
  'Jeder Schmerz nach dem Unfall begründet eine richtunggebende Verschlimmerung',
  'Das Verursachungsausmass wird nach Prozenten aus Folienformeln berechnet',
  'Ohne Vorzustand ist die Kausalität immer gegeben'],
 'Zu den Begriffen des Referats gehören ferner überholende Kausalität, Beweisgrad, Abgrenzung zu Listendiagnosen (Art. 6 Abs. 2 UVG), Abgrenzung zu Berufskrankheiten und Integritätsschaden-Bemessung.',BO+'5, 9');

add('Kausalität (UVG)','K','Listendiagnosen nach Art. 6 Abs. 2 UVG (seit 01.01.2017) – bewerten Sie jede Aussage:',
 [['Zu den Listendiagnosen gehören u. a. Knochenbrüche, Verrenkungen, Meniskusrisse, Muskelrisse, Muskelzerrungen, Sehnenrisse, Bandläsionen und Trommelfellverletzungen.',true],
  ['Es besteht die gesetzliche Vermutung der Leistungspflicht, die nur durch den Beweis überwiegender Wahrscheinlichkeit einer vorwiegenden Ursache durch Abnützung/Erkrankung entkräftet werden kann.',true],
  ['«Vorwiegend» bedeutet nach BGer 8C_22/2019 die 50-%-Grenze, in Analogie zu den Berufskrankheiten.',true],
  ['Eine Terminierung der Leistungen für eine Listendiagnose wegen Erreichens des Status quo ante/sine ist ohne Weiteres möglich.',false]],
 'Eine Terminierung wegen Status quo ante/sine ist bei Listendiagnosen nicht möglich. Das Bundesgericht verlangt aber, das gesamte Ursachenspektrum zu berücksichtigen (Vorzustand und Umstände des erstmaligen Auftretens); lässt sich kein initiales Ereignis oder nur ein harmloses erheben, vereinfacht das in der Regel den Entlastungsbeweis der Unfallversicherung.',BO+'24–27');

add('Kausalität (UVG)','K','Integritätsentschädigung (UVG/UVV) – bewerten Sie jede Aussage:',
 [['Ein Integritätsschaden gilt als dauernd, wenn er voraussichtlich während des ganzen Lebens mindestens in gleichem Umfang besteht; er ist erheblich, wenn die Integrität unabhängig von der Erwerbsfähigkeit augenfällig oder stark beeinträchtigt wird.',true],
  ['Die Integritätsentschädigung wird als Kapitalleistung gewährt.',true],
  ['Integritätsschäden, die gemäss Skala 5 Prozent nicht erreichen, geben keinen Anspruch auf Entschädigung.',true],
  ['Die Beurteilung des Integritätsschadens erfolgt als Bruttoschätzung; unfallfremde Schäden werden nicht abgezogen.',false]],
 'Die Beurteilung ist eine Nettoschätzung: Skala (Grob-/Feinraster), Quervergleich (Analogie), prozentualer Abzug unfallfremder Schäden und bereits bezogener Entschädigungen früherer Unfälle. Regelung: UVG/MVG in Gesetz/Verordnung, VVG in den AGB.',BO+'28–36');

add('Kausalität (UVG)','A+','Welche Unsicherheiten sind in einem medizinischen Gutachten zu deklarieren (Grenzen der medizinischen Beurteilungsmöglichkeit)?',
 ['Ungenügende Aktenlage, ungenügende medizinische Evidenz, Unklarheiten/Widersprüche bezüglich Ereignis und medizinisch nicht beantwortbare Fragestellungen; die Wertung der Mutmassungen obliegt der rechtsanwendenden Instanz',
  'Keine – ein Gutachten muss immer eine eindeutige Antwort enthalten',
  'Nur solche, die den Auftraggeber begünstigen',
  'Nur Unsicherheiten über die Diagnose'],
 'Take-Home aus dem Fall (stumpfes Thoraxtrauma/Herzinfarkt): Sachverhalt klären; auf vollständige Unterlagen beharren (Koronarbericht!); Diskrepanzen klären; fachliche Unterstützung anfordern; ggf. behördliche Untersuchung abwarten; «80/20-Regel nur, solange man sich sicher fühlt».',BO+'21, 38');

/* ---- Kindscher: Gemeinschaftliches Gutachter-Konsilium (GGK) ---- */
const GG='Referat Kindscher «GGK» (M4 2026), Folie ';
add('Gemeinschaftliches Gutachter-Konsilium','A+','Was kennzeichnet das Gemeinschaftliche Gutachter-Konsilium (GGK)?',
 ['Ein flexibles Modell zur aussergerichtlichen Klärung medizinischer Fragen in komplexen Haftpflichtfällen (häufig Arzthaftpflicht) durch mündliche Erörterung mit den Beteiligten anstelle eines schriftlichen Gutachtens',
  'Ein rein schriftliches Verfahren ohne Beteiligung der Parteien',
  'Ein gerichtliches Beweisverfahren im Sozialversicherungsrecht',
  'Ein Verfahren, in dem der Gutachter als Parteivertreter auftritt'],
 'Kernmerkmale: Grundsatz der Mündlichkeit und Flexibilität des Modells. Beteiligte: Gutachter, Rechtsanwalt des Geschädigten, Haftpflichtversicherer, ggf. Geschädigter, Schädiger und beratende Ärzte.',GG+'12–13, 30');

add('Gemeinschaftliches Gutachter-Konsilium','K','Vorteile des GGK – bewerten Sie jede Aussage:',
 [['Die unmittelbare Teilnahme an der medizinischen Erörterung führt zu besserem Verständnis und erhöhter Akzeptanz der gutachterlichen Beurteilung.',true],
  ['Das GGK ermöglicht eine bessere Einschätzung des Prozessrisikos und fördert gütliche Einigungen.',true],
  ['Die Verständigung auf einen gemeinsamen Fragenkatalog ist grundsätzlich entbehrlich.',true],
  ['Das GGK garantiert eine eindeutige Klärung aller medizinischen Fragen.',false]],
 'Im Fallbeispiel «(Zu?) späte Diagnose eines Herzinfarktes» konnten manche, aber nicht alle Fragen geklärt werden; der Gutachter konnte erläutern, warum manche Fragen nicht abschliessend beantwortet werden konnten; Fallabschluss durch Vergleich.',GG+'15–16, 18–19');

add('Gemeinschaftliches Gutachter-Konsilium','K','Varianten und Voraussetzungen des GGK – bewerten Sie jede Aussage:',
 [['Varianten: ein Gutachter; Erläuterung eines bereits vorliegenden schriftlichen Gutachtens; GGK mit Moderation; zwei Gutachter (ggf. mit Untersuchung).',true],
  ['Notwendige Voraussetzungen sind u. a. ein geeigneter Fall, Offenheit aller Beteiligten, fachliche Kompetenz und Persönlichkeit des Gutachters sowie ein konstruktives, lösungsorientiertes Diskussionsklima.',true],
  ['Misserfolgsfaktoren sind das Fehlen der Voraussetzungen und das Einnehmen einer «Parteivertreter-Rolle» durch den Gutachter.',true],
  ['Das GGK ist nur im Sozialversicherungsrecht (UVG/IV) vorgesehen.',false]],
 'Mögliche Optionen: schriftliche Zusammenfassung durch den Gutachter, Sitzungsprotokoll, weitere Vereinbarungen. Das FMH-GGK ist seit 01.01.2024 definitiv im Reglement der FMH-Gutachterstelle verankert (Reglement vom 20.06.2019, seit 01.10.2019).',GG+'21–29, 36');

add('Gemeinschaftliches Gutachter-Konsilium','A+','Welche Problemfelder des herkömmlichen Haftpflicht-Gutachtens nennt der Referent?',
 ['Auswahl des Gutachters, Fragenkatalog, Zeitdauer bis zum schriftlichen Gutachten, Qualität, Interpretation und fehlende Akzeptanz des Gutachtens, Gutachten/Gegengutachten/Obergutachten, Klage',
  'Ausschliesslich zu hohe Honorare',
  'Ausschliesslich die Sprache der Gutachten',
  'Es gibt keine Problemfelder'],
 'Zweck medizinischer Gutachten in Versicherungsfällen: Feststellung des medizinischen Sachverhalts, medizinische Beurteilungen (Arbeitsunfähigkeit, Prognose), Kausalität; in Arzthaftpflichtfällen: Vorgehen lege artis (Behandlungsfehler?). Lösungsansätze zur Qualitätsverbesserung: Ausbildung SIM, Versicherungsmedizin auf universitärem Niveau (asim), Leitlinien.',GG+'3–11');

/* ---- Risi: Der Konsens im interdisziplinären Gutachten ---- */
const RI='Referat Risi «Konsens» (M4 2026), Folie ';
add('Konsens im interdisziplinären Gutachten','A+','Welche Aufgaben hat der fallverantwortliche Arzt in der MEDAS-Umsetzung?',
 ['Festlegung der Disziplinen, Vervollständigung der Akten, Aktenauszug, Ausarbeitung der Fragestellung, Koordination der Abklärungen/Zusatzuntersuchungen und des Konsenses',
  'Alleinige Beurteilung der Arbeitsfähigkeit ohne Fachgutachter',
  'Entscheid über den Rentenanspruch',
  'Ausschliesslich administrative Rechnungsstellung'],
 'Die Grundidee der MEDAS (erste Stelle 1978 in St. Gallen): Ärzteteam verschiedener Fachgebiete, gemeinsames Gutachten, Gesamtwürdigung der gesundheitlichen Beeinträchtigungen im Konsens, Arbeitsfähigkeit/Eingliederung aus einer Hand, fundierte Auseinandersetzung mit Vorberichten.',RI+'1–2');

add('Konsens im interdisziplinären Gutachten','K','Konsens multidirektional – bewerten Sie jede Aussage:',
 [['Vertikale Integration meint die Integration innerhalb jedes Fachgutachtens (Anamnese, Befund, Beurteilung, Herleitung von Diagnose und funktioneller Einschränkung).',true],
  ['Horizontale Integration meint die gegenseitige Verschränkung zwischen den Fachgutachten (Übereinstimmung/Widersprüche, Interaktionsfelder, gegenseitige Bezugnahme).',true],
  ['Zentripetale Integration ist die integrative Gesamtsicht (Verdichtung nach innen, integrierte Fallbeschreibung, Transparenz zu Konsens/Dissens/Unsicherheit, vertiefte innere Konsistenzprüfung).',true],
  ['Zentrifugale Integration meint eine Verdichtung nach innen ohne Bezug zur Lebensrealität.',false]],
 'Zentrifugale Integration = Spiegelung an der Lebens-/Berufsrealität (Berichte Arbeitgeber/Eingliederung, Fremdanamnesen/Observationen, kritische Selbstreflexion, Realismus des Leistungsprofils, Aktenlage) – vertiefte äussere (lebenspraktische) Konsistenzprüfung.',RI+'4–7');

add('Konsens im interdisziplinären Gutachten','A-','Welche Aussage zum Konsens im interdisziplinären Gutachten ist FALSCH?',
 ['Ein vorgezogener, redundanter «Konsens in den Fachgutachten» ist erwünscht',
  'Fachfremde Aussagen sind zu vermeiden',
  'Transparenz zu Konsens, Dissens und Unsicherheit ist zu deklarieren',
  'Der Konsens soll mehr sein als ein simples Nebeneinander der Disziplinen («2-D» statt «3-D»)'],
 'Cave: keine fachfremden Aussagen, kein vorgezogener redundanter «Konsens in den Fachgutachten». Einzelgutachten leiden oft an der IV-Vorlage (redundant, zerstückelt, überladen, «Prokrustes-Bett»). Mehrwert: 2-D (nebeneinander), 3-D (Integration der Disziplinen), 4-D (Integration über die Zeit/Biographie), 5-D (Berücksichtigung der juristischen Sachlage).',RI+'3, 5–6');

add('Konsens im interdisziplinären Gutachten','K','Herausforderungen der Integration – bewerten Sie jede Aussage:',
 [['A priori interdisziplinäre Diagnosen sind z. B. neuropsychologische Einschränkungen, hirnorganische Störungen, Schmerz/Fatigue und somatische Krankheiten mit psychiatrischer Komorbidität.',true],
  ['Diagnostische Labels (z. B. Somatisierungsstörung, Fatigue, Schmerz) sind an der Schnittstelle Psychiatrie/Somatik kritisch zu hinterfragen.',true],
  ['Bei Neuropsychologie-Defiziten ist die Ursache (neurologisch, psychiatrisch, entwicklungsbedingt, Suchtmittel, Medikamente, Unfallverletzung) und deren Interaktion zu klären.',true],
  ['In der Realität gilt die einfache Addition aller fachspezifischen Arbeitsunfähigkeiten als korrekte Methode.',false]],
 'Offen bleibt, ob die Arbeitsfähigkeit pro Fachgebiet festgelegt und zeitlich/qualitativ additiv oder teil-additiv integriert wird; in der Realität sei oft die grösste Einschränkung massgeblich – verlangt ist eine integrierte Sichtweise. Konsensprozess: Perspektivenwechsel, Selbstreflexion, präzises Zuhören, Szenarien («was spricht dafür/dagegen»), Übersetzung des Fachjargons – aber es bleibt ein medizinisches Gutachten; Fokus auf Plausibilisierung, nicht «Wahrheit».',RI+'7–8');

/* ---- Hartmann/Brandenberg: Kunstfehler, Sorgfaltspflichtverletzung (FMH) ---- */
const HB='Referat Hartmann/Brandenberg «Kunstfehler» (M4 2026), Folie ';
add('Arzthaftung & Sorgfaltspflicht','A+','Wie wird die ärztliche Sorgfaltspflicht nach BGE 133 III 121 beurteilt?',
 ['Nach einem objektiven Massstab: geschuldet ist die nach den medizinischen Gesichtspunkten gebotene Sorgfalt; der Arzt schuldet kein Erfolgsergebnis',
  'Nach der dem jeweiligen Arzt konkret möglichen und zumutbaren Sorgfalt',
  'Der Arzt garantiert den Behandlungserfolg',
  'Massgebend ist das subjektive Empfinden der Patientin'],
 'Eine Pflichtverletzung liegt nur vor, wo eine Diagnose, Therapie oder ein sonstiges Vorgehen nach dem allgemeinen fachlichen Wissensstand nicht mehr als vertretbar erscheint (BGE 120 Ib 411). Innerhalb des Entscheidungsspielraums gilt das pflichtgemässe Ermessen.',HB+'7–9');

add('Arzthaftung & Sorgfaltspflicht','K','Behandlungsfehler versus Behandlungsrisiko – bewerten Sie jede Aussage:',
 [['Der medizinische Standard ergibt sich aus evidenzbasierten Guidelines, aktuellen Fachpublikationen und der allgemein geübten Praxis anerkannter Experten; die Medizin legt den Standard selbst fest.',true],
  ['Thrombosen, Infektionen und Wundheilungsstörungen gelten auch bei bestem Bemühen nicht immer als vermeidbar und sind ein unvermeidbares Behandlungsrisiko.',true],
  ['Bei gehöriger Aufklärung führt das Eintreten eines Risikos/einer Komplikation nicht zur Haftung.',true],
  ['Jedes unerwünschte Behandlungsergebnis begründet eine Haftung wegen eines Kunstfehlers.',false]],
 'Problemstellung: Patient hat nicht das gewünschte Ergebnis → (a) Medizinprodukt mangelhaft = Haftung des Herstellers; (b) ärztliche Sorgfaltspflichtverletzung = Haftung des Arztes/Spitals; (c) Eintreten eines Risikos/einer Komplikation = keine Haftung bei gehöriger Aufklärung.',HB+'5–6, 10–11');

add('Arzthaftung & Sorgfaltspflicht','A+','Fall: 73-Jähriger mit Knie-TP, Notfall mit Fieber/Verwirrung, β-hämolysierende Streptokokken mit nekrotisierender Fasziitis, trotz notfallmässigem korrektem Vorgehen Tod. Liegt ein Behandlungsfehler vor?',
 ['Nein – sehr hohe Letalität auch bei notfallmässigem und korrektem Vorgehen',
  'Ja – die Amputation wurde unterlassen',
  'Ja – jede Sepsis mit Todesfolge ist ein Behandlungsfehler',
  'Nicht beurteilbar'],
 'Gegenbeispiel: Hüft-TP mit zu langem, retrotorquiertem Schaft = Behandlungsfehler (nicht mit gebotener Sorgfalt gemäss Fachliteratur und Herstelleranleitung implantiert).',HB+'12–21');

add('Arzthaftung & Sorgfaltspflicht','A+','Fall: Talus-Luxation bei Malleolarfraktur, der Orthopäde war über 90 Minuten nicht erreichbar (Telefonliste nicht aktualisiert, Assistent mangelhaft instruiert). Wer haftet?',
 ['Das Spital wegen Organisationsverschuldens (Organisationshaftung); ein luxierter Talus muss sofort reponiert werden',
  'Niemand – es war ein Behandlungsrisiko',
  'Nur der Patient wegen Gleitschirmfliegens',
  'Der Hersteller der Implantate'],
 'Organisationshaftung = Haftung infolge mangelhafter Organisation einer medizinischen Institution (z. B. ungenügender Übergaberapport, mangelhafte Kommunikation, ungenügende technische Ausstattung); sie ist nicht mit der Organhaftung (Haftung eines Organs eines Vereins/einer AG) zu verwechseln.',HB+'22–29');

add('Arzthaftung & Sorgfaltspflicht','K','Ärztliche Dokumentationspflicht – bewerten Sie jede Aussage:',
 [['Die Dokumentationspflicht ergibt sich zivilrechtlich aus der Sorgfalts- und Rechenschaftspflicht des Beauftragten und ist kantonal öffentlich-rechtlich statuiert.',true],
  ['Der Umfang richtet sich nach dem Zweck, vorrangig der Behandlungssicherheit; zu dokumentieren ist das medizinisch Notwendige und Übliche.',true],
  ['Die Dokumentation soll vollständig, chronologisch und nachvollziehbar sein (BGE 141 III 363).',true],
  ['Was zu dokumentieren ist, bestimmt im Streitfall der Richter ohne medizinische Experten.',false]],
 'Was das medizinisch Notwendige und Übliche ist, muss im Streitfall ein medizinischer Experte festlegen. Beispiel: In der ganzen Krankengeschichte kein Puls- und Neurostatus → Amputation nach spät erkanntem Ischämiesyndrom. Die Beweislast der Eingriffsaufklärung obliegt der Ärztin.',HB+'30–37, 53');

add('Arzthaftung & Sorgfaltspflicht','K','Ärztliche Aufklärung – bewerten Sie jede Aussage:',
 [['Die Aufklärungspflicht ist eine auf Bundesebene verankerte Berufspflicht (Art. 40 lit. c MedBG).',true],
  ['Das Bundesgericht hat keine Prozentschwelle festgelegt, ab der ein Risiko genannt werden muss; Kriterien sind statistische Häufigkeit und Schwere des Risikos.',true],
  ['Die Aufklärung ist nicht an eine bestimmte Form gebunden; zu entscheiden ist anhand der Umstände, ob klar und verständlich aufgeklärt wurde.',true],
  ['Die Aufklärung über das Risiko eines Behandlungsfehlers schützt vor der Haftung.',false]],
 'Aufklärung über Behandlungsfehler ist unzulässig und schützt nicht vor Haftung. Formen: Eingriffsaufklärung (Diagnose-, Verlaufs-, Risikoaufklärung), Sicherungsaufklärung (therapeutisches Verhalten), wirtschaftliche Aufklärung. Empfehlung: schriftliche Information mit mündlichem Gespräch kombinieren, sorgfältig dokumentieren.',HB+'42–53');

add('Arzthaftung & Sorgfaltspflicht','A+','Welche Fragen beantwortet der Gutachter (Tatfragen) und welche entscheidet der Richter (Rechtsfragen) bei der Beurteilung der Sorgfaltspflichtverletzung?',
 ['Gutachter: medizinischer Sachverhalt, Gesundheitsschaden, natürliche Kausalität (Tatfragen); Richter: Verletzung der Sorgfaltspflicht, Organisationsverschulden, Verletzung der Aufklärungspflicht (Rechtsfragen)',
  'Gutachter: Verletzung der Sorgfaltspflicht und Rechtsfolgen; Richter: medizinischer Sachverhalt',
  'Der Gutachter entscheidet auch über die Rechtsfolgen',
  'Der Richter beantwortet die medizinischen Fragen selbst'],
 'Der Richter ist medizinischer Laie und auf die medizinische Expertise angewiesen. Der Gutachter prüft in der Praxis: Gibt es anerkannte Guidelines? Sind sie auf den konkreten Patienten/Fall anwendbar? Ist der Arzt abgewichen? Durfte/musste er abweichen?',HB+'54–57');

add('Arzthaftung & Sorgfaltspflicht','K','Beurteilung ex ante und Rückschaufehler – bewerten Sie jede Aussage:',
 [['Der Gutachter muss entscheiden, ob das Vorgehen in der damaligen Situation, gemessen am damaligen medizinischen Standard, richtig war.',true],
  ['Der Gutachter darf sich nicht vom schlechten Outcome der Behandlung leiten lassen (Rückschaufehler).',true],
  ['Eine Beurteilung nach «aktuell gültiger Lehrmeinung und aktuellem Stand der Wissenschaft» ist für die Fehlerfrage korrekt.',false],
  ['Im Fall Sudeck/Calcitonin (1990) lag ein Behandlungsfehler vor, weil Calcitonin nicht verabreicht wurde.',false]],
 'Calcitonin war 1990 noch nicht im Handel → kein Behandlungsfehler. Für die Fehlerfrage immer eine ex-ante-Beurteilung (BGE 115 Ib 175 E. 3b).',HB+'82–86, 96–97');

add('Arzthaftung & Sorgfaltspflicht','K','Fehler – Gesundheitsschaden – Kausalität: bewerten Sie jede Aussage zur Gutachtensstruktur:',
 [['Wird ein Fehler verneint, sind keine Erläuterungen zu Gesundheitsschaden und Kausalität erforderlich – das bedeutet aber nicht, dass kein Gesundheitsschaden vorliegt.',true],
  ['Wird ein Fehler bejaht, sind Gesundheitsschaden und natürliche Kausalität (überwiegende Wahrscheinlichkeit) zu beurteilen.',true],
  ['Ein Gutachten soll nur die Fehlervermutungen der Patientin beurteilen, nicht die Gesamtbeurteilung der Behandlung.',false],
  ['Formulierungen wie «Wir vermuten eher keine Verletzung der Sorgfaltspflicht» sind klare Würdigungen.',false]],
 'Verlangt: klare Würdigung mit nachvollziehbarer Begründung – auch für das, was für Mediziner klar ist, da das Gutachten von Juristen beurteilt wird. Fallbeispiel Spital A/B: Unterlassen des Röntgenbilds in Spital A = Fehler, aber nicht direkt ursächlich (keine Haftung); verpasstes Logensyndrom in Spital B = Fehler und kausal (Haftung).',HB+'60–70, 81, 92–98');

add('Arzthaftung & Sorgfaltspflicht','K','Aussergerichtliche FMH-Gutachterstelle – bewerten Sie jede Aussage:',
 [['Die FMH führt seit 1982 eine aussergerichtliche Gutachterstelle; wählbar sind schriftliches Gutachten oder mündliche Begutachtung (FMH-GGK).',true],
  ['Die Nomination der Gutachterin erfolgt durch die medizinische Fachgesellschaft.',true],
  ['Eine Gutachterin kann abgelehnt werden, wenn sie bereits in die Behandlung involviert war oder ein persönliches Interesse hat.',true],
  ['Das FMH-GGK ist nur als Pilotprojekt möglich; eine definitive Einführung ist nicht erfolgt.',false]],
 'Das FMH-GGK ist seit 01.01.2024 definitiv eingeführt. Qualitätssicherung: juristisches Gegenlesen und wissenschaftlicher Beirat (Vertreter von Ärzten, Patienten, Versicherungen, SIM). Frühere berufliche Zusammenarbeit allein ist nicht automatisch Befangenheit; enge Freundschaft oder Feindschaft kann es sein.',HB+'72–78, 87–90');

/* ---- Wipfli (Suva-Rechtsdienst): Fehler in Gutachten in der Unfallversicherung ---- */
const WI='Referat Wipfli «Fehler UV» (M4 2026), Folie ';
add('Fehler in UV-Gutachten (Wipfli)','A+','Eine versicherungsmedizinische Beurteilung stützt sich auf «Mutter angezogen» (gemeint war eine Radmutter am Motorrad). Was ist der Fehler?',
 ['Fehlende Aktenkenntnis: die Beurteilung wurde nicht in Kenntnis der (Vor-)Akten (Anamnese) verfasst',
  'Falsche Diagnose',
  'Unzulässige juristische Ausführung',
  'Befangenheit des Gutachters'],
 'Quellen: BGE 125 V 351 E. 3a, 134 V 231 E. 5.1. Ein Gutachten ist nur beweiskräftig, wenn es in Kenntnis der relevanten Vorakten abgegeben wurde.',WI+'3–5');

add('Fehler in UV-Gutachten (Wipfli)','K','Objektivität/Befangenheit – bewerten Sie jede Aussage:',
 [['Unabhängigkeit fehlt, wo ein Ausstandsgrund besteht (z. B. Verwandtschaft, persönliches Interesse).',true],
  ['Unabhängigkeit fehlt auch, wenn die sachverständige Person den Eindruck erweckt, sich im Voraus eine feste Meinung über den Ausgang des Verfahrens gebildet zu haben.',true],
  ['Bemerkungen zu «Reizwäsche» und Bräunung der Explorandin als Schluss auf fehlenden Leidensdruck sind unbedenklich (BGer U 339/06).',false],
  ['Grafische Gestaltungsmittel (Fettdruck, Kursivschrift, Unterstreichung) begründen grundsätzlich Befangenheit.',false]],
 'BGer: Die Bemerkung ist deplatziert und stellt die Objektivität in Frage (sachfremde Kriterien). Grafische Gestaltungsmittel sind grundsätzlich erlaubt (8C_448/2015). Kommentare bereits bei Aktenzusammenfassung und Anamnese sind nicht empfehlenswert, weil unklar wird, was Grundlage und was Bewertung ist.',WI+'11–17');

add('Fehler in UV-Gutachten (Wipfli)','K','Juristische Ausführungen und Verhalten des Gutachters – bewerten Sie jede Aussage:',
 [['Die Frage, ob der Unfallbegriff erfüllt ist, und die Frage des adäquaten Kausalzusammenhangs sind Rechtsfragen, die nicht vom Gutachter beantwortet werden.',true],
  ['Das Beschaffen fehlender Unterlagen ist grundsätzlich Sache des Versicherers und des Gutachters; das Fehlen darf sich nicht zu Lasten des Versicherten auswirken.',true],
  ['Kritik an der Fallführung des Versicherers im Begleitbrief ist Sache des Gutachters.',false],
  ['Einseitige Kontakte des Gutachters zu einer Partei mit Diskussion materieller Fragen begründen den Anschein der Befangenheit.',true]],
 'Kritik an der Fallführung ist Sache des Gerichts, nicht des Gutachters. Wortwahl des Parteivertreters («vollumfänglich bestritten») und das Vorwegnehmen der juristischen Beurteilung erwecken den Eindruck, der Gutachter wolle den Fall in seinem Sinne erledigt sehen (8C_448/2015: objektiv begründete Befangenheit).',WI+'18–24, 37–38');

add('Fehler in UV-Gutachten (Wipfli)','K','Unfallkausalität (Suva-Rechtsdienst) – bewerten Sie jede Aussage:',
 [['Natürlich kausal sind alle Umstände, ohne die der Erfolg nicht, nicht in gleicher Weise oder nicht zur gleichen Zeit eingetreten wäre (conditio sine qua non).',true],
  ['Für die natürliche Kausalität gilt der Beweisgrad der überwiegenden Wahrscheinlichkeit; die blosse Möglichkeit genügt nicht.',true],
  ['Das Gericht folgt jener Sachverhaltsdarstellung, die es von allen möglichen Geschehensabläufen als die wahrscheinlichste erachtet.',true],
  ['Die Formel «post hoc, ergo propter hoc» genügt als Beweis der natürlichen Kausalität.',false]],
 'Die Formel kann nicht als Beweis betrachtet werden (BGE 119 V 335 E. 2b/bb). Bei zwei möglichen Sachverhaltsvarianten genügt es, wenn die eine die wahrscheinlichere ist. Massgeblich ist, ob man vom Bestehen einer Tatsache überzeugt ist.',WI+'26–34');

add('Fehler in UV-Gutachten (Wipfli)','A+','Welche Auswirkung hat Teilkausalität auf UVG-Leistungen nach Art. 36 UVG?',
 ['Pflegeleistungen, Kostenvergütungen, Taggelder und Hilflosenentschädigung werden nicht gekürzt; Invalidenrenten, Integritätsentschädigungen und Hinterlassenenrenten werden bei nur teilweiser Unfallfolge angemessen gekürzt',
  'Alle Leistungen werden bei Teilkausalität gekürzt',
  'Keine Leistung wird bei Teilkausalität gekürzt',
  'Nur Taggelder werden gekürzt'],
 'Nicht erforderlich ist, dass der Unfall alleinige oder unmittelbare Ursache ist; es genügt, wenn er zusammen mit anderen Bedingungen zur Folge geführt hat (nicht weggedacht werden kann, ohne dass die Folge entfiele). Vorunfallliche Gesundheitsschädigungen ohne Verminderung der Erwerbsfähigkeit werden bei der Kürzung nicht berücksichtigt (Art. 36 Abs. 2 UVG).',WI+'30–32');

add('Fehler in UV-Gutachten (Wipfli)','A+','Wie ist der Begriff «posttraumatisch» nach BGer 8C_523/2022 zu verstehen?',
 ['Er bezeichnet nach üblichem Sprachverständnis oft nur die zeitliche Abfolge; es ist im Einzelfall zu prüfen, ob «unfallkausal» gemeint ist – besser «unfallkausal» verwenden',
  'Er bedeutet immer «unfallkausal»',
  'Er bedeutet immer «nicht unfallkausal»',
  'Er ist ein geschützter juristischer Begriff'],
 'Fachterminologie sauber verwenden: Der Unfall, die unfallähnliche Körperschädigung (Art. 6 Abs. 2 UVG) und die richtunggebende Verschlimmerung sind nicht zu vermengen; liegt ein Unfall vor, braucht eine unfallähnliche Körperschädigung nicht mehr geprüft zu werden.',WI+'35, 43–45');

add('Fehler in UV-Gutachten (Wipfli)','A+','Eine Beweisverfügung fragt: «Wie hoch ist die Wahrscheinlichkeit eines kausalen Zusammenhangs: sehr gering, weniger als 50 %, 50 %, mehr als 50 %, sehr hoch?» Wie ist das einzuordnen?',
 ['Das BGer will die Frage nicht mit Prozentangaben beantwortet wissen, sondern anhand der Kausalitätsformel (überwiegende Wahrscheinlichkeit); bei unklarer Fragestellung ist beim Auftraggeber nachzufragen',
  'Es ist die korrekte Standardfrage',
  'Die Antwort ist in Prozent zu geben',
  'Solche Fragen sind unbeantwortbar und sind zu verwerfen'],
 'Im Haftpflichtrecht gilt der Beweisgrad der überwiegenden Wahrscheinlichkeit gleich; der natürliche Kausalzusammenhang wird im Haftpflichtrecht wie im Sozialversicherungsrecht nach logischen und naturgesetzlichen Gesichtspunkten beurteilt (BGE 123 III 112).',WI+'36–41');

add('Fehler in UV-Gutachten (Wipfli)','K','Persönliche Leistungspflicht und polydisziplinäre Gutachten – bewerten Sie jede Aussage:',
 [['Die Weitergabe des Gutachtensauftrags setzt die vorgängige Einwilligung des Auftraggebers voraus.',true],
  ['Nicht delegiert werden dürfen Kenntnisnahme und Analyse des Dossiers, Untersuchung, Gedankenarbeit zu Beurteilung/Schlussfolgerungen und Beantwortung der Gutachterfragen.',true],
  ['Technische Analysen, Recherchier-, Schreib-, Kopier- oder Kontrollarbeiten dürfen einer Hilfsperson unter Anleitung übertragen werden.',true],
  ['Ein Konsens in polydisziplinären Gutachten ist nach BGer 8C_747/2016 zwingend; ohne ihn ist das Gutachten stets unverwertbar.',false]],
 'Die zusammenfassende Beurteilung auf Grundlage einer Konsensdiskussion ist ideal, aber nicht zwingend; sind die Teilgutachten schlüssig und lassen sich die Schlussfolgerungen im Hauptgutachten nicht nachvollziehen, darf auf die Teilgutachten abgestellt werden. Die Diagnose einer somatoformen Schmerzstörung muss durch einen Psychiater gestellt werden.',WI+'49–54');

/* ---- Saguer: häufigste Fehler aus medizinischer Sicht ---- */
const SA='Referat Saguer «Fehler aus medizinischer Sicht» (M4 2026), Folie ';
add('Gutachtenqualität (Saguer)','K','Qualität aus Sicht der Beteiligten – bewerten Sie jede Aussage:',
 [['Sachbearbeitende erwarten u. a. beantwortete Fragen, angemessen begründete Stellungnahmen und Lieferung innert nützlicher Frist.',true],
  ['Richter prüfen, ob der Bericht für die strittigen Belange umfassend ist, auf allseitigen Untersuchungen beruht, in Kenntnis der Vorakten abgegeben wurde, die Beschwerden berücksichtigt, einleuchtet und begründete Schlüsse zieht.',true],
  ['Versicherungsmediziner (Sekundärnutzer) erkennen mangelhafte fachliche Qualität eher als Sachbearbeitende (Primärnutzer).',true],
  ['Die Qualität der Aufträge erklärt die Gutachtenmängel vollständig.',false]],
 'Es war kein Zusammenhang erkennbar; schlecht vorbereitete Vorlagen bedeuten aber erheblichen Mehraufwand und höhere Folgekosten. Erfahrene Versicherungsmediziner prüfen Auftrag und Fragestellung und redefinieren ggf. den Arbeitsauftrag.',SA+'6–15');

add('Gutachtenqualität (Saguer)','K','Häufigste Gutachtenfehler aus Sicht der Richter und Versicherungsmediziner – welche gehören dazu?',
 [['Unvollständige Dokumentation, willkürliche Informationsauswahl, Beurteilung «ex post», inkonsistente Argumentation.',true],
  ['Apodiktische, keinen Widerspruch duldende Aussagen und fehlende Objektivierung der geäusserten Symptome.',true],
  ['Mangelndes Rollenbewusstsein (einseitige Parteinahme) und Verwechslung der Rechtsgebiete.',true],
  ['Ein Gutachter gesteht nie ein «Ich weiss es nicht» – dieser Mut ist im Gutachten ein Mangel.',false]],
 'Fehlender Mut, auch einmal einzugestehen «Ich weiss es nicht», gilt als Mangel – das Eingestehen der Grenzen ist erwünscht. Weitere Fehler: fehlende Selbstkritik und Orientierung an Referenzliteratur, Beeinflussung der Neutralität durch Einstellungen und Emotionen, unkritisch übernommene Diagnosen, Feststellungen ohne Begründung, Conformation Bias.',SA+'10, 16–17');

add('Gutachtenqualität (Saguer)','A+','Welche sieben Diskrepanzen listet Widder («7 D\'s») für die Konsistenzprüfung u. a. auf?',
 ['Diskrepanzen zwischen subjektiver Intensität und Vagheit, zwischen massiven Beschwerden und erkennbarer Beeinträchtigung in der Untersuchung, zwischen eigenen Angaben und Fremdanamnese/Akten, zwischen schwerer Beeinträchtigung und intaktem psychosozialem Funktionsniveau, zwischen Beschwerden und Inanspruchnahme von Therapie, zwischen klinischem Bild und Tests/Skalen, zwischen angegebener Medikamenteneinnahme und Serumnachweis',
  'Diskrepanzen zwischen Alter, Geschlecht, Beruf, Herkunft, Religion, Wohnort und Einkommen',
  'Diskrepanzen zwischen Diagnose, Rente, Anwalt, Versicherung, Gericht, Honorar und Gutachtendauer',
  'Diskrepanzen zwischen Aktenlage, Anwalt und Versicherung'],
 'Die Prüfliste entspricht inhaltlich der Prüfliste typischer Diskrepanzen im Modul-2-Repetitorium.',SA+'18');

add('Gutachtenqualität (Saguer)','K','Leistungsfähigkeit und Integritätsschaden – bewerten Sie jede Aussage:',
 [['Zur Beurteilung der Leistungsfähigkeit sind ein positives (ressourcenorientiertes) und ein negatives (defizitorientiertes) Fähigkeitsprofil zu erstellen.',true],
  ['Aktivitäten des täglichen Lebens und realitätsnahe Berufsbilder sollen einfliessen.',true],
  ['Bei mehreren Einzelschäden ist bei abweichender Schätzung von der Summe eine Begründung (Gesamtwürdigung) notwendig.',true],
  ['Grundlage der Integritätsschaden-Schätzung ist ausschliesslich die Erwerbseinbusse.',false]],
 'Grundlagen: UVV (nicht abschliessende Liste in Anhang 3) und Suva-Tabellen; Voraussetzungen prüfen (Erheblichkeit, Dauerhaftigkeit); Begründung mit UVV oder Suva-Tabellen. Das Suva-Gutachten-Clearing verbesserte die Qualität externer Gutachten durch versicherungsmedizinische Beratung bei Auftragsvorbereitung und Expertenauswahl (Auswahlkriterien: Fachkompetenz, Unabhängigkeit, Sprache, Termine).',SA+'11, 19, 24–27');

/* ---- Pizala: Mobbing – Fatigue – Burn-out ---- */
const PI='Referat Pizala «Mobbing–Fatigue–Burn-out» (M4 2026), Folie ';
add('Mobbing, Fatigue, Burn-out','K','Mobbing – bewerten Sie jede Aussage:',
 [['Mobbing (Bullying) ist wiederholtes, regelmässiges, vorwiegend kommunikatives Schikanieren, Quälen, Ausgrenzen durch eine Person oder Gruppe gegen eine Person; geht es von Vorgesetzten aus, spricht man von «Bossing».',true],
  ['Mobbing ist ein eigenständiges psychiatrisches Krankheitsbild.',false],
  ['Psychiatrisch handelt es sich bei Mobbingfolgen um Stressfolgeerkrankungen (z. B. Anpassungsstörung, gemischte Angst und Depression, affektive Störungen, Angst-/Panikstörungen).',true],
  ['Bei Mobbing sind Täter-Opfer-Beziehung, Führungsverhalten, Teamdynamik, Arbeitsorganisation und institutionelle Reaktion relevant.',true]],
 'Mobbing ist ein unspezifischer Begriff; dahinter können sich psychiatrische Störungen verbergen. Daraus folgt: fundierte psychiatrische Diagnostik, Plausibilitäts-, Konsistenz- und Kontextprüfung; Art, Zeitverlauf und Ausmass der Psychopathologie und die Funktionseinschränkungen bestimmen die AUF.',PI+'5–11, 37','psych');

add('Mobbing, Fatigue, Burn-out','K','Burn-out – bewerten Sie jede Aussage:',
 [['Nach ICD-11 ist Burn-out (QD85) ein arbeitsbezogenes Phänomen, nach ICD-10 eine Z-Kodierung (Z73, Probleme der Lebensbewältigung).',true],
  ['Die drei Dimensionen sind Erschöpfung/Energieverlust, mentale Distanz/Zynismus gegenüber dem Job und verminderte Effektivität.',true],
  ['Burn-out ist ein eigenständig definiertes Krankheitsbild nach ICD-10 mit festem Rentenanspruch.',false],
  ['Hinter dem Label «Burn-out» können psychische Grunderkrankungen (z. B. Anpassungsstörung, depressive Störung, Angststörung) stehen, die psychiatrisch zu prüfen sind.',true]],
 'Burn-out gilt als kein definiertes Krankheitsbild, sondern berufsbezogener Stress («Konzept» umstritten); Z-Kodierungen begründen für sich keinen Rentenanspruch. Im Fallbeispiel (CEO, entlassen auf Initiative) bildeten sich die Symptome nach dreimonatiger AUF fast vollständig zurück.',PI+'21–27','psych');

add('Mobbing, Fatigue, Burn-out','K','Fatigue (psychiatrische Sicht) – bewerten Sie jede Aussage:',
 [['Fatigue ist subjektiv und multidimensional (körperlich, kognitiv, emotional), dysproportional zur Belastung, langandauernd, ohne Symptomreduktion durch Ruhe (CDC/Fukuda).',true],
  ['Fatigue kann postviral, tumorassoziiert, neurologisch (MS, Parkinson) oder arbeitspsychologisch (lange Arbeitszeiten, Schichtarbeit, Monotonie) bedingt sein.',true],
  ['«Compassion fatigue» bezeichnet Sekundärerschöpfung/Sekundärtraumatisierung im Helfersystem.',true],
  ['Fatigue ist ein einheitliches Krankheitsbild ohne Differenzialdiagnosen.',false]],
 'Bei Fatigue sind psychiatrisch zu prüfen: Traumafolgestörung, affektive Störung, Somatisierungsstörung, Persönlichkeitsstörung, Komorbiditäten wie ADHS – diagnostisch zurückhaltend bei hohem Stresslevel.',PI+'13–18','psych');

add('Mobbing, Fatigue, Burn-out','A+','Welche Aufgabe nennt Pizala als «Übersetzungsarbeit» der Sachverständigen?',
 ['Die mit den Methoden von Psychiatrie und Psychologie erhobenen Befunde müssen in das Bezugssystem der Jurisprudenz transportiert werden',
  'Die Übersetzung von Gutachten in andere Landessprachen',
  'Die Übersetzung der Diagnose in eine Prozentzahl der Invalidität',
  'Die Übersetzung der Rechtsprechung in Therapieempfehlungen'],
 'Zuordnung unspezifischer Begriffe klärend vornehmen; Validität von Diagnosen und Beschwerden prüfen; Informationsquellen/Aktenlage beurteilen; Hypothesen bilden; funktionelle Einschränkungen begründen.',PI+'33–35','psych');

/* ---- Klipstein: Wertigkeit der EFL ---- */
const KL='Referat Klipstein «EFL» (M4 2026), Folie ';
add('EFL','K','Konzept der EFL (Isernhagen) – bewerten Sie jede Aussage:',
 [['Die EFL umfasst 16–29 standardisierte sowie arbeitsbezogene Tests und bestimmt die «ergonomisch noch sichere Limite» sowie Zwischenstufen anhand standardisierter Beobachtungskriterien.',true],
  ['Ergebnisse sind physische Leistungsfähigkeit, Belastungs-/Schmerzverhalten (Pain Behavior Assessment) und Konsistenz.',true],
  ['Die Fachgruppe BERE der SIM ist für Qualitätsstandards, Lizenzierung, Schulung und Qualitätssicherung verantwortlich.',true],
  ['Das Pain Behavior Assessment erfasst nur Selbstangaben und keine Beobachtung.',false]],
 'PBA: Beobachtungen während EFL und klinischer Untersuchung – Schmerzwahrnehmung (4 Items), auffälliges Schmerzverhalten (6), Effort (8), Verhaltenskonsistenz (23). Das Verhalten ist «objektiv» beobachtbar. SELF = Selbstevaluation der eigenen Leistungsfähigkeit (max. 80 Punkte).',KL+'9, 16–18');

add('EFL','K','Stärken, Schwächen und Mehrwert der EFL – bewerten Sie jede Aussage:',
 [['Stärken: reale Austestung von Körperfunktionen, standardisiertes Vorgehen, Resultate weitgehend unabhängig von der Motivation, Sichtbarmachen schwer erklärbarer Funktionsstörungen.',true],
  ['Der Mehrwert ist grösser bei stabiler Gesundheitssituation, überwiegender Beteiligung des Bewegungsapparats und körperlich anspruchsvoller angestammter Tätigkeit.',true],
  ['Der Mehrwert ist kleiner bei instabiler Gesundheitssituation und ausgeprägtem dysfunktionalem Verhalten (z. B. mehrere Waddell-Zeichen, konstant hohes indifferentes Schmerzniveau).',true],
  ['Die EFL beurteilt das zeitliche Rendement bei monoton-repetitiven Aufgaben zuverlässig ohne zusätzliche Informationen.',false]],
 'Grenzen im zeitlichen Rendement, v. a. bei monoton-repetitiven Aufgaben, erfordern zusätzliche Informationen und Erfahrung. Take-home: Es gibt keine «guten» oder «schlechten» Indikationen, aber Fälle mit höherem oder geringerem Mehrwert; die EFL ist oft nicht zwingend, erhöht aber die Glaubwürdigkeit (Funktionsfähigkeit, Konsistenz).',KL+'28–29, 31');

add('EFL','A+','Wie wertet das Bundesgericht die EFL (z. B. 8C_547/2008, 9C_168/2018)?',
 ['Für eine valide Beurteilung der Arbeitsfähigkeit und Zumutbarkeit kann sie in gewissen Fällen sinnvoll oder notwendig sein; Arbeitssimulationstests erlauben Aussagen zum arbeitsbezogenen Leistungsvermögen, zum Leistungsverhalten und zur Konsistenz',
  'Sie ist in jedem Fall obligatorisch',
  'Sie ist ein unzulässiges Beweismittel',
  'Sie ersetzt die ärztliche Beurteilung vollständig'],
 'Nach 9C_384/2015 liefert die EFL gerade bei Erkrankungen des Bewegungsapparats, bestätigter Leistungsbereitschaft und fehlenden Inkonsistenzen zuverlässige Resultate. Take-home: Einschränkungen beim Gewichtheben werden oft überschätzt; das Problem sind meist unergonomische Haltungen, Monoton-Repetitives, Kumulation.',KL+'22–24, 31');

add('EFL','A+','Bei Wipfli/Böhler wird die EFL im Gutachten wie behandelt?',
 ['Sie ist vom Facharzt in einen klinischen Kontext zu setzen; das Leistungsprofil ist mit dem Anforderungsprofil zu matchen und Selbstlimitierungen sind einzuordnen',
  'Sie ist unverändert zu übernehmen',
  'Sie ist nur dem Auftraggeber vorbehalten',
  'Sie ersetzt die Konsistenzprüfung'],
 'Siehe auch Referat Böhler/Meier: EFL und NPS tragen massgeblich zur Beurteilung bei, dürfen aber nie ohne fachärztliche Würdigung übernommen werden; Empfehlung einer EFL «um bessere Karten in einer rechtlichen Beurteilung zu haben» erweckt den Anschein mangelnder Unparteilichkeit.',KL+'10; Referat Böhler/Meier Folie 10, 18');

/* ---- Khatami: Müdigkeit und Schläfrigkeit aus organischer Sicht ---- */
const KH='Referat Khatami «Müdigkeit/Schläfrigkeit» (M4 2026), Folie ';
add('Müdigkeit & Schläfrigkeit','K','Begriffe und Definitionen – bewerten Sie jede Aussage:',
 [['Exzessive Tagesschläfrigkeit = Unfähigkeit, wach zu bleiben, Einschlafneigung auch in ungewöhnlichen Situationen; häufig durch Schlaf gebessert.',true],
  ['Müdigkeit/Erschöpfung = physische und psychische Erschöpfung, nicht besser mit «mehr Schlaf», verlängerte Erholungszeit.',true],
  ['Hypersomnie = verlängerte Schlafdauer von mehr als 11 Stunden pro 24 Stunden (ICSD-3).',true],
  ['Schläfrigkeit, Müdigkeit und Hypersomnie sind austauschbare Synonyme.',false]],
 'Verwechslung der Begriffe Schläfrigkeit, exzessive Tagesschläfrigkeit und Hypersomnie wird als Fehler angeführt (Beispiel BGE 137 V 64). Differenzialdiagnose von Schläfrigkeit/Müdigkeit: u. a. Depression/Apathie (Antriebsminderung).',KH+'8–10, 38','neuro');

add('Müdigkeit & Schläfrigkeit','K','Diagnostik von Schläfrigkeit und Müdigkeit – bewerten Sie jede Aussage:',
 [['Die Epworth Sleepiness Scale (ESS) fragt die Einschlafwahrscheinlichkeit in definierten Situationen ab.',true],
  ['Der Multiple Schlaflatenz-Test (MSLT) misst die Einschlaflatenz (Latenz bis Schlafstadium 1) in mehreren Nap-Gelegenheiten im Anschluss an eine Polysomnographie; verminderte Schlaflatenz = erhöhte Schläfrigkeit.',true],
  ['Die Fatigue Severity Scale (FSS) wird zur Erfassung der Müdigkeit/Erschöpfung eingesetzt.',true],
  ['Der MSLT ist das geeignete Instrument zur Messung von Fatigue.',false]],
 'Beispielfälle: 37-jähriger Mann nach COVID-19: FSS 6.4/7, ESS 8/24, mittlere Einschlaflatenz 17 min, kein SOREM → Müdigkeit (Fatigue); 32-jährige Frau nach H1N1-Impfung: FSS 3.9, ESS 16/24, mESL 3.4 min, 2 SOREM → Schläfrigkeit (Narkolepsie-Muster), Therapie Stimulantien.',KH+'14–19, 32–33','neuro');

add('Müdigkeit & Schläfrigkeit','A+','Welche Aspekte gehören zur gutachterlichen Plausibilitätsprüfung bei Müdigkeit/Schläfrigkeit?',
 ['Genaue Schilderung des Alltags (nicht des Berufslebens), Diskrepanz zur Fremdanamnese, fehlende Besserung durch verschiedene Therapieansätze; Objektivierung/Quantifizierung (Scores, Vigilanztests, PSG, Aktimetrie) und ätiologische Zuordnung',
  'Allein die Epworth-Skala',
  'Allein die Selbsteinschätzung der Patientin',
  'Allein die Anzahl der Arztbesuche'],
 'Differenzialdiagnose Müdigkeit: internistisch (Anämie, Hypo-/Hyperthyreose, M. Addison, postinfektiös, orthostatische Intoleranz, Kollagenosen), psychiatrisch, neurologisch (MS, Enzephalitis, Stroke, SHT, Myasthenie, Myopathien), schlafmedizinisch (Schlafapnoe, Insomnie, RLS/PLMS), medikamentös-toxisch. Basislabor: Glucose, TSH, Eisen/Ferritin.',KH+'35, 24–25','neuro');

/* ---- Nevzati: Erfassung der Leistungsfähigkeit und Arbeitsunfähigkeit ---- */
const NE='Workshop Nevzati «Erfassung der Leistungsfähigkeit» (M4 2026), Folie ';
add('Leistungsfähigkeit & ICF','K','Arbeitsunfähigkeit aus medizinischer Perspektive – bewerten Sie jede Aussage:',
 [['Zur Beschreibung gehören Belastbarkeitsniveau/Belastungstoleranz, Häufigkeit, spezielle Umstände, Arbeitszeit (Präsenzzeit/Pausen) und arbeitsrelevante zusätzliche Leistungseinbussen.',true],
  ['Gründe für eine Einschränkung sind Sicherheit, Gesundheit, Arbeitsleistung und Lebensqualität.',true],
  ['Die EFL (Isernhagen-System) dient u. a. dem «Job-match», der Zumutbarkeit einer angepassten Tätigkeit und der Beurteilung von Rehabilitationsfähigkeit/-willigkeit (Verhalten unter Belastung).',true],
  ['Die Plausibilisierung der EFL-Ergebnisse erfolgt immer rein technisch durch die Physiotherapie.',false]],
 'Plausibilisierung ist immer medizinisch: Bewegungsapparat-Facharzt (PMR, Rheumatologie, Orthopädie); zumutbare Willensanstrengung und Wertigkeit dysfunktionalen Krankheitsverhaltens: Facharzt Psychiatrie. Subjektive Instrumente: PACT Spinal Function Sort, WAI, FABQ. EFL-Ergebnisse: Belastbarkeitsprofil, zumutbarer zeitlicher Umfang, Konsistenz, Einsatzbereitschaft, Selbstlimitierung.',NE+'4–5, 15–19');

/* ---- Workshops: Kausalität psychischer Unfallfolgen (Pizala) ---- */
const WB='Workshop Pizala «Kausalität psychischer Unfallfolgen» (M4 2026), Folie ';
add('Kausalität psychischer Unfallfolgen','K','Kausalität psychischer Unfallfolgen – bewerten Sie jede Aussage:',
 [['Die natürliche Kausalität (conditio sine qua non: keine überzeugende andere Erklärung; Wegdenken des Ereignisses lässt den Schaden entfallen) ist Aufgabe des Mediziners.',true],
  ['Die adäquate Kausalität ist ein juristischer Filter für haftungsrelevante Ereignisse und Aufgabe des Rechtsanwenders.',true],
  ['Es gibt eine abschliessende Liste psychischer Unfallfolgen in der ICD.',false],
  ['Ein zeitlicher Zusammenhang belegt allein keine Kausalität; psychische Unfallfolgen sind oft komplex und zeitverzögert.',true]],
 'Zu prüfen: spezifische, ereignisbezogene Störungen (PTBS), richtunggebende Verschlimmerung vorbestehender Erkrankungen, Vorbestehende Persönlichkeitszüge/Vulnerabilitäten, die verstärkt werden oder dekompensieren können. Teilkausalität: das Ereignis muss nicht alleinige oder unmittelbare Ursache sein (BGE 129 V 177, 119 V 337, 118 V 289). Beweismass: überwiegende Wahrscheinlichkeit.',WB+'2–4, 15, 23','psych');

add('Kausalität psychischer Unfallfolgen','K','Interpretationsfallen und PTBS – bewerten Sie jede Aussage:',
 [['Zu beachten sind notwendige und hinreichende Ursachen (nicht DIE eine), und vorbestehende, ursächliche und Verlaufsfaktoren sind zu unterscheiden.',true],
  ['Denk- und Interpretationsschritte sollen nacheinander vollzogen und Ungereimtheiten/Differenzen diskutiert werden.',true],
  ['Eigene emotionale Befindlichkeiten dürfen unberücksichtigt bleiben.',false],
  ['Je mehr Ereignisse, desto weniger Spontanremission bei PTBS; peritraumatische Dissoziationen sind ein Prädiktor.',true]],
 'PTBS-Cluster nach Workshop: Intrusionen, Vermeidung/emotionale Stumpfheit, Hyperarousal, Dissoziationen, Depression. Kasuistiken helfen bei der Einordnung, dürfen aber nicht verallgemeinert werden. Beispielfall: Explosionsverbrennung → PTBS (F43.1) und mittelgradige depressive Störung (F32.11).',WB+'22–25','psych');

/* ---- Workshop CRPS (Brunner) ---- */
const CR='Workshop Brunner «CRPS» (M4 2026), Folie ';
add('CRPS','K','Budapest-/IASP-Kriterien (Valencia-Konsens) – bewerten Sie jede Aussage:',
 [['Erforderlich ist ein Dauerschmerz, dysproportional zum auslösenden Ereignis.',true],
  ['Anamnestisch sind Symptome in mindestens 3 von 4 Kategorien (sensibel, vasomotorisch, sudomotorisch/Ödem, motorisch/trophisch) zu berichten; bei der Untersuchung muss mindestens ein Befund in 2 oder mehr Kategorien vorliegen.',true],
  ['Es darf keine andere Diagnose geben, welche die Symptome und Befunde besser erklärt.',true],
  ['Das Nichterfüllen der Budapest-Kriterien bedeutet automatisch «Status nach CRPS» bzw. Heilung.',false]],
 'Nicht mehr erfüllen der Budapest-Kriterien ≠ Status nach CRPS. Zu unterscheiden: florides CRPS, CRPS in partieller Remission, CRPS in Remission. Die Kriterien sind subjektiv, gelten nur für die Frühphase und nicht perfekt (Sensitivität 0.99, Spezifität 0.68).',CR+'16–17, 34–36, 42','ortho');

add('CRPS','K','CRPS – Epidemiologie, Verlauf und Begutachtung – bewerten Sie jede Aussage:',
 [['CRPS ist eine seltene Erkrankung (z. B. 5.5–26.2/100\'000 Personenjahre) mit erheblich höheren Versicherungskosten und Arbeitsausfällen.',true],
  ['In der Frühphase sind Fotodokumentation und minutiöse Rekonstruktion des Verlaufs anhand der Akten wichtig.',true],
  ['Als Auslöser kommen v. a. Traumata (Frakturen ca. 65 %) und chirurgische Eingriffe (ca. 19 %) in Frage; eine kurze Latenzzeit zwischen Unfall und Auftreten wurde (max. 6–8 Wochen) gefordert.',true],
  ['Die Diagnose CRPS darf unkritisch aus Vorberichten übernommen werden.',false]],
 'Verlaufsbeurteilung: Begutachtungsschema mit Akten (Frühphase, Verlauf, aktuelle Situation), Anamnese mit klarer Trennung der Beschwerden in Frühphase und aktuell; Fragen: Liegt aktuell ein CRPS vor? Falls ja: medizinischer Endzustand, Prognose. Ungünstige Prognose: persistierende sensible Veränderungen, «kalte» Hauttemperatur, Fibrosierungen.',CR+'4, 25–26, 38–44','ortho');

/* ---- Workshop Epilepsie und Arbeitsunfähigkeit (Krämer) ---- */
const EP='Workshop Krämer «Epilepsie und Arbeitsunfähigkeit» (M4 2026), Folie ';
add('Epilepsie und Arbeitsfähigkeit','K','Epilepsie und Arbeitsunfähigkeit – bewerten Sie jede Aussage:',
 [['Bei Epilepsie sind häufiger qualitative Einschränkungen (Tätigkeiten mit erhöhter Gefährdung) oder vorübergehende quantitative Einschränkungen als dauerhafte quantitative Arbeitsunfähigkeit.',true],
  ['Aktive Epilepsie verunmöglicht im Allgemeinen Tätigkeiten in grosser Höhe mit Absturzgefahr, an gefährlichen Maschinen und mit dem Führen eines Kraftfahrzeugs.',true],
  ['Bei Tätigkeiten bis zu einer Absturzhöhe von 1 m bestehen grundsätzlich keine Bedenken (Ausnahme: schwere Epilepsien mit bis zu täglichen Anfällen).',true],
  ['Menschen mit Epilepsie sind grundsätzlich nicht arbeitsfähig, weil Anfälle das Verletzungsrisiko unkontrollierbar machen.',false]],
 'Häufig sind unbegründete Ängste bei Arbeitgebern und Betroffenen. In jedem Einzelfall ist eine detaillierte Arbeitsplatzanalyse erforderlich (ggf. Anpassung, Gespräche, Sozialberatung, frühe IV-Beratung). Günstige Faktoren: Anfallsfreiheit, keine Komorbiditäten, gute Ausbildung, gute soziale Situation.',EP+'6, 10–14','neuro');

add('Epilepsie und Arbeitsfähigkeit','A+','Wie wird eine quantitative Einschränkung bei Epilepsie berechnet (Beispiel Krämer)?',
 ['Über die Erholungszeit nach Anfällen im Verhältnis zur Arbeitszeit, z. B. 2 komplex-fokale Anfälle pro Woche mit je 2 Stunden Erholung = 4/40 Stunden = 10 %',
  'Nach der Anzahl der Antiepileptika',
  'Nach dem Alter der Patientin',
  'Nach der Dauer seit Diagnosestellung'],
 'Zweites Beispiel: 10 Grand-Mal-Anfälle pro Jahr mit 2 Tagen Erholung = ca. 20 Arbeitstage = 20/230 = 10 %. Passager (Tage bis ca. 1 Woche): postiktal.',EP+'13','neuro');

add('Epilepsie und Arbeitsfähigkeit','K','Eignungskriterien und Anfallsfreiheit bei Epilepsie – bewerten Sie jede Aussage:',
 [['Grundsätzlich keine Einschränkung, wenn seit > 3 Jahren Anfälle nur im Schlaf auftreten oder Anfälle keine Bewusstseinsstörung, keinen Sturz und keine Störung der Körpermotorik verursachen.',true],
  ['Einschränkungen bestehen, wenn im Anfall Bewusstseinsstörungen auftreten, die Haltungskontrolle verloren geht oder Automatismen/Störungen der Körpermotorik auftreten.',true],
  ['Bei hohem Gefahrenrisiko gelten «grundsätzlich keine Bedenken» erst nach 5 Jahren Anfallsfreiheit ohne Medikamente.',true],
  ['Eine Anfallsfreiheit von einem Monat genügt grundsätzlich für Tätigkeiten mit hohem Gefahrenrisiko.',false]],
 'Mittleres Gefahrenrisiko: 1 Jahr Anfallsfreiheit (bzw. 1 Jahr nach OP), 2 Jahre Anfallsfreiheit, 3 Jahre Anfälle nur aus dem Schlaf. Zu beachten auch Anfallsfrequenz/-schwere, Vorgefühle, tageszeitliche Bindung, Nebenwirkungen (Sedierung). Psychiatrische Komorbidität ist häufig (Depression 11–80 %, Angst 5–25 %, Psychose 2–9 %).',EP+'15–16, 20, 23, 27','neuro');

/* ---- Workshop: Suizid als Unfall (Ebner/Herzog-Zwitter) ---- */
const SU='Workshop Ebner/Herzog-Zwitter «Suizid als Unfall» (M4 2026), Folie ';
add('Suizid als Unfall','K','Suizid und Unfallversicherung (Art. 37 UVG, Art. 48 UVV) – bewerten Sie jede Aussage:',
 [['Bei absichtlicher Herbeiführung des Gesundheitsschadens oder Todes besteht grundsätzlich kein Anspruch auf Versicherungsleistungen (Ausnahme: Bestattungskosten).',true],
  ['Leistungen bei Suizid kommen nur in Frage, wenn der Versicherte zur Zeit der Tat ohne Verschulden gänzlich unfähig war, vernunftgemäss zu handeln, oder wenn die Selbsttötung die eindeutige Folge eines versicherten Unfalls war.',true],
  ['Die gänzliche Urteilsunfähigkeit muss mit überwiegender Wahrscheinlichkeit bewiesen sein.',true],
  ['Bei jeder schweren Depression ist die Urteilsfähigkeit im Suizidzeitpunkt aufgehoben.',false]],
 'Urteilsfähigkeit ist der Regelfall und wird auch im Zweifel vermutet; Urteilsunfähigkeit wird nur sehr restriktiv zugestanden (BGE 129 V 95; 120 V 354; 8C_662/2025). Die Zusprechung setzt grundsätzlich einen Unfall im Rechtssinn voraus (BGE 140 V 220).',SU+'13–26');

add('Suizid als Unfall','K','Beurteilung der Urteilsfähigkeit bei Suizid – bewerten Sie jede Aussage:',
 [['Urteilsfähigkeit umfasst zwei kognitive Elemente (Erkenntnisfähigkeit, Wertungsfähigkeit) und zwei voluntative Elemente (Fähigkeit zur Willensbildung, Fähigkeit, gemäss eigenem Willen zu handeln).',true],
  ['Nachweis: schwere psychopathologische Symptome (Wahn, Sinnestäuschung, Stupor, Raptus, Impulsdurchbruch), das Motiv muss aus der Symptomatik stammen, die Tat muss «unsinnig» sein – «unverhältnismässig» genügt nicht.',true],
  ['Aus der Macht des Selbsterhaltungstriebs wird bei Zweifeln, ob Unfall oder Suizid vorliegt, in der Regel von einer natürlichen Vermutung der Unfreiwilligkeit ausgegangen; Suizid gilt nur als nachgewiesen, wenn gewichtige Indizien jede andere Deutung ausschliessen.',true],
  ['Ein Abschiedsbrief und Vorbereitungshandlungen sprechen für eine fehlende bewusste Auseinandersetzung mit der Suizidfrage.',false]],
 'Prüfschritte (Riemer-Kafka): Biografie/soziale Situation, Ermittlungsunterlagen, Krankengeschichte/Hinweise auf psychische Störungen, Diagnose/Differenzialdiagnose, Rekonstruktion des Handlungsablaufs. Hinweise auf bewusste Auseinandersetzung: längere Beschäftigung mit Suizid, Vorbereitungshandlungen, Abschiedsbrief, Komplexität der Handlung, absichtliche Intoxikation («Mut antrinken»). Präsuizidales Syndrom (Ringel): Einengung.',SU+'21–36','psych');

/* ---- Workshop: Mini-ICF-APP (Martin/Christensen) ---- */
const MI='Workshop Martin/Christensen «Mini-ICF-APP» (M4 2026), Folie ';
add('Mini-ICF-APP','K','Mini-ICF-APP – bewerten Sie jede Aussage:',
 [['Es ist ein Fremdbeurteilungsinstrument (Linden et al.) für Erwachsene mit psychischen Störungen aller Art, änderungssensitiv, Bearbeitungsdauer ca. 10 Minuten.',true],
  ['Die Beurteilung erfolgt mit dem globalen fünfstufigen Rating der ICF.',true],
  ['Fähigkeiten/Beeinträchtigungen sind im Unterschied zum psychopathologischen Befund immer nur in Bezug zu einem konkreten Kontext quantifizierbar.',true],
  ['Das Mini-ICF-APP erfasst die tatsächlich gezeigte Leistung (performance) und die Motivation.',false]],
 'Capacity-Regel: Beurteilt wird, ob jemand etwas tun könnte, wenn er wollte oder die Situation es erfordert (hypothetische Beurteilung); nicht die tatsächliche Performance – dadurch bleiben motivationale Faktoren aussen vor. Beobachtungen haben grössere Bedeutung als Aussagen des Exploranden.',MI+'10–20','psych');

add('Mini-ICF-APP','A+','Was leistet die «Rollenerwartung» in der Ratingregel des Mini-ICF-APP?',
 ['Sie standardisiert den Massstab über eine soziale Referenzgruppe (gesunde Personen gleichen Geschlechts, Alters, Ausbildungsstatus, mit ähnlichen Lebenserfahrungen und gleichem sozialem/ethnischem Hintergrund); dadurch bleiben invaliditätsfremde Faktoren ausgeklammert',
  'Sie bestimmt den Invaliditätsgrad',
  'Sie ersetzt die Diagnose',
  'Sie misst die Motivation der Person'],
 'Kontextbezug: Standard-/Referenzbereich wird je nach Fragestellung festgelegt (konkreter Arbeitsplatz, Berufsfeld, allgemeiner Arbeitsmarkt/Verweistätigkeit, Teilhabe am sozialen Leben). Mini-ICF-APP gilt laut Böhler/Meier als «Brücke zwischen Medizin und Recht» (0 = keine, 4 = volle Beeinträchtigung).',MI+'14–17; Referat Böhler/Meier Folie 8','psych');

/* ---- Workshop: Abhängigkeitserkrankungen (Aeschbach) ---- */
const AE='Workshop Aeschbach «Abhängigkeitserkrankungen» (M4 2026), Folie ';
add('Abhängigkeitserkrankungen','K','Abhängigkeitserkrankungen und IV (BGE 145 V 215) – bewerten Sie jede Aussage:',
 [['Seit 11.07.2019 werden Suchterkrankungen wie alle anderen psychischen Störungen nach dem strukturierten Beweisverfahren (BGE 141 V 281) abgeklärt.',true],
  ['Vor 2019 wurde eine Abhängigkeit allein nicht als Grund für eine IV-Berentung akzeptiert; es war eine zur Abhängigkeit führende oder aus ihr resultierende sekundäre Diagnose erforderlich.',true],
  ['Das Bundesgericht anerkennt, dass die Annahme, ein Entzug stelle die Gesundheit ohne Weiteres wieder her, falsch ist, und dass es keine rechtliche Grundlage für das Konstrukt eines «selbstverschuldeten» Zustandes gibt.',true],
  ['Eine Abstinenzforderung ist ohne Prüfung des Einzelfalls immer zumutbar.',false]],
 'Im Einzelfall ist zu prüfen, inwieweit Entzug, Abstinenz oder Therapie medizinisch zumutbar ist; bei Erfüllen der übrigen Voraussetzungen ist die Rente nicht zu befristen und eine Schadenminderungspflicht ggf. revisionsweise zu überprüfen (9C_724/2018).',AE+'4–11','psych');

add('Abhängigkeitserkrankungen','K','Diagnostik und Diagnose als «Eintrittspforte» – bewerten Sie jede Aussage:',
 [['Nach ICD-10 sind drei oder mehr Kriterien im letzten Jahr nötig (z. B. starker Wunsch/Zwang, verminderte Kontrollfähigkeit, Entzugssyndrom, Toleranz, Vernachlässigung anderer Interessen).',true],
  ['Das DSM-5 ersetzt die Trennung von Missbrauch und Abhängigkeit durch ein Kontinuum («Substanzgebrauchsstörung»): ≥ 2 Merkmale in 12 Monaten, 2–3 = moderat, ≥ 4 = schwer.',true],
  ['Die Diagnose ist die «Eintrittspforte», sagt aber nichts über Art und Ausmass der Leistungsfähigkeit; die AUF ist nur durch effektive Funktionseinbussen zu begründen.',true],
  ['Z-Diagnosen (psychosoziale Diagnosen) haben per Definition einen direkten Einfluss auf die Arbeitsfähigkeit.',false]],
 'Z-Diagnosen haben per Definitionem keinen Einfluss auf die AF, können aber Funktionseinbussen einer Erkrankung im Sinne einer defizitären Ressourcenlage verstärken. Nur Diagnosen mit Krankheitswert (psychiatrisch alle F-Diagnosen) mit dauerhaften Funktionseinschränkungen trotz lege artis Behandlung können mit Auswirkung auf die AF bezeichnet werden.',AE+'13–19','psych');

/* ---- Workshop: (unipolare) Depression (Schleifer) ---- */
const DE='Workshop Schleifer «Depression» (M4 2026), Folie ';
add('Depression (Workshop)','K','Depression in der Begutachtung – Epidemiologie und Befund – bewerten Sie jede Aussage:',
 [['Der klinisch-psychiatrische Befund unter Verwendung des AMDP-Systems ist laut Qualitätsleitlinien 2016 obligatorisch; AMDP ist aber kein Testverfahren, sondern eine standardisierte Befunddokumentation.',true],
  ['Eine fehlende AMDP-Erhebung macht ein Gutachten nach der Rechtsprechung (8C_266/2012) automatisch unverwertbar.',false],
  ['Die Bejahung von Symptomen durch die untersuchte Person allein reicht nicht zwingend; subjektive Angaben sind mit Befund, Verhalten, Aktenlage, Fremdangaben und Alltagsfunktion abzugleichen.',true],
  ['Testverfahren (z. B. BDI, Hamilton, SCL-90) haben nach der Rechtsprechung höchstens ergänzende Funktion; entscheidend sind klinische Untersuchung, Anamnese, Symptomerfassung und Verhaltensbeobachtung.',true]],
 'Das PHQ-2 (Whooley-Fragen) hat bei 2× «Ja» eine Sensitivität von 96 % und eine Spezifität von 57 %. Weltweit sind ca. 5,7 % der Erwachsenen betroffen (Frauen ca. 6,9 %, Männer 4,6 %).',DE+'8–12, 20–26','psych');

add('Depression (Workshop)','A+','Welche Schritte umfasst das diagnostische Vorgehen bei Depression (in Anlehnung an die NVL Unipolare Depression 2022)?',
 ['Depressive Episode? – Schweregrad – Dauer und Verlauf – Differenzialdiagnosen – Komorbidität und Medikamente – psychosoziale Aspekte, Aktivitäten und Partizipation',
  'Schweregrad – Rentenanspruch – Persönlichkeit – Dauer – Differenzialdiagnosen – soziale Faktoren',
  'Diagnose – Arbeitsfähigkeit – Invaliditätsgrad – Verlauf – Komorbidität – Prognose der Rente',
  'Testverfahren – Fragebogenwert – Diagnose – Therapieauflage – Arbeitsfähigkeit – Rentenentscheid'],
 'Die Diagnose muss begründet werden: Gegenüberstellung mit den Kriterien der aktuellen ICD oder des DSM, dazu Differenzialdiagnosen (Qualitätsleitlinien 2016). Differenzialdiagnosen u. a. bipolare Störung, Anpassungsstörung. Komorbiditäten: Angststörungen (bis ca. 40 %), Persönlichkeitsstörung (um 50 %), Substanzgebrauchsstörung (bis 25 %), ADHS (7–16 %).',DE+'25–30','psych');

add('Depression (Workshop)','K','Verlauf und Arbeitsunfähigkeit bei Depression – bewerten Sie jede Aussage:',
 [['In der NEMESIS-Studie remittierten 50 % einer Major-Depressionsepisode innerhalb von 3 Monaten, 76 % innerhalb von 12 Monaten.',true],
  ['50 % der Betroffenen haben nur eine Episode, ca. 15 % verlaufen chronisch; nach Vollremission kommt es bei 25–40 % innerhalb von 2 Jahren zu einer erneuten Episode.',true],
  ['Depression erhöht das Risiko einer Arbeitsunfähigkeit (OR ca. 1,5), ersetzt aber die Einzelfallprüfung nicht; die meisten Personen mit Depression sind nicht arbeitsunfähig.',true],
  ['Ein erhöhtes AUF-Risiko bedeutet, dass bei Depression im Einzelfall automatisch Arbeitsunfähigkeit besteht.',false]],
 'Unbehandelte Depression: Remission 23 % nach 3 Monaten, 32 % nach 6, 53 % nach 12 Monaten. Auch bei mittleren bis schweren Depressionen sind etwa zwei Drittel arbeitsfähig. Der Schweregrad ergibt sich nicht nur aus der aktuellen Symptomzahl, sondern auch aus Verlauf, Dauer, Rezidivität, Komorbidität, Persönlichkeit, Ressourcen, Therapieansprechen und Funktionsniveau.',DE+'31–35, 40–42','psych');

add('Depression (Workshop)','K','Indikatoren, Mini-ICF-APP und Therapieauflagen – bewerten Sie jede Aussage:',
 [['Beim Komplex «Gesundheitsschädigung» sind u. a. Ausprägung der Befunde (Schweregrad, Dauer, Chronifizität, Teilremission, Rezidive, Restsymptomatik), Behandlungs- und Eingliederungserfolg sowie Komorbiditäten zu prüfen.',true],
  ['Die Nutzung des Mini-ICF-APP ist nach den SGPP-Leitlinien optional, die Berücksichtigung der zugrunde liegenden Funktionsbereiche jedoch notwendig; die Beurteilung erfolgt retrospektiv, aktuell und prospektiv.',true],
  ['Therapieauflagen im Rentenbereich führten laut BSV-Studie in der Mehrheit der Fälle zu einer deutlichen Verbesserung des Invaliditätsgrades.',false],
  ['Therapieauflagen können sinnvoll sein, wenn sie eine indizierte, zumutbare Behandlung mit klaren Veränderungszielen anstossen.',true]],
 'Auflagen im Rentenbereich wurden in ca. 2/3 der Fälle befolgt, aber nur bei ca. 15 % verbesserte sich der Invaliditätsgrad; im Eingliederungsbereich waren sie seltener befolgt, aber deutlich erfolgreicher. Auflagen müssen evidenzbasiert, begründet und auf die Arbeitsfähigkeit bezogen sein. Konsistenz: gleichmässige Einschränkung in allen Lebensbereichen und ausgewiesener Leidensdruck.',DE+'36–38, 44–49','psych');

add('Depression (Workshop)','K','BDI und Validität – bewerten Sie jede Aussage:',
 [['Selbstbeurteilungsskalen wie der BDI sind unter Instruktion «Simulation» leicht verfälschbar; sehr niedrige Werte können auf «faking good» hinweisen.',true],
  ['Der BDI ist unter speziellen Bedingungen (z. B. Strafvollzug) nicht geeignet.',true],
  ['Ein hoher BDI-Wert ist ein Datenpunkt und beweist die Diagnose einer schweren Depression.',false],
  ['Ein BDI-II-Wert ab 38 Punkten kann bei Rentenantragstellern als zusätzlicher Indikator für die Validität der Ergebnisse verwendet werden.',true]],
 'In einer Studie lag die Sensitivität für Malingering bei BDI-II ≥ 38 bei 0,90 und die Spezifität bei 0,58 – daher nur als zusätzlicher Indikator. Testverfahren können ergänzen, sind aber nicht zwingend erforderlich.',DE+'46–52','psych');

/* ---- Workshop: Chronische Kopfschmerzen in der Begutachtung (Sandor) ---- */
const KO='Workshop Sandor «Chronische Kopfschmerzen» (M4 2026), Folie ';
add('Chronische Kopfschmerzen','K','Kopfschmerz-Klassifikation und Definitionen – bewerten Sie jede Aussage:',
 [['Die ICHD-3 unterscheidet primäre und sekundäre Kopfschmerzen sowie Neuralgien; primäre Kopfschmerzen gelten als chronisch ab ≥ 15 Tagen pro Monat (über mehr als 3 Monate).',true],
  ['Chronische Migräne ohne Medikamentenübergebrauch existiert und ist im gutachterlichen Kontext relevant.',true],
  ['Medikamentenübergebrauch ist oft ein Chronifizierungsfaktor.',true],
  ['Chronische trigeminoautonome Kopfschmerzen und New Daily Persistent Headache sind gutachterlich nicht relevant.',false]],
 'Sekundäre Kopfschmerzen gelten ab > 3 Monaten als chronisch (IASP); TACs (Cluster) als chronisch bei > 1 Jahr (< 3 Monate Pause). Jedes Gutachten ist ein Einzelfall: Stimmt die Diagnose? Ist die Person austherapiert? Diagnose und Verlauf sind nach 1–2 Jahren zu überprüfen.',KO+'Key Messages, Definition chronisch','neuro');

add('Chronische Kopfschmerzen','A+','Welches Muster entspricht typischerweise einer Migräne (ICHD) im Vergleich zum Spannungstypkopfschmerz?',
 ['Pulsierend, unilateral, mittel bis stark, Zunahme bei Bewegung, Nausea und/oder Photo- und Phonophobie, Attacken von 4–72 Stunden',
  'Dumpf-drückend, bilateral, leicht bis mittel, keine Zunahme bei Bewegung, Photo- oder Phonophobie, Attacken von 30 Minuten bis 7 Tagen',
  'Unilateral orbital, stärkster Schmerz, Tränenfluss, Augenrötung, Herumtigern, Attacken von 15–180 Minuten',
  'Stechend, 1–40 Attacken pro Tag, Attackendauer unter 3 Sekunden, ausgeprägte autonome Symptome'],
 'Die übrigen Antworten beschreiben Spannungstypkopfschmerz, Clusterkopfschmerz bzw. SUNCT. Differenzialdiagnose Clusterkopfschmerz: unilateral orbital, nachts, Tränen, Augenrötung, Nasenlaufen, Herumtigern. Therapierefraktärer Clusterkopfschmerz nach DMKG: erfolglose Gabe u. a. von Verapamil, Lithium, Topiramat, Indomethacin über je mindestens 1 Monat.',KO+'Anamnese, Migräne/Spannungstyp, DD','neuro');

add('Chronische Kopfschmerzen','K','Posttraumatischer Kopfschmerz und Konsistenz – bewerten Sie jede Aussage:',
 [['Das «typische Beschwerdebild» nach BGE 117 V 359 (Salanitri) umfasst eine Häufung von Beschwerden wie diffuse Kopfschmerzen, Schwindel, Konzentrations- und Gedächtnisstörungen, Übelkeit, rasche Ermüdbarkeit, Reizbarkeit, Affektlabilität, Depression u. a.',true],
  ['Der akute posttraumatische Kopfschmerz nach mittelschwerem/schwerem Schädel-Hirn-Trauma beginnt innerhalb von 7 Tagen nach dem Trauma; er klingt innerhalb von 3 Monaten ab oder besteht, ohne dass 3 Monate vergangen sind.',true],
  ['Ein Schmerzmittelübergebrauch-Kopfschmerz (MOH) ist bei täglichen diffusen Kopfschmerzen unter täglicher Analgetikaeinnahme auszuschliessen bzw. zu prüfen.',true],
  ['Posttraumatische Kopfschmerzen persistieren nach HWS-Distorsion bei der Mehrheit der Betroffenen über Jahre.',false]],
 'Verlaufsdaten: nach HWS-Distorsion persistieren Beschwerden nur bei einer Minderheit (z. B. ca. 20 % bzw. 5 %). Konsistenzparameter (Widder/Oliveri): u. a. Diskrepanz zwischen Beschwerdeschilderung und Untersuchungssituation, wechselhafte/ausweichende Schilderung, Diskrepanz zu Fremdanamnese/Aktenlage, fehlende Modulierbarkeit, fehlende angemessene Therapie/Eigenaktivität, Diskrepanz zwischen Medikamentenanamnese und Spiegeln.',KO+'Posttraumatische Kopfschmerzen, Konsistenz, MOH','neuro');

/* ---- Workshop: Kognition und Epilepsie (Jokeit) ---- */
const JO='Workshop Jokeit «Kognition und Epilepsie» (M4 2026), Folie ';
add('Kognition und Epilepsie','K','Klassifikation der Epilepsien (ILAE) – bewerten Sie jede Aussage:',
 [['Die ILAE-Klassifikation gliedert die Diagnose in drei Ebenen: Anfallstyp, Epilepsietyp, Epilepsiesyndrom; Ätiologie und Komorbiditäten werden auf jeder Ebene parallel betrachtet.',true],
  ['Anfälle werden nach ihrem Beginn in fokal, generalisiert oder unbekannt eingeteilt; bei fokalen Anfällen ist der Bewusstseinsgrad entscheidend.',true],
  ['Der Begriff «partiell» ist weiterhin üblich, «sekundär generalisiert» heisst nun «fokal zu bilateral tonisch-klonisch».',false],
  ['Die Ätiologie kann strukturell, genetisch, infektiös, metabolisch, immunologisch oder unbekannt sein.',true]],
 '«Partiell» wurde durch «fokal» ersetzt, «benigne» durch «self-limiting» bzw. pharmakoresponsiv. Die vier Epilepsietypen: fokal, generalisiert, kombiniert, unbekannt. Epilepsie ist mehr als nur Anfälle – Komorbiditäten müssen aktiv gesucht werden.',JO+'Klassifikation','neuro');

add('Kognition und Epilepsie','K','Kognitive Beeinträchtigung bei Epilepsie – bewerten Sie jede Aussage:',
 [['Einflussfaktoren auf die Kognition sind u. a. Epilepsietyp und Ätiologie, Alter bei Beginn, aktuelle Anfallsfrequenz/letzter Anfall (Fremdanamnese), anfallssuppressive Medikation, Komorbiditäten und Reservekapazität (Bildung, Intelligenz, exekutive Funktionen).',true],
  ['Beeinträchtigungen können chronisch (nicht reversibel) oder transient (z. B. interiktale epileptische Aktivität, Antiepileptika-Nebenwirkungen, postiktal) sein.',true],
  ['Häufig beeinträchtigt sind Geschwindigkeit, Aufmerksamkeit, exekutive Funktionen, Gedächtnis, soziale Kognition und Affekt.',true],
  ['Anfallssuppressive Medikamente beeinflussen die Kognition nie; Polymedikation ist diesbezüglich ohne Bedeutung.',false]],
 'Psychiatrische Komorbiditäten sind bei Epilepsie häufiger (Depression 11–60 %, Angststörungen 19–45 %, Psychosen 2–8 %, ADHS 25–30 %). Schwellenmodell/Reservekapazität: Personen mit höherer Reservekapazität überschreiten die Schwelle zur diagnostizierbaren kognitiven Störung später. Je nach Antiepileptikum gibt es Risikoklassen für Gedächtnisbeeinträchtigung.',JO+'Kognition, Checklist','neuro');

/* ---- Workshop: Neuropsychologische Begutachtung (Oertli/Kägi) ---- */
const NP='Workshop Oertli/Kägi «Neuropsychologische Begutachtung» (M4 2026), Folie ';
add('Neuropsychologische Begutachtung','K','Kernaussagen zur neuropsychologischen Begutachtung – bewerten Sie jede Aussage:',
 [['Kognitive Funktionsstörungen bedeuten nicht per se eine Hirnschädigung; Ursachen können u. a. Schmerzen, Medikamente, psychische Erkrankungen, Müdigkeit oder mangelnde Anstrengungsbereitschaft sein.',true],
  ['Der Schweregrad der kognitiven Einschränkung korreliert automatisch mit dem Schweregrad der Hirnverletzung.',false],
  ['Das Ausmass der kognitiven Funktionsstörung korreliert nicht per se mit der Höhe der Arbeitsunfähigkeit.',true],
  ['Ein unauffälliges kognitives Leistungsprofil bedeutet nicht per se volle Arbeitsfähigkeit.',true]],
 'Fallbeispiele: 3 Patienten mit unterschiedlicher Ätiologie – leichte bis mittelschwere kognitive Störungen nach Contusio capitis (MRI/CT o. B.) mit Kopfschmerzen und reaktiver Depression; unauffälliges Profil trotz schwerem SHT mit shearing injuries; domänenübergreifende Störung bei Paraplegie ohne Hirnverletzung (Schmerzen, Medikation, Depression). Keine Aussagen zur Ätiologie allein aufgrund psychometrischer Befunde.',NP+'Kernaussagen 1–6','neuropsy');

add('Neuropsychologische Begutachtung','A+','Wie ist mit nicht authentischen kognitiven Befunden gutachterlich umzugehen?',
 ['Sie dürfen nicht interpretiert werden: keine Stellungnahme zu Arbeitsfähigkeit, Therapieoptionen und möglichen Unfallfolgen',
  'Sie werden als Beweis einer Simulation gewertet und führen zu voller Arbeitsfähigkeit',
  'Sie werden auf die Arbeitsfähigkeit hochgerechnet und mit einem Abschlag versehen',
  'Sie werden durch die Werte der Vorgutachten ersetzt, ohne diese weiter zu hinterfragen'],
 'Nicht authentische kognitive Befunde: Befunde/Werte, die mit der zugrunde liegenden neurologischen Erkrankung/Verletzung nach aktuellem Wissenstand nicht nachvollziehbar sind und auf verminderter Anstrengungsbereitschaft oder Symptomverdeutlichung beruhen. Beispiel: leichtes SHT mit schwerem amnestischem Syndrom; im Fall M.H. Mischbild zwischen bewusstseinsnaher Aggravation und bewusstseinsferner Verdeutlichungstendenz.',NP+'Kernaussage 8','neuropsy');

add('Neuropsychologische Begutachtung','K','Neuropsychologie und Arbeitsfähigkeit – bewerten Sie jede Aussage:',
 [['Eine neuropsychologische Untersuchung von 1½ Stunden kann die zeitliche und qualitative Belastbarkeit am Arbeitsplatz nicht 1:1 abbilden; je nach Sachlage sind berufliche Abklärungen oder Beobachtungen am Arbeitsplatz nötig.',true],
  ['Dasselbe kognitive Störungsbild kann sich je nach Kontext (z. B. routinegeprägte Tätigkeit vs. Ausbildung mit ständig neuer Information) unterschiedlich stark auswirken.',true],
  ['Bei atypischen Genesungsverläufen sind sekundäre Einflussfaktoren (z. B. Alkohol, Medikation, reaktive Depression, Überforderung, familiärer Kontext) besonders sorgfältig zu eruieren.',true],
  ['Vorbefunde sind möglichst sekundär zu übernehmen; die Beschaffung der Originalakten ist nicht nötig.',false]],
 'Vorbefunde sollen kritisch gewürdigt und die Originalakten beschafft werden; bei Diskrepanzen zwischen aktuellen und früheren Befunden müssen die Differenzen in der Beurteilung diskutiert werden. Beispiel MS: aus einer 1½-stündigen Untersuchung abgeleitete 70 % AF liessen sich im Beruf nicht erreichen; die beruflichen Abklärungen ergaben nur 40 %. Zu berücksichtigen sind auch Sozialverhalten, Verhaltens- und Emotionsregulation, Stresstoleranz und zeitliche mentale Belastbarkeit.',NP+'Kernaussagen 4–10','neuropsy');

/* ---- Workshop: Kognition bei Depression und Fatigue (Rechsteiner) ---- */
const RE='Workshop Rechsteiner «Kognition bei Depression und Fatigue» (M4 2026), Folie ';
add('Kognition bei Depression und Fatigue','K','Kognition bei Depression – bewerten Sie jede Aussage:',
 [['Kognitive Residualsymptome persistieren auch bei klinischer Remission; fehlende depressive Symptomatik zum Untersuchungszeitpunkt schliesst eine kognitive Beeinträchtigung nicht aus.',true],
  ['Verarbeitungsgeschwindigkeit und Exekutivfunktionen persistieren nach Meta-Analysen am häufigsten auch nach symptomatischer Remission.',true],
  ['Nach ICD-11 ergibt sich der Schweregrad aus einer festen Mindestzahl von Symptomen.',false],
  ['Nach ICD-11 ist der Schweregrad eine klinische Einschätzung (Belastung, Funktion, Anzahl/Schwere der Symptome); funktionelle Einschränkungen in mehreren Lebensbereichen gewinnen an Gewicht.',true]],
 'Zahlen: ca. 90 % berichten kognitive Einbussen während der Episode, 66 % nach 3 Jahren weiterhin beeinträchtigt, 44 % trotz Remission persistierende Störungen. Abgrenzung zur Alzheimer-Demenz: Depression hat meist zeitlich eingrenzbaren Beginn, subjektive Klagen im Vordergrund, hohe Tagesvariabilität (morgens schlechter), Besserung unter Therapie; Demenz schleichender Beginn, Verleugnung der Defizite, globale Einbussen.',RE+'Teil 1','psych');

add('Kognition bei Depression und Fatigue','K','Symptomvalidierung und Rechtsprechung 2025/26 – bewerten Sie jede Aussage:',
 [['Nicht valide Testergebnisse erlauben keine Aussage über Kognition, Ressourcen oder Arbeitsfähigkeit (BGer 8C_181/2025).',true],
  ['Neuropsychologische Defizite allein genügen nicht; massgebend ist die Gesamtbeurteilung, und Alltagsaktivitäten (z. B. Tanzen, Reisen) sind ein valides Gegengewicht zu den geklagten Einschränkungen.',true],
  ['Neuropsychologische Verschlechterungen setzen einen neuen strukturellen MRI-Befund voraus (BGer 8C_143/2024).',false],
  ['Fatigue, verminderte Belastbarkeit und Stressintoleranz nach SHT sind ernsthaft zu prüfen und nicht vorschnell als psychosozial zu erklären.',true]],
 'Neuropsychologie hat hohen Beweiswert, Kausalität erfordert aber eine interdisziplinäre Gesamtbeurteilung (Neuropsychologie, Neurologie, Psychiatrie). Minimum: 2 PVTs plus testimmanente Indikatoren, Ergebnis explizit dokumentiert. Symptomvalidierung: Performance Validity Tests (PVT) und embedded effort indicators.',RE+'Teil 2, Urteile','neuropsy');

add('Kognition bei Depression und Fatigue','K','ME/CFS, Long Covid und Fatigue – bewerten Sie jede Aussage:',
 [['Leitsymptom von ME/CFS ist die Post-Exertional Malaise (PEM); Aktivierung verschlechtert die Beschwerden, während bei Depression Aktivierung möglich ist.',true],
  ['Die kognitive Verschlechterung nach Belastung tritt bei PEM oft erst 12–48 Stunden später auf; eine einmalige Testung kann die Alltagsfunktion unterschätzen, Tageszeit und Voraktivität sind zu dokumentieren.',true],
  ['Selbstbeurteilungsfragebögen (z. B. FSMC) allein genügen nicht zum Beleg der Fatigue-Schwere; klinische Plausibilität und neuropsychologische Befunde sind massgebend.',true],
  ['Ein «guter Tag» in der Testung ist repräsentativ für die Alltagsleistung bei Fatigue-Erkrankungen.',false]],
 'BSV-Studie Long Covid (2025): ca. 2900 IV-Anmeldungen bis Ende 2023, 85 % mit Fatigue/Belastungsintoleranz, 60 % mit neurokognitiven Störungen, 9 von 10 bei Anmeldung zu 100 % arbeitsunfähig. D-A-CH Konsensus 2024: CCC als Diagnosestandard, PEM als Leitsymptom, Pacing als Therapieprinzip. ICD-10 G93.3; ICD-11 8E49. Schwere Fatigue muss sich nicht in schweren Testdefiziten zeigen.',RE+'Teil 3','neuro');

add('Kognition bei Depression und Fatigue','K','Zeitpunkt, Kausalität und Schweregrad – bewerten Sie jede Aussage:',
 [['Gerichte beurteilen den Gesundheitszustand zum Verfügungsdatum; kognitive Störungen nach Covid-Infektionen, die erst nach der Verfügung auftraten, gehören in ein neues Verfahren (BGer 8C_170/2025).',true],
  ['Der Wegfall der Kausalität bei Post-Covid muss überwiegend wahrscheinlich und wissenschaftlich fundiert begründet werden; eine pauschale Verneinung genügt nicht (BGer 8C_52/2025).',true],
  ['Der Schweregrad einer neuropsychologischen Störung wird nach Frei et al. 2016 über Standardabweichungen definiert (leicht –1 bis –2 SD, mittel –2 bis –3 SD, schwer > –3 SD) und domänenspezifisch beurteilt.',true],
  ['Psychopathologie und Symptomvalidierung dürfen erst nach der Schweregradbeurteilung geprüft werden.',false]],
 'Psychopathologie und Symptomvalidierung sind zwingende Voraussetzung vor der Schweregradbeurteilung. Zu dokumentieren sind zudem die Tagesformvariabilität (v. a. bei Fatigue), Beginn und zeitliche Zuordnung der Einschränkungen und die effektiven Anforderungen des Arbeitsplatzes.',RE+'Teil 4, Schweregrad','neuropsy');

/* ---- Workshop: Persönlichkeitsstörungen (Frei) ---- */
const FR='Workshop Frei «Persönlichkeitsstörungen» (M4 2026), Folie ';
add('Persönlichkeitsstörungen','K','Diagnose der Persönlichkeitsstörung – bewerten Sie jede Aussage:',
 [['Nach ICD-10 ist das abnorme Verhaltensmuster andauernd, tiefgreifend, in vielen persönlichen und sozialen Situationen grob unpassend und nicht auf Episoden psychischer Krankheiten begrenzt.',true],
  ['Die Auffälligkeit beginnt immer in Kindheit oder Jugend und manifestiert sich dauerhaft im Erwachsenenalter; die Störung führt häufig zu Einschränkungen der beruflichen und sozialen Leistungsfähigkeit.',true],
  ['Kein testpsychologisches Verfahren kann die sorgfältige Anamnese, ergänzt durch Fremdanamnese, ersetzen.',true],
  ['Die ICD-11 kennt weiterhin ausschliesslich kategoriale Persönlichkeitsstörungen ohne Schweregrade.',false]],
 'Die ICD-11 berücksichtigt die dimensionale Betrachtung stärker: Schweregrade leicht, moderat, schwerwiegend sowie fünf Ausprägungen (negativ-affektiv, dissozial, impulsgestört, zwanghaft, distanziert); «Spätbeginner» bei deutlicher Manifestation erst jenseits des 25. Lebensjahres. ICD-10-Cluster: A (paranoid, schizoid), B (emotional instabil, histrionisch, dissozial, narzisstisch), C (ängstlich-vermeidend, abhängig, anankastisch). Instrumente (IPDE, SKID-5-PD) haben zweifelhafte Reliabilität.',FR+'Klassifikation, Diagnostik','psych');

add('Persönlichkeitsstörungen','K','Persönlichkeitsstörungen in der Versicherungsmedizin – bewerten Sie jede Aussage:',
 [['Häufige Komorbiditäten sind z. B. Abhängigkeitssyndrome, affektive Störungen, somatoforme Schmerzstörung und ADHS; differenzialdiagnostisch sind etwa Residualsymptomatik einer Schizophrenie oder Asperger-Syndrom zu bedenken.',true],
  ['Die Kriterien nach Sass (1987) dienen als «Eselsbrücke» für die Auswirkungen einer Persönlichkeitsstörung auf die Arbeitsfähigkeit (u. a. Einengung der Lebensführung, stereotypisierendes Verhalten, soziale Konflikte, Schwäche der Abwehr).',true],
  ['Das Mini-ICF-APP erfasst die Fähigkeitsbeeinträchtigungen auf einer Skala von 0 (keine) bis 4 (vollständig).',true],
  ['Die Psychopathy Checklist (PCL-R) ist ein zwingendes Instrument jeder versicherungspsychiatrischen Begutachtung.',false]],
 'Die PCL-R (Hare) ist ein forensisches Instrument mit 20 Merkmalen (Faktor 1: Beziehungsprofil/Affektivität; Faktor 2: Lebensstil/Kriminalität). Historische Konzepte (Pinel «manie sans délire», Prichard «moral insanity», Morel Degeneration, Lombroso, K. Schneider, Cleckley) sind Hintergrund, nicht Bewertungsmassstab.',FR+'Diagnostik in der Versicherungsmedizin, Mini-ICF','psych');

/* ---- Workshop Abhängigkeit: Substanzen, Komorbidität (Aeschbach, Fortsetzung) ---- */
add('Abhängigkeitserkrankungen','K','Substanzen, Kontext und Komorbidität – bewerten Sie jede Aussage:',
 [['Der Kontext des Konsums (Alter bei Erstkonsum, Dauer, Verlauf, Ressourcen, Defizite, Persönlichkeit) ist für die Begutachtung deutlich wichtiger als die Substanz; aus Art und Menge der Substanz lässt sich kein sicherer Rückschluss auf die psychische Funktionsfähigkeit ziehen.',true],
  ['Es gibt Gruppen von Konsumierenden, die mit Hilfe von, trotz und wegen Suchtmitteln arbeitsfähig bzw. nicht arbeitsfähig sind – der Zusammenhang ist individuell zu klären.',true],
  ['Die Auflage zur Abstinenz genügt allein; eine begleitende Behandlung ist nicht nötig.',false],
  ['Sucht geht häufig mit anderen psychischen Störungen einher; Komorbidität bedeutet das gleichzeitige Vorliegen einer substanzbedingten Störung (F1x) und einer anderen psychischen Störung (F0, F2–F6).',true]],
 'Es braucht eine gute Begleitung; eine geschützte Arbeitsstelle oder befristete Berentung mit Wiedereingliederungsplan kann ein guter Weg sein. Komorbide Personen haben ein deutlich schlechteres Therapie-Outcome; rund 50 % der Personen mit Persönlichkeitsstörung entwickeln im Leben eine Substanzabhängigkeit. Alkohol: Präsentismus 2,6–8,6× häufiger, 15–25 % der Arbeitsunfälle alkoholbedingt (WHO 2012).',AE+'Gutachten, Substanzen, Komorbidität','psych');

/*END*/
})();
