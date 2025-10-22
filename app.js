const express = require('express');
const cors = require('cors');
const contractRoutes = require('./app/routes/contract.route');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/contracts', contractRoutes);

app.get('/', (req, res) => {
    res.json({ message: 
        'Welcome to contact book application' });
});

module.exports = app;