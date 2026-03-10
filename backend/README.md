# Telente Backend (Node.js + MySQL)

## Setup

1. Create the database and tables:
   - Open `backend/sql/schema.sql` in phpMyAdmin or MySQL client and run it.

2. Update environment variables:
   - Edit `backend/.env` with your AMPPs MySQL credentials.

3. Install dependencies:
   - `npm install` (run inside the `backend` folder)

4. Seed the admin user:
   - `npm run seed` (run inside the `backend` folder)

5. Start the API:
   - `npm run dev` (or `npm start`)

## Default Admin

These defaults are set in `backend/.env` and can be changed:

- `DEFAULT_ADMIN_EMAIL=admin@telente.local`
- `DEFAULT_ADMIN_USER=admin`
- `DEFAULT_ADMIN_PASS=admin123`

## API Base

The API will run on `http://localhost:3000/api`.

## Auth Flow (Email + OTP)

1. `POST /api/auth/login` with `{ "email": "...", "password": "..." }`
2. `POST /api/auth/verify-otp` with `{ "otpId": "...", "code": "123456" }`

Configure SMTP in `backend/.env` to deliver OTPs.
