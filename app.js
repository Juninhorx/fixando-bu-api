const express = require('express');
const rotaLivro = require('./rotas/livro');
const rotaFavoritos = require('./rotas/favoritos');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));

app.use('/livros', rotaLivro);
app.use('/favoritos', rotaFavoritos);

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})