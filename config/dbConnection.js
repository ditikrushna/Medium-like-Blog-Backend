const { Sequelize } = require('sequelize')
const Utils = require('../utils/index');
const { httpsConstants } = require('../common/constants');

const sequelize = new Sequelize({
    database: 'realworlddb',
    username: 'realworlduser',
    password: 'realworldpass',
    dialect: 'mysql'
})

const checkConnection = async () => {
    try {
        await sequelize.authenticate();
        Utils.printLog('checkConnection', "Connection has been established successfully", {}, 'Ditikrushna Giri', httpsConstants.LOG_LEVEL_TYPE.INFO);
    } catch (error) {
        Utils.printLog('checkConnection', "Unable to connect to the database:", error, 'Ditikrushna Giri', httpsConstants.LOG_LEVEL_TYPE.ERROR);
    }
}

checkConnection()

module.exports = sequelize