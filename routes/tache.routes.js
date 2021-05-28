const express = require('express');
const router = express.Router();
const tacheController = require('../controllers/tache.controller');
const { authenticateToken } = require('../Core/jwt');
const tache = require('../models/tache');


router.get('/', authenticateToken, tacheController.Get_Taches);

router.post('/create', authenticateToken, tacheController.Add_Tache);

router.get('/', authenticateToken, tacheController.Get_comments);

router.post('/createComment', authenticateToken, authenticateToken, tacheController.Add_comment);

router.post('/addComment', authenticateToken, tacheController.Add_Comment_to_Tache);

router.patch('/updateStatus/:id', authenticateToken, tacheController.Get_Tache, tacheController.ChangeStutas);

router.delete('/delete', authenticateToken, tacheController.Get_Tache, tacheController.Delete_Tache)

module.exports = router;