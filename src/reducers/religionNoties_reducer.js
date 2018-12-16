const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_RELIGION_NOTICES':
      return action.payload;
    default:
      return state;
  }
}