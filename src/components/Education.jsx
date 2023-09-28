import "../styles/edit.css";

export default function Education({
  education,
  handleEditEducation,
  isEditing,
  isOpen,
}) {
  const currentEducation = education.find((item) => item.id === isEditing.id);
  const { school, degree, start, end, location } = currentEducation;
  return (
    <>
      <form className={isOpen ? "open" : "closed"}>
        <div className="input-container">
          <label htmlFor="school">School</label>
          <input
            type="text"
            name="school"
            id="school"
            placeholder="Enter school/university"
            value={school || ""}
            onChange={(e) => handleEditEducation(e, isEditing.id)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            id="degree"
            placeholder="Enter degree undertaken"
            value={degree || ""}
            onChange={(e) => handleEditEducation(e, isEditing.id)}
          />
        </div>

        <div className="two-inputs">
          <div className="input-container">
            <label className="recommended" htmlFor="start">
              Start
            </label>
            <input
              type="text"
              name="start"
              id="startSchool"
              placeholder="Enter start date"
              value={start || ""}
              onChange={(e) => handleEditEducation(e, isEditing.id)}
            />
          </div>
          <div className="input-container">
            <label className="recommended" htmlFor="end">
              End
            </label>
            <input
              type="text"
              name="end"
              id="endSchool"
              placeholder="Enter end date"
              value={end || ""}
              onChange={(e) => handleEditEducation(e, isEditing.id)}
            />
          </div>
        </div>

        <div className="input-container">
          <label className="optional" htmlFor="schoolLocation">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="schoolLocation"
            placeholder="Enter location"
            value={location || ""}
            onChange={(e) => handleEditEducation(e, isEditing.id)}
          />
        </div>
      </form>
    </>
  );
}
