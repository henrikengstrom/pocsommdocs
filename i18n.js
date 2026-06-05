/* PocSomm marketing site — client-side i18n.
   English lives inline in index.html (default + SEO). This file holds the
   non-English translations and a tiny loader that swaps text on demand. */
(function () {
    "use strict";

    var SUPPORTED = ["en", "fr", "it", "es", "ja", "zh"];

    // Page <title> + meta description per language (en handled inline / by default).
    var META = {
        en: {
            title: "PocSomm - Your Pocket Sommelier",
            desc: "PocSomm puts expert wine knowledge in your pocket. Scan wine lists, discover food pairings, read tasting notes, and explore grape varieties with AI-powered analysis."
        },
        fr: {
            title: "PocSomm - Votre sommelier de poche",
            desc: "PocSomm met le savoir d'un sommelier dans votre poche. Scannez une carte des vins, trouvez des accords mets-vins, lisez des notes de dégustation et explorez les cépages grâce à l'analyse par IA."
        },
        it: {
            title: "PocSomm - Il tuo sommelier tascabile",
            desc: "PocSomm mette il sapere di un sommelier in tasca. Scansiona la carta dei vini, scopri gli abbinamenti, leggi le note di degustazione ed esplora i vitigni con l'analisi basata sull'IA."
        },
        es: {
            title: "PocSomm - Tu sumiller de bolsillo",
            desc: "PocSomm pone el saber de un sumiller en tu bolsillo. Escanea cartas de vinos, descubre maridajes, lee notas de cata y explora variedades de uva con análisis basado en IA."
        },
        ja: {
            title: "PocSomm - ポケットの中のソムリエ",
            desc: "PocSommは、ソムリエの知識をあなたのポケットに。ワインリストをスキャンして料理との相性を見つけ、テイスティングノートを読み、AI分析でブドウ品種を探求できます。"
        },
        zh: {
            title: "PocSomm - 口袋里的侍酒师",
            desc: "PocSomm 将专业的葡萄酒知识装进你的口袋。扫描酒单、发现餐酒搭配、阅读品鉴笔记，并通过 AI 分析探索葡萄品种。"
        }
    };

    var I18N = {
        /* ============================ FRANÇAIS ============================ */
        fr: {
            "nav.how": "Comment ça marche",
            "nav.features": "Fonctions",
            "nav.pricing": "Tarifs",
            "nav.faq": "FAQ",
            "nav.about": "À propos",

            "hero.tagline": "Votre sommelier de poche",
            "hero.desc": "PocSomm met le savoir d'un sommelier dans votre poche. Scannez la carte des vins d'un restaurant pour voir instantanément les prix de détail, les notes des critiques et l'évaluation du rapport qualité-prix. Photographiez une étiquette pour obtenir des notes de dégustation. Accordez les vins à votre dîner grâce à l'IA. Explorez les cépages et recevez des suggestions de vin pour le repas du soir — le tout depuis votre iPhone.",
            "hero.badge": "Actuellement en bêta &middot; Bientôt sur l'App Store et Android",

            "how.eyebrow": "Comment ça marche",
            "how.h2": "De la photo au verre parfait en quelques secondes",
            "how.sub": "Pas de saisie, pas de recherche. Pointez simplement votre appareil photo et laissez PocSomm faire le travail du sommelier.",
            "how.s1h": "Prenez une photo",
            "how.s1p": "Pointez votre appareil photo vers une carte des vins, une étiquette ou un menu.",
            "how.s2h": "PocSomm la lit",
            "how.s2p": "L'IA identifie instantanément chaque vin et ajoute prix de détail, indice de valeur, notes des critiques et notes de dégustation.",
            "how.s3h": "Commandez en confiance",
            "how.s3p": "Repérez le meilleur rapport qualité-prix, trouvez l'accord parfait et lisez les notes du sommelier — directement à table.",

            "feat.eyebrow": "Ce que vous pouvez faire",
            "feat.h2": "Tout ce que fait un sommelier, dans votre poche",
            "feat.sub": "Quatre façons de comprendre n'importe quel vin, partout.",

            "wl.kicker": "Scanner une carte des vins",
            "wl.h": "Voyez les meilleurs choix avant de commander",
            "wl.p": "Photographiez n'importe quelle carte des vins et PocSomm évalue le prix de chaque bouteille pour vous.",
            "wl.li1": "Prix de détail estimé pour chaque vin",
            "wl.li2": "Étiquettes de valeur : Très bon rapport, Prix juste ou Marge élevée",
            "wl.li3": "Notes des critiques lorsqu'elles sont disponibles",
            "wl.li4": "Distingue le service au verre et à la bouteille",

            "bo.kicker": "Scanner une bouteille",
            "bo.h": "Comprenez n'importe quelle bouteille d'un coup d'œil",
            "bo.p": "Pointez votre appareil photo vers une étiquette pour un profil instantané et en langage clair : le goût du vin et avec quoi le déguster.",
            "bo.li1": "Aperçu rapide de la dégustation — arômes, corps et texture",
            "bo.li2": "Touchez pour les notes complètes du sommelier : nez, bouche, finale",
            "bo.li3": "Conseils de température de service, de carafage et de garde",

            "fp.kicker": "Accord mets-vins",
            "fp.h": "Accordez le vin à votre repas",
            "fp.p": "Photographiez le menu, choisissez vos plats, puis scannez la carte des vins. PocSomm classe chaque vin selon son accord avec ce que vous mangez.",
            "fp.li1": "Un pourcentage d'accord clair pour chaque vin",
            "fp.li2": "L'explication derrière chaque accord",
            "fp.li3": "Fonctionne pour la commande de toute la tablée",

            "ask.kicker": "Demandez à PocSomm",
            "ask.h": "Un sommelier à la demande",
            "ask.p": "Dites à PocSomm ce que vous mangez pour obtenir des suggestions de vin, ou plongez dans l'encyclopédie des cépages intégrée.",
            "ask.li1": "Accord par plat &mdash; &laquo;&nbsp;On mange une côte de bœuf ce soir, qu'est-ce qu'on ouvre&nbsp;?&nbsp;&raquo;",
            "ask.li2": "Des valeurs sûres et quelques idées plus audacieuses, hors des sentiers battus",
            "ask.li3": "Profils des cépages : arômes, régions clés et accords classiques",

            "set.kicker": "Fait pour vous",
            "set.h": "Adapté à l'endroit où vous buvez",
            "set.p": "Réglez votre langue et votre devise &amp; marché locaux pour que chaque estimation de prix ait du sens chez vous &mdash; &laquo;&nbsp;350&nbsp;&raquo; n'a pas du tout le même sens en USD qu'en SEK.",
            "set.li1": "11 langues, modifiables à tout moment",
            "set.li2": "Devise &amp; marché pour des prix de détail locaux précis",
            "set.li3": "Ajustez vos propres seuils de valeur &mdash; ce qui est une bonne affaire ou une marge trop élevée",
            "set.li4": "Choisissez une échelle de notation 1&ndash;5, 1&ndash;10 ou 1&ndash;20",

            "walk.eyebrow": "En action",
            "walk.h2": "PocSomm en pratique",
            "walk.sub": "Les parcours que vous utiliserez le plus, du début à la fin.",
            "walk.t1": "Scanner une carte des vins",
            "walk.t2": "Scanner une bouteille",
            "walk.t3": "Accorder un plat à une carte des vins",
            "walk.wl1": "Photographiez la carte",
            "walk.wl2": "Ajoutez des pages, puis analysez",
            "walk.wl3": "Confirmez &mdash; voyez le coût",
            "walk.wl4": "Chaque vin, instantanément évalué",
            "walk.wl5": "Triez par valeur, producteur et plus",
            "walk.wl6": "Touchez un vin pour les détails",
            "walk.bo1": "Visez l'étiquette",
            "walk.bo2": "Ajoutez des bouteilles, puis analysez",
            "walk.bo3": "Confirmez &mdash; voyez le coût",
            "walk.bo4": "Obtenez un profil instantané",
            "walk.bo5": "&laquo;&nbsp;Plus d'infos&nbsp;&raquo; pour un aperçu rapide",
            "walk.bo6": "Notes complètes du sommelier à la demande",
            "walk.fp1": "Voyez ce qui est inclus",
            "walk.fp2": "Photographiez le menu",
            "walk.fp3": "Choisissez vos plats",
            "walk.fp4": "Photographiez la carte des vins",
            "walk.fp5": "Ajoutez des pages si besoin",
            "walk.fp6": "On les accorde (~20 s)",
            "walk.fp7": "Accords classés, avec un %",
            "walk.fp8": "Touchez une carte pour le &laquo;&nbsp;pourquoi&nbsp;&raquo;",
            "walk.hint": "&larr; faites glisser chaque rangée pour voir tout le parcours &rarr;",

            "more.eyebrow": "Et plus encore",
            "more.h2": "Pensé pour les vrais moments de vin",
            "more.m1h": "Enregistrez &amp; notez",
            "more.m1p": "Chaque scan est sauvegardé dans votre historique. Notez les vins que vous goûtez et constituez votre propre cave de souvenirs.",
            "more.m2h": "Détecteur de bonnes affaires",
            "more.m2p": "Voyez instantanément quels vins d'une carte sont à prix juste — et lesquels affichent une marge de restaurant élevée.",
            "more.m3h": "11 langues",
            "more.m3p": "PocSomm parle votre langue, en conservant les termes du vin dans leur forme d'origine.",

            "langs.eyebrow": "Dans le monde entier",
            "langs.h2": "Disponible en 11 langues",
            "langs.sub": "Où que vous voyagiez, PocSomm vous accompagne.",
            "langs.currency": "Gardez l'application dans votre langue, puis réglez la devise et le marché selon le pays où vous vous trouvez — ainsi chaque estimation de prix s'affiche dans la monnaie locale que vous payez réellement.",

            "price.eyebrow": "Simple &amp; honnête",
            "price.h2": "Comment fonctionne la tarification",
            "price.p1": "PocSomm est <strong>gratuit à télécharger</strong> et inclut des crédits pour démarrer. Chaque scan utilise un crédit ou deux selon sa taille.",
            "price.p2": "Besoin de plus ? Rechargez à tout moment avec des <strong>packs de crédits</strong> ponctuels. Pas d'abonnement, pas de compte, pas de surprise — et vos crédits restants n'expirent jamais.",

            "priv.eyebrow": "Vos données vous appartiennent",
            "priv.h2": "Privé par conception",
            "priv.p1": "<strong>Pas de compte. Pas d'inscription.</strong> Vos scans, vos notes et votre historique ne vivent que sur votre appareil.",
            "priv.p2": "Quand l'IA lit une photo, seule l'image est envoyée au service Gemini de Google pour en extraire les détails du vin — elle n'est jamais stockée sur nos serveurs (nous n'en avons aucun) ni vendue. <strong>Pas de pub, pas de suivi entre applis.</strong>",
            "priv.link": "<a href=\"/privacy-policy\">Lire la politique de confidentialité complète &rarr;</a>",

            "faq.eyebrow": "Bon à savoir",
            "faq.h2": "Questions fréquentes",
            "faq.q1": "Quelle est la précision de PocSomm ?",
            "faq.a1": "PocSomm utilise une IA avancée pour lire les étiquettes et les cartes et estimer prix, notes et accords. C'est remarquablement performant &mdash; mais l'IA peut se tromper, alors vérifiez toujours les prix et les détails avant d'acheter.",
            "faq.q2": "Ai-je besoin d'une connexion internet ?",
            "faq.a2": "Oui. PocSomm analyse vos photos dans le cloud ; une connexion est donc nécessaire pour scanner et interroger le sommelier.",
            "faq.q3": "Mes données sont-elles privées ?",
            "faq.a3": "Oui. Il n'y a pas de compte, et vos scans, notes et historique restent sur votre appareil. Les photos ne sont envoyées qu'à l'IA pour être lues &mdash; jamais stockées sur nos serveurs, jamais vendues, sans pub ni suivi.",
            "faq.q4": "Combien ça coûte ?",
            "faq.a4": "PocSomm est gratuit à télécharger, avec des crédits pour démarrer. Quand il vous en faut plus, achetez des packs de crédits ponctuels &mdash; sans abonnement.",
            "faq.q5": "Quelles devises et régions sont prises en charge ?",
            "faq.a5": "PocSomm estime les prix dans le marché que vous choisissez et fonctionne avec les cartes des vins et les bouteilles du monde entier.",
            "faq.q6": "Quel âge faut-il avoir ?",
            "faq.a6": "PocSomm contient des informations sur des boissons alcoolisées et s'adresse aux adultes en âge légal de consommer de l'alcool (18 ans et plus).",

            "about.eyebrow": "Qui nous sommes",
            "about.h2": "Une œuvre de cœur, à deux",
            "about.p1": "PocSomm est né de plus de 30 ans de passion commune pour le vin. En chemin, nous avons eu le plaisir d'apprendre auprès de sommeliers vraiment exceptionnels &mdash; dont certains sont devenus de chers amis. Mais nous nous sommes aussi assis à des tables où les conseils sur le vin laissaient à désirer.",
            "about.p2": "PocSomm est notre façon de combler ce manque : non pour remplacer un grand sommelier, mais pour mettre un partenaire averti dans votre poche pour les moments où il n'y en a pas à proximité.",
            "about.p3": "Fait avec soin par Melkar, LLC &mdash; rien que nous deux.",

            "sup.h2": "Une question ou un avis ?",
            "sup.sub": "Nous serions ravis de vous lire. Contactez l'équipe à tout moment à <a href=\"mailto:support@pocsomm.com\" style=\"color:var(--burgundy-light);font-weight:600;\">support@pocsomm.com</a>.",
            "sup.responsible": "Buvez avec modération. Une consommation excessive d'alcool est dangereuse pour la santé. PocSomm s'adresse aux adultes en âge légal de consommer de l'alcool.",

            "foot.privacy": "Politique de confidentialité",
            "foot.terms": "Conditions d'utilisation",
            "foot.contact": "Contact"
        },

        /* ============================ ITALIANO ============================ */
        it: {
            "nav.how": "Come funziona",
            "nav.features": "Funzioni",
            "nav.pricing": "Prezzi",
            "nav.faq": "FAQ",
            "nav.about": "Chi siamo",

            "hero.tagline": "Il tuo sommelier tascabile",
            "hero.desc": "PocSomm mette il sapere di un sommelier in tasca. Scansiona la carta dei vini di un ristorante per vedere subito prezzi al dettaglio, voti della critica e valutazioni di convenienza. Fotografa un'etichetta per le note di degustazione. Abbina i vini alla tua cena con l'IA. Esplora i vitigni e ricevi suggerimenti di vino per la cena di stasera — tutto dal tuo iPhone.",
            "hero.badge": "Ora in beta &middot; Presto su App Store e Android",

            "how.eyebrow": "Come funziona",
            "how.h2": "Dalla foto al bicchiere perfetto in pochi secondi",
            "how.sub": "Niente da digitare, niente da cercare. Punta la fotocamera e lascia che PocSomm faccia il lavoro del sommelier.",
            "how.s1h": "Scatta una foto",
            "how.s1p": "Punta la fotocamera su una carta dei vini, un'etichetta o un menù.",
            "how.s2h": "PocSomm la legge",
            "how.s2p": "L'IA identifica subito ogni vino e aggiunge prezzi al dettaglio, indici di valore, voti della critica e note di degustazione.",
            "how.s3h": "Ordina con sicurezza",
            "how.s3p": "Individua il miglior rapporto qualità-prezzo, trova l'abbinamento perfetto e leggi le note del sommelier — direttamente a tavola.",

            "feat.eyebrow": "Cosa puoi fare",
            "feat.h2": "Tutto ciò che fa un sommelier, in tasca",
            "feat.sub": "Quattro modi per capire qualsiasi vino, ovunque.",

            "wl.kicker": "Scansiona la carta dei vini",
            "wl.h": "Vedi le scelte migliori prima di ordinare",
            "wl.p": "Fotografa qualsiasi carta dei vini e PocSomm stima il prezzo di ogni bottiglia per te.",
            "wl.li1": "Prezzo al dettaglio stimato per ogni vino",
            "wl.li2": "Etichette di valore: Ottimo affare, Prezzo giusto o Ricarico alto",
            "wl.li3": "Voti della critica quando disponibili",
            "wl.li4": "Distingue il servizio al calice da quello a bottiglia",

            "bo.kicker": "Scansiona una bottiglia",
            "bo.h": "Conosci ogni bottiglia in un attimo",
            "bo.p": "Punta la fotocamera su un'etichetta per un profilo immediato e in parole semplici: come sa il vino e con cosa abbinarlo.",
            "bo.li1": "Sintesi rapida della degustazione — aromi, corpo e sensazione",
            "bo.li2": "Tocca per le note complete del sommelier: naso, palato, finale",
            "bo.li3": "Consigli su temperatura di servizio, decantazione e invecchiamento",

            "fp.kicker": "Abbinamento cibo-vino",
            "fp.h": "Abbina il vino al tuo piatto",
            "fp.p": "Fotografa il menù, scegli i piatti, poi scansiona la carta dei vini. PocSomm classifica ogni vino in base a quanto si abbina a ciò che mangi.",
            "fp.li1": "Una chiara percentuale di abbinamento per ogni vino",
            "fp.li2": "La spiegazione dietro ogni abbinamento",
            "fp.li3": "Funziona per l'ordine di tutto il tavolo",

            "ask.kicker": "Chiedi a PocSomm",
            "ask.h": "Un sommelier a disposizione",
            "ask.p": "Dì a PocSomm cosa stai mangiando per ricevere suggerimenti di vino, oppure immergiti nell'enciclopedia dei vitigni integrata.",
            "ask.li1": "Abbinamento per piatto &mdash; &laquo;&nbsp;Stasera mangiamo una bistecca, cosa apriamo?&nbsp;&raquo;",
            "ask.li2": "Scelte popolari più qualche idea audace e fuori dai sentieri battuti",
            "ask.li3": "Profili dei vitigni: aromi, regioni chiave e abbinamenti classici",

            "set.kicker": "Fatto per te",
            "set.h": "Calibrato su dove bevi",
            "set.p": "Imposta lingua e valuta &amp; mercato locali, così ogni stima di prezzo ha senso per te &mdash; &laquo;&nbsp;350&nbsp;&raquo; significa qualcosa di molto diverso in USD rispetto a SEK.",
            "set.li1": "11 lingue, cambiabili in qualsiasi momento",
            "set.li2": "Valuta &amp; mercato per prezzi al dettaglio locali accurati",
            "set.li3": "Regola le tue soglie di valore &mdash; cosa è un affare e cosa un ricarico eccessivo",
            "set.li4": "Scegli una scala di voto 1&ndash;5, 1&ndash;10 o 1&ndash;20",

            "walk.eyebrow": "In azione",
            "walk.h2": "PocSomm al lavoro",
            "walk.sub": "I percorsi che userai di più, dall'inizio alla fine.",
            "walk.t1": "Scansionare una carta dei vini",
            "walk.t2": "Scansionare una bottiglia",
            "walk.t3": "Abbinare un piatto a una carta dei vini",
            "walk.wl1": "Fotografa la carta dei vini",
            "walk.wl2": "Aggiungi pagine, poi analizza",
            "walk.wl3": "Conferma &mdash; vedi il costo",
            "walk.wl4": "Ogni vino, valutato all'istante",
            "walk.wl5": "Ordina per valore, produttore e altro",
            "walk.wl6": "Tocca un vino per i dettagli",
            "walk.bo1": "Inquadra l'etichetta",
            "walk.bo2": "Aggiungi bottiglie, poi analizza",
            "walk.bo3": "Conferma &mdash; vedi il costo",
            "walk.bo4": "Ottieni un profilo istantaneo",
            "walk.bo5": "&laquo;&nbsp;Più info&nbsp;&raquo; per una sintesi rapida",
            "walk.bo6": "Note complete del sommelier su richiesta",
            "walk.fp1": "Vedi cosa è incluso",
            "walk.fp2": "Fotografa il menù",
            "walk.fp3": "Scegli i piatti",
            "walk.fp4": "Fotografa la carta dei vini",
            "walk.fp5": "Aggiungi pagine se serve",
            "walk.fp6": "Li abbiniamo (~20 s)",
            "walk.fp7": "Abbinamenti in classifica, con un %",
            "walk.fp8": "Tocca una scheda per il &laquo;&nbsp;perché&nbsp;&raquo;",
            "walk.hint": "&larr; scorri ogni riga per vedere l'intero percorso &rarr;",

            "more.eyebrow": "E non solo",
            "more.h2": "Pensato per i veri momenti del vino",
            "more.m1h": "Salva &amp; valuta",
            "more.m1p": "Ogni scansione è salvata nella cronologia. Valuta i vini che provi e crea la tua cantina di ricordi.",
            "more.m2h": "Trova-affari",
            "more.m2p": "Vedi all'istante quali vini in carta hanno un prezzo giusto — e quali un ricarico da ristorante elevato.",
            "more.m3h": "11 lingue",
            "more.m3p": "PocSomm parla la tua lingua, mantenendo i termini del vino nella loro forma originale.",

            "langs.eyebrow": "In tutto il mondo",
            "langs.h2": "Disponibile in 11 lingue",
            "langs.sub": "Ovunque tu viaggi, PocSomm viaggia con te.",
            "langs.currency": "Tieni l'app nella tua lingua, poi imposta la valuta e il mercato in base al paese in cui ti trovi — così ogni stima di prezzo appare nella moneta locale che stai davvero pagando.",

            "price.eyebrow": "Semplice &amp; equo",
            "price.h2": "Come funzionano i prezzi",
            "price.p1": "PocSomm è <strong>gratuito da scaricare</strong> e include crediti per iniziare. Ogni scansione usa uno o due crediti a seconda delle dimensioni.",
            "price.p2": "Ti serve di più? Ricarica quando vuoi con <strong>pacchetti di crediti</strong> una tantum. Nessun abbonamento, nessun account, nessuna sorpresa — e i crediti rimasti non scadono mai.",

            "priv.eyebrow": "I tuoi dati sono affar tuo",
            "priv.h2": "Privato per progettazione",
            "priv.p1": "<strong>Nessun account. Nessuna registrazione.</strong> Le tue scansioni, valutazioni e cronologia vivono solo sul tuo dispositivo.",
            "priv.p2": "Quando l'IA legge una foto, solo l'immagine viene inviata al servizio Gemini di Google per estrarre i dettagli del vino — non viene mai conservata sui nostri server (non ne abbiamo) né venduta. <strong>Niente pubblicità, niente tracciamento tra app.</strong>",
            "priv.link": "<a href=\"/privacy-policy\">Leggi l'informativa sulla privacy completa &rarr;</a>",

            "faq.eyebrow": "Buono a sapersi",
            "faq.h2": "Domande frequenti",
            "faq.q1": "Quanto è accurato PocSomm?",
            "faq.a1": "PocSomm usa un'IA avanzata per leggere etichette e carte e per stimare prezzi, voti e abbinamenti. È sorprendentemente bravo &mdash; ma l'IA può sbagliare, quindi verifica sempre prezzi e dettagli prima di acquistare.",
            "faq.q2": "Serve una connessione a internet?",
            "faq.a2": "Sì. PocSomm analizza le foto nel cloud, quindi serve una connessione per scansionare e per interpellare il sommelier.",
            "faq.q3": "I miei dati sono privati?",
            "faq.a3": "Sì. Non c'è alcun account, e scansioni, valutazioni e cronologia restano sul tuo dispositivo. Le foto vengono inviate solo all'IA per essere lette &mdash; mai conservate sui nostri server, mai vendute, senza pubblicità né tracciamento.",
            "faq.q4": "Quanto costa?",
            "faq.a4": "PocSomm è gratuito da scaricare, con crediti per iniziare. Quando ti servono di più, puoi acquistare pacchetti di crediti una tantum &mdash; senza abbonamento.",
            "faq.q5": "Con quali valute e regioni funziona?",
            "faq.a5": "PocSomm stima i prezzi nel mercato che scegli e funziona con carte dei vini e bottiglie di tutto il mondo.",
            "faq.q6": "Quanti anni devo avere?",
            "faq.a6": "PocSomm contiene informazioni su bevande alcoliche ed è destinato agli adulti in età legale per il consumo di alcol (18+).",

            "about.eyebrow": "Chi siamo",
            "about.h2": "Un progetto d'amore, in due",
            "about.p1": "PocSomm è nato da oltre 30 anni di passione condivisa per il vino. Lungo il cammino abbiamo avuto il piacere di imparare da sommelier davvero eccezionali &mdash; alcuni dei quali sono diventati cari amici. Ma ci siamo anche seduti a tavoli dove la consulenza sul vino lasciava a desiderare.",
            "about.p2": "PocSomm è il nostro modo di colmare quel vuoto: non per sostituire un grande sommelier, ma per mettere un partner esperto nella tua tasca nei momenti in cui non ce n'è uno vicino.",
            "about.p3": "Fatto con cura da Melkar, LLC &mdash; solo noi due.",

            "sup.h2": "Domande o suggerimenti?",
            "sup.sub": "Ci farebbe piacere sentirti. Contatta il team quando vuoi all'indirizzo <a href=\"mailto:support@pocsomm.com\" style=\"color:var(--burgundy-light);font-weight:600;\">support@pocsomm.com</a>.",
            "sup.responsible": "Bevi con responsabilità. Il consumo eccessivo di alcol è dannoso per la salute. PocSomm è destinato agli adulti in età legale per il consumo di alcol.",

            "foot.privacy": "Informativa sulla privacy",
            "foot.terms": "Termini di servizio",
            "foot.contact": "Contatti"
        },

        /* ============================ ESPAÑOL ============================ */
        es: {
            "nav.how": "Cómo funciona",
            "nav.features": "Funciones",
            "nav.pricing": "Precios",
            "nav.faq": "Preguntas",
            "nav.about": "Quiénes somos",

            "hero.tagline": "Tu sumiller de bolsillo",
            "hero.desc": "PocSomm pone el saber de un sumiller en tu bolsillo. Escanea la carta de vinos de un restaurante para ver al instante precios de venta, puntuaciones de la crítica y valoraciones de relación calidad-precio. Fotografía una etiqueta para obtener notas de cata. Marida los vinos con tu cena gracias a la IA. Explora variedades de uva y recibe sugerencias de vino para la cena de hoy — todo desde tu iPhone.",
            "hero.badge": "Ahora en beta &middot; Pronto en la App Store y Android",

            "how.eyebrow": "Cómo funciona",
            "how.h2": "De la foto a la copa perfecta en segundos",
            "how.sub": "Sin escribir, sin buscar. Solo apunta con la cámara y deja que PocSomm haga el trabajo de sumiller.",
            "how.s1h": "Haz una foto",
            "how.s1p": "Apunta con la cámara a una carta de vinos, una etiqueta o un menú.",
            "how.s2h": "PocSomm la lee",
            "how.s2p": "La IA identifica al instante cada vino y añade precios de venta, índices de valor, puntuaciones de la crítica y notas de cata.",
            "how.s3h": "Pide con confianza",
            "how.s3p": "Detecta la mejor relación calidad-precio, encuentra el maridaje perfecto y lee las notas del sumiller — en la mesa.",

            "feat.eyebrow": "Lo que puedes hacer",
            "feat.h2": "Todo lo que hace un sumiller, en tu bolsillo",
            "feat.sub": "Cuatro formas de entender cualquier vino, en cualquier lugar.",

            "wl.kicker": "Escanea una carta de vinos",
            "wl.h": "Ve las mejores opciones antes de pedir",
            "wl.p": "Fotografía cualquier carta de vinos y PocSomm calcula el precio de cada botella por ti.",
            "wl.li1": "Precio de venta estimado para cada vino",
            "wl.li2": "Etiquetas de valor: Gran valor, Precio justo o Margen alto",
            "wl.li3": "Puntuaciones de la crítica cuando están disponibles",
            "wl.li4": "Distingue el servicio por copa del de botella",

            "bo.kicker": "Escanea una botella",
            "bo.h": "Conoce cualquier botella de un vistazo",
            "bo.p": "Apunta con la cámara a una etiqueta para un perfil instantáneo y en lenguaje claro: cómo sabe el vino y con qué tomarlo.",
            "bo.li1": "Resumen rápido de cata — aroma, cuerpo y sensación",
            "bo.li2": "Toca para ver las notas completas del sumiller: nariz, paladar, final",
            "bo.li3": "Consejos de temperatura de servicio, decantación y guarda",

            "fp.kicker": "Maridaje",
            "fp.h": "Marida el vino con tu comida",
            "fp.p": "Fotografía el menú, elige tus platos y luego escanea la carta de vinos. PocSomm clasifica cada vino según lo bien que marida con lo que vas a comer.",
            "fp.li1": "Un porcentaje de maridaje claro para cada vino",
            "fp.li2": "El motivo detrás de cada maridaje",
            "fp.li3": "Funciona con el pedido de toda la mesa",

            "ask.kicker": "Pregunta a PocSomm",
            "ask.h": "Un sumiller a tu disposición",
            "ask.p": "Dile a PocSomm qué vas a comer y obtén sugerencias de vino, o adéntrate en la enciclopedia de variedades de uva integrada.",
            "ask.li1": "Maridaje por plato &mdash; &laquo;Esta noche tomamos chuletón, ¿qué abrimos?&raquo;",
            "ask.li2": "Opciones populares y alguna idea atrevida fuera de lo común",
            "ask.li3": "Perfiles de uvas: aromas, regiones clave y maridajes clásicos",

            "set.kicker": "Hecho para ti",
            "set.h": "Ajustado a dónde bebes",
            "set.p": "Configura tu idioma y tu moneda &amp; mercado locales para que cada estimación de precio tenga sentido para ti &mdash; &laquo;350&raquo; significa algo muy distinto en USD que en SEK.",
            "set.li1": "11 idiomas, cambiables en cualquier momento",
            "set.li2": "Moneda &amp; mercado para precios de venta locales precisos",
            "set.li3": "Ajusta tus propios umbrales de valor &mdash; qué es un chollo y qué un margen excesivo",
            "set.li4": "Elige una escala de valoración de 1&ndash;5, 1&ndash;10 o 1&ndash;20",

            "walk.eyebrow": "En acción",
            "walk.h2": "Mira a PocSomm en funcionamiento",
            "walk.sub": "Los recorridos que más usarás, de principio a fin.",
            "walk.t1": "Escanear una carta de vinos",
            "walk.t2": "Escanear una botella",
            "walk.t3": "Maridar un plato con una carta de vinos",
            "walk.wl1": "Fotografía la carta de vinos",
            "walk.wl2": "Añade páginas y analiza",
            "walk.wl3": "Confirma &mdash; mira el coste",
            "walk.wl4": "Cada vino, valorado al instante",
            "walk.wl5": "Ordena por valor, productor y más",
            "walk.wl6": "Toca un vino para ver detalles",
            "walk.bo1": "Apunta a la etiqueta",
            "walk.bo2": "Añade botellas y analiza",
            "walk.bo3": "Confirma &mdash; mira el coste",
            "walk.bo4": "Obtén un perfil instantáneo",
            "walk.bo5": "&laquo;Más info&raquo; para un resumen rápido",
            "walk.bo6": "Notas completas del sumiller cuando quieras",
            "walk.fp1": "Mira qué incluye",
            "walk.fp2": "Fotografía el menú",
            "walk.fp3": "Elige tus platos",
            "walk.fp4": "Fotografía la carta de vinos",
            "walk.fp5": "Añade más páginas si hace falta",
            "walk.fp6": "Los maridamos (~20 s)",
            "walk.fp7": "Maridajes ordenados, con un %",
            "walk.fp8": "Toca una tarjeta para ver el &laquo;porqué&raquo;",
            "walk.hint": "&larr; desliza cada fila para ver todo el recorrido &rarr;",

            "more.eyebrow": "Y más",
            "more.h2": "Pensado para los momentos reales del vino",
            "more.m1h": "Guarda &amp; valora",
            "more.m1p": "Cada escaneo se guarda en tu historial. Valora los vinos que pruebas y crea tu propia bodega de recuerdos.",
            "more.m2h": "Buscador de valor",
            "more.m2p": "Ve al instante qué vinos de una carta tienen un precio justo — y cuáles llevan un margen de restaurante elevado.",
            "more.m3h": "11 idiomas",
            "more.m3p": "PocSomm habla tu idioma, manteniendo los términos del vino en su forma original.",

            "langs.eyebrow": "En todo el mundo",
            "langs.h2": "Disponible en 11 idiomas",
            "langs.sub": "Donde quiera que viajes, PocSomm viaja contigo.",
            "langs.currency": "Mantén la app en tu idioma y luego ajusta la moneda y el mercado según el país en el que estés — así cada estimación de precio aparece en la moneda local que realmente pagas.",

            "price.eyebrow": "Sencillo y justo",
            "price.h2": "Cómo funcionan los precios",
            "price.p1": "PocSomm es <strong>gratis de descargar</strong> e incluye créditos para empezar. Cada escaneo usa uno o dos créditos según su tamaño.",
            "price.p2": "¿Necesitas más? Recarga cuando quieras con <strong>packs de créditos</strong> de pago único. Sin suscripción, sin cuenta, sin sorpresas — y tus créditos restantes nunca caducan.",

            "priv.eyebrow": "Tus datos son cosa tuya",
            "priv.h2": "Privado desde el diseño",
            "priv.p1": "<strong>Sin cuenta. Sin registro.</strong> Tus escaneos, valoraciones e historial viven solo en tu dispositivo.",
            "priv.p2": "Cuando la IA lee una foto, solo se envía la imagen al servicio Gemini de Google para extraer los detalles del vino — nunca se guarda en nuestros servidores (no tenemos ninguno) ni se vende. <strong>Sin anuncios, sin seguimiento entre apps.</strong>",
            "priv.link": "<a href=\"/privacy-policy\">Lee la política de privacidad completa &rarr;</a>",

            "faq.eyebrow": "Bueno saberlo",
            "faq.h2": "Preguntas frecuentes",
            "faq.q1": "¿Qué precisión tiene PocSomm?",
            "faq.a1": "PocSomm usa IA avanzada para leer etiquetas y cartas y estimar precios, puntuaciones y maridajes. Es notablemente bueno &mdash; pero la IA puede equivocarse, así que verifica siempre precios y detalles antes de comprar.",
            "faq.q2": "¿Necesito conexión a internet?",
            "faq.a2": "Sí. PocSomm analiza tus fotos en la nube, así que necesitas conexión para escanear y para preguntar al sumiller.",
            "faq.q3": "¿Mis datos son privados?",
            "faq.a3": "Sí. No hay cuenta, y tus escaneos, valoraciones e historial se quedan en tu dispositivo. Las fotos se envían solo a la IA para leerlas &mdash; nunca se guardan en nuestros servidores, nunca se venden, sin anuncios ni seguimiento.",
            "faq.q4": "¿Cuánto cuesta?",
            "faq.a4": "PocSomm es gratis de descargar, con créditos para empezar. Cuando necesitas más, puedes comprar packs de créditos de pago único &mdash; sin suscripción.",
            "faq.q5": "¿Con qué monedas y regiones funciona?",
            "faq.a5": "PocSomm estima precios en el mercado que elijas y funciona con cartas de vinos y botellas de todo el mundo.",
            "faq.q6": "¿Qué edad necesito tener?",
            "faq.a6": "PocSomm contiene información sobre bebidas alcohólicas y está destinado a adultos en edad legal para consumir alcohol (18+).",

            "about.eyebrow": "Quiénes somos",
            "about.h2": "Un proyecto hecho con amor, entre dos",
            "about.p1": "PocSomm nació de más de 30 años de pasión compartida por el vino. Por el camino hemos tenido el placer de aprender de sumilleres verdaderamente excepcionales &mdash; algunos de los cuales se han convertido en queridos amigos. Pero también nos hemos sentado en mesas donde el consejo sobre el vino se quedaba corto.",
            "about.p2": "PocSomm es nuestra forma de salvar esa distancia: no para sustituir a un gran sumiller, sino para poner un compañero entendido en tu bolsillo para esos momentos en que no hay ninguno cerca.",
            "about.p3": "Hecho con cariño por Melkar, LLC &mdash; solo nosotros dos.",

            "sup.h2": "¿Preguntas o comentarios?",
            "sup.sub": "Nos encantaría saber de ti. Escribe al equipo cuando quieras a <a href=\"mailto:support@pocsomm.com\" style=\"color:var(--burgundy-light);font-weight:600;\">support@pocsomm.com</a>.",
            "sup.responsible": "Disfruta del vino con responsabilidad. El consumo excesivo de alcohol es perjudicial para la salud. PocSomm está destinado a adultos en edad legal para consumir alcohol.",

            "foot.privacy": "Política de privacidad",
            "foot.terms": "Términos del servicio",
            "foot.contact": "Contacto"
        },

        /* ============================ 日本語 ============================ */
        ja: {
            "nav.how": "使い方",
            "nav.features": "機能",
            "nav.pricing": "料金",
            "nav.faq": "よくある質問",
            "nav.about": "私たちについて",

            "hero.tagline": "ポケットの中のソムリエ",
            "hero.desc": "PocSommは、ソムリエの知識をあなたのポケットに。レストランのワインリストをスキャンすれば、小売価格、評論家の評価、コストパフォーマンスがすぐに分かります。ボトルのラベルを撮影してテイスティングノートを表示。AIによる料理とのペアリングで、ディナーに合うワインを見つけましょう。ブドウ品種を調べ、今夜の食事に合うワインの提案も受けられます — すべてiPhoneひとつで。",
            "hero.badge": "現在ベータ版 &middot; App Store と Android で近日公開",

            "how.eyebrow": "使い方",
            "how.h2": "写真から完璧な一杯まで、数秒で",
            "how.sub": "入力も検索も不要。カメラを向けるだけで、PocSommがソムリエの仕事をこなします。",
            "how.s1h": "写真を撮る",
            "how.s1p": "ワインリスト、ボトルのラベル、またはメニューにカメラを向けます。",
            "how.s2h": "PocSommが読み取る",
            "how.s2p": "AIが各ワインを即座に識別し、小売価格、コスパ指標、評論家の評価、テイスティングノートを追加します。",
            "how.s3h": "自信を持って注文",
            "how.s3p": "最もお得な一本を見つけ、完璧なペアリングを選び、ソムリエのコメントを読む — すべてテーブルの上で。",

            "feat.eyebrow": "できること",
            "feat.h2": "ソムリエの仕事のすべてを、ポケットに",
            "feat.sub": "どんなワインも理解できる、4つの方法。どこにいても。",

            "wl.kicker": "ワインリストをスキャン",
            "wl.h": "注文する前に、賢い選択が見える",
            "wl.p": "どんなレストランのワインリストでも撮影すれば、PocSommが各ボトルの価格を見積もります。",
            "wl.li1": "各ワインの推定小売価格",
            "wl.li2": "コスパ表示：お買い得、適正価格、または割高",
            "wl.li3": "評論家の評価（入手可能な場合）",
            "wl.li4": "グラス売りとボトル売りの違いも認識",

            "bo.kicker": "ボトルをスキャン",
            "bo.h": "どんなボトルもひと目で分かる",
            "bo.p": "ラベルにカメラを向けるだけで、その場で分かりやすい言葉のプロフィールを表示。味わいと、合わせる料理が分かります。",
            "bo.li1": "テイスティングの概要をすばやく — 風味、ボディ、口当たり",
            "bo.li2": "タップでソムリエの詳細コメント：香り、味わい、余韻",
            "bo.li3": "提供温度、デカンタージュ、熟成のヒント",

            "fp.kicker": "料理とのペアリング",
            "fp.h": "料理にワインを合わせる",
            "fp.p": "メニューを撮影し、料理を選んでから、ワインリストをスキャン。PocSommが、あなたの食べるものとの相性で各ワインをランキングします。",
            "fp.li1": "各ワインの分かりやすい相性パーセンテージ",
            "fp.li2": "それぞれのペアリングの理由",
            "fp.li3": "テーブル全員の注文に対応",

            "ask.kicker": "PocSommに聞く",
            "ask.h": "いつでも頼れるソムリエ",
            "ask.p": "食べるものをPocSommに伝えてワインの提案を受けるか、内蔵のブドウ品種事典をじっくり調べましょう。",
            "ask.li1": "料理からのペアリング &mdash; 「今夜はリブアイ、何を開けよう？」",
            "ask.li2": "定番の一本に加えて、少し冒険的で意外な提案も",
            "ask.li3": "ブドウ品種のプロフィール：風味、主要産地、定番のペアリング",

            "set.kicker": "あなたのために",
            "set.h": "飲む場所に合わせて調整",
            "set.p": "言語と、地域の通貨＆市場を設定すれば、すべての価格見積もりがあなたの感覚に合います &mdash; 「350」は USD と SEK でまったく意味が違います。",
            "set.li1": "11言語、いつでも切り替え可能",
            "set.li2": "正確な地域の小売価格のための通貨＆市場設定",
            "set.li3": "コスパの基準を自分で調整 &mdash; どこからがお得で、どこからが割高か",
            "set.li4": "評価スケールを 1〜5、1〜10、1〜20 から選択",

            "walk.eyebrow": "実際の動き",
            "walk.h2": "PocSommの動きを見る",
            "walk.sub": "もっともよく使う流れを、最初から最後まで。",
            "walk.t1": "ワインリストをスキャンする",
            "walk.t2": "ボトルをスキャンする",
            "walk.t3": "料理をワインリストに合わせる",
            "walk.wl1": "ワインリストを撮影",
            "walk.wl2": "ページを追加して解析",
            "walk.wl3": "確認 &mdash; 費用を表示",
            "walk.wl4": "すべてのワインを即座に価格化",
            "walk.wl5": "コスパ・生産者などで並べ替え",
            "walk.wl6": "ワインをタップして詳細表示",
            "walk.bo1": "ラベルに向ける",
            "walk.bo2": "ボトルを追加して解析",
            "walk.bo3": "確認 &mdash; 費用を表示",
            "walk.bo4": "その場でプロフィールを取得",
            "walk.bo5": "「詳細情報」でさっと確認",
            "walk.bo6": "ソムリエの詳細コメントもいつでも",
            "walk.fp1": "含まれる内容を確認",
            "walk.fp2": "料理メニューを撮影",
            "walk.fp3": "料理を選ぶ",
            "walk.fp4": "ワインリストを撮影",
            "walk.fp5": "必要ならページを追加",
            "walk.fp6": "AIがマッチング（約20秒）",
            "walk.fp7": "%付きのランキング表示",
            "walk.fp8": "カードをタップして「理由」を見る",
            "walk.hint": "&larr; 各列をスワイプして全体の流れを見る &rarr;",

            "more.eyebrow": "さらに",
            "more.h2": "リアルなワインの瞬間のために",
            "more.m1h": "保存＆評価",
            "more.m1p": "すべてのスキャンが履歴に保存されます。飲んだワインを評価して、自分だけの思い出のセラーを作りましょう。",
            "more.m2h": "コスパ発見",
            "more.m2p": "リストのどのワインが適正価格で、どれがレストランの割高な値付けかを即座に確認できます。",
            "more.m3h": "11言語",
            "more.m3p": "PocSommはあなたの言語で話します。ワイン用語は元の表記のまま残します。",

            "langs.eyebrow": "世界中で",
            "langs.h2": "11言語に対応",
            "langs.sub": "どこへ旅しても、PocSommはあなたと一緒。",
            "langs.currency": "アプリは自分の言語のまま、通貨と地域だけ今いる国に合わせて設定できます。だから価格の目安は、実際に支払う現地通貨で表示されます。",

            "price.eyebrow": "シンプルで公正",
            "price.h2": "料金の仕組み",
            "price.p1": "PocSommは<strong>ダウンロード無料</strong>で、はじめるためのクレジットが付いています。各スキャンはサイズに応じてクレジットを1〜2消費します。",
            "price.p2": "もっと必要ですか？ いつでも一回限りの<strong>クレジットパック</strong>で追加できます。サブスクなし、アカウントなし、隠れた費用なし — そして残ったクレジットは決して失効しません。",

            "priv.eyebrow": "あなたのデータは、あなたのもの",
            "priv.h2": "設計段階からプライベート",
            "priv.p1": "<strong>アカウント不要。登録不要。</strong>スキャン、評価、履歴はあなたの端末の中だけに残ります。",
            "priv.p2": "AIが写真を読み取る際、画像だけがGoogleのGeminiサービスに送られ、ワインの情報を抽出します。当社のサーバーに保存されることは一切なく（そもそも保有していません）、販売もしません。<strong>広告なし、アプリ間トラッキングなし。</strong>",
            "priv.link": "<a href=\"/privacy-policy\">プライバシーポリシー全文を読む &rarr;</a>",

            "faq.eyebrow": "知っておくと便利",
            "faq.h2": "よくある質問",
            "faq.q1": "PocSommの精度はどのくらい？",
            "faq.a1": "PocSommは高度なAIでラベルやリストを読み取り、価格・評価・ペアリングを推定します。非常に優秀です &mdash; ただしAIは間違えることもあるため、購入前に価格や詳細は必ずご確認ください。",
            "faq.q2": "インターネット接続は必要？",
            "faq.a2": "はい。PocSommは写真をクラウドで解析するため、スキャンやソムリエへの質問には接続が必要です。",
            "faq.q3": "データはプライベートに保たれる？",
            "faq.a3": "はい。アカウントはなく、スキャン・評価・履歴は端末内に留まります。写真は読み取りのためにAIへ送られるだけで &mdash; 当社サーバーに保存されることも、販売されることもなく、広告やトラッキングもありません。",
            "faq.q4": "料金はいくら？",
            "faq.a4": "PocSommはダウンロード無料で、はじめるためのクレジット付き。さらに必要なときは、一回限りのクレジットパックを購入できます &mdash; サブスクはありません。",
            "faq.q5": "どの通貨や地域に対応している？",
            "faq.a5": "PocSommは選んだ市場で価格を推定し、世界中のワインリストやボトルに対応します。",
            "faq.q6": "何歳から使える？",
            "faq.a6": "PocSommはアルコール飲料に関する情報を含み、飲酒可能な法定年齢（18歳以上）の方を対象としています。",

            "about.eyebrow": "私たちについて",
            "about.h2": "夫婦ふたりの、愛情のこもったプロジェクト",
            "about.p1": "PocSommは、30年以上にわたるワインへの共通の情熱から生まれました。その道のりで、本当に優れたソムリエの方々から学ぶ喜びに恵まれ &mdash; その何人かは大切な友人になりました。一方で、ワインの案内が物足りないテーブルに着いたこともあります。",
            "about.p2": "PocSommは、その隔たりを埋めるための私たちの答えです。優れたソムリエに取って代わるのではなく、近くにソムリエがいないときのために、頼れるパートナーをあなたのポケットに。",
            "about.p3": "Melkar, LLC が心を込めて &mdash; 私たちふたりだけで作りました。",

            "sup.h2": "ご質問やご感想は？",
            "sup.sub": "ぜひお聞かせください。チームへはいつでも <a href=\"mailto:support@pocsomm.com\" style=\"color:var(--burgundy-light);font-weight:600;\">support@pocsomm.com</a> までご連絡ください。",
            "sup.responsible": "お酒は楽しく適量で。過度の飲酒は健康を害します。PocSommは飲酒可能な法定年齢の方を対象としています。",

            "foot.privacy": "プライバシーポリシー",
            "foot.terms": "利用規約",
            "foot.contact": "お問い合わせ"
        },

        /* ============================ 中文 ============================ */
        zh: {
            "nav.how": "使用方法",
            "nav.features": "功能",
            "nav.pricing": "价格",
            "nav.faq": "常见问题",
            "nav.about": "关于我们",

            "hero.tagline": "口袋里的侍酒师",
            "hero.desc": "PocSomm 将专业的葡萄酒知识装进你的口袋。扫描餐厅酒单，即刻查看零售价、评论家评分和性价比评估。拍下酒标即可获得品鉴笔记。借助 AI 餐酒搭配，为你的晚餐挑选合适的葡萄酒。探索葡萄品种，获取今晚菜肴的配酒建议 — 这一切，只需一部 iPhone。",
            "hero.badge": "现已进入测试版 &middot; App Store 与 Android 即将上线",

            "how.eyebrow": "使用方法",
            "how.h2": "从拍照到完美一杯，只需几秒",
            "how.sub": "无需输入，无需搜索。只要举起相机，让 PocSomm 来做侍酒师的工作。",
            "how.s1h": "拍一张照片",
            "how.s1p": "将相机对准酒单、酒标或餐厅菜单。",
            "how.s2h": "PocSomm 读取它",
            "how.s2p": "AI 即刻识别每一款葡萄酒，并补充零售价、性价比评分、评论家评分和品鉴笔记。",
            "how.s3h": "放心点单",
            "how.s3p": "发现最具性价比的一款，找到完美搭配，阅读侍酒师笔记 — 就在餐桌旁。",

            "feat.eyebrow": "你能做什么",
            "feat.h2": "侍酒师的一切本领，尽在口袋",
            "feat.sub": "看懂任何一款葡萄酒的四种方式，随时随地。",

            "wl.kicker": "扫描酒单",
            "wl.h": "点单前就看清明智之选",
            "wl.p": "拍下任意餐厅酒单，PocSomm 为你估算每一瓶的价格。",
            "wl.li1": "每款酒的估算零售价",
            "wl.li2": "性价比标签：超值、价格合理或溢价偏高",
            "wl.li3": "在可获取时显示评论家评分",
            "wl.li4": "能区分按杯售卖与按瓶售卖",

            "bo.kicker": "扫描酒瓶",
            "bo.h": "一眼读懂任何一瓶酒",
            "bo.p": "将相机对准酒标，即刻获得通俗易懂的介绍：这款酒的口感如何，以及适合搭配什么。",
            "bo.li1": "快速品鉴速览 — 风味、酒体与口感",
            "bo.li2": "点按查看完整侍酒师笔记：香气、口感、余味",
            "bo.li3": "侍酒温度、醒酒与陈年建议",

            "fp.kicker": "餐酒搭配",
            "fp.h": "为你的菜肴搭配葡萄酒",
            "fp.p": "拍下菜单，选好菜品，再扫描酒单。PocSomm 会按每款酒与你所点菜肴的契合度排序。",
            "fp.li1": "每款酒清晰的契合度百分比",
            "fp.li2": "每一组搭配背后的理由",
            "fp.li3": "适用于整桌人的点单",

            "ask.kicker": "问问 PocSomm",
            "ask.h": "随叫随到的侍酒师",
            "ask.p": "告诉 PocSomm 你在吃什么，获得配酒建议；或深入内置的葡萄品种百科。",
            "ask.li1": "按菜肴配酒 &mdash; “今晚吃肋眼牛排，开哪一瓶好？”",
            "ask.li2": "热门之选，外加几个大胆而小众的点子",
            "ask.li3": "葡萄品种档案：风味、主要产区与经典搭配",

            "set.kicker": "为你而设",
            "set.h": "因地制宜，贴合你的饮酒场景",
            "set.p": "设置你的语言与本地货币及市场，让每一项价格估算都贴合你的实际 &mdash; “350”在美元和瑞典克朗下含义大不相同。",
            "set.li1": "11 种语言，随时切换",
            "set.li2": "货币与市场设置，提供精准的本地零售价",
            "set.li3": "自定义你的性价比阈值 &mdash; 何为划算，何为溢价过高",
            "set.li4": "可选 1&ndash;5、1&ndash;10 或 1&ndash;20 评分制",

            "walk.eyebrow": "实际演示",
            "walk.h2": "看 PocSomm 如何运作",
            "walk.sub": "你最常用的流程，从头到尾。",
            "walk.t1": "扫描酒单",
            "walk.t2": "扫描酒瓶",
            "walk.t3": "为菜肴匹配酒单",
            "walk.wl1": "拍下酒单",
            "walk.wl2": "添加页面，然后分析",
            "walk.wl3": "确认 &mdash; 查看花费",
            "walk.wl4": "每款酒，即刻定价",
            "walk.wl5": "按性价比、酒庄等排序",
            "walk.wl6": "点按任意一款查看详情",
            "walk.bo1": "对准酒标",
            "walk.bo2": "添加酒瓶，然后分析",
            "walk.bo3": "确认 &mdash; 查看花费",
            "walk.bo4": "即刻获得档案",
            "walk.bo5": "“更多信息”快速了解",
            "walk.bo6": "随时查看完整侍酒师笔记",
            "walk.fp1": "查看包含的内容",
            "walk.fp2": "拍下菜单",
            "walk.fp3": "选好菜品",
            "walk.fp4": "拍下酒单",
            "walk.fp5": "需要时添加更多页面",
            "walk.fp6": "为你匹配（约 20 秒）",
            "walk.fp7": "带百分比的契合排序",
            "walk.fp8": "点按卡片查看“原因”",
            "walk.hint": "&larr; 滑动每一行查看完整流程 &rarr;",

            "more.eyebrow": "还有更多",
            "more.h2": "为真实的品酒时刻而打造",
            "more.m1h": "保存与评分",
            "more.m1p": "每一次扫描都会保存到你的历史记录。为尝过的酒打分，建立属于你自己的回忆酒窖。",
            "more.m2h": "性价比发现",
            "more.m2p": "即刻看清酒单上哪些酒价格合理 — 哪些带着高昂的餐厅溢价。",
            "more.m3h": "11 种语言",
            "more.m3p": "PocSomm 说你的语言，同时保留葡萄酒术语的原文形式。",

            "langs.eyebrow": "通行全球",
            "langs.h2": "支持 11 种语言",
            "langs.sub": "无论你走到哪里，PocSomm 都与你同行。",
            "langs.currency": "应用可以保持你自己的语言，再把货币和市场设置成你所在的国家——这样每个价格估算都以你实际支付的当地货币显示。",

            "price.eyebrow": "简单又公道",
            "price.h2": "价格如何计算",
            "price.p1": "PocSomm <strong>免费下载</strong>，并附赠让你上手的额度。每次扫描会根据规模消耗一到两个额度。",
            "price.p2": "需要更多？随时通过一次性<strong>额度包</strong>充值。无订阅、无账户、无意外 — 而且你剩余的额度永不过期。",

            "priv.eyebrow": "你的数据，由你做主",
            "priv.h2": "从设计之初即注重隐私",
            "priv.p1": "<strong>无需账户。无需注册。</strong>你的扫描、评分和历史记录只存在于你的设备上。",
            "priv.p2": "当 AI 读取照片时，只有图像会被发送到 Google 的 Gemini 服务以提取葡萄酒信息 — 绝不会存储在我们的服务器上（我们根本没有服务器），也绝不会出售。<strong>无广告，无跨应用追踪。</strong>",
            "priv.link": "<a href=\"/privacy-policy\">阅读完整隐私政策 &rarr;</a>",

            "faq.eyebrow": "值得了解",
            "faq.h2": "常见问题",
            "faq.q1": "PocSomm 准确吗？",
            "faq.a1": "PocSomm 使用先进的 AI 读取酒标和酒单，并估算价格、评分和搭配。它表现相当出色 &mdash; 但 AI 也可能出错，因此购买前请务必核实价格和细节。",
            "faq.q2": "需要联网吗？",
            "faq.a2": "需要。PocSomm 在云端分析你的照片，因此扫描和向侍酒师提问都需要网络连接。",
            "faq.q3": "我的数据是私密的吗？",
            "faq.a3": "是的。没有账户，你的扫描、评分和历史记录都留在你的设备上。照片仅发送给 AI 进行读取 &mdash; 绝不存储在我们的服务器上，绝不出售，也没有广告或追踪。",
            "faq.q4": "费用是多少？",
            "faq.a4": "PocSomm 免费下载，并附赠让你上手的额度。需要更多时，可以购买一次性额度包 &mdash; 没有订阅。",
            "faq.q5": "支持哪些货币和地区？",
            "faq.a5": "PocSomm 会按你所选的市场估算价格，并适用于世界各地的酒单和酒瓶。",
            "faq.q6": "需要多大年龄才能使用？",
            "faq.a6": "PocSomm 含有关于酒精饮品的信息，面向达到法定饮酒年龄的成年人（18 岁及以上）。",

            "about.eyebrow": "关于我们",
            "about.h2": "一对夫妻的用心之作",
            "about.p1": "PocSomm 源自我们三十多年来对葡萄酒共同的热爱。一路走来，我们有幸向真正出色的侍酒师学习 &mdash; 其中一些已成为挚友。但我们也曾坐在那些配酒指引并不到位的餐桌旁。",
            "about.p2": "PocSomm 是我们弥合这一缺憾的方式：不是要取代优秀的侍酒师，而是在身边没有侍酒师时，把一位懂行的伙伴装进你的口袋。",
            "about.p3": "由 Melkar, LLC 用心打造 &mdash; 只有我们两个人。",

            "sup.h2": "有问题或建议？",
            "sup.sub": "我们很乐意听到你的声音。欢迎随时通过 <a href=\"mailto:support@pocsomm.com\" style=\"color:var(--burgundy-light);font-weight:600;\">support@pocsomm.com</a> 联系团队。",
            "sup.responsible": "请理性饮酒。过量饮酒有害健康。PocSomm 面向达到法定饮酒年龄的成年人。",

            "foot.privacy": "隐私政策",
            "foot.terms": "服务条款",
            "foot.contact": "联系我们"
        }
    };

    // ---- Loader ----------------------------------------------------------
    var nodes = document.querySelectorAll("[data-i18n]");
    // Capture the inline English as the fallback for each node, once.
    for (var i = 0; i < nodes.length; i++) {
        nodes[i]._en = nodes[i].innerHTML;
    }

    function apply(lang) {
        if (SUPPORTED.indexOf(lang) === -1) { lang = "en"; }
        var dict = I18N[lang] || null;
        document.documentElement.lang = lang;

        var meta = META[lang] || META.en;
        if (meta) {
            document.title = meta.title;
            var md = document.querySelector('meta[name="description"]');
            if (md) { md.setAttribute("content", meta.desc); }
        }

        for (var j = 0; j < nodes.length; j++) {
            var el = nodes[j];
            var key = el.getAttribute("data-i18n");
            if (lang === "en" || !dict || dict[key] == null) {
                el.innerHTML = el._en;
            } else {
                el.innerHTML = dict[key];
            }
        }
    }

    function pickInitial() {
        try {
            var fromUrl = new URLSearchParams(window.location.search).get("lang");
            if (fromUrl && SUPPORTED.indexOf(fromUrl) !== -1) { return fromUrl; }
            var saved = window.localStorage.getItem("pocsomm_lang");
            if (saved && SUPPORTED.indexOf(saved) !== -1) { return saved; }
        } catch (e) { /* private mode / blocked storage — fall through */ }
        var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
        if (SUPPORTED.indexOf(nav) !== -1) { return nav; }
        return "en";
    }

    var current = pickInitial();
    apply(current);

    var select = document.getElementById("langSelect");
    if (select) {
        select.value = current;
        select.addEventListener("change", function () {
            var lang = select.value;
            apply(lang);
            try { window.localStorage.setItem("pocsomm_lang", lang); } catch (e) {}
        });
    }
})();
