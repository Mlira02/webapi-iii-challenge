const express = require('express');
const postsDb = require('./postDb');
const router = express.Router();

router.get('/', (req, res) => {
    postsDb.get(req.query)
    .then(thing => {
        res.status(200).json(thing);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "There was an error retreiving posts..."})
    })
});

router.get('/:id', validatePostId, (req, res) => {
    res.status(200).json(req.post);
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

// custom middleware

function validatePostId(req, res, next) {
    postsDb.getById(req.params.id)
    .then(post => {
        if(post){
            req.post = post;
            next();
        } else
        {
            res.status(400).json({ message: "Could not find ID..."});
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: "There was an error with request"})
    })
};

module.exports = router;