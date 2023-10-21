const order = document.getElementById('order');
order.onsubmit = (form1) => {
    form1.preventDefault()
    alert("Successfully Placed an Order");
    goToList();
}