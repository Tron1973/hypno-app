import { useNotesContext } from '../hooks/useNotesContext';
import { FaTrash } from 'react-icons/fa';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

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
      <p>{ formatDistanceToNow(new Date(note.createdAt), { addSuffix: true }) }</p>
      <span onClick={handleClick}><FaTrash className='trash'/></span>
    </div>
  )
};

export default NoteDetails;