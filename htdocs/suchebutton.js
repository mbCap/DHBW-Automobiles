document.addEventListener("DOMContentLoaded", function() {
    // Wir wählen das Such-Input-Feld und den Suchen-Button aus
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");

    // Wir fügen einen Event-Listener für den Klick auf den Suchen-Button hinzu
    searchButton.addEventListener("click", performSearch);

    // Wir fügen einen Event-Listener für die Enter-Taste auf dem Such-Input-Feld hinzu
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Die Funktion zur Durchführung der Suche
    function performSearch() {
        // Holen Sie den eingegebenen Suchbegriff aus dem Input-Feld
        var searchTerm = searchInput.value;

        // Überprüfen, ob ein Suchbegriff eingegeben wurde
        if (searchTerm) {
            // Hier senden wir eine AJAX-Anfrage, um Daten im JSON-Format von anbindungausgabe.php abzurufen
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "anbindungausgabecopy.php" + searchTerm, true);
            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = xhr.responseText; // Die Daten von anbindungausgabe.php im JSON-Format

                    // Konvertiere die JSON-Antwort in ein JavaScript-Objekt
                    var jsonData = JSON.parse(response);

                    // Verarbeite die JSON-Daten
                    console.log("JSON-Daten von anbindungausgabesuche.php:", jsonData);

                    // Du kannst jetzt die jsonData in deinem Code verwenden, um sie anzuzeigen oder weiter zu verarbeiten
                }
            }
        } else {
            var searchResultElement = document.getElementById("search-result");
            searchResultElement.innerHTML = "Bitte geben Sie einen Suchbegriff ein.";
        }
    }
});


/*document.addEventListener("DOMContentLoaded", function() {
    // Wir wählen das Such-Input-Feld und den Suchen-Button aus
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");

    // Wir fügen einen Event-Listener für den Klick auf den Suchen-Button hinzu
    searchButton.addEventListener("click", performSearch);

    // Wir fügen einen Event-Listener für die Enter-Taste auf dem Such-Input-Feld hinzu
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Die Funktion zur Durchführung der Suche
    function performSearch() {
        // Holen Sie den eingegebenen Suchbegriff aus dem Input-Feld
        var searchTerm = searchInput.value;

        // Überprüfen, ob ein Suchbegriff eingegeben wurde
        if (searchTerm) {
            // Hier senden wir eine AJAX-Anfrage, um Daten aus anbindungausgabe.php abzurufen
            var xhr = new XMLHttpRequest();
            xhr.open("GET", "anbindungausgabe.php", true);
            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var response = xhr.responseText; // Die Daten von anbindungausgabe.php
                    console.log("Antwort von anbindungausgabe.php: " + response);

                    // Die Daten in das HTML-Element einfügen
                    var searchResultElement = document.getElementById("search-result");
                    searchResultElement.innerHTML = response;
                }
            }
        } else {
            var searchResultElement = document.getElementById("search-result");
            searchResultElement.innerHTML = "Bitte geben Sie einen Suchbegriff ein.";
        }
    }
});*/
