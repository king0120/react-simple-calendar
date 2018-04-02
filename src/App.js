import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import Calendar from './components/Calendar'
import './reset.css'
import 'semantic-ui-css/semantic.min.css'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700');

  html{
    font-family: 'Open Sans', sans-serif;
  }
`

class App extends Component {
  render () {
    return (
      <Router>
        <Calendar />
      </Router>
    )
  }
}

export default App
