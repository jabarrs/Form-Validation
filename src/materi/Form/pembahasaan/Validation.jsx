import React from 'react';
const Input = ({ label, type, name, onChange }) => {
  return (
    <div>
      <label> {label}: </label>
      <br />
      <input type={type} name={name} onChange={(e) => onChange(e.target.value)} />
      <br />
    </div>
  );
};

const ShowErrors = ({ errors }) => {
  return (
    <ul style={{ color: 'red', marginLeft: '-20px' }}>
      {errors.map((errors, i) => (
        <li key={i}>{errors}</li>
      ))}
    </ul>
  );
};

class Validation extends React.Component {
  state = {
    email: '',
    username: '',
    password: '',
    age: '',
    errors: [],
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, username, password, age } = this.state;

    let message = [];

    if (email.length === 0) {
      message = [...message, 'Email tidak boleh kosong'];
    }

    if (username.length === 0) {
      message = [...message, 'Username tidak boleh kosong'];
    }

    if (password.length === 0) {
      message = [...message, 'Password tidak boleh kosong'];
    }
    if (age.length === 0) {
      message = [...message, 'Age tidak boleh kosong'];
    }

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())) {
      message = [...message, 'Email tidak valid'];
    }

    if (password.length < 8) {
      message = [...message, 'Password tidak valid'];
    }

    if (message.length > 0) {
      this.setState({
        errors: message,
      });
    } else {
      alert(`
        email : ${this.state.email}
        username : ${this.state.username}
        password : ${this.state.password}
        age : ${this.state.age}
    `);
      this.setState({
        errors: [],
      });
    }
  };
  render() {
    const style = {
      width: '400px',
      margin: '100px auto 0',
      border: '1px solid black',
      padding: '10px',
    };
    return (
      <div style={style}>
        {this.state.errors && <ShowErrors errors={this.state.errors} />}
        <h4>Form Registration</h4>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" name="email" label="Email" onChange={(value) => this.setState({ email: value })} />
          <Input type="password" name="password" label="Password" onChange={(value) => this.setState({ password: value })} />
          <Input type="text" name="username" label="Username" onChange={(value) => this.setState({ username: value })} />
          <Input type="text" name="age" label="Age" onChange={(value) => this.setState({ age: value })} />
          <br />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default Validation;
