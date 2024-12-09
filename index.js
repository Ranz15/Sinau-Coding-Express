require("dotenv").config();

// Inisialisasi Express
const express = require("express");

// Memanggil express pada variable app
const app = express();

// inisialisasi port dengan dotenv
const port = process.env.SERVER_PORT;

// Inisialisasi fungsi path
const path = require("path");

// Inisialisasi Cors
const cors = require("cors");

// Inisialisasi body parser
const bodyParser = require("body-parser");

// inisialisasi middleware
const middlewareLogRequest = require("./middleware/logs");

// Middleware Section
app.use(middlewareLogRequest);

// Perintah agar backend app dapat menerima parsing data JSON
app.use(bodyParser.json());

// Perintah untuk dapat mengakses local asset
app.use("/img", express.static(path.join(__dirname, "/public/images")));

// Perintah untuk mengaktifkan cors
app.use(cors());

// Route App in Express (Get,Post,Put,Delete)

// inisialisasi Router User Family
const userRoute = require("./routes/userRoutes");

// Route index
app.get("/", (req, res) => {
  res.send("Hello World By Express JS");
});

// Route User
app.use("/users", userRoute);

// Untuk menampilkan bahwa server sedang berjalan di port
app.listen(port, () => {
  console.log(`Express Berjalan di http://localhost:${port}/`);
});
