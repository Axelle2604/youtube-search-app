import React, { Component } from 'react';
import './searchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  onChangeEvent(e) {
    this.setState({
      value: e.target.value,
    });
    this.props.onVideoSearch(e.target.value);
  }

  render() {
    return (
      <div className="searchBar">
        <input
          type="text"
          onChange={this.onChangeEvent.bind(this)}
          placeholder="Tapez votre recherche"
        />
      </div>
    );
  }
}

export default SearchBar;
