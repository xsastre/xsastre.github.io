<?php

function diaSetmana() {
    $setmana = [ "dilluns", "dimarts", "dimecres",
        "dijous", "divendres", "dissabte", "diumenge" ];
    $dia = $setmana[0]; // de 0 a 6
	return $dia;
}
$diaCine = diaSetmana();
echo "El pròxim $diaCine vaig al cinema.";

?>