document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("show-all-button");

    button.addEventListener("click", function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "anbindungsausgabecopy.php", true);
        xhr.send();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var response = xhr.responseText;
                        var jsonData = JSON.parse(response);
                        var outputElement = document.getElementById("output");
                        var htmlString = "";

                        jsonData.forEach(function(item) {
                            htmlString += "Model: " + item.model + "<br>";
                            htmlString += "HSN: " + item.HSN + "<br>";
                            htmlString += "TSN: " + item.TSN + "<br>";
                            htmlString += "<hr>";
                        });

                        outputElement.innerHTML = htmlString;
                    } catch (error) {
                        console.error("JSON-Parsing-Fehler: " + error);
                    }
                } else {
                    console.error("Fehler beim Abrufen der Daten. Statuscode: " + xhr.status);
                }
            }
        };
    });
});
