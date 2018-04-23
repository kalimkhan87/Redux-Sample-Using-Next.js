import React from 'react'
import withRedux from 'next-redux-wrapper'

import RepoList from '../components/RepoList'
import { initStore } from '../libs/store'


class Index extends React.Component{
  constructor(props, context) {
    super(props, context)
    this.state = {
      repoName :props.value
    }
  }

  render() {
    return (
        <RepoList />
    )
  }
}

export default withRedux(initStore, null)(Index)
