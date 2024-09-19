'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sosmed.init({
    idUser: DataTypes.INTEGER,
    namasosmed: DataTypes.STRING,
    linksosmed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'sosmed',
  });
  return sosmed;
};