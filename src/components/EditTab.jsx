import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";

export default function EditTab({info , handleChangeInfo}) {

  return (
    <div className="edit-tab">
      <PersonalInfo info={info} handleChangeInfo={handleChangeInfo}/>
      <Education/>
    </div>
  )
}