<?php

//Laden xml
$xml = simplexml_load_file('automobiles.xml');

    //Deklaration Arrays
    $baujahrArray = Array();
    $markeArray = Array();
    $modellArray = Array();

    //Befüllen Arrays
    foreach ($xml -> automobiles as $automobiles) {
        $marke = (string) $automobiles->Marke;

        $markeArray [] = $marke;

    }

    //Arrays aus allen oberen Arrays
    $Gesamtarray = array(
        "marke" => $markeArray  // Marke ist Identifier für Array

        //für weitere mit Komma, letztes ohne Komma 
    );

    $jsonumwandler = json_encode($Gesamtarray);

    echo $jsonumwandler;

?>