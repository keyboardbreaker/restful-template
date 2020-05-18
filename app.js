const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const port = process.env.PORT || 3000;

app.use(morgan('tiny')); //tiny - less GET info 
app.listen(port, () => { //debug doesnt come up on production
    debug(`running on port ${chalk.green(port)}`); //using debug instead of console.log
});