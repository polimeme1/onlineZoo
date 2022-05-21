function show_hide_password(target){
    var input = document.getElementById('password-input');
    if (input.getAttribute('type') == 'password') {
      controller = document.getElementById("pass-con").innerHTML = "Remove password";
      input.setAttribute('type', 'text');
    } else {
      controller = document.getElementById("pass-con").innerHTML = "Show password";
      input.setAttribute('type', 'password');
    }
    return false;
    }

function validate_login() {
    var e = document.getElementById("email").value;
    var p = document.getElementById("password-input").value;
    if(e == "") {
      alert("Please enter your E-mail");
      return false;
    }
    if(p == "") {
      alert("Please enter you password");
      return false;
    }
    }

function validate_reg() {
    var n = document.getElementById("name").value;
    var e = document.getElementById("email").value;
    var p = document.getElementById("password-input").value;
    var ch = document.getElementById("agree")
        if(n == "") {
          alert("Please enter your name");
          return false;
        }
        if(e == "") {
          alert("Please enter your E-mail");
          return false;
        }
        if(p == "") {
          alert("Please enter you password");
          return false;
        }
        if (!ch.checked) {
          alert("Please agree with the User Agreement and Privacy Policy");
          return false;
        }
        }