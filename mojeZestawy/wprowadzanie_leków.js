const flashCards = [
    {
        question: 'Wzór i nazwa chemiczna dla: paracetamol',
        answer: 'N-(4-hydroksyfenylo)-acetamid',
        img: 'assets/wzory/Paracetamol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: fenacetyna',
        answer: 'N-(4-etoksyfenylo)-acetamid',
        img: 'assets/wzory/Fenacetyna.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: metamizol sodowy',
        answer: 'N-metylo-N-(1-fenylo-2,3-dimetylo-5-oksopirazolin-4-ylo)-aminometylosiarczyn sodu',
        img: 'assets/wzory/Metamizol sodowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: aminofenazon',
        answer: '1-fenylo-2,3-dimetylo-4-dimetyloamino-pirazolin-5-on',
        img: 'assets/wzory/Aminofenazon.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: kwas acetylosalicylowy',
        answer: 'Kwas 2-acetoksybenzoesowy',
        img: 'assets/wzory/Kwas acetylosalicylowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: salicylamid',
        answer: '2-Hydroksybenzamid',
        img: 'assets/wzory/Salicylamid.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: diklofenak sodowy',
        answer: '[2-[(2,6-Dichlorofenylo)-amino]-fenylo]-octan sodu',
        img: 'assets/wzory/Diklofenak sodowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: ibuprofen',
        answer: 'Kwas 2-[4-(2-metylopropylo)-fenylo]-propanowy',
        img: 'assets/wzory/Ibuprofen.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: ketoprofen',
        answer: 'Kwas 2-(3-benzoilofenylo)-propanowy',
        img: 'assets/wzory/Ketoprofen.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: naproksen',
        answer: 'Kwas 2-(6-metoksynaftalen-2-ylo)-propanowy',
        img: 'assets/wzory/Naproksen.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: kwas tolfenamowy',
        answer: 'Kwas 2-[(3-chloro-2-metylofenylo)-amino]-benzoesowy',
        img: 'assets/wzory/Kwas tolfenamowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: nimesulid',
        answer: 'N-(4-nitro-2-fenoksyfenylo)-metanosulfonamid',
        img: 'assets/wzory/Nimesulid.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: fenylobutazon',
        answer: '4-Butylo-1,2-difenylopirazolidyno-3,5-dion',
        img: 'assets/wzory/Fenylobutazon.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Nitrazepam',
        answer: '5-Fenylo-7-nitro-1,3-dihydro-1,4-benzodiazepin-2-on\nuspokajające nasenne\nAcydymetria w bezwodnym 1:1, Azotynometria 1:1, Spektrofotometria 1:1',
        img: 'assets/wzory/Nitrazepam.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Zolpidemu winian',
        answer: 'Winian N,N-dimetylo-2-[6-metylo-2-(4-metylofenylo)-imidazo[1,2-a]pirydyn-3-ylo]-acetamidu\nuspokajające nasenne\nAcydymetrycznie w bezwodnym 1:2 i Alkalimetrycznie w wodndym 1:2',
        img: 'assets/wzory/Zolpidemu winian.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Klonazepam',
        answer: '5-(2-Chlorofenylo)-7-nitro-1,3-dihydro-1,4-benzodiazepin-2-on\nprzeciwpadaczkowe\nAcydymetria w bezwodnym 1:1; Azotynometria 1:1 i Spektrofotometria VIS 1:1',
        img: 'assets/wzory/Klonazepam.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fenytoina',
        answer: '5,5-Difenyloimidazolidyno-2,4-dion\nprzeciwpadaczkowe\nAlkalimetria w bezwodnym 1:1, Alkalimetrycznie z zastosowaniem AgNO3 1:1',
        img: 'assets/wzory/Fenytoina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas walproinowy',
        answer: 'Kwas 2-propylopentanowy\nprzeciwpadaczkowe\nAlkalimetria w wodnym i bezwodnym',
        img: 'assets/wzory/Kwas walproinowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Propofol',
        answer: '2,6-Di(propan-2-ylo)-fenol\nznieczulające ogólnie\nAlkalimetria w bezwodnym 1:1, Bromianometria 1:2, Spektrofotometria VIS 6:1',
        img: 'assets/wzory/Propofol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Diazepam',
        answer: '7-Chloro-5-fenylo-1-metylo-3H-1,4-benzodiazepin-2-on\npsychotropowe, anksjolityczne\nAcydymetrycznie w bezwodnym 1:1, Azotynometrycznie po hydrolizie 1:1, Spektrofotometrycznie VIS, ChC',
        img: 'assets/wzory/Diazepam.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: LorazepamLorazepam',
        answer: '7-Chloro-5-(2-chlorofenylo)-3-hydroksy-1,3-dihydro-1,4-benzodiazepin-2-on\npsychotropowe, anksjolityczne\nAcydymetria bezwodna 1:1, Alkalimetria bezwodna 1:1, Azotynometria 1:1, Spektrofotometria VIS, ChC',
        img: 'assets/wzory/Lorazepam.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Bromazepam',
        answer: '7-Bromo-5-(2-pirydylo)-1,3-dihydro-2H-1,4-benzodiazepin-2-on\npsychotropowe, anksjolityczne\nAcydymetria bezwodna 1:2!, Azotynometria 1:1, Spektrofotometria VIS, ChC',
        img: 'assets/wzory/Bromazepam.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Karbamazepina',
        answer: '5H-Dibenzo[b,f]azepino-5-karboksamid\nprzeciwpadaczkowe\nMetodą Kjeldahla, Spektorfotometria VIS, ChC',
        img: 'assets/wzory/Karbamazepina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Hydroksyzyny dichlorowodorek',
        answer: 'Dichlorowodorek 2-[2-[4-[(4-chlorofenylo)(fenylo)-metylo]-piperazyn-1-ylo]-etoksy]-etanolu\npsychotropowe, anksjolityczne\nAcydymetria bezwodna 1:2, Alkalimetria wodna 1:2, Argentometria 1:2',
        img: 'assets/wzory/Hydroksyzyny dichlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chloropromazyny chlorowodorek',
        answer: 'Chlorowodorek 3-(2-chlorofenotiazyn-10-ylo)-N,N-dimetylopropan-1-aminy\npsychotropowe, neuroleptyki\nAcydy bez, Alkali wod, Argento 1:1',
        img: 'assets/wzory/Chloropromazyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Flufenazyny dichlorowodorek',
        answer: 'Dichlorowodorek 2-[4-[3-[2-(trifluorometylo)-fenotiazyn-10-ylo]-propylo]-piperazyn-1-ylo]-etanolu\npsychotropowe, neuroleptyk\nAcydy bez, Alkali wod, Argento 1:2',
        img: 'assets/wzory/Flufenazyny dichlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Rysperydon',
        answer: '3-[2-[4-(6-Fluoro-1,2-benzoksazol-3-ilo)-piperydyn-1-ylo]-etylo]-2-metylo-6,7,8,9-tetrahydro-pirydo[1,2-a] pirymidyn-4-on\npsychotropowy, neuroleptyk starej generacji\nAcydy 1:2',
        img: 'assets/wzory/Rysperydon.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Klomipraminy chlorowodorek',
        answer: 'Chlorowodorek 3-(3-chloro-10,11-dihydro-5H-dibenzo[b,f]azepin-5-ylo)-N,N-dimetylopropan-1-aminy\npsychotropowe, przeciwdepresyjne\nAcydy bez, Alkali wod, Argento 1:1',
        img: 'assets/wzory/Klomipraminy chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Opipramolu dichlorowodorek',
        answer: 'Dichlorowodorek 2-[4-[3-(5H-dibenzo[b,f]azepin-5-ylo)-propylo]-piperazyno]-etanolu\npsychotropowy, przeciwdepresyjne\nAcydy bez, Alkali wod, Argento 1:2',
        img: 'assets/wzory/Opipramolu dichlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Amitryptyliny chlorowodorek',
        answer: 'Chlorowodorek 3-(dibenzo[a,d]cykloheptadien-5-ylideno)-N,N-dimetylopropan-1-aminy\npsychotropowe,przeciwdepresyjne\nAcydy bez, Alkali wod, Argento 1:2',
        img: 'assets/wzory/Amitryptyliny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fluoksetyny chlorowodorek',
        answer: 'N-metylo-3-fenylo-3-[4-(trifluorometylo)-fenoksy]-propan-1-amina\npsychotropowe, przeciwdepresyjne\nAcydy bez, Alkali wod, Argento 1:1',
        img: 'assets/wzory/Fluoksetyna.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Amfetaminy siarczan',
        answer: 'Siarczan 1-fenylopropan-2-aminy\npsychotropowe, psychoanaleptyki\nAcydymetrycznie 1:1',
        img: 'assets/wzory/Amfetaminy siarczan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Metamfetamina',
        answer: 'N-metylo-1-fenylopropan-2-amina',
        img: 'assets/wzory/Metamfetamina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Metylofenidat',
        answer: '2-Fenylo-2-(piperydyn-2-ylo)-octan metylu\npsychotropowe, psychoanaleptyki\nAcydy bez, Alkali wod, Argento 1:1',
        img: 'assets/wzory/Metylofenidat.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kofeina',
        answer: '1,3,7-trimetylo-1H,3H,7H-puryno-2,6-dion',
        img: 'assets/wzory/Kofeina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Niketamid',
        answer: 'N,N-Dietylopirydyno-3-karboksyamid',
        img: 'assets/wzory/Niketamid.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Morfiny chlorowodorek i siarczan',
        answer: 'Chlorowodorek 7,8-didehydro-4,5-epoksy-17-metylomorfinano-3,6-diolu',
        img: 'assets/wzory/Morfina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Petydyny chlorowodorek',
        answer: 'Chlorowodorek 1-metylo-4-fenylopiperydyno-4-karboksylanu etylu',
        img: 'assets/wzory/Petydyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Metadonu chlorowodorek',
        answer: 'Chlorowodorek 6-dimetyloamino-4,4-difenyloheptan-3-onu',
        img: 'assets/wzory/Metadonu chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fentanyl',
        answer: 'N-fenylo-N-[1-(2-fenyloetylo)-piperydyn-4-ylo]-propanamid',
        img: 'assets/wzory/Fentanyl.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Tramadolu chlorowodorek',
        answer: 'Chlorowodorek 2-[(dimetyloamino)-metylo]-1-(3-metoksyfenylo)-cykloheksan-1-olu',
        img: 'assets/wzory/Tramadolu chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Naloksonu chlorowodorek',
        answer: 'Chlorowodorek 4,5-epoksy-3,14-dihydroksy-17-(prop-2-enylo)-morfinan-6-onu',
        img: 'assets/wzory/Naloksonu chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Barbital',
        answer: '5,5-Dietylo-1H,3H,5H-pirymidyno-2,4,6-trion\n5,5-Dietylo-1,3-diazinan-2,4,6-trion',
        img: 'assets/wzory/barbital.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Cyklobarbital',
        answer: '5-(Cykloheks-1-enylo)-5-etylo-1H,3H,5H-pirymidyno-2,4,6-trion',
        img: 'assets/wzory/Cyklobarbital.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: cyklobarbital wapnia',
        answer: 'Sól wapniowa 5-(cykloheks-1-enylo)-5-etylo-1H,3H,5H-pirymidyno-2,4,6-trionu',
        img: 'assets/wzory/Cyklobarbital wapnia.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Heksobarbital',
        answer: '5-(Cykloheks-1-enylo)-1,5-dimetylo-1H,3H,5H-pirymidyno-2,4,6-trion',
        img: 'assets/wzory/Heksobarbital.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Tiopental sodowy',
        answer: 'Sól sodowa 5-etylo-5-(1-metylobutylo)-2-tio-1H,5H-pirymidyno-4,6-dionu',
        img: 'assets/wzory/Tiopental sodowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fenobarbital',
        answer: '5-Etylo-5-fenylo-1H,3H,5H-pirymidyno-2,4,6-trion',
        img: 'assets/wzory/Fenobarbital.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: fenobarbital sodu',
        answer: 'Sól sodowa 5-etylo-5-fenylo-1H,3H,5H-pirymidyno-2,4,6-trionu',
        img: 'assets/wzory/Fenobarbital sodu.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Metylofenobarbital',
        answer: '5-Etylo-5-fenylo-1-metylo-1H,3H,5H-pirymidyno-2,4,6-trion',
        img: 'assets/wzory/Metylofenobarbital.png',
    }
];