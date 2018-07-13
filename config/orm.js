var connection = require("./connection.js");


// add question marks
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  function objToSql(ob) {
    
    var arr = [];
  
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
  
    return arr.toString();
}

var orm = {
    // select all
selectAll: function(tableinput, cb){
    var queryString = 'SELECT * FROM' + tableInput + ';';
    connection.query(queryString, function(err, result){
        if (err){
            throw err;
        }
        cb(result);
    })
},


// make one
insertOne: function(table, cols, vals, cb){
    var queryString = 'INSERT INTO' + table;
    queryString += '(';
    queryString += cols.toString();
    queryString += ')';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ')';
    
    console.log(queryString);

    connection.query(queryString, vals, function(err, result){
        if (err){
            throw err;
        }

        cb(result);
    })
},

// add

update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};


module.exports = orm;

