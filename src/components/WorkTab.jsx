import "../styles/edit.css";
import { useState } from "react";
import Work from "./Work";
import IndividualWork from "./IndividualWork";

export default function WorkTab({
  work,
  handleCreateWork,
  handleDeleteWork,
  handleEditWork,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState({
    open: false,
    id: null,
  });

  const handleEdit = (e, id) => {
    let currentId = id;
    setIsOpen(true);

    if (id === undefined || id === null) {
      currentId = handleCreateWork({
        company: "",
        position: "",
        start: "",
        end: "",
      });
      setIsEditing({
        open: true,
        id: currentId,
      });
      return;
    }

    setIsEditing({
      open: true,
      id: currentId,
    });
  };

  return (
    <div className="input-tab">
      <div className="input-header">
        <h2>Work Experience</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`chevron-btn ${isOpen ? "rotate" : null}`}
        >
          v
        </button>
      </div>

      <div className={isOpen ? "open" : "closed"}>
        {isEditing.open ? (
          <>
            <Work
              work={work}
              handleEditWork={handleEditWork}
              handleDeleteWork={handleDeleteWork}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <div className="flex-row">
              <button
                className="add-btn"
                onClick={() => {
                  setIsEditing({
                    open: false,
                    id: null,
                  });
                }}
              >
                &#10003;
              </button>

              <button
                className="add-btn"
                onClick={() => {
                  handleDeleteWork(isEditing.id);
                  setIsEditing({
                    open: false,
                    id: null,
                  });
                }}
              >
                &#10005;
              </button>
            </div>
          </>
        ) : (
          <>
            {work.map((wr) => (
              <IndividualWork key={wr.id} work={wr} handleEdit={handleEdit} />
            ))}
            <button className="add-btn" onClick={handleEdit}>
              +
            </button>
          </>
        )}
      </div>
    </div>
  );
}
