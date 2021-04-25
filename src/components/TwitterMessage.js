import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    let charNum = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"  onChange={this.handleChange}  value={this.state.message} name="message" id="message" />
        {charNum}
      </div>
    );
  }
}

export default TwitterMessage;
