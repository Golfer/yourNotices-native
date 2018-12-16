const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_TATIES':
      return action.payload;
    default:
      return state;
  }
}