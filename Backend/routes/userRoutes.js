const express = require('express')
const multer = require('multer')
const userController = require('../controllers/userController')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
});

const upload = multer({storage:storage});

const router = express.Router();

router.post('/register',upload.single('profilePic'),userController.createUser)

module.exports = router