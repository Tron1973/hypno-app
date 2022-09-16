import { useEffect } from 'react';
import NoteDetails from '../components/NoteDetails';
import NoteForm from '../components/NoteForm';
import { useNotesContext } from '../hooks/useNotesContext';

const Home = () => {
  const { notes, dispatch } = useNotesContext();

  useEffect(() => {
    const fetchNotes = async () => {
      const response = await fetch('/api/notes');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_NOTES', payload: json })
      };
    };

    fetchNotes();
  }, []);

  return (
    <div className="home">
      <div className='notes'>
        { notes && notes.map((note) => (
          <NoteDetails key={note._id} note={note} />
        )) }
      </div>
      <NoteForm />
    </div>
  );
};

export default Home;