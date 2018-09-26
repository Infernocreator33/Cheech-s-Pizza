const pizzaTypes = ["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

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