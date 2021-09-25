const {Bank} = require("../../model");

const deleteBank = async (req, res, next) => {
    try {
        const {bankId} = req.params;

        const bank = await Bank.findById(bankId);
        if (!bank){
            return res.status(400).json({
                status: "Error",
                code: 400,
                message: "We can't find bank you want to delete, maybe it's already deleted",
            })
        }

        await Bank.findByIdAndDelete(bankId);

        return res.json({
            status: "Success",
            code: 200,
            message: "Bank was successfully deleted",
        })
    } catch (error) {
        next(error)
    }

}

module.exports = deleteBank;