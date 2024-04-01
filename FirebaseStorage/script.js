const firebaseConfig = {
    apiKey: "AIzaSyBLsH7u58BBYLbyDzp3AEjAHXGXPHGqaps",
    authDomain: "bitcent-desc-f09d7.firebaseapp.com",
    projectId: "bitcent-desc-f09d7",
    storageBucket: "bitcent-desc-f09d7.appspot.com",
    messagingSenderId: "221920479446",
    appId: "1:221920479446:web:3799ead21f790121d32177"
};

firebaseConfig.initializeApp(firebaseConfig);
const storage = firebase.storage();

const ref = storage.ref("/Images");

const filebase64 = '/9j/4AAQDJKADSKDSAD/4gKgDSADUWADJNAN'

ref.child("Foto.jpg").putString(filebase64, "base64").then((snapshot) => {
    console.log(snapshot);
}) 

// pegando arquivo pelo input
// const fileInput = document.getElementById("fileInput")

// fileInput.addEventListener("change", (e) => {

//     const file = e.target.files[0]
//     ref.child(file.name).put(file).then((snapshot) => {
//         console.log(snapshot);
//     })
// })
