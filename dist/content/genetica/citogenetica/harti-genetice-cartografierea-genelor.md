# Hărțile genetice și cartografierea genelor

Hărțile genetice descriu ordinea relativă a genelor sau a altor markeri de pe un cromozom și distanțele dintre ei, estimate din frecvența recombinării. Principiul central este că doi loci apropiați tind să fie moșteniți împreună, deoarece probabilitatea apariției unui crossing-over între ei este mai mică decât pentru doi loci îndepărtați. Cartografierea genetică transformă, astfel, rezultatele încrucișărilor în informație despre organizarea cromozomilor. Ea a precedat secvențierea ADN-ului și rămâne importantă în ameliorare, în analiza bolilor ereditare și în integrarea datelor genetice cu hărțile fizice.

## Obiective de învățare

La finalul temei, studentul va putea:

- să explice legătura genetică, crossing-overul și relația dintre recombinare și distanța dintre loci;
- să identifice clasele parentale și recombinante într-o încrucișare-test;
- să calculeze distanța genetică dintre doi loci și să exprime rezultatul în centimorgani;
- să stabilească ordinea a trei gene și să construiască o hartă în trei puncte;
- să determine coeficientul de coincidență și interferența;
- să distingă harta genetică de harta fizică și să recunoască limitele estimărilor bazate pe recombinare.

## Legătura genetică și originea recombinanților

Genele localizate pe același cromozom aparțin aceluiași **grup de legătură**. Dacă sunt suficient de apropiate, ele nu se asortează independent în sensul raportului fenotipic mendelian clasic, ci tind să treacă împreună în gameți. Această asociere se numește **legătură genetică**.

În profaza I a meiozei, cromozomii omologi se împerechează, iar cromatidele nesurori pot schimba segmente omoloage prin **crossing-over**. Un schimb produs între doi loci poate genera cromatide recombinante, adică asocieri de alele diferite de cele prezente pe cromozomii parentali. De exemplu, un heterozigot cu aranjamentul `AB/ab` poate produce gameți parentali `AB` și `ab`, dar și gameți recombinanți `Ab` și `aB`.

Trebuie separate două noțiuni:

- **crossing-overul** este evenimentul fizic dintre cromatide;
- **recombinarea** este rezultatul genetic detectabil în gameți sau descendenți.

Nu orice crossing-over este observat ca recombinare între markerii exteriori. Două schimburi în același interval pot reface combinația parentală pentru acei markeri. Această situație explică de ce distanțele mari sunt subestimate dacă se folosește direct numai procentul recombinanților.

## Frecvența recombinării și unitatea centimorgan

Frecvența recombinării dintre doi loci se calculează astfel:

**r = numărul recombinanților / numărul total al descendenților**

Pentru intervale scurte, distanța de hartă este aproximativ `r × 100`, exprimată în **centimorgani** (cM). Un centimorgan reprezintă o distanță genetică asociată, în medie, cu o frecvență de recombinare de 1% într-un interval suficient de mic. Denumirea îl omagiază pe Thomas Hunt Morgan; 100 cM formează un morgan.

Centimorganul nu este o unitate de lungime fizică. Numărul de perechi de baze corespunzător unui cM diferă între specii, între cromozomi, între sexe și chiar între regiuni ale aceluiași cromozom, deoarece rata crossing-overului nu este uniformă.

### Exemplu: cartografierea în două puncte

Un individ `AB/ab` este încrucișat cu testerul dublu recesiv `ab/ab`. Dintre 500 de descendenți, 420 aparțin claselor parentale (`AB` și `ab`), iar 80 claselor recombinante (`Ab` și `aB`).

**r = 80 / 500 = 0,16 = 16%**

Distanța estimată este de aproximativ **16 cM**. Testerul este util deoarece alelele sale recesive nu maschează contribuția gametului produs de heterozigot; genotipul sau fenotipul fiecărui descendent indică direct tipul acelui gamet.

## Clase parentale și recombinante

Într-o analiză cu doi loci, cele două clase cele mai numeroase sunt de regulă parentale, iar cele două mai puțin numeroase sunt recombinante. Această regulă presupune viabilitate comparabilă și identificarea corectă a fenotipurilor. Selecția, penetranța incompletă sau erorile de clasificare pot modifica efectivele.

Configurația alelelor heterozigotului trebuie, de asemenea, precizată:

| Configurație | Cromozomi omologi | Gameți parentali | Gameți recombinanți |
|---|---|---|---|
| cuplare (cis) | `AB/ab` | `AB`, `ab` | `Ab`, `aB` |
| repulsie (trans) | `Ab/aB` | `Ab`, `aB` | `AB`, `ab` |

Frecvența recombinării nu poate depăși 50%. O valoare apropiată de 50% poate însemna fie că genele sunt pe cromozomi diferiți, fie că sunt foarte îndepărtate pe același cromozom, astfel încât multiplele crossing-overuri fac ca asocierea lor să pară independentă. O încrucișare în două puncte nu distinge sigur aceste situații.

## Cartografierea în trei puncte

