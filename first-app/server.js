var     express = require('express'),
        logger = require('morgan'),
        app = express(),
        bodyParser = require('body-parser');

var firebase = require('firebase');

var config = {
        apiKey: "AIzaSyBvgALqhClKBVDF7-1gyumStnBhPhF75ws",
        authDomain: "login-page-cf50a.firebaseapp.com",
        databaseURL: "https://login-page-cf50a.firebaseio.com",
        projectId: "login-page-cf50a",
        storageBucket: "login-page-cf50a.appspot.com",
        messagingSenderId: "470107849478"
      };
    
      firebase.initializeApp(config);
      

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
          response.render('home.ejs')
})


app.get('/login',function(request,response){
        // response.send("<h1>First App</h1>")
           response.render('home.ejs')
 })

app.get("/home", (req, res)=>{    
        // res.sendFile(__dirname+"/index1.html");
        // console.log("user id: " + firebase.auth().currentUser.uid);
        // res.render("index.ejs");
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

var port = process.env.PORT || 8001

app.listen(port, function(){
        console.log('App Running on Port ' +  port)
})

app.get("*", function(req, res){
        res.send("<strong>404</strong> You seem lost!");
    });

    
