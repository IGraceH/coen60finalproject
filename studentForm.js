function submitFrom() {
    let inputs = document.querySelectorAll('.mustInput');
    let checkMajor = document.getElementById('major');
    let checkUAgree = document.getElementById('checkAgree');
    let emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for (let input of inputs) {
      if (!input.value.trim()) {
        alert('Please fill in all information');
        return;
      }
    }
    if (!emailCheck.test(document.getElementById('sEmail').value)) {
      alert('Please enter a valid email address');
      return;
    }
    if (!checkUAgree.checked) {
      alert('Please agree to the terms');
      return;
    }
    alert('Form submitted successfully!');
  }
  
