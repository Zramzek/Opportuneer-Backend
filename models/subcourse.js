'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subcourse extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  subcourse.init({
    idCourse: DataTypes.INTEGER,
    subCourseName: DataTypes.STRING,
    description: DataTypes.STRING,
    subCourseImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subcourse',
  });
  return subcourse;
};