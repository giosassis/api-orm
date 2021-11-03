const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/router')

app.use(cors());
app.use(express.json())
app.listen(3001, () => console.log("Server is running on port 3000"))

routes(app)

module.exports = app;
