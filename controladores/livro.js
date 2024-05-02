function getLivros(req, res) {
    try {
        res.send("Welcome to books")
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros
}