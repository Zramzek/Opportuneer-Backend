'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  course.init({
    courseName: DataTypes.STRING,
    courseImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'course',
  });
  return course;
};