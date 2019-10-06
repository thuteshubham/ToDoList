const nodeMailer = require('nodemailer');

let transporter = nodeMailer.createTransport({
    
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    service : 'Gmail',
    auth:{
        user: 'dummyShubham0994@gmail.com',
        pass: 'Dummy@12345'
    }
});

let mailOptions = {
    from: '"To-Do Application" dummyShubham0994@gmail.com',
    to: '',
    subject: '',
    html:''
};

let autoEmail = (reciever, message, subject) =>{

    mailOptions.to = reciever;

    mailOptions.html = message;

    mailOptions.subject = subject;

    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
        }else{
            console.log('Email Sent' + info.response);
        }
    });

}//end autoEmail

module.exports = {
    autoEmail: autoEmail
}