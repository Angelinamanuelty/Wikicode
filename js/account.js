function login(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    //Admin Account
    if (email === "admin@gmail.com" && password === "admin123") {
        window.location.href = "loginSuccessAdmin.html";
    } 

    //User Account
    else if (email === "kenitplaygaming@gmail.com" && password === "12345678") {
        window.location.href = "loginSuccessUser.html";
    } 
    else if (email === "nanuelmaylinn@gmail.com" && password === "12345678") {
        window.location.href = "loginSuccessUser.html";
    } 

    //Invalid Account
    else {
        errorMessage.style.display = "block"; 
    }
}
