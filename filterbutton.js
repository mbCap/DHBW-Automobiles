document.addEventListener("DOMContentLoaded", function() {
    // Finde die HTML-Elemente, die deine Filter und den Filter-Button darstellen
    var filterButtons = document.querySelectorAll(".filter-button");
    var filterContainer = document.getElementById("filter-container");
    var outputContainer = document.getElementById("output-container");

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
});
