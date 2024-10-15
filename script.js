document.addEventListener("DOMContentLoaded", function() {
    // This code will run when the DOM is fully loaded
    const signUpButton = document.querySelector("button[data-bs-toggle='modal']");
    const modal = document.getElementById("signupModal");

    signUpButton.addEventListener("click", function() {
        console.log("Sign Up modal opened!");
    });

    // You can add more functionality here if needed
});

