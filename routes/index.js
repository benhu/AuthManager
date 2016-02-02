var mysql   = require('mysql'),
    crypto  = require('crypto'),
    config  = require('../config.js');

exports.index = function(req, res){
    res.sendStatus(401);
    //res.render('index');
};

exports.auth = function(req, res) {
    var password = crypto.createHash('sha512').update(req.body.password).digest('hex');
    
    var mysqlClient = mysql.createConnection(config.db);
    
    mysqlClient.connect();
    
    mysqlClient.query('SELECT * from user where username like ? and password like ?', [req.body.email, password], function(error, results, fields) {
        if(!error && results.length > 0) {
            res.sendStatus(200);
            return;
        } else {
            res.sendStatus(401);
            return;
        }
    });
};