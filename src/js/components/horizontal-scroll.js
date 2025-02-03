// const horizontalContainer = document.querySelector('.about__container')

// // const aboutListItems = horizontalContainer.querySelectorAll('li')
// // aboutListItems.forEach(el => el.classList.add('anim'))
// // console.log(aboutListItems);

// const sections = gsap.utils.toArray('.about__container div')
// const animatedTexts = gsap.utils.toArray('.anim')

// // gsap.set('.about__container', {
// //   width: 100 * sections.length + '%',
// //   display: 'flex',
// // })

// let scrollTween = gsap.to(sections, {
//   xPercent: -100 * (sections.length -1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.about__container',
//     start: 'top top',
//     end: () =>
//       "+=" + document.querySelector('.about__container').offsetWidth,
//     scrub: 1,
//     pin: true,
//   }
// })


// // let scrollTween = gsap.timeline({
// //   scrollTrigger: {
// //     trigger: '.about__container',
// //     start: 'top top',
// //     end: 'bottom bottom',
// //     scrub: true,
// //   }
// // });

// // sections.forEach(section => {
// //   scrollTween.fromTo(section, { x: -100 }, { x: 0, duration: 1 });
// // });

// // animatedTexts.forEach(text => {
// //   scrollTween.fromTo(text, { opacity: 0 }, { opacity: 1, duration: 1 });
// // });
