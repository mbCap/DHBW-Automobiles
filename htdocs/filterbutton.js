var xmlData; // Hier werden die XML-Daten gespeichert

// XMLHttpRequest verwenden, um die XML-Datei zu laden
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // XML in ein DOM-Dokument umwandeln
        var xmlDoc = xhttp.responseXML;

        // Die XML-Daten als JavaScript-Objekt speichern
        xmlData = parseXMLData(xmlDoc);

       
        initializeFiltersAndListeners(); // Neue Funktion hinzugefügt
    }
};
xhttp.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml", true);
xhttp.send();

    // Funktion zur Umwandlung des XML-Dokuments in ein JavaScript-Objekt
    function parseXMLData(xmlDoc) {
    const automobiles = xmlDoc.getElementsByTagName("automobile");

    const result = [];

    for (let i = 0; i < automobiles.length; i++) {
        const automobile = automobiles[i];
        const model = automobile.querySelector("model").textContent;
        const HSN = automobile.querySelector("HSN").textContent;
        const TSN = automobile.querySelector("TSN").textContent;
        const Fahrzeugklasse = automobile.querySelector("Fahrzeugklasse").textContent;
        const ArtAufbau = automobile.querySelector("ArtAufbau").textContent;
        const Marke = automobile.querySelector("Marke").textContent;
        const Fahrzeugvariante = automobile.querySelector("Fahrzeugvariante").textContent;
        const HKB = automobile.querySelector("HKB").textContent;
        const Fahrzeugaufbau = automobile.querySelector("Fahrzeugaufbau").textContent;
        const EGT = automobile.querySelector("EGT").textContent;
        const Schadstoffklasse = automobile.querySelector("Schadstoffklasse").textContent;
        const Kraftstoff = automobile.querySelector("Kraftstoff").textContent;
        const innerorts = parseFloat(automobile.querySelector("innerorts").textContent);
        const ausserorts = parseFloat(automobile.querySelector("ausserorts").textContent);
        const kombiniert = parseFloat(automobile.querySelector("kombiniert").textContent);
        const co2EmissionKombiniertNEFZ = parseFloat(automobile.querySelector("co2EmissionKombiniertNEFZ").textContent);
        const sehrSchnell = parseFloat(automobile.querySelector("sehrSchnell").textContent);
        const schnell = parseFloat(automobile.querySelector("schnell").textContent);
        const langsam = parseFloat(automobile.querySelector("langsam").textContent);
        const co2EmissionKombiniertWLTP = parseFloat(automobile.querySelector("co2EmissionKombiniertWLTP").textContent);

        result.push({
            model,
            HSN,
            TSN,
            Fahrzeugklasse,
            ArtAufbau,
            Marke,
            Fahrzeugvariante,
            HKB,
            Fahrzeugaufbau,
            EGT,
            Schadstoffklasse,
            Kraftstoff,
            innerorts,
            ausserorts,
            kombiniert,
            co2EmissionKombiniertNEFZ,
            sehrSchnell,
            schnell,
            langsam,
            co2EmissionKombiniertWLTP
        });
    }

    return result;
}

function initializeFiltersAndListeners() {
    // Hier fügst du den Code hinzu, um die Event-Listener und andere Funktionen zu initialisieren
    document.addEventListener("DOMContentLoaded"), function() {
        // Finde die HTML-Elemente, die deine Filter und den Filter-Button darstellen
        var filterButtons = document.querySelectorAll(".filter-button");
        var filterContainer = document.getElementById("filter-container");
        var outputContainer = document.getElementById("output-container");
        }
    }
        // Event-Listener für die Filter-Buttons hinzufügen
        filterButtons.forEach(function(button) {
            button.addEventListener("click", function() {
                var selectedFilters = getSelectedFilters(filterContainer);
                var filteredData = filterXMLData(selectedFilters, xmlData);
                displayFilteredData(filteredData);
            });
        });
    

        // Funktion zum Abrufen der ausgewählten Filter
        function getSelectedFilters(container) {
        var selectedFilters = {};
        var filterInputs = container.querySelectorAll("select");

        filterInputs.forEach(function(input) {
            var filterName = input.getAttribute("name");
            var filterValue = input.value;

            if (filterValue !== "all") {
                selectedFilters[filterName] = filterValue;
            }
        });

        return selectedFilters;
    }

    // Funktion zum Filtern der XML-Daten basierend auf den ausgewählten Filtern
    function filterXMLData(filters, data) {
        return data.filter(function(item) {
            for (var key in filters) {
                if (filters[key] !== item[key]) {
                    return false;
                }
            }
            return true;
        });
    }

    // Funktion zum Anzeigen der gefilterten Daten
    function displayFilteredData(data) {
        outputContainer.innerHTML = ""; // Leere den Anzeigebereich

    if (data.length === 0) {
        outputContainer.textContent = "Keine passenden Fahrzeuge gefunden.";
        return;
    }

    data.forEach(function(item) {
        var result = document.createElement("div");
        result.textContent = item.Marke + " " + item.Modell;
        outputContainer.appendChild(result);
         });
    }

   
    function initializeFiltersAndListeners() {
    // Finde die HTML-Elemente, die deine Filter und den Filter-Button darstellen
    var filterButtons = document.querySelectorAll(".filter-button");
    var filterContainer = document.getElementById("filter-container");
    var outputContainer = document.getElementById("output-container");

    // Definiere die Filter-Dropdown-Listen
    var filterDropdowns = {
        Fahrzeugklasse: document.getElementById("filter-Fahrzeugklasse"),
        Marke: document.getElementById("filter-Marke"),
        Modell: document.getElementById("filter-Modell"),
        DurchschnittlicherKraftstoffverbrauch: document.getElementById("filter-Kraftstoffverbrauch"),
        Schadstoffklasse: document.getElementById("filter-Schadstoffklasse"),
        Kraftstoff: document.getElementById("filter-Kraftstoff")
    };

    // Event-Listener für die Filter-Buttons hinzufügen
    filterButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var selectedFilters = getSelectedFilters(filterDropdowns);
            var filteredData = filterXMLData(selectedFilters, xmlData);
            displayFilteredData(filteredData);
        });
    });

    // Funktion zum Abrufen der ausgewählten Filter aus Dropdown-Listen
    function getSelectedFilters(dropdowns) {
        var selectedFilters = {};

        for (var filterName in dropdowns) {
            var selectedOption = dropdowns[filterName].value;
            if (selectedOption !== "all") {
                selectedFilters[filterName] = selectedOption;
            }
        }
        return selectedFilters;
    }

    // Die Funktion filterXMLData bleibt gleich, wie zuvor definiert.

    // Die Funktion zum Anzeigen der gefilterten Daten bleibt auch gleich.

    // Füge hier gegebenenfalls weitere Funktionen oder Anpassungen hinzu, die du benötigst.

    // Initialisiere die Dropdown-Listen nach dem Laden der Seite oder den XML-Daten.
}

    // Du kannst die initializeFiltersAndListeners()-Funktion aufrufen, nachdem die XML-Daten geladen wurden.
    // Annahme: xmlData wurde bereits geladen und parseXMLData() wurde aufgerufen.

    document.addEventListener("DOMContentLoaded", function () {
        // Hier ruf die initializeFiltersAndListeners()-Funktion auf.
        initializeFiltersAndListeners();
    });
