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
    case 'add_score':
      return [
        state, 
        {  
          id: (action.payload.id).toString(),
          finalscore : action.payload.scoreone + action.payload.scoretwo + action.payload.scorethree + action.payload.scorefour,
          scoreone : action.payload.scoreone,
          scoretwo : action.payload.scoretwo,
          scorethree : action.payload.scorethree,
          scorefour : action.payload.scorefour 
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

const addscore = dispatch => {
  return (id, scoreone, scoretwo, scorethree, scorefour, finalscore) => {
    dispatch({ type: 'add_score', payload: {id, scoreone, scoretwo, scorethree, scorefour, finalscore} });

  };
};

export const { Context, Provider } = CreateDataContext(
  blessedReducer, 
  {addanswer, showanswer,addscore},
  []
);