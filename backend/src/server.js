import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// local imports
import connectDB from "./lib/connectDB.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/test", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log("Server is listen on port 3000");
  connectDB();
});
