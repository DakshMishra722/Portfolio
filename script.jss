// DARK MODE TOGGLE
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// FORM VALIDATION
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return false;
    }
    return true;
}
