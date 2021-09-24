const {Bank, bankScheme} = require("../../model");
const {validateBank} = require("../../utils")


const editBank = async (req, res, next) => {
    try {
        const {body, params: {bankId}} = req;

        const validation = validateBank(body);

        if (validation){
            return res.status(400).json(validation)
        };

        const bank = await Bank.findById(bankId);
        if (!bank){
            return res.status(400).json({
                status: "Error",
                code: 400,
                message: "We can't find bank you want to delete, maybe it's already deleted",
            })
        }

        await Bank.findByIdAndUpdate(bankId, body);

        return res.json({
            status: "Success",
            code: 200,
            message: `Bank ${body.name} was successfully updated`,
        })
    } catch (error) {
        next(error)
    }

}

module.exports = editBank;