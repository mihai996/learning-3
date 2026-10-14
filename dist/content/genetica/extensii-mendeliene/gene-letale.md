# Genele letale

Genele sunt indispensabile vieții, însă anumite variante ale lor pot perturba atât de grav o funcție esențială încât organismul nu mai supraviețuiește. În limbajul clasic se vorbește despre **gene letale**, dar formularea mai exactă este **alele letale** sau **genotipuri letale**: nu gena ca unitate este nocivă, ci o anumită variantă, într-o anumită combinație genetică și într-un anumit mediu. Letalitatea poate apărea înainte de naștere sau eclozare, după naștere ori numai în condiții restrictive. Prin eliminarea unei clase genotipice, ea modifică rapoartele mendeliene observate la descendenții viabili.

## Obiective de învățare

La finalul acestei teme, studentul va putea:

- să definească alela letală și să explice de ce letalitatea aparține unui genotip și unui context biologic;
- să diferențieze letalitatea recesivă, dominantă și condițională;
- să coreleze momentul acțiunii alelei cu modul în care sunt numărați descendenții;
- să derive raportul de `2:1` dintre supraviețuitori într-o încrucișare între heterozigoți pentru o alelă recesiv letală;
- să interpreteze exemplul clasic al alelei `A^y` la șoarece;
- să rezolve probleme de probabilitate și să recunoască abaterile produse de viabilitatea diferențială.

## Noțiunea de letalitate genetică

O **alelă letală** este o variantă genetică ce determină moartea purtătorului într-un anumit genotip, stadiu de dezvoltare și mediu. Efectul apare, de regulă, prin pierderea sau dereglarea unei funcții esențiale: replicarea ADN-ului, diviziunea celulară, formarea unui organ, metabolismul energetic ori menținerea homeostaziei.

Este importantă separarea a trei niveluri:

1. **Alela** este varianta de ADN.
2. **Genotipul** stabilește dacă efectul alelei este manifest, de exemplu numai în homozigoție.
3. **Condițiile biologice** — fondul genetic, sexul, temperatura, dieta sau stadiul de dezvoltare — pot modifica expresia efectului.

Termenul „letal” nu trebuie confundat cu „dăunător”. O alelă **subletală** sau **semiletală** reduce viabilitatea, dar nu omoară toți indivizii cu genotipul respectiv. În cazul letalității complete, penetranța efectului letal este de 100% în condițiile definite; în practică, unele alele prezintă penetranță incompletă, iar proporția supraviețuitorilor depinde de mediu și de fondul genetic.

## Clasificarea alelelor letale

Clasificarea se poate face după relația de dominanță, momentul acțiunii sau dependența de mediu. Aceste criterii sunt complementare: aceeași alelă poate fi, de exemplu, recesiv letală și embrionară.

| Tip de letalitate | Genotip afectat tipic | Particularitate | Consecință în descendență |
|---|---|---|---|
| Recesivă | homozigotul mutant `aa` | heterozigotul `Aa` supraviețuiește și transmite alela | din `Aa × Aa`, clasa `aa` dispare; între viabili apare frecvent `2 Aa : 1 AA` |
| Dominantă | `Aa` și, dacă este posibil, `AA` | efectul este vizibil cu o singură copie | alelele cu efect precoce sunt rare și persistă mai ales prin mutații noi; cele cu efect tardiv se pot transmite |
| Condițională | genotipul mutant, numai în condiții restrictive | organismul trăiește în condiții permisive | raportul de supraviețuire se schimbă odată cu temperatura, substratul nutritiv sau alt factor |
| Gametică | un anumit tip de gamet | gametul nu se formează ori nu funcționează | abaterea apare înaintea fecundației |
| Zigotică/embrionară | zigotul sau embrionul | fecundația are loc, dar produsul de concepție moare | genotipul poate fi detectat la concepție, însă lipsește dintre nou-născuți |
| Tardivă | juvenilul sau adultul | dezvoltarea timpurie și reproducerea pot fi posibile | alela poate rămâne în populație, inclusiv dacă este dominantă |

