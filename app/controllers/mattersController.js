module.exports.show = function(application, req, res) {
    res.render('matters', {validation: {}, datasForm: {}});
};

module.exports.matters = function(application, req, res) {
    res.render('form');
}

module.exports.leave = function(application, req, res) {
    req.session.destroy(function(err, result){
        res.render('index', {validation: {}});
    });
};

module.exports.registerMATTERS = function(application, req, res) {
    let datasForm = req.body;

    req.assert('matter', 'Matter name is not empty').notEmpty();
    req.assert('professor', 'Professor name is not empty').notEmpty();
    req.assert('semester', 'Semester is not empty').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        res.render('matters', {validation: errors, datasForm: datasForm});
        return;
    }

    let connection = application.config.dbConnection;
    let MattersDAO = new application.app.models.MattersDAO(connection);
    MattersDAO.insertMatters(datasForm)
    res.redirect('matters');
};