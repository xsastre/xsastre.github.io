<?php
$cadena = "El caballero oscuro";
$tam = strlen($cadena);
echo "La longitud de '$cadena' es: $tam <br />";

echo "Això és un substring des del caracter 13 fins al final: ";
$oscuro = substr($cadena, 13); // desde 13 al final
echo "<br/>";
echo "Això és un substring des del caracter 3 fins al 4: ";
$caba = substr($cadena, 3, 4); // desde 3, 4 letras
echo "<br/>";
echo "Ara farem un replace de c per k: ";
$katman = str_replace("c", "k", $cadena);
echo "$oscuro $caba ara és $katman";
echo "<br/>";
echo "i ara en majúscula ".strtoupper($cadena);
?>
