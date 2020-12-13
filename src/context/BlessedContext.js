import CreateDataContext from './CreateDataContext';


const blessedReducer = (state, action) => {
  switch(action.type){
    case 'add_answer':
      return [
        ...state, 
        { 
          id: (action.payload.id).toString(), 
          content: action.payload.content 
        }
      ];
    default:
      return state;
  }
};

const addanswer = dispatch => {
  return (content,id, callback) => {
    dispatch({ type: 'add_answer', payload: {content,id} });
    if (callback){
      callback();
    }
  };
};

export const { Context, Provider } = CreateDataContext(
  blessedReducer, 
  {addanswer},
  []
);