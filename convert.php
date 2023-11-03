<?php
// Deine Verbindung zur Datenbank und andere Code-Teile hier

// SQL-Abfrage, um Daten abzurufen
$selectSql = "SELECT * FROM fahrzeugdaten";
$result = $mysqli->query($selectSql);

if ($result && $result->num_rows > 0) {
    $data = array();

    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    // Daten in JSON konvertieren und ausgeben
    header('Content-Type: application/json');
    echo json_encode($data);
} else {
    echo json_encode(array("message" => "Keine Daten gefunden"));
}

$mysqli->close();
?>
