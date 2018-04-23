import { combineReducers } from 'redux'
import {fetchRepo, UserInfo} from '../components/RepoList/repoListReducer'
export default combineReducers({
  fetchRepo,
  UserInfo
});

