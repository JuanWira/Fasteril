const login = document.getElementById('login');
login.onsubmit = (form2) => {
    form2.preventDefault()
    alert("Successfully Logged In");
    goToOrder();
}

