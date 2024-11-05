const posts = require('../db');

const store = (req, res) => {
    const { title, content, slug, image, tags } = req.body;
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

module.exports = { store };
