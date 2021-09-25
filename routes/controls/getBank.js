const {Bank} = require("../../model");

const getBank = async (req, res, next) => {
    try {
        const {bankId} = req.params;
        const banks = await Bank.findById(bankId);

        if (!banks){
            return res.status(400).json({
                status: "Error",
                code: 400,
                message: "There's no bank with ID you provided",
            });
        }

        return res.json({
            status: "Success",
            code: 200,
            data: banks,
        });
    } catch (error) {
        next(error);
    };
};

module.exports = getBank;