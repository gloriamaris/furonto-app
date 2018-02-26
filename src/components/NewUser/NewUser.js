import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'
import './NewUser.css'

class NewUser extends Component {

  constructor (props) {
    super(props)
  }

  render  = () => {

    let options = [
       { key: '1', text: 'Social media', value: 'Social media' },
       { key: '2', text: 'Word of mouth', value: 'Word of mouth' },
       { key: '3', text: 'Internet search', value: 'Internet search' },
       { key: '4', text: 'Making my way downtown', value: 'Making my way downtown' },
    ]

    return (
      <div>
        <Form>
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
          <Button type='submit' color='green' fluid>Create account</Button>
        </Form>
      </div> 
    )

  }

}

export default NewUser