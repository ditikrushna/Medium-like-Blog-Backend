const morgan = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');

module.exports = function (app) {
    app.use(morgan(':method:url : response-time'));
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(compression(9));
    app.use(cors());   
}
