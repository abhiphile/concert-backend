import { DataTypes } from "sequelize";
import { sqlConnection } from "../utills/sequelize.utills.js";
import { User } from "./user.model.js"; // Import the User model

const Song = sqlConnection.define(
  "songs",
  {
    songid: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    songname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, // Reference the User model
        key: "userid"    // Foreign key refers to the `id` column in the User table
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: User, // Reference the User model
        key: "username" // Foreign key refers to the `username` column in the User table
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true // Adds `createdAt` and `updatedAt`
  }
);

export { Song };
