import {useState, useEffect} from 'react';
import { useDispatch,useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validateForm from '../utils/validateForm';

const Form1 = ({handleTab}) =>{
  const dispatch = useDispatch();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [fieldError, setFieldError] = useState({emailError:'',passwordError:''});

  const handleButton = (e)=>{
    e.preventDefault();
    const {name} = e.target;
    if(name == "next-form1"){
      handleTab(name)
    }else{
      const {emailError,passwordError} = fieldError;
     // console.log(emailError, passwordError);
      if(passwordError == ""){
        //console.log("submit m",emailId, password);
        dispatch({type:"form1",payload:{emailId,password}})
      }
      handleTab(name)
    }
  }

  const handleForm = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const error = validateForm(name,value);
    if(name == "email-type"){
      console.log(value,name);
      setEmailId(value);
      setFieldError({emailError: error});
    }else{
      setPassword(value);
      setFieldError({passwordError: error});
    }
  }

  const userData = useSelector((state) => ({
    email: state.formReducer.email,
    password: state.formReducer.password
}));

  useEffect(()=>{
  console.log("userData = ",userData);
  setEmailId(userData.email);
  setPassword(userData.password);
  },[])
  

  return (
  

    <div style={{display: 'flex', justifyContent: 'center', }}>
  
      <Form style={{ width: '50%', padding: '20px' }}>
  
        <Form.Group className="mb-3" controlId="formBasicEmail" >
  
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={handleForm} type="email" name="email-type" placeholder="Enter email" value={emailId} />
          <Form.Text className="text-muted">
          <span style={{ color: "red" }}>{fieldError.emailError}</span>
        </Form.Text>
  
        </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
  
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={handleForm} type="password" name="password-type" placeholder="Password" value={password} />
          <Form.Text className="text-muted">
          <span style={{ color: "red" }}>{fieldError.passwordError}</span>
        </Form.Text>
        </Form.Group>
  
  
        <Button variant="primary" type="submit" name="next-form1" style={{ marginRight: '10px' }} onClick={handleButton}>
  
          Next
  
        </Button>
  
  
        <Button variant="primary" type="submit" name="save-form1" onClick={handleButton}>
  
          Save and Next
  
        </Button>
  
      </Form>
  
    </div>
  
  );
} 


export default Form1;

