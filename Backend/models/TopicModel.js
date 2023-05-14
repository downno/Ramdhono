import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Topic = db.define('topics',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    nim: DataTypes.STRING,
    nohp: DataTypes.STRING,
    topic:DataTypes.STRING
},{
    freezeTableName:true
});

export default Topic;

(async()=>{
    await db.sync();
})();