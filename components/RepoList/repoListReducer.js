import {
  REQUEST_REPO_LIST, FETCH_REPO_LIST, ERROR_REPO_LIST_FETCH,
  REQUEST_USER_INFO, FETCH_USER_INFO, ERROR_USER_FETCH
} from './repoListAction';
// For Repo List
export const fetchRepo = (state = { isFetching: false, status: false, repoData: [] }, action) => {
  switch (action.type) {
    case REQUEST_REPO_LIST:
     return {
       ...state,
       isFetching: action.isFetching
     }
    case FETCH_REPO_LIST:
      return {
        ...state,
        isFetching: action.isFetching,
        repoData: action.repoData,
        status:action.status
      }
    default:
     return state;
  }
};
// For User Info
export const UserInfo = (state = {isFetching:false,status:false, userInfo:{}}, action) => {
  switch (action.type) {
    case REQUEST_USER_INFO:
     return {
       ...state,
       isFetching: action.isFetching
     }
    case FETCH_USER_INFO:
      return {
        ...state,
        isFetching: action.isFetching,
        userInfo: action.userData,
        status:action.status
      }
    default:
     return state;
  }
};
