module.exports.show = function(application, req, res) {
    res.render('index', {validation: {}, datasForm: {}});
};

module.exports.authenticate = function(application, req, res) {
    // catch data from form
    let datasForm = req.body;

    // validation of datas
    req.assert('user', 'User can not be empty').notEmpty();
    req.assert('password', 'Password can not be empty').notEmpty();


    // put validation in errros variable
    let errors = req.validationErrors();


    // check if there is error
    if(errors) {
        res.render('index', {validation: errors});
        return;
    }

   
    // catch connection from database
    let connection = application.config.dbConnection;

    // instance the model users
    let UsersDAO = new application.app.models.UsersDAO(connection);

    UsersDAO.authenticate(datasForm, req, res);

}

module.exports.identify = function(application, req, res) {
    if(req.session.authorized === true) {
        res.redirect('matters');
        return;
    }
    
}