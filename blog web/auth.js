import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCy5RxI7dOQ3cj8YWQCk3bL9U92a7g6vzs",
    authDomain: "signin-2e53e.firebaseapp.com",
    projectId: "signin-2e53e",
    storageBucket: "signin-2e53e.appspot.com",
    messagingSenderId: "959108418412",
    appId: "1:959108418412:web:f75320d0d892533a730149",
    measurementId: "G-R29SNGY7VK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.getElementById('signupButton');
    const showLoginButton = document.getElementById('showLoginButton');
    const showSignupButton = document.getElementById('showSignupButton');
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');
    const signupSection = document.getElementById('signupSection');
    const loginSection = document.getElementById('loginSection');
    const authContainer = document.getElementById('authContainer');
    const dashboardContainer = document.getElementById('dashboardContainer');

    signupButton.addEventListener('click', () => {
        const username = document.getElementById('signupUsername').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successful',
                    text: `Welcome, ${username}! You have successfully signed up.`,
                }).then(() => {
                    signupSection.style.display = 'none';
                    dashboardContainer.style.display = 'block';
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    });

    showLoginButton.addEventListener('click', () => {
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    showSignupButton.addEventListener('click', () => {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
    });

    loginButton.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        signInWithEmailAndPassword(auth, email, password)
            .then((data) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful',
                    text: 'Welcome back! You have successfully logged in.',
                }).then(() => {
                    loginSection.style.display = 'none';
                    dashboardContainer.style.display = 'block';
                });
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    });

    logoutButton.addEventListener('click', () => {
        signOut(auth).then(() => {
            dashboardContainer.style.display = 'none';
            authContainer.style.display = 'block';
            signupSection.style.display = 'block';
            loginSection.style.display = 'none';
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message,
            });
        });
    });
});
