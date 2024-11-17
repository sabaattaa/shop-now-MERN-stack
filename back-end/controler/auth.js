import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { useDotenv } from "../configs.js";
// -------------------------------------
const { razkey } = useDotenv();

const users = [
    { name: "Saba Atta", email: "saba@gmail.com", role: "ADMIN", password: "admin" },
    { name: "Samra Bano", email: "samra@gmail.com", role: "USER", password: "user" },
];




export const Register = async (req, res) => {
    const { name, email, password } = req.body;
    const isUser = users.find(user => user.email === email);
    if (isUser) { return res.status(400).send({ message: 'User already exists' }); }


    try {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = { name: name, email: email, password: hashPassword };

        const token = jwt.sign(newUser, razkey, { expiresIn: `1h` });

        // here will db servises call 

        res.status(200).send({
            message: "Successfully Registered",
            name: req.body.name,
            email: req.body.email,
            token: token,
        });
    } catch (e) {
        console.log(e);
    }
};

export const Login = async (req, res) => {

    const { email, password } = req.body;

    const userExists = users.find((item, index) => item.email === email);
    if (!userExists) {
        return res.status(400).send({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userExists.password);




    // here will db servises call 

    res.status(200).send({
        message: "Successfully LogIn",
        name: userExists.name,
        email: userExists.email,
        role: userExists.role,
    });
};

export const ResetPassword = async (req, res) => {

    const { email, password, newPassword } = req.body;

    const userExists = users.find((item, index) => item.email === email);
    if (!userExists) {
        return res.status(400).send({ message: 'User not found' });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userExists.password);




    // here will db servises call 

    res.status(200).send({
        message: "Successfully LogIn",
        name: userExists.name,
        email: userExists.email,
        role: userExists.role,
    });
};