<?php

//Laden xml
$xml = simplexml_load_file('automobiles.xml');

    // Arrays erstellen, um entsprechende Daten als Filter auf der Website auszugeben
    $markeArray = Array();
    $modelArray = Array();
    $schadstoffklasseArray = Array();
    $kombiniertArray = Array();
    $fahrzeugklasseArray = Array();
    $kraftstoffArray = Array();



    //Befüllen Arrays mit einer Schleife, Prüfen ob Wert schon vorhanden
    foreach ($xml -> automobiles as $automobiles) {
        $marke = (string) $automobiles->Marke;
    if (!in_array($marke,$markeArray)) {
        $markeArray [] = $marke;
    }  
    $model = (string) $automobiles->model;
    if (!in_array($model,$modelArray)) {
        $modelArray [] = $model;
    }  
    $schadstoffklasse = (string) $automobiles->Schadstoffklasse;
    if (!in_array($schadstoffklasse,$schadstoffklasseArray)) {
        $schadstoffklasseArray [] = $schadstoffklasse;
    } 
    $kombiniert = (string) $automobiles->kombiniert;
    if (!in_array($kombiniert,$kombiniertArray)) {
        $kombiniertArray [] = $kombiniert;
    } 
    $fahrzeugklasse = (string) $automobiles->Fahrzeugklasse;
    if (!in_array($fahrzeugklasse,$fahrzeugklasseArray)) {
        $fahrzeugklasseArray [] = $fahrzeugklasse;
    } 
    $kraftstoff = (string) $automobiles->Kraftstoff;
    if (!in_array($kraftstoff,$kraftstoffArray)) {
        $kraftstoffArray [] = $kraftstoff;
    } 
    }


    //Gesamtarrays aus allen oberen Arrays
    $Gesamtarray = array(
        "marke" => $markeArray,  // Marke ist Identifier für Array
        "model" => $modelArray,
        "Schadstoffklasse" => $schadstoffklasseArray,
        "kombiniert" => $kombiniertArray,
        "Fahrzeugklasse" => $fahrzeugklasseArray,
        "Kraftstoff" => $kraftstoffArray  
    );

    $jsonumwandler = json_encode($Gesamtarray);

    echo $jsonumwandler;

?>