const express = require('express');
const routes = express();

routes.get('/', (req, res) => {
    res.render('index', { title: "Home Page" });
})

routes.get('/gallery', (req, res) => {
    res.render('gallery', { title: "Gallery Page" });
})

routes.get('/blog', (req, res) => {
    res.render('blog', { title: "Blog Page" });
})

routes.get('/contact', (req, res) => {
    res.render('contact', { title: "Contact Page" });
})

routes.get('/about', (req, res) => {
    res.render('about', { title: "About Page" });
})


module.exports = routes;