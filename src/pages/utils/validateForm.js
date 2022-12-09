
var emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
var nameRegx = /^[a-zA-Z ]+$/;
var teamId = /^[a-z0-9-]+$/;
var codeRegx = /^(\+?\d{1,3}|\d{1,4})$/;

const validateForm = (name,value) => {
   switch (name) {
    case "password-type":
        return value.length >= 6 ? "" : value.length > 0  ? "Password should be more than 6 characters" : "Field should not be empty";
    case "email-type":
        return emailRegx.test(value) ? "" : value.length > 0 ? "Email is not valid!" : "Field should not be empty";
    case "first-name":
        return nameRegx.test(value) ? "" : value.length > 0 ? "Name should be in character" : "Field should not be empty";
    case "last-name":
        return nameRegx.test(value) ? "" : value.length > 0 ? "Name should be in character" : "Field should not be empty";
    case "address":
        return nameRegx.test(value.trim()) ? "" : value.length > 0 ? "Invalid address" : "Field should not be empty";
    case "country-code":
        return codeRegx.test(value.trim()) ? "" : value.length > 0 ? "Invalid code" : "Field should not be empty";
    case "phone-number":
        return value.trim().length == 10 ? "" : value.length > 0 ? "Invalid Phone number" : "Field should not be empty";    
    default:
        break;
}

    
}
export default validateForm
