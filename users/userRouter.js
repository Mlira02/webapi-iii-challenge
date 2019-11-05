const express = require('express');
const userDb = require('./userDb');
const router = express.Router();

router.post('/', validateUser, (req, res) => {
    userDb.insert(req.body)
    .then(user => {
        res.status(200).json(user);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "error with request..."})
    })
});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {
    userDb.get(req.query)
    .then(thing => {
        res.status(200).json(thing)
    })
    .catch(err => {
        console.log(`There was an error: ${err}`);
        res.status(500).json({ message: "Error grabbing the users..."})
    });
});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {

};

function validateUser(req, res, next) {
    if (!Object.getOwnPropertyNames(req.body).length
)
    {
        console.log(req.body.name);
        res.status(400).json({ message: "missing user data"})
    }
    else if(!req.body.name)
    {
        res.status(400).json({ message: "missing required name field"})
    }
    else{
        next();
    }
};

function validatePost(req, res, next) {

};

module.exports = router;
