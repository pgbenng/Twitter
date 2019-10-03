'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    user_id: DataTypes.INTEGER,
   
    caption: DataTypes.STRING,
    
    comment: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsTo(models.User, {foreignKey: "user_id"})
    Post.hasMany(models.Comment, {foreignKey: "comment_id"})
  };
  return Post;
};