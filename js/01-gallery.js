import { galleryItems } from "./gallery-items.js";

const basicLightbox = window.basicLightbox;


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
          data-source="${original}"
          alt="${description}" />
        </a>
      </li>
    `
    )
    .join("");
}

function handleGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const modalImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${modalImg}" alt="" width="800" height="600">
    `);
  instance.show();
  console.log(modalImg)
}
galleryEll.addEventListener("click", handleGalleryClick);
const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryEll.insertAdjacentHTML("beforeend", galleryCardsMarkup);

