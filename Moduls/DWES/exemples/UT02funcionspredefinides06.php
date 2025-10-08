<?php
echo "<h1>UT02funcionspredefinides06.php</h1>";
$cadena = " Programant en PHP ";
$neta = trim($cadena); // "Programant en PHP"
echo $neta;
echo "<br/>";
$bruta = str_pad($neta, 23, "."); // "Programant en PHP....."
echo $bruta;
?>