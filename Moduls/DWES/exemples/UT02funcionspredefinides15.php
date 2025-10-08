<?php
echo "<h1>UT02funcionspredefinides15.php</h1>";

$un = 1;
var_dump(is_int($un)); // true
$unfloat = floatval($un);
settype($un, "string");
var_dump(is_int($un)); // false
var_dump(is_string($un)); // true
settype($un, "float");
var_dump(is_int($un)); // false
var_dump(is_float($un)); // true
var_dump(is_int(intval($un))); // true
?>