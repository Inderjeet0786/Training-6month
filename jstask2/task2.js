/*Create an array named friends with five of your friends name and perform the following:
Print the array and its length
Print friend at position 3
Add a new Friend name BillGATES at first position
Delete friend from last position
Traverse each friend name
*/

/*
let friends=['Sagar','Sahil','Rohit','Ram','Arjun',]
console.log(friends);
console.log(friends.length);
console.log(friends[3]);
friends.unshift('billgates');
console.log(friends);
friends.pop();
console.log(friends);
for(y in friends){
    console.log(friends[y]);
}


// Create an object named employee with keys employee name, department and salary. Perform following operations: 
// Print the object and its type. 
// Delete department
// Add a new key named joinYear 
// Replace the employee_name with Elon_Musk
// 
let obj={
    empname:'Atul',
    dept:'computer_science',
    salary:'34000',
}
console.log(obj);
console.log(typeof(obj));
delete obj.dept
console.log(obj);
obj.joinyear=2020
console.log(obj);
obj.empname='Elon_musk'
console.log(obj);

*/



// Create a function that takes an array of numbers and returns their average.
// Create an object called book with title, author, and pages. Write a function that adds a new property genre to it.
// Create an array of integers and write a function that doubles each element and prints the result.
// Write a function that accepts an object with keys name and city, and returns a greeting message using those values.
// Create an array of number using for in print each number multiplied by 2

//   1

/*function sum_avg(numbers){
    let sum=0
  
    if(numbers.length==0){
        console.log('average not possible');
        
    }
     else  for(i in numbers){
        sum+=numbers[i]
    }
    return sum/numbers.length
}
let arry=[1,2,3,4]
sum_avg(arry)
console.log(sum_avg(arry));*/



//-----2
/*
let obj={
    title:'rd_sharma vol1',
    author:'rd_shrma',
    pages:1000
}
function advalue(obj1){
    obj1.genere='palampur'
    console.log(obj1);
    
}
advalue(obj)

*/

//    3
/*

let numbers = [10, 2, 3, 4, 5];

function doubleElements(arr) {
    for(num in arr) {
        console.log(arr[num] * 2);
}
}

doubleElements(numbers);
*/

//   4
/*
function greetPerson(person) {
    return `Hello ${person.name} from ${person.city}!`;
}

let user = { name: "Rajveer", city: "Amritsar" };
console.log(greetPerson(user));


let nums = [10, 20, 30, 40];

for (let index in nums) {
    console.log(nums[index] * 2);
}
    */

// ----5th 
/*
function double(arr){
    for(i in arr){
     arr[i] = arr[i]*2
    }
    
    
}
arr=[1,3,4,5]
double(arr)
for(i in arr){
    console.log(`num ${i}:${arr[i]}`);
    }


*/



// Using the given zomato data print name and rating of each restaurant via for loop and also print the rating and name of third and fourth restaurant individually.



let data= [
        {
            "type": "restaurant",
            "info": {
                "resId": 21023192,
                "name": "Khadak Singh Da Dhaba",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/21023192/8723ea7eee89d2cc19ac02d4690ecf1a_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/21023192/8723ea7eee89d2cc19ac02d4690ecf1a_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/21023192/f01021550a0460a45daf44e4f3649d38_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "3.9",
                },
            },
            
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 21563626,
                "name": "The Terrace",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/6/21563626/28cef8f04bcd0624671adbd14a17af0c_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/6/21563626/28cef8f04bcd0624671adbd14a17af0c_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "3.1",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 15277,
                "name": "Sheikhupurian Da Vaishno Dhaba",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/15277/cfc44d58ddcc509a848bf5190d0690af_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/15277/cfc44d58ddcc509a848bf5190d0690af_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/7/15277/f20bb6fe8a6309e7adbe2c74295c8229_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.1",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 20873212,
                "name": "Under The Mango Tree",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/2/20873212/6daf3627cee04694abbaae2cb1604004_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/2/20873212/6daf3627cee04694abbaae2cb1604004_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "4.2",
                },
               
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 21110297,
                "name": "The Bear House Cafe and Bar",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/7/21110297/8d9f429db7dcf4a15a98bed18fc59b66_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/7/21110297/8d9f429db7dcf4a15a98bed18fc59b66_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": false
                },
                "rating": {
                    "rating_text": "3.4",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 19027493,
                "name": "Biryani By Kilo",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/chains/3/19027493/f3caffbbce8999500d021f636a1db150_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/chains/3/19027493/f3caffbbce8999500d021f636a1db150_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/3/19027493/09e8a8c41bdca7aabd893e055417ff58_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.2",
                },
            },
        },
        {
            "type": "restaurant",
            "info": {
                "resId": 18711090,
                "name": "The Brew Estate",
                "image": {
                    "url": "https://b.zmtcdn.com/data/pictures/0/18711090/323a55370f78bfefbe58a21914e098ed_featured_v2.jpg",
                    "urlWithParams": "https://b.zmtcdn.com/data/pictures/0/18711090/323a55370f78bfefbe58a21914e098ed_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                },
                "o2FeaturedImage": {
                    "url": "https://b.zmtcdn.com/data/pictures/0/18711090/a4898ba28de29e5a1079704f6cfd4d28_o2_featured_v2.jpg"
                },
                "rating": {
                    "rating_text": "4.1",
                },
            },
        },
    ]
//name and rating of 3rd and 4th rerstrunant 
console.log(`name of 3rd restrunant is:${data[2].info.name} & rating:${data[2].info.rating.rating_text}`);
console.log(`name of 3rd restrunant is:${data[3].info.name} & rating:${data[3].info.rating.rating_text}`);
for(i in data){
    console.log(`name of restraunts:${data[i].info.name}&rating:${data[i].info.rating.rating_text}`);
    
}