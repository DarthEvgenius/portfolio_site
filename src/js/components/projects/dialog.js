const dialogOpenButtons = document.querySelectorAll('.projects__image')
dialogOpenButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const dialogID = e.target.closest('.projects__image').getAttribute('data-dialog-image')
    const dialogElement = document.querySelector(`#${dialogID}`)
    dialogElement.showModal()

    const dialogCloseButton = dialogElement.querySelector('.dialog__close')
    dialogCloseButton.addEventListener('click', () => {
      dialogElement.close()
    })
  })
})

