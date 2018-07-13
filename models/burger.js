var orm = require('../config/orm.js');

var burgerChoice = {
    selectAll: function(cb){
        orm.all('burgers', cols, vals, function(res){
        cb(res);
      });
    },

    insertOne: function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },


    update: function(objColVals, condition, cb){
        orm.all("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }

};


module.exports = burgerChoice;