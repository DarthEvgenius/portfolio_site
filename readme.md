# Сайт портфолио

- адаптив
- кроссбраузерность
- accessability
- использование исключающего селектора

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