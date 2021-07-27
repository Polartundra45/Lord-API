if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const path = require('path');

const bookRoutes = require('./routes/bookRoutes');
const movieRoutes = require('./routes/movieRoutes');
const characterRoutes = require('./routes/characterRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/books', bookRoutes);
app.use('/movies', movieRoutes);
app.use('/characters', characterRoutes);

app.get('/', (req, res) => {
    res.render('home')
});
 
app.listen(3000, () => {
    console.log('SERVER IS LIVE')
})