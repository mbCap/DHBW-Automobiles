// Hier wird beschrieben, was passiert, wenn man auf den "Alle Modelle Anzeigen" Button klickt


// Warten, bis das HTML-Dokument vollständig geladen ist
document.addEventListener("DOMContentLoaded", function() {
    

    // Wir wählen den Button mit der ID "show-all-button" aus
    var button = document.getElementById("show-all-button");

    // Wir fügen einen Event-Listener hinzu, um auf den Klick zu reagieren
    button.addEventListener("click", function() {
        // AJAX-Anfrage, um die Daten aus der PHP zu holen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "anbindung.php", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200){
                var response = xhr.responseText // Daten der PHP zurückgeben

                // Zeige die Daten in HTML
                button.innerHTML = response;
            }
        }

    });
});
