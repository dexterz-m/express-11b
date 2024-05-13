const knex = require('../config/knex');

const getStudents = (req, res) => {
    try{
    knex.select('*').from('skoleni')
    .then((rows) => {
        res.send(rows);
    }) 
    .catch((err) => {
        console.log(err);
    })
    }  catch (err) {
        res.status(500).send ({error:err.message})
    }
}


const postStudents = (req, res) => {
    try{
        knex('skoleni').insert({name: req.body.name, klases_id: req.body.klases_id}).then(
            res.status(201).send({name: req.body.name, klases_id: req.body.klases_id})
        )
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}


const getStudentsById = (req, res) => {
    try{
        const klases_id = req.params.id
        knex('skoleni')
        .where ({id: klases_id})
        .first('*')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}



module.exports = { getStudents,postStudents,getStudentsById };