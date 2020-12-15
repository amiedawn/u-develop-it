// import express
const express = require('express');

// add PORT designation and app expression
const PORT = process.env.PORT || 3001;
const app = express();

// express.js middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// default response for any other request(not found) catch all
app.use((req, res) => {
  res.status(404).end();
});

// start the express.js server on port 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
