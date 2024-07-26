const express = require("express");
const app = express();
const cors = require("cors");
const { logSystemMiddleware } = require("./middlewares");

const dotenv = require("dotenv");
const router = require("./routes");
dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(logSystemMiddleware);
app.use(cors());
app.use(router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/ or http://127.0.0.1:${PORT}/`);
});
