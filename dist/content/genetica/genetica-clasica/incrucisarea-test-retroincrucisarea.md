# Încrucișarea-test și retroîncrucișarea

Încrucișarea-test și retroîncrucișarea folosesc descendenții pentru a obține informații despre genotip sau pentru a recupera fondul genetic al unui părinte. Ele pot arăta asemănător în scheme, dar răspund la întrebări diferite: încrucișarea-test este în primul rând un instrument de analiză genetică, iar retroîncrucișarea este un plan de împerechere cu un părinte sau cu o linie apropiată de acesta.

## Obiective de învățare

La finalul acestei teme, studentul va putea:

- să definească încrucișarea-test și retroîncrucișarea;
- să distingă cazurile în care aceeași încrucișare aparține ambelor categorii;
- să deducă genotipul unui individ cu fenotip dominant din descendenți;
- să interpreteze o încrucișare-test dihibridă;
- să calculeze probabilitatea unor rezultate neinformative într-un eșantion finit;
- să explice utilizarea retroîncrucișării în ameliorare și efectul linkage-ului.

## Problema genotipului necunoscut

Cu dominanță completă, un individ cu fenotip recesiv are genotipul *aa*, dar unul cu fenotip dominant poate fi *AA* sau *Aa*. Observarea individului nu rezolvă ambiguitatea. Este necesară o încrucișare în care gameții lui să devină detectabili prin fenotipurile descendenților.

Un partener *aa* produce numai gameți *a*. Prin urmare, alela transmisă de părintele necunoscut determină direct genotipul descendentului:

- gametul *A* produce *Aa*, fenotip dominant;
- gametul *a* produce *aa*, fenotip recesiv.

Homozigotul recesiv funcționează astfel ca un **tester genetic**.

## Încrucișarea-test

**Încrucișarea-test** este încrucișarea unui individ cu genotip necunoscut, de obicei cu fenotip dominant, cu un individ homozigot recesiv la locusurile analizate. Scopul este deducerea genotipului necunoscut din clasele descendenților.

### Cazul homozigotului dominant

Dacă individul necunoscut este *AA*:

**AA × aa → 100% Aa**, toți cu fenotip dominant.

### Cazul heterozigotului

Dacă individul necunoscut este *Aa*:

**Aa × aa → 1/2 Aa : 1/2 aa**, adică 1 dominant : 1 recesiv.

Apariția chiar și a unui descendent recesiv demonstrează, în condițiile modelului, că părintele dominant a transmis alela *a* și este heterozigot. În schimb, absența descendenților recesivi nu demonstrează absolut că părintele este *AA*, deoarece un heterozigot poate produce întâmplător numai gameți *A* într-un eșantion mic.

## Certitudine și probabilitate într-o încrucișare-test

Dacă părintele necunoscut este de fapt *Aa*, probabilitatea ca un descendent al încrucișării cu *aa* să fie dominant este 1/2. Probabilitatea ca toți cei *n* descendenți să fie dominanți este:

**P(toți dominanți | Aa) = (1/2)ⁿ.**

| Număr de descendenți dominanți consecutivi | Probabilitate dacă părintele este Aa |
|---:|---:|
| 1 | 1/2 = 0,5 |
| 4 | 1/16 = 0,0625 |
| 7 | 1/128 ≈ 0,0078 |
| 10 | 1/1024 ≈ 0,0010 |

Pe măsură ce numărul descendenților exclusiv dominanți crește, ipoteza heterozigoției devine mai puțin plauzibilă, dar concluzia rămâne statistică. Formularea „probabil homozigot” este mai riguroasă decât „dovedit homozigot” dacă nu există informație moleculară sau genealogică suplimentară.

### Calcularea unei mărimi minime a familiei

Dacă dorim ca probabilitatea de a rata heterozigotul să fie sub 5%, alegem *n* astfel încât:

**(1/2)ⁿ < 0,05.**

Pentru *n = 4*, probabilitatea este 0,0625; pentru *n = 5*, este 0,03125. Sunt necesari cel puțin cinci descendenți exclusiv dominanți pentru ca această probabilitate condiționată să scadă sub 5%, presupunând segregare 1:1 și observații independente.

