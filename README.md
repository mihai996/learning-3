# Atlas de studiu

Bibliotecă statică, optimizată pentru telefon, pentru pregătirea examenelor la:

- Microbiologie
- Biochimie
- Genetică
- Pedologie

Conținutul este separat de interfață. Notițele se scriu în Markdown în `content/`,
imaginile se pun în `assets/images/`, iar materialele interactive în
`interactives/`.

## Structura proiectului

```text
content/subjects/       notițe Markdown grupate pe discipline
assets/images/          imagini și diagrame statice
interactives/           scheme interactive independente
src/                    interfața, stilurile și navigarea
public/                 fișierele de bază ale aplicației web
scripts/                construire, verificare și previzualizare locală
dist/                   versiunea publicabilă, generată automat
```

## Adăugarea unui modul

1. Copiază `content/_model-modul.md` în folderul disciplinei.
2. Completează metadatele dintre delimitatoarele `---`.
3. Scrie notițele în Markdown.
4. Rulează `npm run check`. Catalogul site-ului este generat automat.

Identificatorul unui modul este calea lui relativă, fără extensia `.md`.
Fișierele care încep cu `_` sunt modele și nu apar în site.

## Utilizare locală

Este necesar Node.js 20 sau mai nou.

```bash
npm run check
npm run dev
```

Adresa locală este afișată în terminal. Site-ul nu păstrează progres, note sau
alte date despre cititor.

## Publicare

Proiectul produce un site static în `dist/`. Workflow-ul din
`.github/workflows/pages.yml` îl poate publica în GitHub Pages după ce proiectul
este urcat într-un repository GitHub și Pages este configurat cu sursa
„GitHub Actions”.

Site-ul nu are operații de scriere pe server. Conținutul public este read-only,
iar interfața nu salvează date în browser.
