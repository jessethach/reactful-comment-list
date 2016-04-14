import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], action) {
  switch(action.type) {
    case SAVE_COMMENT:
      //Same as wrting state.concat([action.payload]);
      return [ ...state, action.payload ];
  }
  return state;
}
