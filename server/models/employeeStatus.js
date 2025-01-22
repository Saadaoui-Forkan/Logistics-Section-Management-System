import { Sequelize } from "sequelize";
import db from "../database/db.js";

const EmployeeStatus = db.define("EmployeeStatus", {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    status: {
        type: Sequelize.ENUM("Active", "Paid Leave", "Unpaid Leave", "Absent"),
        defaultValue: "Active",
        allowNull: false,
    },
    from: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    },
    to: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    notes: {
        type: Sequelize.STRING,
    }  
})

EmployeeStatus.associte = (models) => {
    EmployeeStatus.belongsTo(models.Employee)
}

export default EmployeeStatus;