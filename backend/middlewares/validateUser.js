const validateUser = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).json({
            message: "Name and age are required"
        });
    }

    if (typeof name !== "string") {
        return res.status(400).json({
            message: "Name must be a string"
        });
    }

    if (typeof age !== "number" || age <= 0) {
        return res.status(400).json({
            message: "Age must be a valid positive number"
        });
    }

    next();
};

module.exports = validateUser;