Acest calcul nu oferă direct probabilitatea ca părintele să fie *AA*; aceea depinde și de probabilitățile inițiale ale genotipurilor. El măsoară cât de des un heterozigot ar produce rezultatul observat.

## Încrucișarea-test dihibridă

Pentru două locusuri, un individ *AaBb* poate fi testat cu *aabb*:

**AaBb × aabb.**

Testerul produce numai gameți *ab*. Dacă locusurile se asortează independent, dihibridul produce *AB*, *Ab*, *aB* și *ab* în proporții egale, iar descendenții sunt:

| Gamet de la AaBb | Descendent | Fenotip relativ |
|---|---|---|
| AB | AaBb | dominant A, dominant B |
| Ab | Aabb | dominant A, recesiv B |
| aB | aaBb | recesiv A, dominant B |
| ab | aabb | recesiv A, recesiv B |

Raportul așteptat este **1:1:1:1**. Fiecare clasă de descendenți reflectă direct un tip de gamet al părintelui heterozigot.

### Detectarea linkage-ului

Dacă genele sunt înlănțuite, cele patru clase nu sunt în general egale. Să presupunem că faza este *AB/ab*. Clasele *AaBb* și *aabb* provin din gameți parentali *AB* și *ab* și sunt de obicei mai frecvente. Clasele *Aabb* și *aaBb* provin din gameți recombinanți *Ab* și *aB* și sunt mai rare.

Frecvența de recombinare se estimează prin:

**r = numărul descendenților recombinanți / numărul total al descendenților.**

Pentru 420 parentali și 80 recombinanți din 500:

**r = 80/500 = 0,16 = 16%.**

Pentru distanțe mici, aceasta corespunde aproximativ la 16 unități de hartă sau centimorgani. La distanțe mari, crossing-over-urile multiple pot masca recombinarea, astfel încât procentul observat subestimează numărul real de schimburi. Cartografierea detaliată este tratată separat.

## Încrucișarea-test pentru mai multe locusuri

Un polihibrid poate fi încrucișat cu un tester recesiv la toate locusurile, de exemplu:

**AaBbCc × aabbcc.**

Dacă toate cele trei locusuri sunt independente, heterozigotul produce opt tipuri de gameți, fiecare cu probabilitatea 1/8, și sunt așteptate opt clase egale de descendenți. Dacă unele gene sunt înlănțuite, distribuția claselor permite identificarea combinațiilor parentale și recombinante.

Utilitatea scade dacă fenotipurile nu identifică sigur genotipurile. Dominanța incompletă poate fi informativă, dar penetranța incompletă, efectele mediului sau epistazia pot ascunde clasele și cer markeri moleculari.

## Retroîncrucișarea

**Retroîncrucișarea** sau **backcross-ul** este încrucișarea unui hibrid cu unul dintre părinții săi ori cu o linie genetic foarte asemănătoare părintelui. Descendentul rezultat este o generație de retroîncrucișare, notată frecvent BC1 sau N2, în funcție de convenție.

Pornind de la:

**P: AA × aa → F1: Aa**,

sunt posibile două retroîncrucișări:

- cu părintele dominant: *Aa × AA* → 1/2 *AA* : 1/2 *Aa*, toți dominanți;
- cu părintele recesiv: *Aa × aa* → 1/2 *Aa* : 1/2 *aa*.

A doua este simultan retroîncrucișare și încrucișare-test. Prima este retroîncrucișare, dar nu testcross clasic, deoarece părintele *AA* nu dezvăluie alela transmisă de hibrid printr-un fenotip recesiv.

## Diferența dintre cele două concepte

| Caracteristică | Încrucișare-test | Retroîncrucișare |
|---|---|---|
| Scop principal | deducerea genotipului sau analiza gameților | revenirea către fondul genetic al unui părinte |
| Partener | homozigot recesiv la locusurile urmărite | unul dintre părinți sau o linie echivalentă |
| Necesită relație parentală | nu | da, prin definiția schemei |
| Rezultat informativ clasic | 1:1 la un heterozigot monohibrid | depinde de părintele recurent și de locusuri |
| Poate fi ambele | da, când F1 este încrucișat cu părintele recesiv | da, în aceeași situație |

