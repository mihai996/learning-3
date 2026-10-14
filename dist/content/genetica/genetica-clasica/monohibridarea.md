# Monohibridarea

Monohibridarea urmărește transmiterea unui singur caracter sau, mai precis, a alelelor unui singur locus. Ea este cel mai simplu model pentru a învăța cum se trece de la fenotip la genotip, cum se construiesc gameții și cum se formulează probabilitățile descendenților. Metoda rămâne valabilă și când relația dintre alele nu este dominanță completă; se modifică doar legătura dintre genotip și fenotip.

## Obiective de învățare

La finalul acestei teme, studentul va putea:

- să definească monohibridarea și generațiile P, F1 și F2;
- să stabilească gameții produși de un genotip la un locus;
- să construiască și să interpreteze un pătrat Punnett;
- să diferențieze raportul genotipic de cel fenotipic;
- să rezolve monohibridări cu dominanță completă, incompletă și codominanță;
- să calculeze probabilități pentru mai mulți descendenți independenți.

## Ce este monohibridarea?

O **monohibridare** este o încrucișare în care se urmărește segregarea variantelor unui singur locus. Termenul „monohibrid” desemnează adesea individul heterozigot pentru locusul studiat, de exemplu *Aa*. Părinții pot diferi și la alte gene, însă acestea nu sunt incluse în modelul problemei.

Pentru o analiză corectă trebuie precizate:

- caracterul și fenotipurile observate;
- simbolurile alelelor;
- relația fenotipică dintre alele;
- genotipurile parentale sau informațiile din care pot fi deduse;
- dacă rezultatul cerut este genotipic, fenotipic sau probabilistic.

Notația cu literă mare și mică este potrivită pentru dominanță completă, dar nu trebuie folosită pentru a presupune dominanța înainte ca problema să o precizeze.

## Generațiile unei monohibridări clasice

Să considerăm un locus la care alela *A* determină un fenotip dominant, iar *a* un fenotip recesiv.

### Generația parentală

Se încrucișează două linii pure:

**P: AA × aa**

Părintele *AA* produce numai gameți *A*, iar părintele *aa* numai gameți *a*. Toți descendenții primesc combinația *Aa*.

### Generația F1

**F1: 100% Aa**

Descendenții sunt uniform heterozigoți și manifestă fenotipul dominant în condiții de dominanță completă. Alela *a* nu a dispărut și nu a fost transformată; este prezentă în fiecare individ F1, dar efectul ei fenotipic este mascat la caracterul analizat.

### Generația F2

Prin autofecundarea sau încrucișarea hibrizilor F1:

**Aa × Aa**

fiecare părinte produce două tipuri de gameți, *A* și *a*, fiecare cu probabilitatea 1/2. Combinațiile formează raportul:

**1/4 AA : 1/2 Aa : 1/4 aa**

Raportul genotipic este **1:2:1**, iar raportul fenotipic, pentru dominanță completă, este **3 dominant : 1 recesiv**.

## Pătratul Punnett

Pătratul Punnett enumeră combinațiile posibile ale gameților. Pentru *Aa × Aa*:

|  | A (1/2) | a (1/2) |
|---|---|---|
| **A (1/2)** | AA (1/4) | Aa (1/4) |
| **a (1/2)** | Aa (1/4) | aa (1/4) |

Fiecare căsuță reprezintă o combinație de gameți și probabilitatea ei, nu un descendent obligatoriu. Cele două căsuțe *Aa* se adună: 1/4 + 1/4 = 1/2.

Pătratul nu „produce” raportul, ci îl afișează. Pentru probleme mai complexe, regulile probabilității sunt adesea mai rapide și reduc riscul de a construi tabele foarte mari.

## Pașii de rezolvare

### 1. Stabilirea alelelor și a relației lor

Exemplu: la o plantă, fructul roșu este dominant față de fructul galben. Putem nota *R* pentru alela roșie și *r* pentru alela galbenă. Fenotipul galben identifică sigur genotipul *rr*, dar fenotipul roșu poate însemna *RR* sau *Rr*.

### 2. Scrierea genotipurilor parentale

Nu se poate deduce automat genotipul unui individ dominant. Dacă problema spune că este linie pură, genotipul este *RR*; dacă spune că are un părinte recesiv, individul roșu trebuie să fi primit *r* de la acel părinte și este *Rr*.

### 3. Enumerarea gameților

Un homozigot produce un singur tip de gamet la locusul analizat, iar un heterozigot două tipuri în proporții așteptate egale:

| Genotip | Gameți |
|---|---|
| RR | R |
| Rr | R, r |
| rr | r |

### 4. Combinarea gameților

Gameții se combină într-un pătrat Punnett sau prin regula produsului. Se calculează întâi genotipurile, apoi se traduc în fenotipuri folosind relația dintre alele.

### 5. Formularea rezultatului

Răspunsul trebuie să specifice dacă este proporție, probabilitate sau număr așteptat. „1 *RR* : 1 *Rr*” este un raport genotipic; „toți roșii” este un rezultat fenotipic.

