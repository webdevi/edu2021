'use strict'; 

/*
    문제출처 : https://drive.google.com/file/d/1smYHFS5fbgdyGHjBmXx2P-IyY3VWJ9tm/view 
     
*/ 
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join(","));
}
  
  // Q2. make an array out of a string
  {
    const fruit2 = '🍎, 🥝, 🍌, 🍒';
    console.log(fruit2.split(", "));
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    console.log(array.reverse());
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5]; 
    console.log(array.slice(2, array.length));
    console.log(array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66), 
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      let t = students.filter((val, i)=>val.score === 90 );
      console.log(t[0].name);
  }
  
  // Q6. make an array of enrolled students
  {
    let t = students.filter((val, i)=>val.enrolled );
    console.log(t);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  { 
      let result = []; 
      for(let arr of students){
         result.push(arr.score);
      }
      console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    console.log(students.filter(val=>val.score < 50)[0].name);
  }
  
  // Q9. compute students' average score
  {
    let avg = students.reduce((acc, val)=> acc + val.score, 0) / students.length ;
    console.log( avg ); 
   
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let result = []; 
    for(let arr of students){
       result.push(arr.score);
    }
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    let result = students.map((val, idx)=>val.score)
                         .sort((a, b)=>a-b);
    // for(let arr of students){
    //     result.push(arr.score);
     
    console.log(result);
    

  }