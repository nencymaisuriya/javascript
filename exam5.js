//2 
 let array=[2,3,4]
//1.forloop
  //  let sum = 0; 
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]; 
//     }
/
// console.log("Sum using for loop:", sum);

// ans:Sum using for loop: 9
//2.foreach loop

   let sum=0;
    array.forEach((ele) => {
        sum += ele; 
    });
    console.log(array) 

    //ans:sum using forEach loop: 9
