var config  = {};

config.db   = {};
config.web  = {};

config.web.port     = process.env.PORT || 1337;
config.db.host      = 'pakilow.eu';
config.db.user      = 'root';
config.db.password  = 'test';
config.db.database  = 'auth';

module.exports  = config;