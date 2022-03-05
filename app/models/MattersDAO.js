
let alert = require('alert');

function MattersDAO(connection) {
    this._connection = connection;
}

MattersDAO.prototype.insertMatters = function(dataM) {
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("matters", function(err, collection){
            collection.insert({
                user: user
            });
        });
    });
}