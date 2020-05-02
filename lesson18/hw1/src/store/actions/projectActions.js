// export const createProject = project => {
//   return {
//     type: 'ADD_PROJECT',
//     project: project,
//   }
// };

export const createProject = project => {
  return (dispatch, getState) => {
    //async call to database
    dispatch({type: 'CREATE_PROJECT', project})
  }
};