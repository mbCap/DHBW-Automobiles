document.addEventListener("DOMContentLoaded", function() {
    // Wir wählen das Such-Input-Feld und den Suchen-Button aus
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var searchResultElement = document.getElementById("search-result");

    // Wir fügen einen Event-Listener für den Klick auf den Suchen-Button hinzu
    searchButton.addEventListener("click", performSearch);

    // Wir fügen einen Event-Listener hinzu, um die Suche bei Drücken der "Enter"-Taste auszulösen
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Die Funktion zur Durchführung der Suche
function performSearch() {
    // Holen Sie den eingegebenen Suchbegriff aus dem Input-Feld und konvertieren Sie ihn zu Kleinbuchstaben
    var searchTerm = searchInput.value.toLowerCase();

    // Überprüfen, ob ein Suchbegriff eingegeben wurde
    if (searchTerm) {
        // Hier senden wir eine AJAX-Anfrage, um die automobiles.xml-Datei abzurufen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = xhr.responseXML; // Die Daten aus der automobiles.xml-Datei

                    // Verarbeite die XML-Daten und filtere nach dem Suchbegriff (ignoriert Groß- und Kleinschreibung)
                    var automobiles = response.getElementsByTagName("automobile");
                    var searchResults = [];

                    for (var i = 0; i < automobiles.length; i++) {
                        var automobile = automobiles[i];
                        var marke = automobile.getElementsByTagName("Marke")[0].textContent;

                        // Überprüfen, ob die Marke dem Suchbegriff entspricht (ignoriert Groß- und Kleinschreibung)
                        if (marke.toLowerCase().includes(searchTerm)) {
                            var modell = automobile.getElementsByTagName("model")[0].textContent; // "model" für Modell; keine gute Attributsbezeichnung
                            var result = {
                                Marke: marke,
                                Modell: modell
                            };
                            searchResults.push(result);
                        }
                    }

                    // Erzeuge eine HTML-Liste der Suchergebnisse
                    var htmlString = "";
                    for (var j = 0; j < searchResults.length; j++) {
                        var result = searchResults[j];
                        htmlString += "Marke: " + result.Marke + "<br>";
                        htmlString += "model: " + result.Modell + "<br>";
                        htmlString += "<hr>";
                    }

                    // Wenn keine Übereinstimmungen gefunden wurden
                    if (htmlString === "") {
                        htmlString = "Keine Übereinstimmungen gefunden.";
                    }

                    searchResultElement.innerHTML = htmlString;
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                }
            }
        };
    } else {
        searchResultElement.innerHTML = "Bitte geben Sie einen Suchbegriff ein.";
    }
}
});
