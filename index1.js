// if operator
// const login = prompt("who are you?")
// const age = prompt('age?')
// let message;
// if (login == 'employee') {
//     message = 'hi';
// } else if (login == 'employer') {
//     message = 'hello';
// } else if (login == '') {
//     message = 'no login';
// } else {
//     message = '';
// }
// let message = (login === 'employee') ? 'hi': 
//                 (login === 'employer') ? 'hello':
//                 (login === '') ? 'no login': '';

// let message1 = (age == 18) ? 'adult': 'teenager'
// alert(message1)


// const user = prompt('who are you?');
// const message = `hi ${user}`;

// const html = `
//     <div>hello, ${user}</div>
//     `

// document.write(html);
// alert(message);

// const fruits = {
//     apples: 2,
//     oranges: 1
// }

// const vegs = {
//     carrots: 4
// }

// const fruitsAndVegs = {...fruits, ...vegs}

// const {apples} = fruits;
// const {carrots} = vegs;

// console.log(carrots)

// functions - declaration
// function sayHello() {
//     const name = prompt('what is you name?')
//     alert('hello', name);
// }

// const userLocation = confirm('share your location');
// if(userLocation) {
//     sayHello();
// }

// function calculate(a, b, operation) {
//     if(operation==='sum'){
//         return a+b;
//     }else {
//         return a-b;
//     }
// }
// const result = calculate(1,2)
// console.log(result)

// let num = 15;

// if(true) {
//     let num = 10;
//     function showMessage(text) {
//         let num = 20;
//         console.log(text)
//         console.log(num)
//     }

//     console.log(num)
//     showMessage('hello')
// }
// console.log(num)

// const usdCurr = 460;
// const eurCurr = 500;
// const discount = 0.5;
// converter(10000000, usdCurr, discount);

// function converter(amount, curr, discount) {
//     console.log(amount)
//     console.log(curr)
//     if(discount) {
//         console.log(amount*curr*discount);
//     } else {
//     console.log(amount*curr)
//     }
// }

// const sayHello = function() {
//     console.log('hello');
// }


// const user = 'employee';
// let sayHello;

// if(user==='employee') {
//     sayHello = function() {
//         console.log('hello 1')
//     }
// }else{
//     sayHello = function() {
//         console.log('hello 1')
//     }
// }

// sayHello();


// const user = 'employee';
// let sayHello;

// if(user==='employee') {
//     sayHello = () => {console.log('hello 1');}
    
// }else{
//     sayHello = function() {
//         console.log('hello 1')
//     }
// }

// sayHello();

// const showMessageBeforeES6 = function(message) {
//     return `${message} Aliya`;
// } 
// console.log(showMessageBeforeES6('here ES6 is'))
// const showMessage = (message) => `${message} Aliya`;
// console.log(showMessage('here I am'))


// arrays

// const array = [1, 2, 3, 4, 5, 6, 10];
// console.log(array.length)

// array[array.length-1] = 5;
// console.log(array)

// array.push(100)
// array.pop()
// console.log(array)

// array.shift()
// array.unshift(100)
// console.log(array)

// let arr = []
// const s = prompt('tell me about yourself')
// arr = s.split(',')
// console.log(arr)

// const j = arr.join('')
// console.log(j)

// const array1 = [1,23,4,3,5,6,2]
// array1.sort((a,b)=>a-b)
// const num = array1.find(function(item){
//         return item === 23
// })

// let arr = [5, 2, 1, -10, 8];

// arr.sort((a,b) => b-a)
// alert( arr ); // 8, 5, 2, 1, -10


// const num1 = array1.find((item, index, array1) => index === 4);
// console.log(num1)

// let num2;
// for(let i=0; i<array1.length; i++) {
//     console.log(`${i}s index of ${array1[i]}`)
//     if(array1[i]===23) {
//         num2=12
//     }
// }
// console.log(num2)

const data = ['a', 'b', 's', 'aaa', 'sasas'];

// data.forEach((item)=>console.log(item));

// const data1 = data.map(item=>{
//     if(item.includes('a')){
//         return 'a'
//     }
//     return item
// });
// console.log(data1)


// const data2 = data1.filter(item=>item==='a')
// console.log(data2)

// const data3 = data.some(item=>item==='b')
// console.log(data3)

// const data4 = data.every((item)=>{
//     return item ===''
//     item==='b'
// });
// console.log(data4)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item=>item.name)
// // const j = arr.join('')
// // console.log(j)
// alert( names ); // Вася, Петя, Маша

