<?php 
foreach ($_GET as $key => $value) {
  if($key != "url") {$url .= "&" . $key . "=" . $value;}
}
$content = str_replace(array("\r", "\n", "\\\"", "\"", "</body>"), array("", "", "\"", "\\\"", ""), file_get_contents($_GET['url'] . $url)); 
echo "Translate_DivElement.innerHTML=\"\";Translate_DivElement.innerHTML+=\"$content\"; //";
?>
