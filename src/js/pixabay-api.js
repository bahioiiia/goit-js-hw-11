export async function fetchImages(query, perPage = 12) {
  const API_KEY = '44785846-fbfadd775113e3685d7630ccf';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&pretty=true&per_page=${perPage}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Fetching images failed:', error);
    throw error;
  }
}