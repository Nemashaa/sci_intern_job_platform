const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Employers extends Model {

    static associate(models) {
      Employers.belongsTo(models.Users, { foreignKey: 'userID' });
      Employers.belongsTo(models.Addresses, { foreignKey: 'addressID'});
      Employers.hasMany(models.JobPosts, { foreignKey: 'employerID'});
    }
  }
  Employers.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    jobTitle:{
      type: DataTypes.STRING,
      allowNull: false
    },
    companyName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    companyDescription:{
      type: DataTypes.STRING,
      allowNull: false
    },
    verificationStatus:{
      type: DataTypes.ENUM('verified', 'pending', 'blocked'),
      allowNull: false,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    modelName: 'Employers',
    timestamps: true,
  });

  return Employers;
};
