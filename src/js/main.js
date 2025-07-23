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
  const localStorageTheme = localStorage.getItem("theme");
  const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

  let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

  buttonThemeToggler?.addEventListener('click', () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark"
    console.log('newTheme:', newTheme)

    const newText = newTheme === "dark" ? "Change to light theme" : "Change to dark theme"

    buttonThemeToggler.setAttribute("aria-label", newText)

    document.querySelector(".page").setAttribute("data-theme", newTheme)

    localStorage.setItem("theme", newTheme)

    currentThemeSetting = newTheme
  })

  // language handling
  const languageBlock = document.querySelector('.language')
  const currentLanguageButtons = document.querySelectorAll('.language__selected')
  const langOptionButtons = Array.from(document.querySelectorAll('.language__select-option--btn'))
  const validLanguages = ['en', 'ru']

  currentLanguageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      languageBlock.classList.add('is-active')
  })
  })

  langOptionButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      languageBlock.classList.remove('is-active')
      const targetData = e.currentTarget.dataset?.lang

      if (targetData && validLanguages.includes(targetData)) {
        document.documentElement.setAttribute('lang', targetData)
      } else {
        console.warn('Not valid language!')
      }
    })
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
