import DeleteIcon from "@mui/icons-material/Delete";
import "../style/notestyle.css";
function Notesfun(props) {
  return (
    <div key={props.key} className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Notesfun;
