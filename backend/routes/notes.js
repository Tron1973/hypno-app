const express = require('express')
const { getNotes,
        getNote,
        createNote,
        deleteNote,
        updateNote
} = require('../controllers/noteController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// MIDDLEWARE AUTHORIZATION TO PROTECT ROUTES
router.use(requireAuth)

// GET ALL NOTES
router.get('/', getNotes)

// GET A SINGLE NOTE
router.get('/:id', getNote)

// POST A NEW NOTE
router.post('/', createNote)

// DELETE A NOTE
router.delete('/:id', deleteNote)

// UPDATE A NOTE
router.patch('/:id', updateNote)

module.exports = router