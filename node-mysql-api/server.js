const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Raj6508$",
  database: "my_database",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database.");
});

// GET API to fetch data from std_questioneers
app.get("/api/questioneers", (req, res) => {
  db.query("SELECT * FROM std_questioneers", (error, results) => {
    if (error) {
      return res.status(500).json({ error: error.message });
    }
    res.json(results);
  });
});

// POST API to insert data into std_check_submissions
app.post("/api/check-submissions", (req, res) => {
  const {
    sub_category,
    check_tobe_performed,
    category,
    action_data,
    project_id,
    documented_outcome,
  } = req.body;

  const sql = `INSERT INTO std_check_submissions 
    (sub_category, check_tobe_performed, category, action_data, project_id, documented_outcome) 
    VALUES (?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [
      sub_category,
      check_tobe_performed,
      category,
      action_data,
      project_id,
      documented_outcome,
    ],
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.json({ message: "Data inserted successfully!", id: result.insertId });
    }
  );
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
