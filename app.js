const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');

app.use(express.json());
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

