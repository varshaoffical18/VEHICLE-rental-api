const express = require('express');
const app = express();
app.use(express.json());

// Vehicle Data
let vehicles = [
    { id: 1, brand: "Tesla", model: "Model 3", status: "Available" },
    { id: 2, brand: "Toyota", model: "Camry", status: "Rented" }
];

// GET: View all vehicles
app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});

// POST: Add new vehicle
app.post('/vehicles', (req, res) => {
    const newVehicle = { id: vehicles.length + 1, ...req.body };
    vehicles.push(newVehicle);
    res.status(201).json(newVehicle);
});

app.listen(3000, () => console.log('Server running on port 3000'));
  
