import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, searchUsers, users } = githubContext;
  const { showAlert } = alertContext;

  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter a valid value', 'danger');
    } else {
      searchUsers(text);
    }
  };

  const onClearClick = () => {
    setText('');
    clearUsers();
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          placeholder='Search Github Users...'
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-primary btn-block' onClick={onClearClick}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
