const express = require('express')
const cors = require('cors')
const Main = require('./controllers/mainController.js')
const app = express()


app.get('/', Main.index)

const corsOptions = {
    origin: 'http://localhost:3000'
}
app.use(cors(corsOptions))
const PORT = 3000

app.listen(PORT, () => {
    console.log('Server running o port 3000')
})

