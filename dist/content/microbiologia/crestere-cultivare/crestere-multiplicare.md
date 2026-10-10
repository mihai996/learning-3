# Creșterea și multiplicarea microorganismelor

În microbiologie, **creșterea** poate desemna mărirea masei unei celule, dar este evaluată cel mai frecvent ca mărire a numărului de celule dintr-o populație. Multiplicarea microbiană depinde de disponibilitatea nutrienților, temperatură, pH, activitatea apei, oxigen și acumularea produșilor toxici. Cunoașterea dinamicii populației este esențială pentru cultivarea în laborator, controlul infecțiilor, industria alimentară și biotehnologie.

## Obiective de învățare

La finalul lecției, studentul va putea:

- să descrie etapele fisiunii binare și alternativele acesteia;
- să calculeze numărul de generații, timpul de generație și mărimea unei populații;
- să explice fazele curbei de creștere într-o cultură discontinuă;
- să compare metodele directe, viabile și indirecte de măsurare a creșterii;
- să descrie formarea și organizarea unui biofilm;
- să diferențieze creșterea planctonică de cea în biofilm și toleranța de rezistența antimicrobiană.

## Multiplicarea prin fisiune binară

Majoritatea bacteriilor și arheelor se multiplică asexuat prin **fisiune binară**, proces în care o celulă parentală produce două celule fiice. La bacteriile studiate clasic, procesul include:

1. creșterea masei și replicarea cromozomului, inițiată de regulă la originea de replicare;
2. separarea progresivă a copiilor cromozomiale pe măsură ce celula se alungește;
3. formarea inelului proteic FtsZ la mijlocul celulei și recrutarea complexului de diviziune;
4. invaginarea membranei și sinteza unui sept de perete celular;
5. separarea celulelor fiice sau menținerea lor într-un aranjament caracteristic.

Fisiunea binară nu este mitoză: procariotele nu formează fus mitotic și nu au un nucleu a cărui membrană să se dezorganizeze. În condiții favorabile, replicarea ADN-ului, creșterea și diviziunea sunt strâns coordonate. Dacă sinteza peretelui este blocată de un antibiotic beta-lactamic, septul nu se formează corect, iar celulele aflate în creștere pot liza osmotic.

Diviziunea nu este întotdeauna perfect simetrică, iar fisiunea binară nu este singurul mod de multiplicare. Unele microorganisme produc muguri, altele se fragmentează, iar unele bacterii filamentoase formează spori reproductivi. Aceștia nu trebuie confundați cu endosporii bacterieni: un endospor asigură supraviețuirea unei celule, nu creșterea numărului de indivizi.

## Timpul de generație și creșterea exponențială

**Timpul de generație** sau timpul de dublare, notat aici cu `g`, este timpul necesar unei populații pentru a se dubla în condiții date. Nu este o constantă absolută a speciei. Aceeași bacterie se poate multiplica rapid într-un mediu nutritiv optim și mult mai lent într-un țesut, într-un biofilm sau la temperatură nefavorabilă.

În faza exponențială, când fiecare celulă viabilă se divide la un ritm constant și nu există pierderi semnificative, populația urmează relația:

`Nₜ = N₀ × 2ⁿ`

unde `Nₜ` este numărul de celule la timpul `t`, `N₀` este numărul inițial, iar `n` este numărul de generații. Dacă timpul total și timpul de generație sunt cunoscute:

`n = t / g`

Prin urmare:

`g = t / n`

Numărul generațiilor poate fi calculat și din două determinări ale populației:

`n = (log₁₀ Nₜ − log₁₀ N₀) / log₁₀ 2`

Rata de generație `k` reprezintă numărul de generații pe unitatea de timp:

`k = n / t = 1 / g`

În forma continuă a ecuației exponențiale, `Nₜ = N₀ × e^(μt)`, iar rata specifică de creștere este `μ = ln 2 / g`. `k` și `μ` nu au aceeași valoare numerică, deoarece prima folosește dublări, iar a doua logaritmi naturali.

### Exemplu de calcul

O cultură pornește de la `1 × 10³` celule, iar `g = 30 minute`. După 180 de minute:

- `n = 180 / 30 = 6 generații`;
- `Nₜ = 1 × 10³ × 2⁶`;
- `Nₜ = 6,4 × 10⁴ celule`.

Rezultatul presupune diviziune sincronă idealizată, fără moarte celulară și fără limitarea nutrienților. Într-o cultură reală, modelul exponențial descrie bine numai o parte a evoluției populației.

## Curba de creștere într-o cultură discontinuă

Într-o **cultură discontinuă** sau de tip *batch*, un inocul este introdus într-un volum fix de mediu. Nu se adaugă continuu nutrienți și nu se elimină produșii de metabolism. Reprezentarea logaritmului numărului de celule viabile în funcție de timp produce o curbă cu patru faze clasice.

