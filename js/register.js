// store form inputs into local storage for non-server access.

function register() {

  //store phone number and zipcode first
  let zipCode = parseInt(document.getElementById('zipCode').value);
  let areaCode = parseInt(document.getElementById('areaCode').value);
  let prefix = parseInt(document.getElementById('phonePrefix').value);
  let phoneNum = parseInt(document.getElementById('phoneNum').value);

  if (Number.isNaN(areaCode) == true || Number.isNaN(prefix) == true || Number.isNaN(phoneNum) == true || Number.isNaN(zipCode) == true) {

    window.alert("Please enter a valid zipcode and phone number");
    //stay on sign_in2.html page
    document.getElementById('registerForm').setAttribute("action", "sign_in2.html");

  } else {

    localStorage.setItem("zipCode", zipCode);
    localStorage.setItem("areaCode", areaCode);
    localStorage.setItem("prefix", prefix);
    localStorage.setItem("phoneNum", phoneNum);

  }

  //store all values locally
  localStorage.setItem("firstName", document.getElementById('firstName').value);
  localStorage.setItem("lName", document.getElementById('lastName').value);
  localStorage.setItem("street", document.getElementById('street').value);
  localStorage.setItem("city", document.getElementById('city').value);
  localStorage.setItem("state", document.getElementById('state').value);

}
