// 1- Entrada Discoteca
function entradaDiscoteca() {
    var edad = prompt("¿Qué edad tienes?");

    if (edad < 18) {
        alert("Lo siento, eres menor de edad. No puedes entrar a la discoteca.");
    } else if (edad === 18) {
        alert("¡Felicidades! Acabas de cumplir 18 años. ¡Bienvenido/a a la discoteca!");
    } else {
        alert("¡Bienvenido/a a la discoteca!");
    }
}

// 2- Cinco Colores
function cincoColores() {
    var color = prompt("Por favor, elija un color: azul, verde, rojo, amarillo o violeta");

    switch (color) {
        case 'azul':
            alert("El azul es como el mar, siempre que el cielo sea azul (y sea de día).");
            break;
        case 'verde':
            alert("El verde representa la naturaleza y la vida.");
            break;
        case 'rojo':
            alert("El rojo es el color de la pasión y el amor.");
            break;
        case 'amarillo':
            alert("El amarillo es el color del sol y la felicidad.");
            break;
        case 'violeta':
            alert("El violeta es un color asociado a la espiritualidad y la creatividad.");
            break;
        default:
            alert("No elegiste ninguno de los colores especificados.");
    }
}

// 3- la lámpara no funciona
function lamparaNoFunciona() {
    var primeraPregunta = prompt("¿La lámpara está enchufada? (si/no)");

    if (primeraPregunta.toLowerCase() === 'si') {
        var segundaPregunta = prompt("¿El foco está quemado? (si/no)");

        if (segundaPregunta.toLowerCase() === 'si') {
            alert("Cambia el foco y la lámpara debería encender.");
        } else if (segundaPregunta.toLowerCase() === 'no') {
            alert("Comprar nueva lámpara.");
        } else {
            alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
        }
    } else if (primeraPregunta.toLowerCase() === 'no') {
        alert("Por favor, enchufa la lámpara y vuelve a intentarlo.");
    } else {
        alert("Respuesta no válida. Por favor, responde 'si' o 'no'.");
    }
}
