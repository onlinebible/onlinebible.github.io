var BooksRus = 'Быт Исх Лев Чис Втор Нав Суд Руф 1Цар 2Цар 3Цар 4Цар 1Пар 2Пар Езд Нее Есф Иов Пс Прит Екк Песн Ис Иер Плач Иез Дан Ос Иоил Ам Авд Иона Мих Наум Авв Соф Агг Зах Мал';
var BooksEng = 'Ge Ex Le Nu De Jos Jud Ru 1Sa 2Sa 1Ki 2Ki 1Ch 2Ch Ezr Ne Es Job Ps Pr Ec So Isa Jer La Eze Da Ho Joe Am Ob Jon Mic Na Hab Zep Hag Zec Mal';
arrRus = BooksRus.split(' '); 
arrEng = BooksEng.split(' ');
arrRusEng = new Array();
for (i=0;i<arrRus.length;i++) { arrRusEng[arrRus[i]] = arrEng[i]; }

function process_click(e) {
  var target =  e? e.target : window.event.srcElement;
  var ref = target.innerHTML;
  var tagName = target.tagName;
  var stats='toolbar=no,location=no,scrollbars=yes,directories=no,status=no,resizable=yes,menubar=no,width=700,height=200';
  
  if ( tagName == 'U' ) 
  {
	var URL = location.pathname;
	arr = URL.split('/'); 
	DirName = arr[arr.length-2];
	book = 0;
	for (i=0;i<arrEng.length;i++) { if (arrEng[i] == DirName) { book = i + 1 } };
	if (book < 40) { letter = 'h' } else  { letter = 'g' };
	if (ref < 1000) { letter = letter + '0' };

	var number = (ref[0] == 0) ? ref.slice(1, ref.length) : ref;
	myWindow=window.open ('../STRONG/'+letter+((ref-ref%100)/100)+'.html#'+number,'compare',stats);
	myWindow.focus();
	myWindow.moveTo((screen.availWidth/2)-365,(screen.availHeight/2)-200);
  }
  else if ( tagName == 'A' && Number(ref) && !target.href) 
  {
    var Where = UpperDirName.toLowerCase();
    var Search = UpperDirName +'/'+ThisFileName+'#'+Number(ref);
    window.open('../../WHERE.HE/'+Where+'.html?'+escape(Search),'compare',stats).focus();
  }
}

document.onclick=process_click;
