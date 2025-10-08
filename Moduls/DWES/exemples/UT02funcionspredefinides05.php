<?php
echo "<h1>UT02funcionspredefinides05.php</h1>";
function despres(string $lletra): string {
	$asciiLletra = ord($lletra);
	return chr($asciiLletra + 1);
}

echo despres("B");
?>