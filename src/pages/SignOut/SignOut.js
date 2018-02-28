/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 28, 2018
 */

import React, { Component } from 'react'
import { Form, Segment, Header, Label, Table, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './SignOut.css'

class SignOut extends Component {

  constructor (props) {
    super(props)

    this.state = {
      btnValue: ''
    }
  }

  handleSubmit = (e) => {
    const { submit } = e.target

    if (submit.value === 'Search') {
      this.setState({
        isFound: true
      })
    } else {
      this.setState({
        isCheckout: true
      })
    }
  }

  renderSearch = () => {
    return (
      <div>
        <Header as='h4' color='olive' textAlign='center'>Enter e-mail address or name:</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input fluid placeholder='hello@furonto.com' icon='search'/>
          <Form.Button type='submit' color='green' value='checkin' basic fluid>Search</Form.Button>
        </Form>
      </div>
    )
  }

  renderReceipt = () => {
    const { isFound } = this.state

    if (isFound) {
      return (
        <Table size='small'>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label floated='left' color='green' ribbon>Hourly</Label>
                <span>Annie Santos</span>
              </Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>Time in:</Table.Cell>
              <Table.Cell>Feb 28, 9:00 AM</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>Time out:</Table.Cell>
              <Table.Cell>Feb 28, 1:00 PM</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>Total amount:</Table.Cell>
              <Table.Cell>PHP 120.00</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      )
    }
  }

  renderComponent = () => {
    const { isFound, isCheckout  } = this.state
    let btnName = (isFound)? 'Sign out':'Search'

    if (isCheckout) {
      return (
        <div>
          <Header as='h4' color='olive' textAlign='center'>Thank you.</Header>
          <Message positive>
            <p>Annie Santos has now successfully checked out.</p>
          </Message>
          <Link to='/' className='as-link float-right'>Go back to Homepage</Link>
        </div>
      )
    }

    return (
      <div>
          <Header as='h4' color='olive' textAlign='center'>Enter e-mail address or name:</Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Input fluid placeholder='hello@furonto.com' icon='search'/>
            {
              this.renderReceipt()
            }
            <Form.Button type='submit' name='submit' color='green' value={btnName} basic={!isFound} fluid>{ btnName }</Form.Button>
          </Form>
      </div>
    )
  }

  render  = () => {

    return (
      <div>
        <Segment basic>
        {
          this.renderComponent()
        }
      </Segment>
      </div>
    )
  }

}

export default SignOut
