import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// CREATE
router.post("/notes", async (req, res) => {
    try {
        const note = await Note.create(req.body);
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ALL
router.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// READ ONE
router.get("/notes/:id", async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note);
});

// UPDATE
router.put("/notes/:id", async (req, res) => {
    const note = await Note.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(note);
});

// DELETE
router.delete("/notes/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted" });
});

export default router;