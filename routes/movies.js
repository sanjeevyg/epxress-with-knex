const express = require('express');
const router = express.Router();


const bodyParser = require('body-parser');
router.use(bodyParser.json())



const knex = require('knex');
const config = require('../knexfile').development;
const database = knex(config);

router.get('/movies', (request, response) => {
    database('movie').select()
        .then(movies => {
            response.json(movies)
        }).catch(error => {
            console.log(error.message)
        })
})

router.get('/:name', (request, response) => {
    database('movie').select()
        .where({ name: request.params.name })
        .then(movie => {
            response.json(movie)
        }).catch(error => {
            console.log(error.message)
        })
})


router.post('/movies', (request, response) => {
    database('movie').insert({
        name: request.body.name,
        rating: request.body.rating
    }).returning('*')
    .then(movie => {
        response.json({movie})
    })
})

router.post('/:name', (request, response) => {
    database('movie').insert({
        name: request.body.name,
        rating: request.body.rating
    }).returning('*')
    .then(movie => {
        response.json({movie})
    })
})




module.exports = router;