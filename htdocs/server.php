<?php
// Pfad zur XML-Datei
$xmlFile = "automobiles.xml";

// Überprüfen, ob die XML-Datei existiert
if (file_exists($xmlFile)) {
    // Die XML-Datei laden
    $xml = simplexml_load_file($xmlFile);

    // Hier kannst du die Daten aus der XML-Datei verarbeiten
    // Zum Beispiel:
    foreach ($xml->automobile as $automobile) {
        $model = (string)$automobile->model;
        $b2_1 = (string)$automobile->b2_1;
        $b2_2 = (string)$automobile->b2_2;
        $j = (string)$automobile->j;
        // usw. für die anderen Elemente

        // Hier kannst du die Daten in HTML ausgeben
        echo "<p>Modell: $model</p>";
        echo "<p>b2_1: $b2_1</p>";
        echo "<p>b2_2: $b2_2</p>";
        echo "<p>j: $j</p>";
        // usw. für die anderen Elemente
    }
} else {
    echo "Die XML-Datei wurde nicht gefunden.";
}
?>
