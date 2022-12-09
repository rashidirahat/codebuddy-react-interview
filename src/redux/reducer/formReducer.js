const useState = {
    email: "",
    password:'',
    firstName: "",
    lastName: "",
    address: "",
    code:'',
    phoneNumber:''
  };
  
  export default function formReducer(state = useState, { type, payload }) {
    console.log("reducer= ",type, payload);
    switch (type) {
      case "form1": {
        const {emailId, password} = payload;
        return { ...state, email: emailId, password:password };
      }
      case "form2": {
        const {firstName, lastName,address} = payload;
        return { ...state, firstName: firstName, lastName: lastName, address:address };
      }
      case "form3": {
        return { ...state, code: payload.countryCode, phoneNumber: payload.phoneNumber };
      }
      default:
        return state;
    }
  }
  