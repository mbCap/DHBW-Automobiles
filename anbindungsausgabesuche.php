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

// Überprüfen, ob ein Suchbegriff (searchterm) übergeben wurde
if (isset($_GET['searchterm'])) {
    $searchterm = $_GET['searchterm'];
    
    // SQL-Abfrage, um Daten aus der Tabelle 'fahrzeugdaten' abzurufen
    $selectSql = "SELECT * FROM fahrzeugdaten WHERE Model = $searchterm";
    
    // Vorbereiten der SQL-Abfrage
    $stmt = $mysqli->prepare($selectSql);
    
    if ($stmt) {
        // Parameter im SQL-Statement binden
        $stmt->bind_param("s", $searchterm);
        
        // SQL-Abfrage ausführen
        $stmt->execute();
        
        // Ergebnis holen
        $result = $stmt->get_result();
        
        if ($result && $result->num_rows > 0) {
            $data = array();
            while ($row = $result->fetch_assoc()) {
                $data[] = $row;
            }
            
            // JSON-Format umwandeln und ausgeben
            header('Content-Type: application/json');
            echo json_encode($data, JSON_PRETTY_PRINT);
        } else {
            echo json_encode(array('message' => 'Keine Daten gefunden.'));
        }
        
        // Statement schließen
        $stmt->close();
    } else {
        echo json_encode(array('message' => 'Fehler beim Vorbereiten der SQL-Abfrage.'));
    }
} else {
    echo json_encode(array('message' => 'Suchbegriff (searchterm) fehlt.'));
}

// Datenbankverbindung schließen
$mysqli->close();
?>