require('dotenv').config()
const userModel = require('../models/user');
const jwt = require('jsonwebtoken');


exports.GetUsers = async function (req, res) {
    try {
        const users = await userModel.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.AddUser = async function (req, res) {
    const user = new userModel({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.json({ message: err.message });
    }
}

exports.Login = async function (req, res) {
    const email = req.body.email;
    const password = req.body.password
    try {
        let user = userModel.findOne({ email: email, password: password });
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ accessToken });
    } catch (err) {
        res.json({ message: err.message })
    }
}