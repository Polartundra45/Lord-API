const express = require('express');
const router = express.Router();
const axios = require('axios').default;

const token = process.env.KEY
 
router.get('/', async (req, res) => {
    try {
        const movies = await axios.get("https://the-one-api.dev/v2/movie", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const movieNames = movies.data.docs;
        res.render('movies', {movieNames})
    } catch(e) {
        res.render('error');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const movieData = await axios.get(`https://the-one-api.dev/v2/movie/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const oneMovie = movieData.data.docs;
        res.render('movie-show-page', {oneMovie});
    } catch(e) {
        res.render('error');
    }
})

module.exports = router;