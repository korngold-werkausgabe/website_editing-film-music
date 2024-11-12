export default defineI18nConfig(() => ({
  legacy: false,
  autoImportTranslationFunctions: true,
  datetimeFormats: {
    en: {
      short: {
        hour: 'numeric', minute: 'numeric'
      }
    },
    de: {
      short: {
        hour: 'numeric', minute: 'numeric', hour12: false
      }
    }
  },
  messages: {
    de: {
      nav: {
        home: "Home",
        cfp: "Call for Papers",
        program: "Programm",
        plan: "Lageplan",
        contact: "Kontakt"
      },
      headlineMain: "Edition von Filmmusik",
      headlineSub: "Herausforderungen der Multimedialität",
      msg1: "Die Edition der Filmmusik von Erich Wolfgang Korngold bildet einen zentralen Bestandteil der dem Komponisten gewidmeten Werkausgabe ({website}). Verbunden damit sind Herausforderungen der Multimedialität, die den Anlass für eine interdisziplinäre Erkundung des Themenkomplexes bieten.",
      msg2: "Film ist ein multimediales Phänomen. Schon der Soundtrack umfasst neben der Musik weitere auditive Elemente, darunter den gesprochenen Dialog. Auf der visuellen Ebene kommen Bild, Bewegung, Interaktion und andere performative Parameter hinzu. Für Forscher:innen aus verschiedenen Disziplinen ergeben sich daraus in editorischer Hinsicht ganz neue Möglichkeiten. Neben den üblichen Aufgaben der Edition müssen Fragen der multimedialen Wechselwirkung/Synchronisation sowie der Rekonstruktion historischer Entstehungszusammenhänge berücksichtigt werden, was umgekehrt bedeutet, für die Darstellung das Potential digitaler oder hybrider Präsentationsformate auszuloten.",
      msg3: "Ziel der Tagung ist es, den aktuellen Stand der Forschung zur multimedialen Edition von Filmmusik zu diskutieren, weiterführende Impulse zu geben und innovative Modelle zu entwickeln. Dabei soll auch die Frage erörtert werden, wie sich multimediale Werke und multimediale Editionen wechselseitig beeinflussen.",
      headlineCfp: "Call for Papers",
      cfpInfo: {
        place: {
          title: "Veranstaltungsort",
          value: "Goethe-Universität Frankfurt am Main"
        },
        date: {
          title: "Datum",
          value: "22.–23. November 2024"
        },
        deadline: {
          title: "Beiträge bis",
          value: "19. August 2024"
        }
      },
      msgCfp1: "Film ist ein multimediales Phänomen. Schon der Soundtrack umfasst neben der Musik weitere auditive Elemente, darunter den gesprochenen Dialog. Auf der visuellen Ebene kommen Bild, Bewegung, Interaktion und andere performative Parameter hinzu. Für Forscher:innen aus verschiedenen Disziplinen ergeben sich daraus in editorischer Hinsicht ganz neue Möglichkeiten. Neben den üblichen Aufgaben der Edition müssen Fragen der multimedialen Wechselwirkung/Synchronisation sowie der Rekonstruktion historischer Entstehungszusammenhänge berücksichtigt werden, was umgekehrt bedeutet, für die Darstellung das Potential digitaler oder hybrider Präsentationsformate auszuloten. \n Ziel der Tagung ist es, den aktuellen Stand der Forschung zur multimedialen Edition von Filmmusik zu diskutieren, weiterführende Impulse zu geben und innovative Modelle zu entwickeln. Dabei soll auch die Frage erörtert werden, wie sich multimediale Werke und multimediale Editionen wechselseitig beeinflussen. \n Neben {vortrag}, zu historischen, theoretischen und methodischen Aspekten soll ein interaktiver Workshop praktische Fragen der digitalen Edition und Präsentation von Filmmusik behandeln. Hier sind neben {types} willkommen.",
      topicsCfp: {
        preline: "Mögliche Themen sind u.a.:",
        topics: [
          "Editorische Herausforderungen bei der multimedialen Edition von Filmmusik",
          "Filmmusik-Edition als Teil (historisch-kritischer) Werk- und Gesamtausgaben",
          "Digitale Werkzeuge und Methoden für die Edition von Filmmusik (z.B. Synchronisation von Musik, Bild und Text/Dialog; Rekonstruktion historischer Entstehungszusammenhänge)",
          "Multimediale Präsentation und Vermittlung edierter Filmmusik (z.B. Klanginstallationen, interaktive Performances)",
          "Interdisziplinäre Perspektiven aus Theater-, Film- und Medienwissenschaften",
          "Hybride und digitale Editionen als Formen von Multimedialität",
        ]
      },
      msgCfp2: "Wir laden Wissenschaftler:innen aus den Bereichen {disciplines} ein, Beitragsvorschläge einzureichen. Neben Einzelvorträgen sind auch Vorschläge für Sektionen, Panels oder interaktive Workshops willkommen. \n Bitte senden Sie Ihr {expose}  (max. 300 Wörter) bis zum {date} an: {mail} \n Die Tagungssprachen sind Deutsch und Englisch. Eine Publikation der Tagungsbeiträge ist geplant. Für weitere Informationen wenden Sie sich bitte an: {mail}.",
      headlinePrgrm: "Programm",
      prgrm: {
        keynote: "Keynote",
        day1: "Freitag, 22. November 2024",
        day2: "Samstag, 23. November 2024",
        room1: "NG 731",
        room2: "IG 311",
        pause1: "Kaffeepause",
        pause2: "Mittagspause",
        roundtable: "Roundtable",
      },
      abstracts: {
        headlineAbstracts: "Abstracts",
        abstracts: [
          { speaker: "Oliver Huck", title: "Eine Phänomenologie der „Stummfilm-Partitur“. Prolegomena zur Edition von Filmmusik", text: ["Vor jedweder editorischen Entscheidung steht ein Verständnis des Gegenstandes. Notentexte von Filmmusik haben im Tonfilm und im sogenannten Stummfilm insofern eine grundsätzlich unterschiedliche Funktion als sie in ersterer analog etwa zu Drehbüchern Hilfsmittel im Produktionsprozess sind, dessen akustischer Teil mit der Tonspur seinen definitiven Abschluss findet, in letzterer hingegen das Aufführungsmaterial darstellen, das in jeder Filmvorführung als akustisches Komplement zum Film neu zu realisieren ist.", "Frühe „Partituren“ von Filmmusik wurden, sofern es sich nicht ohnehin ausschließlich um Musik für Klavier handelte, überwiegend nicht als Partituren, sondern in Stimmen publiziert. Dennoch etablierte sich ab 1915 in den USA die Bezeichnung von Musik zu einzelnen Filmen als „score“, ein Begriff der zunächst einerseits unabhängig davon, ob es sich um komponierte oder kompilierte Musik handelt, eine Abgrenzung gegenüber nicht als eingerichtetem Notentext verbreiteten Musikzusammenstellungen („cue sheets“) und andererseits eine präzise Synchronisation mit dem Film im Gegensatz zu einer bloßen Folge von Musikstücken („musical settings“) bezeichnet.", "Die wenigen (aber mit allein ca. 150 Drucken bis 1918 gar nicht so wenigen) erhaltenen frühen „Partituren“ mögen als Einzelfälle erscheinen, tatsächlich sind sie jedoch vor dem Hintergrund einer erheblich größeren Zahl von verlorenen Partituren zu sehen und erlauben damit Rückschlüsse auf die Phänomenologie von „Stummfilm-Partituren“ und die Aufführungspraxis von Filmmusik. Sie knüpfen in Bezug auf die Indikation der Koordination von Handlung und Musik teilweise an Praktiken von Bühnenmusik unterschiedlicher Gattungen an.", "Der Beitrag versteht sich als Prolegomena zur Edition von Filmmusik, indem Beschaffenheit und Status von „Partituren“ von Filmmusik diskutiert und Fragen der Synchronisation von Musik und Film unter dem Aspekt der Projektionsgeschwindigkeiten der Filme sowie des editorischen Umgang mit verlorenen Filmen erörtert werden."], download: "link-pdf" },
          { speaker: "Fabian Müller", title: "Komponieren und Inkorporieren. Herausforderungen der Edition von Musik und Film am Beispiel von Joseph Carl Breil ", text: ["1939 erschien der für fünf Oscars nominierte Film ‘The Private Lives of Elizabeth and Essex’ mit Musik von Erich Wolfgang Korngold. Dieser verwendete formal geschlossene Stücke und eingegliedertes, fragmentarisches Material (Robbert van der Lek unterscheidet zwischen „arrangements“ und „incorporating existing material“) später wieder, so das diegetische Duett im Film als „O Mistress Mine“ in ‘Narrenlieder op. 29’ und Themen aus der Filmmusik in der ‘Symphonie in Fis’ op. 40. Diese Praxis lässt sich bereits an der Musik zu Stummfilmen von Joseph Carl Breil skizzieren, der etwa für ‘The Birth of a Nation (1915) nicht nur präexistente Musik verwendete, sondern auch auf seine eigene Musik zu ‘Queen Elizabeth (1912) zurückgriff. Diesem Film liegt das gleiche Sujet zugrunde wie ‘The Private Lives of Elizabeth and Essex’. Breil verwendete dasselbe Material später auch in seiner Musik für ‘Intolerance’ (1916), nahm es in die Musikkompilation zur Stummfilmbegleitung ‘Motion Picture Plays’ (1917) auf und verarbeitete es auch in seiner Oper ‘The Legend’ (1919). Dieser Aspekt ist bisher weder in Gillian B. Andersons Rekonstruktionsversuchen der Premierenfassung des Films ‘Intolerance’ noch in Martin Miller Marks Analyse von ‘The Birth of a Nation’ untersucht worden.", "Der Vortrag vertritt die These, dass die Wiederverwendung von Stücken oder Themen in der Musik zu Stummfilmen in der kritischen Filmmusikedition sowohl philologisch als auch semantisch zu reflektieren ist. Die intermediale Wiederverwendung bietet aufgrund der Anpassungen des musikalischen Materials editorische Herausforderungen. Die kontextualisierende Relation dieser unterschiedlichen Fassungen der Stücke und Themen zielt einerseits auf die Unterscheidung des jeweiligen Handlungskontextes ab, da dieser den Themen oder Stücken eine neue, von der ursprünglichen losgelöste semantische Bedeutung gibt. Andererseits können Rückschlüsse auf die Instrumentation gezogen werden, die für eine Rekonstruktion der Orchestration dort von Bedeutung sind, wo einzelne Filmmusiken nur für Klavier überliefert sind."], download: "link-pdf" },
        ]
      },
      headlinePlan: "Lageplan",
      headlineContact: "Kontakt",
      msgContact: "Bei Fragen und für weitere Informationen wenden Sie sich gerne an {mail}."
    },
    en: {
      nav: {
        home: "Home",
        cfp: "Call for Papers",
        program: "Programme",
        plan: "Site plan",
        contact: "Contact"
      },
      headlineMain: "Editing Film Music",
      headlineSub: "Challenges of Multimedia",
      msg1: "The edition of Erich Wolfgang Korngold’s film music is a central part of the Werkausgabe dedicated to the composer ({website}). The undertaking presents unique challenges in multimediality, inviting an interdisciplinary exploration of this complex subject.",
      msg2: "Film is a multimedia phenomenon. A soundtrack alone comprises music along with other auditory elements such as spoken dialogue. On the visual level, it encompasses images, movement, interaction, and other performative parameters. These aspects open up new editorial possibilities for researchers in various disciplines. In addition to traditional editing work, considerations of multimedia interaction/synchronisation and the reconstruction of historical production practices must be addressed, which in turn means exploring the potential of digital or hybrid presentation formats for effective representation.",
      msg3: "The conference aims to discuss the current state of research on the multimedia edition of film music, provide new impulses, and develop innovative models. One key question to be addressed is how multimedia works and multimedia editions influence each other.",
      headlineCfp: "Call for Papers",
      cfpInfo: {
        place: {
          title: "Venue",
          value: "Goethe University Frankfurt/M."
        },
        date: {
          title: "Date",
          value: "22–23 November 2024"
        },
        deadline: {
          title: "Deadline",
          value: "19 August 2024"
        }
      },
      msgCfp1: "Film is a multimedia phenomenon. A soundtrack alone comprises music along with other auditory elements such as spoken dialogue. On the visual level, it encompasses images, movement, interaction, and other performative parameters. These aspects open up new editorial possibilities for researchers in various disciplines. In addition to traditional editing work, considerations of multimedia interaction/synchronisation and the reconstruction of historical production practices must be addressed, which in turn means exploring the potential of digital or hybrid presentation formats for effective representation. \n The conference aims to discuss the current state of research on the multimedia edition of film music, provide new impulses, and develop innovative models. One key question to be addressed is how multimedia works and multimedia editions influence each other. \n In addition to {vortrag-en} on historical, theoretical, and methodological aspects, an interactive workshop will address practical issues related to the digital edition and presentation of film music. Contributions may include {types-en}.",
      topicsCfp: {
        preline: "Potential topics include, but are not limited to:",
        topics: [
          "Editorial challenges in multimedia editions of film music",
          "Film music editions as part of (historico-critical) complete and collected editions",
          "Digital tools and methods for editing film music (e.g. synchronisation of music, image, and text/dialogue; reconstruction of historical contexts)",
          "Multimedia presentation and dissemination of edited film music (e.g. sound installations, interactive performances)",
          "Interdisciplinary perspectives from theatre, film, and media studies",
          "Hybrid and digital editions as forms of multimediality",
        ]
      },
      msgCfp2: "We invite scholars from the fields of {disciplines-en} to submit proposals. Submissions for individual papers, sections, panels, or interactive workshops are welcome. \n Please send your abstract (maximum 300 words) by {date-en} to {mail}. \n The conference languages are German and English. Publication of the conference proceedings is planned. \n For further information, please contact {mail}.",
      headlinePrgrm: "Program",
      prgrm: {
        keynote: "Keynote",
        day1: "Friday, 22 November 2024",
        day2: "Saturday, 23 November 2024",
        room1: "NG 731",
        room2: "IG 311",
        pause1: "Coffee break",
        pause2: "Lunch break",
        roundtable: "Roundtable",
      },
      abstracts: {
        headlineAbstracts: "Abstracts",
        abstracts: [
          { speaker: "Dennis Friedl", title: "Multimedia in the Scholarly Editing Software Edirom-Online. Current and Future Possibilities", text: ['The software Edirom Online (including predecessors since 2006), designed for the presentation of historical-critical  music editions, enables users to easily access digital facsimiles and, thanks to its dedicated functionalities, to engage with them academically. Facsimiles can be placed side by side, concordant measures can be compared, and textual critical annotations highlight differences. Due to its open-source nature, Edirom has undergone continuous development since its inception. However, despite existing approaches to extend Edirom’s multimedia functionalities—such as those experimented with in the Freischütz Digital project (2012–2015)—its primary focus has clearly remained on musical image data.', ' Recent developments, in particular initiated by the launch of Edirom Online Reloaded (2024–2027) and the increased multimedia requirements of digital edition projects such as the Korngold-Werkausgabe (2021–2045), are leading to a sustainable multimedia expansion of Edirom. I argue that this evolution is increasingly making it a suitable platform for the presentation of multimedia edition data as well. At the conference, I will introduce the new and upcoming capabilities of the Edirom software, which (will) allow multimedia data to be presented not only side by side but also in a historical-critical relationship to one another. I will also address the current challenges associated with implementing these new features and explore potential solutions. Thanks to integrated video and audio players, AV data can be embedded and synchronised with other media and sources — such as facsimiles of handwritten scores—in a parallel view. Such an approach enables a dynamic comparison between static and time-based data within a multimedia edition. Achieving this cohesive multimedia experience requires machine-readable encoding of data in MEI, as well as the synchronisation of audio tracks and musical notation. These new and forthcoming functionalities of Edirom are particularly reusable by other edition projects, as they are designed as encapsulated technical components that function independently of Edirom. This flexibility allows them to be integrated into other projects and to be used within their own editorial environments and websites, even if these are not based on Edirom Online. In this way, we hope to facilitate a more accessible reuse of existing technologies for multimedia edition projects, which often rely on a multitude of different software solutions'], download: 'link-pdf' },
          { speaker: "Oliver Huck", title: "Eine Phänomenologie der „Stummfilm-Partitur“. Prolegomena zur Edition von Filmmusik", text: ["Before any editorial decision can be made, an understanding of the artefact is necessary. Musical scores of film music have a fundamentally different function in the sound film and in the so-called silent film, in that in the former they are auxiliary material in the production process, analogous to scripts, the acoustic part of which finds its definitive result in the soundtrack, whereas in the latter they represent the performance material that has to be realised anew in each film screening as an acoustic complement to the film.", "Early ‘scores’ of film music (if they were not piano music anyway) were usually published not as scores but as parts. From 1915 onwards, however, the term ‘score’ became established in the USA to designate the music for individual films, regardless of whether the music was composed or compiled both to distinguish it from compilations of music that were not distributed as musical texts (‘cue sheets’) and to describe a precise synchronisation with the film, as opposed to a mere sequence of pieces (‘musical setting’).", "The few (but with some 150 prints up to 1918 alone, not so few) early ‘scores’ which are extant may be regarded as isolated cases, but in fact they must be seen in the context of a much larger number of lost scores and thus allow conclusions to be drawn about the phenomenology of ‘silent film scores’ and the performance practice of film music. In terms of indicating the coordination of action and music, they are partly linked to practices of stage music of different genres.", "The paper is intended as prolegomena to the edition of film music by discussing the texture and the status of film music ‘scores’ and issues of the synchronisation of music and film focusing on the projection speeds of the films and including the editorial challenges of lost films."], download: "link-pdf" },
          { speaker: "Fabian Müller", title: "Composing and incorporating.oseph Carl Breil and the challenges of editing music and film", text: ["In 1939, the film ‘The Private Lives of Elizabeth and Essex’, which was nominated for five Oscars, was released with music by Erich Wolfgang Korngold. He later reused closed pieces and incorporated fragmentary material (Robbert van der Lek distinguishes between “arrangements” and “incorporating existing material”), such as the diegetic duet in the film as “O Mistress Mine” in ‘Narrenlieder op. 29’ and themes from the film music in the ‘Symphony in F-sharp op. 40’. This approach can already be seen in the music for silent films by Joseph Carl Breil, who not only used pre-existing music for ‘The Birth of a Nation’ (1915), but also used his own music for ‘Queen Elizabeth’ (1912). This film is based on the same sujet as ‘The Private Lives of Elizabeth and Essex’. Breil later used the same material in his music for ‘Intolerance’ (1916), included it in the compilation of music to accompany the silent film ‘Motion Picture Plays’ (1917) and used it in his opera The Legend (1919). This aspect has not been addressed in Gillian B. Anderson's attempts to reconstruct the premiere version of the film Intolerance, or in Martin Miller Mark's analysis of The Birth of a Nation.", "The lecture argues that the reuse of pieces or themes in the music to silent films must be considered both philologically and semantically in critical film music editions. Intermedial reuse presents editorial challenges due to the adaptations of the musical material. On one hand, the contextualising relationship between these different versions of the pieces and themes aims to distinguish the respective context of the story, as this gives the themes or pieces a new semantic meaning that is detached from the original. On the other hand, insights can be drawn about instrumentation, which is crucial for reconstructing orchestrations where individual film scores have only survived in piano form."], download: "link-pdf" },
          { speaker: "Ben Winters", title: "Reflections on the Multimedia Film-Score Edition and the Textual Instability of Film", text: ["In this paper, I reflect on the challenges and opportunities offered by the film-score edition and consider some of the ontological issues that are raised by the prospect of the multimedia edition. In its promise to position musical sources in relation to their surrounding audiovisual contexts, the multimedia edition is forced to address what I term the ‘textual instability’ of film as a medium; that far from being a fixed audiovisual object, around which multiple manuscript musical sources might be gathered, film can frequently exist in multiple released variants that may directly affect the musical component heard. These variants can appear as a result of historical distribution practices such as cinematic rereleases or telecine processes that transfer film to video for the purposes of television broadcast; however, variants can also arise due to the near simultaneous release of movies in different film gauges and with alternate sound mixes. In considering the music and sound variants encountered in 35mm and 70mm prints of The Empire Strikes Back (dir. Irvin Kershner, 1980) alongside its early home-entertainment release on Super 8 film, I suggest that any multimedia edition of a film score needs not only to acknowledge the ‘multitext’ of musical sources but also to recognise film’s inherent materiality and its ontological complexity as an aesthetic object with sometimes competing authorial claims."], download: "link-pdf" }
        ]
      },
      headlinePlan: "Site plan",
      headlineContact: "Contact",
      msgContact: "If you have any questions or require further information, please contact us at {mail}."
    }
  },
}))
