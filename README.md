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

Les réservations sont temporairement masquées sur le site : `bookingEnabled` vaut `false` dans `src/data/site.ts`. Aucun agenda ni lien Calendly n'est rendu dans les pages, même si `PUBLIC_CALENDLY_URL` est renseigné. La page de rendez-vous affiche le message d'attente.

Pour rouvrir les réservations, passer `bookingEnabled` à `true` puis redéployer. Le lien du cabinet est conservé dans `src/data/site.ts` et concerne les consultations psychologiques, pas les bilans. Aucune clé API n'est nécessaire.

Pour remplacer l'agenda en local, renseigner `PUBLIC_CALENDLY_URL` dans `.env` (voir `.env.example`), puis redémarrer Astro. Une variable absente ou vide conserve le lien du cabinet. Le lien est public et intégré au HTML lors de la compilation. La réservation, les disponibilités et les confirmations sont gérées par Calendly ; le site ne stocke pas les données du formulaire.

Une fois les réservations réactivées, GitHub Pages utilisera le lien par défaut. Pour le remplacer, définir la variable du dépôt **Settings → Secrets and variables → Actions → Variables → New repository variable**, nommée `PUBLIC_CALENDLY_URL`, puis relancer le workflow. Sur Cloudflare Pages, utiliser la même variable d'environnement de compilation et redéployer.

Quand il est activé, l'agenda est intégré avec une iframe, sans masquer la bannière de cookies Calendly. Un lien direct reste accessible si l'intégration est bloquée. Masquer Calendly sur le site ne désactive pas l'événement sur Calendly : pour empêcher aussi les réservations par un lien déjà partagé, désactiver l'événement depuis le compte Calendly. Documentation : https://calendly.com/help/how-to-embed-calendly-with-an-iframe.

## Visuel

Le visuel `assets/cabinet-psychologue.png` est une illustration générée avec l'outil intégré, pas une photographie du cabinet réel. Prompt utilisé :

> A calm, welcoming therapy office suitable for a French psychologist website. Modern consultation room with two comfortable chairs, a small wooden side table, soft daylight through sheer curtains, a few plants, subtle bookshelves. No people. Photorealistic editorial interior photography, wide landscape composition with natural negative space on the left. Soft morning daylight, reassuring and professional. Gentle sage green, off-white, warm wood, muted terracotta accents. Linen upholstery, wood grain, matte walls, soft rug. No text, logos, watermark, medical symbols or faces; avoid luxury spa feeling.
