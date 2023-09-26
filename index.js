const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    service: 'Outlook',
    auth: {
        user:'jeya.t@datayaan.com',
        pass:'Riyan@2709'
      }
});

const mailSend = {
    from:'jeya.t@datayaan.com',
    to:'abiginoberly.d@datayaan.com',
    subject:'Hello from nodejs',
    text:'This is the text to confirm the text from nodejs'
}

transport.sendMail(mailSend,(error,info)=>{
    if(error){
        console.log('error has occured while sending the mail : ',error);
    } else{
        console.log("Email sent successfully! : ",info.response);
    }
})