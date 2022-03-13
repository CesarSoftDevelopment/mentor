module.exports.show = function(application, req, res) {

    	// if user pass by authorized flow
	if(req.session.authorized !== true) {
		// send the message that user needs to make login	
		res.send('User needs to make login');
		return;
	}

    let user = req.session.user;
    let sex = req.session.sex;

    let connection = application.config.dbConnection;
    let MattersDAO = new application.app.models.MattersDAO(connection);

    MattersDAO.startView(res, user, sex, {validation: {}});
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