<?php

$servername = "localhost";
$username = "root";
$password = "Pappelweg!11";
$database = "WebProgrammierung";

// Verbindung zur Datenbank herstellen
$mysqli = new mysqli($servername, $username, $password, $database);

// Überprüfen, ob die Verbindung erfolgreich hergestellt wurde
if ($mysqli->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $mysqli->connect_error);
}

// SQL-Abfrage, um alle Daten aus der Tabelle 'fahrzeugdaten' abzurufen
$selectSql = "SELECT * FROM fahrzeugdaten";
$result = $mysqli->query($selectSql);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Hier kannst du die Daten aus der Tabelle ausgeben
        echo "Model: " . $row["model"] . "<br>";
        echo "HSN: " . $row["HSN"] . "<br>";
        echo "TSN: " . $row["TSN"] . "<br>";
        echo "Fahrzeugklasse: " . $row["Fahrzeugklasse"] . "<br>";
        echo "ArtAufbau: " . $row["ArtAufbau"] . "<br>";
        echo "Marke: " . $row["Marke"] . "<br>";
        echo "Fahrzeugvariante: " . $row["Fahrzeugvariante"] . "<br>";
        echo "HKB: " . $row["HKB"] . "<br>";
        echo "Fahrzeugaufbau: " . $row["Fahrzeugaufbau"] . "<br>";
        echo "EGT: " . $row["EGT"] . "<br>";
        echo "Schadstoffklasse: " . $row["Schadstoffklasse"] . "<br>";
        echo "Kraftstoff: " . $row["Kraftstoff"] . "<br>";
        echo "innerorts: " . $row["innerorts"] . "<br>";
        echo "ausserorts: " . $row["ausserorts"] . "<br>";
        echo "kombiniert: " . $row["kombiniert"] . "<br>";
        echo "co2EmissionKombiniertNEFZ: " . $row["co2EmissionKombiniertNEFZ"] . "<br>";
        echo "sehrschnell: " . $row["sehrschnell"] . "<br>";
        echo "schnell: " . $row["schnell"] . "<br>";
        echo "langsam: " . $row["langsam"] . "<br>";
        echo "co2EmissionKombiniertWLTP: " . $row["co2EmissionKombiniertWLTP"] . "<br>";

        // Trennzeile zwischen Datensätzen
        echo "<hr>";
    }
} else {
    echo "Keine Daten gefunden.";
}

// Datenbankverbindung schließen
$mysqli->close();

?>