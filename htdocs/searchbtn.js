document.addEventListener("DOMContentLoaded", function() {
    // Wir wählen das Such-Input-Feld und den Suchen-Button aus
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
    var searchResultElement = document.getElementById("output");

    // Wir fügen einen Event-Listener für den Klick auf den Suchen-Button hinzu
    searchButton.addEventListener("click", performSearch);

    // Event-Listener, um die Suche bei Drücken der "Enter"-Taste auszulösen, wenn enter gedrückt wird, werden performSearch und scrollDown aufgerufen
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            performSearch();
            scrollDown();
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
                            var attributes = automobile.children; // Alle Kindknoten des "automobile"-Elements

                            var matchFound = false;

                            for (var j = 0; j < attributes.length; j++) {
                                var attribute = attributes[j];
                                var attributeValue = attribute.textContent;

                                // Überprüfen, ob der Attributwert dem Suchbegriff entspricht (ignoriert Groß- und Kleinschreibung)
                                if (attributeValue.toLowerCase().includes(searchTerm)) {
                                    matchFound = true;
                                    break; // Sobald ein Treffer gefunden wurde, die Schleife beenden
                                }
                            }

                            if (matchFound) {
                                var result = {
                                    Marke: automobile.getElementsByTagName("Marke")[0].textContent,
                                    Modell: automobile.getElementsByTagName("model")[0].textContent,
                                    Fahrzeugklasse: automobile.getElementsByTagName("Fahrzeugklasse")[0].textContent,
                                    Schadstoffklasse: automobile.getElementsByTagName("Schadstoffklasse")[0].textContent,
                                    Kraftstoff: automobile.getElementsByTagName("Kraftstoff")[0].textContent,
                                    innerorts: automobile.getElementsByTagName("innerorts")[0].textContent,
                                    ausserorts: automobile.getElementsByTagName("ausserorts")[0].textContent,
                                    kombiniert: automobile.getElementsByTagName("kombiniert")[0].textContent,
                                    co2EmissionKombiniertNEFZ: automobile.getElementsByTagName("co2EmissionKombiniertNEFZ")[0].textContent,
                                    co2EmissionKombiniertWLTP: automobile.getElementsByTagName("co2EmissionKombiniertWLTP")[0].textContent

                                };
                                searchResults.push(result);
                            }
                        }

                        // Erzeuge eine HTML-Liste der Suchergebnisse
                        var htmlString = "";
                        for (var j = 0; j < searchResults.length; j++) {
                            var result = searchResults[j];

                            htmlString += "Marke: " + result.Marke + "<br>";
                            htmlString += "Modell: " + result.Modell + "<br>";
                            htmlString += "Fahrzeugklasse: " + result.Fahrzeugklasse + "<br>";
                            htmlString += "Schadstoffklasse: " + result.Schadstoffklasse + "<br>";
                            htmlString += "Kraftstoff: " + result.Kraftstoff + "<br>";
                            htmlString += "Verbrauch innerorts: " + result.innerorts + " l/100km" +"<br>";
                            htmlString += "Verbrauch ausserorts: " + result.ausserorts + " l/100km" + "<br>";
                            htmlString += "Verbrauch kombiniert: " + result.kombiniert + " l/100km" + "<br>";
                            htmlString += "Co2-Emissionen kombiniert: " + result.co2EmissionKombiniertNEFZ + " g/km (NEFZ)" + "<br>";
                            htmlString += "Co2-Emission Kombiniert: " + result.co2EmissionKombiniertWLTP + " g/km (WLTP)" + "<br>";
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
    // Diese Methode bewirkt, dass wenn man in der Suchleiste etwas eingibt und enter drückt, es zum ergebnis scrollt
    function scrollDown() {
        var targetElement = document.getElementById("service"); // Hier musst du das ID-Attribut des Ziels eintragen
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});
