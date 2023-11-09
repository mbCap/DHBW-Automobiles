// Warten, bis das Dokument geladen ist, dann die Funktion ausführen
document.addEventListener("DOMContentLoaded", function() {
 
    // Input der Filterfelder in eine Variable schreiben
    var fahrzeugklasseInput = document.getElementById("fahrzeugklasse-filter");
    var markeInput = document.getElementById("marke-filter");
    var modellInput = document.getElementById("modell-filter");
    var kraftstoffverbrauchInput = document.getElementById("kraftstoffverbrauch-filter");
    var schadstoffklasseInput = document.getElementById("schadstoffklasse-filter");
    var kraftstoffInput = document.getElementById("kraftstoff-filter");
 
    // Filterbutton
    var filterButton = document.getElementById("filter-btn");
    // Definieren, wo die Ergebnisse ausgegeben werden sollen
    var filterResultElement = document.getElementById("output");
 
    // Eventlistener auf Filter Button
    filterButton.addEventListener("click", performSearch);
 
    // Methode zur Durchführung der Suche
    function performSearch() {
        var selectedFahrzeugklasse = fahrzeugklasseInput.value.toLowerCase();
        var selectedMarke = markeInput.value.toLowerCase();
        var selectedModell = modellInput.value.toLowerCase();
        var selectedKraftstoffverbrauch = kraftstoffverbrauchInput.value.toLowerCase();
        var selectedSchadstoffklasse = schadstoffklasseInput.value.toLowerCase();
        var selectedKraftstoff = kraftstoffInput.value.toLowerCase();
 
        // AJAX Call um XML einzulesen
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml", true);
        xhr.send();
 
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = xhr.responseXML; // Die Daten aus der automobiles.xml-Datei
 
                    // Verarbeite die XML-Daten und filtere
                    var automobiles = response.getElementsByTagName("automobile");
                    var filterResults = [];
 
                    for (var i = 0; i < automobiles.length; i++) {
                        var automobile = automobiles[i];
 
                        var marke = automobile.getElementsByTagName("Marke")[0].textContent;
                        var modell = automobile.getElementsByTagName("model")[0].textContent;
                        var fahrzeugklasse = automobile.getElementsByTagName("Fahrzeugklasse")[0].textContent;
                        var kraftstoffverbrauch = automobile.getElementsByTagName("kombiniert")[0].textContent;
                        var schadstoffklasse = automobile.getElementsByTagName("Schadstoffklasse")[0].textContent;
                        var kraftstoff = automobile.getElementsByTagName("Kraftstoff")[0].textContent;
 
                        if (
                            (selectedMarke === "default" || marke.toLowerCase().includes(selectedMarke)) &&
                            (selectedModell === "default" || modell.toLowerCase().includes(selectedModell)) &&
                            (selectedFahrzeugklasse === "default" || fahrzeugklasse.toLowerCase().includes(selectedFahrzeugklasse)) &&
                            (selectedKraftstoffverbrauch === "default" || kraftstoffverbrauch.toLowerCase().includes(selectedKraftstoffverbrauch)) &&
                            (selectedSchadstoffklasse === "default" || schadstoffklasse.toLowerCase().includes(selectedSchadstoffklasse)) &&
                            (selectedKraftstoff === "default" || kraftstoff.toLowerCase().includes(selectedKraftstoff))
                        ) {
                            var result = {
                                Marke: marke,
                                Modell: modell,
                                Fahrzeugklasse: fahrzeugklasse,
                                Kraftstoffverbrauch: kraftstoffverbrauch,
                                Schadstoffklasse: schadstoffklasse,
                                Kraftstoff: kraftstoff
                            };
                            filterResults.push(result);
                        }
                    }
                    
 
                // Erzeuge eine HTML-Liste der Suchergebnisse
                var htmlString = "";
                    for (var j = 0; j < filterResults.length; j++) {
                        var result = filterResults[j];
                        htmlString += "<div style='margin-bottom: 10px; text-align: left;'>"; // Container-Div mit etwas Abstand nach unten und linksbündiger Ausrichtung
                        htmlString += "<strong>Marke:</strong> " + result.Marke + "<br>";
                        htmlString += "<strong>Modell:</strong> " + result.Modell + "<br>";
                        htmlString += "<strong>Fahrzeugklasse:</strong> " + result.Fahrzeugklasse + "<br>";
                        htmlString += "<strong>Schadstoffklasse:</strong> " + result.Schadstoffklasse + "<br>";
                        htmlString += "<strong>Kraftstoff: </strong>" + result.Kraftstoff + "<br>";
                        htmlString += "<strong>kombinierter Verbrauch:</strong> " + result.Kraftstoffverbrauch + " l/100 km" + "<br>";
                        htmlString += "</div>"; // Ende des Container-Divs
                        // Hier weitere Eigenschaften hinzufügen
                        htmlString += "<hr>";
                    }
 
                // Wenn keine Übereinstimmungen gefunden wurden
                if (htmlString === "") {
                        htmlString = "Keine Übereinstimmungen gefunden.";
                    }
 
                    filterResultElement.innerHTML = htmlString;
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                }
            }
        };
    }
});