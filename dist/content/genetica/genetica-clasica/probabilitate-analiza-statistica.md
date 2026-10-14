# Probabilitatea și analiza statistică în genetică

Genetica formulează predicții probabilistice: segregarea alelelor nu dictează rezultatul fiecărei fecundații, ci distribuția așteptată într-un număr mare de descendenți. Analiza statistică permite compararea predicțiilor cu observațiile și evaluarea întrebării esențiale: abaterea dintre ele este compatibilă cu fluctuația aleatorie sau sugerează că modelul genetic este incomplet?

## Obiective de învățare

La finalul acestei teme, studentul va putea:

- să diferențieze probabilitatea teoretică de frecvența observată;
- să aplice regulile produsului, sumei și complementului;
- să utilizeze distribuția binomială pentru serii de descendenți;
- să formuleze ipoteza nulă pentru o încrucișare genetică;
- să calculeze și să interpreteze testul χ² de concordanță;
- să recunoască limitele testului și cauzele biologice ale abaterilor semnificative.

## Probabilitate teoretică și frecvență observată

**Probabilitatea** unui eveniment este un număr între 0 și 1 care exprimă cât de plauzibil este evenimentul într-un model. Poate fi exprimată ca fracție, număr zecimal sau procent. O probabilitate de 1/4 este echivalentă cu 0,25 sau 25%.

Probabilitatea **teoretică** este dedusă din model. În încrucișarea *Aa × Aa*, probabilitatea genotipului *aa* este 1/4 dacă alelele segregă egal și gameții se combină aleatoriu. Frecvența **empirică** este proporția observată: dacă 22 dintre 100 de descendenți sunt *aa*, frecvența este 0,22.

Cele două nu trebuie să fie identice. Un eșantion finit prezintă **variație de eșantionare**. La repetarea experimentului, numerele se schimbă, deși modelul și probabilitățile rămân aceleași. În general, proporțiile observate se stabilizează în jurul valorilor teoretice pe măsură ce eșantionul crește.

## Evenimente independente și dependente

Două evenimente sunt **independente** dacă rezultatul unuia nu modifică probabilitatea celuilalt. În modelul mendelian simplu, genotipul unui descendent nu influențează genotipul următorului. De asemenea, segregarea a două locusuri neînlănțuite poate fi tratată independent.

Evenimentele sunt **dependente** când informația despre unul schimbă probabilitatea celuilalt. Alelele unor gene înlănțuite nu se combină independent, iar extragerea fără înlocuire dintr-un lot schimbă compoziția pentru extragerea următoare.

Independența este o ipoteză biologică, nu o simplă permisiune de a înmulți numere. Ea trebuie justificată prin mecanism sau prin informația problemei.

## Regula produsului

Pentru evenimente independente care trebuie să se producă împreună, probabilitățile se înmulțesc:

**P(A și B) = P(A) × P(B).**

Exemplu: în *AaBb × AaBb*, probabilitatea descendentului *aabb* este:

**P(aa) × P(bb) = 1/4 × 1/4 = 1/16.**

Pentru doi descendenți succesivi ai încrucișării *Aa × Aa*, probabilitatea ca ambii să aibă fenotip recesiv este:

**1/4 × 1/4 = 1/16.**

Ordinea contează dacă întrebarea precizează „primul” și „al doilea”. Probabilitatea ca primul să fie recesiv și al doilea dominant este 1/4 × 3/4 = 3/16.

## Regula sumei

Pentru rezultate reciproc exclusive care pot produce evenimentul urmărit, probabilitățile se adună:

**P(A sau B) = P(A) + P(B)**, dacă A și B nu pot apărea simultan.

În *Aa × Aa*, heterozigotul poate rezulta prin două căi:

- gamet *A* de la primul părinte și *a* de la al doilea: 1/4;
- gamet *a* de la primul și *A* de la al doilea: 1/4.

Prin urmare, **P(Aa) = 1/4 + 1/4 = 1/2**.

Dacă evenimentele nu sunt reciproc exclusive, intersecția lor trebuie scăzută pentru a nu fi numărată de două ori:

