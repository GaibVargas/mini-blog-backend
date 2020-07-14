'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'id_author' });
      this.belongsToMany(models.Tag, { foreignKey: 'id_post', through: 'post-tag', as: 'tags' });
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