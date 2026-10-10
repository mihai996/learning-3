# Șablon intern pentru redactarea unei teme de Microbiologie

## Variabilele misiunii

- **TEMA:** `{titlul exact din structure.json}`
- **MODUL:** `{titlul modulului}`
- **FIȘIER ȚINTĂ:** `{calea absolută a fișierului Markdown}`
- **FIȘIERE REZERVATE:** toate celelalte fișiere din proiect

## Misiune

Redactează în limba română o lecție universitară completă pentru **TEMA**, potrivită pentru pregătirea unui examen introductiv de microbiologie. Modifică exclusiv **FIȘIER ȚINTĂ**. Păstrează titlul H1 exact cum apare în `dist/content/structure.json` și înlocuiește conținutul-placeholder existent.

## Cerințe editoriale obligatorii

1. Scrie clar, riguros și didactic, cu diacritice corecte. Definește termenii la prima utilizare și evită formulările vagi.
2. Urmează această structură, adaptând subtitlurile la temă:
   - introducere scurtă;
   - obiective de învățare (4–6 puncte);
   - conținut teoretic organizat logic în secțiuni H2/H3;
   - cel puțin un tabel comparativ sau de sinteză, dacă este relevant;
   - o secțiune „De reținut” cu ideile esențiale;
   - 5 întrebări de autoevaluare;
   - răspunsuri concise la întrebările de autoevaluare, într-o secțiune separată;
   - bibliografie/webografie selectivă.
3. Leagă mecanismele de exemple microbiologice concrete. Explică relațiile cauză–efect și diferențele care se confundă frecvent la examen.
4. Nu inventa date, citate sau surse. Pentru informații care se pot schimba (clasificare, nomenclatură, standarde), verifică surse primare sau instituționale actuale. Preferă manuale consacrate și surse precum NCBI, CDC, WHO, ASM, Bergey's Manual, ICNP/LPSN, după relevanță.
5. Folosește linkuri Markdown descriptive în bibliografie. Nu introduce citări numerice neverificabile și nu copia pasaje lungi din surse.
6. Țintește aproximativ 1.500–2.200 de cuvinte, fără a sacrifica acuratețea. Evită repetițiile și paragrafele excesiv de lungi.
7. Nu adăuga HTML, JavaScript, imagini fictive sau legături locale inexistente.

## Verificare înainte de predare

- recitește fișierul pentru coerență, ortografie și Markdown valid;
- confirmă că ai modificat numai **FIȘIER ȚINTĂ**;
- verifică existența tuturor secțiunilor obligatorii;
- raportează pe scurt ce ai adăugat și orice limitare rămasă.
