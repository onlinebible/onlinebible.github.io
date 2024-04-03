function FormSearch(c) {
   var Translate_DynScript = document.createElement ("SCRIPT");
   document.body.appendChild(Translate_DynScript);
   var DivElement = document.createElement ("DIV");
   DivElement.id = "Translate_DivElement";
   DivElement.style = "display: none;"
   document.body.appendChild(DivElement);
   Translate_DynScript.src = c;
   return;
}
function Continue() {
   document.getElementById("openwin").innerHTML = Translate_DivElement.getElementsByClassName("dictd_article")[0].innerHTML;
}
var InternetWWW='https://dict.bible.ru/?db=heb-rus_strong&strategy=.&define=OK%u002B(Мне%u002Bповезёт!)&q=';
var s='<div id="openwin"></div>';
status="";
document.write(s);
FormSearch('provider.php?url='+InternetWWW+location.search.substr(1));
