const {Bank, bankScheme} = require("../../model");
const {validateBank} = require("../../utils")

const addBank = async (req, res, next) => {
    try {
        const {body} = req;

        const validation = validateBank(body);

        if (validation){
            return res.status(400).json(validation)
        };

        const result = await Bank.create(body);

        return res.status(201).json({
            status: "Success",
            code: 201,
            data: result,
        })
    } catch (error) {
        next(error)
    }

}

module.exports = addBank;