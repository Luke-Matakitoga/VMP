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
    var instance = manager.instances.find(i => i.ID == req.params.id)
    if(instance !== undefined){
        res.json({"instance":instance});
    }else{
        res.status(400).json({"error":"Instance not found with specified ID"});
    }
});

/**
 * @swagger
 * /v1/instances/report:
 *   post:
 *     summary: Make a user report to a specified instance
 *     responses:
 *       200:
 *         description: Status code
 */
router.post('/report', (req, res) => {

});

/**
 * @swagger
 * /v1/instances/join:
 *   post:
 *     summary: Make a join request to a specified instance
 *     responses:
 *       200:
 *         description: Returns user ID
 */
router.post('/join', (req, res) => {
    console.log(req.body);
    var result = manager.registerUser(req.body.InstanceID, req.body.UserName);

    if(result === -1){
        res.status(401).json({"error":"Instance not found with specified ID"});
    }
    res.json({"UserID":result});
});

module.exports = router;