import { pool } from "../db/db.js";
import bcrypt from "bcrypt";

const authMiddleware = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." });
  }

  try {
    const [results] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const user = results[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    req.session.user = {
      id: user.id,
      name: user.name,
      email: user.email,
    };

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default authMiddleware;
