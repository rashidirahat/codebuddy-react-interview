import {useState,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import validateForm from '../utils/validateForm';


const Form2 = ({handleTab}) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [fieldError, setFieldError] = useState({firstNameError:'',lastNameError:'',addressError:''});

  const handleButton = (e)=>{
    e.preventDefault();
    const {name} = e.target;
    if(name == "next-form2"){
      handleTab(name)
    }else if(name == "back-form2"){
      handleTab(name)
    }else{
      const {firstNameError, lastNameError, addressError} = fieldError;
      if(firstNameError == undefined && lastNameError == undefined && addressError == ""){
        dispatch({type:"form2",payload:{firstName,lastName,address}})
      }
       handleTab(name)
    }
  }

  const handleForm = (e)=>{
    e.preventDefault();
    const {name, value} = e.target;
    const error = validateForm(name,value);
    if(name == "first-name"){
      setFirstName(value);
      setFieldError({firstNameError: error});
    }else if(name == "last-name"){
      setLastName(value);
      setFieldError({lastNameError: error});
    }else{
      setAddress(value);
      setFieldError({addressError: error});
    }
  }

  const userData = useSelector((state) => ({
    firstName: state.formReducer.firstName,
    lastName: state.formReducer.lastName,
    address: state.formReducer.address
}));

  useEffect(()=>{
  console.log("userData = ",userData);
    setFirstName(userData.firstName);
    setLastName(userData.lastName);
    setAddress(userData.address);
  },[])

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
  
      <Form style={{ width: '50%', padding: '20px' }}>
  
        <Form.Group className="mb-3" controlId="firstName">
  
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={handleForm} type="text" name="first-name" placeholder="Enter first name" value={firstName} />
          <Form.Text className="text-muted">
          <span style={{ color: "red" }}>{fieldError.firstNameError}</span>
        </Form.Text>
        </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="lastName">
  
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={handleForm} type="text" name="last-name" placeholder="Enter last name" value={lastName} />
          <Form.Text className="text-muted">
          <span style={{ color: "red" }}>{fieldError.lastNameError}</span>
        </Form.Text>
        </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="address">
  
          <Form.Label>Address</Form.Label>
          <Form.Control onChange={handleForm} type="text" name="address" placeholder="Enter your address" value={address} />
          <Form.Text className="text-muted">
          <span style={{ color: "red" }}>{fieldError.addressError}</span>
        </Form.Text>
        </Form.Group>
  
        <div style={{display:'flex', justifyContent: 'space-between' }}>
        <Button variant="primary" type="submit" name="back-form2" style={{ marginRight: '10px' }} onClick={handleButton}>
  
          Back
  
        </Button>
  
  
        <div style={{display:'flex', justifyContent: 'flex-end' }}>
  
          <Button variant="primary" type="submit" name="next-form2" style={{ marginRight: '10px' }} onClick={handleButton}>
  
            Next
  
          </Button>
  
  
          <Button variant="primary" type="submit" name="save-form2" onClick={handleButton}>
  
            Save and Next
  
          </Button>
  
        </div>
        </div>
  
      </Form>
  
    </div>
  
  );
}


export default Form2;

