const signup = document.getElementById('signup');
signup.onsubmit = (form3) => {
    form3.preventDefault();
    alert("Successfully Signed Up");
    goToLogin();
}