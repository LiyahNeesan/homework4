// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge(age) {
//     return (age > 18) ? true: confirm('Родители разрешили?')
// }


// Напишите функцию pow(x,n), которая возвращает x в степени n. 
// Иначе говоря, умножает x на себя n раз и возвращает результат.

// function pow1(x, n) {
//    let result = x;
//    for (let i = 1; i < n; i++){
//         result *= x;
//    }
//    return result;
// }

// let x = prompt('x?', '')
// let n = prompt('n?', '')

// if (n < 1) {
//     alert(`use only a whole number`)
// }else{
//     alert(pow1(x, n));
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

// Напишите код, который создаст ещё один массив объектов 
// с параметрами `id` и `fullName`, где `fullName` – состоит из `name` и `surname`.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));
// // usersMapped = [
// //   { fullName: "Вася Пупкин", id: 1 },
// //   { fullName: "Петя Иванов", id: 2 },
// //   { fullName: "Маша Петрова", id: 3 }
// // ]

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
