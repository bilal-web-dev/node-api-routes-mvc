import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const query = req.query;
  console.log("🚀 ~ file: router.js:31 ~ router.get ~ query:", query);

  const users = await User.find({});

  res.json({
    success: true,
    users,
  });
};

export const createNewUser = async (req, res) => {
  const { name, email, password } = req.body;

  await User.create({
    name,
    email,
    password,
  });

  res.json({
    success: true,
    message: "User created successfully",
  });
};

export const getUserById = async (req, res) => {
  const { id } = req.body;

  const user = await User.findById(id);

  res.json({
    success: "true",
    user,
  });
};

export const getUserByParams = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  res.json({
    success: "true",
    user,
  });
};
