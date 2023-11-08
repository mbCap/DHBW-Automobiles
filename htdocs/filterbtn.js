// Warten, bis das Dokument geladen ist, dann die Funktion ausführen
document.addEventListener("DOMContentLoaded", function() {

    // Input der Filterfelder in eine Variable schreiben
    var fahrzeugInput = document.getElementById("fahrzeugklasse-filter");
    var markeInput = document.getElementById("marke-filter");
    var modellInput = document.getElementById("modell-filter");
    var kraftstoffverbrauchInput = document.getElementById("kraftstoff-filter");
    var schadstoffklasseInput = document.getElementById("schadstoffklasse-filter");
    var kraftstoffInput = document.getElementById("kraftstoffverbrauch-filter");

    // Filterbutton
    var filterButton = document.getElementById("filter-btn"); 
    // Definieren, wo die Ergebnisse ausgegeben werden sollen
    var filterResultElement = document.getElementById("output");

    // Eventlistener auf Filter Button
    filterButton.addEventListener("click", performSearch);

    // Methode zur Durchführung der Suche
    function performSearch() {
        var selectedFahrzeugklasse = fahrzeugInput.value.toLowerCase();
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
                            (selectedMarke === "" || marke.toLowerCase().includes(selectedMarke)) &&
                            (selectedModell === "" || modell.toLowerCase().includes(selectedModell)) &&
                            (selectedFahrzeugklasse === "" || fahrzeugklasse.toLowerCase().includes(selectedFahrzeugklasse)) &&
                            (selectedKraftstoffverbrauch === "" || kraftstoffverbrauch.toLowerCase().includes(selectedKraftstoffverbrauch)) &&
                            (selectedSchadstoffklasse === "" || schadstoffklasse.toLowerCase().includes(selectedSchadstoffklasse)) &&
                            (selectedKraftstoff === "" || kraftstoff.toLowerCase().includes(selectedKraftstoff))
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
                        htmlString += "Marke: " + result.Marke + "<br>";
                        htmlString += "Modell: " + result.Modell + "<br>";
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
