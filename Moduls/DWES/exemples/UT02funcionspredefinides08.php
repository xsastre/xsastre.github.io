<?php
echo "<h1>UT02funcionspredefinides08.php</h1>";
$frase = "Qui busca troba, això diuen, de vegades";
$pos1 = strpos($frase, ","); // troba la primera coma
echo $pos1."<br/>";
$pos2 = strrpos($frase, ","); // troba l'última coma
echo $pos2."<br/>";
$despresDeComa = strstr($frase, ","); // ", això diuen, de vegades"
echo $despresDeComa."<br/>";
?>