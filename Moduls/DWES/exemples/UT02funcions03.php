<?php
function duplicarPerValor($argument)
{
    $argument = $argument * 2;
    echo "Dins de la funció: $argument.<br>";
}

function duplicarPerReferencia(&$argument)
{
    $argument = $argument * 2;
    echo "Dins de la funció: $argument.<br>";
}

$numero1 = 5;

echo "Abans de cridar: $numero1.<br>";
duplicarPerValor($numero1);
echo "Després de cridar: $numero1.<br>";
echo "<br>";
$numero2 = 7;
echo "Abans de cridar: $numero2.<br>";
duplicarPerReferencia($numero2);
echo "Després de cridar: $numero2.<br>";

?>