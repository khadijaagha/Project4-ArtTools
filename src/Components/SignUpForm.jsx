//Setting up component as a CLASS Component
import { Component } from "react"
import { signUp } from '../../src/utilities//users-service'


export default class SignUpForm extends Component {
    //this is a cleaner syntax of the constructor method, and an instance of a class/constructor is an object data type like our signupform component below. 
    //and if we want to access any key from our object or class instance we need to use: this.state.[insert key name]e.g. this.state.name  
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };
// The object passed to setState is merged with the current state object
    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        error: ''
        });
    };
    handleSubmit = async (evt) => {
      //preventDefault() prevents form being submitted to the server which would cause the page to reload, but we dont want that as this is a single page application.
        evt.preventDefault();
        try {
          const {name, email, password} = this.state;
          const formData = {name, email, password}
          const user = await signUp(formData);
          this.props.setUser(user);
        } catch (error) {
          //error occurred probs due to duplicate email
          this.setState({ error: 'Sign Up Failed - Try Again' });
        }

    }



    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
    }
