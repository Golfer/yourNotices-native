const initialState = []

export default function (state={}, action){
  switch (action.type) {
    case 'GET_ABOUT_GOD':
      return action.payload;
    default:
      return state;
  }
}