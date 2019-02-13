import {REQUEST_POSTS} from '../actions'

const initialState = false

const waiting = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_POSTS:
      return true
    default:
      return state
  }
}

export default waiting