const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'stardb'
})



 app.use(express.static('public'))
 app.use(express.static('img'))

app.get('/', (req, res) => {  
  connection.query("SELECT * FROM posts", function (err, result) {
    if (err) { throw(err) }
    res.json(result);
  })

  var container = document.getElementById("container");
  container.innerHTML = "huj";
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  