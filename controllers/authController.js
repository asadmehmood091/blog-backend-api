import { User } from "../db/models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signup(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const role = req.body.role === "admin" ? "admin" : "user";
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword,
      role: role, // Setting the role based on the request
    });
    console.log(user);
    res
      .status(201)
      .json({
        message: "User created successfully",
        user: { username: user.username, role: user.role },
      });
  } catch (error) {
    console.log(error, "error");
    res.status(400).send(error);
  }
}

export async function login(req, res) {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (user && (await bcrypt.compare(req.body.password, user.password))) {
    const accessToken = jwt.sign(
      {
        username: user.username,
        role: user.role, // Include the role in the JWT payload
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      message: "Login successful",
      accessToken,
    });
  } else {
    res.send("Username or password incorrect");
  }
}
