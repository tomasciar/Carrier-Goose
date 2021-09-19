require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);


client.messages
  .create({
    body: "Hi",
    from: "+12892015288",
    to: ""
  })
  .then((message) => console.log(message.sid));
