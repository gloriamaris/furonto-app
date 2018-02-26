import React, { Component } from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import './ExistingUser.css'

class ExistingUser extends Component {

  constructor (props) {
    super(props)
  }

  render  = () => {

    let options = [
       { key: '1', text: 'Hourly - 4 hours', value: 'Hourly' },
       { key: '2', text: 'Daily - 12 hours', value: 'Daily' },
       { key: '3', text: 'Weekly - 1 week', value: 'Weekly' },
       { key: '4', text: 'Executive - 1 month', value: 'Executive' },
       { key: '5', text: 'Open', value: 'Open' }
    ]

    return (
      <div>
        <Form>
          <Form.Input fluid placeholder='Search for a name' icon='search'/>
          <Form.Select fluid options={options} placeholder='Membership Plan' />
          <Button type='submit' color='green' fluid>Log in</Button>
        </Form>
      </div> 
    )

  }

}

export default ExistingUser