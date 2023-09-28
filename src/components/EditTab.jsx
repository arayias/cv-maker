import PersonalInfo from "./PersonalInfo";
import EducationTab from "./EducationTab";
import WorkTab from "./WorkTab";

export default function EditTab({
  info,
  education,
  work,
  handleChangeInfo,
  handleCreateEducation,
  handleDeleteEducation,
  handleEditEducation,
  handleCreateWork,
  handleDeleteWork,
  handleEditWork,
}) {
  return (
    <div className="edit-tab">
      <PersonalInfo info={info} handleChangeInfo={handleChangeInfo} />
      <EducationTab
        education={education}
        handleCreateEducation={handleCreateEducation}
        handleDeleteEducation={handleDeleteEducation}
        handleEditEducation={handleEditEducation}
      />
      <WorkTab
        work={work}
        handleCreateWork={handleCreateWork}
        handleDeleteWork={handleDeleteWork}
        handleEditWork={handleEditWork}
      />
    </div>
  );
}
