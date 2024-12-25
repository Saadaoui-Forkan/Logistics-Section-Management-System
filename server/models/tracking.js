import { Sequelize } from "sequelize";
import db from "../database/db.js";


const Tracking = db.define('Tracking', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    latitude: {
        type: Sequelize.FLOAT
    },
    longitude: {
        type: Sequelize.FLOAT
    },
    distance: {
        type: Sequelize.FLOAT
    },
    comment: {
        type: Sequelize.STRING
    },
    
})

Tracking.associte = models => {
    Tracking.belongsTo(models.Vehicle)
}

export default Tracking;
