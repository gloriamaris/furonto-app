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

    let options = [
       { key: '1', text: 'Social media', value: 'Social media' },
       { key: '2', text: 'Word of mouth', value: 'Word of mouth' },
       { key: '3', text: 'Internet search', value: 'Internet search' },
       { key: '4', text: 'Making my way downtown', value: 'Making my way downtown' },
    ]

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