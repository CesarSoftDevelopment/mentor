module.exports = function(application) {
    application.get('/list_classes', function(req, res){
        application.app.controllers.listClassesController.show(application, req, res);
    });

};