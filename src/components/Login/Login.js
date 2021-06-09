import React, { useState, useEffect, useReducer, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../store/auth-context';




// doesnt't need to interact with the component fucntions
const useEmailReducer = (state, action) =>{
  if(action.type === 'USER_INPUT'){
    return {
      value : action.val, 
      isValid : action.val.includes('@')
  
    };

  }

  if(action.type === 'INPUT_BLUR'){
    return {  
      value : state.value, // access to the last value state
      isValid :  true,
  
    };
  }
  //default
  return {
    value : '',
    isValid : false

  };
};

const  usePaswordReducer = (state, action) =>{
  if(action.type === 'USER_INPUT'){
    return {
      value : action.val, 
      isValid : action.val.trim().length > 6,
      
  
    };


  }

  if(action.type === 'INPUT_BLUR'){
    return {  
      value : state.value, // access to the last value state
      isValid :  true,
      
  
    };
  }

  // default
  return{
    value : '',
    isValid : false

  }
}

const Login = (props) => {

  const authCtx = useContext(AuthContext)

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);


  // using UseReducer
  const [emailState, dispatchEmail] = useReducer(useEmailReducer, {
    value : '',
    isValid : null
  });

  const [passwordState, dispatchPassword] = useReducer(usePaswordReducer,{
    value : '',
    isValid : null
  })

  // ​object destructing 
  const {isValid: emailIsvalid} = emailState
  const {isValid : passwordIsvalid} = passwordState

  useEffect(() =>{

   const identifier = setTimeout(() =>{
    console.log('Checking validity')
    setFormIsValid(
      emailIsvalid && passwordIsvalid);
   }, 200)

   return() =>{
     console.log('Clean Up')
     clearTimeout(identifier);
   }
    

  }, [emailIsvalid, passwordIsvalid ])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val:event.target.value})
    
    
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val:event.target.value})
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})

  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
