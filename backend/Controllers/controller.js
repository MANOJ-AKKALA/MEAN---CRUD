
const userService = require('../Services/services')

class userController {

createUser = async (req, res) => {
    try {
        console.log('3 Creating new USER -inside controller')
        
        const newUser = await userService.createUser(req.body);
        res.json({ data: newUser, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

 getAll = async (req, res) => {
    try {
        console.log('1 getting all USERS -inside controller')
        const allData = await userService.getAll();
        
        res.json({ data: allData, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }

};
 
getUserById = async (req, res) => {
    try {
        console.log('2 get USER by id -inside controller')
        const eachUser = await userService.getUserById(req.params.id);
        res.json({ data: eachUser, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

};


updateUserById = async (req, res) => {
    try {
        console.log('4 modifying USER by ID -inside controller')
        const modifiedUser = await userService.updateUserById(req.params.id, req.body);
        res.json({ data: modifiedUser, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

deleteingUser = async (req, res) => {
    try {
        console.log('5 deleting particular USER')
        const erasing = await userService.deleteUser(req.params.id);
        res.json({ data: erasing, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}; 

}

module.exports = new userController()