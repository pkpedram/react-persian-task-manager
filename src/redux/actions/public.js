
const publicApi = {
  addTask: (data) => (dispatch) => {
    dispatch({type: 'ADD_TASK', data});
  },
  deleteTask: (data) => (dispatch) => {
    dispatch({type: 'DELETE_TASK', data})
  },
  addCategory: (data) => (dispatch) => {
    dispatch({type: 'ADD_CATEGORY', data});
  },
  changeCol: (data) => (dispatch) => {
    dispatch({type: 'CHANGE_COL', data})
  },
  saveChanges: () => (dispatch) => {
    dispatch({type: 'SAVE', data: {}})
  },
  loadData: () => (dispatch) => {
    let data = JSON.parse(localStorage.getItem('BoardData'));
    dispatch({type: 'LOAD_DATA', data});
  },
};

export default publicApi;
