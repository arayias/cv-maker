import { useState } from "react";
import "./styles/App.css";
import { v4 } from "uuid";
import EditTab from "./components/EditTab";
import CvPreview from "./components/CvPreview";

function App() {
  const [info, setInfo] = useState({
    name: "Jonathan Doe",
    email: "dez@email.com",
    phone: "99100100",
    address: "peos",
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

  const [work, setWork] = useState([
    {
      id: v4(),
      company: "Company",
      position: "Position",
      start: "2014",
      end: "2018",
      location: "1234 Main street",
    },
  ]);

  const handleCreateWork = ({ company, position, start, end, location }) => {
    const id = v4();
    setWork([
      ...work,
      {
        id,
        company,
        position,
        start,
        end,
        location,
      },
    ]);
    return id;
  };

  const handleDeleteWork = (id) => {
    setWork(work.filter((job) => job.id !== id));
  };

  const handleEditWork = (e, id) => {
    console.log(e.target.name, e.target.value, id);
    setWork(
      work.map((job) => {
        if (job.id === id) {
          return {
            ...job,
            [e.target.name]: e.target.value,
          };
        }
        return job;
      }),
    );
  };

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
          work={work}
          handleChangeInfo={handleChangeInfo}
          handleCreateEducation={handleCreateEducation}
          handleDeleteEducation={handleDeleteEducation}
          handleEditEducation={handleEditEducation}
          handleCreateWork={handleCreateWork}
          handleDeleteWork={handleDeleteWork}
          handleEditWork={handleEditWork}
        />
        <CvPreview info={info} education={education} work={work} />
      </main>
    </>
  );
}

export default App;
