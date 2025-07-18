const path = require('node:path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

// parse form data into req.body
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My first Express app - listening on port ${PORT}!`);
});