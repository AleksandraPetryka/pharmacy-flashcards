const flashCards = [
    {
        question: 'Wzór i nazwa chemiczna dla: kodeiny fosforan',
        answer: 'Diwodorofosforan 4,5-epoksy-3-metoksy-17-metylomorfin-7-en-6-olu',
        img: 'assets/wzory34/Kodeiny fosforan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Dekstrometorfanu bromowodorek',
        answer: 'Bromowodorek 3-metoksy-17-metylomorfinanu',
        img: 'assets/wzory34/Dekstrometorfanu bromowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Butamirat',
        answer: '2-Fenylobutanian 2-[2-(dietyloamino)etoksy]-etylu',
        img: 'assets/wzory34/Butamirat.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Benzoesan sodu',
        answer: 'Benzoesan sodu',
        img: 'assets/wzory34/Benzoesan sodu.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Sulfogwajakol',
        answer: 'Sól potasowa kwasu 4-hydroksy-3-metoksybenzenosulfonowego',
        img: 'assets/wzory34/Sulfogwajakol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Acetylocysteina',
        answer: 'Kwas 2-acetamido-3-sulfanylopropionowy',
        img: 'assets/wzory34/Acetylocysteina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Bromohensyny chlorowodorek',
        answer: ' Chlorowodorek N-(2-amino-3,5-dibromobenzylo)-N-metylocykloheksanaminy',
        img: 'assets/wzory34/Bromohensyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Ambroksolu chlorowodorek',
        answer: 'Chlorowodorek 4-(2-amino-3,5-dibromobenzylamino)-cykloheksan-1-olu',
        img: 'assets/wzory34/Ambroksolu chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fenoterolu bromowodorek',
        answer: 'Bromowodorek 1-(3,5-dihydroksyfenylo)-2-[[2-(4-hydroksyfenylo)-1-metyloetylo]-amino]-etanolu\nBromowodorek 5-[1-hydroxy-2-[1-(4-hydroksyfenylo)propan-2-ylamino]etylo]benzeno-1,3-diolu',
        img: 'assets/wzory34/Fenoterolu bromowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Ipratropiowy bromek',
        answer: 'Bromek 3-(3-hydroksy-2-fenylopropanoiloksy)-8-metylo-8-(1-izopropylo)-8-azoniabicyklo[3.2.1]oktanu\nBromek [-8-metylo-8-propan-2-ylo-8-azoniabicyclo[3.2.1]octan-3-ylo] 3-hydroksy-2-fenylopropionianu',
        img: 'assets/wzory34/Ipratropiowy bromek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Teofilina',
        answer: '1,3-Dimetylo-7H-puryno-2,6-dion\n1,3-dimetyloksantyna',
        img: 'assets/wzory34/Teofilina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Teofilina z etylenodiaminą',
        answer: '1,3-Dimetylo-7H-puryno-2,6-dion; etyleno-1,2-diamina (2:1)',
        img: 'assets/wzory34/Teofilina z etylenodiaminą.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Teobromina',
        answer: '3,7-dimetylo-1H,3H,7H-puryno-2,6-dion',
        img: 'assets/wzory34/Teobromina.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kromoglikan sodu',
        answer: 'Sól disodowa kwasu 5,5`-(2-hydroksypropan-1,3-diyloksy)-bis(4-okso-4H-benzopirano-2-karboksylowego)',
        img: 'assets/wzory34/Kromoglikan sodu.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Montelukast',
        answer: 'Sól sodowa kwasu 2-[1-[1-[3-[2-(7-chlorochinolin-2-ylo)-winylo]-fenylo]-3-[2-(1-hydroksy-1-metyloetylo)-fenylo]-propylotiometylo]-cykropropylo]-octowego',
        img: 'assets/wzory34/Montelukast.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: ',
        answer: '',
        img: 'assets/wzory34/.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Klemastyny fumaran',
        answer: 'Wodorofumaran 2-[2-[1-(4-chlorofenylo)-1-fenyloetoksy]-etylo]-1-metylopirolidyny',
        img: 'assets/wzory34/Klemastyny fumaran.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Feniraminy maleinian',
        answer: 'Wodoromaleinian 3-fenylo-N,N-dimetylo-3-(pirydyn-2-ylo)-propan-1-aminy',
        img: 'assets/wzory34/Feniraminy maleinian.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Chlorofenaminy maleinian',
        answer: 'Wodoromaleinian 3-(4-chlorofenylo)-N,N-dimetylo-3-(pirydyn-2-ylo)-propan-1-aminy',
        img: 'assets/wzory34/Chlorofenaminy maleinian.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Cetyryzyny dichlorowodorek',
        answer: 'Dichlorowodorek kwasu 2-[2-[4-[(4-chlorofenylo)-fenylometylo]-piperazyn-1-ylo]-etoksy]-octowego',
        img: 'assets/wzory34/Cetyryzyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Feksofenadyny chlorowodorek',
        answer: 'Chlorowodorek kwasu 2-[4-[(1-hydroksy-4-[4-(hydroksydifenylometylo)-piperydyn-1-ylo]-butylo]-fenylo]-2-metylopropanowego',
        img: 'assets/wzory34/Feksofenadyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Loratadyna',
        answer: '4-(8-Chloro-5,6-dihydrobenzo[5,6]cyklohepta[1,2-b]pirydyn-11-ylideno)-piperydyno-1-karboksylan etylu',
        img: 'assets/wzory34/Loratadyna.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: ',
        answer: '',
        img: 'assets/wzory34/.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Zasadowy galusan bizmutu',
        answer: 'Hydrat kwasu 4-hydroksy-1,3,2λ^2-benzodioksabizmuto-6-karboksylowego',
        img: 'assets/wzory34/Zasadowy galusan bizmutu.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Cynku tlenek',
        answer: '',
        img: 'assets/wzory34/Cynku tlenek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Tymol',
        answer: '2-izopropylo-5-metylofenol',
        img: 'assets/wzory34/Tymol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Fenylu salicylan',
        answer: '2-Hydroksybenzoesan fenylu',
        img: 'assets/wzory34/Fenylu salicylan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Benzalkoniowy chlorek',
        answer: '',
        img: 'assets/wzory34/Benzalkoniowy chlorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Etakrydyny mleczan',
        answer: '2-Hydroksypropionian 7-etoksyakrydyno-3,9-diaminy',
        img: 'assets/wzory34/Etakrydyny mleczan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas benzoesowy',
        answer: '',
        img: 'assets/wzory34/Kwas benzoesowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas mlekowy',
        answer: 'Kwas 2-hydroksypropanowy',
        img: 'assets/wzory34/Kwas mlekowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas salicylowy',
        answer: 'Kwas 2-hydroksybenzoesowy',
        img: 'assets/wzory34/Kwas salicylowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Klotrymazol',
        answer: '1-[(2-chlorofenylo)-difenylometylo]-1H-imidazol',
        img: 'assets/wzory34/Klotrymazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Ketokonazol',
        answer: '1-[4-[4-[[2-(2,4-Dichlorofenylo)-2-(1H-imidazol-1-ilometylo)-1,3-dioksolan-4-ylo]-metoksy]-fenylo]-piperazyn-1-ylo]-etanon',
        img: 'assets/wzory34/Ketokonazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: ',
        answer: '',
        img: 'assets/wzory34/.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Kwas cytrynowy',
        answer: 'Kwas 2-hydroksypropano-1,2,3-trikarboksylowy',
        img: 'assets/wzory34/Kwas cytrynowy.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Magnezu tlenek',
        answer: 'Tlenek magnezu. Przeczyszczające, neutralizujące HCl\nkompleksometrycznie (czerń eriochromowa), alkacymetrycznie (HCl potem NaOH) i grawimetrycznie (MgNH4PO4 -> Mg2P2O7) ',
        img: 'assets/wzory34/Magnezu tlenek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Magnezu węglan',
        answer: 'Węglan magnezu. Neutralizujące HCl i przeczyszczające.\nKompleksometrycznie (MgCl2), alkacymetrycznie (H2SO4 potem NaOH) i grawimetrycznie (do MgO a potem MgNH4PO4 -> Mg2P2O7)',
        img: 'assets/wzory34/Magnezu węglan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Glinu wodorotlenek',
        answer: 'Wodorotlenek glinu. Neutralizujące HCl, ściągające i zapierające.\nKompleksometrycznie (EDTA, Bi, oranż ksylenolowy), grawimetrycznie (Al2O3)',
        img: 'assets/wzory34/Glinu wodorotlenek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Wapnia węglan',
        answer: 'Węglan wapnia. Neutralizujące HCl, ściągające i zapierające.\nKompleksometrycznie bezpośrednio (mureksyd i EDTA); odwrócona (czerń eriochromowa), alkacymetrycznie (HCl potem NaOH) ',
        img: 'assets/wzory34/Węglan wapnia.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Ranitydyny chlorowodorek',
        answer: 'Chlorowodorek 1- N`-[2-[[5-[(dimetyloamino)metylo]-furan-2-ylo]-metylosulfanylo]etylo]-1-N-metylo-2-nitroeteno-1,1-diaminy',
        img: 'assets/wzory34/Ranitydyny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Omeprazol',
        answer: '6-Metoksy-2-[(4-metoksy-3,5-dimetylopirydyn-2-ylo)-metylosulfinylo]-1Hbenzimidazol',
        img: 'assets/wzory34/Omeprazol.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Magnezu siarczan',
        answer: 'Siarczan(VI) magnezu. Przeczyszczające przez zwiększenie ciśnienia osmotycznego w jelitach.Czynny osmotycznie\nKompleksometrycznie bezpośrednio (czerń eriochromowa i EDTA)',
        img: 'assets/wzory34/Magnezu siarczan.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Bisakodyl',
        answer: 'Dioctan 4,4`-(pirydyn-2-ylometyleno)-difenylu',
        img: 'assets/wzory34/Bisakodyl.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Loperamidu chlorowodorek',
        answer: 'Chlorowodorek 4-[4-(4-chlorofenylo)-4-hydroksypiperydyn-1-ylo]-2,2-difenylo-N,N-dimetylobutanamidu',
        img: 'assets/wzory34/Loperamidu chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Papaweryny chlorowodorek',
        answer: 'Chlorowodorek 1-(3,4-dimetoksybenzylo)-6,7-dimetoksyizochinoliny\nChlorowodorek 1-[(3,4-dimetoksyfenylo)metylo]-6,7-dimetoksyizochinoliny',
        img: 'assets/wzory34/Papaweryny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Drotaweryny chlorowodorek',
        answer: 'Chlorowodorek 1-(3,4-dietoksybenzylideno)-6,7-dietoksy-3,4-dihydro-2H-izochinoliny\nChlorowodorek 1-[(3,4-dietoksyfenylo)metylidene]-6,7-dietoksy-3,4-dihydro-2H-izochinoliny',
        img: 'assets/wzory34/Drotaweryny chlorowodorek.png',
    },
    {
        question: 'Wzór i nazwa chemiczna dla: Mesalazyna',
        answer: 'Kwas 5-amino-2-hydroksybenzoesowy',
        img: 'assets/wzory34/Masalazyna.png',
    }
];