## Încrucișările monohibride fundamentale

Presupunând dominanță completă:

| Încrucișare | Raport genotipic | Raport fenotipic |
|---|---|---|
| AA × AA | 100% AA | 100% dominant |
| AA × Aa | 1/2 AA : 1/2 Aa | 100% dominant |
| AA × aa | 100% Aa | 100% dominant |
| Aa × Aa | 1/4 AA : 1/2 Aa : 1/4 aa | 3/4 dominant : 1/4 recesiv |
| Aa × aa | 1/2 Aa : 1/2 aa | 1/2 dominant : 1/2 recesiv |
| aa × aa | 100% aa | 100% recesiv |

Memorarea tabelului nu înlocuiește raționamentul. Dacă relația dintre alele se schimbă, genotipurile rămân aceleași, dar raportul fenotipic poate fi altul.

## Exemplu rezolvat cu dominanță completă

La mazăre, presupunem că alela *Y* pentru semințe galbene este dominantă față de *y* pentru semințe verzi. O plantă galbenă heterozigotă este autofecundată.

1. Genotip parental: *Yy × Yy*.
2. Gameți: fiecare părinte produce 1/2 *Y* și 1/2 *y*.
3. Descendenți: 1/4 *YY*, 1/2 *Yy*, 1/4 *yy*.
4. Fenotipuri: 3/4 galbene, 1/4 verzi.

Pentru 200 de semințe, numerele așteptate sunt 150 galbene și 50 verzi. Un rezultat precum 146 și 54 este compatibil intuitiv cu modelul, deoarece raportul teoretic nu impune valori exacte. Evaluarea formală a diferenței se poate face prin testul χ².

## Dominanța incompletă

În **dominanța incompletă**, heterozigotul are un fenotip distinct, frecvent intermediar între fenotipurile homozigoților. Dacă *CᴿCᴿ* produce flori roșii, *CᵂCᵂ* flori albe, iar *CᴿCᵂ* flori roz:

**CᴿCᵂ × CᴿCᵂ → 1/4 roșii : 1/2 roz : 1/4 albe.**

Atât raportul genotipic, cât și cel fenotipic sunt 1:2:1. Legea segregării funcționează exact ca în exemplul cu dominanță completă; heterozigotul formează cele două tipuri de gameți. Diferența este că fiecare genotip poate fi recunoscut fenotipic.

Caracterul intermediar nu înseamnă amestec ireversibil. Alelele se păstrează distincte, iar în generația următoare reapar fenotipurile parentale.

## Codominanța

În **codominanță**, produsele ambelor alele sunt detectabile în heterozigot. La locusul ABO, genotipul *IᴬIᴮ* produce fenotipul AB, cu antigene A și B pe eritrocite.

Dacă se încrucișează doi indivizi *Iᴬi × Iᴮi*, gameții sunt *Iᴬ* sau *i*, respectiv *Iᴮ* sau *i*. Descendenții așteptați sunt:

- 1/4 *IᴬIᴮ* — grupa AB;
- 1/4 *Iᴬi* — grupa A;
- 1/4 *Iᴮi* — grupa B;
- 1/4 *ii* — grupa O.

Acesta este tot un calcul la un singur locus, deci este o monohibridare în sens genetic, chiar dacă locusul are mai mult de două alele în populație.

## Încrucișarea reciprocă

Două încrucișări sunt **reciproce** când fenotipurile parentale se inversează între componenta masculină și cea feminină. Pentru o genă autosomală nucleară fără efect matern, rezultatele sunt de obicei aceleași:

**femelă AA × mascul aa** și **femelă aa × mascul AA**.

Rezultate diferite pot indica ereditate legată de sex, efect matern, moștenire citoplasmatică sau alte particularități. Încrucișarea reciprocă este deci un instrument experimental, nu doar o repetare a aceleiași scheme.

## Probabilitatea pentru mai mulți descendenți

Fiecare descendent reprezintă, de regulă, un eveniment independent în modelul mendelian. În *Aa × Aa*, probabilitatea fenotipului recesiv este 1/4.

Probabilitatea ca primii doi descendenți să fie ambii recesivi este:

**1/4 × 1/4 = 1/16.**

Probabilitatea ca niciunul dintre trei descendenți să nu fie recesiv este:

**(3/4)³ = 27/64.**

Probabilitatea ca cel puțin unul dintre trei să fie recesiv se calculează mai simplu prin complement:

**1 − P(niciunul recesiv) = 1 − 27/64 = 37/64.**

Sexul sau genotipul unui copil anterior nu „consumă” o posibilitate și nu modifică probabilitatea următorului, dacă evenimentele sunt independente și nu intervine alt mecanism biologic.

Pentru exact *k* rezultate din *n* încercări se poate folosi distribuția binomială:

**P(k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ**,

unde *p* este probabilitatea rezultatului urmărit, iar *C(n,k)* numărul ordinilor posibile.

Exemplu: probabilitatea ca exact doi dintre patru descendenți din *Aa × Aa* să aibă fenotip recesiv este:

**C(4,2) × (1/4)² × (3/4)² = 6 × 1/16 × 9/16 = 54/256 = 27/128.**

## Deducerea genotipului din descendenți

Un individ cu fenotip recesiv are genotip cunoscut, *aa*, în modelul cu penetranță completă. Un individ dominant poate fi *AA* sau *Aa*. Încrucișarea lui cu un homozigot recesiv se numește **încrucișare-test**:

- dacă părintele necunoscut este *AA*, toți descendenții sunt *Aa* și dominanți;
- dacă este *Aa*, se așteaptă 1/2 *Aa* dominanți și 1/2 *aa* recesivi.

Totuși, un număr mic de descendenți exclusiv dominanți nu demonstrează cu certitudine că părintele este *AA*. Un heterozigot poate produce întâmplător numai descendenți dominanți. Forța concluziei crește cu numărul descendenților analizați.

## Situații care modifică raportul observat

Raportul poate diferi de așteptare din mai multe cauze:

- eșantion mic și fluctuație aleatorie;
- alele letale care elimină un genotip înainte de observare;
- penetranță incompletă sau expresivitate variabilă;
- clasificare fenotipică greșită;
- efecte de mediu;
- segregare distorsionată ori viabilitate diferită a gameților;
- contaminarea încrucișării sau identificarea incorectă a părinților.

Înainte de a invoca o excepție biologică, trebuie verificat dacă genotipurile parentale și ipotezele modelului au fost stabilite corect.

## Capcane frecvente

- Fenotipul dominant nu permite singur diferențierea *AA* de *Aa*.
- Pătratul Punnett oferă probabilități, nu numărul exact de descendenți.
- Raportul 1:2:1 este genotipic în *Aa × Aa* indiferent de dominanță.
- În dominanță incompletă, fenotipul intermediar nu înseamnă amestecarea alelelor.
- Probabilitatea fiecărui descendent se recalculează independent; rezultatele anterioare nu o compensează.
- „Cel puțin unul” se calculează adesea mai ușor ca 1 minus probabilitatea niciunuia.

## De reținut

- Monohibridarea urmărește un singur locus.
- Încrucișarea *AA × aa* produce o F1 uniform heterozigotă.
- În *Aa × Aa*, raportul genotipic este 1:2:1.
- Cu dominanță completă, raportul fenotipic este 3:1; cu dominanță incompletă sau codominanță, clasele pot urma 1:2:1.
- Genotipul se stabilește înainte de traducerea rezultatului în fenotip.
- Pătratul Punnett și regulile probabilității descriu aceleași combinații de gameți.
- Încrucișarea-test poate diferenția probabil un homozigot dominant de un heterozigot.
- Deviația față de raportul așteptat trebuie interpretată statistic și biologic.

## Întrebări de autoevaluare

1. Ce tipuri de gameți și în ce proporții produce un heterozigot *Aa*?
2. Care sunt raporturile genotipic și fenotipic în *Aa × Aa* cu dominanță completă?
3. Cum se schimbă raportul fenotipic dacă heterozigotul are un fenotip intermediar?
4. Care este probabilitatea ca cel puțin unul dintre doi descendenți ai încrucișării *Aa × Aa* să fie *aa*?
5. De ce zece descendenți dominanți într-o încrucișare-test nu demonstrează absolut că părintele necunoscut este *AA*?

## Răspunsuri la întrebările de autoevaluare

1. Produce gameți *A* și *a*, fiecare cu probabilitatea 1/2, în condiții de segregare egală.
2. Raportul genotipic este 1 *AA* : 2 *Aa* : 1 *aa*, iar cel fenotipic 3 dominanți : 1 recesiv.
3. Cele trei genotipuri au fenotipuri distincte, astfel încât raportul fenotipic devine 1:2:1.
4. Este 1 − (3/4)² = 1 − 9/16 = 7/16.
5. Dacă părintele este *Aa*, probabilitatea a zece descendenți dominanți consecutivi este mică, dar nu zero: (1/2)¹⁰.

## Bibliografie și webografie selectivă

- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a 7-a, 2020.
- Griffiths, A. J. F. et al. *An Introduction to Genetic Analysis*. W. H. Freeman, ediția a 12-a, 2020.
- [Mendel — *Experiments on Plant Hybrids*, traducere în limba engleză](https://www.mendelianum.cz/images/files/Mendel-paper-1866-english.pdf).
- [OpenStax Biology 2e — Mendel’s Experiments and the Laws of Probability](https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability).
- [OpenStax Anatomy and Physiology 2e — Patterns of Inheritance](https://openstax.org/books/anatomy-and-physiology-2e/pages/28-7-patterns-of-inheritance).
- [NHGRI — Talking Glossary of Genetic Terms](https://www.genome.gov/genetics-glossary).