### Letalitatea recesivă

O alelă recesiv letală produce moartea, de obicei, numai la homozigoți. Heterozigoții au o copie funcțională a genei, suficientă pentru supraviețuire, și acționează ca purtători. Din acest motiv, selecția nu elimină rapid alela: ea poate rămâne „ascunsă” în heterozigoți și reapare când doi purtători au descendenți.

La încrucișarea `Aa × Aa`, segregarea la fecundație este mendeliană:

- `1/4 AA`;
- `1/2 Aa`;
- `1/4 aa`.

Dacă `aa` este letal înainte de momentul examinării, între indivizii viabili rămân `1/4 AA + 1/2 Aa = 3/4` din concepții. Normalizând numai clasele viabile, rezultă:

- `P(AA | viabil) = (1/4)/(3/4) = 1/3`;
- `P(Aa | viabil) = (1/2)/(3/4) = 2/3`.

Raportul este deci **2 heterozigoți : 1 homozigot normal**, nu `3:1`. Segregarea alelelor nu s-a schimbat; s-a schimbat compoziția lotului observat deoarece o clasă a fost eliminată după fecundație.

### Letalitatea dominantă

O alelă dominant letală poate produce efectul sever în heterozigoție. Dacă moartea survine înainte ca purtătorul să se reproducă și penetranța este completă, alela nu este transmisă în mod obișnuit și apare mai ales prin mutații noi. Dacă efectul se instalează după vârsta reproductivă, alela poate fi transmisă mai multor generații. Boala Huntington ilustrează o boală autozomal dominantă severă, frecvent cu debut la adult; este un exemplu util pentru persistența unui efect dominant tardiv, nu un model de letalitate embrionară.

Unele variante dominante produc un efect **dominant-negativ**, în care produsul mutant interferează cu produsul normal, sau un câștig de funcție toxic. Totuși, dominanța fenotipului nu implică automat letalitate: această concluzie se stabilește din efectul biologic și din supraviețuire.

### Letalitatea condițională

O mutație condițional letală permite supraviețuirea în condiții **permisive**, dar cauzează moartea în condiții **restrictive**. Mutațiile sensibile la temperatură sunt exemple clasice: proteina mutantă funcționează la o temperatură, dar își pierde stabilitatea sau activitatea la alta.

În genetică microbiană, mutanții condițional letali permit studierea genelor esențiale. O cultură de drojdie sau bacterii poate fi multiplicată în condiția permisivă, apoi transferată în condiția restrictivă. Procesele care se opresc după transfer indică funcția genei afectate. Acest instrument este valoros deoarece o deleție completă a unei gene esențiale nu ar produce o linie viabilă pentru analiză.

O mutație auxotrofă poate părea letală pe mediu minimal și poate fi salvată prin suplimentarea metabolitului necesar. Ea reprezintă letalitate condițională numai în raport cu mediul definit; pe mediu complet, celula rămâne viabilă.

## Momentul acțiunii și populația observată

Momentul morții determină ce raport va fi măsurat. Înainte de interpretare trebuie precizată **unitatea de observație**:

- gameți funcționali;
- zigoți sau embrioni formați;
- nou-născuți ori indivizi eclozați;
- adulți ajunși la reproducere.

**Concepțiile** includ toți zigoții rezultați după fecundație, inclusiv pe cei care mor ulterior. **Supraviețuitorii** reprezintă subsetul examinat după acțiunea alelei letale. Astfel, la `Aa × Aa`, raportul genotipic la concepție rămâne `1:2:1`, în timp ce raportul dintre supraviețuitori poate deveni `1:2`, adesea scris `2:1` dacă heterozigoții au fenotipul urmărit.

