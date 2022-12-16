import UserModel from "../Models/userModel";

//get a User
export const getUser = async(req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if(user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).json(error);
    }
    const user = await UserModel.findById(id);
}