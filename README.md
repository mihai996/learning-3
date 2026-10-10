# Learning 3

Site static, optimizat pentru telefon, pentru organizarea materialelor de studiu în ierarhia:

`curs → modul → temă`

## Unde se modifică informația

- `dist/content/structure.json` — cuprinsul afișat în meniul lateral.
- `dist/content/<curs>/<modul>/<tema>.md` — conținutul temelor.
- `dist/content/<curs>/<modul>/images/` — imaginile temelor.
- `dist/content/<curs>/<modul>/interactive/` — vizualizări interactive HTML/JavaScript.

Codul interfeței este separat în `dist/assets/`.

## Adăugarea unei teme

1. Creează fișierul `.md` în dosarul cursului și modulului potrivit.
2. Adaugă tema în `dist/content/structure.json`.
3. Deschide site-ul printr-un server static; fișierele Markdown nu sunt încărcate corect direct din `file://`.

## Publicare pe GitHub Pages

Dosarul public este `dist/`. Workflow-ul `.github/workflows/pages.yml` publică automat acest dosar după fiecare modificare trimisă pe ramura `main`.

În artifactul GitHub Pages, `dist/index.html` devine `index.html` din rădăcina site-ului. Nu este necesară duplicarea lui în rădăcina repository-ului.
