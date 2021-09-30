const removeBtn = document.getElementById('removeBtn')

const database = firebase.database();
const db = firebase.firestore();
const usersRef =  database.ref('/users');

removeBtn.addEventListener('click', e => {
	e.stopPropagation();
	let user = firebase.auth().currentUser;
	let uid;
        	if(user != null){
            uid = user.uid;
		}
	 var adaRef = firebase.database().ref('users').child(uid);
		adaRef.remove();
		{
  swal({
            type: 'successful',
            title: 'Delete successful',
            text: 'Profile Deleted', 
        }).then((value) => {
                setTimeout(function(){
                    window.location.replace("editProfile.html");
                }, 1000)
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
});

