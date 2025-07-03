const express = require("express");

const app = express();
const port=8000;
const cityRoute = require('./routes/city')
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.get('/', (req, res) => res.render('index'));
app.get('/getdata', (req, res) => res.render('getdata', { city: null, temperature: null, description: null })
);
app.use('/weather',cityRoute)








app.listen(port,()=>{console.log('server is live on 8000 go!!!')})