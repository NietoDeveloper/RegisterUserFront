// gets access to local storage inputs and creates username and password inputs. displays information

function login() {

  let frstName = localStorage.getItem("firstName");
  let lstName = localStorage.getItem("lName");
  let street = localStorage.getItem("street");
  let city = localStorage.getItem("city");
  let state = localStorage.getItem("state");
  let zip = localStorage.getItem("zipCode");
  let area = localStorage.getItem("areaCode");
  let prefix = localStorage.getItem("prefix");
  let phone = localStorage.getItem("phoneNum");
  let userName = document.getElementById("user").value;
  let password = document.getElementById("pswrd").value;

  let pswrdRegex = /[A-Z]{1}[a-z]*\d{1}[!@#_]{1}/ig;

  let pswrdCheck = pswrdRegex.test(password);

  // document.getElementById('infoDisplay').style.display = "block";

  let newP = document.createElement("p");
  document.getElementById('f_name').append(newP);
  document.getElementById('f_name').lastChild.setAttribute("class", "inputDisplay");
  let newFirst = document.createTextNode(frstName);
  newP.append(newFirst);

  newP = document.createElement("p");
  document.getElementById('l_name').append(newP);
  document.getElementById('l_name').lastChild.setAttribute("class", "inputDisplay");
  let newLast = document.createTextNode(lstName);
  newP.append(newLast);

  newP = document.createElement("p");
  document.getElementById('street_name').append(newP);
  document.getElementById('street_name').lastChild.setAttribute("class", "inputDisplay");
  let newStreet = document.createTextNode(street);
  newP.append(newStreet);

  newP = document.createElement("p");
  document.getElementById('city_name').append(newP);
  document.getElementById('city_name').lastChild.setAttribute("class", "inputDisplay");
  let newCity = document.createTextNode(city);
  newP.append(newCity);

  newP = document.createElement("p");
  document.getElementById('state_name').append(newP);
  document.getElementById('state_name').lastChild.setAttribute("class", "inputDisplay");
  let newState = document.createTextNode(state);
  newP.append(newState);

  newP = document.createElement("p");
  document.getElementById('zip_name').append(newP);
  document.getElementById('zip_name').lastChild.setAttribute("class", "inputDisplay");
  let newZip = document.createTextNode(zip);
  newP.append(newZip);

  newP = document.createElement("p");
  document.getElementById('phone').append(newP);
  document.getElementById('phone').lastChild.setAttribute("class", "inputDisplay");
  let newArea = document.createTextNode("(" + area + ")");
  newP.append(newArea);

  newP = document.createElement("p");
  document.getElementById('phone').append(newP);
  document.getElementById('phone').lastChild.setAttribute("class", "inputDisplay");
  let newPrefix = document.createTextNode(prefix + "-");
  newP.append(newPrefix);

  newP = document.createElement("p");
  document.getElementById('phone').append(newP);
  document.getElementById('phone').lastChild.setAttribute("class", "inputDisplay");
  let newPhone = document.createTextNode(phone);
  newP.append(newPhone);

  if (userName.length >= 4 && userName.length <= 20) {

    newP = document.createElement("p");
    document.getElementById('user_name').append(newP);
    document.getElementById('user_name').lastChild.setAttribute("class", "inputDisplay");
    let newUser = document.createTextNode(userName);
    newP.append(newUser);
    document.getElementById("infoDisplay").style.display = "block";

  } else {

    window.alert("Username must be between 4 and 20 characters");
    window.location.reload();
  }

  if (password.length >= 4 && password.length <= 12) {

    if (pswrdCheck == true) {

      newP = document.createElement("p");
      document.getElementById('pswrd_name').append(newP);
      document.getElementById('pswrd_name').lastChild.setAttribute("class", "inputDisplay");
      let newPswrd = document.createTextNode(password);
      newP.append(newPswrd);
      document.getElementById("infoDisplay").style.display = "block";

    } else {

      window.alert("Password must contain one uppercase character, one number, and one special character");
      window.location.reload();
    }

  } else {

    window.alert("Password must be between 4 and 12 characters");
    window.location.reload();
  }


}
