import UserModel from "../model/user-modal.js";

export const addUser = async(request, response) => {
    const user = request.body;
    const userModel = new UserModel(user)
    console.log("user Controller", user)
    try 
    {
        await userModel.save();
        response.status(200).json(userModel)
    }
    catch(error)
    {
        response.status(401).json(error)
    }
}

export const getUsers = async(request, response) => {
    try 
    {
        const users = await UserModel.find({});
        response.status(200).json(users)
    }
    catch(error)
    {
        response.status(401).json(error)
    }
}

export const getUser = async(request, response) => {
    // console.log(request.params.id);
    const id = request.params.id;
    try 
    {
        const user = await UserModel.find({ id: request.params.id });
        // const user = await UserModel.findById(request.params.id);
        response.status(200).json(user)
    }
    catch(error)
    {
        response.status(401).json(error)
    }
}

export const editUser = async(request, response) => {
    const id = request.params.id;
    const user = request.body;
    const editUser = new UserModel(user)
    try 
    {
        // const updatedUser = await UserModel.findByIdAndUpdate(id, user, { new: true });
        await UserModel.updateOne({id: id}, editUser);
        response.status(200).json(editUser)
    }
    catch(error)
    {
        response.status(401).json(error)
    }
}

export const deleteUser = async(request, response) => {
    const id = request.params.id;
    try 
    {
        const deletedUser = await UserModel.deleteOne({id: id});
        response.status(200).json(deletedUser)
    }
    catch(error)
    {
        response.status(401).json(error)
    }
}