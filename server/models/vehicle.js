import { Sequelize } from "sequelize";
import db from "../database/db.js";
import models from "./index.js";


const Vehicle = db.define('Vehicle', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    mark: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    plate_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    year: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    added_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    status_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    status_type: {
        type: Sequelize.STRING,
    },
    comments: {
        type: Sequelize.STRING,
    },
})

Vehicle.associte = models => {
    Vehicle.belongsTo(models.Employee)
    Vehicle.hasOne(models.Tracking)
}

export default Vehicle;