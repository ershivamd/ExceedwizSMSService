const accountSid = "AC277d8052c3c6379399c938590605a36f"; 
const authToken = "8c2d4363c15a4e81262392439a24a2c1"; 

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Node",
    to: "+91727576992", 
    from: "+12028164979" 
  })
  .then((message) => console.log(message.sid));