const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;


app.use(morgan('tiny')); //tiny - less GET info
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views','./src/views');
app.set('view engine', 'ejs');

const nav = [{link: '/movie', title: 'Movies' },
            { link: '/directors', title: 'directors'}];

const movieRouter = require('./src/routes/movieRoutes')(nav);
app.use('/movies', movieRouter);

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '/views/index.html'));
    res.render('index', 
    { 
        nav: [{link: '/movies', title: 'Movies'}, {link: '/directors', title: 'Directors'}], 
        title: "Library"
    });
});

app.listen(port, () => { //debug doesnt come up on production
    debug(`running on port ${chalk.green(port)}`); //using debug instead of console.log
});