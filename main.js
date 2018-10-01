const pizzaTypes = ["Pepperonni", 11.50, "Sausage", 11.50, "Supreme", 14.50, "Taco", 12.50, "Cheese", 10.50];
var select = document.getElementById("PizzaType"); 
var count = document.getElementById("TotalPizzas");  

var phone = document.getElementById("phoneNumber");
var submitOrder  = document.getElementById("submitOrder");
var option = document.createElement("option");
var custom = document.getElementById("custom");
var addCustom = document.getElementById("addCustom");

submitOrder.addEventListener("click", printOrder);

function printOrder(){
    var receipt = document.getElementById("receipt");
    var fname = document.getElementById("firstName");
    var lname = document.getElementById("lastName");
    receipt.innerText = "Hi";   
}

function total(){
    let subtotal = pizzaTypes[select.selectedIndex + 1] * count.selectedIndex.textContent;
    let tax =  subtotal * .0076;
    let total = subtotal + tax;
    return total;
}

function setUpPage()
{
    for(var i = 0; i < pizzaTypes.length; i+=2) {
        var option = document.createElement("option");
        let temp = pizzaTypes[i] + "  " + "$" + pizzaTypes[i + 1].toFixed(2);
        console.log(temp);
        option.value = temp;
        option.textContent = temp;
        select.appendChild(option,temp);    
    }
    for(var i = 1; i < 11; i++){
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        count.appendChild(option, i);        
    }
}

window.addEventListener("load", setUpPage);

