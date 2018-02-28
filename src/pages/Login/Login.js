/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Form, Segment, Image, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import './Login.css'

class Login extends Component {

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
      return <Redirect to='/select-rate'/>
    }

    return (
      <div>
        <Segment basic>
          <Image as='img' src='/welcome.png' size='medium' centered/>
          <Header as='h4' color='olive' textAlign='center'>Manage your coworking space<br/>hassle-free.</Header>
        </Segment>

        <Segment basic>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input fluid placeholder='Search for name or email' icon='search'/>
            <Form.Button type='submit' color='green' value='checkin' fluid>Sign in</Form.Button>
          </Form>

          <div className='mt-1'>
            <Link to='register' className='as-link float-left'>Register</Link>
            <Link to='signout' className='as-link float-right'>Sign out</Link>
          </div>
        </Segment>
      </div>
    )
  }

}

export default Login
