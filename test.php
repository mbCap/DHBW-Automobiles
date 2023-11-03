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
<<<<<<< HEAD

=======
/*   
$sql = "
    CREATE TABLE `fahrzeugdaten` (
        `model` VARCHAR(50),
        `HSN` INT NOT NULL,
        `TSN` INT NOT NULL,
        `Fahrzeugklasse` VARCHAR(40) NOT NULL,
        `ArtAufbau` INT NOT NULL,
        `Marke` VARCHAR(40) NOT NULL,
        `Fahrzeugvariante` VARCHAR(40),
        `HKB` VARCHAR(40) NOT NULL,
        `Fahrzeugaufbau` INT NOT NULL,
        `EGT` VARCHAR(40) NOT NULL,
        `Schadstoffklasse` INT NOT NULL,
        `Kraftstoff` VARCHAR(40) NOT NULL,
        `innerorts` DOUBLE NOT NULL,
        `ausserorts` DOUBLE NOT NULL,
        `kombiniert` DOUBLE NOT NULL,
        `co2EmissionKombiniertNEFZ` INT NOT NULL,
        `sehrschnell` DOUBLE NOT NULL,
        `schnell` DOUBLE NOT NULL,
        `langsam` DOUBLE NOT NULL,
        `co2EmissionKombiniertWLTP` INT NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
";
 
// Tabelle erstellen
if ($mysqli->query($sql) === TRUE) {
    echo "Tabelle 'Fahrzeugdaten' erfolgreich erstellt";
} else {
    echo "Fehler beim Erstellen der Tabelle: " . $mysqli->error;
}
   */
>>>>>>> 753d4be7d93ec390d8b1f42322dd59a68bf217cd
$xml = simplexml_load_file('C:\Users\roman\Desktop\Web_Programmierung\automobiles.xml') or die("Error: Cannot create object");

$mysqli->begin_transaction(); // Transaktion starten

