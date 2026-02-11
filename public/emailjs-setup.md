# EmailJS Setup for Ayush Pal Portfolio

## Quick Setup (5 minutes)

1. **Sign up** at https://www.emailjs.com/
2. **Add Email Service**: Gmail recommended (connect your yashveerworks@gmail.com)
3. **Create Email Template**:
   - From name: {{from_name}}
   - From email: {{from_email}}
   - Message: {{message}}
   - To email: yashveerworks@gmail.com
4. **Get your IDs**:
   - Service ID (e.g., service_abc123)
   - Template ID (e.g., template_xyz789)
   - Public Key (from Account > API Keys)

5. **Update the code** in `src/components/ContactModal.jsx`:
   ```js
   await emailjs.send(
     'YOUR_SERVICE_ID',        // Replace with your Service ID
     'YOUR_TEMPLATE_ID',       // Replace with your Template ID
     {
       from_name: formData.name,
       from_email: formData.email,
       message: formData.message,
      to_email: 'yashveerworks@gmail.com'
     },
     'YOUR_PUBLIC_KEY'         // Replace with your Public Key
   );
   ```

That's it! All form submissions will go to yashveerworks@gmail.com.
