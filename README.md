Приложение написано при помощи React,Redux,Redux-saga, axios на языке TypeScript. Для запуска приложения необходимо прописать 
### npm start
Для отображания репозиториев необходимо указать название организации.
При верно введенном имени выдаются все репозитории(по 10 на странице). При неверно введеном имени выдается ошибка. Для проверки использовалась API организаций: https://api.github.com/organizations, но работает и с организациями, которых нет в этой API.
Таблица состоит из полей: Название репозитория,	URL резопизория,	Количество форков и просмотров,	Количество звезд.
При нажатии на ссылки в таблицах происходит переход на сайт выбранного репозитория. При возврате в данное приложение все сессионные данные сохраняются, тем самым сохраняется текущая выбранная страница паганиции и данные запроса. Подгрузка всех репозиториев организации происходит не сразу, а по нажатию на конкретную страницу.
