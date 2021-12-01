function signup(event) {
	event.preventDefault();
  const email = document.getElementById("email").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const val = users.some(user => user.email == email);
  if(!val) {
    addUser(users);
    alert("Registered Successfully");
    window.location.href = './login_page.html';
    return;
  } 
  alert("Email already exists"); 
}

function addUser(users) {
	users.push({
    "username": document.getElementById("username").value,
    "dob": document.getElementById("dob").value,
    "email": document.getElementById("email").value,
    "password": window.btoa(document.getElementById("password").value)
	});
  localStorage.setItem("users", JSON.stringify(users));  
}
  
function login() {
  const name = document.getElementById("input1").value;
  const password = document.getElementById("input2").value;
  const users = JSON.parse(localStorage.getItem("users"));
  const filteredArray = users.filter(user => (user.username == name
  && window.atob(user.password) == password));
  if(filteredArray.length) {
    alert("login Sucessful");
    localStorage.setItem('currentUser', JSON.stringify(filteredArray[0]));
    window.open("./index.html");
  }
  else
  {
    alert('login fail');
  }
  //indow.location.href = './index.html',true;
}
