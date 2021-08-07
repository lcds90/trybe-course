import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Connections from './Connections';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfile: true,
    };
    this.changeProfile = this.changeProfile.bind(this);
  }

  changeProfile() {
    const { showProfile } = this.state;

    this.setState({ showProfile: !showProfile });
  }

  render() {
    const { state: { showProfile }, changeProfile } = this;
    return (
      <main>
        <div className='gitNetwork d-flex flex-column justify-content-center'>
          {showProfile ? <Profile /> : null}
          <div className='central d-flex justify-content-center'>
            <button
              className='btn btn-dark align-self-center'
              type='button'
              onClick={() => changeProfile()}
            >
              Mostrar / Ocultar Perfil
            </button>
          </div>
          <Connections />
        </div>
      </main>
    );
  }
}

export default Exercise;
