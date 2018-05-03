let express = require('express');
let app = express();
let path = require('path');
let router = express.Router();
let bodyParser = require('body-parser');
let appRoutes = require('./api/routes/api')(router);


app.use(express.static(path.join(__dirname,'public')));
app.use('/api',appRoutes);




app.get('*',function(req,res){
	res.sendFile(path.join(__dirname+"/public/app/views/index.html"));
});



let port = process.env.port || 5000;
app.listen(port,()=>{
    console.log("connected on port: "+port);
})