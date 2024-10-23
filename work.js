/*console.log(2)
console.log("Spoorthy")
document.getElementById("h1").textContent = "Hello";

//variables

let x; //declaration
x=234; //assingment
console.log(x); //printing output
let age=23;
console.log("You are "+ age + "  yr old")
console.log(typeof age); //to know datatype of variable
let gpa=89.2333; //it is of number datatype
console.log(typeof gpa);
let name ="spoo" //string datatype
console.log( 'Your name is '+name);
console.log(typeof name);
let online= false;
console.log("spoo is online : "+online);
console.log(typeof online);
document.getElementById("p1").textContent = "Your age is "+ age
document.getElementById("p2").textContent = `Your name is `+name
document.getElementById("p3").textContent = "You are online : "+ online

/*ARITHMETIC OPERATORS = operands(values,variables)
                         operations( +,-,*,/,**)
                         example = x+3 
*/
/*
 let students=23;
 students=students+1;
 students+=1;

 //Do the same with other operators

 console.log(students);
 */
 
/*
operators precedence
  1.parenthesis()
  2.exponents 
  3.multiplication & division & module
  4.addition & subtraction
 */
/*
let a= 1 + 2 * 3 + 13  
console.log(a); 
let b=12 % 5 + 8 / 2;
console.log(b)
let c=6/2**(2+5);
console.log(c)                   

//USER INPUT
// Easy way= window prompt
// Professional way = html window

/*let username;
username = window.prompt("What's your name ")
console.log(username) */
/*
let firstName;
document.getElementById("mybutton").onclick = function(){
    firstName = document.getElementById("mytext").value
     console.log(firstName);
    document.getElementById("h1").textContent = "hello welcome";
    document.getElementById("mylabel").textContent = "firstName";
}
*/

//TYPE CONVERSIONS = changing the datatype of one  a variable to another type
/*
let x= true
let y=true
let z=true
x=Number(x)
y=String(y)
z=Boolean(z)
console.log(x,typeof x)
console.log(y,typeof y)
console.log(z,typeof z)
*/

//CONSTANT = a variable that cannot be changed
// EASY WAY
/*const PI= 3.14;
let radius =//window.prompt("Enter the radius of the circle");
radius = Number(radius)
let circumference = 2 * PI * radius;
console.log(circumference)
*/
//PROFESSIONAL WAY
/*const PI=3.14;
let radius
let circumference
document.getElementById("mybutton").onclick = function(){
  radius = document.getElementById("mytext").value
  radius = Number(radius)
  circumference= 2 * PI * radius;
  console.log(circumference)

}
console.log( radius , circumference)

*/
//COUNTER PROGRAM
/*
let increaseBtn= document.getElementById("IncreaseBtn")
const decreaseBtn= document.getElementById("decreaseBtn")
const ResetBtn= document.getElementById("ResetBtn")
const mylabel= document.getElementById("mylabel")
 let count=0
 increaseBtn.onclick= function(){
  count++;
  mylabel.textContent=count;
 }
 decreaseBtn.onclick=function(){
  count--;
  mylabel.textContent=count;
 }
 ResetBtn.onclick=function(){
  count=0;
  mylabel.textContent=count;
 }
  */
 /*
 let count=0;
 document.getElementById("IncreaseBtn").onclick = function(){
     count++;
     document.getElementById("mylabel").textContent=count;

 }
 document.getElementById("decreaseBtn").onclick = function(){
  count--;
  document.getElementById("mylabel").textContent=count;
 }
 document.getElementById("ResetBtn").onclick = function(){
  count=0;
  document.getElementById("mylabel").textContent=count;
 }
  */
 //MATH OBJECT
 //console.log(Math.PI)
 //console.log(Math.pow(2,3))
//console.log(Math.sqrt(Math.pow(2,2) + Math.pow(3,2))) 
 /*let A
 let B
 let C
 document.getElementById("mybutton").onclick = function(){
  A=document.getElementById("myA").value
  A=Number(A)
  B=document.getElementById("myB").value
  B=Number(B)
  C=Math.sqrt(Math.pow(A,2) + Math.pow(B,2))
  document.getElementById("h3").textContent= "Side C: " + C + "cm"
}
  */
 /*RANDOM NUMBER GENERATOR
 let max=6
 let min=3
   document.getElementById("mybutton").onclick = function(){
    document.getElementById("h1").textContent = Math.floor(Math.random()* (max-min) + min ) 
    document.getElementById("h2").textContent = Math.floor(Math.random()* (max-min) + min )
    document.getElementById("h3").textContent = Math.floor(Math.random()* (max-min) + min )
    }
    */
   //IF STATEMENTS;

   /*let h2=document.getElementById("h2");
   document.getElementById("mybutton").onclick=function(){
    let A=mytext.value;
   if(A==0){
    h2.textContent = "You cannot drive,you are just born"
}
else if(A>0 && A<18){
  h2.textContent = "You are not major yet,so you cannot drive"
}
else if(A>=18 && A<70){
  h2.textContent = "You can drive"
}
else{
  h2.textContent = "You cannot drive as you are old"
}
   }
*/
// CHECKED = properthy that determines the checked state of an 
            //html checkbox and radio buttons
