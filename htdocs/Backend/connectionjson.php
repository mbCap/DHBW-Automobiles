<?php

// Laden der XML-Datei
$xml = simplexml_load_file('automobiles.xml');

// Arrays erstellen, um entsprechende Daten als Filter auf der Website auszugeben
$markeArray = Array();
$modelArray = Array();
$schadstoffklasseArray = Array();
$kombiniertArray = Array();
$fahrzeugklasseArray = Array();
$kraftstoffArray = Array();

// Befüllen der Arrays mit einer Schleife, Prüfen ob Wert schon vorhanden
foreach ($xml->automobiles as $automobiles) {
    // Marke extrahieren und prüfen, ob bereits im Array vorhanden
    $marke = (string) $automobiles->Marke;
    if (!in_array($marke, $markeArray)) {
        $markeArray [] = $marke;
    }

    // Model extrahieren und prüfen, ob bereits im Array vorhanden
    $model = (string) $automobiles->model;
    if (!in_array($model, $modelArray)) {
        $modelArray [] = $model;
    }

    // Schadstoffklasse extrahieren und prüfen, ob bereits im Array vorhanden
    $schadstoffklasse = (string) $automobiles->Schadstoffklasse;
    if (!in_array($schadstoffklasse, $schadstoffklasseArray)) {
        $schadstoffklasseArray [] = $schadstoffklasse;
    }

    // Kombiniert extrahieren und prüfen, ob bereits im Array vorhanden
    $kombiniert = (string) $automobiles->kombiniert;
    if (!in_array($kombiniert, $kombiniertArray)) {
        $kombiniertArray [] = $kombiniert;
    }

    // Fahrzeugklasse extrahieren und prüfen, ob bereits im Array vorhanden
    $fahrzeugklasse = (string) $automobiles->Fahrzeugklasse;
    if (!in_array($fahrzeugklasse, $fahrzeugklasseArray)) {
        $fahrzeugklasseArray [] = $fahrzeugklasse;
    }

    // Kraftstoff extrahieren und prüfen, ob bereits im Array vorhanden
    $kraftstoff = (string) $automobiles->Kraftstoff;
    if (!in_array($kraftstoff, $kraftstoffArray)) {
        $kraftstoffArray [] = $kraftstoff;
    }
}

// Gesamtarrays aus allen oberen Arrays erstellen
$Gesamtarray = array(
    "marke" => $markeArray,  // Marke ist Identifier für das Array
    "model" => $modelArray,
    "Schadstoffklasse" => $schadstoffklasseArray,
    "kombiniert" => $kombiniertArray,
    "Fahrzeugklasse" => $fahrzeugklasseArray,
    "Kraftstoff" => $kraftstoffArray  
);

// JSON-Konvertierung
$jsonumwandler = json_encode($Gesamtarray);

// Ausgabe des JSON-Daten
echo $jsonumwandler;

?>
