const Joi = require("joi");

const userSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    age: Joi.number()
        .integer()
        .min(1)
        .max(120)
        .required()
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, {
        abortEarly: false
    });

    if (error) {
        return res.status(400).json({
            message: "Validation failed",
            errors: error.details.map((detail) => detail.message)
        });
    }

    next();
};

module.exports = validateUser;