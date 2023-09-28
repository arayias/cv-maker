export default function IndividualWork(props) {
  const { work, handleEdit } = props;
  const { company, id } = work;
  console.log(work);
  return (
    <>
      <div className="spacer"></div>
      <div className="individual-education" onClick={(e) => handleEdit(e, id)}>
        <h3>{company}</h3>
      </div>
    </>
  );
}
