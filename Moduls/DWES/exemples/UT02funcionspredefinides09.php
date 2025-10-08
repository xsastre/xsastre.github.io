<?php
echo "<h1>UT02funcionspredefinides09.php</h1>";
$prova1 = "hola";
$prova2 = "hola33";
$prova3 = "33";
$prova4 = ",.()[]";
$prova5 = " ,.()[]";

if (ctype_alpha($prova1)) { // true
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
if (ctype_alnum($prova2)) { // true
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
if (ctype_digit($prova3)) { // true
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
if (ctype_punct($prova4)) { // true
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
if (ctype_space($prova5)) { // false
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
if (ctype_space($prova5[0])) { // true
	echo "vertader<br>"; 
}
else {
	echo "false<br>";
}
?>