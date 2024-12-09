// inisialisasi user model/json dummy
const users = require("../models/userModel");

// Retrieve all user data
const getAllUsers = () => {
  return users;
};

// Add a new user
const createUser = (name, age, gender, phone, greeting, favoriteFruit) => {
  const newUser = {
    id: users.length + 1,
    name,
    age,
    gender,
    phone,
    greeting,
    favoriteFruit,
  };

  users.push(newUser);
  return newUser;
};

const findUserById = (userId) => {
  return users.find((user) => user.id === userId);
};

const deleteUser = (userId) => {
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

module.exports = { getAllUsers, createUser, findUserById };
