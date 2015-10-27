var config  = {};

config.db   = {};
config.web  = {};

config.web.port     = process.env.PORT || 1337;
config.db.host      = process.env.DB_PORT_3306_TCP_ADDR || 'pakilow.eu';
config.db.user      = 'root';
config.db.password  = 'test';
config.db.database  = 'auth';

module.exports  = config;