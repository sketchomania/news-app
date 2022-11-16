import {CONFIG} from '../config/config';

export async function services(category = 'general') {
  let articles = await fetch(
    `${CONFIG.ENDPOINT}?country=${CONFIG.COUNTRY}&category=${category}`,
    {
      headers: {
        'X-API-KEY': CONFIG.API_KEY,
      },
    },
  );

  let result = await articles.json();
  // articles = null;

  return result.articles;
}
