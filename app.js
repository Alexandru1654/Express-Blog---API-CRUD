const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');
const notFoundMiddleware = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/posts', postsRouter);

app.use(notFoundMiddleware)

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