//CHECKBOXEX AND RADIO BUTTONS EXAMPLE
/*let Membership = document.getElementById("mytext1")
let p=document.getElementById("p1")
let p1=document.getElementById("p2")
document.getElementById("mybutton").onclick = function(){
  if(Membership.checked){
    p.textContent = " You have taken MemberShip"

  }
  else{
    p.textContent = "You have not taken MemberShip"
  }
  if(document.getElementById("mytext2").checked){
    p1.textContent = "You have choosen Visa to pay"
  }
  else if(document.getElementById("mytext3").checked){
    p1.textContent = " You have choosen Master Card to pay"
  }
  else if(document.getElementById("mytext4").checked){
    p1.textContent = " You have choosen PayPal to pay"
  }
  else{
    p1.textContent = "You didn't choosen any payment method"
  }
}
//String interpolation 
/*let age=2
console.log(`My age is ${age}`)
//TEMPERATURE PROBLEM
//As the value of kelvin is constant choose const key
const kelvin = 23;
/*
Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
*/
/*const celsius = kelvin-273;

let Fahrenheit = celsius * (9/5) + 32
//since we will rpound the value we have considered it as let
Fahrenheit = Math.floor(Fahrenheit)
//when we convert we often get decimal umber, so use floor
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit`)
*/
//TERNARY OPERATOR = A SHORTCUT TO IF() AND ELSE() BLOCK CODE
                     // HELPS TO ASSING A VARIABLE BASED ON CODE
                     // CONDITION ? CODETRUE : CODEFALSE
 /* let age=18
  age >18 ? console.log("you are major") : console.log("you are not a major")                 
*/
//SWITCH STATEMENT : it is an efficient wayt to replace else if ladder
/*
switch(condition){
case 1:
  statement x;
  break;
  default:
    statement y
    break;
    }
    */
   //STRING METHODS= ALLOW YOU TO MANIPULATE AND WORK WITH TEXT(STRINGS)
   /*let username="spoorthy"
   console.log(username.charAt("0"))
   console.log(username.indexOf("o"))
   console.log(username.lastIndexOf("o"))
   console.log(username.length)
   let name="   spoo"
   console.log(name.trim())
   console.log(username.toLowerCase())
   console.log(username.toUpperCase())
   console.log(username.repeat(2))
   console.log(username.startsWith("s"))
   console.log(username.endsWith("t"))
   console.log(username.includes("y"))
   let num="123-456-689"
   console.log(num.replaceAll("-",""))
   console.log(username.replaceAll("o",""))
   console.log(num.padStart(15,"9"))
   console.log(num.padEnd(15,"9"))
   //STRING SLICING = CREATING A SUNSTRING FROM A PORTION OF ANOTHER STRING
      // SYNTAX = string.slice(start,end)
    let fullname="spoorthy reddy"
    console.log(fullname.slice(0,8))
    console.log(fullname.slice(9,14))
    console.log(fullname.slice(0,1))
    console.log(fullname.slice(-1))
    console.log(fullname.slice(-2))
    let email="spoo@gmail.com"
    console.log(email.slice(0,email.indexOf("@")))
    console.log(email.slice(email.indexOf("@"),14))
    console.log(email.slice(email.indexOf("@") + 1))
*/

//METHOD CHAINING = Calling one method after another in one continuous line of codel
  
// NO METHOD CHAINING
 /*let username =window.prompt("Enter the username")
 username=username.trim();
 let letter = username.charAt(0)
 letter = letter.toUpperCase()
 let extraChars= username.slice(1)
  extraChars=extraChars.toLowerCase()
 username = letter + extraChars
 console.log(username)
 

 //WITH METHOD CHAINING
 username=username.trim().charAt(0).toUpperCase() +  username.trim().slice(1).toLowerCase()
 console.log(username)
*/
//LOGICAL OPERATORS = used to combine and manipulate boolean values(true or false)
//                AND = &&
//                   OR= ||
//                  NOT = !
// = assignment operator
// == comparision operator(checks whether values are same) 
// === strict equality operator(checks whether values and datatype are same or not)
// != inequality operator
//!== strictly inequality operator
/*const PI=3.14
if(PI===3.14){
  console.log("That is not a pie")
}             
else{
  console.log("that is a pi")
}
//WHILE LOOP=  repeat a block of code until while condition is true
  let n=5;
  let i=0;
  while(i<=5){
    console.log(i)
    i++
  }
//FOR LOOP = repeat a block of code limited number of times
  */
 /*const min=1
 const max=3
 const answer=Math.floor(Math.random()* (max-min +1) + min)
 console.log(answer)
 let attempts=0
 let running=true
 while(running){
  let guess = window.prompt("Enter the number between the range 1-3")
 guess = Number(guess)
  if(isNaN(guess)){
  console.log("INVALID FORMAT")
 }
 else{
  attempts++
  if(guess<answer){
    console.log("Too Low ,Enter a bit higher number")
  }
  else if(guess>answer){
    console.log("Too greater!! Enter a bit lower")
  }
  else{
    console.log(`CORRECT!!The answer is ${answer} and the number of attempts are ${attempts}`)
    running=false;
  }
 }
}
 12
console.log(3)
*/
const min=1
 const max=3
 const answer=Math.floor(Math.random()* (max-min +1) + min)
 console.log(answer)
 let attempts=0
 let running=true
 let guess
 let h1=document.getElementById("h1")
document.getElementById("b").onclick = function(){
    guess = document.getElementById("mytext").value
    guess= Number(guess)
        if(isNaN(guess)){
         h1.textContent = "INVALID FORMAT"
        }
        else{
            attempts++
            if(guess<answer){
              h1.textContent = "Too Low ,Enter a bit higher number"
            }
            else if(guess>answer){
              h1.textContent= "Too greater!! Enter a bit lower"
            }
            else{
              h1.textContent = `CORRECT!!The answer is ${answer} and the number of attempts are ${attempts}`
              running=false;
            } 
        }
    }

