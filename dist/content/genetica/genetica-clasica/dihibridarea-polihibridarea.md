# Dihibridarea și polihibridarea

Dihibridarea urmărește simultan două locusuri, iar polihibridarea trei sau mai multe. Aceste încrucișări arată cum evenimentele simple de segregare se combină prin regulile probabilității. Ele demonstrează și limita metodei mendeliene: produsul rapoartelor monohibride este valid numai când locusurile se asortează independent și când relațiile genotip–fenotip sunt definite corect.

## Obiective de învățare

La finalul acestei teme, studentul va putea:

- să determine tipurile de gameți produși de di- și polihibrizi;
- să construiască o încrucișare dihibridă și să derive raportul 9:3:3:1;
- să aplice metoda ramificată și regulile produsului și sumei;
- să calculeze probabilități pentru genotipuri și fenotipuri la mai mulți loci;
- să generalizeze numărul gameților și claselor pentru *n* locusuri;
- să recunoască situațiile în care linkage-ul sau interacțiunile genice invalidează rapoartele simple.

## De la monohibridare la dihibridare

O **dihibridare** analizează două locusuri. Un **dihibrid** este heterozigot la ambele, de exemplu *AaBb*. Dacă locusurile se asortează independent, segregarea *A/a* poate fi analizată separat de segregarea *B/b*, apoi rezultatele se combină.

Să presupunem:

- *A* este complet dominant față de *a*;
- *B* este complet dominant față de *b*;
- locusurile sunt neînlănțuite sau se comportă ca independente;
- gameții și descendenții au viabilitate comparabilă.

Încrucișarea clasică pornește de la linii pure:

**P: AABB × aabb**

Primul părinte produce numai gameți *AB*, iar al doilea numai *ab*. Toți descendenții F1 sunt:

**F1: AaBb**

și manifestă ambele fenotipuri dominante. Autofecundarea F1 produce încrucișarea dihibridă:

**AaBb × AaBb.**

## Formarea gameților unui dihibrid

Pentru locusul A, heterozigotul transmite *A* sau *a*, fiecare cu probabilitatea 1/2. Pentru locusul B, transmite *B* sau *b*, fiecare cu probabilitatea 1/2. Dacă evenimentele sunt independente, regula produsului oferă:

- *AB*: 1/2 × 1/2 = 1/4;
- *Ab*: 1/2 × 1/2 = 1/4;
- *aB*: 1/2 × 1/2 = 1/4;
- *ab*: 1/2 × 1/2 = 1/4.

Un mod sigur de enumerare este metoda ramificată:

- *A* se combină cu *B* și *b* → *AB*, *Ab*;
- *a* se combină cu *B* și *b* → *aB*, *ab*.

Ordinea literelor trebuie păstrată constant după ordinea locusurilor. *aB* și *Ba* nu sunt tipuri diferite de gameți; a doua scriere este doar o ordine neuniformă.

## Pătratul Punnett pentru dihibridare

Fiecare părinte *AaBb* produce patru tipuri de gameți. Pătratul are 4 × 4 = 16 combinații:

|  | AB | Ab | aB | ab |
|---|---|---|---|---|
| **AB** | AABB | AABb | AaBB | AaBb |
| **Ab** | AABb | AAbb | AaBb | Aabb |
| **aB** | AaBB | AaBb | aaBB | aaBb |
| **ab** | AaBb | Aabb | aaBb | aabb |

Tabelul este util pentru vizualizare, dar cele 16 căsuțe nu reprezintă 16 genotipuri diferite. Mai multe combinații conduc la același genotip. Gruparea lor produce nouă clase genotipice:

**1 AABB : 2 AABb : 1 AAbb : 2 AaBB : 4 AaBb : 2 Aabb : 1 aaBB : 2 aaBb : 1 aabb.**

Coeficienții sunt produsul a două rapoarte monohibride 1:2:1.

## Derivarea raportului 9:3:3:1

Pentru fiecare locus al încrucișării heterozigot × heterozigot:

- probabilitatea fenotipului dominant este 3/4;
- probabilitatea fenotipului recesiv este 1/4.

