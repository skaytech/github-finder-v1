import React, { useEffect, useContext, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, getUser, getRepos, repos, loading } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        <Fragment>
          Hireable:{' '}
          {hireable ? (
            <i className='far fa-check-square bg-success' />
          ) : (
            <i className='far fa-times-circle bg-danger' />
          )}
        </Fragment>
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt=''
              className='round-img'
              style={{ width: '150px' }}
            />
            <h2>{name}</h2>
            <h4>Location: {location}</h4>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>Username: </strong> {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: </strong> {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>Website: </strong> {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers: {followers}</div>
          <div className='badge badge-light'>Following: {following}</div>
          <div className='badge badge-success'>
            Public Repos: {public_repos}
          </div>
          <div className='badge bg-nav'>Public Gists: {public_gists}</div>
        </div>
        <div className='card'>
          <Repos repos={repos} />
        </div>
      </div>
    );
  }
};

export default User;
