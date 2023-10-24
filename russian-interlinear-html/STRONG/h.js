R=""+location;b=R.indexOf("#");R=R.substr(b+1,R.length);s="";R=unescape(R);
for(i=0;i<a.length;i+=4) {
	if (a[i]!=a[i+1]) if (b==-1 || R==a[i]) {
		s+="<dir><b><font color=red size=5><a name='"+a[i]+"'></a>"+a[i]+"</font></b><br><br>";
		s+="<big>"+a[i+3]+"</big><br>";
		s+="<table border='0'><tr><th>";
		if (a[i+1]!="") {
			s+="<table border='1' align='left'><tr><td><table rules='rows' border='0'><tr><th><b><nobr>Варианты Синодального перевода:</nobr></b>";
			s+="</th></tr><tr><td><dir>";
			k=a[i+1].split("~");
			for (l=0;l<k.length;l++) {
				m=k[l].split("_");
				s+="<li>"+m[0]+" ("+m[1]+")</li>";
			}
			s+="</dir></td></tr></table></td></tr></table>";
		}
		if (a[i+2]!="") {
			s+="<table border='1'><tr><td><table rules='rows' border='0'><tr><th><b><nobr>Варианты перевода короля Иакова:</nobr></b>";
			s+="</th></tr><tr><td><dir>";
			k=a[i+2].split("~");
			for (l=0;l<k.length;l++) {
				m=k[l].split("_");
				s+="<li>"+m[0]+" ("+m[1]+")</li>";
			}
			s+="</dir></td></tr></table></td></tr></table>";
		}
		s+="</th></tr></table>";
		s+="</dir>";
	}
	g=100*i/a.length;status=g-g%1+"%";
}
status="";
document.write(s);

arg=unescape(location.search);
str=arg.substr(1);
window.moveTo((screen.availWidth/2)-365,(screen.availHeight/2)-200);
