const express = require('express');
const app = express();
const port = 2150;
const manager = require('./manager');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use('/v1/instances', require('./endpoints/instanceEndpoints'));

app.get('/v1/ping', (req, res) => {
    res.status(200).json({"result":"pong"});
});


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
