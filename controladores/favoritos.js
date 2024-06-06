const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favoritos");

function getFavoritos(req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id

        insereFavorito(id)
        res.status(201)
        res.send("Livro inserido com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req?.params?.id
        if (!id && typeof(id) !== 'number') {
            res.status(422).send("Id inválido")
            return
        }

        deletaFavoritoPorId(id)
        res.send("Item desfavoritado com sucesso")
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}