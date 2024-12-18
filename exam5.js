//1.simple javascript prg
//sample array:mycolor=["red","green","white","black"];

// let mycolor=["red","green","white","black"];
// console.log(mycolor);
// ans:[ 'red', 'green', 'white', 'black' ]

// let mycolor=["red","green","white","black"];
// let arr = mycolor.join(" + ");
// console.log(arr);
// ans:red + green + white + black

// let mycolor=["red","green","white","black"];
// mycolor.pop();
// console.log(mycolor)
// ans:[ 'red', 'green', 'white' ]

// let mycolor=["red","green","white","black"];
// mycolor.splice(1)
// console.log(mycolor);
// ans:[ 'red' ]

// let mycolor = ["red", "green", "white", "black"];
// let Colors = [mycolor[1], mycolor[2]]; 
// console.log(Colors);
// ans:[ 'green', 'white' ]

// let add=["red","green","white","black"];
// add.push("orange");
// console.log(add);
// ans:[ 'red', 'green', 'white', 'black', 'orange' ]
//--------------------------------------------------------------------------------------------------------

//6.map()
// arr=[2,5,6,3,8,9]
// let data=arr.map((ele,index)=>{
//    return ele*2
// })
// console.log(data);

//ans:[ 4, 10, 12, 6, 16, 18 ]
//---------------------------------------------------------------------------------------------------------

//10.array reverse
// let arr=[1,2,3,4,5]
// let data=arr.reverse()
// console.log(arr)

// ans:[ 5, 4, 3, 2, 1 ]
//---------------------------------------------------------------------------------------------------------

//9.string:
//1
// let x=["a","i","r","p","l","a","n","e"]
// let arr=x.find((ele,index)=>{
//     return ele==="r"
// })
// console.log(arr)
// ans:r
//2
// let x = ["oxoxoxox"];
// x[0] = x[0].toUpperCase();
// console.log(x);
// ans:[ 'OXOXOXOX' ]
//3
// let x="A New Java Book"
// let upper = x.toUpperCase();
// console.log("uppercase:", upper);
// //ans:uppercase: A NEW JAVA BOOK

// let lower = x.toLowerCase();
// console.log("lowercase:", lower);
// //ans:lowercase: a new java book

//----------------------------------------------------------------------------------------------
//8.less than 8 char

// let word=['python','javascript','go','java','php','ruby']
// let arr=word.filter((ele,index)=>{
//    return ele.length>=8;
// });
//  console.log(arr);

//  ans:[ 'javascript' ]
//----------------------------------------------------------------------------

//12.num of total char

// let d=["n","e","n","c","y"]
// let arr=d.length;
// console.log(d+" total character= "+arr);

// ans:n,e,n,c,y total character= 5

//------------------------------------------------------------------------


//14.string to array
// let arr="hire the top1% freelance developers";
// console.log(arr)
// let data=arr.split(" ")
// console.log(data)
//ans:[ 'hire', 'the', 'top1%' ]

//----------------------------------------------------------------------------------


//15.array to string

// let arr=['5',32,'daniel'];
// let data=arr.toString()
// console.log(data)

// ans:5,32,daniel

//--------------------------------------------------------------------------------------------

//11.value is found or not
// let a=[1,2,3,4,5,6]
// let arr=a.includes(3)
// console.log(arr)

// ans:true

//---------------------------------------------------------------------------------------------
//2. sum of all ele
//for loop
// let arr = [21,67,65];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log("Sum using for loop:", sum);
// ans:Sum using for loop: 153

//foreach loop
// let arr = [21, 98, 6];
// let sum = 0;
// arr.forEach(element => {
//     sum += element;
// });
// console.log("Sum using forEach loop:", sum);
// ans:Sum using forEach loop: 125
//---------------------------------------------------------------------------------------
//3.min max
// console.log(Math.min(21,76,9));
// ans:9
// console.log(Math.max(21,8,5));
// ans:21

//--------------------------------------------------------------------------------------------------------
//4.ascii value
// let char = ['A', 'b', 'C']
// let ascii = char.map(c => c.charCodeAt(0));
//console.log(ascii);
//ans: [ 65, 98, 67 ]

//------------------------------------------------------------------------------------------
//5.filter()
// let num=[-23,-20,17,-12,-5,0,1,5,12,19,20];
//let positiveNum = num.filter(value => value >= 0);
//console.log(positiveNum);
// ans: [17,  0,  1, 5, 12, 19, 20]
//-------------------------------------------------------------------------------------------
//7.asending number
//  let num=[23,20,17,12,5,0,1,5,12,19,20];
//  num.sort((a, b) => a - b);
//  console.log("ascending Order:", num);
//ans:ascending Order: [ 0,  1,  5,  5, 12,12, 17, 19, 20, 20,23]

// let mycolor=["red","green","white","black"]
// mycolor.sort();
// console.log("ascending Order:", mycolor);
// ans:ascending Order: [ 'black', 'green', 'red', 'white' ]

//--------------------------------------------------------------------------------------------------------
//13.replace method
// let input = "i often take a walk with my dog in the eveing.his dog follow him everywhere.i dont feed my dog in the morning";
// let arr = input.replace(/dog/g, 'cat');
// console.log(arr);
//ans:i often take a walk with my cat in the eveing.his cat follow him everywhere.i dont feed my cat in the morning


  