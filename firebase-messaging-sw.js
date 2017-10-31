importScripts('https://www.gstatic.com/firebasejs/4.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.0/firebase-messaging.js');
importScripts('https://www.gstatic.com/firebasejs/4.6.0/firebase.js');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDxnbMoT_27KhF4_cWjolyscfmFNJZ04mo",
    authDomain: "gcm-test-bada7.firebaseapp.com",
    databaseURL: "https://gcm-test-bada7.firebaseio.com",
    projectId: "gcm-test-bada7",
    storageBucket: "gcm-test-bada7.appspot.com",
    messagingSenderId: "851465378036"
  };
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
console.log('[firebase-messaging-sw.js] Received background message ', payload);
// Customize notification here
const notificationTitle = payload.data.title;
const notificationOptions = {
    body: payload.data.body,
    icon: 'favicon.ico'
};

return self.registration.showNotification(notificationTitle,
    notificationOptions);
});