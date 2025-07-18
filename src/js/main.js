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
  const button = document.getElementById('download-pdf');


  button?.addEventListener('click', () => {
    const element = document.body

    const forPrint = element.querySelector('.print-only')

    if (forPrint) {
      forPrint.style.display = 'block'

      html2pdf().set(opt).from(forPrint).save().then(() => {
        forPrint.style.display = 'none'
      })
    }
  });
});

