import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

//get a User
export const getUser = async(req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if(user) {
            const {password, ...otherDetails} = user._doc

            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error);
    }
    // const user = await UserModel.findById(id);
}

//update a user
export const updateUser = async(req, res) => {
    const id = req.params.id
    const {currentUser, currentUserAdminStatus, password} = req.body

    if(id === currentUserId || currentUserAdminStatus) {
        try {

            if(password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt)
            }


            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})

            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    } else {
        res.status(403).json("Access denied, you can only update your own profile.")
    }
}


//delete user
export const deleteUser = async(req, res) => {
    const id = req.params.id

    const {currentUserId, currentUserAdminStatus} = req.body

    if (currentUserId === id || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("User deleted successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access denied, you can only delete your own profile.")
    }
}


//Follow a user
export const followUser = async(req, res) => {
    const id = req.params.id

    const {currentUserId} = req.body

    if (currentUserId === id) {
        res.status(403).json("Action not allowed")
    } else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if(!followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$push : {followers: currentUserId}})
                await followingUser.updateOne({$push : {followers: is}})
                res.status(200).json("User followed!")
            } else {
                res.status(403).json("User is already followed by you.")
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
}


//unFollow a user
export const UnFollowUser = async(req, res) => {
    const id = req.params.id

    const {currentUserId} = req.body

    if (currentUserId === id) {
        res.status(403).json("Action not allowed")
    } else {
        try {
            const followUser = await UserModel.findById(id)
            const followingUser = await UserModel.findById(currentUserId)

            if(followUser.followers.includes(currentUserId)){
                await followUser.updateOne({$pull : {followers: currentUserId}})
                await followingUser.updateOne({$pull : {followers: is}})
                res.status(200).json("User unfollowed!")
            } else {
                res.status(403).json("User is not followed by you.")
            }

        } catch (error) {
            res.status(500).json(error);
        }
    }
}