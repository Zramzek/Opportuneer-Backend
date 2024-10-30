'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subcoursedone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subcoursedone.init({
    idUser: DataTypes.INTEGER,
    idSubCourse: DataTypes.INTEGER,
    completedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'subcoursedone',
  });
  return subcoursedone;
};