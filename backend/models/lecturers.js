const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Lecturers extends Model {

    static associate(models) {
      Lecturers.belongsTo(models.Users, { foreignKey: 'userID' });
      Lecturers.hasMany(models.Recommendations, { foreignKey: 'lecturerID' });
    }
  }
  Lecturers.init({
    contactNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    education:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    department:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Lecturers',
    timestamps: true,
  });

  return Lecturers;
};
