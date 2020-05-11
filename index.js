const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('SERVIDOR CORRIENDO CON EXPRESS')
})

app.listen(3000)

console.log("Mi primer server corriendo EXPRESS en http://localhost:3000");
