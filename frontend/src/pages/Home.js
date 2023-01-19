import { useEffect } from 'react'
import NoteDetails from '../components/NoteDetails'
import NoteForm from '../components/NoteForm'
import { useNotesContext } from '../hooks/useNotesContext'
import { useAuthContext } from '../hooks/useAuthContext'

const Home = () => {
  const { notes, dispatch } = useNotesContext()
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('/api/notes', {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_NOTES', payload: json })
      }
    }

    if (user) {
    fetchNotes()
    }
  }, [dispatch, user])

  return (
    <main className="home">
      <section className='notes'>
        { notes && notes.map((note) => (
          <NoteDetails key={note._id} note={note} />
        )) }
      </section>
      <NoteForm />
      <a href="https://www.claireifiedhealingarts.com"><p>return to Claireified Healing Arts</p></a>
    </main>
  )
}

export default Home