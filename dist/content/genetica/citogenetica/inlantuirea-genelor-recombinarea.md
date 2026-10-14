# Înlănțuirea genelor și recombinarea genetică

Înlănțuirea și recombinarea explică de ce genele aflate pe același cromozom tind să se transmită împreună, dar nu formează o unitate ereditară indivizibilă. În timpul meiozei, schimburile reciproce dintre cromatidele cromozomilor omologi pot separa alele care se găseau inițial pe același cromozom și pot crea combinații noi. Analiza acestor combinații permite atât înțelegerea diversității genetice, cât și estimarea poziției relative a genelor pe cromozomi.

## Obiective de învățare

La finalul temei, studentul va putea:

- defini înlănțuirea genelor și explica abaterea de la asortarea independentă;
- reprezenta un heterozigot în fază de cuplaj sau de repulsie;
- descrie mecanismul crossing-over-ului și formarea cromatidelor recombinante;
- identifica clasele parentale și recombinante într-o încrucișare-test;
- calcula frecvența recombinării și interpreta relația ei cu distanța genetică;
- explica limita de 50% și efectul crossing-over-urilor multiple asupra estimării distanței.

## Gene înlănțuite și grupuri de înlănțuire

Două sau mai multe gene sunt **înlănțuite** atunci când se află pe același cromozom și, prin urmare, tind să fie moștenite împreună. Totalitatea genelor unui cromozom formează un **grup de înlănțuire**. Într-un cariotip haploid, numărul teoretic de grupuri de înlănțuire corespunde numărului de cromozomi.

Înlănțuirea nu este absolută. Cu cât două locusuri sunt mai îndepărtate pe același cromozom, cu atât este mai probabil ca între ele să apară unul sau mai multe crossing-over-uri. Genele foarte apropiate produc puțini gameți recombinanți; genele foarte îndepărtate pot genera o proporție de recombinanți care se apropie de cea observată pentru gene neînlănțuite.

Legea asortării independente a lui Mendel descrie corect locusurile aflate pe cromozomi diferiți și, ca aproximație fenotipică, locusurile foarte îndepărtate pe același cromozom. Pentru gene apropiate, orientarea unei perechi de omologi la metafaza I nu separă independent fiecare locus: alelele aflate pe aceeași moleculă de ADN intră inițial împreună în același cromozom gametic. Recombinarea poate modifica această asociere.

## Faza de cuplaj și faza de repulsie

Pentru două gene, A/a și B/b, formula `AaBb` nu arată pe care cromozom omolog se află fiecare alelă. Este necesară precizarea **fazei** sau configurației haplotipurilor.

- În **faza de cuplaj** (cis), alelele dominante sunt pe un omolog, iar cele recesive pe celălalt: `AB/ab`.
- În **faza de repulsie** (trans), fiecare omolog poartă câte o alelă dominantă și una recesivă: `Ab/aB`.

Termenul **haplotip** desemnează combinația de alele purtată de un singur cromozom. Haplotipurile prezente înaintea recombinării sunt numite parentale. Astfel, pentru `AB/ab`, gameții parentali sunt `AB` și `ab`, iar gameții recombinanți sunt `Ab` și `aB`. Pentru `Ab/aB`, situația se inversează: `Ab` și `aB` sunt parentali, iar `AB` și `ab` sunt recombinanți.

Faza nu se deduce din aspectul „dominant” sau „recesiv” al descendenților. Ea se stabilește din originea parentală cunoscută ori, experimental, din clasele cele mai numeroase ale unei încrucișări-test, cu condiția ca diferențele de viabilitate să nu distorsioneze raportul.

| Caracteristică | Cuplaj (cis) | Repulsie (trans) |
|---|---|---|
| Genotip cromozomial | `AB/ab` | `Ab/aB` |
| Haplotipuri parentale | `AB`, `ab` | `Ab`, `aB` |
| Haplotipuri recombinante | `Ab`, `aB` | `AB`, `ab` |
| Clase așteptate mai frecvente la înlănțuire | `AB`, `ab` | `Ab`, `aB` |
| Frecvența totală a recombinanților | mai mică de 50% | mai mică de 50% |

