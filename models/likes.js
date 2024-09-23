const { DataTypes } = require('sequelize');
const Like = sequelize.define('Like', {
  idLike: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Users',
      key: 'idUsers'
    }
  },
  postId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Posts',
      key: 'idPost'
    }
  }
}, {
  tableName: 'Likes',
});

module.exports = Like;
