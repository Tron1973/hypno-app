import { useState } from "react"
import { useNotesContext } from '../hooks/useNotesContext'
import { useAuthContext } from "../hooks/useAuthContext"

const NoteForm = () => {
  const { dispatch } = useNotesContext()
  const { user } = useAuthContext()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must log in for access')
      return
    }

    const note = { title, content }

    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json();

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setContent('')
      setError(null)
      setEmptyFields([])
      console.log('new note added', json)
      dispatch({ type: 'CREATE_NOTE', payload: json })
    }
  }

  return (
    <form className="create" onSubmit={(handleSubmit)} >
      <h3>Create a note</h3>

      <label>Note Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : '' }
      />

      <label>Note Content:</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
        className={emptyFields.includes('content') ? 'error' : ''}
      />

      <button>ADD NOTE</button>
      {error && <div className="error">{error}</div>}

    </form>
  )
}

export default NoteForm