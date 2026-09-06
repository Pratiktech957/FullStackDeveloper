const {
    createUser: createUserService,
    getUsers: getUsersService
} = require("../services/userService");

const createUser = async (req, res, next) => {
    try {
        const user = await createUserService(req.body);

        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const users = await getUsersService();

        res.json(users);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    createUser,
    getUsers
};