| Faza | Dinamica populației | Procese dominante | Semnificație practică |
|---|---|---|---|
| Lag | Numărul se schimbă puțin | Adaptare, reparare, sinteză de enzime și ribozomi | Durata depinde de starea inoculului și de noul mediu |
| Exponențială (log) | Numărul crește cu rată aproape constantă | Fisiune activă, metabolism intens | Celule relativ uniforme; sensibilitate crescută la agenți ce țintesc procesele de creștere |
| Staționară | Numărul viabil net rămâne aproximativ constant | Limitarea nutrienților, acumularea deșeurilor, răspuns la stres | Diviziunile sunt compensate aproximativ de moarte; pot apărea metaboliți secundari și sporulare |
| Declin | Numărul de celule viabile scade | Leziuni cumulative și moarte | Unele subpopulații persistă; scăderea nu este mereu perfect exponențială |

În faza lag, celulele sunt metabolic active chiar dacă numărul lor nu crește. Un inocul transferat între medii similare poate avea lag scurt; celule lezate sau mutate într-un mediu foarte diferit necesită adaptare mai lungă. În faza log, linia devine dreaptă pe o reprezentare semilogaritmică, iar panta permite calcularea ratei de creștere.

Faza staționară nu înseamnă oprirea totală a activității. Celulele activează răspunsuri la stres, folosesc produși eliberați de alte celule și pot modifica expresia genelor. La unele specii, limitarea nutrienților favorizează sporularea sau sinteza metaboliților secundari. În faza de declin, măsurarea turbidității poate rămâne ridicată deoarece celulele moarte și resturile continuă să împrăștie lumina, deși numărul viabil scade.

O cultură continuă, precum chemostatul, primește mediu proaspăt și pierde simultan același volum de cultură. Prin controlul nutrientului limitant și al ratei de diluție, populația poate fi menținută într-o stare apropiată de creșterea exponențială. Curba în patru faze descrie cultura *batch*, nu orice situație din natură sau din organism.

## Măsurarea creșterii microbiene

Alegerea metodei depinde de întrebarea experimentală: dorim numărul total de particule celulare, numărul de celule capabile să formeze colonii, biomasa sau activitatea metabolică? Aceste rezultate nu sunt interschimbabile.

### Numărarea directă și numărarea viabilă

Camerele de numărare microscopică permit calcularea rapidă a celulelor dintr-un volum cunoscut. Citometria în flux numără particule individuale și poate combina markeri de viabilitate. Fără coloranți adecvați, numărarea microscopică include de obicei celule vii și moarte și devine dificilă la concentrații mici sau când celulele sunt foarte mobile.

Numărarea pe plăci estimează **unitățile formatoare de colonii** (UFC), nu neapărat celulele individuale. O celulă viabilă, un lanț sau un agregat poate produce o singură colonie. Proba este diluată serial, însămânțată prin întindere ori încorporare, incubată, apoi se aleg plăci cu număr interpretabil de colonii. Calculul este:

`UFC/mL = numărul coloniilor / (volumul însămânțat în mL × diluția însămânțată)`

Exemplu: 86 de colonii obținute din `0,1 mL` al diluției `10⁻⁴` corespund la:

`86 / (0,1 × 10⁻⁴) = 8,6 × 10⁶ UFC/mL`.

Metoda UFC numără numai microorganismele care se pot multiplica în condițiile de mediu și incubare alese. Celulele viabile, dar necultivabile în acele condiții, nu vor forma colonii. Pentru probe foarte diluate, filtrarea prin membrană concentrează celulele înainte de incubare. Metoda numărului cel mai probabil estimează statistic concentrația din serii de tuburi pozitive și negative, fiind utilă când numărarea directă pe placă este dificilă.

### Metode indirecte

**Turbidimetria** măsoară împrăștierea luminii de către suspensie, raportată ca densitate optică (de exemplu, OD₆₀₀). Este rapidă și nedistructivă, dar necesită o curbă de calibrare pentru organismul și aparatul utilizat. La densități prea mici semnalul este slab, iar la densități mari relația nu mai este liniară și proba trebuie diluată. Turbiditatea nu separă automat celulele vii de cele moarte.

Biomasa poate fi estimată prin masă uscată, utilă mai ales pentru fungi filamentoși sau culturi dense. Activitatea poate fi urmărită prin consumul de oxigen ori substrat, producerea de acid, dioxid de carbon sau ATP. Metodele moleculare, precum PCR cantitativ, estimează copii de secvențe țintă, dar ADN-ul poate persista după moartea celulei; echivalarea directă cu viabilitatea necesită validare.

| Metodă | Ce măsoară | Avantaj principal | Limitare importantă |
|---|---|---|---|
| Cameră microscopică | Celule/particule totale | Rapidă | Nu separă implicit viabilele de moarte |
| Citometrie în flux | Particule și semnale fluorescente | Rapidă, multiparametrică | Necesită aparat și markeri validați |
| Numărare pe plăci | UFC viabile și cultivabile | Relevantă pentru capacitatea de multiplicare | Agregatele dau o UFC; rezultatul depinde de mediu |
| Turbiditate | Împrăștierea luminii/biomasă aproximativă | Monitorizare repetată, rapidă | Necesită calibrare; include celule moarte |
| Masă uscată | Biomasă totală | Utilă pentru creștere abundentă sau filamentoasă | Slabă la concentrații mici |
| Activitate metabolică | Consum sau produs metabolic | Poate fi foarte sensibilă | Conversia în număr de celule depinde de starea fiziologică |

