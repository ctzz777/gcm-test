var gcm = require('node-gcm');

// Set up the sender with your GCM/FCM API key (declare this once for multiple messages)
var sender = new gcm.Sender('AIzaSyCxUi6kTBVQ7pOumse-HVV2xpo2BaZt08k');

// Prepare a message to be sent
var message = new gcm.Message({
	data: { title: '感恩西父！',
			body: '讚嘆西父！' }
});

// Specify which registration IDs to deliver the message to
var regTokens = ['eIC9IpR1lXo:APA91bHf84XZOovELgVoJ9MmU9jRjpPYDTHLJ_0ZNhP41GDA-SA2zdfH6n7LM5kVOa4hyPbsSqd3_SSSjfo4bW7GtVUzZA5J2NDruZ1nBTwIWCDa5N8MLp7cOQrMZX1_PGVvs3LWS8uR'
    ,'cFDRd5_WvQU:APA91bEKlTU6hLw2w1bxJkSEE6lBaIC6OnNricJzeTMhikwRyy1qZT7DrMhlrE6y3WuLEq7JndKlJYCasf0N3zcLDIziYgOXAGM9AWJNSmSRvyM27aOfBTgx8t6CKAO-HymtcyasQHvj'];

// Actually send the message
sender.send(message, { registrationTokens: regTokens }, function (err, response) {
	if (err) console.error(err);
	else console.log(response);
});