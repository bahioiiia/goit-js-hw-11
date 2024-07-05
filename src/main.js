import { fetchImages } from './js/pixabay-api';
import {
  clearGallery,
  showLoading,
  hideLoading,
  displayImages,
  showNoResultsMessage,
  showErrorMessage,
} from './js/render-functions.js';

document.getElementById('searchButton').addEventListener('click', async () => {
  const query = document.getElementById('searchInput').value.trim();
  if (query === '') {
    return;
  }

  const perPage = 30;

  clearGallery();
  showLoading();

  try {
    const images = await fetchImages(query, perPage);
    console.log('Fetched images:', images);
    hideLoading();
    if (images.length === 0) {
      showNoResultsMessage();
    } else {
      displayImages(images);
    }
  } catch (error) {
    hideLoading();
    showErrorMessage(error);
  }
});