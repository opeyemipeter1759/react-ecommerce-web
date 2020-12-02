import React from 'react';
import './signin-styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttton.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js'

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    
    this.state= {
      email: '',
      password: ''
    }
  }
  handleSubmit=  async event=>{
    event.preventDefault();
    const {email, password}= this.state;
    try{
      await auth.signInWithEmailAndPassword(email, password);
    this.setState( {email:'', password:''})

    }catch(error){
      console.log(error);
    }

  }

  handleChange = event => {
    const {value,name} = event.target;
    this.setState({[name]: value})
  }

    render() {
      return (
        <div className="sign-in">
          <h2>I already have an account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput label="Email" handleChange={this.handleChange}  type="email" name="email" value={this.state.email} required/>
             <FormInput label = "Password" handleChange={this.handleChange} type="password" name="password" value={this.state.password} required/>

             <div className="buttons">
               <CustomButton type="submit" value="">Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google</CustomButton>
             </div>
           

          </form>
        </div>
      )
    }
}

export default SignIn;