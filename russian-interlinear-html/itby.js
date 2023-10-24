var URL = location.pathname;
arr = URL.split('/'); 
UpperDirName = arr[arr.length-2];
ThisFileName = arr[arr.length-1];

BookShortName = 'BHS';
arrLayout = new Array();
WorksDisplay  = 'Быт Исх Лев Чис Втор Нав Суд Руф 1Цар 2Цар 3Цар 4Цар 1Пар 2Пар Езд Нее Есф Иов Пс Прит Екк Песн Ис Иер Плач Иез Дан Ос Иоил Ам Авд Иона Мих Наум Авв Соф Агг Зах Мал';
WorksLink = 'Ge Ex Le Nu De Jos Jud Ru 1Sa 2Sa 1Ki 2Ki 1Ch 2Ch Ezr Ne Es Job Ps Pr Ec So Isa Jer La Eze Da Ho Joe Am Ob Jon Mic Na Hab Zep Hag Zec Mal';
WorksSections = '50 40 27 36 34 24 21 4 31 24 22 25 29 36 10 13 10 42 150 31 12 8 66 52 5 48 12 14 3 9 1 4 7 3 3 3 2 14 4';

var arrWorksDisplay = WorksDisplay.split(' ');
var arrWorksLink = WorksLink.split(' ');
var arrWorksSections = WorksSections.split(' ');
