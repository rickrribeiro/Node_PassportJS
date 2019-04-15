const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose')
const keys = require('./config/keys')


const app = express();

// set view engine
app.set('view engine', 'ejs');
//connect to mongp





console.log('b: '+keys.mongodb.dbURI)
mongoose.connect(keys.mongodb.dbURI, ()=>{
    console.log("connected to mongo")
}
)

// set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
