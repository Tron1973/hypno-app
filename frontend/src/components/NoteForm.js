import { useState } from "react";
import { useNotesContext } from '../hooks/useNotesContext';

const NoteForm = () => {
  const { dispatch } = useNotesContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const note = { title, content };

    const response = await fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    };
    if (response.ok) {
      setTitle('');
      setContent('');
      setError(null);
      console.log('new note added', json);
      dispatch({ type: 'CREATE_NOTE', payload: json })
    };
  };

  return (
    <form className="create" onSubmit={(handleSubmit)} >
      <h3>Create a note</h3>

      <label>Note Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>Note Content:</label>
      <input
        type="text"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />

      <button>ADD NOTE</button>
      {error && <div className="error">{error}</div>}

    </form>
  );
};

export default NoteForm;