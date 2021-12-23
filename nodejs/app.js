// app.js
const mysql = require("mysql");

const con = mysql.createConnection({
  host: "teste_mysql",
  user: "root",
  password: "root",
  database: "teste",
});

con.connect((err) => {
  if (err) {
    console.log("Erro connecting to database...", err);
    return;
  }
  console.log("Connection established!");
});

//####################################################################################################

/* con.query("SELECT * FROM author", (err, rows) => {
  if (err) throw err;

  console.log("Authors: ", rows, "\n\n");
});

con.query("SELECT * FROM book", (err, rows) => {
  if (err) throw err;

  console.log("Books: ", rows, "\n\n");
}); */

con.query(
  "SELECT b.id, b.title, a.name, a.location FROM book as b INNER JOIN author as a ON b.author = a.id",
  (err, rows) => {
    if (err) throw err;

    rows.forEach((row) => {
      console.log(`${row.title} by ${row.name}, ${row.location}`);
    });
  }
);

//####################################################################################################

con.end((err) => {
  if (err) {
    console.log("Erro to finish connection...", err);
    return;
  }
  console.log("The connection was finish...");
});
