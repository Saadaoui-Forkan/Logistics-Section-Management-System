import { Sequelize } from "sequelize";
import db from "../database/db.js";

const User = db.define('User', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    unique_identifier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
    },
    role: {
        type: Sequelize.ENUM('Admin', 'Fleet Manager', 'HR Administrator'),
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

User.associte = models => {
    User.hasMany(models.Employee)
}

export default User;
