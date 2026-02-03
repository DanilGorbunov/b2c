# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account (danilgorbunov@gmail.com)
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

### Template Settings:
- **Template Name**: Contact Form
- **Template ID**: template_contact

### Template Content:
```
Subject: New Contact Form Submission - {{from_name}}

Hello Danil,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
Project Type: {{project_type}}

Message:
{{message}}

---
Reply directly to this email to respond to {{from_name}}.
```

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key** in the API Keys section

## Step 5: Update Contact Form
Replace these values in `app/contact/page.tsx`:

```javascript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'template_contact';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

## Step 6: Test the Form
1. Fill out the contact form on your website
2. Submit it
3. Check your email (danilgorbunov@gmail.com) for the message

## Free Tier Limits:
- 200 emails per month
- Perfect for portfolio contact forms

## Security Note:
The public key is safe to use in client-side code. EmailJS handles the security on their end.
