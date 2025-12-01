// email.js
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'your_service_id';
const TEMPLATE_ID = 'your_template_id';
const PUBLIC_KEY = 'your_public_key';

export default function sendEmail({ name, email, usertype, message, rating }) {
  const templateParams = {
    from_name: name || 'Anonymous',
    from_email: email || 'no-email@example.com',
    user_type: usertype,
    feedback: message,
    rating: rating,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
}