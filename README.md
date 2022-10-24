# Mesto

## «Mesto» - project work by profession web developer [YandexPracticum](https://praktikum.yandex.ru "YandexPracticum")

## Task

The project is intended for learning and practicing skills in working with JavaScript, React, Node.js, Express.js, MongoDB. The project consists of frontend and backend parts.

Frontend:
- must match the layout
- implemented registration, authorization and authentication of the user
- the ability to make changes in the user profile
- the ability to add or remove your own images with a description of the place
- the ability to like or delete the image you like
- when you click on the image, a popup with the image opens

Backend:
- connect database
- create user schemas and place cards
- create controllers and routes for user and cards
- create controllers and routes for authorization and authentication
- set up validation of data coming from the user
- create and set up centralized error handling
- implement logging of requests and errors
- create a virtual machine and deploy a server on it
- create a domain and attach it to the server

## API requests

### Open routes

`POST /signup`
User registration. In body, you need to pass an object with `email, password`.
Returns the user object c `email`.

`POST /signin`
User registration. In body, you need to pass an object with `email, password`.
Returns the c `token` object.

### Routes with token verification

`GET /users/me`
Getting information about the user.
Returns the user object c `name, about, avatar`, where:
- `name` - username
- `about` - activity or profession of the user
- `avatar` - link to the user's avatar

`PATCH /users/me`
User data update. In body, you need to pass an object with `name, about`.
Returns a user object with `name, about, avatar`.

`PATCH /users/me/avatar`
User avatar update. In body, you need to pass an object with `avatar`, where `avatar` is a link to the image.
Returns a user object with `name, about, avatar`.

`GET /cards`
Receiving user cards.
Returns an array with cards. Cards consist of `likes, _id, name, link, owner` where:
- `likes` - array with user ids
- `_id` - card id
- `name` - card name
- `link` - link to card photo
- `owner` - id of the user who created the card

`POST /cards`
Creating a user card. In body, you need to pass `name, link`.
Returns a card with information about it.

`DELETE /cards/:id`
Deleting a user's card, where `id` is the id of the card.
Returns information about the removed card.

`PUT /cards/likes/:id`
Adding a like to a card, where `:id` is the id of the card.
Returns a card with an updated array of likes.

`DELETE /cards/likes/:id`
Removing a like from a card, where `:id` is the id of the card.
Returns a card with an updated array of likes.

## Commands for starting a project

`npm install` - install project dependency
`npm start` - start devServer at http://localhost:3000/
`npm run build` - production project build
`npm run lint` - check backend with linter

## Tech

- HTML
- CSS
- JavaScript
- React
- NodeJS
- ExpressJS
- MongoDB

# Место

## «Место» - проектная работа по профессии веб-разработчик [Яндекс Практикум](https://praktikum.yandex.ru "Яндекс Практикум")

## Задача

Проект предназначен для изучения и отработки навыков в работе с JavaScript, React, Node.js, Express.js, MongoDB.
Проект сосотоит из фронтенд и бэкенд частей.

Фронтенд:
- должен соответствовать макету
- реализована регистрация, авторизация и аутентификация пользователя
- возможность внести изменения в профиле пользователя
- возможность добавлять или удалять свои изображения с описанием места
- возможность поставить или удалить лайк понравившемуся изображению
- при клике по изображению, открывается попап с изображением

Бэкенд:
- подключить базу данных
- создать схемы пользователя и карточек места
- создать конторллеры и роуты для пользователя и карточек
- создать конторллеры и роуты для авторизации и аутентификации
- насторить валидацию данных приходящих от пользователя
- создать и насторить централизованную обработуку ошибок
- реализовать логирование запросов и ошибок
- создать виртуальную машину и развернуть на ней сервер
- создать домен и прикрепить его к серверу

## Работа с API

### Открытые роуты

`POST /signup`  
Регистрация пользователя. В body необходимо передать объект с `email, password`. 
Возвращает объект пользователя c `email`.

`POST /signin`  
Регистрация пользователя. В body необходимо передать объект с `email, password`. 
Возвращает объект c `token`.

### Роуты с проверкой токена

`GET /users/me`  
Получение информации о пользователе.
Возвращает объект пользователя c `name, about, avatar`,где:
- `name` - имя пользователя
- `about` - деятельность или профессия пользователя
- `avatar` - ссылка на аватарку пользователя

`PATCH /users/me`  
Обновление данных пользователя. В body необходимо передать объект с `name, about`.
Возвращает объект пользователя c `name, about, avatar`.

`PATCH /users/me/avatar`  
Обновление аватара пользователя. В body необходимо передать объект с `avatar`, где `avatar` - это ссылка на картинку.
Возвращает объект пользователя c `name, about, avatar`.

`GET /cards`  
Получение карточек пользователя.
Возвращает массив c карточками. Карточки состоят из `likes, _id, name, link, owner`, где:
- `likes` - массив с пользовательскими id
- `_id` - id карточки
- `name` - название карточки
- `link` - ссылка на фото карточки
- `owner` - id пользователя создавшего карточку

`POST /cards`  
Создание карточки пользователя. В body необходимо передать `name, link`.
Возвращает карточку с информацией о ней.

`DELETE /cards/:id`  
Удаление карточки пользователя, где `id` - это id карточки.
Возвращает информацию об удаленной карточке.

`PUT /cards/likes/:id`  
Добавление лайка у карточки, где `:id` - это id карточки.
Возвращает карточку с обновленным массивом лайков.

`DELETE /cards/likes/:id`  
Удаление лайка у карточки, где `:id` - это id карточки.
Возвращает карточку с обновленным массивом лайков.

## Команды для запуска проекта

`npm install` -  установка зависимости проекта
`npm start` – запуск devServer на http://localhost:3000/
`npm run build` – production сборка проекта
`npm run lint` – проверка бэкэнда линтером

## Стек

- HTML
- CSS
- JavaScript
- React
- NodeJS
- ExpressJS
- MongoDB
