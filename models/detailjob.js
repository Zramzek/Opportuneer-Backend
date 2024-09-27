'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class detailjob extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  detailjob.init({
    idJob: DataTypes.INTEGER,
    waktujob: DataTypes.STRING,
    lokasi: DataTypes.STRING,
    jenislokasi: DataTypes.STRING,
    jenisjob: DataTypes.STRING,
    requirement: DataTypes.STRING,
    responsibility: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'detailjob',
  });
  return detailjob;
};