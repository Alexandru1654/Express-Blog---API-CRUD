const posts = require('../db');

const store = (req, res) => {
    const { title, content, slug, image, tags } = req.body;

    if (!title || !content || !slug || !image || !tags) {
        return res.status(400).json({ error: "Tutti i campi sono richiesti" });
    }

    const existingPost = posts.find(post => post.slug === slug);
    if (existingPost) {
        return res.status(400).json({ error: "Un post con questo slug esiste già" });
    }

    const newPost = {
        title,
        content,
        slug,
        image,
        tags
    };

    posts.push(newPost);

    res.status(201).json(newPost); 
};

module.exports = { store };



