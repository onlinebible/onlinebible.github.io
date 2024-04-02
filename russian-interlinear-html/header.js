function Header () {
  document.write("<div class='top-space'></div>");
  document.write("<TABLE class='top-menu'><TR>");
  document.write("<TD width='1' title='Предыдущая глава'>");
	if (Back == '') { document.write("<BUTTON class='menu-button' disabled>&#8249;</BUTTON>"); }
	else { document.write("<BUTTON class='menu-button' onClick=\"window.location='"+Back+"'\">&#8249;</BUTTON>"); }
  document.write("</TD><TD><DIV id='header'><a href='"+Up+"' title='Оглавление'>"+Name+"</a></DIV></TD>");
  document.write("<TD width='1' title='Следующая глава'>");
	if (Next == '') { document.write("<BUTTON class='menu-button' disabled>&#8250;</BUTTON>"); }
	else { document.write("<BUTTON class='menu-button' onClick=\"window.location='"+Next+"'\">&#8250;</BUTTON>"); }
  document.write("</TD></TR></TABLE>");
}