const router = require('express').Router();
const fileModel = require('../models/fileDb.js');
const url = 'http://localhost:9000';
router.get('/:fname',async (req,res)=>{
    const file = await fileModel.findOne({filename:req.params.fname});
    if(!file){
        return res.json({error: 'In valid URL'});
    }
    else{
        return res.render('fileView',{
            fileName:file.filename,
            filePath:file.path,
            fileSize:file.size,
            downloadLink: `${url}/download/${file.filename}`
        });
    }
});
module.exports = router;