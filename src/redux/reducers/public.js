

const initialState = {
  tasks: [],
  board: [
    {
      id: 1,
      title: 'Ice Box',
    },
    {
      id: 2,
      title: 'Doing',
    },
    {
      id: 3,
      title: 'Review',
    },
    {
      id: 4,
      title: 'Debug',
    },
    {
      id: 5,
      title: 'Done',
    },
  ],

  categories: [{
    id: 0,
    title: 'دسته بندی'
  },
  ],
  importances: [
    {
      id: 0,
      title: 'اهمیت',
      color: 'dark'
    },
    {
      id: 1,
      title: 'فوری',
      color: 'red-500'
    },
    {
      id: 2,
      title: 'میان مدت',
      color: 'yellow-500'
    },
    {
      id: 3,
      title: 'طولانی مدت',
      color: 'green-500'
    },
  ]
};


export default function publicApi(state = initialState, action) {
  let { type, data } = action;
  switch (type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, {
          id: state.categories.length,
          title: data
        }]
      }
    case 'ADD_TASK':

      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: state.tasks.length,
            pid: 1,
            ...data,
          }
        ]
      }
    case 'CHANGE_COL' :
      let des = state.board.find(itm => itm.title === data.des).id;
      let thisTask = state.tasks.find(itm => itm.id == data.id);
      let otherTasks = state.tasks.filter(itm => itm.id !== data.id);
      let thisNewTask = {
        ...thisTask,
        pid: des
      };
      
      return{
        ...state,
        tasks:[thisNewTask, ...otherTasks]
      }
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(itm => itm.id !== data.id)
      }
    case 'SAVE':
      localStorage.setItem('BoardData', JSON.stringify(state));
      return state
    case 'LOAD_DATA':
      return data


    default:
      return state;
  }
}
