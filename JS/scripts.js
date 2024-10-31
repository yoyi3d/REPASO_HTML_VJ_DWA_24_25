// console.log("¡¡¡AGUACATE!!!!");

// var myname = "YOYI";

// // myname= "Pepito";

// console.log(myname);


// let surname = "ASCARGORTA";
// let age = 27;
// let date = "1997";

// const PI = 3.14;

// console.log(myname + " " + surname + " " + age);

// let float_num = 5.7;
// let another_num = 33;

// let sum_result = float_num + another_num;
// let subs_result = float_num - another_num;
// let mult_result = float_num * another_num;
// let div_result = float_num / another_num;


// console.log(sum_result, subs_result, mult_result, div_result);


// let isDriver = true;

// console.log(2 > 3);

// alert("¡ ¡ ¡ A G U A C A T E ! ! !")



// let num1= 76;
// let num2= "76";
// console.log(num1 == num2);
// console.log(num1 === num2);



// // ------

// let exp1 = true;
// let exp2 = false;

// if (exp1 && exp2) {
//     console.log("La condición es true!");
    
// }


// let animals = ["cat","dog","fish","bird"];
// console.log(animals);
// console.log(animals[2]);

// let arr_cars = ["volvo","ford",546,false,["kia","renault"]];
// console.log(arr_cars);
// console.log(arr_cars[4]);
// console.log(arr_cars[4][1]);
// // Accedemos a un array dentro de un array



// const USER = {
//     id: 345,
//     name: "Yoyi",
//     lastname: "Ascargorta",
//     age: 27,
//     location: [12.1231231231, 43.12312314],
// }

// console.log(USER);
// console.log(USER.age);
// console.log(USER.location);


// // prompt() me permite generar un popup con un input de texto

// window.prompt("Hola,¿como te llamas?");



// // Funcion que calcula un descuento sobre el precio de un producto


// let prod00 = 54.99;
// let prod01 = 32.50;
// const DISCOUNT30 = 0.3;
// const DISCOUNT50 = 0.5;

// function calcDiscountPrice(prod_price, discount) {
//     // Esto es el cuerpo de la función o el código interno, a este codigo no se puede acceder desde fuera, este codigo solo se ejecutará cuando llamemos o invoquemos a la función.
//     console.log("Estoy dentro de la función");

//     let discount_total_price = prod_price - (prod_price * discount)
//     console.log(discount_total_price);
    

    
// }

// calcDiscountPrice(prod00, DISCOUNT30);
// calcDiscountPrice(prod01, DISCOUNT30);
// calcDiscountPrice(prod00, DISCOUNT50);
// calcDiscountPrice(prod01, DISCOUNT50);

// Crear una funcón que se llame greetUser() y que haga 2 cosas:

// Preguntar al usuario su nombre y guardar la respuesta

// Mostrar el nombre del usuario junto con un saludito de testeo en una ventana popup

// La llamada o invocación de la función greetUder() se encontrará en un boton de mi web donde el usuario hará click

// PISTA: el botón en el HTML debe tener un evento onclick y dentro de mi función greetUSer()usaré dos funciones built-in de JS

// PISTA II: esta fnción no admite parámetros

function greetUser() {    
    let userName = window.prompt("¿Cual es tu nombre?")
    alert("HOLA " + userName + " ERES IMBECIL")

}



// SELECTORES DE JS

// let titleH1 = document.getElementsByTagName("h1");
// console.log(titleH1);

// let subtitles = document.getElementsByClassName("menu-flex");
// console.log(subtitles);

// let gallery = document.getElementById("gallery")
// console.log(gallery);

// let sp_title = document.querySelector("#gallery");


let title = document.querySelector("header h1");
// console.log(title.textContent); // GET
title.textContent = "Hola he cambiado!"; // SET
title.style.color = "red"; // SET


// console.log(title.style);

// Definimos y asignamos u evento click al boton #btnGreet para que cuando detecte el click llame a la función greetUser()

//1. Seleccionamos el botón
//2. Asignamos el evento al boton
//3. Llamamos al la función del evento

let btn = document.querySelector("#btnGreet");
// console.log(btn);

btn.addEventListener("click", function(){
    greetUser();
});


//-----------EJERCICIO----------------------------

let headColor = document.querySelector("header");
//  console.log(headColor);
headColor.style.backgroundColor = "red";
headColor.addEventListener("mouseover");

//-------------------------------------------------