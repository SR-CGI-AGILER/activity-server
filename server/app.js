const express = require('express')
const app = express()
const activity = require('./api/activity/index');
const bodyParser = require('body-parser');
const logger = require('morgan')

app.use(logger('dev'))


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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

app.listen(process.env.PORT || 8000, () => console.log('I am running on ', process.env.PORT))