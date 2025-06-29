// // Create a function which prints a number multiplied by three, call this function 3 times with different number
function multiple3(number) {
    console.log(number * 3);
}
multiple3(2)
multiple3(3)
multiple3(5)



// //Create an arrow function which takes two arguments and performs multiplication of these number
var product = (a, b) => {
    console.log('product of numbers:' + a * b)
}
product(4, 5)
product(5, 6)


// //Create an arrow function which take username as argument, if no value is passed in argument then it must print hello player
var username = (name = 'player') => {
    console.log('hello ' + name)
}
username('Sourav')



// //Create an arrow function to print Date and Month 
var print_date = () => {
    var date = new Date()
    console.log(date.getDate())
    console.log(date.getMonth())
}
print_date()


// //Using interval create a timer which shows seconds and milli-seconds
setInterval(()=>{
    let time=new Date();
    console.log(time.getSeconds()+'miliseconds:'+time.getMilliseconds())
},2000)

//Create a countdown timer starting from 1 and goes like 1,2,3..  using setInterval, displaying each second.
let count=0
setInterval(()=>{
count+=1
console.log(count)
},2000)

// log "Boom!" after a 3-second delay once.
setTimeout(()=>{
    console.log('Boom!')
},3000)


//Create a function that simulates rolling a six-sided die and returns a random number between 1 and 6.
var num=Math.floor(Math.random()*10+1)
console.log(num)

//Build a simple digital clock that updates the current hour, minute, and second every second.

setInterval(() => {
  let now = new Date();
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()

  console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
