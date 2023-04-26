const Main = {
    async index(req, res) {
        try {
            res.send("Olá mundo")
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = Main