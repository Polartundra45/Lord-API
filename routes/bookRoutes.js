const express = require('express');
const router = express.Router();
const axios = require('axios').default;

router.get('/', async (req, res) => {
    try {
        const getData = await axios.get("https://the-one-api.dev/v2/book");
        const bookObject = getData.data.docs;
        res.render('books', {bookObject});
    } catch(e) {
        res.render('error');
    }
})

router.get('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const getData = await axios.get(`https://the-one-api.dev/v2/book/${id}`);
        const specificBook = getData.data.docs[0];
        res.render('show', {specificBook});
    } catch(e) {
        res.render('error');
    }
})

module.exports = router;
