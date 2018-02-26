import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ExistingUser from '../ExistingUser/ExistingUser'
import NewUser from '../NewUser/NewUser'

import './BookSpace.css'

class BookSpace extends Component {

  constructor (props) {
    super(props)

    this.state = { activeItem: '' }
  }

  handleItemClick = (e) => {
    this.setState({ activeItem: e.target.innerText })
  }

  renderForm = (activeItem) => {

    if (activeItem === '') {
      return this.renderPage()
    }

    return (activeItem === 'Existing User')? <ExistingUser />: <NewUser />
  }

  renderPage = () => {

    return (
      <div>
        <Button color='olive' size='small' basic fluid onClick={this.handleItemClick}>Existing User</Button>
        <br/>
        <Button color='olive' size='small' basic fluid onClick={this.handleItemClick}>New Account</Button>
      </div> 
    )
  }

  render  = () => {
    const { activeItem } = this.state

    return (
      <div>
      {
        this.renderForm(activeItem)
      }
      </div>
    )

  }

}

export default BookSpace