const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    const invitation = req.query.invitation
    res.send(invitation)
})

app.listen(port, ()=> {
    console.log('Listening port:', port)
})

