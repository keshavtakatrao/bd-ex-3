const express = require('express');
const cors = require('cors');
const { resolve } = require('path');
const { taskRoute } = require('./task');

const app = express();
const port = 3010;

app.use(cors());
app.use(express.static('static'));


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.use('/tasks', taskRoute)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