## Crossing-over-ul în profaza I a meiozei

Recombinarea meiotică este realizată prin **crossing-over**, adică schimbul reciproc de segmente între cromatide nesurori ale cromozomilor omologi. Procesul are loc în profaza I, după replicarea ADN-ului, când fiecare omolog este alcătuit din două cromatide surori.

În zigoten, omologii se apropie și se aliniază prin complexul sinaptonemal; în pahiten, recombinarea este procesată între cromatide nesurori. Mecanismul pornește de la rupturi programate ale ADN-ului și presupune schimb de catene, sinteză și reparare. Unele evenimente se finalizează ca schimburi reciproce vizibile citologic ulterior sub forma **chiasmelor**. Chiasmele contribuie și la menținerea asocierii omologilor până la separarea lor corectă în anafaza I.

Un crossing-over simplu între două locusuri implică, de regulă, două dintre cele patru cromatide ale tetradei. Rezultatul este format din două cromatide parentale și două cromatide recombinante. De aceea, existența unui crossing-over într-o anumită tetradă nu înseamnă că toți gameții rezultați sunt recombinanți pentru markerii analizați.

Trebuie diferențiate două noțiuni:

- **crossing-over-ul** este evenimentul fizic dintre cromatide;
- **recombinantul** este cromatida, gametul sau descendentul care prezintă o asociere nouă a alelelor markerilor studiați.

Recombinarea poate include și conversie genică ori alte rezultate ale reparării ADN-ului, însă cartarea mendeliană clasică urmărește în principal produșii crossing-over-ului reciproc.

## Încrucișarea-test: metoda de evidențiere a gameților

Pentru două locusuri, heterozigotul analizat se încrucișează cu un individ dublu homozigot recesiv:

`AaBb × aabb`

Mai precis, faza heterozigotului trebuie notată, de exemplu `AB/ab × ab/ab`. Părintele tester produce numai gameți `ab`; în consecință, genotipul sau fenotipul fiecărui descendent, dacă dominanța este completă și caracterele pot fi recunoscute, indică direct gametul produs de heterozigot.

În absența înlănțuirii, cele patru tipuri de gameți (`AB`, `Ab`, `aB`, `ab`) apar în proporții apropiate de 25%, iar descendenții au raportul `1:1:1:1`. În cazul înlănțuirii, cele două clase parentale sunt, în mod obișnuit, mai numeroase, iar cele două clase recombinante sunt mai rare și aproximativ egale între ele. Abateri mici între clasele reciproce sunt firești în eșantioane finite; abateri mari pot sugera selecție, penetranță incompletă, erori de clasificare sau alte efecte biologice.

### Problema rezolvată 1: calculul frecvenței de recombinare

Într-o încrucișare-test `AB/ab × ab/ab` s-au obținut:

| Clasa descendenților | Număr | Tip |
|---|---:|---|
| `AB/ab` | 412 | parental |
| `ab/ab` | 398 | parental |
| `Ab/ab` | 96 | recombinant |
| `aB/ab` | 94 | recombinant |

Numărul total este `412 + 398 + 96 + 94 = 1.000`, iar numărul recombinanților este `96 + 94 = 190`.

Frecvența recombinării este:

`r = numărul descendenților recombinanți / numărul total al descendenților`

`r = 190 / 1.000 = 0,19 = 19%`

Clasele `AB` și `ab` fiind cele mai numeroase, heterozigotul este în fază de cuplaj. Pentru un interval relativ scurt, distanța genetică estimată este de aproximativ **19 unități de hartă**, adică **19 centimorgani (cM)**.

### Problema rezolvată 2: predicția claselor în fază de repulsie

Genele A și B sunt separate prin 12 cM. Un heterozigot în repulsie `Ab/aB` este încrucișat cu `ab/ab`, iar lotul așteptat cuprinde 800 de descendenți.

O frecvență totală de recombinare de 12% înseamnă că cele două clase recombinante însumează 12%, deci fiecare reprezintă aproximativ 6%. Clasele parentale însumează 88%, adică aproximativ 44% fiecare.

