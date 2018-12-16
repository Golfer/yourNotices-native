const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_ABORTS':
      return action.payload;
    default:
      return state;
  }
}