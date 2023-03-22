import { galleryItems } from "./gallery-items.js";

const basicLightBox = window.basicLightBox;


const galleryContainer = document.querySelector(".gallery");

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
  const instance = basicLightBox.create(`
      <img src="${modalImg}" alt="" width="800" height="600">
    `);
  instance.show();
  console.log(modalImg)
}

const galleryCardsMarkup = createGalleryCardsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardsMarkup);
galleryContainer.addEventListener("click", handleGalleryClick);



