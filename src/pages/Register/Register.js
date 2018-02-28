/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Form, Segment, Header } from 'semantic-ui-react'
import { Redirect } from 'react-router'
import './Register.css'

class Register extends Component {

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

    let options = [
       { key: '1', text: 'Social media', value: 'Social media' },
       { key: '2', text: 'Word of mouth', value: 'Word of mouth' },
       { key: '3', text: 'Internet search', value: 'Internet search' },
       { key: '4', text: 'Making my way downtown', value: 'Making my way downtown' },
    ]

    if (isRedirect) {
      return <Redirect to='/login'/>
    }

    return (
      <div>
        <Segment basic>
          <Header as='h4' color='olive' textAlign='center'>Hello, please enter your details.</Header>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid placeholder='Full name' />
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Input fluid placeholder='E-mail address' />
            </Form.Group>
            <Form.Field>
              <Form.Select fluid options={options} placeholder='How did you hear about us?' />
            </Form.Field>
            <Form.Button type='submit' color='green' value='signup' onClick={this.handleItemClick} fluid>Register</Form.Button>
          </Form>
        </Segment>
      </div>
    )

  }

}

export default Register
