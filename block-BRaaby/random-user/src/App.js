import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    this.generateUser();
  }

  generateUser = () => {
    this.setState({
      user: '',
    });
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) =>
        data.results.map((user) => this.setState({ user: user }))
      );
  };
  render() {
    return (
      <div className="user">
        {this.state.user ? (
          <div>
            <img
              src={this.state.user.picture.large}
              alt={this.state.user.name.first}
            />
            <h1>My Name is {this.state.user.name.first}</h1>
            <div className="flex">
              <FontAwesomeIcon icon={faUser} size={'2x'} />
              <FontAwesomeIcon icon={faEnvelopeOpen} size={'2x'} />
              <FontAwesomeIcon icon={faCalendarTimes} size={'2x'} />
              <FontAwesomeIcon icon={faAddressCard} size={'2x'} />
              <FontAwesomeIcon icon={faPhone} size={'2x'} />
              <FontAwesomeIcon icon={faLock} size={'2x'} />
            </div>
            <button onClick={this.generateUser}>Random User</button>
          </div>
        ) : (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
