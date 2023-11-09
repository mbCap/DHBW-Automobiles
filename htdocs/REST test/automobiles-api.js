const express = require('express');
const app = express();
const port = 3000;

// Beispiel-Daten (ersetze dies durch deine tatsächlichen Daten)
const automobilesData = [
    { id: 1, make: 'Mercedes', model: 'S-Klasse' },
    { id: 2, make: 'BMW', model: 'A3' },
    
];

// Middleware zum Parsen von JSON-Anfragen
app.use(express.json());

// GET-Anfrage, um alle Fahrzeuge abzurufen
app.get('/automobiles', (req, res) => {
    res.json(automobilesData);
});

// GET-Anfrage, um ein einzelnes Fahrzeug abzurufen
app.get('/automobiles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const automobile = automobilesData.find((car) => car.id === id);

    if (!automobile) {
        res.status(404).json({ error: 'Fahrzeug nicht gefunden' });
    } else {
        res.json(automobile);
    }
});

// POST-Anfrage, um ein neues Fahrzeug hinzuzufügen
app.post('/automobiles', (req, res) => {
    const newAutomobile = req.body;
    newAutomobile.id = automobilesData.length + 1;
    automobilesData.push(newAutomobile);
    res.status(201).json(newAutomobile);
});

// PUT-Anfrage, um ein vorhandenes Fahrzeug zu aktualisieren
app.put('/automobiles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedAutomobile = req.body;

    const index = automobilesData.findIndex((car) => car.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Fahrzeug nicht gefunden' });
    } else {
        automobilesData[index] = updatedAutomobile;
        res.json(updatedAutomobile);
    }
});

// DELETE-Anfrage, um ein Fahrzeug zu löschen
app.delete('/automobiles/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const index = automobilesData.findIndex((car) => car.id === id);
    if (index === -1) {
        res.status(404).json({ error: 'Fahrzeug nicht gefunden' });
    } else {
        automobilesData.splice(index, 1);
        res.json({ message: 'Fahrzeug gelöscht' });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
