module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    pass: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
  }, {
    tableName: 'users',
  });

  return User;
};
