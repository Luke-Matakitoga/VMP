const express = require('express')
const router = express.Router();
const manager = require('../manager');

/**
 * @swagger
 * /v1/instances/reg:
 *   get:
 *     summary: Register a new instance
 *     responses:
 *       200:
 *         description: The ID of the newly registered instance
 */
router.get('/reg', (req, res) => {
    var result = manager.registerInstance();
    res.json({"ID":result})
});

/**
 * @swagger
 * /v1/instances/:id:
 *   get:
 *     summary: Retrieve instance details by ID
 *     responses:
 *       200:
 *         description: The full structure of the requested instance
 * @param {int} id
 */
router.get('/:id', (req, res) => {
    res.json({"instance":manager.instances.find(i => i.ID == req.params.id)});
});

/**
 * @swagger
 * /v1/instances/:id/report:
 *   post:
 *     summary: Make a user report to a specified instance
 *     responses:
 *       200:
 *         description: Status code
 */
router.post('/:id/report', (req, res) => {

});

module.exports = router;