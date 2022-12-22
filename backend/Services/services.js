const userModels = require('../Model/employees')

exports.createUser = async (users) => {
    return await userModels.create(users);
};

exports.getAll = async () => {
    return await userModels.find({});
};

exports.getUserById = async (id) => {
    return await userModels.findById(id);
};


exports.updateUserById = async (id, users) => {
    return await userModels.findByIdAndUpdate(id, users);
};


exports.deleteUser = async (id) => {
    return await userModels.findByIdAndDelete(id);
}; 