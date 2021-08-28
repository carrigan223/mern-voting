const express = require("express");
const { errorHandler, notFound } = require("./handlers");

//creating a new express app and setting the port
const app = express();
const port = 1988;

//entry point route to backend
app.get("/", (req, res) => {
  res.json({ message: "Hello from the server" });
});

//any unrecognized end points will go here
//then run through errors
app.use(notFound);

//final error catch for failing server
app.use(errorHandler);

//server running verifacation method
app.listen(port, console.log(`Server running on port: ${port}`));
