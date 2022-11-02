const router = require('express').Router();
const { diskStorage } = require('multer');
const multer = require('multer');
const fileModel = require('../models/fileDb.js');
const url = "http://localhost:9000";
const upload = multer({
    storage:diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'fileData');
        },
        filename: (req,file,cb)=>{
            cb(null,file.originalname);
        }
    }),
    fileFilter(req,file,cb){
        if(!file.originalname.endsWith('.png')){
            return cb(new Error("Please upload .png format file"));
        }
        cb(undefined,true);
    }
}).single('uploadFile');
router.post('/',(req,res)=>{
    upload(req,res,async (err)=>{
        if(!req.file){
            return res.status(400).json({error:'all fields required'});
        }
        if(err){
            return res.status(500).json({error: err.message});
        }
        else{
            const newFile = new fileModel({
                filename:req.file.filename,
                path:req.file.path,
                size:req.file.size
            });
            const uploadedFile = await newFile.save();
            return res.json(`${url}/show/${uploadedFile.filename}`);
        }
    });
});
module.exports = router;