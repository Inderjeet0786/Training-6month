let n = 5;
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 0; j < 2 * i + 1; j++) {
        str += '*';
      }
      console.log(str);
    }

    // even no's----
     function printEven(arr) {
      arr.forEach(num => {
        if (num % 2 === 0) console.log(num);
      });
    }
    printEven([1, 2, 3, 4, 5, 6]);
    // discount---
    function calculateDiscount(price) {
      let discount = 0;
      if (price > 1000) discount = price * 0.1;
      else if (price >= 500) discount = price * 0.05;
      let finalPrice = price - discount;
      console.log(`Discount: ${discount}, Final Price: ${finalPrice}`);
    }
    calculateDiscount(1200);
    // bmi calculator
     function checkBMI(weight, height) {
      let bmi = weight / (height * height);
      console.log(`BMI: ${bmi}`);
      if (bmi < 18.5) console.log("Underweight");
      else if (bmi < 24.9) console.log("Normal weight");
      else if (bmi < 29.9) console.log("Overweight");
      else console.log("Obesity");
    }
    checkBMI(65, 1.7);

    // 5. Triangle type
    function triangleType(a, b, c) {
      if (a === b && b === c) console.log("Equilateral");
      else if (a === b || b === c || a === c) console.log("Isosceles");
      else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) console.log("Right Angle");
      else console.log("Scalene");
    }
    triangleType(3, 4, 5);

    // 6. Vowel counter
    function countVowels(str) {
      let count = 0;
      for (let char of str.toLowerCase()) {
        if ('aeiou'.includes(char)) count++;
      }
      console.log(`Vowel Count: ${count}`);
    }
    countVowels("Hello World");

    // 7. Print even index elements
    let x = [1, 4, 2, 42, 4, 6, 2, 56, 4, 56, 2];
    for (let i = 0; i < x.length; i += 2) console.log(x[i]);

    // 8. Print only strings

     let arr = ["Inder", '12', 23, '03.33', "Singh", true];
    arr.forEach(e => {
      if (typeof e === 'string') console.log(e);
    });
   

    // 9. Add elements and traverse
    let y = [1, 10, 100, 3, 6, 8];
    y.unshift(99);
    y.push(77);
    for (let i = 0; i < y.length; i++) console.log(y[i]);
    for (let i in y) console.log(y[i]);
    console.log("Length:", y.length);



    // 10. Fruit operations
    let fruits = [];
    fruits.push("Apple", "Banana");
    fruits.push("Orange");
    fruits.pop();
    fruits.push("Grapes");
    fruits.pop();
    fruits.splice(1, 0, "Pears");
    if (fruits.includes("Litchi")) console.log("Exist");
    fruits.forEach((fruit, index) => console.log(`${index + 1}: ${fruit}`));
