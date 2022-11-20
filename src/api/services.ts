import {CONFIG} from '../config/config';

export async function categoryService(category = 'general') {
  let articles = await fetch(
    `${CONFIG.ENDPOINT}top-headlines?country=${CONFIG.COUNTRY}&category=${category}`,
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

export async function searchService(term = 'economy') {
  let articles = await fetch(`${CONFIG.ENDPOINT}everything?q=${term}`, {
    headers: {
      'X-API-KEY': CONFIG.API_KEY,
    },
  });

  let result = await articles.json();
  // articles = null;

  return result.articles;
}
