import React, { Component } from 'react'
import { Button, Segment, Image, Container, Divider, Header } from 'semantic-ui-react'
import BookSpace from '../BookSpace/BookSpace'
import './Home.css'

class Home extends Component {

  constructor (props) {
    super(props)

    this.state = { activeItem: 'Book a space' }
  }

  handleItemClick = (e) => {
    this.setState({ activeItem: e.target.innerText })
  }

  renderForm = (activeItem) => {
    return (activeItem === 'Book a space')? <BookSpace />: ''
  }

  render  = () => {
    const { activeItem } = this.state

    return (
      <div className='home-page'>
        <Segment size='massive' basic>
          <Container>
            <Image as='img' src='/furonto-logo.png' size='small' centered/>
            <Divider />
            <Header as='h6' color='olive' textAlign='center'>Manage your coworking space<br/>hassle-free.</Header>
            <Button.Group size='large' widths={2}>
              <Button basic color='grey' positive={(activeItem === 'Book a space')} onClick={this.handleItemClick}>Book a space</Button>
              <Button.Or/>
              <Button basic color='grey' positive={(activeItem === 'Check out')} onClick={this.handleItemClick}>Check out</Button>
            </Button.Group>

            <Segment basic clearing>
              {
                this.renderForm(activeItem)
              }
            </Segment>
          </Container>
        </Segment>
      </div> 
    )

  }

}

export default Home