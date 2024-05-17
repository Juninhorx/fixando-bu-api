const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivroPorId } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros();
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id;

        if(id && Number(id)) {
            const livro = getLivroPorId(id);
            if(livro) res.send(livro)
                else res.status(404).send("Livro não encontrado")

        } else res.status(422).send("Id inválido")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)) {
            const livro = getLivroPorId(id);
            if(livro) {
                const body = req.body;
                modificaLivro(body, id)
                res.send("item modificado com sucesso")

            } else res.status(404).send("Livro não encontrado")

        } else res.status(422).send("Id inválido")
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        const id = req.params.id;
        deleteLivroPorId(id)
        res.send("item deletado com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro, 
    patchLivro,
    deleteLivro 
}