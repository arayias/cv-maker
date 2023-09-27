import '../styles/edit.css';

export default function Work() {
  return(
    <div className="input-tab">
      <h2>
        Work Experience
      </h2>
      <form>
        <div className='input-container'>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" id="company" placeholder="Enter company name"/>
        </div>

        <div className="input-container">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" placeholder="Enter position"/>
        </div>

        <div className="two-inputs">
          <div className="input-container">
            <label className="recommended" htmlFor="startCompany">Start</label>
            <input type="text" name="start" id="start" placeholder="Enter start date"/>
          </div>
          <div className="input-container">
            <label className="recommended" htmlFor="endCompany">End</label>
            <input type="text" name="end" id="end" placeholder="Enter end date"/>
          </div>
        </div>

        <div className="input-container">
          <label className="optional" htmlFor="companyLocation">Location</label>
          <input type="text" name="location" id="companyLocation" placeholder="Enter location"/>
        </div>

      </form>

    </div>
  )
}