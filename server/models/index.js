import { Sequelize } from "sequelize";
import db from "../database/db.js";
import User from "./user.js";
import Vehicle from "./vehicle.js";
import Employee from "./employee.js";
import Tracking from "./tracking.js";

const models = {
    User: User,
    Vehicle: Vehicle,
    Employee: Employee,
    Tracking: Tracking,
}

Object.keys(models).forEach(key => {
    if ('associte' in models[key]) {
        models[key].associte(models)
    }
})

export default models;