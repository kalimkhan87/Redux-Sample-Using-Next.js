import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {fetchGitHubRepos, fetchGitHubUser} from './repoListActionCreator'

//for interval when user stop typing
const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;


class RepoList extends Component{


  constructor(props, context) {
    super(props, context)
    this.state = {
      repoName: props.value,
      repoData: []
    }
  }
  getInitialProps() {

  }

  componentWillMount() {
    this.timer = null;
  }
  triggerChange = () => {
    const { repoName } = this.state;
    this.props.fetchGitHubRepos(repoName);
    this.props.fetchGitHubUser(repoName);
  }

  changeRepoName = (e) => {
    e.preventDefault()
    clearTimeout(this.timer);
    this.setState({ repoName:e.target.value })
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL)
    console.log(this.state.repoName)
  }
  render() {
    let RepoList = this.props.repoData,
        isLoading = this.props.repoData.length > 0 ? false : true,
        {avatar_url, bio, name} = this.props.userData
    return (
      <div className="container">
        <div className="repoInfo">
          <input type="text" value={this.state.value} onChange={this.changeRepoName}></input>
          <img src={avatar_url} alt=""/>
          <br/>
          <p>{name}</p>
          <p>{bio}</p>
        </div>
        <table>
          <tbody>
            <tr>
              <th className="heading repoId">Id</th>
              <th className="heading repoName">Repo Title</th>
              <th className="heading repoOwner">Owner</th>
              <th className="heading repoStarsCount">Stars</th>
              <th className="heading repoStarsCount">Created At</th>
          </tr>
          {RepoList.map((list, index) => (
            <tr key={list.id}>
              <td className="heading repoId">{list.id}</td>
              <td className="heading repoName">{list.name}</td>
              <td className="heading repoOwner">{list.owner.login}</td>
              <td className="heading repoStarsCount">{list.stargazers_count}</td>
              <td className="heading repoStarsCount">{list.created_at}</td>
            </tr>
            ))}
          </tbody>
        </table>

      <style jsx>{`
        h1, a {
          font-family: "Arial";
        }

        ul {
          padding: 0;
        }
        table{
          width:100%;
        }
        li {
          list-style: none;
          float:left;
          width:100%;
        }
        .container{
          width: 100%;
          margin: 0 auto;
          max-width: 980px;
        }
        .heading{
          padding: 10px 40px;
          text-align:center;
          border: 1px solid #ccc;
        }
        .repoInfo{
          width:50%;
          margin:0 auto;
          text-align:center;
        }
        .repoInfo input{
          width: 100%;
          padding: 10px;
          margin:40px 0;
        }
        .repoInfo img{
          width: 100px;
        }
        .repoId{
          width: 20%

        }
        .repoName{
          width: 50%;
        }
        .repoOwner, repoStarsCount,repoStarsCount{
          width:10%
        }
      `}</style>

      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchGitHubRepos: bindActionCreators(fetchGitHubRepos, dispatch),
    fetchGitHubUser: bindActionCreators(fetchGitHubUser, dispatch)
  }
}
const mapStateToProps = (state) => {
  return {
    repoData: state.fetchRepo.repoData,
    userData: state.UserInfo.userInfo
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(RepoList)
