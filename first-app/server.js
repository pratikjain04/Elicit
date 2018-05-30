var express = require('express')
var logger = require('morgan')
var app = express()



app.set('view engine', 'ejs')
app.use(express.static('views'))
app.use(logger('dev'))
app.set('views', __dirname + '/views')

app.get('/',function(request,response){
       // response.send("<h1>First App</h1>")
          response.render('home.ejs')
        
})

var port = process.env.PORT

app.listen(port, function(){
        console.log('App Running on Port ' +  port)
})