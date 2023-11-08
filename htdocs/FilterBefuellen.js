document.addEventListener("DOMContentLoaded", function() {
    // Funktion zum Laden der XML-Datei und Füllen der Dropdown-Listen
    function loadXML() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          parseXML(this);
        }
      };
      xhttp.open("GET", "Backend/automobiles.xml", true);
      xhttp.send();
    }
   
    // Funktion zum Verarbeiten der XML-Daten und Füllen der Dropdown-Listen
    function parseXML(xml) {
      var xmlDoc = xml.responseXML;
   
      // Funktion zum Füllen der Dropdown-Liste mit eindeutigen und alphabetisch sortierten Werten aus der XML
      function fillFilterDropdown(id, tagName) {
        var select = document.getElementById(id);
        var options = xmlDoc.getElementsByTagName(tagName);
        var uniqueValues = ["auswählen"];
   
        for (var i = 0; i < options.length; i++) {
          var option = options[i].textContent;
          if (!uniqueValues.includes(option)) {
            uniqueValues.push(option);
          }
        }
   
        // Alphabetisch sortieren
        uniqueValues.sort();
   
        for (var i = 0; i < uniqueValues.length; i++) {
          var optionElement = document.createElement("option");
          optionElement.value = uniqueValues[i];
          optionElement.textContent = uniqueValues[i];
          select.appendChild(optionElement);
        }
   
        return uniqueValues;
      }
   
      // Fülle die Dropdown-Listen und speichere die Werte in Arrays
      var fahrzeugklasseOptions = fillFilterDropdown("fahrzeugklasse-filter", "Fahrzeugklasse");
      var kraftstoffverbrauchOptions = fillFilterDropdown("kraftstoffverbrauch-filter", "kombiniert");
      var markeOptions = fillFilterDropdown("marke-filter", "Marke");
      var schadstoffklasseOptions = fillFilterDropdown("schadstoffklasse-filter", "Schadstoffklasse");
      var modellOptions = fillFilterDropdown("modell-filter", "model");
      var kraftstoffOptions = fillFilterDropdown("kraftstoff-filter", "Kraftstoff");
   
      // Füge Event-Listener für Dropdown-Listen hinzu
      document.getElementById("marke-filter").addEventListener("change", function() {
        var selectedMarke = this.value;
        filterModellOptions(selectedMarke);
      });
   
      // Filterfunktion für Modell-Optionen basierend auf der ausgewählten Marke
      function filterModellOptions(selectedMarke) {
        var select = document.getElementById("modell-filter");
        select.innerHTML = ""; // Dropdown-Liste leeren
   
        for (var i = 0; i < modellOptions.length; i++) {
          var modell = modellOptions[i];
          if (modell === "auswählen" || getMarkeFromModel(modell) === selectedMarke) {
            var optionElement = document.createElement("option");
            optionElement.value = modell;
            optionElement.textContent = modell;
            select.appendChild(optionElement);
          }
        }
      }
   
      // Funktion zur Ermittlung der Marke eines Modells aus den XML-Daten
      function getMarkeFromModel(model) {
        var nodes = xmlDoc.getElementsByTagName("model");
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i].textContent === model) {
            var parent = nodes[i].parentNode;
            return parent.getElementsByTagName("Marke")[0].textContent;
          }
        }
        return null;
      }
    }
   
    // Die XML-Datei laden und die Dropdown-Listen füllen, wenn das Dokument geladen ist
    loadXML();
  });

