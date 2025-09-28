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