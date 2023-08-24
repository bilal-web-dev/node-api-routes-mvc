import express from "express";

import {
  createNewUser,
  getAllUsers,
  getUserById,
  getUserByParams,
} from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);

router.post("/users/new", createNewUser);

router.get("/userid", getUserById);

router.get("/users/:id", getUserByParams);

export default router;
