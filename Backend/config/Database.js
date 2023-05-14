import { Sequelize } from "sequelize";

const db = new Sequelize ('crud3_db', 'root','', {
    host: 'localhost',
    dialect:'mysql'
});

export default db;