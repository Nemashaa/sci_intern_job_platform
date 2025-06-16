const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Applications extends Model {

    static associate(models) {
      Applications.belongsTo(models.JobPosts, { foreignKey: 'jobPostID' });
      Applications.belongsTo(models.Students, { foreignKey: 'studentID' });
    }
  }
  Applications.init({
    date_applied: {
      type: DataTypes.DATE
    },
    resume: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Applications',
    timestamps: true,
  });

  return Applications;
};
