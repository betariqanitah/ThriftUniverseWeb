function validate(){
  var name = document.getElementById("w3lName").value;
  var email = document.getElementById("w3lSender").value;
  var subject = document.getElementById("w3lSubject").value;
  var message = document.getElementById("w3lMessage").value;
  var error_message = document.getElementById("error_message");

  error_message.style.padding = "10px";
  error_message.style.color = "Red";
  
  var text;
  if(name.length < 5){
    text="Please Enter valid Name*";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email*";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 5 && subject==""){
    text = "Please Enter Correct Subject*";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 5 && message==""){
    text = "Please Enter a Message*";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}





