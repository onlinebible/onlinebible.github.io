function Header () {
  document.write("<TABLE cellspacing='0' bgcolor='#66CCFF' width='100%'><TR>");
  document.write("<TD width='1' title='Предыдущая глава'>");
	if (Back == '') { document.write("<BUTTON disabled>Назад</BUTTON>"); }
	else { document.write("<BUTTON onClick=\"window.location='"+Back+"'\">Назад</BUTTON>"); }
  document.write("</TD><TD><DIV id='header'><A href='"+Up+"' title='Оглавление'>"+Name+"</A></DIV></TD>");
  document.write("<TD width='1' title='Следующая глава'>");
	if (Next == '') { document.write("<BUTTON disabled>Вперед</BUTTON>"); }
	else { document.write("<BUTTON onClick=\"window.location='"+Next+"'\">Вперед</BUTTON>"); }
  document.write("</TD></TR></TABLE>");
}