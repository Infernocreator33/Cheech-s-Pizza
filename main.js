const pizzaTypes = new Array["Pepperonni", "Sausage", "Supreme", "Taco", "Cheese"];
var select = document.getElementById("PizzaType"); 

var fragment = document.createDocumentFragment();

function loadPizzas(){
    for(var i = 0; i < pizzaTypes.length; i++) {
        var option = document.createElement("option"),
            txt = document.createTextNode(pizzaTypes[i]);
        option.appendChild(txt);
        option.setAttribute("value", pizzaTypes[i]);
        select.insertBefore(option, select.lastChild);
    }
}



window.addEventListener("load", loadPizzas);