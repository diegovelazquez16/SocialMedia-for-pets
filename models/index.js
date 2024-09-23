const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'social_media_pets', 
  'root',
  'v3lazqu3z', 
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.User = require('./user')(sequelize, Sequelize);

module.exports = db;