Prin regula produsului:

| Clasă fenotipică | Calcul | Probabilitate |
|---|---:|---:|
| A–B– | 3/4 × 3/4 | 9/16 |
| A–bb | 3/4 × 1/4 | 3/16 |
| aaB– | 1/4 × 3/4 | 3/16 |
| aabb | 1/4 × 1/4 | 1/16 |

Rezultă raportul **9 A–B– : 3 A–bb : 3 aaB– : 1 aabb**.

Notația cu liniuță indică orice alelă la a doua poziție: *A–* include *AA* și *Aa*. Raportul este fenotipic, nu genotipic. El nu este o „lege universală a dihibridării”, ci consecința unui set specific de ipoteze.

## Metoda ramificată

Metoda ramificată tratează fiecare locus separat și apoi combină rezultatele. Pentru *AaBb × AaBb*:

- la A: 1/4 *AA*, 1/2 *Aa*, 1/4 *aa*;
- la B: 1/4 *BB*, 1/2 *Bb*, 1/4 *bb*.

Probabilitatea genotipului *AaBb* este:

**P(AaBb) = P(Aa) × P(Bb) = 1/2 × 1/2 = 1/4.**

Probabilitatea *AAbb* este:

**P(AAbb) = 1/4 × 1/4 = 1/16.**

Probabilitatea fenotipului dominant la A și recesiv la B este:

**P(A–bb) = 3/4 × 1/4 = 3/16.**

Această metodă este mai eficientă decât pătratul Punnett pentru trei sau mai multe locusuri.

## Alte încrucișări dihibride

### Dihibrid × dublu recesiv

În încrucișarea:

**AaBb × aabb**

primul părinte produce *AB*, *Ab*, *aB* și *ab*, iar al doilea numai *ab*. Dacă locusurile sunt independente, descendenții apar în raport:

**1 AaBb : 1 Aabb : 1 aaBb : 1 aabb.**

Cu dominanță completă, și fenotipurile sunt 1:1:1:1. Această încrucișare-test dihibridă este foarte informativă: fenotipul descendentului reflectă direct tipul de gamet produs de dihibrid. Dacă genele sunt înlănțuite, clasele parentale depășesc de obicei clasele recombinante.

### Dihibrid × homozigot la un locus

În *AaBb × AAbb*, al doilea părinte produce numai *Ab*. La locusul A, toți descendenții primesc cel puțin un *A* și sunt fenotipic dominanți; la B, rezultă 1/2 *Bb* și 1/2 *bb*. Fenotipic se așteaptă 1/2 A–B– și 1/2 A–bb.

Descompunerea pe loci evită construirea unui tabel inutil de mare.

## Polihibridarea

O **polihibridare** urmărește trei sau mai multe locusuri. Un trihibrid, de exemplu *AaBbCc*, este heterozigot la trei loci. Dacă aceștia se asortează independent, fiecare locus adaugă o alegere binară pentru gamet.

Pentru un individ heterozigot la *n* locusuri independente:

- numărul tipurilor de gameți este **2ⁿ**;
- fiecare tip are probabilitatea **(1/2)ⁿ**, dacă segregarea este egală;
- într-o autofecundare, numărul combinațiilor din pătratul Punnett ar fi **4ⁿ**;
- numărul claselor genotipice este **3ⁿ**;
- cu dominanță completă la fiecare locus, numărul claselor fenotipice este **2ⁿ**.

Pentru *AaBbCc*:

- tipuri de gameți: 2³ = 8;
- gameții sunt *ABC*, *ABc*, *AbC*, *Abc*, *aBC*, *aBc*, *abC*, *abc*;
- într-o autofecundare ar exista 8 × 8 = 64 combinații;
- clase genotipice: 3³ = 27;
- clase fenotipice, cu dominanță completă: 2³ = 8.

Aceste formule numără clasele posibile, nu garantează că toate vor fi observate într-un eșantion mic.

## Calcule polihibride prin probabilități

Să considerăm încrucișarea:

**AaBbCc × AaBbCc.**

### Probabilitatea unui genotip exact

Pentru *AabbCc*:

