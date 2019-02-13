import request from 'superagent'

export const REQUEST_POSTS = 'REQUEST_POSTS'

export const requestPost = () => {
  return {
    type: REQUEST_POSTS
  }
}

export function fetchPosts (api) {
  return (dispatch) => {
    dispatch(requestPost())
    return request 
      .get(`api/v1/api`)
      .then(res => {
        console.log(res)
      })
  }
}