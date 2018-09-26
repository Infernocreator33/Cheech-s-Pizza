const pizzaTypes = new Array["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

for(var i = 0; i < pizzaTypes.length; i++) {
    var type = pizzaTypes[i];
    var option = document.createElement("option");
    option.textContent = type;
    option.value = type;
    select.appendChild(option);    
}​