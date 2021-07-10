<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCyGWyT0XCIXetSLzFivF-gvRR69pJMbmM",
    authDomain: "nicodemus-othieno.firebaseapp.com",
    projectId: "nicodemus-othieno",
    storageBucket: "nicodemus-othieno.appspot.com",
    messagingSenderId: "361976714319",
    appId: "1:361976714319:web:8236471c18f259b159c63a",
    measurementId: "G-87PT2R2S22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

var database=firebase.database();

function checkforblank () {
	if (document.getElementById('comment').value == "") {
		alert('message cannot be empty');
		document.getElementById('comment').style.borderColor = "red";
		return false;
	}
}

function sendMessage() {
  var email=document.getElementById("email").value;
  var name=document.getElementById("name").value;
  var message=document.getElementById("message").value;

  var newMessageKey=database.ref().child('comments').push().key;
  database.ref('comments/'+newMessageKey+'/Email').set(email);
  database.ref('comments/'+newMessageKey+'/Name').set(name);
  database.ref('comments/'+newMessageKey+'/message').set(message);
}


document.getElementById('contactForm').addEventListener('submit',submitForm)

function submitForm(e) {
  e.preventDefault();
}

document.querySelector('.alert').getElementsByClassName.display='block';

function hideAlert() {
  document.querySelector('.alert').getElementsByClassName='none';
}

setTimeout(hideAlert,3000);
