const express = require('express');
const router = express.Router();
const posts = require('../controllers/postController');

router.get('/', (req, res) => {
    res.send('<ul>' + posts.map(post => `<li>${post.title}</li>`).join('') + '</ul>');
});

router.get('/:slug', (req, res) => {
    const post = posts.find(p => p.slug === req.params.slug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send('Post not found');}
    });

    router.post('/', store);
    module.exports = router;

    