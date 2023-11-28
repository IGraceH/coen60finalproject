function submitFrom() {
    let inputs = document.querySelectorAll('.mustInput');
    let checkMajor = document.getElementById('major');
    let checkUAgree = document.getElementById('checkAgree');
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert('Please fill in all information');
        return 0;
      }
    }
    if (!emailCheck.test(document.getElementById('sEmail').value)) {
      alert('Please enter a valid email address');
      return 0;
    }
    if (!checkUAgree.checked) {
      alert('Please agree to the terms');
      return 0;
    }
    alert('Form submitted successfully!');
    return 1;
  }
  
function updateTable(str) {
  var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("studentTable").innerHTML = this.responseText;
      }
    }
    xmlhttp.open("GET", "get_info.php?"+str, true);
    xmlhttp.send();
}