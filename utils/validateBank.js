const {bankScheme} = require("../model");

const validateBank = (body) => {
    const {error} = bankScheme.validate(body);

    if (error){
        const {message} = error;
        return {
            status: "Error",
            code: 400,
            message,
        };
    };

    return null;
};

module.exports = validateBank;
