export default function IndividualEducation(props) {
  const { education, handleEdit } = props;
  const { school, id } = education;
  return (
    <>
      <div className="spacer"></div>
      <div className="individual-education" onClick={(e) => handleEdit(e, id)}>
        <h3>{school}</h3>
      </div>
    </>
  );
}