O încrucișare-test cu trei loci este mai informativă decât trei analize separate în două puncte. Ea permite stabilirea simultană a ordinii genelor, estimarea celor două intervale și detectarea crossing-overurilor duble.

Pentru un triplu heterozigot se obțin, în mod obișnuit, opt clase de descendenți:

- două clase parentale, cele mai frecvente;
- două clase rezultate prin crossing-over simplu în primul interval;
- două clase rezultate prin crossing-over simplu în al doilea interval;
- două clase de dublu crossing-over, de regulă cele mai rare.

Pentru a găsi gena din mijloc, se compară fiecare clasă parentală cu clasa de dublu crossing-over cea mai asemănătoare. Alela care își schimbă poziția relativă, în timp ce alelele markerilor exteriori rămân în combinația parentală, aparține genei centrale.

### Problemă rezolvată complet

Un organism triplu heterozigot este încrucișat cu un tester triplu recesiv. Au rezultat 1.000 de descendenți, clasificați după gametul produs de heterozigot:

| Clasa gametică | Număr | Interpretare după stabilirea ordinii |
|---|---:|---|
| `ABC` | 358 | parentală |
| `abc` | 351 | parentală |
| `Abc` | 70 | crossing-over simplu A–B |
| `aBC` | 65 | crossing-over simplu A–B |
| `ABc` | 72 | crossing-over simplu B–C |
| `abC` | 68 | crossing-over simplu B–C |
| `AbC` | 8 | dublu crossing-over |
| `aBc` | 8 | dublu crossing-over |
| **Total** | **1.000** | |

**1. Identificarea claselor parentale și duble.** Clasele cele mai numeroase, `ABC` și `abc`, sunt parentale. Clasele cele mai rare, `AbC` și `aBc`, provin din dublu crossing-over.

**2. Determinarea ordinii genelor.** Comparăm `ABC` cu `AbC`: markerii A și C au aceeași stare, dar B s-a schimbat din `B` în `b`. Similar, între `abc` și `aBc` se schimbă numai B. Prin urmare, **B este gena din mijloc**, iar ordinea este A–B–C.

**3. Calculul distanței A–B.** Recombinanții intervalului A–B includ crossing-overurile simple din acel interval și toate clasele duble:

**r(A–B) = (70 + 65 + 8 + 8) / 1.000 = 151 / 1.000 = 0,151**

Distanța A–B este **15,1 cM**.

**4. Calculul distanței B–C.** Se adună clasele de crossing-over simplu B–C și clasele duble:

**r(B–C) = (72 + 68 + 8 + 8) / 1.000 = 156 / 1.000 = 0,156**

Distanța B–C este **15,6 cM**. Harta rezultată este:

`A — 15,1 cM — B — 15,6 cM — C`

Distanța de hartă A–C obținută prin adunarea intervalelor este **30,7 cM**. Proporția observată a recombinanților pentru markerii exteriori este însă numai `(70 + 65 + 72 + 68) / 1.000 = 27,5%`, deoarece dublul crossing-over reface asocierea parentală a alelelor A și C. Acesta este motivul pentru care clasele duble trebuie incluse în calculul fiecărui interval, dar nu apar ca recombinante dacă sunt examinate numai genele exterioare.

## Coeficientul de coincidență și interferența

Dacă crossing-overurile din cele două intervale ar fi independente, frecvența așteptată a dublelor crossing-overuri ar fi produsul frecvențelor de recombinare ale intervalelor:

**DCO așteptate = r(A–B) × r(B–C) × N**

În problema anterioară:

**0,151 × 0,156 × 1.000 = 23,556 ≈ 23,6**

Au fost observate 16 duble crossing-overuri. **Coeficientul de coincidență** este:

**C = DCO observate / DCO așteptate = 16 / 23,556 ≈ 0,679**

**Interferența** măsoară abaterea de la independență:

**I = 1 − C = 1 − 0,679 = 0,321 ≈ 32,1%**

Interferența pozitivă arată că un crossing-over reduce probabilitatea apariției altuia în vecinătate; aici s-au observat cu aproximativ 32,1% mai puține evenimente duble decât s-ar fi așteptat prin independență. O interferență nulă indică independență, iar o valoare negativă indică mai multe duble crossing-overuri decât cele așteptate. Aceste mărimi sunt proprietăți ale datelor și intervalelor analizate, nu constante universale.

## Harta genetică și harta fizică

| Caracteristică | Hartă genetică | Hartă fizică |
|---|---|---|
| Baza măsurării | frecvența recombinării | poziția în molecula de ADN |
| Unitate | cM | perechi de baze, kb sau Mb |
| Informație principală | ordine și distanță funcțională prin recombinare | coordonate și distanță moleculară |
| Dependență de crossing-over | da | nu |
| Rezoluție | depinde de numărul de meioze și markeri | poate ajunge la nivel de nucleotidă prin secvențiere |
| Limitări tipice | multiple crossing-overuri, regiuni cu recombinare redusă | nu indică direct probabilitatea transmiterii împreună |

Cele două hărți sunt complementare. O regiune fizică mare poate avea puțini centimorgani dacă recombinarea este suprimată, de exemplu lângă centromer; o regiune fizică mai mică poate avea o distanță genetică relativ mare într-un „hotspot” de recombinare. De aceea, nu există o conversie universală între cM și megabaze.

