const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Recommendations extends Model {

    static associate(models) {
      Recommendations.belongsTo(models.Lecturers, { foreignKey: 'lecturerID' });
      Recommendations.belongsTo(models.Students, { foreignKey: 'studentID' });
    }
  }
  Recommendations.init({
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    status:{
      type: DataTypes.ENUM('requested', 'complete'),
      allowNull: false,
      defaultValue: "requested"
    }
  }, {
    sequelize,
    modelName: 'Recommendations',
    timestamps: true,
  });

  return Recommendations;
};
