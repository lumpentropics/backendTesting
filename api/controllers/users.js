const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const {password, ...data} = user._doc;
        res.send(data);
    }
    catch (err) {
        res.send(err.message)
    }
}

const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await (await bcrypt.hash(req.body.password, salt)).toString();
        
        
        const newUser = await new User({
            ...req.body,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        const {password, ...data} = savedUser._doc;

        res.json({data})

    } catch (err) {
        res.status(400).send(err.message)
    }

}

const loginUser = async (req, res)=> {
    try {
        const user = await User.findOne({username: req.body.username})
        if (!user) throw "username not valid";
        isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) throw "password not valid";
        const userToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, "12345");
        res.header("Authorization", userToken);
        res.send(userToken); 
    }
    catch(err) {
        res.send(err)
    }
}



const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        await User.deleteOne(user);
        res.json(`user deleted`);
    }
    catch(err) {
        res.json(err.message)
    }
    
}

const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    const updatedUser = await User.updateOne(user, {
        $set: req.body
    });
    res.json(updatedUser);
}

module.exports = {getAllUsers, getUserById, registerUser, deleteUser, updateUser, loginUser }