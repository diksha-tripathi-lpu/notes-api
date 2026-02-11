import express from "express";
import mongoose from "mongoose";
import noteRoutes from "./routes/noteRoutes.js";

const app = express();

app.use(express.json());

// CONNECT MONGODB
mongoose.connect("mongodb://127.0.0.1:27017/notesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// USE ROUTES
app.use("/", noteRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});