const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log(`Server start at: http://localhost:${PORT}`);
})

app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})