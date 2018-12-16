import axios from 'axios'

const PAGE_LIMIT_ITEM = 30

export function getReligionNotices(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/positive/religion-notices?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_RELIGION_NOTICES',
          payload: response.data.data
        })
      })
  }
  // axios.get('https://yournotices.herokuapp.com/api/v1/positive/religion-notices?page[number]=' +  this.state.pageNumber + '&page[size]=30')
  // this.setState((prevState) => ({detailsItems: [...prevState.detailsItems, response.data.data], loading: false}) )
}

export function getRodunas(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/positive/rodunas?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_RODUNAS',
          payload: response.data.data
        })
      })
  }
}

export function getBibles(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/positive/bibles?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_BIBLES',
          payload: response.data.data
        })
      })
  }
}


export function getKatekhyzms(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/positive/katekhyzms?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_KATEKHYZMS',
          payload: response.data.data
        })
      })
  }
}

export function getAboutGod(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/positive/about-gods?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_ABOUT_GOD',
          payload: response.data.data
        })
      })
  }
}

// Negative

export function getSymvols(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/negative/symvols?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_SYMVOLS',
          payload: response.data.data
        })
      })
  }
}

export function getAborts(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/negative/aborts?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_ABORTS',
          payload: response.data.data
        })
      })
  }
}

export function getTaties(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/negative/taties?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_TATIES',
          payload: response.data.data
        })
      })
  }
}

export function getYogas(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/negative/yogas?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_YOGAS',
          payload: response.data.data
        })
      })
  }
}

export function getHalloweens(pageNumber=1) {
  return (dispatch) => {
    axios.get('https://yournotices.herokuapp.com/api/v1/negative/halloweens?page[number]='+ pageNumber + '&page[size]=' + PAGE_LIMIT_ITEM)
      .then(response => {
        dispatch({
          type: 'GET_HALLOWEENS',
          payload: response.data.data
        })
      })
  }
}