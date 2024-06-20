# Сайт портфолио

- адаптив
- кроссбраузерность
- accessability
- использование исключающего селектора
- новейшие возможности HTML и CSS

  ```CSS
    &:not(.nav__link--active) {
      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  ```

- цветовые схемы для светлой/тёмной темы, основанные на `hsl()` цветах
- плавные переходы теней
- Если пользователь отключил анимации у себя в настройках (prefers-reduced-motion) - то анимации не будут работать, а скрытый контент будет доступен для просмотра
- MediaQueryList interface для контроля за динамическими изменениями в медиа-запросах документа
- CSS mask для эффекта расстворения краёв блока
- кастомный горизонтальный бесконечный скролл, в котором направление движения и скорость контролируется через атрибуты data-duration и data-speed. Скролл работает только если настройки пользователя разрешают анимации и JS
- новый dialog тег для создания всплывающих окон:
  
  ```HTML
    <dialog id="robotoHeroScreen" class="dialog project-dialog-image" aria-label="Roboto hero section">
      <picture class="projects__picture">
        <source srcset="img/roboto-hero.webp" type="image/webp">
        <img loading="lazy" src="img/roboto-hero.jpg" class="image" width="1024" height="768" alt="School site hero section">
      </picture>
      <button class="btn btn-reset dialog__close" type="button">Close image</button>
    </dialog>
  ```

- новая возможность анимации display свойства, за счёт нового свойства `transition-behavior: allow-discrete;`, которое позволяет анимировать дискретные анимации. При этом для конечного состояния, которое возникает после `display: none`, необходимо установить `@starting-style`, это свойство определяет начальную анимацию, в то время как `transition` на исходном элементе будет определять конечную анимацию перед исчезновением:

```SCSS
.dialog {
  display: none;
  background: transparent;
  margin: auto auto;
  padding: 5px;
  width: 100%;
  gap: var(--gap);

  opacity: 0;
  translate: 0 25vh;

  transition-property: display opacity;
  transition-duration: 1s;
  transition-behavior: allow-discrete;

  &[open] {
    display: grid;
    opacity: 1;
    translate: 0 0;

    @starting-style {
      opacity: 0;
      translate: 0 -25vh;
    }
  }
}
```

- вложенные модальные окна.
