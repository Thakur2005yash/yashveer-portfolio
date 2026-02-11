# EmailJS Setup Instructions

1. Sign up at https://www.emailjs.com/
2. Create an Email Service (Gmail recommended)
3. Create an Email Template with variables: {{name}}, {{email}}, {{message}}
4. Get your:
   - Public Key
   - Service ID
   - Template ID
5. Update public/emailjs-config.js with your IDs
6. Install EmailJS SDK:
   ```bash
   npm install @emailjs/browser
   ```
7. In src/components/ContactModal.jsx, replace the TODO with:
   ```js
   import emailjs from '@emailjs/browser';
   // In handleSubmit:
   await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY');
   ```

All form submissions will be sent to yashveerworks@gmail.com.
