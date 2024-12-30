
// Chapter 9to11

//Q1

// let city = prompt("Enter your city")
// let welcome = "Welcome To City of Lights"

// if (city=="karachi") {
//    alert(welcome)
// }

//


//Q2

// let gender = prompt("Enter your gender")

// if (gender=="male") {
//    alert("Good Morning Sir") 
// }

// if (gender=="female") {
//     alert("Good Morning Mam") 
//  }

//Q4

//  let fuel = +prompt("Enter your current fuel(in liters)")

//  if (fuel<0.25) {
//      alert("please refil the fuel in  yuor car ")
    
//  }

//Q5

//a

// let a = 4

// if (++a===5) {
//    alert("given condition for variable a is true ")  
// }

// True

//b
    
// let b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// False

// c

//  let c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// // condition 1 is false

// if (c === 13){
// alert("condition 2 is true");
// }

// // condition 2 is True

// if (++c < 14){
// alert("condition 3 is true");
// }

// condition 3 is false

// if(c === 14){
// alert("condition 4 is true");
// }

// condition 4 is True


// d

// let materialCost = 20000;
// let laborCost = 2000;
// let  totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// e

// if (true){
//     alert("True");
//     }

// if (false){
//     alert("False");
//     }


// f

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//Q7

// let secretNumber = 5
// let userGuess = +prompt("Guess the Secret Number")

// if (userGuess==5) {
//     alert("Bingo! Correct Answer")
// }

// if (userGuess==6) {
//     alert("Enough close the correct Answer")
// }

//Q8

// let temperature = +prompt("Enter the current Temperature")

// if (temperature>40) {
//     alert("It is so hot outside")
// }

// if (temperature>30) {
//     alert("The Weather today is Normal.")
// }

// if (temperature>20) {
//     alert("Today’s Weather is cool.")
// }

// if (temperature>10) {
//     alert("OMG! Today’s weather is so Cool.")
// }

//Q11

// let num1 = prompt("enter 1st number")
// let operator = prompt("enter operator")
// let num2 = prompt("enter 2nd number")
// let result;

// if (operator==="+") {
//     result = num1+num2
// }

// let num1 = +prompt("enter 1 number")
// let num2 = +prompt("enter 2nd number")
// let operation = prompt("operator")

// if (operation=="+") {
//     alert(num1+num2)
    
// }

// if (operation=="-") {
//     alert(num1-num2)
    
// }

// if (operation=="*") {
//     alert(num1*num2)
    
// }

// if (operation=="/") {
//     alert(num1/num2)
    
// }

// if (operation=="%") {
//     alert(num1%num2)
    
// }



// Chapter 12to13


//Q3

// let num1 = prompt("enter no 1 to 10")

// if(num1 == 1 || num1 == 2 || num1 == 3 || num1 == 4 || num1 == 5 || num1 == 6 || num1 == 7 || num1 == 8 || num1 == 9 || num1 == 10 ){

//     alert("positive number")
// }

// if(num1==-1|| num1==-2|| num1==-3|| num1==-4|| num1==-5|| num1==-6|| num1==-7|| num1==-8|| num1==-9|| num1==-10){

// alert("ngative number")

// }

// if(num1==0){

//     alert("zero")

// }


//Q4

 
// let alpha = prompt("Enter a single word a to z")

// if(alpha.toLocaleLowerCase()==="a" || alpha.toLocaleLowerCase()==="e" || alpha.toLocaleLowerCase()==="i" || alpha.toLocaleLowerCase()==="o" || alpha.toLocaleLowerCase()==="u"  ){
//     alert("its a vowels word")
// }

// else{
//     alert("its not a vowel word")
// }

//Q5

// let question = prompt("Enter your password")
// let password = "Amaan123456"

// if(que==""){

//     alert("please enter your password")

// }

// else if(que == "Amaan123456"){

//     alert("Correct Password")

// }

// else{
//     alert("incorrect Password")
// }


//Q6

// previous
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// updated

// let greeting;
// let hour = 13;

// if(hour < 18){

//     greeting = "Good Day"

// }

// else{
//     greeting = "Good Evening"
// }