const express = require('express');


const app = express();
app.use(express.json());
app.set('view engine', 'ejs')
const requireDir = require('require-dir');
// requireDir('./src/models')
app.use('/auth',require("./src/routes"))

app.get('/', (req,res) =>{
    res.render('index')
})

app.listen('3000', () => {
    console.log('app now')
});