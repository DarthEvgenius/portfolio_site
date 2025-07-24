import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import html2pdf from 'html2pdf.js';

// Настройки pdf
const opt = {
  margin: 0.5,
  filename: 'Eugene_Zinin.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
}

document.addEventListener('DOMContentLoaded', () => {
  // pdf constructing
  const buttonPdf = document.getElementById('download-pdf')

  buttonPdf?.addEventListener('click', () => {
    const element = document.body

    const forPrint = element.querySelector('.print-only')

    if (forPrint) {
      forPrint.style.display = 'block'

      html2pdf().set(opt).from(forPrint).save().then(() => {
        forPrint.style.display = 'none'
      })
    }
  })

  // dark/light theme preferences setting
  const buttonThemeToggler = document.getElementById('theme-toggler')
  const localStorageTheme = localStorage.getItem("theme")
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)")

  if (localStorageTheme) {
    document.querySelector(".page").setAttribute("data-theme", localStorageTheme)
  }

  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark })

  buttonThemeToggler?.addEventListener('click', () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark"

    const newText = newTheme === "dark" ? "Change to light theme" : "Change to dark theme"

    buttonThemeToggler.setAttribute("aria-label", newText)

    document.querySelector(".page").setAttribute("data-theme", newTheme)

    localStorage.setItem("theme", newTheme)

    currentThemeSetting = newTheme
  })

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

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}
