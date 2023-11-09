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



    //Eventlistener für verschiedene Filter

    // Eventlistener für Fahrzeugklasse
    document.getElementById("fahrzeugklasse-filter").addEventListener("change", function() {
      var selectedFahrzeugklasse = this.value;
      filterMarkeOptionsByFahrzeugklasse(selectedFahrzeugklasse);
      filterModellOptionsByFahrzeugklasse(selectedFahrzeugklasse);
    });

    // Event-Listener für Marke hinzu
    document.getElementById("marke-filter").addEventListener("change", function() {
        var selectedMarke = this.value;
        filterModellOptions(selectedMarke);
    });



    //Filterfunktionen

    // Filterfunktion für Marke basierend auf auswählter Fahrzeugklasse
    function filterMarkeOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("marke-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren

      for (var i = 0; i < markeOptions.length; i++) {
        var marke = markeOptions[i];
        if (marke === "auswählen" || getFahrzeugklasseFromMarke(marke) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = marke;
          optionElement.textContent = marke;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }

     // Filterfunktion für Modell basierend auf auswählter Fahrzeugklasse
     function filterModellOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("modell-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren

      for (var i = 0; i < modellOptions.length; i++) {
        var modell = modellOptions[i];
        if (modell === "auswählen" || getFahrzeugklasseFrommodell(modell) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = modell;
          optionElement.textContent = modell;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }


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
      select.value = "auswählen";
    }


    //Ermittlung der Daten aus der XML-Datei

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

    // Funktion zur Ermittlung der Fahrzeugklasse einer Marke aus den XML-Daten
    function getFahrzeugklasseFromMarke(marke) {
      var nodes = xmlDoc.getElementsByTagName("Marke");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === marke) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
    }

    // Funktion zur Ermittlung der Fahrzeugklasse eines Modells aus den XML-Daten
    function getFahrzeugklasseFrommodell(modell) {
      var nodes = xmlDoc.getElementsByTagName("model");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === modell) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
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