**P(A sau B) = P(A) + P(B) − P(A și B).**

## Regula complementului

Complementul evenimentului A este „A nu se produce”:

**P(A) = 1 − P(non-A).**

Metoda este utilă pentru formulări precum „cel puțin unul”. Dacă probabilitatea fenotipului recesiv este 1/4, probabilitatea ca cel puțin unul dintre trei descendenți să fie recesiv este:

**1 − P(toți trei nerecesivi) = 1 − (3/4)³ = 37/64.**

Calcularea separată a cazurilor „exact unul”, „exact doi” și „exact trei” ar conduce la același rezultat, dar ar fi mai lungă.

## Distribuția binomială

Când un experiment are două clase de interes, aceeași probabilitate *p* la fiecare încercare și încercări independente, numărul de rezultate urmărite urmează o **distribuție binomială**.

Probabilitatea de a obține exact *k* rezultate de tipul urmărit în *n* încercări este:

**P(k) = C(n,k) · pᵏ · (1 − p)ⁿ⁻ᵏ**,

unde:

- *C(n,k) = n!/[k!(n−k)!]* este numărul ordinilor posibile;
- *pᵏ* este probabilitatea celor *k* rezultate urmărite;
- *(1−p)ⁿ⁻ᵏ* este probabilitatea celorlalte rezultate.

### Exemplu

În *Aa × Aa*, probabilitatea fenotipului recesiv este 1/4. Care este probabilitatea ca exact doi dintre patru descendenți să fie recesivi?

**C(4,2) × (1/4)² × (3/4)² = 6 × 1/16 × 9/16 = 27/128 ≈ 0,211.**

Factorul 6 este necesar deoarece cei doi descendenți recesivi pot ocupa șase perechi de poziții în seria de patru. Fără el s-ar calcula o singură ordine.

Media așteptată a numărului de rezultate este *np*, iar varianța este *np(1−p)*. Pentru 100 de descendenți cu *p = 1/4*, sunt așteptați în medie 25 recesivi, dar numărul observat variază de la un experiment la altul.

## Probabilitatea condiționată

**Probabilitatea condiționată** P(A|B) este probabilitatea lui A după ce știm că B s-a produs. Informația nouă poate elimina unele rezultate posibile.

Exemplu clasic: doi părinți heterozigoți pentru o boală autozomal recesivă au un copil clinic neafectat. Înainte de cunoașterea fenotipului, probabilitățile sunt:

- 1/4 *AA*;
- 1/2 *Aa*;
- 1/4 *aa* afectat.

Știind că persoana este neafectată, clasa *aa* este exclusă. Dintre cele 3/4 rezultate neafectate, 1/2 sunt purtători:

**P(Aa | neafectat) = (1/2)/(3/4) = 2/3.**

Răspunsul nu este 1/2, deoarece spațiul rezultatelor a fost restrâns prin informația fenotipică.

## Statistica descriptivă și mărimea eșantionului

Înaintea unui test, datele trebuie descrise și verificate. Pentru date categoriale se raportează numere și proporții; pentru caractere cantitative se pot folosi media, mediana, dispersia, abaterea standard și reprezentări grafice.

Un eșantion mare oferă de regulă estimări mai precise, dar nu corectează un design defectuos. Selecția nealeatorie, fenotiparea incorectă, pierderea diferențiată a unor genotipuri și încrucișările contaminate pot produce **bias**, adică abatere sistematică. Repetarea unui experiment părtinitor crește precizia unei concluzii greșite.

Unitățile observate trebuie să fie independente. De exemplu, mai multe măsurători ale aceluiași individ nu sunt echivalente cu același număr de indivizi independenți.

## Testul χ² de concordanță

Testul **chi-pătrat** (χ²) de concordanță compară numerele observate în clase cu numerele așteptate conform unui model.

### Ipotezele

**Ipoteza nulă (H₀)** afirmă că datele urmează raportul genetic propus, iar diferențele observate sunt fluctuații de eșantionare. **Ipoteza alternativă (H₁)** afirmă că datele nu sunt compatibile cu acel raport.

