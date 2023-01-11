import React from 'react';
import 'components/InterviewerListItem.scss';
import classNames from "classnames";

export default function InterviewerListItem(props){
  
  const setInterviewer= () => props.setInterviewer(props.id)

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
    
  });
  return(
    <li className={interviewerClass} onClick={setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt={props.name}
  />
 {props.selected && props.name}
</li>
  )
}

