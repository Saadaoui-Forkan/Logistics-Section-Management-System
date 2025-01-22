import { Sequelize } from "sequelize";
import db from "../database/db.js";
import models from "./index.js";

const Employee = db.define("Employee", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  full_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  unique_identifier: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  phone_number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  date_of_birth: {
    type: Sequelize.DATE,
  },
  hire_date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  position: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  department: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comments: {
    type: Sequelize.STRING,
  },
});

Employee.associte = (models) => {
  Employee.hasMany(models.Vehicle);
  Employee.belongsTo(models.User);
  Employee.hasMany(models.EmployeeStatus)
};

export default Employee;
