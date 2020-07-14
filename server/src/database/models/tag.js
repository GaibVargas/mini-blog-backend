'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
      this.belongsToMany(models.Post, { foreignKey: 'id_tag', through: 'post-tag', as: 'posts' });
    }
  };

  Tag.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });

  return Tag;
};