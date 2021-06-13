import React from 'react'

function Input(props) {

    const InputClasses = props.errorType
    ? 'form-control invalid'
    : 'form-control';

  return(    
       <div className={InputClasses}>
       <label htmlFor={props.name}>{props.label}</label>
        <input 
        type={props.type}
        id={props.name}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        />
        {props.errorType && (
          <p className='error-text'>{props.errorMessage}</p>
        )}
       </div>
        

 )

}

export default Input;
