const express = require('express')
const server = express()

const PORT = process.env.PORT || 8080

// server config
server

// set static files
.use(express.static('public'))

// create routes
.get('/', (req, res)=>{
        res.sendFile(__dirname + '/view/index.html')
    },
)

// up server
server.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT)
})