module.exports = function(err, req, res, next) {
  if(!err) return next();

  console.error("ErrorHandler: An error occurs", err.stack);
  res.status(500);
  res.sendFile(__dirname + '/public/500.html');
}
