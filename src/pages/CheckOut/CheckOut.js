/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import BookedUsers from '../BookedUsers/BookedUsers'
import './CheckOut.css'

class CheckOut extends Component {

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

    return <BookedUsers membershipType={activeItem} />
  }

  renderPage = () => {
    return (
      <div>
        <Button color='teal' size='small' basic fluid onClick={this.handleItemClick}>Short-Term</Button>
        <br/>
        <Button color='teal' size='small' basic fluid onClick={this.handleItemClick}>Long-Term</Button>
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

export default CheckOut
