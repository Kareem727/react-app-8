import { useRef, useState } from "react";

const SimpleInput = (props) => {
  
  
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const [enteredName, setCurrentName] = useState('');
  const [validTouched, setValidtouched] = useState(true);
  
  const setValed = enteredName.trim() !== '';
  const setNamedValidTouched = validTouched && !setValed;
  const setCurrentClass = setNamedValidTouched ? 'form-control invalid' : 'form-control' ;

  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  const setValidEmail = enteredEmail.includes('@');
  const setEmailisInvalid = !setValidEmail && enteredEmailTouched;
  const setClassemail = setEmailisInvalid ? '':'';

  
  let valueValid = false;
  if(enteredName){
    valueValid =true;
   }

   const printemail =(event)=>{
     setEnteredEmail(event.target.value);
   }




  const printValue =(event) =>{
    setCurrentName(event.target.value);

  }
  

  const onSupmitHandler =(event)=>{
    event.preventDefault();
    setValidtouched(false);
    setenteredEmailTouched(false);

   const enteredName = nameInputRef.current.value;
   console.log(enteredName);
   const enteredEmail = emailInputRef.current.value;
   console.log(enteredEmail);
   setEnteredEmail('');

  }

  const onBlureHandler =() =>{
    setValidtouched(true);
    setenteredEmailTouched(true);
    if(!setValed){
      return;      
      }

  }

  return (
    <form onSubmit={onSupmitHandler}>

      <div className={setCurrentClass}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onBlureHandler} ref={nameInputRef} type='text' id='name' onChange={printValue} value={enteredName} />
        {setNamedValidTouched && <p className="error-text">You Must Fill The input</p>}
      </div>

      <div className={setCurrentClass}>
        <label htmlFor='email'>Your E-Mail</label>
        <input onBlur={onBlureHandler} 
          ref={emailInputRef}
          type='email'
          id='email'
          onChange={printemail}
          value={enteredEmail} />

        {setNamedValidTouched && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className="form-actions">
      
        <button disabled={!valueValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
