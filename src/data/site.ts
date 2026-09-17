const calendlyUrl = (import.meta.env.PUBLIC_CALENDLY_URL ?? '').trim();

if (calendlyUrl) {
  const url = new URL(calendlyUrl);
  if (url.protocol !== 'https:' || url.hostname !== 'calendly.com' || url.pathname === '/' || url.username || url.password || url.port) {
    throw new Error('PUBLIC_CALENDLY_URL doit être un lien public https://calendly.com/...');
  }
}

export const site = {
  name: 'Margot Bechon',
  profession: 'Psychologue',
  calendlyUrl,
  // Informations à confirmer avant publication.
  email: '',
  phone: '',
  address: '',
};
