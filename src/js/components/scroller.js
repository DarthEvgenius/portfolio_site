// common preferences for all scrollers
const scrollers = document.querySelectorAll('.scroller')

// handle 'prefers-reduced-motion' and run animations only when allowed
if(!window.matchMedia('(prefers-reduced-motion: true)').matches) {
  addAnimation()
}

function addAnimation() {
  for (scroller of scrollers) {
    scroller.setAttribute('data-animated', true)

    // get content of .scroller__inner
    // make an array from HTML collection
    const scrollerInner = scroller.querySelector('.scroller__inner')
    const scrollerContentElems = Array.from(scrollerInner.children)

    for (elem of scrollerContentElems) {
      // duplicate each element of array
      const copyElem = elem.cloneNode(true)
      // add aria-hidden attr
      copyElem.setAttribute('aria-hidden', true)
      // append to scrollerInner
      scrollerInner.appendChild(copyElem)
    }
  }
}
