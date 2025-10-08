<?php
function obtenirCapital($pais = "tots") {
    $capitals = array("Itàlia" => "Roma",
        "França" => "Paris",
        "Portugal" => "Liboa");
    if ($pais == "tots") {
        return array_values($capitals);
    } else {
        return $capitals[$pais];
    }
}

print_r(obtenirCapital());
echo "<br/>";
echo obtenirCapital("França");

