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

$xml = simplexml_load_file('C:\Users\roman\Desktop\Web_Programmierung\automobiles.xml') or die("Error: Cannot create object");

$mysqli->begin_transaction(); // Transaktion starten

foreach ($xml->automobile as $automobile) {
    $model = (string)$automobile->model;
    $b2_1 = (int)$automobile->b2_1;
    $b2_2 = (int)$automobile->b2_2;
    $j = (string)$automobile->j;
    $_4 = (int)$automobile->_4;
    $d1 = (string)$automobile->d1;
    $d2 = (string)$automobile->d2;
    $_2 = (string)$automobile->_2;
    $_5 = (int)$automobile->_5;
    $v9 = (string)$automobile->v9;
    $_14 = (int)$automobile->_14;
    $p3 = (string)$automobile->p3;
    $innerorts = (double)$automobile->innerorts;
    $ausserorts = (double)$automobile->ausserorts;
    $kombiniert = (double)$automobile->kombiniert;
    $co2EmissionKombiniert = (int)$automobile->co2EmissionKombiniert;
    $sehrschnell = (double)$automobile->sehrschnell;
    $schnell = (double)$automobile->schnell;
    $langsam = (double)$automobile->langsam;

    $insertSql = "INSERT INTO fahrzeugdaten (model, b2_1, b2_2, j, _4, d1, d2, _2, _5, v9, _14, p3, innerorts, ausserorts, kombiniert, co2EmissionKombiniert, sehrschnell, schnell, langsam) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $mysqli->prepare($insertSql);
    $stmt->bind_param("siissisississdddisdd", $model, $b2_1, $b2_2, $j, $_4, $d1, $d2, $_2, $_5, $v9, $_14, $p3, $innerorts, $ausserorts, $kombiniert, $co2EmissionKombiniert, $sehrschnell, $schnell, $langsam);

    if ($stmt->execute()) {
        echo "Datensatz erfolgreich eingefügt. ";
    } else {
        echo "Fehler beim Einfügen des Datensatzes: " . $stmt->error;
    }
    $stmt->close();
}

// Transaktion bestätigen oder abbrechen
if ($mysqli->commit()) {
    echo "Transaktion erfolgreich abgeschlossen.";
} else {
    echo "Transaktion fehlgeschlagen: " . $mysqli->error;
    $mysqli->rollback(); // Transaktion abbrechen
}

// Datenbankverbindung schließen
$mysqli->close();
?>
