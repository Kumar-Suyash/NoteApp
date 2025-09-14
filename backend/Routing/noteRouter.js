const { Router } = require("express");
const { createNote, allNotes, singleNote, updateNotes, deleteNote } = require("../Controller/noteController");

const router = Router();

router.post('/noteapp', createNote);        // Create a new note
router.get('/noteapp', allNotes);           // Get all notes
router.get('/noteapp/:id', singleNote);     // Get single note
router.put('/noteapp/:id', updateNotes);    // Update note
router.delete('/noteapp/:id', deleteNote);
  // Delete note

module.exports = router;