## Creșterea în biofilm

Un **biofilm** este o comunitate microbiană atașată de o suprafață sau agregată la o interfață, încorporată într-o matrice extracelulară produsă de celule. Celulele libere din lichid sunt numite planctonice. Biofilmele se formează pe roci, dinți, conducte, catetere și țesuturi și pot conține una sau mai multe specii.

Modelul general de dezvoltare include:

1. apropierea și atașarea inițială, adesea reversibilă;
2. atașarea stabilă prin adezine, pili și producerea matricei;
3. multiplicarea și formarea microcoloniilor;
4. maturarea unei comunități cu arhitectură și gradienți locali;
5. dispersia unor celule, care pot coloniza alte suprafețe.

Matricea conține proporții variabile de polizaharide, proteine, lipide și ADN extracelular. Ea menține celulele împreună, reține apă și enzime și poate încetini pătrunderea unor antimicrobiene. Consumul local produce gradienți de oxigen, nutrienți și pH; astfel, celulele de la suprafață pot crește rapid, iar cele din profunzime pot avea metabolism lent.

Toleranța unui biofilm nu se explică numai printr-o barieră fizică. Ritmul redus de creștere diminuează eficiența medicamentelor care acționează asupra proceselor active, răspunsurile la stres se modifică, iar subpopulații tranzitoriu tolerante pot supraviețui. **Toleranța** este supraviețuirea temporară fără creșterea obligatorie a concentrației minime inhibitorii; **rezistența** este o proprietate ereditară care permite multiplicarea la concentrații de antibiotic ce inhibă tulpina sensibilă. Biofilmul poate favoriza selecția și schimbul de gene, dar nu orice celulă din biofilm este genetic rezistentă.

Curba clasică de creștere nu descrie complet biofilmul: în aceeași comunitate coexistă microzone aflate în stări fiziologice diferite. De aceea, biomasa colorată, numărul de UFC după desprindere și microscopia biofilmului răspund la întrebări diferite și trebuie interpretate împreună.

## De reținut

- Fisiunea binară coordonează replicarea ADN-ului, segregarea cromozomilor și formarea septului; nu este mitoză.
- În creștere exponențială, `Nₜ = N₀ × 2ⁿ`, iar `g = t/n`.
- Timpul de generație depinde de organism și de condițiile de mediu.
- Curba *batch* are fazele lag, exponențială, staționară și declin; faza lag nu înseamnă inactivitate.
- UFC estimează unități cultivabile, nu neapărat celule individuale.
- Turbiditatea este rapidă, dar include particule vii și moarte și necesită calibrare.
- Biofilmul conține matrice și microzone metabolice; populația sa nu este fiziologic uniformă.
- Toleranța biofilmului și rezistența genetică la antibiotice sunt concepte diferite.

## Întrebări de autoevaluare

1. Care sunt etapele principale ale fisiunii binare și prin ce diferă aceasta de mitoză?
2. O cultură pornește de la `5 × 10²` celule și trece prin 8 generații. Câte celule sunt estimate la final?
3. Ce procese definesc cele patru faze ale curbei de creștere *batch*?
4. De ce numărul microscopic, UFC și densitatea optică pot da rezultate diferite pentru aceeași probă?
5. Cum contribuie organizarea biofilmului la toleranța antimicrobiană și de ce aceasta nu este sinonimă cu rezistența?

## Răspunsuri la întrebările de autoevaluare

1. Cromozomul se replică și se separă, FtsZ organizează septul, iar membrana și peretele se divid. Nu există nucleu, fus mitotic sau mitoză.
2. `Nₜ = 5 × 10² × 2⁸ = 5 × 10² × 256 = 1,28 × 10⁵ celule`.
3. Lag: adaptare; log: diviziune exponențială; staționară: echilibru net între multiplicare și moarte sub limitări; declin: scăderea celulelor viabile.
4. Microscopia include frecvent vii și moarte, UFC detectează unități cultivabile și agregate, iar densitatea optică estimează împrăștierea luminii de întreaga suspensie.
5. Matricea, gradienții și metabolismul lent protejează subpopulații. Toleranța este o stare de supraviețuire, în timp ce rezistența permite creșterea și este transmisă genetic.

## Bibliografie și webografie selectivă

- Madigan, M. T. et al. *Brock Biology of Microorganisms*. Pearson, ediția a 16-a, 2021.
- Willey, J. M., Sherwood, L. M., Woolverton, C. J. *Prescott's Microbiology*. McGraw Hill, ediția a 12-a, 2022.
- [How Microbes Grow — OpenStax Microbiology](https://openstax.org/books/microbiology/pages/9-1-how-microbes-grow)
- [Capturing the micro-communities: biogenesis and architecture of bacterial biofilms — NCBI/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC11750278/)
- [Biofilm dispersion — NCBI/PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC8564779/)
- [The biofilm community resurfaces — American Society for Microbiology](https://asm.org/getmedia/c651b5cb-3e8a-41f6-a616-94f61793bb7b/2022_biofilms_jb_online_review.pdf)
