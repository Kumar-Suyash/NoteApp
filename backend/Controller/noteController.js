const noteSchema = require('../Model/noteSchema');

// Create a new note
exports.createNote = async (req, res) => {
    try {
        let payload = await noteSchema.create(req.body);
        res.status(201).json({
            success: true,
            message: "Note created successfully",
            payload
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error creating note", error: err.message });
    }
};

// Get all notes
exports.allNotes = async (req, res) => {
    try {
        let payload = await noteSchema.find({});
        res.status(200).json({
            success: true,
            message: "Notes fetched successfully",
            payload
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error fetching notes", error: err.message });
    }
};

// Get single note
exports.singleNote = async (req, res) => {
    try {
        let payload = await noteSchema.findById(req.params.id);
        if (!payload) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }
        res.status(200).json({
            success: true,
            message: "Single note fetched successfully",
            payload
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error fetching note", error: err.message });
    }
};

// Update note
exports.updateNotes = async (req, res) => {
    try {
        let payload = await noteSchema.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true } // return updated document
        );
        if (!payload) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }
        res.status(200).json({
            success: true,
            message: "Note updated successfully",
            payload
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error updating note", error: err.message });
    }
};

// Delete note
exports.deleteNote = async (req, res) => {
    try {
        const payload = await noteSchema.deleteOne({ _id: req.params.id });
        if (payload.deletedCount === 0) {
            return res.status(404).json({ success: false, message: "Note not found" });
        }
        res.status(200).json({ success: true, message: "Note deleted successfully", payload });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error deleting note", error: err.message });
    }
};
