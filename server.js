var     express = require('express'),
        logger = require('morgan'),
        app = express(),
        bodyParser = require('body-parser');

var firebase = require('firebase');
var config = {
        apiKey: "AIzaSyAeSzB5j39YWR0_X-Q2HGrI-Z3d8h8Tw8Q",
        authDomain: "elicit-project.firebaseapp.com",
        databaseURL: "https://elicit-project.firebaseio.com",
        projectId: "elicit-project",
        storageBucket: "elicit-project.appspot.com",
        messagingSenderId: "380806788122"
        };
firebase.initializeApp(config);
var database=firebase.database();
          

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

function isLoggedin(req, res, next){
    
        if(req.isAuthenticated()){
            return next(); 
        }
        res.redirect("/login");
}


app.get('/',function(request,response){
       // response.send("<h1>First App</h1>")
          response.render('play.ejs')
})



app.get('/login',function(request,response){
        // response.send("<h1>First App</h1>")
           response.render('home.ejs')
 })

app.get("/home", (req, res)=>{    
        res.sendFile(__dirname+"/index1.html");
        // console.log("user id: " + firebase.auth().currentUser.uid);
        // res.render("index.ejs");
})

app.get("/test", (req, res)=>{res.sendFile(__dirname+"/test.html")});

app.get('/event_reg', (req, res)=>{
         res.render("event_reg.ejs");  
})

app.post('/register', (req, res)=>    {
        console.log(req.body); 
        firebase.auth().createUserWithEmailAndPassword(req.body.username, req.body.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                
                // ...
              });
        console.log(firebase.auth().currentUser);
    });



app.get('/events/:event_name', (req, res)=>
{
        event_name=req.params.event_name;
        firebase.database().ref('events/'+event_name.toLowerCase()).once('value').then(function(snapshot)
        {
                if(snapshot.val())
                {
                        event=snapshot.val();
                        res.render("events.ejs", event);
                }
                else
                {
                        res.redirect(__dirname+"/404");
                }

        });
})
var port = process.env.PORT || 8001

app.listen(port, function(){
        console.log('App Running on Port ' +  port)
})

app.get("*", function(req, res){
        res.send("<strong>404</strong> You seem lost!");
    });

    
