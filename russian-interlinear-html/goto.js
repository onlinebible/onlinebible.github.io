function LocatorChange() {
	arr=document.getElementById('LocatorWorks').value.split(' ');
	var WorkName = arr[0];
	var SectionsCount=arr[1];
	var ls = document.getElementById('LocatorSections');
	ls.options.length = 0;
	for (i=1;i<=SectionsCount;i++) ls.options[i-1] = new Option(i,(BookShortName!='.'?"../":"")+WorkName+"/"+WorkName.toLowerCase()+i+".html");
}

function ShowLocator() {
if (BookShortName) {
	var SectionsCount = 0;
	document.write('<SELECT id="LocatorWorks" size="1" onChange="LocatorChange();" name="LocatorWorks">\n');
	for (i=0;i<arrWorksDisplay.length;i++) {
		document.write("<OPTION value='"+arrWorksLink[i]+" "+arrWorksSections[i]+"'");
		if ( arrWorksLink[i] == UpperDirName ) {
			document.write(' selected');
			SectionsCount = arrWorksSections[i];
		}
		document.write(">"+arrWorksDisplay[i]+"</OPTION>\n");
	} // end for
	document.write("</SELECT>\n");
	document.write('<SELECT id="LocatorSections" size="1" name="LocatorSections"></SELECT>\n');
	document.write('<BUTTON class="go-button" onclick="location=document.getElementById(\'LocatorSections\').value;">Перейти</BUTTON>\n');
	LocatorChange();
} // end if
} // end function
