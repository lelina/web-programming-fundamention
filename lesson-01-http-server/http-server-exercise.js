'use strict'

let express = require('express')
let app = express()

app.get('/', (req, res) => {
    console.log('get request for/')
    res.status(200).send('greeting')
})

app.get('/chat', function (req, res) {
    console.log('get request for/chat')
    res.status(200).send('Hello')
})

app.get('/chat/:username1', function (req, res) {
    console.log('get request for/chat/:username=BS')
    let params={
        username1:"BS"
    }
    res.status(200).send('Hello, I/m'+ req.params.chat.username1)
})

app.get('/chat?username=BinhSon&ask=time', function (req, res) {
    console.log('get request for/chat?username=BinhSon&ask=time')

    res.status(200).send('Hello, BinhSon. It\'s <' + d.getTime() + '> now.')
})


app.get('/chat?&ask=time', function (req, res) {
    console.log('get request for/chat?&ask=time')
    res.status(200).send('Hello. It\'s <' + d.getTime() + '> now.')
})
app.listen(2000, () => {
    console.log('app started at http://localhost:2000')
});