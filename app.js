// ************ Advance javascript is here***************



// var a = "hello world"


// function greet(){
//     a = "heloo advance javascript"
//     console.log(a)
// }
// greet()

// console.log(a)




// ******let and const in js********
// if(true){
//     let b = "yses"
//     // let is working as local variable
//     var a =   "hello world"
// }
// console.log(a)




// let fName = "abc"
// fName = "xyz"
// console.log(fName)


// *******************js template leateral*******************


// let fName= "abc"
// let lName = "xyz"
// // console.log(fName + " " + lName)


// console.log(`welcome to ${fName} ${lName}`)

// ***************de structrig of arry********************************







// var arr = ["ali", ,12, true, 100]
// // console.log(arr[2])

// let [firstValue,secondValue='kabeer',thirdValue]=arr


// // console.log(firstValue,secondValue,thirdValue)
// console.log(firstValue)
// console.log(secondValue)
// console.log(thirdValue)


// *****************de-structring of obj**************************

// let obj ={
//     name: "kabeer",
//     age: 21,
//     city:"nyc",
//     address: "xyz"
// }
// // console.log(obj.age)
// let{name,age,city,address}= obj
// console.log(name,age,city)



// ****************ternory operator*****************



// let age = 10;
// if(age < 20){
//     console.log("allowed")
// }else{
//     console.log("not allowed")
// }
 
// var age = 20;

// let check = age < 20 ? console.log("allowed"):console.log("not allowd")




// ******************spread operator**************


// let arr = [1,2,3,4,5,6,7,8,9]
// let arr1 = [...arr,"ali", "kbeer","nex"]


// // let result = arr.concat(arr1)
// console.log(arr1)



// ******************// include also string method*******************


// let fName =  "Muhammad";
// console.log(fName.includes('Mu'))

// console.log(fName.substring(1,2))




// math method in es6


// let number = 5.87;
// console.log(Math.sign(number))



// let number = 5;
// console.log(Math.sqrt(number))



// Asy && sync in js
//  console.log(" number one")
//  console.log("numner two ")
//  console.log("number three")

// console.log("1")
// setTimeout(() => {
//     console.log("first nuber after three second")
    
// }, 3000);
// console.log('no second is taking is')



// *****************fat arrow function in es6*****************


// function greet(){
//     console.log("hello greeting")
// }
// greet()






// var greet = function()
// {
//     alert("hello")
// }

// greet()



// let greet = () =>{
//     alert("hellow world");
//     // console.log("hello fat arrow functio")
// }
// greet()



// let greet = (val1, num1) =>{
//     console.log(cal1, num1)
//     return num1 + val1
// }

// greet(20,12)

// let greet = (num1,num2) => num1 + num2;
// console.log(greet(20,10))

// let greet = (num1,num2) =>  num1 + num2
// console.log(greet(30,1))



// ************pass by value and pass by reference****************

let a = 10;
let b = a;
b = b + 20;
console.log(b)
console.log(a)































































































































































