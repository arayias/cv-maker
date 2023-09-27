import '../styles/edit.css';

export default function Education() {
  return(
    <div className="input-tab">
      <h2>
        Education
      </h2>
      <form>
        <div className='input-container'>
          <label htmlFor="school">School</label>
          <input type="text" name="school" id="school" placeholder="Enter school/university"/>
        </div>

        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" placeholder="Enter degree undertaken"/>
        </div>

        <div className="two-inputs">
          <div className="input-container">
            <label className="recommended" htmlFor="start">Start</label>
            <input type="text" name="start" id="startSchool" placeholder="Enter start date"/>
          </div>
          <div className="input-container">
            <label className="recommended" htmlFor="end">End</label>
            <input type="text" name="end" id="endSchool" placeholder="Enter end date"/>
          </div>
        </div>

        <div className="input-container">
          <label className="optional" htmlFor="schoolLocation">Location</label>
          <input type="text" name="location" id="schoolLocation" placeholder="Enter location"/>
        </div>

      </form>

    </div>
  )
}