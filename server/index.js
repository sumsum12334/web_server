const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
//const fileUpload = require('express-fileupload');

//middleware
app.use(cors());
app.use(express.json()); //req.body

//get a record
app.get("/record", async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM countrydata_final");
    res.json(todos[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/countrylist", async (req, res) => {
  try {
    const todos = await pool.query("SELECT name FROM countrydata_final");
    res.json(todos[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/columnlist", async (req, res) => {
  try {
    const todos = await pool.query("select column_name from information_schema.columns where table_schema = database() and table_name='countrydata_final' and column_name != 'name'");
    res.json(todos[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/:query/:country", async (req, res) => {
  try {
    const { country,query } = req.params;

    const counquery = await pool.query("SELECT name,?? as query FROM countrydata_final WHERE name = ?",
    [query,country]
    );
    res.json(counquery[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/:query", async (req, res) => {
  try {
    const { query } = req.params;
    

    const counquery = await pool.query("SELECT name,?? as query FROM countrydata_final",
    [query]
    );
    res.json(counquery[0]);
  } catch (err) {
    console.error(err.message);
  }
});
app.listen(5000, () => {
  console.log("server has started on port 5000");
});