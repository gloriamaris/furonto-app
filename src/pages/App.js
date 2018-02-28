/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'

class App extends Component {
  render = () => {
    const { children } = this.props

    return (
      <div>
        { children }
      </div>
    )
  }
}

export default App
