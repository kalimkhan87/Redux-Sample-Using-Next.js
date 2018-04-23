import * as action from './repoListAction'
import axios from 'axios'

export const fetchGitHubRepos = (repoName) => {
  return (dispatch) => {
    dispatch(action.requestRepoList(false));

   axios.get(`https://api.github.com/users/${repoName}/repos`)
      .then(async response => {
        dispatch(action.getAllRepo(true,response.data));
      })
      .catch((error) => {
        console.log("error", error)
        dispatch(action.errorForGetAllRepo(error));

      })
  }
}

export const fetchGitHubUser = (userName) => {
  return (dispatch) => {
    dispatch(action.requestUserInfo(false));

   axios.get(`https://api.github.com/users/${userName}`)
      .then(async response => {
        dispatch(action.getUserInfo(true,response.data));
      })
      .catch((error) => {
        console.log("error", error)
        dispatch(action.errorForGetAllRepo(error));

      })
  }
}

