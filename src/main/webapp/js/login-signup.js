// xxxxxxxxxx Working For Sign Up Form xxxxxxxxxx
// xxxxxxxxxx Full Name Validation xxxxxxxxxx
function checkUserFullName(){
    var userFullName = document.getElementById("userFullName").value;
    var flag = false;
    if(userFullName === ""){
        flag = true;
    }
    if(flag){
        document.getElementById("userFullNameError").style.display = "block";
    }else{
        document.getElementById("userFullNameError").style.display = "none";
    }
}

// xxxxxxxxxx Email Validation xxxxxxxxxx
function checkUserEmail(){
    var userEmail = document.getElementById("userEmail");
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userEmail.value.match(userEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userEmailError").style.display = "block";
    }else{
        document.getElementById("userEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Password Validation xxxxxxxxxx
function checkUserPassword(){
    var userMatchPassword = document.getElementById("userMatchPassword");
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userMatchPassword.value.match(userPasswordFormate)){
  		flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userMatchPasswordError").style.display = "block";
    }else{
        document.getElementById("userMatchPasswordError").style.display = "none";
    }
}

// xxxxxxxxxx Submitting and Creating new user in firebase authentication xxxxxxxxxx
function signUp(){
	var userFullName = document.getElementById("userFullName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userMatchPassword = document.getElementById("userMatchPassword").value;
    var userEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
	
    var checkUserEmailValid = userEmail.match(userEmailFormate);
    var checkUserPasswordValid = userMatchPassword.match(userPasswordFormate);

    if(userFullName === ""){
        return checkUserFullName();
    }else if(checkUserEmailValid == null){
        return checkUserEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserPassword();
    }else{    

        firebase.auth().createUserWithEmailAndPassword(userEmail, userMatchPassword).then((success) => {
            var user = firebase.auth().currentUser;
            var uid;
            if (user != null) {
                uid = user.uid;
            }
            var firebaseRef = firebase.database().ref('/users');
            var userData = {
            	userFullName: userFullName,
                userEmail: userEmail,
                userMatchPassword: userMatchPassword,
                userPhone: "phone number",
            	userAddress: "enter address",
            	userPostalCode: "enter postal code",
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../index.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Email Already Used',
                text: "Please Check Your Email",
            })
        });
    }
}

// xxxxxxxxxx Working For Sign In Form xxxxxxxxxx
// xxxxxxxxxx Sign In Email Validation xxxxxxxxxx
function checkUserSIEmail(){
    var userSIEmail = document.getElementById("userSIEmail");
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var flag;
    if(userSIEmail.value.match(userSIEmailFormate)){
        flag = false;
    }else{
        flag = true;
    }
    if(flag){
        document.getElementById("userSIEmailError").style.display = "block";
    }else{
        document.getElementById("userSIEmailError").style.display = "none";
    }
}
// xxxxxxxxxx Sign In Password Validation xxxxxxxxxx
function checkUserSIPassword(){
    var userSIPassword = document.getElementById("userSIPassword");
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      
    var flag;
    if(userSIPassword.value.match(userSIPasswordFormate)){
        flag = false;
    }else{
        flag = true;
    }    
    if(flag){
        document.getElementById("userSIPasswordError").style.display = "block";
    }else{
        document.getElementById("userSIPasswordError").style.display = "none";
    }
}
// xxxxxxxxxx Check email or password exsist in firebase authentication xxxxxxxxxx    
function signIn(){
    var userSIEmail = document.getElementById("userSIEmail").value;
    var userSIPassword = document.getElementById("userSIPassword").value;
    var userSIEmailFormate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var userSIPasswordFormate = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/;      

    var checkUserEmailValid = userSIEmail.match(userSIEmailFormate);
    var checkUserPasswordValid = userSIPassword.match(userSIPasswordFormate);

    if(checkUserEmailValid == null){
        return checkUserSIEmail();
    }else if(checkUserPasswordValid == null){
        return checkUserSIPassword();
    }else{
        firebase.auth().signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
            swal({
                type: 'successful',
                title: 'Signed in', 
            }).then((value) => {
                setTimeout(function(){
                    window.location.replace("home.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                type: 'error',
                title: 'Incorrect Email/Password',
                text: "Please Check Your Email & Password",
            })
        });
    }
}

// xxxxxxxxxx Working For Profile Page xxxxxxxxxx
// xxxxxxxxxx Get data from server and show in the page xxxxxxxxxx
firebase.auth().onAuthStateChanged((user)=>{
        if (user) {
        //   User is signed in.
            let user = firebase.auth().currentUser;
            let uid
            if(user != null){
                uid = user.uid;
            }
            let firebaseRefKey = firebase.database().ref('/users').child(uid);
            firebaseRefKey.on('value', (dataSnapShot)=>{
                document.getElementById("userPfFullName").innerHTML = dataSnapShot.val().userFullName;
                // userEmail = dataSnapShot.val().userEmail;
                // userMatchPassword = dataSnapShot.val().userMatchPassword;
                document.getElementById("userPfPhone").innerHTML = dataSnapShot.val().userPhone;
                document.getElementById("userPfAddress").innerHTML = dataSnapShot.val().userAddress;
                document.getElementById("userPfPostalCode").innerHTML = dataSnapShot.val().userPostalCode;
            })
        } else {
        //   No user is signed in.
        }
    });

// xxxxxxxxxx Show edit profile form with detail xxxxxxxxxx
function showEditProfileForm(){
	window.location.replace("editmyprofile.html");
    var userPfFullName = document.getElementById("userPfFullName").innerHTML;
    var userPfPhone = document.getElementById("userPfPhone").innerHTML;
    var userPfAddress = document.getElementById("userPfAddress").innerHTML;
    var userPfPostalCode = document.getElementById("userPfPostalCode").innerHTML;

    document.getElementById("txtName").value = userPfFullName; 
    document.getElementById("txtPhone").value = userPfPhone; 
    document.getElementById("txtLocation").value = userPfAddress; 
    document.getElementById("txtPostal").value = userPfPostalCode; 
}

// xxxxxxxxxx Save profile and update database xxxxxxxxxx
function saveProfile(){
    let txtName = document.getElementById("txtName").value 
    let txtPhone = document.getElementById("txtPhone").value 
    let txtLocation = document.getElementById("txtLocation").value 
    let txtPostal = document.getElementById("txtPostal").value 
    var userFullNameFormate = /^([A-Za-z.\s_-])/; 
    var checkUserFullNameValid = txtName.match(userFullNameFormate);
    if(checkUserFullNameValid == null){
        return checkUserFullName();
    }else{
        let user = firebase.auth().currentUser;
        let uid;
        if(user != null){
            uid = user.uid;
        }
        var firebaseRef = firebase.database().ref('/users');
        var userData = {
            userFullName: txtName,  
            userPhone: txtPhone,
            userAddress: txtLocation,
            userPostalCode: txtPostal,
        }
        firebaseRef.child(uid).set(userData);
        swal({
            type: 'successful',
            title: 'Update successful',
            text: 'Profile updated.', 
        }).then((value) => {
                setTimeout(function(){
                    window.location.replace("editProfile.html");
                }, 1000)
            });
    }
}

// xxxxxxxxxx Working For Sign Out xxxxxxxxxx
function signOut(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        swal({
            type: 'successful',
            title: 'Signed Out', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("index.html");
            }, 1000)
        });
    }).catch(function(error) {
        // An error happened.
        let errorMessage = error.message;
        swal({
            type: 'error',
            title: 'Error',
            text: "Error",
        })
    });
}