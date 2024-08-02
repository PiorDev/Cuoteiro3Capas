const expenseModel = require('../models/expenseModel');

exports.addExpense = (req, res) => {
    const { description, amount, installments, startMonth } = req.body;
    const expenses = expenseModel.addExpense(description, amount, installments, startMonth);
    res.json(expenses);
};

exports.getExpenses = (req, res) => {
    const expenses = expenseModel.getExpenses();
    res.json(expenses);
};
