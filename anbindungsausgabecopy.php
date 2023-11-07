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
$selectSql = "SELECT DISTINCT * FROM fahrzeugdaten";
$result = $mysqli->query($selectSql);

if ($result && $result->num_rows > 0) {
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    
    // JSON-Format umwandeln und ausgeben

    header('Content-Type: application/json');
    
     //var_dump($data);

    echo json_encode($data, JSON_PRETTY_PRINT);
    
} else {
    echo json_encode(array('message' => 'Keine Daten gefunden.'));
} 

// Datenbankverbindung schließen
$mysqli->close();
?>