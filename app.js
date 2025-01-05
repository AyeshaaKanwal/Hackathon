// Import Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvUXutDoItu4FhLYAFNTDyYwFOQ6V3Q0Q",
    authDomain: "my-awesome-project-56968.firebaseapp.com",
    projectId: "my-awesome-project-56968",
    storageBucket: "my-awesome-project-56968.firebasestorage.app",
    messagingSenderId: "652084552626",
    appId: "1:652084552626:web:2bc4405e8fbdf373a1baab",
    measurementId: "G-E1E4RT66HY"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("contactForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  try {
    await addDoc(collection(db, "contacts"), {
      name,
      email,
      message,
      timestamp: new Date(),
    });
    alert("Message sent successfully!");
    e.target.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Failed to send message. Please try again.");
  }
});