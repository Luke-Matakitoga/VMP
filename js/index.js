const express = require('express');
const app = express();
const port = 2150;
const manager = require('./manager');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


// Setup routes
app.use('/v1/instances', require('./endpoints/instanceEndpoints'));

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
  },
  apis: ['./js/endpoints/*.js'], // Path to your API route files
};

const swaggerSpec = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log("VMP is running!");
});
