const express = require("express");
const cors = require("cors");
const connectDB = require("./config/databases");
const contactRoutes = require("./routes/contact.routes");

const app = express();
const port = 8001;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("App is ready");
});

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});