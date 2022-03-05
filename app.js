let app = require('./config/server');

app.listen(3001, function(){
    console.log('SERVER RUNNING');
    console.log('http://localhost:3001');
});