import { useState } from "react";
import "./styles/App.css";
import { v4 } from "uuid";
import EditTab from "./components/EditTab";
import CvPreview from "./components/CvPreview";

function App() {
  let educationCounter = 0;
  let experienceCounter = 0;

  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [education, setEducation] = useState([
    {
      id: v4(),
      school: "University of Life",
      degree: "BSc in Life",
      start: "2010",
      end: "2014",
    },
  ]);

  const handleCreateEducation = ({ school, degree, start, end }) => {
    const id = v4();
    setEducation([
      ...education,
      {
        id,
        school,
        degree,
        start,
        end,
        hidden: false,
      },
    ]);
    return id;
  };

  const handleDeleteEducation = (id) => {
    setEducation(education.filter((edu) => edu.id !== id));
  };

  const handleEditEducation = (e, id) => {
    console.log(e.target.name, e.target.value, id);
    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return {
            ...edu,
            [e.target.name]: e.target.value,
          };
        }
        return edu;
      }),
    );
  };

  const handleChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
    console.log(info);
  };
  document.title = `${info.name} CV`;
  return (
    <>
      <main className="main-grid">
        <EditTab
          info={info}
          education={education}
          handleChangeInfo={handleChangeInfo}
          handleCreateEducation={handleCreateEducation}
          handleDeleteEducation={handleDeleteEducation}
          handleEditEducation={handleEditEducation}
        />
        <CvPreview />
      </main>
    </>
  );
}

export default App;
