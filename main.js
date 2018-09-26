const pizzaTypes = new Array["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

function loadPizzas(){
    for(var i = 0; i < pizzaTypes.length; i++) {
        var option = document.createElement("option");
        option.textContent(pizzaTypes[i]);
        option.value(i);
        select.appendChild(option);
    }
}

window.addEventListener("load", loadPizzas);