// export const createProject = project => {
//   return {
//     type: 'ADD_PROJECT',
//     project: project,
//   }
// };

import { firestore } from "firebase";

export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //async call to database
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authFirstName: 'Net',
      authLastName: 'Ninja',
      authId: 12345,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch(err => {
      dispatch({type: 'CREARE_PROJECT_ERROR', err})
    });
  }
};