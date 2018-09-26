const pizzaTypes = ["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

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
*/
function loadPizzas(){
    for(var i = 0; i < pizzaTypes.length; i++) {
        var option = document.createElement("option");
        console.log(pizzaTypes[i]);
        option.value = pizzaTypes[i];
        option.textContent = pizzaTypes[i];
        select.appendChild(option,pizzaTypes[i]);       
    }
}

window.addEventListener("load", loadPizzas);

