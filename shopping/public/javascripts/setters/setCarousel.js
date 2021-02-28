// main.js에서 캐러셀 만들 부분에 캐러셀 세팅해주는 함수

import { carouselState, longClickState } from "../utils/states.js";
import Carousel from "../slides/carousel.js";

const setCarouselMaterials = (slideContents, buttonClassName, specifics, startNum) => {
  return new Promise((resolve, reject) => {
    const buttons = document.querySelector(`.${buttonClassName}`);
    const addedSpec = { buttons, slideContents, startNum };
    const materials = Object.assign(specifics, addedSpec);
    // const carouselMaterials = { slideContents, buttons, slideList, slideWidth, startNum, slideSpeed };
    resolve(materials);
  });
};

const setCarousel = (slideContents, buttonsClassName, spec, startNum) => (isLongClick, needPagination) => (paginationClassName, pageDotClassName) => {
  setCarouselMaterials(slideContents, buttonsClassName, spec, startNum).then((materials) => {
    const c_state = Object.assign({}, carouselState);
    if (!isLongClick) {
      const carousel = new Carousel(c_state);
      carousel.create(materials, isLongClick)(needPagination, paginationClassName, pageDotClassName);
    }
    if (isLongClick) {
      const l_state = Object.assign({}, longClickState);
      const carousel = new Carousel(c_state, l_state);
      carousel.create(materials, isLongClick)(needPagination, paginationClassName, pageDotClassName);
    }
  });
};

export { setCarousel };
