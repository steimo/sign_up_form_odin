var check = function() {
  if (document.getElementById('password').value ==
    document.getElementById('confirm_password').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Passwords match';
     document.getElementById('password').style.borderColor = '#f0f1f3';
    document.getElementById('confirm_password').style.borderColor = '#f0f1f3';
 } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = '* Passwords do not match';
    document.getElementById('password').style.borderColor = 'red';
    document.getElementById('confirm_password').style.borderColor = 'red';
;
  }
}
