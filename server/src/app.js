const express = require('express');
const app = express();

// express server take in some json data so we can use middleware function
// express.json() which will parse any incoming json from the body of incoming request
app.use(express.json())
module.exports = app;