import DataTypes from 'sequelize'
import { sqlConnection } from '../utills/sequelize.utills.js'

const User = sqlConnection.define('user', {
    username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }}
)

export {User}
