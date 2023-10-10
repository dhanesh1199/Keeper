// import DemoComp from "./component/DemoComp";
import { useState } from "react";
import CreateNewNote from "./component/CreateNewNote";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Notesfun from "./component/Notesfun";

export default function App() {
  const [addnewNotes, setAddnewNotes] = useState([]);

  function addNotes(notes) {
    setAddnewNotes((prevValue) => {
      return [...prevValue, notes];
    });
  }
  function handleDelete(id) {
    setAddnewNotes((prevValue) => {
      return prevValue.filter((currEle, currIndex) => {
        return currIndex !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateNewNote onAdd={addNotes} />
      {addnewNotes.map((items, itemIndex) => {
        return (
          <Notesfun
            title={items.title}
            content={items.content}
            id={itemIndex}
            onDelete={handleDelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}