Testul nu demonstrează că H₀ este adevărată. El evaluează dacă abaterea este suficient de mare pentru a respinge modelul la un prag ales.

### Formula

**χ² = Σ (O − E)²/E**,

unde *O* este numărul observat, *E* numărul așteptat, iar suma se face pentru toate clasele.

Numerele așteptate se calculează înmulțind totalul cu proporția teoretică. Pentru 100 de descendenți și un raport 3:1, așteptările sunt 75 și 25, nu 3 și 1.

### Exemplu calculat

Într-o monohibridare *Aa × Aa* s-au observat 78 de descendenți cu fenotip dominant și 22 recesivi. Sub H₀, raportul așteptat este 3:1.

| Clasă | Observat O | Așteptat E | (O−E)²/E |
|---|---:|---:|---:|
| dominant | 78 | 75 | 9/75 = 0,12 |
| recesiv | 22 | 25 | 9/25 = 0,36 |
| **Total** | **100** | **100** | **χ² = 0,48** |

Valoarea mică arată că observațiile sunt apropiate de așteptare în raport cu mărimea claselor.

## Gradele de libertate și valoarea p

Pentru un test simplu cu *k* clase și proporții complet specificate, gradele de libertate sunt:

**gl = k − 1.**

Se scade unu deoarece totalul este fix: după stabilirea numerelor din primele *k−1* clase, ultima este determinată. În exemplul cu două clase, gl = 1.

**Valoarea p** este probabilitatea, presupunând că H₀ este adevărată, de a obține o abatere cel puțin la fel de mare ca cea observată. Nu este probabilitatea ca H₀ să fie adevărată și nici probabilitatea ca rezultatul să fie „doar întâmplare”.

La pragul convențional α = 0,05:

- dacă *p < 0,05*, H₀ se respinge;
- dacă *p ≥ 0,05*, H₀ nu se respinge.

Pentru gl = 1, valoarea critică la α = 0,05 este aproximativ 3,84. Cum χ² = 0,48 < 3,84, nu respingem raportul 3:1. Formularea corectă este „datele sunt compatibile cu modelul”, nu „modelul a fost dovedit”.

| Grade de libertate | χ² critic la α = 0,05 |
|---:|---:|
| 1 | 3,84 |
| 2 | 5,99 |
| 3 | 7,81 |
| 4 | 9,49 |

## Condițiile și limitele testului χ²

Testul clasic presupune:

- clase reciproc exclusive și definite înaintea analizei;
- observații independente;
- numere, nu procente introduse direct în formulă;
- un eșantion suficient, cu valori așteptate în general de cel puțin aproximativ 5 per clasă;
- un model care specifică proporțiile înainte de examinarea rezultatului.

Pentru așteptări mici, testele exacte sau simulările pot fi mai potrivite. Dacă parametrii au fost estimați din aceleași date, formula gradelor de libertate trebuie ajustată.

Un rezultat semnificativ nu precizează cauza biologică. Abaterea poate proveni din linkage, alele letale, selecția gameților, viabilitate diferențiată, penetranță, eroare de clasificare sau o încrucișare parentală greșită. Testul semnalează nepotrivirea; experimentul și biologia o explică.

## Erori de interpretare statistică

O **eroare de tip I** apare când respingem o ipoteză nulă adevărată. Pragul α controlează probabilitatea acestei erori pentru un singur test. O **eroare de tip II** apare când nu respingem o ipoteză falsă, adesea din cauza unui eșantion prea mic sau a unui efect modest.

Puterea statistică este probabilitatea de a detecta o abatere reală de o anumită mărime. Eșantioanele foarte mari pot face semnificative abateri biologic mici, iar cele mici pot rata abateri importante. De aceea se raportează nu numai valoarea p, ci și numerele observate, raportul așteptat și mărimea diferenței.

Testarea mai multor ipoteze crește riscul de rezultate fals pozitive și poate necesita corecții. Alegerea ulterioară a raportului care „se potrivește cel mai bine” acelorași date nu echivalează cu testarea unei predicții formulate anterior.

