import { useRef, useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();

   const {
     value:enteredName,
     isValid: enteredNameIsValid,
     hasError:nameInputHasError,
     valueChangeHandler: nameChangeHandler,
     inputBlureHandler: nameBlurHandler, 
     reset: resetNameInput
   } = useInput(value => value.trim() !== '');
  
   const {
    value:enteredEmail,
    isValid: enteredEmailIsValid,
    hasError:EmailInputHasError,
    valueChangeHandler: EmailChangeHandler,
    inputBlureHandler: EmailBlurHandler, 
    reset: resetEmailInput
   } = useInput(value => value.includes('@'));


  
  let valueValid = false;
  if(enteredNameIsValid && enteredEmailIsValid){
    valueValid =true;
   }

   

  const onSupmitHandler =(event)=>{
        
        event.preventDefault();
        if(!enteredNameIsValid){
          return;
        }
        console.log(enteredName);
        resetNameInput();
        resetEmailInput();
      

  }

  const setCurrentClass = nameInputHasError ? 'form-control invalid' : 'form-control' ;
  const setClassemail = EmailInputHasError ? 'form-control invalid' : 'form-control' ;


  // const onBlureHandler =() =>{
  //   setValidtouched(true);
  //   setenteredEmailTouched(true);
  //   if(!setValed){
  //     return;      
  //     }

  // }

  return (
    <form onSubmit={onSupmitHandler}>

      <div className={setCurrentClass}>
        
        <label htmlFor='name'>First Name</label>
        <input onBlur={nameBlurHandler}
         ref={nameInputRef} type='text' id='name' 
         onChange={nameChangeHandler}
          value={enteredName} />
        {nameInputHasError && <p className="error-text">You Must Fill The input</p>}
        <label htmlFor='name'>First Name</label>
        <input onBlur={nameBlurHandler}
         ref={nameInputRef} type='text' id='name' 
         onChange={nameChangeHandler}
          value={enteredName} />
        {nameInputHasError && <p className="error-text">You Must Fill The input</p>}
      </div>

      <div className={setClassemail}>
        <label htmlFor='email'>Your E-Mail</label>
        <input onBlur={EmailBlurHandler} 
          ref={emailInputRef}
          type='email'
          id='email'
          onChange={EmailChangeHandler}
          value={enteredEmail} />

        {EmailInputHasError && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className="form-actions">
      
        <button disabled={!valueValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
