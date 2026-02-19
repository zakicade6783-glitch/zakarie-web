// Function-ka badhanka Next
function nextSlide() {
    alert("Waxaad gujisay Next! Halkan waxaad ku xiran kartaa sawirka xiga.");
}

// Function-ka badhanka Previous
function prevSlide() {
    alert("Waxaad gujisay Previous!");
}

// Animation dheeraad ah marka bogga la furo
window.addEventListener('load', () => {
    const content = document.querySelector('.content');
    content.style.opacity = '0';
    setTimeout(() => {
        content.style.transition = 'opacity 2s ease-in';
        content.style.opacity = '1';
    }, 500);
});
// Shaqada Login-ka
function handleLogin() {
    const emailValue = document.getElementById('user-email').value;

    // Hubi inuu email-ku sax yahay (lehna @ iyo .)
    if (emailValue.includes("@") && emailValue.includes(".")) {
        // Ku keydi email-ka computer-ka qofka si uusan mar dambe u weydiin
        localStorage.setItem("userLoggedIn", "true");
        // Qari Popup-ka
        document.getElementById('login-overlay').style.display = 'none';
        alert("Waa lagu guuleystay! Ku soo dhowaad Eng Zakarie Website.");
    } else {
        alert("Fadlan geli Email sax ah si aad u gasho website-ka.");
    }
}

// Hubi markasta oo bogga la furo haddii qofku horay u soo galay
window.onload = function() {
    if (localStorage.getItem("userLoggedIn") === "true") {
        document.getElementById('login-overlay').style.display = 'none';
    } else {
        document.getElementById('login-overlay').style.display = 'flex';
    }
};