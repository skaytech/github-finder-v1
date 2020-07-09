import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.showAlert('Please enter a valid value', 'danger');
    } else {
      this.props.searchUsers(this.state.text);
    }
  };

  clearUsers = () => {
    this.setState({ text: '' });
    this.props.clearUsers();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className='form'>
          <input
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.onChange}
            placeholder='Search Github Users...'
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {this.props.showClear && (
          <button
            className='btn btn-primary btn-block'
            onClick={this.clearUsers}
          >
            Clear
          </button>
        )}
      </div>
    );
  }
}

export default Search;
