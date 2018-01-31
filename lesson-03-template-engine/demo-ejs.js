'use strict'
//demo-ejs.js
//load the things we need
let express = require('express');
let app = express();


app.set('port', 2000)
//set the view engine to ejs
app.set('view engine', 'ejs')

//use res.render to load up and ejs view file
//index page
app.get('/', (req, res) => {
    var drinks = [
        {name: 'Bloody Mary', drunkness: 3},
        {name: 'Martini', drunkness: 5},
        {name: 'Scotch', drunkness: 10}
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else."

    res.status(200).render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page
app.get('/about', (req, res)=> {
    res.status(200).render('pages/about');
});


//set the app to show on port 2000
app.listen(2000, () => {
    console.log('listening at http://localhost:2000')
});