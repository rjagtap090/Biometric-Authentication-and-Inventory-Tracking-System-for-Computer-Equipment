const express = require('express');
const router = express.Router();
const FingerprintScanner = require('fingerprint-scanner-sdk');

const scanner = new FingerprintScanner();

router.post('/authenticate', async (req, res) => {
    try {
        const { fingerprintData } = req.body;
        const isAuthenticated = await scanner.authenticate(fingerprintData);
        if (isAuthenticated) {
            res.status(200).json({ message: 'Authentication successful' });
        } else {
            res.status(401).json({ message: 'Authentication failed' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
