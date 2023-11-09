document.addEventListener("DOMContentLoaded", function() {
    // Warte darauf, dass das DOM vollständig geladen ist, bevor der Code ausgeführt wird.

    var button = document.getElementById("show-all-button");
    // Suche das HTML-Element mit der ID "show-all-button" und speichere es in der Variable "button".

    button.addEventListener("click", function() {
        // Füge einen Event-Listener für den Klick auf den Button hinzu.

        var xhr = new XMLHttpRequest();
        // Erstelle ein XMLHttpRequest-Objekt für die Datenübertragung zwischen Client und Server.

        // Konfiguriere die Anfrage (Methode, URL)
        xhr.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml");
        // Setze die Anfragemethode auf GET und die URL auf die Adresse der XML-Daten.

        xhr.onreadystatechange = function() {
            // Warte auf Änderungen im Status der Anfrage.

            if (xhr.readyState === 4) {
                // Überprüfe, ob die Anfrage abgeschlossen ist.

                if (xhr.status === 200) {
                    // Überprüfe, ob die Anfrage erfolgreich war (Statuscode 200).

                    var response = xhr.responseXML;
                    // Die Antwort wird als XML interpretiert.

                    var automobiles = response.getElementsByTagName("automobile");
                    // Suche alle Elemente mit dem Tag "automobile" in der XML-Antwort.

                    // Verarbeite die Informationen
                    var outputElement = document.getElementById("output");
                    // Suche das HTML-Element mit der ID "output" und speichere es in der Variable "outputElement".
                    var htmlString = "";

                    for (var i = 0; i < automobiles.length; i++) {
                        // Iteriere über alle gefundenen "automobile"-Elemente.

                        var automobile = automobiles[i];
                        // Speichere das aktuelle "automobile"-Element.

                        // Extrahiere Daten aus dem XML-Element
                        var marke = automobile.getElementsByTagName("Marke")[0].textContent;
                        var model = automobile.getElementsByTagName("model")[0].textContent;
                        var fahrzeugklasse = automobile.getElementsByTagName("Fahrzeugklasse")[0].textContent;
                        var schadstoffklasse = automobile.getElementsByTagName("Schadstoffklasse")[0].textContent;
                        var kraftstoff = automobile.getElementsByTagName("Kraftstoff")[0].textContent;
                        var innerorts = automobile.getElementsByTagName("innerorts")[0].textContent;
                        var ausserorts = automobile.getElementsByTagName("ausserorts")[0].textContent;
                        var kombiniert = automobile.getElementsByTagName("kombiniert")[0].textContent;
                        var co2EmissionKombiniertNEFZ = automobile.getElementsByTagName("co2EmissionKombiniertNEFZ")[0].textContent;
                        var co2EmissionKombiniertWLTP = automobile.getElementsByTagName("co2EmissionKombiniertWLTP")[0].textContent;
                        var imagesElement = automobile.getElementsByTagName("images")[0];

                        if (imagesElement) {
                            var images = imagesElement.textContent;
                        } else {
                            console.warn("Das 'images'-Element wurde nicht gefunden für Automobil #" + i + ". Ein Platzhalterbild wird verwendet.");
                            var images = 'http://localhost/DHBW-Automobiles/htdocs/assets/images/overview_cars/default.png'; // Setze hier den Pfad zu deinem Platzhalterbild
                        }

                        // Füge die extrahierten Daten dem HTML-String hinzu
                        htmlString += "<div style='margin-bottom: 10px; text-align: left;'>"; // Container-Div mit etwas Abstand nach unten und linksbündiger Ausrichtung
                        htmlString += "<strong>Marke:</strong> " + marke + "<br>";
                        htmlString += "<strong>Modell:</strong> " + model + "<br>";
                        htmlString += "<strong>Fahrzeugklasse:</strong> " + fahrzeugklasse + "<br>";
                        htmlString += "<strong>Schadstoffklasse:</strong> " + schadstoffklasse + "<br>";
                        htmlString += "<strong>Kraftstoff:</strong> " + kraftstoff + "<br>";
                        htmlString += "<strong>Verbrauch innerorts:</strong> " + innerorts + "<br>";
                        htmlString += "<strong>Verbrauch ausserorts:</strong> " + ausserorts + "<br>";
                        htmlString += "<strong>kombinierter Verbrauch:</strong> " + kombiniert + "<br>";
                        htmlString += "<strong>CO2-Emission kombiniert:</strong> " + co2EmissionKombiniertNEFZ + "<br>";
                        htmlString += "<strong>co2EmissionKombiniertWLTP:</strong> " + co2EmissionKombiniertWLTP + "<br>";
                        htmlString += "</div>"; // Ende des Container-Divs
                        htmlString += "<hr>"; // Füge eine horizontale Linie hinzu, um die einzelnen Datensätze zu trennen.
                    }

                    outputElement.innerHTML = htmlString;
                    // Setze den HTML-Inhalt des "output"-Elements auf den generierten HTML-String.
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                    // Gib eine Fehlermeldung aus, wenn die Anfrage nicht erfolgreich war.
                }
            }
        };

        xhr.send();
        // Sende die Anfrage ab.
    });
});
