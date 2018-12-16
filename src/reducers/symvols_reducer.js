const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_SYMVOLS':
      return action.payload;
    default:
      return state;
  }
}