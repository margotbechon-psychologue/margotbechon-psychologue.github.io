# Margot Bechon · Psychologue

Site statique Astro : Accueil, Qui suis-je, Bilan neuropsychologique, TCC, Tarifs, Contact et Prendre rendez-vous.

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

- Coordonnées : `src/data/site.ts`.
- Parcours et approche : `src/pages/qui-suis-je.astro`.
- Présentation du bilan : `src/pages/bilan-neuropsychologique.astro`.
- Présentation des TCC : `src/pages/tcc.astro`. Texte fourni pour le cabinet : indications, déroulement des séances, exercices et durée de l'accompagnement.
- Honoraires : `src/pages/tarifs.astro`.
- Informations de rendez-vous : `src/pages/prendre-rendez-vous.astro`.
- Confirmer le nom affiché et compléter les informations avant publication.

Les boutons de rendez-vous mènent à la page dédiée. Les tarifs et modalités non confirmés restent indiqués comme à venir.

## Calendly

La page de rendez-vous affiche un agenda Calendly intégré lorsque `PUBLIC_CALENDLY_URL` contient un lien public de réservation `https://calendly.com/...`. Aucune clé API n'est nécessaire. Sans lien, le message d'attente reste affiché et aucun contenu Calendly n'est chargé.

En local, renseigner cette variable dans `.env` (voir `.env.example`), puis redémarrer Astro. Le lien est public et intégré au HTML lors de la compilation. La réservation, les disponibilités et les confirmations sont gérées par Calendly ; le site ne stocke pas les données du formulaire.

Pour GitHub Pages, définir la variable du dépôt **Settings → Secrets and variables → Actions → Variables → New repository variable**, nommée `PUBLIC_CALENDLY_URL`, puis relancer le workflow. Sur Cloudflare Pages, utiliser la même variable d'environnement de compilation et redéployer.

L'agenda est intégré avec une iframe, sans masquer la bannière de cookies Calendly. Un lien direct reste accessible si l'intégration est bloquée. Documentation : https://calendly.com/help/how-to-embed-calendly-with-an-iframe.

## Visuel

Le visuel `assets/cabinet-psychologue.png` est une illustration générée avec l'outil intégré, pas une photographie du cabinet réel. Prompt utilisé :

> A calm, welcoming therapy office suitable for a French psychologist website. Modern consultation room with two comfortable chairs, a small wooden side table, soft daylight through sheer curtains, a few plants, subtle bookshelves. No people. Photorealistic editorial interior photography, wide landscape composition with natural negative space on the left. Soft morning daylight, reassuring and professional. Gentle sage green, off-white, warm wood, muted terracotta accents. Linen upholstery, wood grain, matte walls, soft rug. No text, logos, watermark, medical symbols or faces; avoid luxury spa feeling.
