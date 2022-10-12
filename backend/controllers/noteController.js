const Note = require('../models/noteModel');
const mongoose = require('mongoose')

// GET ALL NOTES
const getNotes = async (req, res) => {
  const notes = await Note.find({}).sort({ createdAt: -1 })

  res.status(200).json(notes)
};

// GET A SINGLE NOTE
const getNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That note does not exist" })
  }
  
  const note = await Note.findById(id);

  if (!note) {
    return res.status(404).json({ error: "That note does not exist" })
  }

  res.status(200).json(note)
}

// CREATE A NEW NOTE
const createNote = async (req, res) => {
  const  { title, content } = req.body

  let emptyFields = []

  if (!title) {
    emptyFields.push('title')
  }
  if (!content) {
    emptyFields.push('content')
  }
  if (emptyFields.length > 0) {
    return res.status(400).json({ error: 'Please fill in all fields' , emptyFields })
  }

  try {
    const note = await Note.create({ title, content })
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};

// DELETE A NOTE
const deleteNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That note does not exist" })
  }

  const note = await Note.findOneAndDelete({ _id: id })

  if (!note) {
    return res.status(404).json({ error: "That note does not exist" })
  }

  res.status(200).json(note)
}

// UPDATE A NOTE
const updateNote = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "That note does not exist" })
  }

  const note = await Note.findOneAndUpdate({ _id: id }, {
    ...req.body
  })

  if (!note) {
    return res.status(404).json({ error: "That note does not exist" })
  }

  res.status(200).json(note)

}

module.exports = {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote
}