Un individ dominant de origine necunoscută încrucișat cu un tester *aa* participă la o încrucișare-test, dar nu neapărat la o retroîncrucișare, deoarece testerul poate să nu fie părintele sau linia parentală.

## Retroîncrucișarea în ameliorare

În ameliorarea plantelor și animalelor, retroîncrucișarea este utilizată pentru transferul unui caracter dintr-o linie **donatoare** într-o linie valoroasă numită **părinte recurent**. Donatorul poate furniza, de exemplu, o alelă de rezistență, iar părintele recurent are ansamblul de caractere agronomice dorite.

Schema generală este:

1. se încrucișează părintele recurent cu donatorul;
2. în F1 se identifică indivizii care poartă alela țintă;
3. aceștia sunt retroîncrucișați cu părintele recurent;
4. la fiecare generație se selectează din nou purtătorii alelei țintă;
5. după mai multe retroîncrucișări, se autofecundează sau se împerechează purtătorii pentru fixarea alelei, dacă este necesar.

Fără selecție la locusul țintă, alela donatorului s-ar putea pierde. Pentru o alelă recesivă, fenotipul poate fi mascat în heterozigoți, astfel încât testarea descendenței sau markerii moleculari sunt deosebit de utili.

## Recuperarea fondului genetic recurent

În medie, F1 conține 1/2 din genomul fiecărui părinte. La fiecare retroîncrucișare cu părintele recurent, jumătate din componenta nerecurentă rămasă este înlocuită în așteptare.

După *n* retroîncrucișări, proporția medie a genomului părintelui recurent este:

**1 − (1/2)ⁿ⁺¹.**

| Generație | Proporție medie a genomului recurent |
|---|---:|
| F1 | 50% |
| BC1 | 75% |
| BC2 | 87,5% |
| BC3 | 93,75% |
| BC4 | 96,875% |
| BC5 | 98,4375% |
| BC6 | 99,21875% |

Valorile sunt medii teoretice. Un individ concret poate păstra mai mult sau mai puțin ADN donator, iar regiunea din jurul alelei selectate este reținută mai frecvent.

## Linkage drag și selecția asistată de markeri

Segmentul donator care conține alela dorită include și loci vecini. Dacă aceștia au efecte nefavorabile, transmiterea lor împreună cu gena țintă se numește **linkage drag**. Recombinarea în apropierea locusului poate reduce dimensiunea segmentului, dar evenimentele utile pot fi rare.

Markerii moleculari pot susține trei tipuri de selecție:

- **selecția directă** pentru alela sau regiunea țintă;
- **selecția recombinantă** pentru crossing-over-uri apropiate care reduc segmentul donator;
- **selecția fondului genetic** pentru indivizi cu proporție mare din genomul recurent.

Retroîncrucișarea asistată de markeri poate accelera recuperarea fondului genetic, dar eficiența depinde de densitatea markerilor, mărimea populației, recombinare și calitatea fenotipării.

## Încrucișarea-test ca instrument experimental

Pe lângă deducerea genotipului, testcross-ul poate fi utilizat pentru:

- măsurarea tipurilor de gameți produși de un heterozigot;
- testarea asortării independente;
- identificarea fazei de cuplaj sau repulsie;
- estimarea frecvenței de recombinare;
- detectarea distorsiunii de segregare sau a viabilității diferențiate.

Datele trebuie însă comparate statistic cu raportul așteptat. O abatere moderată de la 1:1 ori 1:1:1:1 poate apărea prin fluctuație de eșantionare; testul χ² ajută la evaluarea compatibilității.

## Limite și surse de eroare

Interpretarea simplă presupune dominanță completă, penetranță ridicată, fenotipuri corect clasificate și viabilitate egală. Rezultatul poate fi distorsionat de:

