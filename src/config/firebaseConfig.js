import firebase from 'firebase'

export const config = {
  apiKey: "AIzaSyAOy9j0190BMbGG5PirU2a8-4mdbBTTTvo",
  authDomain: "wphuachipa.firebaseapp.com",
  databaseURL: "https://wphuachipa.firebaseio.com",
  projectId: "wphuachipa",
  storageBucket: "wphuachipa.appspot.com",
  messagingSenderId: "125263969340"
}

let app = firebase.initializeApp(config);
export const db = app.database()

// export function firebaseListener(func) {
// 	firebase.auth().onAuthStateChanged(function (user) {
// 	  if (user) {
// 	  	console.log("User log in success", user);
// 	    func(true, user)
// 	  } else {
// 	  	console.log("User log in failed", user);
// 	    func(false)
// 	  }
// 	}, function(error) {
// 	  console.log(error)
// 	});
// }

export const newsRef = db.ref('news');
export const categoryRef = db.ref('category');
// export const firebaseAuth = firebase.auth;