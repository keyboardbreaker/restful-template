const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3000;
const movieRouter = express.Router();

app.use(morgan('tiny')); //tiny - less GET info
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist/')));
app.set('views','./src/views');
app.set('view engine', 'ejs');

const movies = [
    {
        title: 'War Of The Worlds',
        genre: 'Historical Fiction',
        director: 'Steven Spielberg',
        watched: false
    },
    {
        title: 'Les Misérables',
        genre: 'Historical Fiction',
        director: 'Tom Hooper',
        watched: false
    },
    {
        title: 'The Time Machine',
        genre: 'Science Fiction',
        director: 'Simon Wells',
        watched: false
    },
    {
        title: 'A Journey into the Center of the Earth',
        genre: 'Science Fiction',
        director: 'Eric Brevig',
        watched: false
    },
    {
        title: 'The Dark World',
        genre: 'Fantasy',
        director: 'Henry Kuttner',
        watched: false
    },
    {
        title: 'The Wind in the Willows',
        genre: 'Fantasy',
        director: 'Dave Ybwub',
        watched: false
    },
    {
        title: 'Triangle',
        genre: 'History',
        director: 'Christoper Smith',
        watched: false
    },
    {
        title: 'Ready Player One',
        genre: 'Biography',
        director: 'Steven Spielberg',
        watched: false
    }
    ]

movieRouter.route('/', )
    .get((req, res) => {
        res.render('movies', 
        { 
            nav: [{link: '/movies', title: 'Movies'}, {link: '/directors', title: 'Directors'}], 
            title: "Library",
            movies //movies: movies, shorthand
        });
    });

movieRouter.route('single')
    .get((req, res) => {
        res.send('hello single movie')
    });

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