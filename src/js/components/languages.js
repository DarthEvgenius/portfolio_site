document.addEventListener('DOMContentLoaded', () => {

  // language handling
  const languageBlock = document.querySelector('.language')
  const validLanguages = ['en', 'ru']
  const localStorageLanguage = localStorage.getItem('lang')

  if (localStorageLanguage) {
    document.documentElement.setAttribute('lang', localStorageLanguage)
  }

  document.addEventListener('click', (e) => {
    const languageButton = e.target.closest('.language__select-option--btn')
    const currentLanguageButton = e.target.closest('.language__selected')

    if (languageButton) {
      const nextLang = languageButton.dataset.lang

      if (validLanguages.includes(nextLang)) {
        document.documentElement.setAttribute('lang', nextLang)
        localStorage.setItem('lang', nextLang)
      } else {
        console.warn('Not valid language!')
      }

      languageBlock.classList.remove('is-active')
    } else if (currentLanguageButton) {
      languageBlock.classList.add('is-active')
    } else {
      languageBlock.classList.remove('is-active')
    }
  })
})
