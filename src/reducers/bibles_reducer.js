const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_BIBLES':
      return action.payload;
    default:
      return state;
  }
}