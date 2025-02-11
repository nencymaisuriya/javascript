document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !email || !password) {
            alert("Please fill in all fields.");
            return;
        }

       
        let users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some(user => user.email === email)) {
            alert("User already exists. Please use another email.");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Sign up successful! You can now log in.");
        signupForm.reset();
    });
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const userData = JSON.parse(localStorage.getItem(email));
    if (!userData || atob(userData.hashedPassword) !== password) {
        alert("Invalid email or password");
        return;
    }
    
    localStorage.setItem("loggedInUser", email);
    alert("Login successful!");
    window.location.href = "index.html";
});


