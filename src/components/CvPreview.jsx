import "../styles/preview.css";

export default function CvPreview({ info, education, work }) {
  const { name, email, phone, address } = info;
  return (
    <div className="cv-preview">
      <header>
        <h1>{name}</h1>
        <div className="contact-info">
          <p>{email}</p>
          <p>{phone}</p>
          <p>{address}</p>
        </div>
      </header>
      <main id="cv-main">
        {education.length >= 1 && (
          <section className="education">
            <h2>Education</h2>
            {education.map((edu) => {
              const { id, school, degree, start, end, location } = edu;
              return (
                <div key={id} className="cv-item">
                  <div className="side-info">
                    <p>
                      {start} - {end}
                    </p>
                    <p>{location}</p>
                  </div>
                  <div className="main-info">
                    <h3>{school}</h3>
                    <p>{degree}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {work.length >= 1 && (
          <section className="work">
            <h2>Work Experience</h2>
            {work.map((job) => {
              const { id, company, position, start, end, location } = job;
              return (
                <div key={id} className="cv-item">
                  <div className="side-info">
                    <p>
                      {start} - {end}
                    </p>
                    <p>{location}</p>
                  </div>
                  <div className="main-info">
                    <h3>{company}</h3>
                    <p>{position}</p>
                  </div>
                </div>
              );
            })}
          </section>
        )}
      </main>
    </div>
  );
}
