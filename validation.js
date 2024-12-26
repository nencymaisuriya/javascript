let form=document.querySelector("form");
let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let pass=document.getElementById("password");
let gender=document.getElementById("gender");
let hobbies=document.getElementById("hobbies");
let date=document.getElementById("dob");

form.addEventListener("submit",(event)=>{
 console.log(event);
event.preventDefault();
console.log(fname.value);
console.log(lname.value);
console.log(email.value);
console.log(password.value);
console.log(gender.value);
console.log(dob.value);
console.log(hobbies.value);

});

if(fname.value===""){
    document.getElementById("err").innerHTML="empty"
};
    


