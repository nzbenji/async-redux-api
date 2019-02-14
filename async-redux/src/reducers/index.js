import {combineReducers} from 'redux'

import errorMessage from './error-message'
import posts from './posts'
import waiting from './waiting'

export default combineReducers({
  errorMessage,
  posts, 
  waiting
})