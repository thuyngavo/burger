//==========================================================================================
//requiring dependencies
//==========================================================================================
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//==========================================================================================
//READ: list all burgers 
//==========================================================================================
router.get("/", function (req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {burgers: data};
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//==========================================================================================
//CREATE: create new burgers and add to list 
//==========================================================================================
router.post("/api/burgers", function (req, res) {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

//==========================================================================================
//UPDATE: edit burger to devoured
//==========================================================================================
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    //console.log("condition", condition);

    burger.update(req.body, condition, function(result) {
        if (result.changedRows === 0) {
            //404 status if no rows were changed: id must not exist
            return res.status(404).end();
        } else {
            //200 status if okay to continue
            res.status(200).end();
        }
    });
});

//==========================================================================================
//DELETE: remove burger from list
//==========================================================================================
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result) {
        if (result.changedRows === 0) {
            //404 status if no rows were changed: id must not exist
            return res.status(404).end();
        } else { 
            //200 status if okay to continue
            res.status(200).end();
        } 
    });
});

//==========================================================================================
//export router to use in server.js
//==========================================================================================
module.exports = router;