import { useNotesContext } from '../hooks/useNotesContext';

const NoteDetails = ({ note }) => {
  const { dispatch } = useNotesContext();

  const handleClick = async () => {
    const response = await fetch('/api/notes/' + note._id, {
      method: 'DELETE'
    });
    const json = await response.json()

    if (response.ok) {
      dispatch({ type: 'DELETE_NOTE', payload: json })
    }
  };

  return (
    <div className="note-details">
      <h4>{ note.title }</h4>
      <p>{ note.content }</p>
      <p>{ note.createdAt }</p>
      <span onClick={handleClick}>delete</span>
    </div>
  )
};

export default NoteDetails;