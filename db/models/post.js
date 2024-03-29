// db/models/post.js
import { DataTypes } from 'sequelize';

const Post = (sequelize) => {
  return sequelize.define('Post', {
    // Assuming your posts have an ID, title, content, and optional authorId if there are users
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Uncomment or modify if you have an author relation
    // authorId: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'Users', // 'Users' is a table name
    //     key: 'id',
    //   },
    // },
  }, {
    // Model options
    timestamps: true, // If you want Sequelize to automatically manage createdAt and updatedAt
  });
};

export default Post;
