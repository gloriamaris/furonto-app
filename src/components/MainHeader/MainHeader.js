/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 28, 2018
 */

import React, { Component } from 'react'
import { Segment, Image, Divider } from 'semantic-ui-react'

class MainHeader extends Component {
  render  = () => {
    return (
      <div>
        <Segment basic>
          <Image as='img' src='/furonto-logo.png' size='small' centered/>
          <Divider />
        </Segment>
      </div>
    )
  }

}

export default MainHeader
