var config  = {};

config.db   = {};
config.web  = {};

config.web.port = process.env.PORT || 8080;
config.db.url   = 'postgres://pakilow.eu:5432/auth';

module.exports  = config;