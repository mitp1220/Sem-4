var nm = require('nodemailer')
var trans = nm.createTransport({
    host: 'smtp.gmail.com',
    port:465,
    auth: {
        user: 'your-email@gmail.com',
        pass: " "
    }
});

var mailoption = {
    from: 'your-email@gmail.com',
    to: " ",
    subject: "Test Email",
    html:"Testing node mailer, <h1>Effect of h1</h1>"
};

trans.sendMail(mailoption,(error,info) => {
    if(error) {
        console.error(error)
    }
    else {
        console.log(info)
    }
});