const pizzaTypes = new Array["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

for(var i = 0; i < pizzaTypes.length; i++) {
    var type = pizzaTypes[i];
    var option = document.createElement("option");
    option.textContent = type;
    option.value = type;
    select.appendChild(option);    
}​
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var phone = document.getElementById("phoneNumber").value;
var submitOrder  = document.getElementById("submit");
submitOrder.addEventListener("click", printOrder);
/*
function printOrder()
{

}

function setUpPage()
{

}
window.addEventListener("load", setUpPage);*/