import {TOGGLE_ADD_PET} from '../actions';

const toggleAddPetReducer = (state=false, action) => {
  if (action.type === TOGGLE_ADD_PET){
    if (state === false){
      return true;
    }
    else {
      return false;
    }
  }
  return state;
}

export default toggleAddPetReducer;