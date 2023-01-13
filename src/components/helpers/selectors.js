
// const state = {
//   days: [
//     {
//       id: 1,
//       name: "Monday",
//       appointments: [1, 2, 3]
//     },
//     {
//       id: 2,
//       name: "Tuesday",
//       appointments: [4, 5]
//     }
//   ],
//   appointments: {
//     "1": { id: 1, time: "12pm", interview: null },
//     "2": { id: 2, time: "1pm", interview: null },
//     "3": {
//       id: 3,
//       time: "2pm",
//       interview: { student: "Archie Cohen", interviewer: 2 }
//     },
//     "4": { id: 4, time: "3pm", interview: null },
//     "5": {
//       id: 5,
//       time: "4pm",
//       interview: { student: "Chad Takahashi", interviewer: 2 }
//     }
//   }
// };


//  export function getAppointmentsForDay(state, day) {
//   const filteredAppointments = [];
//   let dayObj = state.days.find(d => d.name === day)
//   if (!dayObj) return [];
//   dayObj.appointments.forEach(appointmentId => {
//     filteredAppointments.push(state.appointments[appointmentId])
//   });
//   return filteredAppointments
// }

export function getAppointmentsForDay(state, day) {
  const results = [];
  //finding the day object in our state.days array 
  const dayObj = state.days.find(d => d.name === day);

  if (!dayObj) {
    return [];
  }

  for (let id of dayObj.appointments) {
    results.push(state.appointments[id]);
  }
  return results;
}


export function getInterview(state, interview) {
  if (!interview) {
    return null;
  } else {
    console.log(state)
    const interviewerInfo = state.interviewers[interview.interviewer]
    
    return {
      student: interview.student,
      interviewer: interviewerInfo
    };
  }
}
