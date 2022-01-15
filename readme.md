# portfolio

## Учебный лендинг "Portfolio", тема "Autumn". Выпускной проект по профессии "Веб-разработчик".

Сайт сверстан на третьем курсе "Vue.js. Продвинутая разработка" по профессии "Веб-разработчик" в LoftSchool.

***Цель***: Изучить **VUE.js**! Углубленное изучение вёрстки на шаблонизаторе кода **Pug**, компонентный подход к вёрстке.
Основы работы с **Webpack**. Изучить **Grid**, тестирование кода.

#### FrontEnd
* Pug
* PostCSS
* JavaScript
* Vue

#### Workflow
* Webpack
* Git
* Terminal
* NPM, Yarn

#### Код Vue.js
* Admin-panel
* Slider
* Vue Flickity slider

#### Код native JavaScript
* Parallax
* Smooth Scrolling
* Popup
* Preloader

#### Тестирование
* WebdriverIO
* Jest

### Данные для входа в админ-панель
```
Логин: test-admin
```
```
Пароль: 123456
```

## Посмотреть [PORTFOLIO](https://volkovva.github.io/portfolio/)
![portfolio](portfolio/screenshots/demo.png "portfolio")
![portfolio](portfolio/screenshots/demo2.png "portfolio")

## Посмотреть [ADMIN-PANEL](https://volkovva.github.io/portfolio/admin/#/login)
![portfolio](portfolio/screenshots/demo3.png "portfolio")
![portfolio](portfolio/screenshots/demo4.png "portfolio")

> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Запустить скрипт:
```sh
$ npm run имя_скрипта
```
##### Либо:
```sh
$ yarn имя_скрипта
```