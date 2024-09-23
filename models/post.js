const { DataTypes } = require('sequelize');
const Post = sequelize.define('Post', {
  idPost: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'idUsers'
    }
  }
}, {
  tableName: 'Posts',
});

module.exports = Post;
