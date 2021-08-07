import React from 'react';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {
      api: '',
      user: 'lcds90',
    };

    this.baseState = this.state;

    this.changeDataJson = this.changeDataJson.bind(this);
    this.handleChangeUser = this.handleChangeUser.bind(this);
  }

  async componentDidMount() {
    const myUser = this.state.user; //Preencha myUser com o seu user do GitHub.
    try {
      const url = `https://api.github.com/users/${myUser}`;
      const response = await fetch(url);
      const dataJson = await response.json();
      this.setState({ api: dataJson });
    } catch (error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    alert('Você ocultou seu perfil');
  }

  changeDataJson(dataJson) {
    this.setState({ api: dataJson });
  }

  handleChangeUser({ target: { name, value } }) {
    //   console.log(target)
    this.setState({ [name]: value });
  }

  handleSubmitUser(e) {
    e.preventDefault();
    this.setState(this.baseState);
  }

  render() {
    const { handleChangeUser, handleSubmitUser } = this;
    const { api: { name, email, bio } = '', api, user } = this.state;

    if (!api) return <p>Loading...</p>;

    const card = (
      <div className='d-flex h-100 flex-column justify-content-center align-items-center'>
        <h1>{name}</h1>
        <span>{email}</span>
        <img className='myPicture' src={api.avatar_url} alt='Avatar' />
        <p>{bio}</p>
      </div>
    );

    const input = (
      <form onSubmit={handleSubmitUser}>
        <div class='container-fluid'>
          <label htmlFor='user' class='form-label'>
            Usuario
          </label>
          <input
            type='text'
            class='form-control'
            id='user'
            aria-describedby='user'
            name='user'
            onChange={handleChangeUser}
            value={user}
          />
        </div>
        <button type='submit' class='btn btn-primary'>
          Submit
        </button>
      </form>
    );

    return (
      <div className='git d-flex flex-row justify-content-center align-items-center'>
        {card}
        {input}
      </div>
    );
  }
}

export default Profile;
