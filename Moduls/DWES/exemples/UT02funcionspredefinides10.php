<?php
echo "<h1>UT02funcionspredefinides10.php</h1>";
$frase = "Qui cerca troba, aixo diuen, de vegades";
$parts = explode(",", $frase);
print_r($parts);
echo "<br/>";
// Array ( [0] => Qui cerca troba [1] => aixo diuen [2] => de vegades )
$ciutats = ["Inca", "Manacor", "Buger"];
$cadenaCiutats = implode(">", $ciutats);
// Inca>Manacor>Buger
echo $cadenaCiutats."<br/>";
$parts3cadena = chunk_split($frase, 3);
// Qui ce rca tr oba , a ixo di uen , d e v ega des
echo $parts3cadena."<br/>";
$parts3vector = str_split($frase, 3);
// Array ( [0] => Qui [1] => ce [2] => rca [3] => tr [4] => oba [5] => , a [6] => ixo [7] => di [8] => uen [9] => , d [10] => e v [11] => ega [12] => des )
print_r($parts3vector);
?>