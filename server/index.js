require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connection = require("./db/db.js");
const userRoute = require("./routes/userRoute.js");
const avatarRoute = require("./routes/avatarRoute.js");
const cookieParser = require('cookie-parser')
const createWebSocketServer = require("./wsServer.js");
const path = require("path");
const aiRoute = require("./routes/aiRoute");

const app = express();
//database connection
connection();
app.use(express.json())

app.use(cookieParser())
//middlewares
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4000",
  "https://chat-app-112.vercel.app"
  
];
const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
};

app.use(cors(corsOptions));
app.use("/api/user", userRoute);
app.use("/api/ai", aiRoute);
app.use("/api/avatar", avatarRoute);
const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Application Running on Port ${port}`);

  createWebSocketServer(server);
  
});
