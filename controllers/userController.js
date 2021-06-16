const Utils = require('../utils/index');

testAPI = async (request, response) => {
    Utils.response(response, {}, "This is test API!", true, 200);
}

createUser = async (request, response) => {
    Utils.response(response, {}, "User Created Sucessfully!", true, 200)
}

loginUser = async (request, response) => {
    Utils.response(response, {}, "Login Sucessfull!", true, 200);
}

getUserByEmail = async (request, response) => {
    Utils.response(response, {}, "User Found!", true, 200)
}

updateUserDetails = async (request, response) => {
    Utils.response(response, {}, "Updated Sucessfully!", true, 200);
}


module.exports = {
    createUser,
    testAPI,
    loginUser,
    getUserByEmail,
    updateUserDetails
}