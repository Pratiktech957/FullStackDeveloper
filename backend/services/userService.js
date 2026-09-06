const User = require("../models/User");

const createUser = async (userData) => {
    const user = await User.create(userData);

    return user;
};

const getUsers = async () => {
    const users = await User.find();

    return users;
};

module.exports = {
    createUser,
    getUsers
};