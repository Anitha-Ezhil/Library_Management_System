function login(type) {
    var loginContainer = document.getElementById('login-container');
    loginContainer.classList.add('active');
    localStorage.setItem('loginType', type);
  }
  
  function submitLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var loginType = localStorage.getItem('loginType');
  
    // Here you can perform login validation based on loginType
    if (username === 'admin' && password === 'admin' && loginType === 'admin') {
      alert('Admin login successful!');
      // Redirect to admin page or perform any other action
    } else if (username === 'user' && password === 'user' && loginType === 'user') {
      alert('User login successful!');
      // Redirect to user page or perform any other action
    } else {
      alert('Invalid credentials!');
    }
  }
  
  function goBack() {
    var loginContainer = document.getElementById('login-container');
    loginContainer.classList.remove('active');
  }
  