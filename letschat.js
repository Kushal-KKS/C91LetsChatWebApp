var firebaseConfig = {

    apiKey: "AIzaSyCVo_3Wq-2p2yJwO4U8isvQuyFD7OQnqCg",

    authDomain: "c91-kwitterapp.firebaseapp.com",

    databaseURL: "https://c91-kwitterapp-default-rtdb.firebaseio.com",

    projectId: "c91-kwitterapp",

    storageBucket: "c91-kwitterapp.appspot.com",

    messagingSenderId: "111402295648",

    appId: "1:111402295648:web:cddf91c2cd890d1c747e05"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function addUser() {
    user_name = document.getElementById("user_name").ariaValueMax;

    localStorage.setItem("user_name", user_name);

    window.location = "letschat.html";
}

