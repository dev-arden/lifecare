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
    case 'show_answer':
      return [
        ...state, 
        {  
          content: action.payload.content,
          id: (action.payload.id).toString(),
          score: action.payload.content *  action.payload.volume,
          volume : action.payload.volume
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

const showanswer = dispatch => {
  return (content,id,score,volume) => {
    dispatch({ type: 'show_answer', payload: {content, id, score, volume} });

  };
};

export const { Context, Provider } = CreateDataContext(
  blessedReducer, 
  {addanswer, showanswer},
  []
);