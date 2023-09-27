import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import EducationTab from "./EducationTab";
import Work from "./WorkTab";

export default function EditTab({
  info,
  education,
  handleChangeInfo,
  handleCreateEducation,
  handleDeleteEducation,
  handleEditEducation,
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
      <Work />
    </div>
  );
}
