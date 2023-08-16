const activityCtrl = {}

const Activity = require('../models/Activity')

activityCtrl.getActivitys = async (req, res) => {
    const activitys = await Activity.find();
    res.json(activitys)
}

activityCtrl.createActivity = async (req, res) => {
    const activity = req.body;
    const newActivity = new Activity();
    newActivity.nameActivity = activity.nameActivity;
    newActivity.descActivity = activity.descActivity;
    newActivity.stateActivity = activity.stateActivity;
    newActivity.userAsignado = activity.userAsignado;
    newActivity.setTime = activity.setTime;
    await newActivity.save()
    res.send({message: 'Actividad creada', activity: newActivity})
}

activityCtrl.getActivity = async (req, res) => {    
    const activity = await Activity.findById(req.params.id)
    res.send(activity)
}

activityCtrl.updateActivity = async (req, res) => {
    await Activity.findByIdAndUpdate(req.params.id, req.body)
    res.send({message: 'Actualizacion realizada'})
}

activityCtrl.deleteActivity = async (req, res) => {
    await Activity.findByIdAndDelete(req.params.id)
    res.json({status: "Eliminado"})
}

activityCtrl.updateState = async (req, res) => {
    const activity = req.body;
    const activityUpdate = {
        nameActivity: activity.nameActivity, 
        descActivity: activity.descActivity, 
        stateActivity: activity.stateActivity,
        userAsignado: activity.userAsignado,
        setTime: activity.setTime
    }
    await Activity.findByIdAndUpdate(req.params.id, activityUpdate)
    res.send({message: 'Actualizacion de Estado Realizada'})
}

activityCtrl.asignateUser = async (req,res) => {
    await Activity.findByIdAndUpdate(req.params.id,req.body)
    res.send({message: 'Usuario Asignado correctamente'})
}   

module.exports = activityCtrl;