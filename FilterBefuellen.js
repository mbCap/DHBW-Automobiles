document.addEventListener("DOMContentLoaded", function() {
    // Funktion zum Laden der XML-Datei
    function loadXML() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          parseXML(this);
        }
      };
      xhttp.open("GET", "deine-xml-datei.xml", true);
      xhttp.send();
    }
  
    // Funktion zum Verarbeiten der XML-Daten und Füllen der Dropdown-Listen
    function parseXML(xml) {
      var xmlDoc = xml.responseXML;
  
      // Fülle die Dropdown-Listen mit den Daten aus der XML
      function fillFilterDropdown(id, tagName) {
        var select = document.getElementById(id);
        var options = xmlDoc.getElementsByTagName(tagName);
  
        for (var i = 0; i < options.length; i++) {
          var option = options[i].textContent;
          var optionElement = document.createElement("option");
          optionElement.value = option;
          optionElement.textContent = option;
          select.appendChild(optionElement);
        }
      }
  
      fillFilterDropdown("fahrzeugklasse-filter", "Fahrzeugklasse");
      fillFilterDropdown("kraftstoffverbrauch-filter", "kombiniert");
      fillFilterDropdown("marke-filter", "Marke");
      fillFilterDropdown("schadstoffklasse-filter", "Schadstoffklasse");
      fillFilterDropdown("modell-filter", "model");
      fillFilterDropdown("kraftstoff-filter", "Kraftstoff");
    }
  
    // Die XML-Datei laden und die Dropdown-Listen füllen, wenn das Dok
  loadXML();
});