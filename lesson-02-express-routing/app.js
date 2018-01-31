'use strict'

let express = require('express')

let app= express()
app.get('/', (req, res) => {
    console.log('get request for/')
    res.status(200).send('hello world')
})

app.get('/about', function (req, res) {
    console.log('get request for/ about')
    res.status(200).send('I\'m Sam!')
})

app.listen(2000, ()=> {
    console.log('app started at http://localhost:2000')
});