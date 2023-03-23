import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryEll = document.querySelector(".gallery");

function createGalleryCardsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link"
        href="${original}">
      <img class="gallery__image" 
          src="${preview}"
          alt="${description}" />
        </a>
      </li>
    `
    )
    .join("");
}

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryEll.insertAdjacentHTML("beforeend", galleryCardsMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
     caption: true,
      captionDelay: 250 });