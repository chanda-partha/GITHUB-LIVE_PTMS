import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAa0LS8iUVaYrar-bXk65SpaJJoW7CgNR0",
  authDomain: "myriyad4-tech.firebaseapp.com",
  projectId: "myriyad4-tech",
  storageBucket: "myriyad4-tech.appspot.com",
  messagingSenderId: "486392673926",
  appId: "1:486392673926:web:3aaad5395d2b2ddc738307"
};

// Init
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Button
const submit_report = document.getElementById("btn-report-submit");

if (submit_report) {
    submit_report.addEventListener("click", async () => {

        const reportTxt = document.getElementById("reportText").value.trim();
        const reporterName = document.getElementById("enter-name").value.trim();

        // Validation
        if (!reportTxt || !reporterName) {
            alert("Fill all the fields");
            return;
        }

        try {
            await addDoc(collection(db, "reports"), {
                report: reportTxt,
                reporterName: reporterName,
                createdAt: serverTimestamp()
            });

            document.getElementById("msg").innerText = "Report submitted successfully!";
            
            // Clear fields
            document.getElementById("reportText").value = "";
            document.getElementById("enter-name").value = "";

        } catch (err) {
            console.error(err);
            alert("Failed to submit report! Try again");
        }

    });
}

// Call admin
function callAdmin() {
    window.location.href = "tel:01537297935";
}