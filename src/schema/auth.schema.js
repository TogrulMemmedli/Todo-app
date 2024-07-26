const { z } = require("zod");

const userSchema = z.object({
  username: z
    .string()
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can contain only alphabetic and numeric characters"
    ),
  password: z
    .string()
    .min(8, "Minimum 6 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can contain only alphabetic and numeric characters"
    ),
});


module.exports = { userSchema };
