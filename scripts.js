document.getElementById("formulario").addEventListener("submit", function(event) { 
    /* .addEvent: Permite ejecutar una función cuando ocurre un evento específico, como un click*/
    /* submit: Operacion que ocurre cuando el usuario envía el formulario*/

    event.preventDefault(); /* Previene la recarga del formulario */
    
    let op1 = parseInt(document.getElementById("op1").value); /* paresInt: Convierte decimales a un numero entero hacia abajo, ejemplo 44.9 lo vuelve 44*/
    let operador = document.getElementById("operador").value.trim(); /* trim: elimina espacios en blanco*/
    let op2 = parseInt(document.getElementById("op2").value);
    let resultado = document.getElementById("resultado");
    
    if (!["+", "-", "*", "/", "**", "%"].includes(operador)) {
        /*.includes(operador) revisa si el operador ingresado está dentro de los operadores permitidos.*/
        resultado.textContent = "ERROR: El operador no es VÁLIDO!";
        return; /*Detiene la operacion si el operador no es válido*/
    }
    
    if (operador === "/" && op2 === 0) {
        resultado.textContent = "ERROR: ¡No se puede dividir por cero!";
        return; /*Detiene la operacion si el operador no es válido*/
    }
    
    let res; /* Almacena el resultado de la operación */
    if (operador === "+") {
        res = op1 + op2; /*Se hace la suma*/
    } else if (operador === "-") {
        res = op1 - op2; /*Se hace la resta*/
    } else if (operador === "*") {
        res = op1 * op2; /*Se hace la multiplicacion*/
    } else if (operador === "/") {
        res = op1 / op2; /*Se hace la division*/
    } else if (operador === "**") {
        res = op1 ** op2; /*Se hace la exponenciacion*/
    } else if (operador === "%") {
        res = op1 % op2; /*Calcula el módulo (resto de la división)*/
    }
    
    resultado.textContent = `Resultado: ${res}`;
});