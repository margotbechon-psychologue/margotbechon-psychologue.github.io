# Margot Bechon · Psychologue

Site statique Astro avec trois pages : Accueil, Qui suis-je et Contact.

## Développement

Node.js 22.19 ou supérieur recommandé (voir `.node-version`).

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

### GitHub Pages

Le workflow `.github/workflows/deploy.yml` compile Astro puis publie le dossier généré à chaque push sur `main`.

Dans le dépôt GitHub, ouvrir **Settings → Pages → Build and deployment → Source** et choisir **GitHub Actions**. Le mode **Deploy from a branch** utilise Jekyll et ne peut pas compiler les fichiers Astro.

Après avoir poussé le workflow, suivre son exécution dans l'onglet **Actions**. L'adresse prévue est https://margotbechon-psychologue.github.io/.

### Cloudflare Pages

Alternative pour la suite : commande de compilation `npm run build`, dossier de sortie `dist`. Aucun déploiement Cloudflare ni domaine personnalisé configuré à ce stade. Adapter `site` dans `astro.config.mjs` lors du changement de domaine.

## Contenu

- Coordonnées et lien Calendly ou Doctolib : `src/data/site.ts`.
- Parcours et approche : `src/pages/qui-suis-je.astro`.
- Confirmer le nom affiché et compléter les informations avant publication.

Sans lien d'agenda, les boutons de rendez-vous mènent à Contact. Aucun formulaire ni suivi statistique n'est activé.

Le visuel `assets/cabinet-psychologue.png` est une illustration générée avec l'outil intégré, pas une photographie du cabinet réel. Prompt utilisé :

> A calm, welcoming therapy office suitable for a French psychologist website. Modern consultation room with two comfortable chairs, a small wooden side table, soft daylight through sheer curtains, a few plants, subtle bookshelves. No people. Photorealistic editorial interior photography, wide landscape composition with natural negative space on the left. Soft morning daylight, reassuring and professional. Gentle sage green, off-white, warm wood, muted terracotta accents. Linen upholstery, wood grain, matte walls, soft rug. No text, logos, watermark, medical symbols or faces; avoid luxury spa feeling.
