const initState = {
  projects: [
    { id: 1, title: 'help me find peach', content: 'blan, blah, blah' },
    { id: 2, title: 'collect all the stars', content: 'blan, blah, blah' },
    { id: 3, title: 'egg hunt with yoshi', content: 'blan, blah, blah' },
  ],
}
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created object', action.project)
      return state;
    case 'CREARE_PROJECT_ERROR':
      console.log('create project error', action.err)
      return state
    default: return state;
  }
}
export default projectReducer