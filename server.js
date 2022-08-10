const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const { urlencoded } = require("express");
require("dotenv").config();
const app = express();
mongoose
	.connect(process.env.URI)
	.then(() => console.log("Database connected"))
	.catch((err) => console.log(err));

app.use(express.json({ limit: "5mb" }));
app.use(urlencoded({ extended: true }));
app.use(
	cors({
		origin: "*",
	})
);
app.use("/api", require("./routes/auth"));
app.use("/post", require("./routes/post"));
const PORT = 5000;

app.listen(PORT, () => console.log("server running on port 5000"));