## Strategie de analiză a unei probleme

1. Se definește modelul genetic și raportul așteptat.
2. Se formulează H₀ și H₁ înainte de calcul.
3. Se verifică totalul, independența și dimensiunea claselor.
4. Se calculează valorile așteptate din totalul observat.
5. Se calculează contribuția χ² a fiecărei clase și suma.
6. Se stabilesc gradele de libertate și pragul α.
7. Se formulează concluzia statistică fără a confunda compatibilitatea cu dovada.
8. Dacă H₀ este respinsă, se investighează explicații biologice și tehnice.

## Capcane frecvente

- Probabilitatea 3/4 nu garantează trei rezultate din fiecare patru observații.
- Regula produsului necesită independență; genele înlănțuite cer alt model.
- În χ² se folosesc numere așteptate calculate din total, nu termenii raportului brut.
- O valoare p mare nu dovedește H₀; poate reflecta și putere redusă.
- O valoare p mică nu măsoară importanța biologică și nu identifică mecanismul abaterii.
- Ipoteza nu trebuie aleasă după ce a fost văzut rezultatul fără o validare independentă.

## De reținut

- Rapoartele genetice sunt predicții probabilistice pentru eșantioane, nu rezultate exacte pentru fiecare familie.
- Regula produsului tratează evenimente independente simultane, regula sumei alternative exclusive, iar complementul simplifică „cel puțin unul”.
- Distribuția binomială calculează probabilitatea unui număr exact de rezultate în încercări independente.
- Probabilitatea condiționată folosește informația nouă pentru a restrânge rezultatele posibile.
- Testul χ² compară observațiile cu un raport teoretic sub o ipoteză nulă.
- „Nu respingem” nu înseamnă „dovedim”, iar semnificația statistică nu este identică cu relevanța biologică.
- Designul experimental, mărimea eșantionului și verificarea ipotezelor sunt la fel de importante ca formula.

## Întrebări de autoevaluare

1. Care este diferența dintre probabilitatea teoretică și frecvența empirică?
2. În *Aa × Aa*, care este probabilitatea ca exact unul dintre trei descendenți să fie *aa*?
3. De ce riscul de purtător al unui frate neafectat al unui individ cu boală autozomal recesivă este 2/3, dacă părinții sunt heterozigoți?
4. Cum se calculează valorile așteptate pentru 160 de descendenți într-un raport 9:3:3:1?
5. Ce concluzie formulăm dacă p ≥ 0,05 într-un test χ²?

## Răspunsuri la întrebările de autoevaluare

1. Probabilitatea teoretică provine din model, iar frecvența empirică este proporția observată într-un eșantion finit.
2. C(3,1) × (1/4) × (3/4)² = 3 × 1/4 × 9/16 = 27/64.
3. Dintre rezultatele neafectate, cu probabilitate totală 3/4, purtătorii reprezintă 1/2; probabilitatea condiționată este (1/2)/(3/4) = 2/3.
4. Se înmulțește 160 cu fiecare fracție: 90, 30, 30 și 10.
5. Nu respingem ipoteza nulă; datele sunt compatibile cu modelul la pragul ales, fără ca acesta să fie demonstrat.

## Bibliografie și webografie selectivă

- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a 7-a, 2020.
- Zar, J. H. *Biostatistical Analysis*. Pearson, ediția a 5-a, 2010.
- Whitlock, M. C., Schluter, D. *The Analysis of Biological Data*. Macmillan Learning, ediția a 3-a, 2020.
- [OpenStax Biology 2e — Mendel’s Experiments and the Laws of Probability](https://openstax.org/books/biology-2e/pages/12-1-mendels-experiments-and-the-laws-of-probability).
- [OpenStax Introductory Statistics](https://openstax.org/details/books/introductory-statistics-2e).
- [Biology LibreTexts — The Chi-Squared Test](https://bio.libretexts.org/Courses/University_of_Massachusetts_Boston/Bio_252%2F%2F254_Genetics_Fall_2026/10%3A_SPOC_X_-_Mendel_One_Gene/10.02%3A_The_chi-squared_Test).
