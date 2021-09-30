
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('w3lName');
  var email = getInputVal('w3lSender');
  var subject = getInputVal('w3lSubject');
  var message = getInputVal('w3lMessage');

// save message
saveMessage(name,email,subject,message);

//Hide alert after 3 seconds
  setTimeout(function(){
   
//show alert
documnet.querySelector('.alert').style.display = 'none';
},3000);

//clear form
document.getElementById('contactForm').reset()
;}


//function to get form value
function getInputVal(id){
	return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,email,subject,message){
	var newMessageRef = messagesRef.push();
	newMessageRef.set({
		name: name,
		email: email,
		subject: subject,
		message: message
		
	});	
}