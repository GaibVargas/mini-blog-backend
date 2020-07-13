'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User);
      this.belongsToMany(models.Tag, { foreignKey: 'idPost', through: 'post-tag', as: 'tags' });
    }
  };

  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};