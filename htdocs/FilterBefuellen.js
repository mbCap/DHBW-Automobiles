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
    var MarkeOptions = fillFilterDropdown("marke-filter", "Marke");
    var schadstoffklasseOptions = fillFilterDropdown("schadstoffklasse-filter", "Schadstoffklasse");
    var modellOptions = fillFilterDropdown("modell-filter", "model");
    var kraftstoffOptions = fillFilterDropdown("kraftstoff-filter", "Kraftstoff");
 
 
 
    //Eventlistener für verschiedene Filter
 
    // Eventlistener für Fahrzeugklasse
   /*  document.getElementById("fahrzeugklasse-filter").addEventListener("change", function() {
      var selectedFahrzeugklasse = this.value;
      filtermarkeOptionsByFahrzeugklasse(selectedFahrzeugklasse);
      filtermodellOptionsByFahrzeugklasse(selectedFahrzeugklasse);
      filterkrafstoffverbrauchOptionsByFahrzeugklasse(selectedFahrzeugklasse);
      filterschadstoffklasseOptionsByFahrzeugklasse(selectedFahrzeugklasse);
      filterkraftstoffOptionsByFahrzeugklasse(selectedFahrzeugklasse);
    });
 
     // Event-Listener für Marke
    document.getElementById("marke-filter").addEventListener("change", function() {
        var selectedMarke = this.value;
        filterModellOptions(selectedMarke);
        filterFahrzeugklasseOptions(selectedMarke);
    });  
*/
 
 
    //Filterfunktionen
 
    // Filterfunktion für Marke basierend auf auswählter Fahrzeugklasse
/*     function filtermarkeOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("marke-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
 
      for (var i = 0; i < MarkeOptions.length; i++) {
        var Marke = MarkeOptions[i];
        if (Marke === "auswählen" || getFahrzeugklasseFromMarke(Marke) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = Marke;
          optionElement.textContent = Marke;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }
 
     // Filterfunktion für Modell basierend auf auswählter Fahrzeugklasse
     function filtermodellOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("modell-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
 
      for (var i = 0; i < modellOptions.length; i++) {
        var modell = modellOptions[i];
        if (modell === "auswählen" || getFahrzeugklasseFromModel(modell) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = modell;
          optionElement.textContent = modell;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }
 
    // Filterfunktion für durchschnittlicher Kraftstoffverbrauch basierend auf auswählter Fahrzeugklasse
    function filterkrafstoffverbrauchOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("kraftstoffverbrauch-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
 
      for (var i = 0; i < kraftstoffverbrauchOptions.length; i++) {
        var kraftstoffverbrauch = kraftstoffverbrauchOptions[i];
        if (kraftstoffverbrauch === "auswählen" || getFahrzeugklasseFromkraftstoffverbrauch(kraftstoffverbrauch) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = kraftstoffverbrauch;
          optionElement.textContent = kraftstoffverbrauch;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }
 
    // Filterfunktion für Schadstoffklasse basierend auf auswählter Fahrzeugklasse
    function filterschadstoffklasseOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("schadstoffklasse-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
 
      for (var i = 0; i < schadstoffklasseOptions.length; i++) {
        var schadstoffklasse = schadstoffklasseOptions[i];
 
        if (schadstoffklasse === "auswählen" || getFahrzeugklasseFromschadstoffklasse(schadstoffklasse) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = schadstoffklasse;
          optionElement.textContent = schadstoffklasse;
          select.appendChild(optionElement);
        }
      }
      select.value = "auswählen";
    }
 
    // Filterfunktion für Kraftstoff basierend auf auswählter Fahrzeugklasse
    function filterkraftstoffOptionsByFahrzeugklasse(selectedFahrzeugklasse) {
      var select = document.getElementById("kraftstoff-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
 
      for (var i = 0; i < kraftstoffOptions.length; i++) {
        var kraftstoff = kraftstoffOptions[i];
 
        if (kraftstoff === "auswählen" || getFahrzeugklasseFromkraftstoff(kraftstoff) === selectedFahrzeugklasse) {
          var optionElement = document.createElement("option");
          optionElement.value = kraftstoff;
          optionElement.textContent = kraftstoff;
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
 
     // Filterfunktion für Fahrzeugklasse basierend auf der ausgewählten Marke
     function filterFahrzeugklasseOptions(selectedMarke) {
      var select = document.getElementById("fahrzeugklasse-filter");
      select.innerHTML = ""; // Dropdown-Liste leeren
  
        for (var i = 0; i < fahrzeugklasseOptions.length; i++) {
          var fahrzeugklasse = fahrzeugklasseOptions[i];
          if (modell === "auswählen" || getMarkeFromFahrzeugklasse(fahrzeugklasse) === selectedMarke) {
            var optionElement = document.createElement("option");
            optionElement.value = fahrzeugklasse;
            optionElement.textContent = fahrzeugklasse;
            select.appendChild(optionElement);
          }
        }
        select.value = "auswählen";
      }  */
 
 
    //Ermittlung der Daten aus der XML-Datei
 
    // Funktion zur Ermittlung der Fahrzeugklasse einer Marke aus den XML-Daten
  /*   function getFahrzeugklasseFromMarke(Marke) {
      var nodes = xmlDoc.getElementsByTagName("Marke");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === Marke) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
    }
 
    // Funktion zur Ermittlung der Fahrzeugklasse eines Modells aus den XML-Daten
    function getFahrzeugklasseFromModel(model) {
      var nodes = xmlDoc.getElementsByTagName("model");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === model) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
    }
 
    // Funktion zur Ermittlung der Fahrzeugklasse des durchschnittlichen Kraftstoffverbrauchs aus den XML-Daten
    function getFahrzeugklasseFromkraftstoffverbrauch(kraftstoffverbrauch) {
      var nodes = xmlDoc.getElementsByTagName("kombiniert");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === kraftstoffverbrauch) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
    }
 
    // Funktion zur Ermittlung der Fahrzeugklasse des Schadstoffklasse aus den XML-Daten
    function getFahrzeugklasseFromschadstoffklasse(schadstoffklasse) {
      var nodes = xmlDoc.getElementsByTagName("Schadstoffklasse");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === schadstoffklasse) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Fahrzeugklasse")[0].textContent;
        }
      }
      return null;
    }
 
    // Funktion zur Ermittlung der Fahrzeugklasse des Krafstoffs aus den XML-Daten
    function getFahrzeugklasseFromkraftstoff(kraftstoff) {
      var nodes = xmlDoc.getElementsByTagName("Kraftstoff");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === kraftstoff) {
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
    
 
    // Funktion zur Ermittlung der Marke eines Fahrzeugklasse aus den XML-Daten
    function getMarkeFromFahrzeugklasse(fahrzeugklasse) {
      var nodes = xmlDoc.getElementsByTagName("Fahrzeugklasse");
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].textContent === fahrzeugklasse) {
          var parent = nodes[i].parentNode;
          return parent.getElementsByTagName("Marke")[0].textContent;
          }
        }
        return null;
      } */
 
 
 
 
 
 
 
 
    }
  
  // Die XML-Datei laden und die Dropdown-Listen füllen, wenn das Dokument geladen ist
  loadXML();
});
 