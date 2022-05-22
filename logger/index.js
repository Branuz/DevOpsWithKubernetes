const express = require("express");
const { v4: uuidv4 } = require("uuid");
const app = express();
const PORT = 3001;
const randomString = uuidv4();


app.get("/", async (request, response) => {
  const date = new Date;
  const log = `${date.toISOString()} : ${randomString}`

  response.set('Content-Type', 'text/html');
  response.send(log);
});


app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});