

// Arrays Methods


// Modify

// let numbers = [34,43,5,43,5,67, 'jksdjfk', 3.3, true]
// let numbers = [34,43,5,43,5,67,]

// console.log(numbers)

// numbers[2] = "Hello"

// console.log(numbers)



// Delete

// let numbers = [34, 43, `hello`, 43, 5, 67]

// console.log("Before : ",  numbers)
// let deleteBtn = document.getElementById('delete');
// let list = document.getElementById('list');

// delete numbers[2]
// console.log(`After : `,  numbers)


// numbers.map((el, ind) => {
//     list.innerHTML += `<span> After Delete </span> <li>${el} --> ${ind}</li>`;
// })




// deleteBtn.addEventListener('click', () => {

//     let getValue = document.getElementById('getIndex').value;

//     // let isNumber = isNaN(getIndex) ? 'delete hojaye' : 'nahi to hat jaye';

//     let myNumber = isNaN(getValue) ? getValue : Number(getValue);

//     delete numbers[numbers.indexOf(myNumber)];
//     list.innerHTML += '<br><br>';
//     numbers.map((el, ind) => {
//         list.innerHTML += `<span> After Delete </span> <li>${el} --> ${ind}</li>`;
//     },
// )
// })









// push

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.push(54)

// console.log("After : " + numbers)



// pop

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.pop()

// console.log("After : " + numbers)


// shift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.shift()

// console.log("After : " + numbers)


// Unshift

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)


// numbers.unshift("hi")

// console.log("After : " + numbers)



// sort

// let numbers = [34,43,5,43,5,67, 100, 670, 980];
// let numbers = [];
// let numbers = [4,7,2,1,8,9,5,6,0,0.2]
// let numbers = ["Farhan", "Zahid", "Kamran", "Imran", "Aslam","Saad", "Babar","Abrar"]

// console.log("Before : " + numbers)

// numbers.sort((a,b) => a - b)
// numbers.map((el)=> {console.log(el)})
// numbers.sort()

// console.log(numbers[0].length)

// console.log("After : " + numbers)




// reverse

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.sort((a,b)=>{return a -b})
// numbers.reverse()

// console.log("After : " + numbers)



// slice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// // let abc = numbers.slice(4,6)

// let abc = numbers.slice(0,4)



// // console.log("After : " + numbers)
// console.log("ABC : " + abc)


// spread operator



let nums = [5,7,3,2,7,72,23,1,5,9];

console.log("nums:",nums);

let nums2 = [...nums];
// console.log(...nums)

nums2[1] = 90000;

console.log("nums:",nums);
console.log("nums2:",nums2);



// let a = [5,7,3,2,7,72,23,1];

// let b = [];

// // b = a
// b = [...a] //clone

// console.log("a : "  + a)
// console.log("b : " + b)


// b[2] = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)




// Example of coping variable

// let a = 23;

// let b;

// b = a

// console.log("a : "  + a)
// console.log("b : " + b)


// b = "Hello"

// console.log("a : "  + a)
// console.log("b : " + b)



// splice

// let numbers = [34,43,5,43,5,67]

// console.log("Before : " + numbers)

// numbers.splice(2,3);
// // numbers.splice(3,2)

// console.log("After : " + numbers)
// console.log("ABC : " + abc)


// ********Concat**********

// let carArrays = [];
// console.log("Before : " + carArrays)

// let carArrays2 = ["Honda", "Toyota", "Daihatsu"]
// let carArrays3 = ["Huyndai", "Mercedes", "Ferari"]
// let carArrays4 = ["Mira", "Prius", "Mehran"]
// let nums = [2,4,6,7];

// carArrays = carArrays3.concat(carArrays4)

// carArrays = arrays.concat(arrays2, numberArrays);

// console.log("After : " + carArrays)
// console.log("ABC : " + abc)


// ********Join**********


// let arrays3 = arrays.join(" ")

// let arrays3 = carArrays2.join(" | ")

// document.write(arrays3)
// console.log(arrays3)


// ********isArray**********  //used for identifing array


// let cars = ["Civic","Mira","Prius","Vitz","Bolan"];
// console.log(cars)


// let car = "Mehran"

// console.log(Array.isArray(car))
// console.log(Array.isArray(cars))




// **********indexOf************    // find the value through index from start


// let cars = ["Civic","Mira","Prius","Mira","Vitz","Bolan"];
// console.log(cars)



// console.log(cars.indexOf("Mira"))
// console.log(cars.indexOf("jdskfj"))
// console.log(cars.indexOf("prius"))

// let car = cars.indexOf("Mira",1)

// document.write(car)




// **********lastIndexOf************     // find the value through index from last

// let cars = ["Civic","Mira","Vitz","Prius","Vitz","Bolan"];

// console.log(cars)

// let car = cars.lastIndexOf("Vitz")

// console.log(car)


// **********includes()************     // find if value present in the array or not

// let cars = ["Civic","Mira","Prius","Vitz","bolan"];

// console.log(cars)

// let car = cars.includes("Vitz")

// let val = "BOLAN";

// console.log(cars.includes(val.toLowerCase()))



// **********some()************          //find 1st value via conditions and return values in true or false
// let ages = ["hassan","ali","ayaan"];
// let ages = [23,45,6,8,9,12,14,17,29];

// let b = ages.some((val) => val > 52 );

// let myfunction = age => age >= 18;

// let b = ages.some(a => a === "hassan")
// console.log(b)

// b = ages.some(myfunction)

// console.log(b)

// **********every()************        //find all values via conditions and return values in true or false

// let ages = [2,4,6,7,8,6,4,18.0];
// let ages = ["d","sd","td"];


// let b = ages.findIndex(a => a >= 18)

// b = ages.every(age => age <= 18)

// document.write(b)
// console.log(b)



// **********find()************     //find first value via conditions and return actual values

// let ages = [2,4,6,7,8,6,4,45,23,18,56,23,23];
// let ages = ["Civic","Mira","Prius","Vitz","bolan"];

// b = ages.find(age => age == "Mira")

// console.log(ages.indexOf("Mira"));

// document.write(b)
// console.log(b)




// **********findIndex()************    //find first values via conditions and return index

// let ages = [2,4,6,7,8,6,4,45,23,18,56,23,23];

// let myfunction = age => age >= 18;

// b = ages.findIndex(myfunction)

// document.write(b)



// **********filter()************    //find all values based on coditions and place on new array

// let ages = [43,18,2,6,83,3,6,9,6,342,4,7,83,7,34,334,23]

// console.log(ages);
// let b = ages.filter(ab => ab >= 18);

// document.write(b)
// console.log(b)















