module.exports = function(application) {
    application.get('/classes', function(req, res){
        application.app.controllers.classesController.show(application, req, res);
    });

};