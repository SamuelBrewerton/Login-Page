/*function login() {
    alert("Logged In");
    open("");
}
*/

function validateForm() {
    // Get input elements
    var login = document.forms["loginForm"]["username"];
    var password = document.forms["loginForm"]["password"];

    // Validate username field
    if (username.value == "") {
        alert("Please enter a valid username.");
        username.focus();
        return false;
    }

    // Validate password field
    if (password.value == "") {
        alert("Please enter a valid password.");
        password.focus();
        return false;
    }

    // If form is valid, submit ther form.
    return true;
}



