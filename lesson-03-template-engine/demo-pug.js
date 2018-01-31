'use strict'

let express = require('express')
let app = express()

app.set('port', 2000)
app.set('view engine', 'pug')
app.get('/', (req, res) => {
    let view = 'greeting'
    let params = {
        name: "BS",
        title: "hello world"
    }
    res.status(200).render('greeting', params)

})
app.listen(2000, () => {
    console.log('app started at http://localhost:2000')
});