const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.get("/usuarios", function (req, res) {
    let mysql = require("mysql");



let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'pdm1821',
    database: "ecommerce",
  });

  connection.connect(function(err){
      if (err){
      return console.error("Error" + err.message)}
  })
connection.query("select nombre from usuarios ", function (err, result, fields){
    if (err){
        return console.error("Error" + err.message)}
        res.send(result)

}
)
connection.end(function(err){
    if (err){
        return console.error("Error" + err.message)}
}

)
})
app.listen(8080)
