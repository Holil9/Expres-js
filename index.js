import express from "express";
import cors from "cors";
import UserRoute from "./route/UserRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.get("/", (req, res) => {
    res.send("Server berjalan dengan baik! 🚀 selamat datang");
});



app.listen(3000, ()=>console.log('Serve sedang Berjalan'))