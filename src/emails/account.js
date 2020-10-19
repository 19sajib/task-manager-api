const mailjet = require ('node-mailjet')
.connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE, {
    url: 'api.mailjet.com', // default is the API url
    version: 'v3.1', // default is '/v3'
    perform_api_call: true // used for tests. default is true
  });

const sendWelcomeEmail = (email, name) => {

    const request = mailjet
.post("send")
.request({
  "Messages":[
    {
      "From": {
        "Email": "support@sajibltd.com",
        "Name": "Abu"
      },
      "To": [
        {
          "Email": email,
          "Name": name
        }
      ],
      "Subject": "Thanks for joining me",
      "TextPart": `Hi, ${name}. Welcome to Sajib's Task App.`,
      "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      "CustomID": "AppGettingStartedTest"
    }
  ]
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

}

const sendCancelationEmail = (email, name) => {

    const request = mailjet
.post("send")
.request({
  "Messages":[
    {
      "From": {
        "Email": "support@sajibltd.com",
        "Name": "Abu"
      },
      "To": [
        {
          "Email": email,
          "Name": name
        }
      ],
      "Subject": "Sorry to see you go",
      "TextPart": `Good Bye, ${name}.`,
    }
  ]
})
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
