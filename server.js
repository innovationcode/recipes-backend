const express = require('express');

const app = express();

const port = process.env.PORT || 9000;

app.get('/', (req, res) => {
      res.send("SERVER  👍");
})

app.listen(port, () => {
      console.log(`SERVER UP RUNNING ON PORT : ${port}`);
})