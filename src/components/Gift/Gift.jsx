import React, { Component } from 'react'
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap'

class Gift extends Component {
  state = {
    person: '',
    present: ''
  }

  // onInputChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  render() {
    return (
      <div>
        Gift
        <Form>
          <FormGroup>
            <ControlLabel>Person</ControlLabel>
            <FormControl
              name="person"
              className="input-person"
              onChange={e => this.setState({ person: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Present</ControlLabel>
            <FormControl
              name="present"
              className="input-present"
              onChange={e => this.setState({ present: e.target.value })}
            />
          </FormGroup>
        </Form>
        <Button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >Remove Gift</Button>
      </div>
    )
  }
}

export default Gift
