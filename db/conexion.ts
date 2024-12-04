import { Sequelize } from "sequelize";

const db = new Sequelize('sigcr_v', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db;