const mainElem = document.querySelector('.main')
const headerElem = document.querySelector('.header')

const headerHeight = headerElem.offsetHeight
mainElem.style.setProperty('--header-height', `${headerHeight}px`);

