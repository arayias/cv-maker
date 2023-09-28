export default function Work({ work, handleEditWork, isEditing, isOpen }) {
  console.log(work, isEditing);
  const currentWork = work.find((w) => w.id === isEditing.id);
  const { company, position, start, end, location } = currentWork;
  return (
    <>
      <form className={isOpen ? "open" : "closed"}>
        <div className="input-container">
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Enter company name"
            value={company || ""}
            onChange={(e) => handleEditWork(e, isEditing.id)}
          />
        </div>

        <div className="input-container">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            id="position"
            placeholder="Enter position"
            value={position || ""}
            onChange={(e) => handleEditWork(e, isEditing.id)}
          />
        </div>

        <div className="two-inputs">
          <div className="input-container">
            <label className="recommended" htmlFor="startCompany">
              Start
            </label>
            <input
              type="text"
              name="start"
              id="start"
              placeholder="Enter start date"
              value={start || ""}
              onChange={(e) => handleEditWork(e, isEditing.id)}
            />
          </div>
          <div className="input-container">
            <label className="recommended" htmlFor="endCompany">
              End
            </label>
            <input
              type="text"
              name="end"
              id="end"
              placeholder="Enter end date"
              value={end || ""}
              onChange={(e) => handleEditWork(e, isEditing.id)}
            />
          </div>
        </div>

        <div className="input-container">
          <label className="optional" htmlFor="companyLocation">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="companyLocation"
            placeholder="Enter location"
            value={location || ""}
            onChange={(e) => handleEditWork(e, isEditing.id)}
          />
        </div>
      </form>
    </>
  );
}
