const pizzaTypes = ["Pepperonni", 11.50, "Sausage", 11.50, "Supreme", 14.50, "Taco", 12.50, "Cheese", 10.50];
var select = document.getElementById("PizzaType"); 
var count = document.getElementById("TotalPizzas");  
var receipt = document.getElementById("receipt");
var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var phone = document.getElementById("phoneNumber");
var submitOrder  = document.getElementById("submitOrder");
var option = document.createElement("option");
var custom = document.getElementById("custom");
var addCustom = document.getElementById("addCustom");
var email = document.getElementById("email");
submitOrder.addEventListener("click", printOrder);

function printOrder(){    
    let index = select[select.selectedIndex].value;
    let t = count[count.selectedIndex].value;
    let cost = pizzaTypes[1] ;
    let subtotal = t * cost;
    let tax =  subtotal * .076;
    let total = subtotal + tax;
    receipt.value = "Customer: " + fname.value + ' ' + lname.value + "\n" + "Email: " + email.value + "\n" 
        + "Phone Number: " + phone.value + "\n\n\n"; 

    receipt.value += "Subtotal: " + subtotal + "\n" + "Tax: $" + tax + "\nTotal: $" + total ;
}

function setUpPage()
{
    for(var i = 0; i < pizzaTypes.length; i+=2) {
        var option = document.createElement("option");
        let temp = pizzaTypes[i] + "  " + "$" + pizzaTypes[i + 1].toFixed(2);
        console.log(temp);
        option.value = i;
        option.textContent = pizzaTypes[i];
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

