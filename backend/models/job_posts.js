const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class JobPosts extends Model {

    static associate(models) {
      JobPosts.belongsTo(models.Employers, { foreignKey: 'employerID' });
      JobPosts.hasMany(models.Applications, { foreignKey: 'jobPostID' });
    }
  }
  JobPosts.init({
    deadline: {
      type: DataTypes.DATE
    },
    jobDescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobRole: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobPostImage: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'JobPosts',
    timestamps: true,
  });

  return JobPosts;
};
