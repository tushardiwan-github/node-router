const express = require('express');
const app = express();
const router = express.Router();

//set views for pug in index.js
app.set('view engine', 'pug');  
app.set('views','./views'); 



//create custom middleware
//use next() to call next middleware
    var myLogger = function(req,res,next){
        var d = Date(Date.now());
        req.requestTime = d.toString();
        console.log(`User Logged at ${req.requestTime}`);
        next();
    }

router.use(myLogger);

router.get('/',(req,res,next) =>{
    res.render('hello_view');
    next();
});

router.get('/home',(req,res,next) =>{
    res.render('home_view');
    next();
});

router.get('/login',(req,res) =>{
    res.render('login_view');
});


//Applying routes to our application
app.use('/',router);



app.listen(3000,()=> console.log('Server listening on port 3000......'));