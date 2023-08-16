const userCtrl = {}

const User = require('../models/User');

userCtrl.getAllUser = async(req, res)=>{
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async(req, res) =>{
    const user = req.body;
    const newUser = new User();
    newUser.nameUser = user.nameUser;
    newUser.emailUser = user.emailUser;
    await newUser.save()
    res.send({message: 'Usuario creado', user: newUser})
}

userCtrl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id)
    res.send(user)
}

userCtrl.updateUser = async(req, res) => {
    const user = req.body;
    const userUpdate = { nameUser:user.nameUser, emailUser: user.emailUser};
    userUpdate.nameUser = user.nameUser;
    userUpdate.emailUser = user.emailUser;
    await User.findByIdAndUpdate(req.params.id, userUpdate)
    res.send({message: 'Actualizacion de Usuario Realizada'})
}

userCtrl.getUserVerificate = async(req, res) => {
    const emailUser = req.params.id;
    const users = await User.find();
    let userSearch = User();
    let verificate = false;

    users.forEach((user)=>{
        if(user.emailUser == emailUser){
            verificate = true;
            userSearch = user;
        }
    })

    res.send({verificate: verificate, user: userSearch})
}


module.exports = userCtrl;