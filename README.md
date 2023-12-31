# Руководство по Calendar App

> Обзор приложения Calendar App - веб-приложения для календаря, вдохновленного календарем iOS. Приложение предназначено для управления вашим расписанием и событиями.

![App_svg](./src/assets/Запись%20экрана%202023-10-07%20в%2017.30.04.gif)

### Содержание

*  Введение
* Особенности
* Используемые технологии
* Начало работы
* Использование


### Введение

Calendar App - это веб-приложение для календаря, созданное с целью репликации некоторых функций и возможностей, доступных в календаре iOS. Оно предлагает интуитивный интерфейс пользователя для эффективного управления вашим расписанием и событиями.

### Особенности
Calendar App разработано для обеспечения удобного пользовательского опыта при использовании календаря. Вот некоторые общие задачи, которые вы можете выполнить:

>Просмотр календаря для разных месяцев.
Кликните на определенную дату, чтобы просмотреть или добавить события.
Редактируйте или удаляйте существующие события.
Фильтруйте и нарезайте данные для настройки вашего вида.
Удобное переключение между месяцами.
Эффективное управление вашим расписанием с макетом календаря, вдохновленным iOS.

##### Calendar App включает в себя следующие основные функции:

* Декомпозиция: Архитектура приложения разделена на различные компоненты для удобного обслуживания и масштабируемости.
* Структура данных: Приложение использует хорошо организованную структуру данных для управления событиями и записями.
* Сетка календаря: Сетка календаря обеспечивает четкое и организованное отображение дат, с различными стилями для выходных дней.
* Стилизация CSS: Основные таблицы стилей CSS обеспечивают визуально привлекательный и адаптивный дизайн.
* Обертка календаря: Специальный элемент-обертка инкапсулирует весь календарь.
Выделение текущего дня: Текущий день выделяется для быстрого доступа.
* Заголовок: Календарь отображает месяц и год в виде заголовка.
* Заголовок с именами дней недели: Заголовок включает имена дней недели.
* Выбор месяца: Пользователи могут выбирать разные месяцы для просмотра и управления своими событиями.
* Интеграция с JSON-Server: Приложение включает JSON-Server для обработки хранения и получения данных.
* Получение данных: Оно извлекает данные с сервера и заполняет календарь событиями.
* Манипуляции с данными: Пользователи могут выполнять действия, такие как фильтрация и нарезка данных для настраиваемого просмотра.
* Управление событиями: События можно добавлять, редактировать и удалять.

### Используемые технологии

Calendar App создано с использованием следующих технологий:

* HTML5
* CSS3
* JavaScript
* JSON-Server (для хранения и получения данных)
* moment версии ^2.29.4
* react версии ^18.2.0
* react-dom версии ^18.2.0
* react-scripts версии 5.0.1
* styled-components версии ^6.0.7


### Начало работы

Для начала работы с Calendar App выполните следующие шаги:

```sh
npm install
npm run serve
npm run start 
```
