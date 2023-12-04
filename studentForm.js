function validateLogin() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }

    var password = document.getElementById("password").value;
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters and contain at least 1 digit");
        return false;
    }

    // window.location.href = "studentSubmit.html";
    
    return true;
}

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

function setUser(str) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            if (response == "1") {
                window.location.href = "studentSubmit.html";
            } else {
                window.alert("Wrong password! Please retry again.");
            }
            // alert user: if the password is wrong, alert
            // if the password is not wrong or is a new user, redirect to the new page
        }
    };
    xmlhttp.open("GET", "get_user.php?" + str, true);
    xmlhttp.send();
}