# Real EmailJS Setup for Yashveer Portfolio

The previous credentials were demo/invalid. Here's how to set up REAL email sending:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for free account

## Step 2: Add Email Service
1. Click "Email Services" → "Add New Service"
2. Choose "Gmail" (recommended)
3. Connect your yashveerworks@gmail.com
4. Allow permissions (this enables sending)

## Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Template content:
   ```
   From: {{from_name}} ({{from_email}})
   
   Message:
   {{message}}
   
   ---
   Sent from Ayush Pal Portfolio
   ```

## Step 4: Get Your Credentials
From EmailJS dashboard:
- Service ID (e.g., service_gmail123)
- Template ID (e.g., template_contact456)  
- Public Key (Account → API Keys)

## Step 5: Update Code
In `src/components/ContactModal.jsx`:

```js
// Uncomment the import
import emailjs from '@emailjs/browser';

// Replace the handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setStatus('idle');

  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',      // Replace with your Service ID
      'YOUR_TEMPLATE_ID',     // Replace with your Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'yashveerworks@gmail.com'
      },
      'YOUR_PUBLIC_KEY'       // Replace with your Public Key
    );
    
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => {
      onClose();
      setStatus('idle');
    }, 1200);
  } catch (error) {
    console.error('EmailJS error:', error);
    setStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

## Testing
After setup, test the form. You should receive emails at yashveerworks@gmail.com within seconds.

## Alternative: Formspree (Easier)
If EmailJS is complex, try Formspree:
1. Sign up at https://formspree.io/
2. Create form linked to yashveerworks@gmail.com
3. Replace form action with Formspree endpoint
