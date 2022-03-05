module.exports.show = function(application, req, res) {
    res.render('matters');
};

module.exports.matters = function(application, req, res) {
    res.render('form');
}

module.exports.leave = function(application, req, res) {
    req.session.destroy(function(err, result){
        res.render('index', {validation: {}});
    });
};