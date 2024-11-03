const express = require('express');
const app = express();
const port = 2150;
const manager = require('./manager');

// Setup routes
app.use('/instances', require('./endpoints/instanceEndpoints'));

app.listen(port, () => {
    console.log("VMP is running!");
});
