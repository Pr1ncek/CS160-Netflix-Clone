import React from 'react';
import './searchbar.css';

class Searchbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    window.location.assign("search?keyword=" + this.state.value)
    event.preventDefault();
  }

  render() {
    return (
        
        <div class="searchbar">
        <div className="btn btn-danger">
      <form onSubmit={this.handleSubmit}>
        <input id = "searchbar" type="text" size="70" value={this.state.value} onChange={this.handleChange} />
        <input id = "searchButton" type="submit" value="Search" />
      </form>
        </div>
        </div>
    );
  }
}

export default Searchbar;
