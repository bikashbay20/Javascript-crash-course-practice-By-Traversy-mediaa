// let, const
// const s='technology , tools,node , nextjs';

// console.log (s.split(''));
// console.log (s.length);
// console.log (s.toUpperCase());
// console.log(s.repeat('10'));
// console.log(s.split(','));



// Arrays -variable thats hold multiple values

// const fruits = ['apple','mango', 'orange','banana'];
// console.log(fruits);
// fruits [2] = 'graps';
// fruits.push ('mango');
// console.log(fruits[2]);

// console.log (fruits.indexOf('banana'));

// Object

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     Age: '30',
//     Hobbies: ['Movies', 'travelling', 'musics'],
//     address: {
//         street: '20 main st',
//         city: 'kohl',
//         state: 'state2'
//     }
// }
// person.email = 'john@gmail.com';
// console.log(person)
// // console.log(person.lastName, person.Age, person.Hobbies, person.address);
// // console.log(person.Hobbies[1]);


//  const todo =[
// {
//     id:1,
//     text:'take out trash',
//     isComplete:true
// },
// { 
//     id:2,
//     text:'meeting with boss',
//     isComplete:true
// },
// {
//     id:3,
//     text:'dentist appts',
//     isComplete:false
// }
// ];

// console.log(todos);

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);//

//       for

// for(let i=0; i <=10; i++) {
//     console.log('for loop number: ${i}');
// }


// // while

// let i=0;
// while(i<10) {
// console.log('while loop number:${i}');
// i++;
// }

//  for(let i=0; i < todos.length;i++) {
//     console.log(todos [i].text);
//  }

//  for (let todo of todos) {
//     console.log ( todo.id);
//  }

// forEach map , filter

// const todoCompleted = todos.filter(function(todo) {
// return todos.isCompleted===true;
// // });.map(functon(todo) {
// // return todo.text;
// })

// console.log(todoCompleted);


// const todoCompleted = todo.filter(function(todo) {
//     return todo.isComplete===true;
// }).map(function(todo){
//     return todo.text;
// })

// console.log(todoCompleted);

// const x=6;
// const y=11;

//  if(x > 5 && y > 10) {
//     console.log('x is more than 5 or y is more than 10');
//  }



//     console.log('x is 10');
// } else if (x < 10){
//     console.log('x is greater than 10')
// } 
// else {
//     console.log('x is less than  10');
// }

// const x=1;

// const color ='green';

// switch (color) {
//     case 'red':
//     console.log("color is red");
//     break;
//     case "blue":
//         console.log('color is blue');
//         break;
//         default:
//         console.log('color is not red or blue');
//         break;
// }


//   function
// function addNums(num1=1,num2=1){
//     return num1+num2;
// }
// console.log(addNums(5,5));

// constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }



// Person.prototype.getBirthYear = function () {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function () {
//     return '${this.firstName} ${this.lastName}';
// }

// //   class

// class Person {
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = dob;
//     }
//     getBirthYear(firstName, lastName, dob) {
//         return this.dob.getFullYear();
//     }
//     getFullName() {
//         return '${this.firstName} ${this.lastName}';
//     }
// }

// //  instantiate Object

// const person1 = new Person('Ajay', 'Das', '01-11-1990');
// const person2 = new Person('Bijay', 'Rana', '02-05-1999');
// const person3 = new Person('Rahul', 'Jha', '10-12-1998');
// // console.log(person1,person2,person3);
// console.log(person2.getFullName());
// console.log(person1);
