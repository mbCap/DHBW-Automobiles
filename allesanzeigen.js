document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("show-all-button");

    button.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();

        // Konfiguriere die Anfrage (Methode, URL)
        xhr.open("GET", "http://localhost/DHBW-Automobiles/Backend/automobiles.xml"); // Ersetze "URL_DER_DATENQUELLE" durch die tatsächliche URL, von der du die Daten abrufen möchtest.


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
                        var model = automobile.getElementsByTagName("model")[0].textContent;
                        var hsn = automobile.getElementsByTagName("HSN")[0].textContent;
                        var tsn = automobile.getElementsByTagName("TSN")[0].textContent;

                        // Hier kannst du weitere Daten aus der XML extrahieren und in deiner Ausgabe verwenden

                        htmlString += "Modell: " + model + "<br>";
                        htmlString += "HSN: " + hsn + "<br>";
                        htmlString += "TSN: " + tsn + "<br>";
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
