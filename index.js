const express = require('express');
// const path = require('path');
const app = express();

const knex = require('knex');
const config = require('./knexfile').development;
const database = knex(config);


const cors = require('cors')
app.use(cors())


app.use('/', require('./routes/movies'))


// const PORT = process.env.PORT || 3000 
// app.listen = (PORT, () => {
//     console.log(`Listening to ${PORT}`)
// })

// app.get('/:name', (request, response) => {
//     database('movie').select()
//         .where({ name: request.params.name })
//         .then(movie => {
//             response.json({movie})
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
// })

app.listen(3000)
