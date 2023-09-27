import { useState } from 'react'
import './styles/App.css'
import { v4 } from 'uuid'
import EditTab from './components/EditTab'
import CvPreview from './components/CvPreview'


function App() {
  let educationCounter = 0
  let experienceCounter = 0

  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  })

  const [education, setEducation] = useState({
    [v4()]: {
      school: '',
      degree: '',
      start: '',
      end: '',
    },
  })
    

  const handleChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    })
    console.log(info)
  }

  return (
    <>
      <main className='main-grid'>
        <EditTab info={info} handleChangeInfo={handleChangeInfo} />
        <CvPreview/>
      </main>
    </>
  )
}

export default App
