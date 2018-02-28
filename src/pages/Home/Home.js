/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Segment, Container } from 'semantic-ui-react'
import MainHeader from '../../components/MainHeader/MainHeader'
import './Home.css'

class Home extends Component {

  render  = () => {
    const { children } = this.props

    return (
      <div>
        <Segment size='massive' basic>
          <Container>
            <MainHeader />
            { children }
          </Container>
        </Segment>
      </div>
    )

  }

}

export default Home
