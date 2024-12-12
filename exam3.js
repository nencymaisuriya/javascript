//1.Write JS Program to check number is Palindrome or not.
// let n=47674,sum=0,b,m=n
// while(n>0)
// {
//   b=n%10
//   sum=sum*10+b
//   n=parseInt(n/10)
// }
// console.log(sum)
// if(m==sum){
//   console.log("palindrome number",sum)
// }
// else{
//   console.log("not a palindrome number",sum)
// }

//ans:47674
//palindrome number 47674

//------------------------------------------------------------------------------------------------

//2.Print Series 1, 4, 3, 16, 5, ....

// let i=1;
// do{
//     console.log(i%2===0?i*i:i)
//     i++;
    
// }while(i<=5)
//ans:1
// 4
// 3
// 16
// 5
//------------------------------------------------------------------------------------------------------

//3.Print Multiplication table of n

// let num=4;
// for(i=1;i<=10;i++){
//     console.log(num*i)
// }
//ans:4
// 8
// 12
// 16
// 20
// 24
// 28
// 32
// 36
// 40

//----------------------------------------------------------------------------------------------------------

//4 .find out sum of digit of given number.

// let number = Number(prompt("enter the number"));
// let sum = 0;

// while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = (number - (number % 10)) / 10;
// }

// console.log(" sum of the digit is:", sum);

// ans:21
// sum of the digit is: 3

//------------------------------------------------------------------------------------------------

//5.print series 1, 1, 2, 3, 5, 8, ...
//febonacii series
// let n =+prompt("enter any number:")
// let a=1,b=1,c;
// for(i=1;i<=n;i++){
//     if(i==1){
//         console.log(a)
//     }else if(i==2){
//         console.log(b)
//     }else{
//         c=a+b;
//         a=b;
//         b=c;
//         console.log(c);
//     }
// }

// ans:
// 1
// 1
// 2
// 3
// 5
// 8