<<<<<<< HEAD
foreach ($xml->automobile as $automobile) {
    $model = (string)$automobile->model;
    $HSN = (int)$automobile->HSN;
    $TSN = (int)$automobile->TSN;
    $Fahrzeugklasse = (string)$automobile->Fahrzeugklasse;
    $ArtAufbau = (int)$automobile->ArtAufbau;
    $Marke = (string)$automobile->Marke;
    $Fahrzeugvariante = (string)$automobile->Fahrzeugvariante;
    $HKB = (string)$automobile->HKB;
    $Fahrzeugaufbau = (int)$automobile->Fahrzeugaufbau;
    $EGT = (string)$automobile->EGT;
    $Schadstoffklasse = (int)$automobile->Schadstoffklasse;
    $Kraftstoff = (string)$automobile->Kraftstoff;
    $innerorts = (double)$automobile->innerorts;
    $ausserorts = (double)$automobile->ausserorts;
    $kombiniert = (double)$automobile->kombiniert;
    $co2EmissionKombiniertNEFZ = (int)$automobile->co2EmissionKombiniertNEFZ;
    $sehrschnell = (double)$automobile->sehrschnell;
    $schnell = (double)$automobile->schnell;
    $langsam = (double)$automobile->langsam;
    $co2EmissionKombiniertWLTP = (int)$automobile->co2EmissionKombiniertWLTP;

    $insertSql = "INSERT INTO fahrzeugdaten (model, HSN, TSN, Fahrzeugklasse, ArtAufbau, Marke, Fahrzeugvariante, HKB, Fahrzeugaufbau, EGT, Schadstoffklasse, Krafststoff, innerorts, ausserorts, kombiniert, co2EmissionKombiniertNEFZ, sehrschnell, schnell, langsam, co2EmissionKombiniertWLTP) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    $stmt = $mysqli->prepare($insertSql);
    $stmt->bind_param("siissisississdddisdd", $model, $HSN, $TSN, $Fahrzeugklasse, $ArtAufbau, $Marke, $Fahrzeugvariante, $HKB, $Fahrzeugaufbau, $EGT, $Schadstoffklasse, $Krafststoff, $innerorts, $ausserorts, $kombiniert, $co2EmissionKombiniertNEFZ, $sehrschnell, $schnell, $langsam, $co2EmissionKombiniertWLTP);

    if ($stmt->execute()) {
=======
foreach ($xml->children() as $automobiles) {
    $model = (string) $automobiles->model;
    $HSN = (int) $automobiles->HSN;
    $TSN = (int) $automobiles->TSN;
    $Fahrzeugklasse = (string) $automobiles->Fahrzeugklasse;
    $ArtAufbau = (int) $automobiles->ArtAufbau;
    $Marke = (string) $automobiles->Marke;
    $Fahrzeugvariante = (string) $automobiles->Fahrzeugvariante;
    $HKB = (string) $automobiles->HKB;
    $Fahrzeugaufbau = (int) $automobiles->Fahrzeugaufbau;
    $EGT = (string) $automobiles->EGT;
    $Schadstoffklasse = (int) $automobiles->Schadstoffklasse;
    $Kraftstoff = (string) $automobiles->Kraftstoff;
    $innerorts = (double) $automobiles->innerorts;
    $ausserorts = (double) $automobiles->ausserorts;
    $kombiniert = (double) $automobiles->kombiniert;
    $co2EmissionKombiniertNEFZ = (int) $automobiles->co2EmissionKombiniertNEFZ;
    $sehrschnell = (double) $automobiles->sehrschnell;
    $schnell = (double) $automobiles->schnell;
    $langsam = (double) $automobiles->langsam;
    $co2EmissionKombiniertWLTP = (int) $automobiles->co2EmissionKombiniertWLTP;

    $insertSql = "INSERT INTO fahrzeugdaten (model, HSN, TSN, Fahrzeugklasse, ArtAufbau, Marke, Fahrzeugvariante, HKB, Fahrzeugaufbau, EGT, Schadstoffklasse, Krafststoff, innerorts, ausserorts, kombiniert, co2EmissionKombiniertNEFZ, sehrschnell, schnell, langsam, co2EmissionKombiniertWLTP) 
                VALUES ('$model', $HSN, $TSN, '$Fahrzeugklasse', $ArtAufbau, '$Marke', '$Fahrzeugvariante', '$HKB', '$Fahrzeugaufbau', '$EGT', '$Schadstoffklasse', '$Krafststoff', $innerorts, $ausserorts, $kombiniert, $co2EmissionKombiniertNEFZ, $sehrschnell, $schnell, $langsam, $co2EmissionKombiniertWLTP)";
    if ($mysqli->query($insertSql) === TRUE) {
>>>>>>> 753d4be7d93ec390d8b1f42322dd59a68bf217cd
        echo "Datensatz erfolgreich eingefügt. ";
    } else {
        echo "Fehler beim Einfügen des Datensatzes: " . $stmt->error;
    }
    $stmt->close();
}

<<<<<<< HEAD
// Transaktion bestätigen oder abbrechen
if ($mysqli->commit()) {
    echo "Transaktion erfolgreich abgeschlossen.";
} else {
    echo "Transaktion fehlgeschlagen: " . $mysqli->error;
    $mysqli->rollback(); // Transaktion abbrechen
=======
$countSql = "SELECT COUNT(*) as count FROM fahrzeugdaten";
$result = $mysqli->query($countSql);

// SQL-Abfrage, um alle Daten aus der Tabelle 'fahrzeugdaten' abzurufen
$selectSql = "SELECT * FROM fahrzeugdaten";
$result = $mysqli->query($selectSql);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Hier kannst du die Daten aus der Tabelle ausgeben
        echo "Model: " . $row["model"] . "<br>";
        echo "HSN: " . $row["HSN"] . "<br>";
        echo "TSN: " . $row["TSN"] . "<br>";
        // Füge weitere Spalten hinzu, die du ausgeben möchtest

        // Trennzeile zwischen Datensätzen
        echo "<hr>";
    }
} else {
    echo "Keine Daten gefunden.";
>>>>>>> 753d4be7d93ec390d8b1f42322dd59a68bf217cd
}

// Datenbankverbindung schließen
$mysqli->close();
<<<<<<< HEAD
=======

>>>>>>> 753d4be7d93ec390d8b1f42322dd59a68bf217cd
?>