- parentali `Ab/ab`: `0,44 × 800 = 352`;
- parentali `aB/ab`: `0,44 × 800 = 352`;
- recombinanți `AB/ab`: `0,06 × 800 = 48`;
- recombinanți `ab/ab`: `0,06 × 800 = 48`.

Verificarea dă `352 + 352 + 48 + 48 = 800`, iar recombinanții reprezintă `(48 + 48)/800 = 0,12`, adică 12%.

## Frecvența recombinării și distanța genetică

Frecvența recombinării, notată adesea cu `r`, ia valori între 0 și 0,5. Pentru intervale scurte, procentul recombinanților aproximează numărul de centimorgani: 1% recombinare ≈ 1 cM. Centimorganul este o unitate de distanță genetică, nu o lungime fizică fixă. Numărul de perechi de baze corespunzător unui cM diferă între specii, cromozomi, sexe și regiuni cromozomiale, deoarece crossing-over-ul nu este distribuit uniform.

Relația simplă devine inexactă pentru locusuri îndepărtate. Între ele pot apărea două, trei sau mai multe crossing-over-uri. Un număr **impar** de schimburi între markerii exteriori produce, în principiu, o configurație recombinantă pentru acei markeri, dar un număr **par** poate restabili asocierea parentală. Prin urmare, unele cromatide care au participat la crossing-over-uri sunt clasificate ca parentale dacă sunt observați numai markerii de la capetele intervalului.

De exemplu, pornind de la `AB/ab`, două schimburi care implică aceleași cromatide între A și B pot produce din nou `AB` și `ab` pentru markerii exteriori. Descendenții nu dezvăluie direct aceste evenimente. Frecvența recombinării observate **subestimează** astfel numărul real de crossing-over-uri și distanța genetică, mai ales în intervalele lungi. Funcțiile de cartare și markerii intermediari permit estimări mai bune.

### De ce 50% este limita observabilă?

La asortarea independentă, jumătate dintre gameți au combinații parentale și jumătate au combinații recombinante; de aceea `r = 0,5`. Pentru locusuri foarte îndepărtate de pe același cromozom, crossing-over-urile multiple randomizează treptat asocierea alelelor, iar proporția observată se apropie tot de 50%. Nu poate depăși stabil această valoare, deoarece, la randomizare completă, cele patru haplotipuri sunt echiprobabile: două sunt definite ca parentale și două ca recombinante.

În consecință, o valoare de 50% nu permite diferențierea printr-o simplă încrucișare-test între două situații: gene aflate pe cromozomi diferiți și gene foarte îndepărtate pe același cromozom. Markerii intermediari sau analiza citogenetică și moleculară pot demonstra apartenența lor la același cromozom.

## Recombinare versus asortare independentă

Ambele procese produc combinații noi de alele, dar au cauze diferite.

| Criteriu | Recombinare prin crossing-over | Asortare independentă |
|---|---|---|
| Nivelul evenimentului | schimb de segmente între cromatide nesurori | orientarea independentă a perechilor de omologi la metafaza I |
| Gene vizate | locusuri de pe același cromozom | în principal locusuri de pe cromozomi diferiți |
| Proporția de recombinanți | între 0 și 50%, dependentă de distanță | 50% pentru combinațiile considerate recombinante într-un dihibrid |
| Utilitate pentru cartare | oferă informație despre distanța și ordinea genelor | nu estimează distanțe între cromozomi diferiți |
| Limitare | crossing-over-urile multiple pot rămâne nedetectate | orientarea nu oferă informație despre poziția locusurilor pe cromozomi |

Recombinarea nu contrazice segregarea alelelor. Alelele fiecărui locus se separă în continuare în meioză, însă crossing-over-ul modifică asocierea dintre alelele unor locusuri diferite înainte de formarea gameților.

## Factori care influențează interpretarea datelor

