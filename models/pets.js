const { DataTypes } = require('sequelize');
const Pet = sequelize.define('Pet', {
  idPet: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  type: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  ownerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'idUsers'
    }
  }
}, {
  tableName: 'Pets',
});

module.exports = Pet;
