module.exports = function(sequelize, DataTypes) {
    var UserHistory = sequelize.define("UserHistory", {
      // The email cannot be null, and must be a proper email before creation
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      saved: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    });

    return UserHistory;
  };