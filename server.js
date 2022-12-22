const express = require('express');
const app = express()

port = 7878;

app.listen(port, () => {
    console.log("Servernya nyala. Port -> " + port)
});

app.use(express.static('public'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.redirect("/home")
})

app.get('/home', (req, res) => {
    // res.sendfile("public/index.html");
    res.render('index.ejs')
}) 

app.get('/contact', (req, res) => {
    res.render('contact.ejs')
})
