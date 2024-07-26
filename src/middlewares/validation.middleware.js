const { z } = require("zod");

function validationMiddleware(schema) {
  return (req, res, next) => {
    try {
      schema.parse(req.body);
    } catch (error) {
      if (z.ZodError) {
        return res.status(400).json({
          status: false,
          message: error.errors[0].message,
        });
      }
    }
    next();
  };
}

module.exports = {
  validationMiddleware,
};