Frecvența recombinării este o proprietate statistică estimată din descendenți și trebuie interpretată cu prudență. Un lot mic produce fluctuații aleatoare mari. Viabilitatea diferită a genotipurilor, alelele letale, erorile de fenotipare și penetranța incompletă pot schimba numărul claselor fără să reflecte distanța dintre gene. În plus, ratele de crossing-over depind de specie, sex și regiune cromozomială; de exemplu, recombinarea meiotică lipsește la masculii de *Drosophila melanogaster*.

În analiza experimentală se recomandă: identificarea claselor reciproce, însumarea ambelor clase recombinante, folosirea unui eșantion suficient și testarea statistică a ipotezei. Pentru distanțe mari sau pentru stabilirea ordinii genelor sunt necesare încrucișări cu trei puncte și funcții de cartare, dezvoltate în tema cartării genetice.

## De reținut

- Genele de pe același cromozom sunt înlănțuite, dar crossing-over-ul poate separa alelele lor.
- Faza de cuplaj este `AB/ab`, iar faza de repulsie este `Ab/aB`; faza stabilește care clase sunt parentale.
- Crossing-over-ul are loc în profaza I între cromatide nesurori ale cromozomilor omologi.
- Într-o încrucișare-test, descendenții reflectă direct gameții heterozigotului analizat.
- Frecvența recombinării este `recombinanți/total`, variază între 0 și 50% și aproximează distanța în cM numai pentru intervale relativ scurte.
- Crossing-over-urile multiple pot restabili configurația parentală a markerilor exteriori și pot duce la subestimarea distanței reale.
- O frecvență de 50% poate indica fie gene neînlănțuite, fie gene foarte depărtate pe același cromozom.

## Întrebări de autoevaluare

1. Ce sunt genele înlănțuite și de ce nu respectă întotdeauna raportul de asortare independentă?
2. Care sunt gameții parentali și recombinanți ai unui heterozigot `Ab/aB`?
3. În ce etapă a meiozei are loc crossing-over-ul și ce cromatide participă?
4. Într-o încrucișare-test se obțin 720 de descendenți parentali și 180 recombinanți. Care este frecvența recombinării?
5. De ce frecvența recombinării nu depășește 50% și de ce poate subestima distanța dintre două locusuri?

## Răspunsuri la întrebările de autoevaluare

1. Sunt gene situate pe același cromozom, ale căror alele tind să intre împreună în gameți. Pentru locusuri apropiate, crossing-over-ul este prea rar pentru a produce cele patru clase în proporții egale.
2. În faza de repulsie `Ab/aB`, gameții parentali sunt `Ab` și `aB`, iar cei recombinanți sunt `AB` și `ab`.
3. Crossing-over-ul se desfășoară în profaza I, fiind procesat în principal în pahiten, între cromatide nesurori ale cromozomilor omologi.
4. Totalul este 900, iar `r = 180/900 = 0,20`; frecvența recombinării este 20%, corespunzând aproximativ la 20 cM pentru un interval relativ scurt.
5. La randomizare completă există două clase parentale și două recombinante echiprobabile, deci maximul observabil este 50%. Crossing-over-urile pare pot reface asocierea parentală a markerilor exteriori și rămân nedetectate, ceea ce subestimează distanța.

## Bibliografie și webografie selectivă

- Griffiths, A. J. F. et al. *An Introduction to Genetic Analysis*. W. H. Freeman, ediția a XI-a, 2015.
- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, ediția a VII-a, 2020.
- Snustad, D. P., Simmons, M. J. *Principles of Genetics*. Wiley, ediția a VII-a, 2015.
- [OpenStax Biology 2e — Laws of Inheritance](https://openstax.org/books/biology-2e/pages/12-3-laws-of-inheritance)
- [OpenStax Biology 2e — Eukaryotic Chromosomal Inheritance](https://openstax.org/books/biology-2e/pages/13-1-chromosomal-theory-and-genetic-linkage)
- [NCBI Bookshelf — Mapping Genomes](https://www.ncbi.nlm.nih.gov/books/NBK21116/)
- [Nature Education — Genetic Recombination](https://www.nature.com/scitable/topicpage/genetic-recombination-514/)
