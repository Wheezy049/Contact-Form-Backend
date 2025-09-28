# Contact Form Backend

A simple backend for handling contact form submissions. Built with Node.js, Express, and Nodemailer. It validates user inputs and sends email notifications.

## Features

- Accepts name, email, and message from users

- Validates form inputs

- Sends email notifications to a configured recipient

- Returns proper error messages with HTTP status codes

## Technologies Used

- Node.js

- Express.js

- Nodemailer

- Validator.js

- dotenv

- HTML, JavaScript

## Installation
1. Clone the repository
```bash
git clone https://github.com/Wheezy049/Contact-Form-Backend
cd contactform
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file in the root directory:
```bash
PORT=8000
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_app_password
```
Note: If your Gmail account has 2FA enabled, generate an App Password and use it as EMAIL_PASS.

## Usage
1. Start the server
```bash
npm run start
```
or with nodemon for development:
```bash
npm run dev
```
2. Open the frontend
- Navigate to http://localhost:8000/ in your browser.

- Fill in the form and click Send.

3. Form submission workflow
- Inputs are validated on the backend.

- If valid, an email is sent to EMAIL_TO.

- The frontend shows success or error messages dynamically.

##  API Endpoint
POST /contact

1. Request Body (JSON):
```bash
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello!"
}
```
2. Responses:
- Success (200)
```bash
{
  "success": true,
  "message": "Message sent successfully!"
}
```
- Validation Error (400)
```bash
{
  "error": "Please enter a valid email"
}
```
- Server Error (500)
```bash
{
  "error": "Failed to send email. Please try again later."
}
```

## Notes

- Make sure .env values are correct.

- Gmail 2FA users must use an App Password.

- Invalid emails or empty fields return HTTP 400 errors.



✍️ Author 
dev_faruq