/**
 * Project Name: Furonto App
 *
 * @author Monique Dingding <monique.dingding@gmail.com>
 * Created on February 27, 2018
 */

import React, { Component } from 'react'
import { Button, Card, Header, Divider, Label, Input } from 'semantic-ui-react'
import './BookedUsers.css'

class BookedUsers extends Component {

  constructor (props) {
    super(props)

    this.state = { activeItem: '' }
  }

  getDate = (timestamp) => {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = new Date(timestamp)

    let localeDate = date.toLocaleString({ hour: 'numeric', minute: 'numeric', hour12: true }).split(',')
    let localeTime = localeDate[1].split(' ')
    let time = localeTime[1].substr(0, localeTime[1].length-3)

    return `${months[date.getMonth()]} ${date.getDate()}, ${time} ${localeTime[2]}`
  }

  isHoursExceeded = (checkOut) => {
    let now = Date.now()
    let hours = 0

    hours = (checkOut - now) / 36e5

    return (hours < 0)
  }

  render  = () => {
    const { membershipType } = this.props

    let shortTerms = [
      {
        name: 'Jonalyn Sabas',
        type: 'Hourly',
        checkIn: 1519694100000,
        checkOut: 1519708500000
      },
      {
        name: 'Dua Lipa',
        type: 'Hourly',
        checkIn: 1519703340000,
        checkOut: 1519717740000
      },
      {
        name: 'Anne Rice',
        type: 'Daily',
        checkIn: 1519732140000,
        checkOut: 1519775340000
      },
    ]

    return (
      <div>
        <Header as='h4' textAlign='center'>{ membershipType } Memberships</Header>
        <Divider />
        <Input fluid placeholder='Search for a name' icon='search'/>
        <br />
        <br />

        <Card.Group stackable>
          {
            shortTerms.map((item, key) => {
              return (
                <Card color='orange' key={key}>
                  <Card.Content>
                    <Card.Header>
                      { item.name }
                    </Card.Header>
                    <Card.Meta>
                      <Label color={(item.type === 'Hourly')? 'olive': 'teal'} horizontal>{ item.type }</Label>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content>
                    <Card.Description>
                      <strong>Check in:</strong> { this.getDate(item.checkIn) }
                      <br/> <strong>Check out:</strong> { this.getDate(item.checkOut) }
                      <br/>
                      {
                        (this.isHoursExceeded(item.checkOut))? <span className='text-danger'><em>Hours exceeded!</em></span>: ''
                      }
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Button basic color='green' size='tiny' fluid>Check out</Button>
                  </Card.Content>
                </Card>
              )
            })
          }
        </Card.Group>
      </div>
    )

  }

}

export default BookedUsers
