//==========================================================================================
//require dependancies
//==========================================================================================
var orm = require("../config/orm.js");

//==========================================================================================
// The code that will call the ORM functions using burger specific input for the ORM.
//==========================================================================================
var burger = {
    //READ
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    //CREATE
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    //UPDATE
    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    //DELETE
    delete: function(condition, cb) {
        orm.delete("burgers", condition, function(res) {
            cb(res);
        });
    }
};

//==========================================================================================
// Export at the end of the burger.js file.
//==========================================================================================
module.exports = burger;