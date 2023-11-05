// Hier wird beschrieben, was passiert, wenn man auf den "Alle Modelle Anzeigen" Button klickt
 
 
// Warten, bis das HTML-Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    // Wir wählen den Button mit der ID "show-all-button" aus
    var button = document.getElementById("show-all-button");
    

    // Wir fügen einen Event-Listener hinzu, um auf den Klick zu reagieren
    button.addEventListener("click", function() {
        // AJAX-Anfrage, um die JSON-Daten aus der PHP zu holen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "anbindungsausgabecopy.php", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var response = xhr.responseText; // JSON-Antwort als Zeichenkette

                var jsonData = JSON.parse(response); // JSON-Antwort in ein JavaScript-Array umwandeln

                var outputElement = document.getElementById("output"); // Ziel-Element auswählen

                // Erstelle einen leeren HTML-String, um Daten anzuzeigen
                var htmlString = "";

                // Durchlaufe das JavaScript-Array und erstelle HTML für jeden Datensatz
                jsonData.forEach(function(item) {
                    htmlString += "Model: " + item.model + "<br>";
                    htmlString += "HSN: " + item.HSN + "<br>";
                    htmlString += "TSN: " + item.TSN + "<br>";
                    // Füge weitere Felder hinzu, die du anzeigen möchtest
                    htmlString += "<hr>"; // Trennzeile zwischen Datensätzen
                });

                // Füge den HTML-String in das Ziel-Element ein
                outputElement.innerHTML = htmlString;
                

                // Füge den HTML-String in das Ziel-Element ein
                //outputElement.innerHTML = htmlString;
            }
        }
    });
});