- *Aa*: 1/2;
- *bb*: 1/4;
- *Cc*: 1/2.

Prin regula produsului:

**P(AabbCc) = 1/2 × 1/4 × 1/2 = 1/16.**

### Probabilitatea unui fenotip compus

Pentru fenotipul dominant la A, recesiv la B și dominant la C, adică *A–bbC–*:

**P(A–bbC–) = 3/4 × 1/4 × 3/4 = 9/64.**

### Probabilitatea unui număr de caractere dominante

Probabilitatea ca descendentul să manifeste exact două dintre cele trei fenotipuri dominante este suma a trei clase reciproc exclusive:

- *A–B–cc*: 3/4 × 3/4 × 1/4 = 9/64;
- *A–bbC–*: 3/4 × 1/4 × 3/4 = 9/64;
- *aaB–C–*: 1/4 × 3/4 × 3/4 = 9/64.

Totalul este **27/64**. Factorul 3 reprezintă cele trei alegeri posibile pentru locusul la care apare fenotipul recesiv.

## Regula produsului, regula sumei și complementul

### Regula produsului

Se folosește pentru evenimente independente care trebuie să apară împreună: „A și B”.

Exemplu: în *AaBb × AaBb*, probabilitatea *aa* și *Bb* este 1/4 × 1/2 = 1/8.

### Regula sumei

Se folosește pentru căi reciproc exclusive către același rezultat: „A sau B”.

Exemplu: probabilitatea ca descendentul să fie homozigot la locusul A este P(*AA*) + P(*aa*) = 1/4 + 1/4 = 1/2.

### Regula complementului

Probabilitatea „cel puțin unuia” se calculează adesea ca 1 minus probabilitatea niciunuia.

În *AaBb × AaBb*, probabilitatea ca descendentul să aibă cel puțin un fenotip recesiv este:

**1 − P(A–B–) = 1 − 9/16 = 7/16.**

## Legătura genetică

Formulele bazate pe produs presupun asortarea independentă. Dacă locusurile A și B se află pe același cromozom, trebuie cunoscută **faza** alelelor:

- cuplaj: *AB/ab*;
- repulsie: *Ab/aB*.

Fără crossing-over, un heterozigot în cuplaj ar produce numai gameți *AB* și *ab*, nu patru tipuri egale. Cu recombinare, apar și *Ab* și *aB*, dar frecvențele lor depind de distanța dintre loci.

Într-o încrucișare-test, dacă cele patru clase sunt aproximativ egale, datele sunt compatibile cu asortarea independentă. Dacă două clase sunt mult mai frecvente și două mai rare, genele pot fi înlănțuite; clasele rare sunt de obicei recombinante. Confirmarea necesită analiză statistică și un număr adecvat de descendenți.

## Interacțiunile genice modifică raportul fenotipic

Chiar dacă două gene se asortează independent, ele pot participa la aceeași cale și pot produce **epistazie**. În acest caz, cele 16 combinații genotipice există în continuare în proporțiile mendeliene, dar sunt grupate în alte clase fenotipice, precum 9:3:4, 12:3:1 sau 9:7.

De exemplu, dacă alela recesivă *aa* blochează complet sinteza pigmentului, genotipurile *aaB–* și *aabb* pot avea același fenotip nepigmentat. Raportul 9:3:3:1 se transformă prin reunirea claselor, fără ca segregarea fiecărui locus să înceteze.

Aceasta arată diferența dintre **independența transmiterii** și **independența funcției**. Două gene pot fi transmise independent, dar produsele lor pot interacționa în fenotip.

## Strategie eficientă de rezolvare

1. Se scriu locusurile într-o ordine fixă.
2. Se identifică locusurile heterozigote; numai acestea multiplică tipurile de gameți.
3. Se verifică dacă independența este precizată sau justificată.
4. Se rezolvă fiecare locus ca o monohibridare.
5. Se aplică regula produsului pentru condiții simultane și regula sumei pentru alternative.
6. Genotipul se traduce în fenotip abia după stabilirea dominanței și a interacțiunilor.
7. Se exprimă rezultatul ca probabilitate, raport sau număr așteptat, conform cerinței.

