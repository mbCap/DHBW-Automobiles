document.addEventListener("DOMContentLoaded", function() {
  var xmlDoc; // Variable für den XML-Content
 
  // Funktion zum Laden der XML-Datei und Füllen der Dropdown-Listen
  function loadXML() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        xmlDoc = this.responseXML; // XML-Content speichern
        parseXML();
      }
    };
    xhttp.open("GET", "http://localhost/DHBW-Automobiles/htdocs/Backend/automobiles.xml", true);
    xhttp.send();
  }
 
  // Funktion zum Verarbeiten der XML-Daten und Füllen der Dropdown-Listen
  function parseXML() {
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
 
      // Option Elemente in den Filtern befüllen
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
    var MarkeOptions = fillFilterDropdown("marke-filter", "Marke");
    var schadstoffklasseOptions = fillFilterDropdown("schadstoffklasse-filter", "Schadstoffklasse");
    var modellOptions = fillFilterDropdown("modell-filter", "model");
    var kraftstoffOptions = fillFilterDropdown("kraftstoff-filter", "Kraftstoff");
 
    }
  
  // Die XML-Datei laden und die Dropdown-Listen füllen, wenn das Dokument geladen ist
  loadXML();
});
 