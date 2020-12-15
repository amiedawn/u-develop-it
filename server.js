// import express
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express.js middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Connected to the election database.');
});

// default response for any other request(not found) catch all
// has to go after all GET statements, after middleware, before listener
app.use((req, res) => {
  res.status(404).end();
});

// Start server after DB connection
db.on('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
