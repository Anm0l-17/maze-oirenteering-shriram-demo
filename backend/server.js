import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import scanRoutes from "./routes/scanRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { initSocket } from "./socket/socket.js";

dotenv.config();
connectDB();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Attach io to req
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Routes
app.use("/api/scan", scanRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);

// Initialize socket logic
initSocket(io);

// ----------------------------------
// Deployment Configuration
// ----------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Static Assets in Production
// (Ensure you run `npm run build` in frontend and have the build folder at backend/../frontend/build)
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "../frontend/build");
  app.use(express.static(buildPath));

  app.get(/(.*)/, (req, res) => {
    res.sendFile(path.resolve(buildPath, "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
// ----------------------------------

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
