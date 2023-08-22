let headers = document.querySelector('h1');
headers.style.color = 'blue'
let bod = document.getElementById('contacts')
if (bod){
    bod.style.color = 'red'
}

// let num = 158
// alert(num+2)

// let name = "Danil"
// alert(`Hello, ${name}!`)

// let myName = prompt("What is Your name?")
// alert(myName)

// showHello(name)

// let choice = confirm("Are you sure?")
// if(choice){
//     alert("We glad, you`re sure!")
// }else{
//     alert("Sorry, you`re not sure...")
// }

// let age = prompt("Enter your age: ");

//     if (age == 18) {
//         alert('Вы совершеннолетний, все можно!');
//     } else if (age == 10) {
//         alert('Вам надо учить уроки!');
//     } else if (age == 30) {
//         alert('Ложитесь спать, завтра на работу');
//     } else {
//         alert('Мы не знаем что Вам делать');
//     }
function arrayCreator(){
const array = [];
for (let index = 0; index < 5; index++) {
    let n = Math.floor(Math.random() * 10)
    array.push(n)
}
array.sort()
alert(array)
}

let arr = ['a', 'b', 'c']
arr[0] = "array"
arr[1] = "Is very cool!"
arr[2] = 'd'
alert(arr)

// for (let index = 0; index < array.length; index++) {
//     array[index]+=1
// }
// alert(array)

// function showHello(name){
//     alert(`Hello, ${name}!`)
// }


function Myfunc(){
    let fon = document.querySelector('body')
    fon.style.backgroundColor = 'grey'
}

function favoriteMovie(){
    while(true){
    let myFavorite = "Lord of the rings"
    let movie = prompt("Please enter your favorite movie: ")
    if(myFavorite == movie) break
    else alert("Try again...")
    }
}
favoriteMovie()
