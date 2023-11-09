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

// Überprüfen, ob etwas in result gespeichert ist und mehr als 0 Zeilen hat
if ($result && $result->num_rows > 0) {
    $data = array();
    // Daten mit in ein ARRAY schreiben
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    
    // Client mitteilen, dass ein JSON Format vorliegt
    header('Content-Type: application/json');
    
    // JSON-Format umwandeln und in einer Variablen speichern
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    
    // JSON Daten ausgeben
    echo json_encode($data, JSON_PRETTY_PRINT);
    
} else {
    echo json_encode(array('message' => 'Keine Daten gefunden.'));
} 
 
// Datenbankverbindung schließen
$mysqli->close();
?>