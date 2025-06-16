const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Admin extends Model {

    static associate(models) {
      Admin.belongsTo(models.Users, { foreignKey: 'userID' });
    }
  }
  Admin.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    contactNumber:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Admin',
    timestamps: true,
  });

  return Admin;
};