Într-un experiment real, numărul mic al descendenților, fertilitatea redusă, pierderile independente de genotip și penetranța incompletă pot îndepărta valorile de raportul teoretic. O abatere de la `3:1` sugerează letalitate, dar nu o demonstrează singură. Confirmarea poate necesita genotiparea embrionilor, examinarea dimensiunii cuiburilor și compararea mai multor stadii de dezvoltare.

## Exemplul clasic: alela `A^y` la șoarece

La șoarece, alela notată oficial `A^y` (redată și `A^Y` în unele scheme didactice) produce culoarea galbenă a blănii în heterozigoție, dar este letală în homozigoție. Pentru simplificare, vom nota alela alternativă viabilă prin `A`:

- `A^y/A` — șoarece galben, viabil;
- `A/A` — șoarece cu fenotip negalben, viabil;
- `A^y/A^y` — genotip embrionar letal.

La încrucișarea a doi șoareci galbeni, ambii trebuie să fie heterozigoți:

|  | Gamet `A^y` | Gamet `A` |
|---|---|---|
| **Gamet `A^y`** | `A^y/A^y` — letal | `A^y/A` — galben |
| **Gamet `A`** | `A^y/A` — galben | `A/A` — negalben |

La concepție se obțin `1/4 A^y/A^y`, `1/2 A^y/A` și `1/4 A/A`. După moartea embrionilor `A^y/A^y`, dintre puii vii se așteaptă `2/3` galbeni și `1/3` negalbeni, adică raportul **2:1**. Alela are, așadar, două relații fenotipice diferite: este dominantă pentru culoarea galbenă a blănii, dar efectul letal se manifestă recesiv, numai la homozigoți. Această distincție este frecvent evaluată la examen.

## Probleme rezolvate

### Problema 1: numărul așteptat de supraviețuitori

Doi șoareci galbeni `A^y/A` produc 120 de concepții. Presupunând segregare mendeliană, letalitate completă a homozigoților `A^y/A^y` și absența altor pierderi, câți pui viabili și ce fenotipuri sunt așteptate?

La concepție:

- `120 × 1/4 = 30` embrioni `A^y/A^y`, care mor;
- `120 × 1/2 = 60` pui galbeni `A^y/A`;
- `120 × 1/4 = 30` pui negalbeni `A/A`.

Se așteaptă **90 de pui viabili**, dintre care 60 galbeni și 30 negalbeni. Raportul dintre viabili este `60:30 = 2:1`. Nu este corect să afirmăm că 120 de pui născuți se împart în aceste clase: numărul 120 se referă la concepții.

### Problema 2: probabilitate condiționată

Într-o boală recesiv letală, doi purtători `Aa` au un descendent care a supraviețuit până după stadiul în care `aa` ar fi murit. Care este probabilitatea ca descendentul să fie purtător?

Clasele viabile sunt `AA` și `Aa`, cu ponderi inițiale `1/4` și `1/2`. Probabilitatea condiționată este:

`P(Aa | viabil) = (1/2)/(3/4) = 2/3`.

Răspunsul nu este `1/2`, deoarece informația despre supraviețuire exclude clasa `aa` și impune renormalizarea probabilităților.

### Problema 3: identificarea stadiului letal

O încrucișare produce 400 de zigoți genotipați: 98 `AA`, 204 `Aa` și 98 `aa`. La naștere sunt observați 96 `AA`, 198 `Aa` și niciun `aa`. Ce concluzie este justificată?

Raportul la zigot este apropiat de `1:2:1`, deci fecundația și segregarea sunt compatibile cu modelul mendelian. Dispariția ulterioară a clasei `aa` indică letalitate **zigotică sau embrionară**, nu imposibilitatea formării gameților `a`. Mici diferențe între numerele inițiale și cele de la naștere pot reprezenta mortalitate de fond.

## Capcane frecvente de interpretare

