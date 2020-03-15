import React from 'react';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      text: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const newComment = {
      author: this.state.author,
      text: this.state.text
    };
    this.props.onSubmit(newComment);
    this.setState({
      author: '',
      text: ''
    });
  }

  render() {
    return (
      <div className="add-comment">
        <h2>Leave a comment</h2>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>
              Your name:<br/>
              <input
                required
                name="author"
                type="text"
                value={this.state.author}
                onChange={this.handleUserInput} />
            </label>
          </p>
          <p>
            <label>
              Comment:<br/>
              <textarea
                required
                name="text"
                rows="10"
                value={this.state.text}
                onChange={this.handleUserInput}></textarea>
            </label>
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default AddComment;
