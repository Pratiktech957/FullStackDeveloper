const Joi = require("joi");

const orderSchema = Joi.object({
    userId: Joi.string()
        .required(),

    products: Joi.array()
        .items(
            Joi.object({
                productId: Joi.string().required(),
                quantity: Joi.number()
                    .integer()
                    .min(1)
                    .required()
            })
        )
        .min(1)
        .required(),

    totalAmount: Joi.number()
        .min(0)
        .required(),

    shippingAddress: Joi.object({
        street: Joi.string().required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        pincode: Joi.string()
            .pattern(/^[0-9]{6}$/)
            .required()
    }).required()
});

const validateOrder = (req, res, next) => {
    const { error } = orderSchema.validate(req.body, {
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

module.exports = validateOrder;