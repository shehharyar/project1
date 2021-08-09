let faceBook_Login = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // The signed-in user info.
            var user = result.user;

            console.log("user--->", user)
                // ...
        })
        .catch((error) => {
            // Handle Errors here.
            console.log(error.message);
        });
}