const express = require('express');
const router = express.Router();
const tacheController = require('../controllers/tache.controller');
const { authenticateToken } = require('../Core/jwt');
const tache = require('../models/tache');


router.get('/', tacheController.Get_Taches);

router.post('/create', tacheController.Add_Tache);

router.get('/comments', tacheController.Get_comments);

router.post('/createComment',  tacheController.Add_comment);

router.post('/addComment',  tacheController.Add_Comment_to_Tache);

router.patch('/updateStatus/:id', authenticateToken, tacheController.Get_Tache, tacheController.ChangeStutas);

router.delete('/delete', authenticateToken, tacheController.Get_Tache, tacheController.Delete_Tache)

module.exports = router;