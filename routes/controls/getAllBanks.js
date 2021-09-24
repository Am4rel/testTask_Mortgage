const {Bank} = require("../../model");

const getAllBanks = async (_, res, next) => {
    try {
        const banks = await Bank.find({});

        return res.json({
            status: "Success",
            code: 200,
            data: banks,
        });
    } catch (error) {
        next(error);
    };
};

module.exports = getAllBanks;