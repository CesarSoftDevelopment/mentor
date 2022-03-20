
let alert = require('alert');

function UsersDAO(connectionWithDatabase) {
    this._connection = connectionWithDatabase();
    
};

UsersDAO.prototype.insertUsers = function(user) {
    this._connection.open(function(err, mongoclient) {
        mongoclient.collection("users", function(err, collection){
            collection.insert(user);
            mongoclient.close();
        });
    });
};


// authenticate user
UsersDAO.prototype.authenticate = function(user, req, res) {
    // open connection with database
    this._connection.open(function(err, success){
        // catch the users => collection
        success.collection('users', function(err, collection){
            // find the user in database based with data come form
            collection.find(user).toArray(function(err, result){
                // if exist document equal the login datas
                if(result[0] != undefined) {
                    // create section variable, the authorized variable will be created if there are valid
					// datas on the server
                    req.session.authorized = true;

                    req.session.user = result[0].user;
                    req.session.sex = result[0].sex;
                    req.session.name = result[0].name;
                };

                if(req.session.authorized) {
                    res.redirect("matters");
                }else {
                    res.render("index", {validation: {}});
                    alert("Usuário ou senha inválidos");
                }
            });
            success.close();
        });
    });
};


module.exports = function() {
    return UsersDAO;
};