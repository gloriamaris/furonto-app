/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import BookSpace from '../BookSpace/BookSpace'
import './NewUser.css'

class NewUser extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeItem: '',
      submitted: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this)
  }

  handleSubmitClicked = (e, { value }) => {
    this.setState({
      submitted: (value === 'cancel')? value: ''
    })
  }

  handleSubmit = (e) => {
    const { submitted } = this.state

    this.setState({
      activeItem: submitted
    })
  }

  renderForm = () => {
    const { activeItem } = this.state

    if (activeItem === '') {
      return this.renderPage()
    }

    return <BookSpace />
  }

  renderPage = () => {
    let options = [
       { key: '1', text: 'Social media', value: 'Social media' },
       { key: '2', text: 'Word of mouth', value: 'Word of mouth' },
       { key: '3', text: 'Internet search', value: 'Internet search' },
       { key: '4', text: 'Making my way downtown', value: 'Making my way downtown' },
    ]

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input fluid placeholder='First name' />
            <Form.Input fluid placeholder='Last name' />
          </Form.Group>
          <Form.Group widths='equal'>
            <Form.Input fluid placeholder='Phone number' />
            <Form.Input fluid placeholder='E-mail (optional)' />
          </Form.Group>
          <Form.Field>
            <Form.Select fluid options={options} placeholder='How did you hear about us?' />
          </Form.Field>
          <Form.Button type='submit' color='green' value='signup' fluid>Create account</Form.Button>
          <Form.Button type='submit' color='grey' value='cancel' onClick={this.handleSubmitClicked} basic fluid>Cancel</Form.Button>
        </Form>
      </div>
    )
  }

  render  = () => {
    return (
      <div>
        { this.renderForm() }
      </div>
    )

  }

}

export default NewUser
