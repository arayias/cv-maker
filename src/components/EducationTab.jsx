import "../styles/edit.css";
import { useState } from "react";
import Education from "./Education";
import IndividualEducation from "./IndividualEducation";

export default function EducationTab({
  education,
  handleEditEducation,
  handleDeleteEducation,
  handleCreateEducation,
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
      currentId = handleCreateEducation({
        school: "",
        degree: "",
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
        <h2>Education</h2>
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
            <Education
              education={education}
              handleEditEducation={handleEditEducation}
              handleDeleteEducation={handleDeleteEducation}
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
                  handleDeleteEducation(isEditing.id);
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
            {education.map((edu) => (
              <IndividualEducation
                key={edu.id}
                education={edu}
                handleEdit={handleEdit}
              />
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
