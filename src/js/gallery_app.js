import {galleryItems} from './gallery_items';

const galleryContainer = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const modalImg = document.querySelector(".lightbox__image");
//const modalContent = document.querySelector(".lightbox__content");
//const overlay = document.querySelector(".lightbox__overlay")
const modalBtnClose = document.querySelector(".lightbox__button");


galleryContainer.addEventListener('click', modalOpen);
galleryContainer.insertAdjacentHTML("beforeend", galleryCardMarkup(galleryItems));
   
function galleryCardMarkup(img) {
    return img.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
                    <a class="gallery__link"
                     href=${original}>
                         <img class="gallery__image"
                          src=${preview}
                          data-source=${original}
                          alt=${description} />
                    </a>
                    </li>`
    }).join("");
};

function modalOpen(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    modal.classList.add('is-open');
    modalImg.src = event.target.dataset.source;
    modalImg.alt = event.target.alt;
  }
    return
};
 
modalBtnClose.addEventListener('click', modalClose);


function modalClose(event) {
  modal.classList.remove('is-open');
  modalImg.removeAttribute("src");
  modalImg.removeAttribute("alt");
    }