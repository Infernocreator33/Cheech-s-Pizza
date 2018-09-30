const pizzaTypes = ["Pepperonni", 11, "Sausage", 11, "Supreme", 14, "Taco", 12, "Cheese", 10];
var select = document.getElementById("PizzaType"); 
var count = document.getElementById("TotalPizzas");  
var firstName = document.getElementById("firstName").value;
var lastName = document.getElementById("lastName").value;
var phone = document.getElementById("phoneNumber").value;
var submitOrder  = document.getElementById("submit");
var option = document.createElement("option");
var custom = document.getElementById("custom");
var addCustom = document.getElementById("addCustom");
//submitOrder.addEventListener("click", printOrder);
/*
function printOrder()
{

}*/

function setUpPage()
{
    for(var i = 0; i < pizzaTypes.length; i+=2) {
        var option = document.createElement("option");
        console.log(pizzaTypes[i]);
        option.value = pizzaTypes[i];
        option.textContent = pizzaTypes[i];
        select.appendChild(option,pizzaTypes[i]);    
    }
    for(var i = 1; i < 11; i++){
        var option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        count.appendChild(option, i);        
    }
}

function addCustomTopping(e,ele) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if(code == 13) {
        var option = document.createElement("option");
        option.value = ele.value;
        option.textContent = ele.value;
        select.add(option);  
        custom.value = ""; 
        console.log(custom.value);
    }
}

function addByButton(){
    var option = document.createElement("option");    
    option.value = custom.value;
    option.textContent = custom.value;
    select.add(option);  
    custom.value = ""; 
    console.log(custom.value);    
}

window.addEventListener("load", setUpPage);

