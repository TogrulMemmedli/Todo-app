const logSystem = (req, res, next) => {
  console.log(new Date(), req.method, req.url, req.body ? req.body : "");
  next();
};

module.exports = logSystem;
