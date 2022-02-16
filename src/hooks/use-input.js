
import {useState} from 'react'

const useInput = (validateValue) =>{
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(true);
    
    const valueIsValid = validateValue(enteredValue);
    const hasError = isTouched && !valueIsValid;
   
    const valueChangeHandler =(event) =>{
        setEnteredValue(event.target.value);
    
      }

      const inputBlureHandler = (event) =>{
         setIsTouched(true);
      }
      
      const reset = () =>{
      setEnteredValue('');
      setIsTouched(false);

      }
       
    return {
 value: enteredValue,
  hasError , 
  valueChangeHandler,
  inputBlureHandler ,
   isValid: valueIsValid,
   reset 
};
};

export default useInput;