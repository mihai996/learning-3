# Conținut

Fiecare notiță publică este un fișier Markdown cu metadate YAML simple:

- `title` — titlul afișat;
- `subject` — cheia disciplinei;
- `order` — ordinea în disciplină;
- `duration` — timpul estimat de lectură;
- `summary` — descrierea scurtă;
- `tags` — etichete separate prin virgulă;
- `status` — `draft`, `review` sau `ready`;
- `interactive` — opțional, calea către un HTML din `interactives/`.

Cheile disciplinelor sunt `microbiologie`, `biochimie`, `genetica` și
`pedologie`. Pot fi adăugate discipline noi în `scripts/content-config.mjs`.
