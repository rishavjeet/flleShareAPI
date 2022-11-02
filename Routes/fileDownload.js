const router = require('express').Router();
const fileModel = require('../models/fileDb.js');
router.get('/:fname',async (req,res)=>{
    // res.send("Hi this is file download route");
    const file = await fileModel.findOne({filname:req.params.fname});
    if(!file){
        return res.json({Error: 'Error Ocurred'});
    }
    const filePath = `${__dirname}/../${file.path}`;
    res.download(filePath);
});
module.exports = router;