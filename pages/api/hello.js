// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
const body = req.body;
const message = `
  Name: ${body.name}rn
  Email: ${body.email}rn
  Message: ${body.message}
`;
mail.send({
  to: 'to.bob202@wp.pl',
  from: 'from.${body.email}.com',
  subject: 'You have message from jrzepinski.com!',
  text: message,
  html: message.replace(/rn/g, '<br>'),
}).then(() => {
  res.status(200).json({ status: 'Ok' });
});



export default function handler(req, res) {
  res.status(200).json({ name: 'OK' })
}
console.log('body', body);