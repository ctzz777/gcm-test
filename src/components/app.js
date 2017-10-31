import React, { Component } from 'react';
import firebase from 'firebase';

export default class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyDxnbMoT_27KhF4_cWjolyscfmFNJZ04mo",
      authDomain: "gcm-test-bada7.firebaseapp.com",
      databaseURL: "https://gcm-test-bada7.firebaseio.com",
      projectId: "gcm-test-bada7",
      storageBucket: "gcm-test-bada7.appspot.com",
      messagingSenderId: "851465378036"
    };
    firebase.initializeApp(config);
    var messaging = firebase.messaging();
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/firebase-messaging-sw.js')
        .then((registration) => {
          messaging.useServiceWorker(registration);
        })
        .then(() => {
          messaging.requestPermission()
            .then(function() {
              console.log('Notification permission granted.');
              return messaging.getToken();
            })
            .then(function(token) {
              console.log(token);
            })
            .catch(function(err) {
              console.log('Unable to get permission to notify.', err);
            });
        });
      }
  }
  render() {
    return (
      <div>React simple starter</div>
    );
  }
}
