const pizzaTypes = ["Pepperonni","Sausage", "Supreme", "Taco", "Cheese"];
const pizzaCost = [11.50,11.50,14.50,12.50,10.50];
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
    let cost = pizzaCost[index] ;
    let subtotal = t * cost;
    let tax =  subtotal * .076;
    let total = subtotal + tax;
    receipt.value = "\n\n\nCustomer: " + fname.value + ' ' + lname.value + "\n" + "Email: " + email.value + "\n" 
        + "Phone Number: " + phone.value + "\n\n\n\n" + "Type of Pizza: " + pizzaTypes[index] + " x" + t + "\n"+ "Crust: " 
        + document.querySelector('input[name="crust"]:checked').value + "\n" 
        + document.querySelector('input[name="pickupOption"]:checked').value +"\n\n\n" + "Subtotal: $" 
        + subtotal.toFixed(2) + "\n" + "Tax: $" + tax.toFixed(2) + "\nTotal: $" + total.toFixed(2); 
}

function setUpPage()
{
    for(var i = 0; i < pizzaTypes.length; i++) {
        var option = document.createElement("option");
        let temp = pizzaTypes[i] + "  " + "$" + pizzaCost[i].toFixed(2);
        console.log(temp);
        option.value = i;
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

