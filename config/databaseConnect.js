const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://RishavDutta:Soma123@cluster0.o15c3.mongodb.net/FileApp?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Database Connected...."))
.catch(()=>console.log("error Ocurred: Cannot Connect to DB"));