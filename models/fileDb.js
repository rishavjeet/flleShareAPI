const mongoose = require('mongoose');
const fileSchema = new mongoose.Schema({
    filename:{
        type:String,
        require:true,
    },
    path:{
        type:String,
        require:true,
    },
    size:{
        type:String,
        require:true
    }
});
const fileModel = mongoose.model('fileDb',fileSchema);
module.exports = fileModel;