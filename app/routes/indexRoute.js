module.exports = function(application) {
    application.get('/', function(req, res){
        application.app.controllers.indexController.show(application, req, res);
    });

    application.post('/authenticate', function(req, res){
        application.app.controllers.indexController.authenticate(application, req, res);
    });

    
	application.get('/identify', function(req, res){
		application.app.controllers.indexController.identify(application, req, res);
	});

};