let alert = require('alert');

module.exports.users = function(a, rq, re) {
    re.render('users', {validation: {}, datasForm: {}});
}

module.exports.registerUSERS = function(application, req, res) {

    let datasForm = req.body;
    
    req.assert('name', 'Name is not empty').notEmpty();
    req.assert('user', 'User is not empty').notEmpty();
    req.assert('password', 'Password is not empty').notEmpty();
    req.assert('email', 'Email is not empty').notEmpty();
    req.assert('sex', 'Sex is not empty').notEmpty();

    let errors = req.validationErrors();

    if(errors) {
        res.render('users', {validation: errors, datasForm: datasForm});
        return;
    };

    let connection = application.config.dbConnection;
    let UsersDAO = new application.app.models.UsersDAO(connection);

    UsersDAO.insertUsers(datasForm);
    alert('Usuário criado com sucesso');
    res.redirect('matters');
};



