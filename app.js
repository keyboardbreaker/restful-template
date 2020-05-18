const express = require('express');
const chalk = require('chalk');
const app = express();
const bookRouter = express.Router();
const port = process.env.PORT || 3000;

bookRouter.route('/books')
    .get((req, res) => {
        const response = { hello: 'this is my API'};
        res.json(response);
    });
app.use('/api', bookRouter);

app.get('/', (req, res) => {
    res.send('Welcome to my API');
});

app.listen(port, () => {
    console.log(`running on port ${chalk.green(port)}`);
});