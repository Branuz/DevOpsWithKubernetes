const { v4: uuidv4 } = require("uuid");

const randomString = uuidv4();

const output = setInterval(() => {
  const date = new Date;
  console.log(`${date.toISOString()} : ${randomString}`);
}, 5000);