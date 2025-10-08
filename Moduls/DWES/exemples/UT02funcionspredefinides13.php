<?php
echo "<h1>UT02funcionspredefinides13.php</h1>";

$nf = 1234.5678;
echo number_format($nf, 2); // 1,234.57
echo "<br/>";
echo number_format($nf, 2, "M", "#"); // 1#234M57

?>