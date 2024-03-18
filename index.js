const express = require('express');
const port = 3001;
const app = express();
const routes = require('./routes/route');

app.set('view engine', 'ejs');

app.use('/', routes);
app.use('/gallery', routes);
app.use('/blog', routes);
app.use('/contact', routes);
app.use('/about', routes);

app.use(express.static('public'));

app.listen(port, () => {
    console.log("Server Start...");
})