- **„O alelă dominantă este mai frecventă sau mai periculoasă.”** Dominanța descrie fenotipul heterozigotului, nu frecvența și nici severitatea.
- **„Raportul `2:1` încalcă legea segregării.”** Alelele pot segrega normal; raportul se modifică prin moartea unei clase după fecundație.
- **„Un sfert dintre supraviețuitori au murit.”** Contradicția vine din amestecarea numitorilor. Un sfert dintre concepții pot aparține clasei letale; indivizii morți nu fac parte dintre supraviețuitori.
- **„Alela `A^y` este pur și simplu dominantă.”** Este dominantă pentru culoarea galbenă, dar recesivă pentru letalitate.
- **„Absența unui genotip dovedește letalitatea embrionară.”** Absența poate proveni și din distorsiunea segregării, incompatibilitate gametică sau eșantion mic; stadiile trebuie investigate.

## De reținut

- Denumirea precisă este alelă sau genotip letal; efectul depinde de doză, stadiu și mediu.
- Alelele recesiv letale pot persista în heterozigoți aparent sănătoși.
- Din încrucișarea a doi heterozigoți, raportul este `1:2:1` la concepție, dar devine `1:2` între viabili dacă homozigotul recesiv moare.
- Raportul fenotipic `2:1` este un indiciu clasic al eliminării unei clase genotipice.
- `A^y` este dominantă pentru blana galbenă la șoarece și recesiv letală în homozigoție.
- Mutațiile condițional letale sunt instrumente experimentale pentru studierea genelor esențiale.

## Întrebări de autoevaluare

1. De ce este mai exact să vorbim despre o „alelă letală” decât despre o „genă letală”?
2. Cum se obține raportul `2:1` între descendenții viabili ai încrucișării `Aa × Aa`, dacă `aa` este letal?
3. Ce două relații de dominanță evidențiază alela `A^y` la șoarece?
4. De ce poate fi transmisă într-o populație o alelă dominantă cu efect letal tardiv?
5. Ce diferență există între o mutație condițional letală și o alelă recesiv letală clasică?

## Răspunsuri la întrebările de autoevaluare

1. Gena îndeplinește în mod normal o funcție biologică; numai o anumită variantă și combinație genotipică produce efectul letal, în condiții definite.
2. La concepție apar `1/4 AA`, `1/2 Aa` și `1/4 aa`. După eliminarea clasei `aa`, clasele viabile se renormalizează la `1/3 AA` și `2/3 Aa`, adică `1:2` sau `2:1` dacă este menționat mai întâi heterozigotul.
3. `A^y` este dominantă față de alela alternativă pentru culoarea galbenă a blănii, dar efectul letal este recesiv deoarece apare la `A^y/A^y`.
4. Dacă efectul apare după vârsta reproductivă, purtătorul poate avea descendenți înainte de manifestarea bolii și poate transmite alela.
5. Alela condițional letală produce moartea numai într-un mediu restrictiv, în timp ce o alelă recesiv letală clasică este definită în primul rând prin manifestarea efectului la homozigoți; cele două categorii descriu criterii diferite și se pot suprapune.

## Bibliografie selectivă

- OpenStax. [Extensions of the Laws of Inheritance](https://openstax.org/books/concepts-biology/pages/8-3-extensions-of-the-laws-of-inheritance). *Concepts of Biology*.
- Pierce, B. A. *Genetics: A Conceptual Approach*. Macmillan Learning, edițiile recente, capitolele despre extensiile eredității mendeliene.
- Griffiths, A. J. F. și colab. [An Introduction to Genetic Analysis](https://www.ncbi.nlm.nih.gov/books/NBK21766/). NCBI Bookshelf, capitolele despre segregare și interacțiuni genice.
- Mouse Genome Informatics, The Jackson Laboratory. [A^y — agouti yellow, fișa alelei](https://www.informatics.jax.org/allele/MGI:1856798), nomenclatură, structură și fenotipuri asociate.
- Alberts, B. și colab. [Molecular Biology of the Cell](https://www.ncbi.nlm.nih.gov/books/NBK21054/). NCBI Bookshelf, secțiunile despre gene esențiale și analiza mutanților condiționali.
