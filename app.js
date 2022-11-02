const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const uploadRoute = require('./Routes/fileupload.js');
const showRoute = require('./Routes/fileshow.js');
const downloadRoute = require('./Routes/fileDownload.js');
require('./config/databaseConnect.js');
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','hbs');
app.use('/upload',uploadRoute);
app.use('/show',showRoute);
app.use('/download',downloadRoute);
app.listen(9000,(req,res)=>{
    console.log("server listening at port: 9000");
});