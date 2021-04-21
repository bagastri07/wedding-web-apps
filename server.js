const express = require('express');
const app = express();
const env = require('env')

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('Assets'))

app.get('/', (req, res) => {
    const invitation = req.query.invitation;
    res.render('index', {invitation})
})

app.listen(port, ()=> {
    console.log('Listening port:', port);
})

