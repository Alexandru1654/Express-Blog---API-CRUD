const posts = require('../db');

const store = (req, res) => {
    const { title, content, slug, image, tags } = req.body;

    if (!title || !content || !slug || !image || !tags) {
        return res.status(400).json({ error: "Tutti i campi sono richiesti" });
    }

    const newPost = {
        title,
        content,
        slug,
        image,
        tags
    };

    posts.push(newPost);

    res.json(posts);
};

module.exports = { store };



