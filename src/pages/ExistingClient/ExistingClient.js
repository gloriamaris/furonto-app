/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import BookSpace from '../BookSpace/BookSpace'
import './ExistingClient.css'

class ExistingClient extends Component {

  constructor (props) {
    super(props)

    this.state = {
      activeItem: '',
      submitted: ''
    }
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
       { key: '1', text: 'Hourly - 4 hours', value: 'Hourly' },
       { key: '2', text: 'Daily - 12 hours', value: 'Daily' },
       { key: '3', text: 'Weekly - 1 week', value: 'Weekly' },
       { key: '4', text: 'Executive - 1 month', value: 'Executive' },
       { key: '5', text: 'Open', value: 'Open' }
    ]

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input fluid placeholder='Search for a name' icon='search'/>
          <Form.Select fluid options={options} placeholder='Membership Plan' />
          <Form.Button type='submit' color='green' value='checkin' fluid>Check in</Form.Button>
          <Form.Button type='submit' value='cancel' basic fluid onClick={this.handleSubmitClicked}>Cancel</Form.Button>
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

export default ExistingClient
