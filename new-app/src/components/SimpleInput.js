import useInput from '../hooks/use-input';

import Input from './Input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');
  
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.includes('@'));
  
  

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
    

    
  };

  return (
    <form onSubmit={formSubmissionHandler}>

        <Input 
        name="name"
        label= "Your Name"
        type="text"
        onChange={nameChangedHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
        errorMessage="Name must not be empty."
        errorType={nameInputHasError}
        >
        </Input>
      
       
        <Input 
        name="email"
        label= "Your Email"
        type="email"
        onChange={emailInputChangeHandler}
        onBlur={emailInputBlurHandler}
        value={enteredEmail}
        errorMessage="Please enter a valid email."
        errorType={emailInputHasError}
        >
        </Input>
      
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
