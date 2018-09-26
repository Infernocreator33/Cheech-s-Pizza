const pizzaTypes = new Array["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 



function loadPizzas(){
    for(var i = 0; i < pizzaTypes.length; i++) {
        var type = pizzaTypes[i];
        var option = document.createElement("option");
        option.innerHTML = type;
        option.value = type;
        select(option);    
    }​
}

window.addEventListener("load", loadPizzas);