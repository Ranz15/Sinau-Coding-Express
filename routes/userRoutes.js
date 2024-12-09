// Inisialisasi Express
const express = require("express");

// pemanggilan fungsi router
const router = express.Router();

// inisialisasi Controller
const {
  getAllUser,
  addUser,
  getUserById,
  getUserByQuery,
} = require("../controllers/userControllers");

// Daftar Router/jalur

// Router untuk mengambil semua data user
router.get("/", getAllUser);

// Router untuk menambahkan data user baru
router.post("/", addUser);

// Router untuk menampilkan data user berdasarkan id
router.get("/:id", getUserById);

module.exports = router;
