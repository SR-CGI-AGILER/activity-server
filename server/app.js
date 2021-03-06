const express = require('express')
const app = express()
const activity = require('./api/activity/index');
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(logger('dev'))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
  });
  

app.use(bodyParser({
    urlEncoded: {
        extended: true
    }
}));
app.use(bodyParser.json())


app.use('/api/v1', activity)
app.use(function (req, res, next) {
    next();
});
const port = process.env.PORT || 8000
app.listen(port, () => console.log('I am running on ', port))