const express = require('express');
const router = express.Router();
const { store } = require('../controllers/postController');
const posts = require('../db');

router.get('/', (req, res) => {
    res.json({
        data: posts,
        counter: posts.length
    });
});

router.get('/:slug', (req, res) => {
    const post = posts.find(p => p.slug === req.params.slug);
    if (post) {
        res.json(post);
    } else {
        res.status(404).json('Post not found');
    }
});


router.post('/', store);

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, content, slug, image, tags } = req.body;

    const postIndex = posts.findIndex(post => post.id === parseInt(id, 10));

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }



    if (!title || !content || !slug || !image || !tags) {
        return res.status(400).json({ error: "Required" });
    }



    const updatedPost = {
        ...posts[postIndex],
        title,
        content,
        slug,
        image,
        tags
    };

    posts[postIndex] = updatedPost;

    res.json(updatedPost);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const postIndex = posts.findIndex(post => post.id === parseInt(id));

    if (postIndex === -1) {
        return res.status(404).json({ error: 'Post not found' });
    }

    posts.splice(postIndex, 1);

    res.json(posts);
});

module.exports = router;


