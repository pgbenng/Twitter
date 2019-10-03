'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, {foreignKey: 'user_id'})
    User.hasMany(models.Like, {foreignKey: 'user_id'})
    User.belongsToMany(User, {as: "followers", through: "Follow", foreignKey: 'influencer_id', otherKey: 'follower_id'})
    User.belongsToMany(User, {as: "influencers", through: "Follow", foreignKey: 'follower_id', otherKey: 'influencer_id'})
  };
  return User;
};