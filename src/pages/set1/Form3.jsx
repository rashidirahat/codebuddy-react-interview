import {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import Form from 'react-bootstrap/Form';
import validateForm from '../utils/validateForm';

const Form3 = ({handleTab}) => {
    const dispatch = useDispatch();
    const [formUserData, setFormUserData] = useState(null);
    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [fieldError, setFieldError] = useState({codeError:'',phoneNumberError:''});
    const [checkbox, setCheckbox] = useState(true);

    const formData = useSelector((state) => ({
      email: state.formReducer.email,
      password: state.formReducer.password,
      firstName: state.formReducer.firstName,
      lastName: state.formReducer.lastName,
      address: state.formReducer.address,
      code: state.formReducer.code,
      phoneNumber: state.formReducer.phoneNumber,
    
  }));

    const handleButton = (e)=>{
        e.preventDefault();
        const {name} = e.target;
        if(name == 'back-form3'){
          handleTab(name)
        }else{
            const {codeError, phoneNumberError} = fieldError;
             if(codeError == undefined && phoneNumberError == ""){
               dispatch({type:"form3",payload:{countryCode,phoneNumber}})
             }
             submitForm();
        }
        
      }

      const submitForm = () =>{
      let obj =   {
          emailId: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          countryCode: formData.code,
          phoneNumber: formData.phoneNumber
        }
        const request = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(obj)
      };

      fetch('https://codebuddy.review/submit', request)
        .then(response => response.json())
        .then(data => setFormUserData(data));
      }
    
      const handleForm = (e)=>{
        e.preventDefault();
        const {name, value} = e.target;
        console.log(value, name);
        if(name == "country-code"){
          setCountryCode(value);
          const error = validateForm(name,value);
          setFieldError({codeError: error});
        }else{
          setPhoneNumber(value);
          const error = validateForm(name,value);
          setFieldError({phoneNumberError: error});
        }
      }


    
      useEffect(()=>{
      console.log("userData = ",formData);
        setCountryCode(formData.code);
        setPhoneNumber(formData.phoneNumber);
      },[])

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Form style={{ width: '50%', padding: '20px' }}>
          <Form.Group className="mb-3" controlId="countryCode">
            <Form.Label>Country Code</Form.Label>
            <Form.Select onChange={handleForm} name="country-code" aria-label="country-code">
              <option>Select country code</option>
              <option value="+91">+91</option>
              <option value="+1">+1</option>
            </Form.Select>

            <Form.Text className="text-muted">
              <span style={{ color: 'red' }}>{fieldError.codeError}</span>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="phoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={handleForm}
              name="phone-number"
              type="number"
              placeholder="Enter phone number"
              value={phoneNumber}
            />
            <Form.Text className="text-muted">
              <span style={{ color: 'red' }}>{fieldError.phoneNumberError}</span>
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="primary"
              type="submit"
              name="back-form3"
              style={{ marginRight: '10px' }}
              onClick={handleButton}
            >
              Back
            </Button>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" type="submit" name="save" onClick={handleButton}>
                Submit
              </Button>
            </div>
          </div>
        </Form>
      </div>
    );
}


export default Form3;

