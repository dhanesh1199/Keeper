import { useState } from "react";
import "../style/NewNote.css";
import AddIcon from '@mui/icons-material/Add';
export default function CreateNewNote(props) {
  const [notes, setNotes] = useState({});
  const [isClicked, setIsClicded] = useState(false);

  function handleExpand() {
    setIsClicded(true);
  }
  function handleChange(e) {
    setIsClicded(true);
    const { name, value } = e.target;
    setNotes((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  function handleClick(e) {
    e.preventDefault();

    if (Object.keys(notes).length !== 0) {
      props.onAdd(notes);
      setNotes({ title: "", content: "" });
    }
  }

  return (
    <>
      <div className="newnotecontainer">
        <form>
          {isClicked ? (
            <input
              onChange={handleChange}
              name="title"
              value={notes.title}
              type="text"
              placeholder="Note title..."
            />
          ) : null}

          <textarea
            onChange={handleChange}
            onClick={handleExpand}
            name="content"
            value={notes.content}
            placeholder="Take a note..."
            rows={isClicked ? 3 : 1}
          />
          {isClicked ? (
            <button onClick={handleClick}>
              <AddIcon />
            </button>
          ) : null}
        </form>
      </div>
    </>
  );
}
