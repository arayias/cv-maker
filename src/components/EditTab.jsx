import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Work from "./Work";

export default function EditTab({info , handleChangeInfo}) {

  return (
    <div className="edit-tab">
      <PersonalInfo info={info} handleChangeInfo={handleChangeInfo}/>
      <Education/>
      <Work/>
    </div>
  )
}