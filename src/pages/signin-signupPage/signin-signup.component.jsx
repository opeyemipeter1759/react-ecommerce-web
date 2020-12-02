import react from 'react';
import './signin-signup.scss';

import SignIn from '../../components/signin/sign-in.component';
import SignUp from '../../components/signup/signup.component'

const SignInSignUp =()=>(
<div className="signin-signup">
  <SignIn/>
  <SignUp/>
</div>

)

export default SignInSignUp;