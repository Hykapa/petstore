# Как установить ?
## Нам потребуются следующие настройки
### > Apache_2.4-PHP_8.0-8.1
### > PHP 8.1
### > MySQL-5.7-Win10
## Потребуется создать базу данных
### > Наименование базы
### > Настройка подключения в файле .env
### > Настройка подключения в /config/database.php
## Запуск сервера
### > Кликаем на флажок OpenServer => дополнительно => консоль
### > указываем путь к проекту cd domains/ (при необходимости удалите папку vendor затем в консоли напишите composer install указав путь к проекту и установите ключ php artisan key:generate)
### > Пишем команду php artisan migrate затем php artisan db:seed
### > И наконец php artisan serve копируем http://127.0.0.1:8000 и переходим на портал вакансий

# > Администратор 
## > http://127.0.0.1:8000/home 
### > login     hykapa@gmail.com
### > password  biraj123
# > Работодатель 
## > http://127.0.0.1:8000/employer/signin
### > login     system.plus@gmail.com
### > password  qweqwe
# > Соискатель 
## > http://127.0.0.1:8000/jobseeker/signin
### > login     lykacit@gmail.com
### > password  qweqwe
