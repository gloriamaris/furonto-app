/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 28, 2018
 */

import React, { Component } from 'react'
import { Segment, Button, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import './Rates.css'

class Rates extends Component {

  constructor (props) {
    super(props)

    this.state = {
      isRedirect: false
    }
  }

  handleSubmit = (e) => {
    this.setState({ isRedirect: true })
  }

  render  = () => {
    const { isRedirect } = this.state

    if (isRedirect) {
      return <Redirect to='/'/>
    }

    return (
      <div>
        <Segment basic>
          <Header as='h4' color='olive' textAlign='center'>Select membership rate:</Header>

          <Button color='teal' basic fluid onClick={this.handleSubmit}>Hourly</Button>
          <br/>
          <Button color='purple' basic fluid onClick={this.handleSubmit}>Daily</Button>
          <br/>
          <Button color='blue' basic fluid onClick={this.handleSubmit}>Weekly</Button>
          <br/>
          <Button color='orange' basic fluid onClick={this.handleSubmit}>Monthly</Button>
          <br/>
          <Button color='green' basic fluid onClick={this.handleSubmit}>Executive</Button>
        </Segment>
      </div>
    )
  }

}

export default Rates
