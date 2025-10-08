<?php
echo "<h1>UT02funcionspredefinides11.php</h1>";
$batman = "Tofol Verdera es Batman";
$subcadena = substr($batman, 6, 7); // Verdera
echo $subcadena."<br/>";
$bes = substr_count($batman, "a"); // 3
echo $bes."<br/>";
// Tofol Verdera es camarero
$cambrer1 = substr_replace($batman, "cambrer", 17);
echo $cambrer1."<br/>";
// Tofol Verdera es cambrer
$cambrer2 = substr_replace($batman, "cambrer", -6); // quita 6 desdel final
echo $cambrer2."<br/>";
// Tofol Verdera es cambrer
$bruno = substr_replace($batman, "Bruno", 0, 13);
// Bruno es Batman
echo $bruno."<br/>";
?>