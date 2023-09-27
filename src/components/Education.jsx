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
          <label htmlFor="school">Degree</label>
          <input type="text" name="school" id="school" placeholder="Enter degree undertaken"/>
        </div>

        <div className="two-inputs">
          <div className="input-container">
            <label htmlFor="start">Start</label>
            <input type="text" name="start" id="start" placeholder="Enter start date"/>
          </div>
          <div className="input-container">
            <label htmlFor="start">End</label>
            <input type="text" name="end" id="end" placeholder="Enter end date"/>
          </div>
        </div>

      </form>

    </div>
  )
}