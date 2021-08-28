//error catch for failing server
module.exports.errorHandler = (err, req, res, next) => {
  res.status(err.status | 500).json({
    err: err.message | "Something is not right here"
  });
};

//error catch for not found
module.exports.notFound = (req, res, next) => {
  const error = new Error("Not Found");
  err.status = 404;

  next(err);
};
