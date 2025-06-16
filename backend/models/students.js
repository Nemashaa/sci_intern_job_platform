const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Students extends Model {

    static associate(models) {
      Students.belongsTo(models.Users, { foreignKey: 'userID' });
      Students.hasMany(models.Applications, { foreignKey: 'studentID'});
      Students.hasMany(models.Recommendations, { foreignKey: 'studentID'});
    }
  }
  Students.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    majoringSubjects: {
      type: DataTypes.STRING,
      allowNull: false
    },
    degreeProgram: {
      type: DataTypes.STRING,
      allowNull: false
    },
    yearOfStudy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sNumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Students',
    timestamps: true,
  });

  return Students;
};
