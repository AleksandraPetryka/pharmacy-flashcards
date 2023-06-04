const flashCards = [
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas p-aminosalicylowy',
        answer: 'kwas 4­-Amino­-2-hydroksybenzoesowy\nprzeciwgruźlicze\nAzotyno, foto, Alkali wod/bezwod, Bromiano 1:6',
        img: 'assets/wzory34/Kwas p-aminosalicylowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sodu aminosalicylan',
        answer: '4-­Amino­-2-­hydroksybenzoesan sodu\nprzeciwgruźlicze\nAzotyno, foto, Bromiano 1:6, Acydy 1:2 i 1:1, Alkali 1:1',
        img: 'assets/wzory34/Sodu aminosalicylan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Izoniazyd',
        answer: 'Hydrazyd kwasu 4-pirydynokarboksylowego\nprzeciwgruźlicze\nAlkali 1:1, Acydy 1:1 i 1:2, redoksy 1:4, Azotyno, foto, Bromiano 1:4, jodometrycznie 1:4',
        img: 'assets/wzory34/Izoniazyd.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Etionamid',
        answer: '2-Etylopirydyno-4-karbotioamid\nprzeciwgruźlicze\nAcydy 1:1 i Alkali z AgNO3 1:1',
        img: 'assets/wzory34/Etionamid.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chloramfenikol',
        answer: '2,2-Dichloro-N-[1,3-dihydroksy-1-(4-nitrofenylo)-propan-2-ylo]-acetamid\nprzeciwbakteryjny antybiotyk\nAcydy bezwod po hydrolizie, Azotyno po redukcji, Tytanometrycznie 1:6',
        img: 'assets/wzory34/Chloramfenikol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfacetamid sodowy',
        answer: 'N-(4-aminobenzenosulfonylo)-acetamid sodu\nchemioterapeutyk, przzecibakteryjny\nAcydy, Argento, Azotyno, Bromiano 1:4, foto',
        img: 'assets/wzory34/Sulfacetamid sodowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfafurazol',
        answer: '4-Amino-N-(3,4-dimetylo-1,2-oksazol-5-ilo)-benzenosulfonamid\nch,p/b\nAlkali, Acydy, Argento, Azotyno, Bromiano, foto',
        img: 'assets/wzory34/Sulfafurazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfametoksazol',
        answer: '4-Amino-N-(5-metylo-1,2-oksazol-3-ilo)-benzenosulfonamid\nch, p/b\nAlkali, Acydy, Argento, Azotyno, foto',
        img: 'assets/wzory34/Sulfametoksazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfametyzol',
        answer: '4-Amino-N-(5-metylo-1,3,4-tiadiazol-2-ilo)-benzenosulfonamid\nAlkali, Acydy, Argento, Azotyno, foto',
        img: 'assets/wzory34/Sulfametyzol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfatiazol i sól sodowa',
        answer: '4-Amino-N-(1,3-tiazol-2-ilo)-benzenosulfonamid\nAlkali, Acydy, Argento, Azotyno, Bromiano 1:6, foto',
        img: 'assets/wzory34/Sulfatiazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Metronidazol',
        answer: '2-(2-Metylo-5-nitro-1H-imidazol-1-ilo)-etanol\nprzeciwpierwoniakowy\nAcydy bezwod 1:1 i spektrofoto vis',
        img: 'assets/wzory34/Metronidazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chininy HCl',
        answer: 'Chlorowodorek (5-etenylo-1-azabicyklo[2.2.2]oktan-2-ylo)-(6-metoksychinolin-4-ylo)-metanolu',
        img: 'assets/wzory34/Chininy chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chininy siarczan',
        answer: 'Siarczan (5-etenylo-1-azabicyklo[2.2.2]oktan-2-ylo)-(6-metoksychinolin-4-ylo)-metanolu',
        img: 'assets/wzory34/Chininy siarczan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chlorochiny siarczan',
        answer: 'Siarczan N4-(7-chlorochinolin-4-ylo)-N1,N1-dietylopentano-1,4-diaminy\nAcydy w bezwodnym 1:1',
        img: 'assets/wzory34/Chlorochiny siarczan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chlorochiny diwodorofosforan',
        answer: 'Bis(diwodorofosforan) N4-(7-chlorochinolino-4-ylo)-N1,N1-dietylopentano-1,4-diaminy\nacydy w bezwodnym 1:2',
        img: 'assets/wzory34/Chlorochiny diwodorofosforan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Amoksycylina sodowa',
        answer: '6-[[2-amino-2-(4-hydroksyfenylo)-acetylo]-amino]-3,3-dimetylo-7-okso-4-tia-1-azabicyklo[3.2.0]heptano-2-karboksylan sodu',
        img: 'assets/wzory34/Amoksycylina sodowa.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas klawulanowy',
        answer: 'kwas 3-(2-hydroksyetylideno)-7-okso-4-oksa-1-azabicyklo[3.2.0]heptano-2-karboksylowy',
        img: 'assets/wzory34/Kwas klawulanowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Cyprofloksacyny chlorowodorek',
        answer: 'chlorowodorek 1-cyklopropylo-6-fluoro-4-okso-7-(piperazyn-1-ylo)-chinolino-3-karboksylowy',
        img: 'assets/wzory34/Cyprofloksacyny chlorowodorek.png',
    }
];