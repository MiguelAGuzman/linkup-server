import UserModel from "../Models/userModel";


//Registering a new User
export const registerUser = async(req, res) => {
    const {username, password, firstname, lastname} = req.body;

    const newUser = new UserModel({username, password, firstname, lastname})

    
}