const {
    saveUser,
    getUsers,
    login
} = require('./services');

const getUsersController = (req, res) => {
    return getUsers()
        .then(resp => {
            return res.json({ data: resp }).status(200)
        })
        .catch(err => {
            return res.status(404).json({ message: "something happen" });
        });
};

const postUserController = async (req, res) => {
    let requestBody = req.body;
    let { status } = await saveUser(requestBody);
    if(status){
        return res.json({ message: "data successfully added!" });
    }
    return res.status(400).json({ message: "something happen!" })
};

const postUserLoginController = async (req, res) => {
    let data = req.body;
    let response = await login(data.username, data.password);
    if(response[0]){
        let user = response[0];
        return res.json({ user_id: user.user_id })
    }
    return res.status(404).json({ message: "invalid username or password" })
}


module.exports = { getUsersController, postUserController, postUserLoginController };