## Limitele aditivității și funcțiile de cartografiere

Distanțele dintre intervale adiacente sunt aditive pe harta genetică: în exemplu, 15,1 + 15,6 = 30,7 cM. Frecvențele de recombinare observate între markerii exteriori nu sunt însă simplu aditive, deoarece crossing-overurile duble sau multiple pot rămâne nedetectate. Aproximația `1% recombinare = 1 cM` este bună mai ales pentru intervale scurte. Pe măsură ce distanța crește, procentul recombinanților se apropie de limita de 50%, chiar dacă distanța reală a hărții poate depăși 50 cM.

**Funcțiile de cartografiere** corectează statistic efectul crossing-overurilor multiple, transformând frecvența recombinării într-o distanță estimată. Funcția Haldane presupune lipsa interferenței, iar funcția Kosambi introduce o corecție pentru interferență. La nivel introductiv, este importantă ideea că ele sunt modele cu ipoteze proprii, nu măsurători directe. Alegerea funcției și precizia estimării depind de organism, densitatea markerilor, mărimea lotului și modelul recombinării.

Alte surse de abatere sunt dimensiunea mică a eșantionului, viabilitatea diferită a genotipurilor, erorile de fenotipare, penetranța incompletă și diferențele dintre meioza masculină și cea feminină. În unele organisme sau sexe, recombinarea poate fi absentă ori puternic redusă.

## Aplicații

Cartografierea prin legătură genetică permite localizarea genelor asociate unor caractere ereditare, urmărirea markerilor legați de alele favorabile în ameliorarea plantelor și animalelor și verificarea asamblărilor genomice. În genetica umană, analiza co-segregării markerilor cu o boală în familii poate delimita o regiune cromozomială, dar identificarea variantei cauzale necesită de regulă date fizice, secvențiere și validare funcțională. În organismele-model, hărțile genetice oferă un cadru experimental pentru studierea meiozei și a controlului recombinării.

## De reținut

- Genele apropiate pe același cromozom tind să fie moștenite împreună; crossing-overul poate produce combinații recombinante.
- Pentru intervale scurte, 1% recombinanți corespunde aproximativ unei distanțe de 1 cM.
- Într-un test în trei puncte, clasele cele mai numeroase sunt de obicei parentale, iar cele mai rare sunt dublele recombinante.
- Gena din mijloc se identifică prin compararea claselor parentale cu cele de dublu crossing-over.
- Dublele crossing-overuri se includ în calculul ambelor intervale și pot face ca recombinarea markerilor exteriori să subestimeze distanța.
- Harta genetică măsoară recombinarea, iar harta fizică măsoară poziția în ADN; între cM și perechi de baze nu există o conversie universală.

## Întrebări de autoevaluare

1. Ce exprimă un centimorgan și de ce nu poate fi convertit printr-o valoare universală în perechi de baze?
2. Cum sunt identificate, de regulă, clasele parentale și clasele de dublu crossing-over într-un test în trei puncte?
3. De ce se includ dublele crossing-overuri în calculul fiecăruia dintre cele două intervale?
4. Cum se calculează coeficientul de coincidență și interferența?
5. Care este diferența fundamentală dintre o hartă genetică și una fizică?

## Răspunsuri la întrebările de autoevaluare

1. Un centimorgan este o unitate de distanță genetică asociată aproximativ cu 1% recombinare într-un interval scurt. Conversia în perechi de baze nu este universală deoarece rata recombinării variază între organisme, cromozomi, sexe și regiuni cromozomiale.
2. Clasele parentale sunt, de obicei, cele mai numeroase, iar clasele de dublu crossing-over sunt cele mai rare. Identificarea trebuie verificată ținând cont de viabilitate și de corectitudinea clasificării.
3. Un dublu crossing-over conține câte un schimb în fiecare interval; omiterea claselor duble ar subestima ambele distanțe.
4. Coeficientul de coincidență este raportul dintre numărul dublelor crossing-overuri observate și cel așteptat. Interferența este `I = 1 − C`.
5. Harta genetică estimează ordinea și distanța markerilor din frecvența recombinării, în cM; harta fizică indică pozițiile și distanțele efective în ADN, în perechi de baze.

## Bibliografie și webografie selectivă

- Griffiths, A. J. F. et al. *An Introduction to Genetic Analysis*. W. H. Freeman, ediția a 12-a, 2020.
- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a 7-a, 2020.
- Snustad, D. P., Simmons, M. J. *Principles of Genetics*. Wiley, ediția a 7-a, 2016.
- [OpenStax Biology 2e — Laws of Inheritance](https://openstax.org/books/biology-2e/pages/12-introduction), Rice University.
- [NCBI Bookshelf — Mapping Genomes](https://www.ncbi.nlm.nih.gov/books/NBK21116/), National Center for Biotechnology Information.
- [NHGRI — Genetic Linkage](https://www.genome.gov/genetics-glossary/Genetic-Linkage), National Human Genome Research Institute.
