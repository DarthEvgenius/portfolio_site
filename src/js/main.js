import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import html2pdf from 'html2pdf.js';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('download-pdf');

  button.addEventListener('click', () => {
    const element = document.body; // нужный контейнер

    // Настройки pdf
    const opt = {
      margin: 0.5,
      filename: 'page.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  });
});

