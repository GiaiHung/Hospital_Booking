'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    static associate(models) {}
  }
  Bookings.init(
    {
      statusId: DataTypes.STRING,
      patientId: DataTypes.INTEGER,
      doctorId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      timeType: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Bookings',
    }
  )
  return Bookings
}
