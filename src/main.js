import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  showLoading,
  hideLoading,
  displayImages,
  notFoundMessage,
  errorMessage,
} from './js/render-functions.js';

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    return;
  }

  const perPage = 6;

  clearGallery();
  showLoading();

  try {
    const images = await fetchImages(query, perPage);
    console.log('Fetched images:', images);
    hideLoading();
    if (images.length === 0) {
      notFoundMessage();
    } else {
      displayImages(images);
    }
  } catch (error) {
    hideLoading();
    errorMessage(error);
  }
});