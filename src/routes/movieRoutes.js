const express = require('express');
const movieRouter = express.Router();

function router(nav) {
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
            res.render('movieListView', 
            {   
                nav, 
                title: "Library",
                movies //movies: movies, shorthand
            });
        });
    
    movieRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params; //const id = req.params.id shorthand destructured
            res.render('movieView', {
                nav,
                title: 'library',
                movie: movies[id]
            });
        });
    return movieRouter
}

module.exports = router;