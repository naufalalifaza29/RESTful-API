
// console.log(data)aaa
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require("./connection")

app.use(bodyParser.json())

app.get('/', (req, res) => {  
    db.query("SELECT * FROM claims", (error, result) => {
        //hasil
        console.log(result);
        //console.log(process.env.DB_host)
    })  
    res.send('Hello World nopal!')
})

app.post('/', (req, res) => {
  console.log({requestFromOutside: req.body})  
  res.send('Got a POST request')
})

app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})