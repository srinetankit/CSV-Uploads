//import package
const express = require('express');
const router = express.Router();
const multer = require('multer');

//controllers
const homeController = require('../controller/homeController');
const fileController = require('../controller/fileController');
const upload = multer({ dest: 'uploads/files' })

//routes
router.get('/', homeController.home);
router.post('/upload', upload.single('file'), fileController.upload);
router.get('/view/:id', fileController.view);
router.get('/delete/:id', fileController.delete);

module.exports = router;