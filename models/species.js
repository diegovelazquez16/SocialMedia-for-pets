module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('specie', {
      idSpecie: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nameSpecie: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      
    }, {
      tableName: 'pets',
    });
  
    return User;
  };
  