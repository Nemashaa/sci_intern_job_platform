const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Addresses extends Model {

    static associate(models) {
      Addresses.hasOne(models.Employers, { foreignKey: 'addressID' });
    }
  }
  Addresses.init({
    contactNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    addressNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    street:{
      type: DataTypes.STRING,
      allowNull: false
    },
    city:{
      type: DataTypes.STRING,
      allowNull: false
    },
    province:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Addresses',
    timestamps: true,
  });

  return Addresses;
};
