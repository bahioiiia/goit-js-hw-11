import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let lightbox;

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function showLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
}

export function hideLoading() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}

export function displayImages(images) {
  const gallery = document.getElementById('gallery');
  const imageElements = images
    .map(
      image => `
    <div class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" />
      </a>
      <div class="info">
        <p><strong>Likes:</strong><br>${image.likes}</p>
        <p><strong>Views:</strong><br>${image.views}</p>
        <p><strong>Comments:</strong><br>${image.comments}</p>
        <p><strong>Downloads:</strong><br>${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', imageElements);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a');
  }
}

export function showNoResultsMessage() {
  iziToast.info({
    title: 'No results',
    message: 'No images found for your query',
    position: 'topRight',
  });
}

export function showErrorMessage(error) {
  iziToast.error({
    title: 'Error',
    message: error.message,
    position: 'topRight',
  });
}

/* src/js/createImageCard.js
function createImageCard(image) {
  const card = document.createElement('div');
  card.className = 'card';

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.dataset.largeImageURL = image.largeImageURL;

  const details = document.createElement('div');
  details.className = 'card-details';
  (details.innerHTML = <p>Likes: ${image.likes}</p>),
    (<p>Views: ${image.views}</p>),
    (<p>Comments: ${image.comments}</p>),
    (<p>Downloads: ${image.downloads}</p>);

  card.appendChild(img);
  card.appendChild(details);

  return card;
} */