import { call } from 'react-native-reanimated';
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
    case 'add_count':
      return [
        state, 
        {  
          count : action.payload.count
        }
      ];
    case 'add_sum':
      return [
        ...state, 
        {  
          sum : action.payload.sum
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

const addcount = dispatch => {
  return (count) => {
    dispatch({ type: 'add_count', payload: {count} });
    if(callback){
      callback();
    }
  };
};

const addsum = dispatch => {
  return (sum) => {
    dispatch({ type: 'add_score', payload: {sum} });
    if(callback){
      callback();
    }
  };
};

export const { Context, Provider } = CreateDataContext(
  blessedReducer, 
  {addanswer, showanswer,addcount, addsum},
  []
);