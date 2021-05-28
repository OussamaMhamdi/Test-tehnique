require('dotenv').config();
const commentaireModel = require('../models/commentaire');
const tacheModel = require('../models/tache');


exports.Get_Taches = async function (req, res) {

    try {
        const taches = await tacheModel.find()
        res.json(taches);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

exports.Add_Tache = async function (req, res) {

    try {
        const tache = new tacheModel(req.body);
        const newTache = tache.save();
        res.status(201).json(newTache);
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
}

exports.Get_comments = async function (req, res) {
    try {
        const comments = await commentaireModel.find();
        res.json(comments);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.Add_comment = async function (req, res) {
    console.log(req.body);
    try {
        const comment = new commentaireModel(req.body);
        const newComment = comment.save();
        res.json(newComment);
    } catch (err) {
        res.status(500).json({ message: message.err })
    }
}

exports.Add_Comment_to_Tache = async function (req, res) {
    try {
        const tacheId = req.body.id;
        const commentId = req.body.commentaire
        console.log(tacheId);
        console.log(commentId);
        const updateTache = await tacheModel.findByIdAndUpdate(
            {
                "_id": tacheId
            },
            {
                $addToSet: {
                    "commentaire": commentId
                }
            }, { new: true }
        )
        res.json(updateTache);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.ChangeStutas = async function (req, res) {

    console.log(res.tache.isCompleted);

    if (res.tache.isCompleted == false) {
        res.tache.isCompleted = true
    } else {
        res.tache.isCompleted = false
    }
    console.log(res.tache.isCompleted);
    try {
        const updateTache = res.tache.save();
        res.json(updateTache);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}
exports.Get_Tache = async function (req, res, next) {
    let tache
    try {
        tache = await tacheModel.findById(req.params.id)
        if (tache == null) {
            return res.status(404).json({ "message": "can't not find Tache" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.tache = tache;
    console.log(res.tache);
    next()
}

exports.Delete_Tache = async function (req, res){
    try{
        await res.tache.remove();
        res.json("Tache is deleted")
    }catch(err){
        res.status(400).json({ message: err.message })
    }
}