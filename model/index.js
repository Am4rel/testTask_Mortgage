const mongoose = require("mongoose");
const Joi = require("joi");

const bank = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Set a name for your bank'],
        unique: [true, 'Bank name should be unique'],
      },
    interestRate: {
      type: Number,
      min: 0,
      max: 1,
      required: [true, 'Set an interest rate for the bank'],
    },
    maximumLoan: {
      type: Number,
      min: 0,
      max: 100000000,
      required: [true, 'Set a sum of loan bank can borrow'],
    },
    minimumDownPayment: {
        type: Number,
        min: 0,
        max: 1,
        required: [true, 'Set an upfront payment sum'],
    },
    loanTerm: {
        type: Number,
        min: 0,
        max: 100,
        required: [true, 'Set a term bank gives to return the debt'],
    },
    calculationHistory: {
      type: Array,
      default: [],
    }
}, {versionKey: false, timestamps: true});

const Bank = mongoose.model("Bank", bank);

const bankScheme = Joi.object({
  name: Joi.string().required(),
  interestRate: Joi.number().min(0).max(1).required(),
  maximumLoan: Joi.number().min(0).max(100000000).required(),
  minimumDownPayment: Joi.number().min(0).max(1).required(),
  loanTerm: Joi.number().min(0).max(100).required(),
  calculationHistory: Joi.array([
    Joi.object({
      initialLoan:  Joi.number(),
      downPayment: Joi.number(),
      monthlyPayment: Joi.number(),
      date: Joi.date(),
    })
  ]),
});

module.exports = {
  Bank,
  bankScheme,
};