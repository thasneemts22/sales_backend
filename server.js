const express = require("express");
const cors = require("cors");
console.log("Server file loaded");

const customerRoutes = require("./routes/customers");
const salesRoutes = require("./routes/sales");
const itemRoutes = require("./routes/items");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customers", customerRoutes);
app.use("/sales", salesRoutes);
app.use("/items", itemRoutes);


app.get("/test", (req, res) => {
  res.send("API working");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});