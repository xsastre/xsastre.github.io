<?php
echo "<h1>UT02funcionspredefinides12.php</h1>";

// Text original amb alguns caràcters especials HTML i salts de línia
$input = "<h1>Hello & welcome!</h1>\nAquest és un text amb <b>HTML</b> i & caràcters especials.";

// 1. htmlentities
// Converteix caràcters especials a entitats HTML (serveix per evitar interpretació HTML)
echo "htmlentities():<br>";
echo htmlentities($input);
echo "<hr>";

// 2. htmlspecialchars
// Converteix només alguns caràcters especials (<, >, &, ", ') a entitats HTML
echo "htmlspecialchars():<br>";
echo htmlspecialchars($input);
echo "<hr>";

// 3. strip_tags
// Elimina totes les etiquetes HTML del text (només queda el contingut)
echo "strip_tags():<br>";
echo strip_tags($input);
echo "<hr>";

// 4. nl2br
// Converteix salts de línia (\n) en <br> per mantenir la separació de línies en un HTML
echo "nl2br():<br>";
echo nl2br(strip_tags($input));  // sovint es fa servir combinat amb strip_tags
echo "<hr>";

// 5. rawurlencode i rawurldecode
// Codifica i decodifica una cadena per a ús segura en URL, codificant caràcters especials
$url_string = "Hola món! / Aquí: 100% #100";
$encoded = rawurlencode($url_string);
$decoded = rawurldecode($encoded);

echo "rawurlencode():<br>";
echo $encoded . "<br><br>";

echo "rawurldecode():<br>";
echo $decoded . "<br>";

?>