import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => { 
  const nameInputRef = useRef();
  const [currentValue, setCurrentValue] = useState('');
  const [validTouched, setValidtouched] = useState();
  
   const setValed = currentValue.trim() !== '';
   const setNamedValidTouched = validTouched && !valid;


  const printValue =(event) =>{
    setCurrentValue(event.target.value);

  }
  
  const setCurrentClass = setNamedValidTouched ? 'form-control invalid' : 'form-control' ;
  const onSupmitHandler =(event)=>{
    event.preventDefault();
    setValidtouched(true);


    

    
    
  //   const entededVVV = nameInputRef.current.value;
  // console.log(entededVVV);
   console.log(currentValue);
   const currentName = nameInputRef.current.value;
   console.log(currentName);
   setCurrentValue('');

  }

  const onBlureHandler =() =>{
    setValidtouched(true);

    if(currentValue.trim() === '' ){
      return setValed(false);      
      }else{
        setValed(true);
      }

  }

  return (
    <form onSubmit={onSupmitHandler}>
      <div className={setCurrentClass}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onBlureHandler} ref={nameInputRef} type='text' id='name' onChange={printValue} value={currentValue} />
        {setNamedValidTouched && <p className="error-text">You Must Fill The input</p>}
      </div>
      <div className="form-actions">
      
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
