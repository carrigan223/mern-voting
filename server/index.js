const express = require('express');

//creating a new express app and setting the port
const app = express();
const port = 1988;


//entry point route to backend
app.get('/', (req,res) => {res.json({message: 'Hello from the server'})});

//any unrecognized end points will go here
//then run through errors
app.use((req,res,next) => {
    const error = new Error('Not Found');
    err.status = 404;

    next(err);
});

//final error catch for failing server
app.use((err,req,res,next) => {
    res.status(err.status | 500).json({
        err: err.message | 'Something is not right here'
    });
});


//server running verifacation method
app.listen(port, console.log(`Server running on port: ${port}`));

