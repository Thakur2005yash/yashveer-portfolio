# 🚀 Quick Email Setup - 2 Minutes

## Option 1: EmailJS (Recommended)

1. **Create .env.local file** in project root:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_real_public_key
   VITE_EMAILJS_SERVICE_ID=your_real_service_id  
   VITE_EMAILJS_TEMPLATE_ID=your_real_template_id
   ```

2. **Get EmailJS credentials**:
   - Go to https://www.emailjs.com/
   - Add Gmail service connected to ayushpalworks@gmail.com
   - Create template with {{from_name}}, {{from_email}}, {{message}}
   - Copy your Service ID, Template ID, and Public Key

3. **Restart dev server**: `npm run dev`

## Option 2: Formspree (Easiest)

1. Sign up at https://formspree.io/
2. Create form linked to ayushpalworks@gmail.com
3. Replace form action with Formspree endpoint

## Testing

After setup, test the contact form. You should receive emails at ayushpalworks@gmail.com within seconds.

The form is already configured - just add your credentials!
