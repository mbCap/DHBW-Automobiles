// Deklaration des Arrays zur Speicherung der XML-Daten
var xmlData = [];

// Funktion zum Parsen der XML-Daten
function parseXMLData(xmlDoc) {
    var cars = xmlDoc.getElementsByTagName("car");
    for (var i = 0; i < cars.length; i++) {
        var car = cars[i];
        var carData = {
            Marke: car.getElementsByTagName("Marke")[0].textContent,
            Modell: car.getElementsByTagName("Modell")[0].textContent,
            HSN: car.getElementsByTagName("HSN")[0].textContent,
            TSN: car.getElementsByTagName("TSN")[0].textContent,
            Fahrzeugklasse: car.getElementsByTagName("Fahrzeugklasse")[0].textContent,
            Kraftstoff: car.getElementsByTagName("Kraftstoff")[0].textContent,
            innerorts: car.getElementsByTagName("innerorts")[0].textContent,
            ausserorts: car.getElementsByTagName("ausserorts")[0].textContent,
            kombiniert: car.getElementsByTagName("kombiniert")[0].textContent,
            co2EmissionKombiniertNEFZ: car.getElementsByTagName("co2EmissionKombiniertNEFZ")[0].textContent,
            co2EmissionKombiniertWLTP: car.getElementsByTagName("co2EmissionKombiniertWLTP")[0].textContent
        };
        xmlData.push(carData);
    }

    // Jetzt, da die XML-Daten geparst wurden, fügen Sie den Event-Listener hinzu
    addEventListeners();
}

// Funktion zum Anzeigen der Details in einem Popup-Fenster
function displayCarDetails(car) {
    var detailsPopup = window.open('', 'Car Details', 'width=400,height=400');
    
    // Erstellen Sie den HTML-Inhalt für das Popup
    var popupContent = `
        <h2>${car.Marke} ${car.Modell}</h2>
        <p><strong>HSN:</strong> ${car.HSN}</p>
        <p><strong>TSN:</strong> ${car.TSN}</p>
        <p><strong>Fahrzeugklasse:</strong> ${car.Fahrzeugklasse}</p>
        <p><strong>Kraftstoff:</strong> ${car.Kraftstoff}</p>
        <p><strong>innerorts:</strong> ${car.innerorts} l/100km</p>
        <p><strong>ausserorts:</strong> ${car.ausserorts} l/100km</p>
        <p><strong>kombiniert:</strong> ${car.kombiniert} l/100km</p>
        <p><strong>CO2-Emission (NEFZ):</strong> ${car.co2EmissionKombiniertNEFZ} g/km</p>
        <p><strong>CO2-Emission (WLTP):</strong> ${car.co2EmissionKombiniertWLTP} g/km</p>
    `;
    
    // Setzen Sie den HTML-Inhalt des Popups
    detailsPopup.document.write(popupContent);
}

// Funktion zum Hinzufügen der Event-Listener
function addEventListeners() {
    var detailsButtons = document.querySelectorAll(".new-cars-btn");
    
    detailsButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var carName = button.parentElement.querySelector("h2 a").textContent;
            var selectedCar = findCarInXML(carName);

            if (selectedCar) {
                displayCarDetails(selectedCar);
            }
        });
    });
}

// XMLHttpRequest-Anfrage zum Laden der XML-Daten
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var xmlDoc = xhttp.responseXML;
        parseXMLData(xmlDoc);
    }
};
xhttp.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml", true);
xhttp.send();