### Exemplu mixt

În încrucișarea *AaBbCc × AabbCc*, se cere probabilitatea genotipului *Aabbcc*.

- la A: *Aa × Aa* → P(*Aa*) = 1/2;
- la B: *Bb × bb* → P(*bb*) = 1/2;
- la C: *Cc × Cc* → P(*cc*) = 1/4.

Rezultatul este:

**1/2 × 1/2 × 1/4 = 1/16.**

Un pătrat Punnett complet ar fi posibil, dar ar consuma mult spațiu și ar crește riscul de eroare.

## Capcane frecvente

- Un individ *AaBb* produce patru tipuri egale de gameți numai dacă locusurile se asortează independent.
- Raportul 9:3:3:1 este fenotipic și necesită dominanță completă la ambele locusuri.
- *A–B–* este o clasă fenotipică ce include patru genotipuri, nu un genotip propriu-zis.
- Numărul de gameți depinde de locusurile heterozigote, nu de numărul total de loci scriși.
- Independența segregării nu exclude epistazia produselor genice.
- Probabilitățile se înmulțesc numai pentru evenimente independente; linkage-ul cere frecvențe de recombinare.

## De reținut

- Dihibridarea urmărește două locusuri; polihibridarea urmărește trei sau mai multe.
- Un dihibrid *AaBb* produce *AB*, *Ab*, *aB* și *ab* în proporții egale dacă locusurile sunt independente.
- *AaBb × AaBb* produce raportul genotipic rezultat din (1:2:1) × (1:2:1) și raportul fenotipic 9:3:3:1 în condițiile clasice.
- Metoda ramificată și regulile probabilității sunt mai eficiente decât pătratele Punnett mari.
- Pentru *n* locusuri heterozigote independente, numărul tipurilor de gameți este 2ⁿ.
- Linkage-ul schimbă frecvențele gameților, iar epistazia schimbă gruparea genotipurilor în fenotipuri.
- Rezolvarea corectă separă transmiterea alelelor de exprimarea fenotipului.

## Întrebări de autoevaluare

1. Ce gameți produce *AaBb* și în ce proporții dacă locusurile sunt independente?
2. Cum se obține probabilitatea clasei *A–bb* în încrucișarea *AaBb × AaBb*?
3. Câte tipuri de gameți produce *AaBBCcDd* dacă toate locusurile relevante sunt independente?
4. Care este probabilitatea genotipului *aaBbCc* în *AaBbCc × AaBbCc*?
5. De ce un raport diferit de 9:3:3:1 nu demonstrează automat linkage?

## Răspunsuri la întrebările de autoevaluare

1. Produce *AB*, *Ab*, *aB* și *ab*, fiecare cu probabilitatea 1/4.
2. P(*A–*) × P(*bb*) = 3/4 × 1/4 = 3/16.
3. Are trei locusuri heterozigote — A, C și D — deci produce 2³ = 8 tipuri de gameți; locusul BB nu adaugă o alegere.
4. P(*aa*) × P(*Bb*) × P(*Cc*) = 1/4 × 1/2 × 1/2 = 1/16.
5. Dominanța incompletă, epistazia, alelele letale, penetranța, viabilitatea diferită sau fluctuația de eșantionare pot modifica raportul fără linkage.

## Bibliografie și webografie selectivă

- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a 7-a, 2020.
- Griffiths, A. J. F. et al. *An Introduction to Genetic Analysis*. W. H. Freeman, ediția a 12-a, 2020.
- Snustad, D. P., Simmons, M. J. *Principles of Genetics*. Wiley, ediția a 7-a, 2015.
- [Mendel — *Experiments on Plant Hybrids*, traducere în limba engleză](https://www.mendelianum.cz/images/files/Mendel-paper-1866-english.pdf).
- [OpenStax Biology 2e — Mendel’s Experiments and the Laws of Probability](https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability).
- [OpenStax Biology 2e — Laws of Inheritance](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance).
- [NCBI Bookshelf — Mapping Genomes](https://www.ncbi.nlm.nih.gov/books/NBK21116/).
