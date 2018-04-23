export const REQUEST_REPO_LIST = 'REQUEST_EMPLOYEE_LIST'
export const FETCH_REPO_LIST = 'fetch Repo list'
export const ERROR_REPO_LIST_FETCH = 'error while trying to fetch Repo list'

export const REQUEST_USER_INFO = 'REQUEST_USER_INFO'
export const FETCH_USER_INFO = 'FETCH_USER_INFO'
export const ERROR_USER_FETCH = 'error while trying to fetch User Info'

// For Repo's List
export const requestRepoList = (status) => {
  console.log('request intiated')
  return {
    type: REQUEST_REPO_LIST,
    isFetching: status,
  }
}
export const getAllRepo = (status, repoData) => {
  console.log('fetching employee', status)
  return {
    type: FETCH_REPO_LIST,
    status: status,
    repoData: repoData
  }
}
export const errorForGetAllRepo = (error) => {
  return {
      type: ERROR_REPO_LIST_FETCH,
      error: error
    }
}

// For User Info
export const requestUserInfo = (status) => {
  console.log('request intiated')
  return {
    type: REQUEST_USER_INFO,
    isFetching: status,
  }
}
export const getUserInfo = (status, userData) => {
  console.log('fetching employee', userData)
  return {
    type: FETCH_USER_INFO,
    status: status,
    userData: userData
  }
}
export const errorForUserInfo = (error) => {
  return {
      type: ERROR_USER_FETCH,
      error: error
    }
}
