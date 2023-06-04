const flashCards = [
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Agrimoniae herba, ziele rzepiku\nAgrimonia eupatoria, rzepik pospolity\nRosaceae, różowate',
        img: 'assets/zaliczenie substancje/Agrimoniae herba.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Bistortae rhizoma, kłącze wężownika\nPolygonum bistorta Rdest wężownik\nPolygonaceae, rdestowate',
        img: 'assets/zaliczenie substancje/Bistortae rhizoma.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Aroniae fructus - owoc aronii\nAronia melanocarpa – aronia wielkoowocowa\nRosaceae – Różowate',
        img: 'assets/zaliczenie substancje/Aroniae fructus.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Calendulae flos, kwiat nagietka (koszyczek)\nCalendula officinalis, nagietek lekarski\nAsteraceae, astrowate',
        img: 'assets/zaliczenie substancje/Calendulae flos.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Cichorii radix, korzeń podróżnika\nCichorium intybus, Cykoria podróżnik\nAsteraceae, Astrowate',
        img: 'assets/zaliczenie substancje/Cichorii radix.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Convallariae majalis herba - ziele konwalii majowej\nConvallaria majalis - konwalia majowa\nAsparagaceae (Liliaceae) – Szparagowate (Liliowate)',
        img: 'assets/zaliczenie substancje/Convallariae herba.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Crataegi fructus - owoc głogu\nCrataegus monogyna – głóg jednoszyjkowy\nCrataegus oxyacantha – głóg dwuszyjkowy\nRosaceae - Różowate',
        img: 'assets/zaliczenie substancje/Crataegi fructus.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Curcumae longae rhizoma\nCurcumae xanthorrhizae rhizoma\nKłącze ostryżu długiego, kłącze ostryżu jawajskiego\nCurcuma longa, Curcuma xanthorrhiza\nZingiberaceae, Imbirowate',
        img: 'assets/zaliczenie substancje/Curcumae rhizoma.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Cynarae folium, liście karczocha\nCynara scolymus, karczoch zwyczajny\nAsteraceae, Astrowate',
        img: 'assets/zaliczenie substancje/Cynarae folium.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Digitalis lanatae folium – liść naparstnicy wełnistej\nDigitalis lanata – naparstnica wełnista\nPlantaginaceae – Babkowate',
        img: 'assets/zaliczenie substancje/Digitalis lanatae folium.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Digitalis purpureae folium – liść naparstnicy purpurowej\nDigitalis purpurea – naparstnica purpurowa\nPlantaginaceae – Babkowate',
        img: 'assets/zaliczenie substancje/Digitalis purpureae folium.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Echinaceae purpureae herba - ziele jeżówki purpurowej\nEchinacea purpurea - jeżówka purpurowa\nAsteraceae, Astrowate, ',
        img: 'assets/zaliczenie substancje/Echinaceae purpureae herba.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Galla, dębianka (galas dębowy)\nQuercus infectoria, dąb galasowy\nFagaceae, bukowate',
        img: 'assets/zaliczenie substancje/Galla.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Ginseng radix, korzeń żeń-szenia\nPanax ginseng, Żeń-szeń prawdziwy (azjatycki-koreański)\nAraliaceae, Araliowate',
        img: 'assets/zaliczenie substancje/Ginseng radix.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Liquiritae radix, korzeń lukrecji (syn. Glycyrrhizae radix)\nGlycyrrhiza glabra, lukrecja gładka, Glycyrrhiza inflata, Glycyrrhiza uralensis, lukrecja chińska\nFabaceae, bobowate',
        img: 'assets/zaliczenie substancje/Glycyrrhizae radix.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Hederea folium, liść  bluszczu\nHedera  helix, bluszcz pospolity\nAraliaceae, araliowate',
        img: 'assets/zaliczenie substancje/Hederae folium.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Hippocastani semen, nasiona kasztanowca\nAesculus hippocastanum, kasztanowiec zwyczajny\nHippocastanaceae, kasztanowate',
        img: 'assets/zaliczenie substancje/Hippocastani semen.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Myrtilli fructus, owoc borówki czernicy\nVaccinium myrtillus, borówka czernica\nEricaceae, wrzosowate',
        img: 'assets/zaliczenie substancje/Myrtilli fructus.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Oxycocci fructus - owoc żurawiny błotnej\nVaccinium oxycoccos - żurawina błotna\nEricaceae – Wrzosowate',
        img: 'assets/zaliczenie substancje/Oxycocci fructus.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Quercus cortex, kora dębu\nQuercus robur, dąb szypułkowy\nQuercus petraea, dąb\nQuercus pubescens, dąb omszony\nFagaceae, bukowate',
        img: 'assets/zaliczenie substancje/Quercus cortex.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Rubi fruticosi folium, liść jeżyny\nRubus fruticosus, jeżyna fałdowana\nRosaceae, różowate',
        img: 'assets/zaliczenie substancje/Rubi fruticosi folium.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Sambuci fructus – owoc bzu czarnego\nSambucus nigra - bez czarny\nAdoxaceae (Caprifoliaceae) - Piżmaczkowate(Przewiertniowate)',
        img: 'assets/zaliczenie substancje/Sambuci fructus.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Taraxaci officinalis radix, korzeń mniszka\nTaraxacum officinale, mniszek lekarski\nAsteraceae , astrowate',
        img: 'assets/zaliczenie substancje/Taraxaci radix.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Tormentillae rhizoma, kłącze pięciornika\nPotentilla erecta pięciornik kurze ziele\nRosaceae, różowate',
        img: 'assets/zaliczenie substancje/Tormentillae rhizoma.png',
        showImgInQuestion: true,
    },
    {
        question: 'Systematyka, chemizm, działanie, zastosowanie dla: ',
        answer: 'Urticeae folium, Liść pokrzywy\nUrtica dioica - pokrzywa zwyczajna\nUrtica urens - pokrzywa żegawka\nUrticaceae, pokrzywowate',
        img: 'assets/zaliczenie substancje/Utriceae folium.png',
        showImgInQuestion: true,
    }
];