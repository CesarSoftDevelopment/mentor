

function MattersDAO(connection) {
    this._connection = connection();
};

MattersDAO.prototype.insertMatters = function(dataM) {
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("matters", function(err, collection){
            collection.insert(dataM);
            mongoclient.close();
        });
    });
};

MattersDAO.prototype.startView = function(res, user, sex, validation) {
    this._connection.open(function(err, mongoclient){
        mongoclient.collection("users", function(err, collection){
            collection.find({user: user}).toArray(function(err, result){
                res.render('matters', {img_sex: sex, person: result[0], validation: validation});
            });
            mongoclient.close();
        });
    });
};



module.exports = function() {
    return MattersDAO;
}