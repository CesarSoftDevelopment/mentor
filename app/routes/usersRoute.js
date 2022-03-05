module.exports = function(application) {
    application.get('/users', function(req, res){
        application.app.controllers.registerController.users(application, req, res);
    });

    application.post('/usersrg', function(req, res){
        application.app.controllers.registerController.registerUSERS(application, req, res);
    });
};