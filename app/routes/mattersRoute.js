module.exports = function(application) {
    application.get('/matters', function(req, res){
        application.app.controllers.mattersController.show(application, req, res);
    });

    application.get('/leave', function(req, res){
		application.app.controllers.mattersController.leave(application, req, res);
	});

    application.get('/mattersform', function(req, res){
        application.app.controllers.mattersController.matters(application, req, res);
    });

};