'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jobsearch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jobsearch.init({
    idCourse: DataTypes.INTEGER,
    idAdmin: DataTypes.INTEGER,
    namaperusahaan: DataTypes.STRING,
    jobname: DataTypes.STRING,
    waktujob: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    jenislokasi: DataTypes.STRING,
    requirement: DataTypes.STRING,
    responsibility: DataTypes.STRING,
    available: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'jobsearch',
  });
  return jobsearch;
};