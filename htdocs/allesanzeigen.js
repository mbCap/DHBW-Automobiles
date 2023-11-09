document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("show-all-button");

    button.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();

        // Konfiguriere die Anfrage (Methode, URL)
        xhr.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml"); // Ersetze "URL_DER_DATENQUELLE" durch die tatsächliche URL, von der du die Daten abrufen möchtest.


        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var response = xhr.responseXML;

                    var automobiles = response.getElementsByTagName("automobile");

                    // Verarbeite die Informationen
                    var outputElement = document.getElementById("output");
                    var htmlString = "";

                    for (var i = 0; i < automobiles.length; i++) {
                        var automobile = automobiles[i];
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
                        var images = automobile.getElementsByTagName("images")[0].textContent;


                        // Hier kannst du weitere Daten aus der XML extrahieren und in deiner Ausgabe verwenden

                        htmlString += "Marke: " + marke + "<br>";
                        htmlString += "Modell: " + model + "<br>";
                        htmlString += "Fahrzeugklasse: " + fahrzeugklasse + "<br>";
                        htmlString += "Schadstoffklasse: " + schadstoffklasse + "<br>";
                        htmlString += "Kraftstoff: " + kraftstoff + "<br>";
                        htmlString += "innerorts: " + innerorts + "<br>";
                        htmlString += "ausserots: " + ausserorts + "<br>";
                        htmlString += "kombiniert: " + kombiniert + "<br>";
                        htmlString += "co2EmissionKombiniertNEFZ: " + co2EmissionKombiniertNEFZ + "<br>";
                        htmlString += "co2EmissionKombiniertWLTP: " + co2EmissionKombiniertWLTP + "<br>";
                        htmlString += "" + images + "<br>";
                        htmlString += "<hr>";
                    }

                    outputElement.innerHTML = htmlString;
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                }
            }
        };

        xhr.send();
    });
});
