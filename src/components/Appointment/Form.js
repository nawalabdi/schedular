import React from "react";
import InterviewerList from "components/InterviewerList";
import Button from "components/Button";
import  { useState } from 'react';



export default function Form(props) {
  const [student, setStudent] = useState(props.student || "");
const [interviewer, setInterviewer] = useState(props.interviewer || null);


const reset = () => {
  setStudent("")
 setInterviewer(null)}

const Cancel = () => {
  reset()
  props.onCancel()
}

  return(<main className="appointment__card appointment__card--create">
  <section className="appointment__card-left">
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="appointment__create-input text--semi-bold"
        value={student}
        type="text"
        onChange={(event) => setStudent(event.target.value)}
        placeholder="Enter Student Name"
      
      />
    </form>
    <InterviewerList 
     onChange={setInterviewer}
     value={interviewer}
     interviewers={props.interviewers}


    />
  </section>
  <section className="appointment__card-right">
    <section className="appointment__actions">
      <Button danger onClick={Cancel}>Cancel</Button>
      <Button confirm onClick={() => props.onSave(student,interviewer)}>Save</Button>
    </section>
  </section>
</main>)
}