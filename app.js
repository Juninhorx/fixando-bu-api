const express = require('express');
const rotaLivro = require('./rotas/livro');

const app = express();

app.use('/livro', rotaLivro);

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})