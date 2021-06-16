const APP = require('express');
const Utils = require('./utils');
const routes = require('./routes');
const { httpConstants } = require('./common/constants');

const app = new APP();
require('./config/express')(app);
global.printLog = Utils.printLog;

class Server {
    static listen() {
        app.listen(3001)
        Utils.printLog('listen', `Server Started on port ${3001}`, {}, 'Ditikrushna Giri', httpConstants.LOG_LEVEL_TYPE.INFO);
        routes(app);

    }
}
Server.listen();

