<?php
$num = 33;
$nom = "Larry Bird";
printf("%s portava el número %d", $nom, $num); // %d -> número decimal, %s -> string
echo "<br/>";
$frase = sprintf("%s portava el número %d", $nom, $num);
echo $frase;
?>