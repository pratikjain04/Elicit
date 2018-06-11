var     express = require('express'),
        logger = require('morgan'),
        app = express(),
        bodyParser = require('body-parser');

// var firebase = require('firebase');


app.use(require("express-session")({        
        secret: "iloveprogramming",
        resave: false,
        saveUninitialized: false
    }));

app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(logger('dev'))
app.set('views', __dirname + '/views')


app.use(bodyParser.urlencoded({extended : true}));

app.get('/',function(request,response){
       // response.send("<h1>First App</h1>")
          response.render('home.ejs')
})


app.get("/home", (req, res)=>{    
        res.sendFile(__dirname+"/index.html");
        // res.render("index.ejs");
})

app.post('/event_reg', (req, res)=>{
         res.render("event_reg.ejs ");  
})

app.post('/register', (req, res)=>    {
        console.log(req.body); 
    });

var port = process.env.PORT || 8001

app.listen(port, function(){
        console.log('App Running on Port ' +  port)
})
