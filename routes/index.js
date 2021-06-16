const usersRouter = require('./usersRouter');

module.exports = (app) => {
    /**
     * Route Defination
     */
    app.use('/users', usersRouter);
    app.get('/', (request, response) => response.send("Working Fine!"));
}