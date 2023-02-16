'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Allcodes extends Model {
    static associate(models) {}
  }
  Allcodes.init(
    {
      key: DataTypes.STRING,
      type: DataTypes.STRING,
      value_en: DataTypes.STRING,
      Value_vi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Allcodes',
    }
  )
  return Allcodes
}
