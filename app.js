const express = require("express"),
    app = express(),
    session = require("express-session"),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static("./public"));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    const: {
        secure: false,
        maxAge: null
    },
    resave: true,
    saveUninitialized: true
}));


const userRoutes = require("./routes/userRoutes")
app.use('/aq-index', userRoutes)

app.listen(process.env.PORT || 9090, function(){
    console.log("XoloCar app server listening on port %d in %s mode", this.address().port, app.settings.env);
});