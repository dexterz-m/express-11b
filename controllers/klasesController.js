const knex = require('../config/knex');

const getClases = (req , res) => {
    try{
        knex.select('name').from('klases')
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

const getClassId = (req , res) => {
    try{
        const klasesId = req.params.id;
        knex('skoleni')
        .where ({klases_id: klasesId})
        .select('name')
        .then((row) => {
            res.send(row);
        })
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

const postClass = (req, res) => {
    try{
        knex('klases').insert({name: req.body.name}).then(
            res.status(201).send({name: req.body.name})
        )
    } catch (err) {
        res.status(500).send({error:err.message})
    }
}

module.exports = {getClases, getClassId, postClass}