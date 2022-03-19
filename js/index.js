// declaring of variables
// use var as key word to declare variable that will change during program runtime

// var fullName = "Caleb Obegi Bosire";
// console.log(fullName);

// another way to declaare a variable is to use the let keyword

// another way to declare a variable is to use the const keyword
// const pi = 3.142;
// console.log(pi);

// js operator
// const num1 = parseInt(document.getElementById("num1").innerHTML);
// const num2 = parseInt(document.getElementById("num2").innerHTML);
// const button = document.getElementById("btn");
// const results = document.getElementById("results");

// button.addEventListener("click", function(){
//     results.innerHTML = num1 + num2;
// })


// // arrays
// const myArray = document.getElementById("displayarray");

// const array = [12, 23, 34, 90, 86, 76, 50, 29, 26, 12];

// const arrayLength = array.map(function(value){
//     return value >40;

// })

// myArray.textContent = newArray;


// my counter.js
const title = document.querySelector(".title");

const value = document.getElementById("value");

const buttons = document.querySelectorAll(".btn");

let counter = 0;

buttons.forEach(function(btn){
    
    

    btn.addEventListener("click", function(event){

        event.preventDefault();

        const currentBtn = event.currentTarget.classList;


        if(currentBtn.contains("decrement")){

            counter = counter - 1;
            
        }
        if(currentBtn.contains("reset")){

            counter = 0;
           
        }
        if(currentBtn.contains("increment")){

            counter = counter + 1;
            
        }
        
        if(counter > 0){
            title.style.color = "green";
            value.style.color = "green"; 
        }
        if(counter < 0){
            title.style.color = "orangered";
            value.style.color = "orangered"; 
        }
        if(counter == 0){
            title.style.color = "black";
            value.style.color = "black"; 
        }
         value.textContent = counter;


        
    })


})