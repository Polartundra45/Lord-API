const express = require('express');
const router = express.Router();
const axios = require('axios');

const token = process.env.KEY

router.get('/', (req, res) => {
   res.render('characters')
})

router.get('/too', async (req, res) => {
  
        const input = req.query.search;
        if (!input) {
            res.render('error');
        } else {
            if (input.includes(' ')) {
                const nameArr = input.split(' ');
                const capitalizedName = `${nameArr[0].slice(0,1).toUpperCase() + nameArr[0].slice(1)} ${nameArr[1].slice(0,1).toUpperCase() + nameArr[1].slice(1)}`
                const character = await axios.get(`https://the-one-api.dev/v2/character?name=${capitalizedName}`, {
                    headers : {
                        'Authorization': `Bearer ${token}` 
                    }
                })
                const charInfo = character.data.docs[0];
                if (charInfo === undefined) {
                    res.render('error');
                } else {
                    res.render('characterShow', {charInfo});
                }
            } else {
                const singleCapitalizedName = input.slice(0,1).toUpperCase() + input.slice(1);
                const character = await axios.get(`https://the-one-api.dev/v2/character?name=${singleCapitalizedName}`, {
                    headers : {
                        'Authorization': `Bearer ${token}` 
                    }
                })
                const charInfo = character.data.docs[0];
                if (charInfo === undefined) {
                    res.render('error');
                } else {
                    res.render('characterShow', {charInfo});
                }
                res.render('characterShow', {charInfo});
            }
        }
});

module.exports = router;