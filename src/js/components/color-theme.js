document.addEventListener('DOMContentLoaded', () => {
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
