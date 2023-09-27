import '../styles/edit.css';

export default function PersonalInfo({name , email , phone , address, handleChangeInfo }) {
  return (
    <div className="input-tab">
      <h2>
        Personal Info
      </h2>
      <form>
        <div className='input-container'>
          <label htmlFor="name">Name</label>
          <input
          onChange={handleChangeInfo}
          type="text" name="name" id="name" value={name}/>
        </div>
        <div className='input-container'>
          <label htmlFor="email">Email</label>
          <input onChange={handleChangeInfo} type="email" name="email" id="email" value={email}/>
        </div>
        <div className='input-container'>
          <label htmlFor="phone">Phone</label>
          <input onChange={handleChangeInfo} type="tel" name="phone" id="phone" value={phone}/>
        </div>

        <div className='input-container'>
          <label htmlFor="address">Address</label>
          <input onChange={handleChangeInfo} type="text" name="address" id="address" value={address}/>
        </div>

      </form>
    </div>
  )
}