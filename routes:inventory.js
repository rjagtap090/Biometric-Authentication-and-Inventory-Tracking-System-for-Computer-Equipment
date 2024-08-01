const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

router.get('/inventory', async (req, res) => {
    try {
        const inventoryItems = await Inventory.find({});
        res.status(200).json(inventoryItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
