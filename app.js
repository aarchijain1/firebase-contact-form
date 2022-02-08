//Unique Firebase Object
var firebaseConfig = {
  apiKey: "AIzaSyAV54xlPqnrUiGodKNiSvmtFtoIRsVQfJY",
  authDomain: "contact-form-9dcf0.firebaseapp.com",
  projectId: "contact-form-9dcf0",
  storageBucket: "contact-form-9dcf0.appspot.com",
  messagingSenderId: "757522057243",
  appId: "1:757522057243:web:ca6006123af14fc75f90be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore()

//Variable to access database collection
const db = firestore.collection("formData")

//Get Submit form
let submitButton = document.getElementById('submit')

//Create Event Listener To Allow Form Submission
submitButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault()

  //Get Form Values
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let message = document.getElementById('msg').value

  //Save Form Data To Firebase
  db.doc().set({
   name: name,
   email: email,
   msg: message
 }).then( () => {
   console.log("Data Saved")
 }).catch( (error) => {
   console.log(error)
 })

 //Alert
 alert("Your Form has been Submitted Successfully")
})
