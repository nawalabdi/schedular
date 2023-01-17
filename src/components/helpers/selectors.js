

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
  }
  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer]
  }
}



export function getInterviewersForDay(state, day) {
  const findDay = state.days.find(stateDay => stateDay.name === day);
  
  let result = [];
  
  if (!state.days.length) {
    return result;
  }
  
  if (findDay === undefined) {
    return result;
  }
  
  for (const id of findDay.interviewers) {
    
    result.push(state.interviewers[id])
  }
  console.log(result)
  return result;
}