- alele letale sau subviabile;
- diferențe între succesul gameților;
- efecte materne și moștenire citoplasmatică;
- gene legate de sex;
- epistazie și caractere dificil de observat;
- contaminarea polenului sau paternitatea incertă;
- eșantion insuficient.

În organismele cu generație lungă sau puțini descendenți, un testcross clasic poate fi nepractic ori neetic. Genotiparea moleculară poate identifica direct alelele, deși și aceasta necesită validare și nu înlocuiește automat analiza funcțională.

## Capcane frecvente

- Orice testcross folosește un tester recesiv, dar nu orice testcross este retroîncrucișare.
- Orice încrucișare a F1 cu un părinte este retroîncrucișare, dar numai cea cu părintele recesiv este testcross clasic.
- Toți descendenții dominanți nu demonstrează absolut homozigoția părintelui necunoscut într-un eșantion finit.
- Raportul 1:1:1:1 al testcross-ului dihibrid presupune asortare independentă.
- Frecvența recombinanților nu poate depăși 50% în analiza cu doi loci.
- Recuperarea medie a genomului recurent nu înseamnă că fiecare individ are exact acel procent.

## De reținut

- Încrucișarea-test dezvăluie alelele transmise de un individ prin împerecherea cu un homozigot recesiv.
- *Aa × aa* produce raportul 1 *Aa* : 1 *aa*.
- Absența clasei recesive susține homozigoția dominantă numai probabilistic și depinde de mărimea eșantionului.
- Testcross-ul dihibrid produce 1:1:1:1 pentru locusuri independente și evidențiază clase parentale și recombinante pentru gene înlănțuite.
- Retroîncrucișarea unește hibridul cu unul dintre părinți sau cu o linie echivalentă.
- Testcross-ul cu părintele recesiv este un caz particular de retroîncrucișare.
- În ameliorare, retroîncrucișările repetate transferă o alelă donatoare și recuperează progresiv fondul genetic recurent.
- Linkage drag-ul poate fi redus prin recombinare și selecție asistată de markeri.

## Întrebări de autoevaluare

1. Ce rezultate sunt așteptate când un individ dominant necunoscut este *Aa* și este încrucișat cu *aa*?
2. Care este probabilitatea ca un heterozigot testat cu *aa* să producă șase descendenți dominanți consecutivi?
3. De ce testcross-ul *AaBb × aabb* este util pentru detectarea linkage-ului?
4. Care este diferența definitorie dintre încrucișarea-test și retroîncrucișare?
5. Ce proporție medie din genomul părintelui recurent este așteptată în BC3?

## Răspunsuri la întrebările de autoevaluare

1. Se așteaptă 1/2 *Aa* dominanți și 1/2 *aa* recesivi.
2. (1/2)⁶ = 1/64 ≈ 0,0156.
3. Fenotipul fiecărui descendent reflectă gametul heterozigotului; excesul claselor parentale față de recombinante indică transmiterea înlănțuită.
4. Testcross-ul este definit de partenerul homozigot recesiv și scopul diagnostic; retroîncrucișarea este definită de împerecherea hibridului cu un părinte sau cu linia parentală.
5. BC3 conține în medie 1 − (1/2)⁴ = 15/16 = 93,75% genom recurent.

## Bibliografie și webografie selectivă

- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a 7-a, 2020.
- Acquaah, G. *Principles of Plant Genetics and Breeding*. Wiley-Blackwell, ediția a 2-a, 2012.
- Allard, R. W. *Principles of Plant Breeding*. Wiley, ediția a 2-a, 1999.
- [OpenStax Concepts of Biology — Laws of Inheritance and the Test Cross](https://openstax.org/books/concepts-biology/pages/8-2-laws-of-inheritance).
- [OpenStax Biology 2e — Laws of Inheritance](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance).
- [NHGRI — Nomenclature and Genetic Content: Backcross Generations](https://www.genome.gov/Pages/Research/IntramuralResearch/DIRCalendar/CurrentTopicsinGenomeAnalysis2005/CourseHandouts/CTGA2005Lecture7.pdf).
- [NCBI Bookshelf — Mapping Genomes](https://www.ncbi.nlm.nih.gov/books/NBK21116/).
