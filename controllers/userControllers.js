// inisialisasi user model/json dummy
const {
  getAllUsers,
  createUser,
  findUserById,
} = require("../service/userService");

// Mengambil semua data user
const getAllUser = (req, res) => {
  const query = req.query;
  let users = getAllUsers();

  if (query.name) {
    users = users.filter((user) =>
      user.name.toLowerCase().includes(query.name.toLowerCase())
    );
  }

  res.json(users);
};

// Menambahkan data user
const addUser = (req, res) => {
  const { name, age, gender, phone, greeting, favoriteFruit } = req.body;
  const newUser = createUser(name, age, gender, phone, greeting, favoriteFruit);
  res.status(201).json({
    message: "Create Data User Success",
    data: newUser,
  });

  console.log(req.body);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const user = findUserById(userId);

  if (!user) {
    return res.status(404).json({
      error: "user not found",
    });
  }

  res.json(user);
};

module.exports = { getAllUser, addUser, getUserById };
