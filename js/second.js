/*let age=15;
let hasvoteridcard='no';

if (age>=15 && hasvoteridcard=='yes')
{
    alert("you can vote");
} else {
    alert('you cannot vote');
}*/
//let isLoggedIn = 1;

/*if (isLoggedIn == 0) {

document.write("Login");
    
}else{
document.write("Logout");
}*/
/*let option=isLoggedIn==1? "logout": "login"
document.write(option);*/
/*let user;
alert(user?? "guest user");*/
/*let input;
input = "";
switch (input) {
    case 1:
        document.write("continuee");
        break;
    case "yes":
        document.write("continue")
        break;
    case 0:
        document.write("continue")
    case "n":
        document.write("end")
        break;
    case "no":
        document.write("end")
        break;
        default:
            document.write("wrong")
}*/
//let counter = 1;
//while (counter<=10) {
// document.write('khan');
// counter--;
//}

/*let counter = 1;
while(counter<=10){
    document.write('khan');
    counter++;
}*/
/*let counter = 1;
let sum = 0;

while(counter <=12){
    if(counter % 2 == 0){
        sum=sum + counter;

    }
    counter++
}
document.write(sum);*/

/*let counter=15;
do {
    document.write('khan');
    counter++
} while(counter<=12);*/
/*for (let counter=1; counter<=10; counter++) {
    document.write('khan');
    
}*/
/*for (let counter = 1; counter <= 10; counter++) {
    if (counter == 5) {
        continue;
    }
    document.write(counter);
    document.write('<br>');
    for (counter2 = 1; counter2 < 3; counter2++) {
        if (counter == 3) {
            break;
        }
        document.write('khan');
        document.write('<br>');

    }

}*/
/*let age=prompt('Enter you age');
if(age !=null){
    document.write(`your age is ${age}`);
}
else{
    document.write('age field was blank');
}*/
/*let response = confirm('are you sure you want to delet?');

if (response) {
    document.write('deleted')
}else{
    document.write(' not deleted')
}*/

/*let str="hi bro how are you what are you doing now";

let substring = str.substr(7 , 11 );
console.log(substring);
let position = str.indexOf('bro');
console.log(position);*/

/*let book1 = "Math";
let book2 = "physics";
let book3 = "Bio";
let book4 = "computer science";

 console.log(book3);*/
 //Array topic ... 
 //let book = ["math","physics","Bio","computer science"];
//book.push("urdu"); //add new element in array,
//book.unshift("english");// add new element in front side.
//book.pop();//for remove last element in array.
//book.shift();//for remove front element in array.
//book.splice(2, 1);//for remove middle element in array,
//let asset = [1, 3, 40.3,"maths", 100];
 /*let book= new Array("math","physics","Bio","computer science")*/
//book[1] ="English"; //update new book
 //console.log(book.length);
 //book=[]; delet array element.
 //book.length=0; second type to delete element.
 //let book= "math";
 //let position = book.indexOf("Bio");
 //let text ="this is random text";
 //let wordarray= text.split('s'); 
 //let wordarray = book.join('- '); 
 //console.log(Array.isArray(book));
 //document.write(book);
/* let book2 =["urdu","english"];
 let book3 =["punjabi","english",];
 let NewBook = book.concat(book2,book3);
 console.log(NewBook);*/
 
//document.write(asset [3]);
/*let bookWithpages = [
    ["math",["300","500"]],
    ["physics","500"],
    ["english","400"]
];
 let fetch=bookWithpages[0][1][1];*/
 /*let length= book.length;
 for(i=0; i<book.length; i++ ){
    console.log(`Elemet ${i} is ${book[1]} \n `);
 }*/

/* book.forEach(myfu);
 function myfu(value){
     console.log(value);
 }*/
 /*for(i=1; i<=10; i++){
 document.write(`2 x ${i} =${2*i}`);
 document.write("<br>");
 }*/
 
/* function MulTable(num){ //function name (num) parameter .value name argument..
    for(i=1; i<=10; i++){
        document.write(`${num} x ${i} =${num*i}`);
        document.write("<br>");
        }
        document.write("<br><br>");     
 }
 MulTable(12);
   
 document.write("hello <br>");
 MulTable(5);*/
 /*function add(){
    // console.log(arguments[1]);
     //document.write(num1+num2);
     if(arguments.length == 0){
         console.log("no argument passed!");
     }else{
         let sum=0; //5+7+10=22
         for(let i = 0; i < arguments.length; i++) {
             sum = sum + arguments[i];
         }
         console.log(sum);
        }
 }
 let addition= add;
 addition(5,1);
 add(5,7,10 );*/
/* function compare(a, b) {
    // let d= [2,3,4];
    // console.log(a+b);
    // return d; 
    if(a>b){
        return 1;
    }
    else if (b>a){
        return -1;
    } else{
        return 0;
    }
 }
 let c =compare(6,6);
 document.write(c);*/
 // Global variable vs local variable
/* let car="audi"; //global variable use outside function
  function add() {
      let result=33; //local variable inside use in function
     console.log(result);
    }
    function sub() {
        let result= 50;
        console.log(result);
    }
  add();
  sub();*/
  //Anonymous functions
  //function expression
/*let show=function () {
    console.log("hello world");
};
show();*/
/*function show(){
    console.log("hello!!");

}

setTimeout(function show(){
    console.log("hello!!");

}
,3000);*/
//Imediately invoked function

 /*(function() {
     let string ="hello";
    console.log(string);
    alert(string);
     
})();*/
/*let person = {
    firstName:`khan`,
    lastName:`romi`,
    sayHello: function(){
        console.log("hello i  am "+this.firstName +" and i have  a " + car.brand +" car");
    }
};*/
//person.age=20;
/*for (let key in person){
    console.log(key + ": "+person[key]);
}*/
//person.firstName=`shan`; //modify name
//delete person.lastName;

//console.log(person);
//console.log(person[`firstName`]);
/*person.sayHello=function(){
    console.log("hello");
}*/
/*function greet(){
    console.log("hello");
}
person.sayHello = greet;*/
/* let car ={
     brand:`tata`,
     model:`safari`,
 }

person.sayHello();*/

/*var x = Math.max(4, 100, 3 ,88 ,-2);
console.log(x);*/
//let x =Math.floor( Math.random()*10)+1; //0 -10 or 1-10
/*function getRandom(min, max){
    let x = Math.floor(Math.random()*( max- min+1))+ min;
 return x;
}  
//let x = Math.floor(Math.random()*(25 - 15))+15;
//console.log(x);
console.log(getRandom(10,20));*/
//let x = new Date(2018, 11,13,10,33, );
//console.log(x);