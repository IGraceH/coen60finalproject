function validateForm() {
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var major = document.getElementById('major').value;
  var password = document.getElementById('password').value;

  if (!username || !email || !major || !password) {
      alert("Please fill in all fields");
      return false;
  }

  if (username.length >= 10) {
      alert("Username must be less than 10 characters");
      return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return false;
  }

  var passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
  if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters and contain at least 1 digit");
      return false;
  }

  return true;
};

function updateTable(str) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          document.getElementById("student-table").innerHTML = this.responseText;
      }
  };
  xmlhttp.open("GET", "get_info.php?" + str, true);
  xmlhttp.send();
}
