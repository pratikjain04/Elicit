<!DOCTYPE html>
<html>
 <head>
         <link rel="stylesheet" type="text/css" href="/login.css">  
<script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBvgALqhClKBVDF7-1gyumStnBhPhF75ws",
    authDomain: "login-page-cf50a.firebaseapp.com",
    databaseURL: "https://login-page-cf50a.firebaseio.com",
    projectId: "login-page-cf50a",
    storageBucket: "login-page-cf50a.appspot.com",
    messagingSenderId: "470107849478"
  };
  firebase.initializeApp(config);
</script>
 </head>
<body>
 <div class="login-wrap">
                <div class="login-html">
                    <div class="log-box container">
                        <img class="logo" src="/image/logo.png">
                    </div>
                    <h1>ELLICIT 2018</h1>
                    <input id="tab-1" type="radio" name="tab" class="sign-in" checked>
                    <label for="tab-1" class="tab">Sign In</label>
                    <div class="login-form">
                        <div class="sign-in-htm">
                            <form action="/register" method="POST">
                        
                            <div class="group">
                                <label for="username" class="label">Email</label>
                                <input id="username" name="username" type="email" class="input">
                            </div>
                            <div class="group">
                                <label for="first_name" class="label">First Name</label>
                                <input id="first_name" name="first_name" type="text" class="input" data-type="text">
                            </div>
                            <div class="group">
                                <label for="last_name" class="label">First Name</label>
                                <input id="last_name" name="last_name" type="text" class="input" data-type="text">
                            </div>
                            <div class="group">
                             <select>
                                <option value="volvo">Codathon</option>
                                <option value="saab">Hackthon</option>
                                <option value="mercedes">Tech-Quiz</option>
                                <option value="audi">Algo War</option>
                            </select> 
                            </div>
                            <div class="group">
                                <input type="submit" class="button" value="Sign In">
                            </div>
                            </form>
                            <div class="hr"></div>
                    </div>
                </div>
            </div>   
</body>

</html>
