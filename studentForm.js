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

function validateStudentForm() {
    if (document.getElementById("delete-check").checked) {
        var str = "info=A:;B:;C:;D:;1";
        updateTable(str);
        window.alert("You were successfully removed from the list! Hope you visit us again :)");
        return 0;
    } else {
        if (document.getElementById("fname").value == "" || document.getElementById("lname").value == "" || document.getElementById("major").value == "" || document.getElementById("interests").value == "") {
            window.alert("Please finish filling in all of the information.");
            return 1;
        }
    }
    return 2;
}

function updateTable(str) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var str = this.responseText;
            var split2 = str.split("interest=");
            var interestTxt = split2[1];
            var split3 = split2[0].split("major=");
            var majorTxt = split3[1];
            var tableTxt = split3[0];
            document.getElementById("student-table").innerHTML = tableTxt;
            if ((majorTxt != null) && (interestTxt != null)) {
                document.getElementById("usersMajor").innerHTML = "Your major: " + majorTxt;
                document.getElementById("usersInterest").innerHTML = "Your interests: " + interestTxt;
            }
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
                updateTable("info=");
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
