import React from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT"
const ERROR_SAVE=  "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment(props) {

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    
    props.bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW)
      })
      .catch(error => transition(ERROR_SAVE, true));
      
  }

  const deleteInterview = () => {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(error => transition(ERROR_DELETE, true));
  };

console.log(props.interview)
  return (<article
    className="appointment">
    <Header time={props.time} />
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers} onCancel={() => back()} onSave={save} />
    )}

    {mode === EDIT && (
      <Form
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        interviewers={props.interviewers}
        onSave={save}
        onCancel={back}

      />
    )}
    {mode === SAVING && <Status message={"SAVING"} />}
    {mode === DELETING && <Status message="Deleting" />}
    {mode === CONFIRM && <Confirm
      message="Are you sure you want to delete this appointment?"
      onCancel={back}
      onConfirm={deleteInterview} />}
      {mode === ERROR_SAVE && <Error onClose={() => {back()}} message={"Could not save appointment"}/>}
      {mode === ERROR_DELETE && <Error onClose={() => {back()}} message={"Could not delete appointment"}/>}
      

    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (
      <Show
      student={props.interview.student}
      interviewer={props.interview.interviewer}
      onDelete={() => transition(CONFIRM)}
      onEdit={() => transition(EDIT)}
      />
    )}

  </article>
  )
}