# Biometric-Authentication-and-Inventory-Tracking-System-for-Computer-Equipment

## Overview

This project was developed during my internship at Shree Multimedia Pvt. Ltd. from August 2020 to May 2021 in Pune, Maharashtra, India. The main objectives were to integrate a real-time biometric authentication fingerprint scanner, reduce authentication time, enhance user experience and security, and develop a cloud-based web app for biometric authentication and inventory tracking of computer equipment.

## Features

- **Real-time Biometric Authentication:** Integrated a fingerprint scanner to reduce authentication time by 50%.
- **Employee Registration:** Reduced registration time by 25%, enhancing operational efficiency.
- **Cloud-based Web App:** Developed for biometric authentication and inventory tracking.
- **Data Accuracy and Tracking:** Improved data accuracy by 30% and reduced tracking errors by 20%.

## Skills Demonstrated

- **Industry Benchmark Analysis**
- **Biometric Authentication**
- **Cloud-based Application Development**
- **Data Accuracy Improvement**
- **Operational Efficiency Enhancement**

## Tools and Technologies

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Biometric Integration:** Fingerprint Scanner SDK
- **Cloud Services:** AWS

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/biometric-inventory-system.git
   cd biometric-inventory-system
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables in a `.env` file:
   ```env
   DB_URI=<your_mongodb_uri>
   AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
   AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
   ```

4. Start the application:
   ```sh
   npm start
   ```

## Code Examples

### Authentication Module

```javascript
const express = require('express');
const router = express.Router();
const FingerprintScanner = require('fingerprint-scanner-sdk');

// Initialize the fingerprint scanner
const scanner = new FingerprintScanner();

// Endpoint for fingerprint authentication
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
```

### Inventory Tracking Module

```javascript
const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// Endpoint to get inventory data
router.get('/inventory', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find({});
    res.status(200).json(inventoryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
```

## Results

- **Authentication Time Reduction:** Reduced authentication time by 50%.
- **Registration Time Reduction:** Achieved a 25% reduction in employee registration time.
- **Data Accuracy Improvement:** Improved data accuracy by 30%.
- **Tracking Errors Reduction:** Reduced tracking errors by 20%.



- **Rishabh Jagtap** ([Email](mailto:rjagtap.1999@gmail.com))

## Acknowledgments

- **Shree Multimedia Pvt. Ltd.**
- **Mentors and Team Members**

