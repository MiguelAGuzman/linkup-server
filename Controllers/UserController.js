import UserModel from "../Models/userModel";

//get a User
export const getUser = async(req, res) => {
    const id = req.params.id;

    try {
        
    } catch (error) {
        
    }
    const user = await UserModel.findById(id);
}