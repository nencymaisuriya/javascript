// timing function(asynchornous)
// setTimeout(only one time executes base on time)
// setTimeInterval(continue excutes base on time interval)


// setTimeout,clearTimeout
// console.log("hello world");
// let id = setTimeout(() => {
//     console.log(10*3);
// }, 2000);
// console.log("helloo how are you!!")
// clearTimeout(id);



// setInterval ,clearInterval
// console.log("hello world");
// let id = setInterval(() => {
//     console.log(10*3);
// }, 2000); 
// console.log("helloo how are you!!");
// setTimeout(() => {
//     clearInterval(id);
// }, 10000);  


let id;
document.getElementById("start").addEventListener('click', () => {
    id = setInterval(() => {
        let date = new Date();
        let time = date.toLocaleTimeString();
        document.getElementById('timing').innerHTML = time;
    }, 1000);
});

document.getElementById("stop").addEventListener('click', () => {
    clearInterval(id);
});